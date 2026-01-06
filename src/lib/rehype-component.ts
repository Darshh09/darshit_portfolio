import fs from 'node:fs';
import path from 'node:path';

import { u } from 'unist-builder';
import { visit } from 'unist-util-visit';

import type { UnistNode, UnistTree } from '@/types/unist';

type RegistryEntry = {
  files: Array<
    | string
    | {
        path?: string;
      }
  >;
};

// Dynamic import for registry - will be available after build
let Index: Record<string, RegistryEntry> = {};
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  Index = (require('@/__registry__/index') as { Index?: Record<string, RegistryEntry> }).Index || {};
} catch {
  // Registry not built yet
}

export function rehypeComponent() {
  // Thanks @shadcn/ui
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      // src prop overrides both name and fileName.
      const { value: srcPath } =
        (getNodeAttributeByName(node, 'src') as {
          name: string;
          value?: string;
          type?: string;
        }) || {};

      if (node.name === 'ComponentSource') {
        const name = getNodeAttributeByName(node, 'name')?.value as string;
        const fileName = getNodeAttributeByName(node, 'fileName')?.value as
          | string
          | undefined;

        if (!name && !srcPath) {
          return null;
        }

        try {
          let src: string | undefined;

          if (srcPath) {
            src = path.join(process.cwd(), srcPath);
          } else {
            const component = Index[name];
            if (!component) return;
            const files = component.files || [];
            const matchedFile =
              fileName &&
              files.find((file) => {
                  if (typeof file === 'string') {
                    return (
                      file.endsWith(`${fileName}.tsx`) ||
                      file.endsWith(`${fileName}.ts`)
                    );
                  }
                return (
                  file.path?.endsWith(`${fileName}.tsx`) ||
                  file.path?.endsWith(`${fileName}.ts`)
                );
              });

            const firstPath =
              typeof files[0] === 'string' ? files[0] : files[0]?.path;

            src = (typeof matchedFile === 'string'
              ? matchedFile
              : matchedFile?.path) || firstPath;
          }

          // Read the source file.
          if (!src) return;

          let filePath: string;
          if (path.isAbsolute(src) || src.startsWith(process.cwd())) {
            filePath = src;
          } else if (src.startsWith('src/')) {
            // Path already includes src/, just make it absolute
            filePath = path.join(process.cwd(), src);
          } else {
            // Relative path from registry root
            filePath = path.join(process.cwd(), 'src/registry', src);
          }
          let source = fs.readFileSync(filePath, 'utf8');

          // Replace imports.
          source = source.replaceAll(`@/registry/`, '@/components/');
          source = source.replaceAll('export default', 'export');

          const title = getNodeAttributeByName(node, 'title');
          const showLineNumbers = getNodeAttributeByName(
            node,
            'showLineNumbers'
          );

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u('element', {
              tagName: 'pre',
              properties: {},
              children: [
                u('element', {
                  tagName: 'code',
                  properties: {
                    className: [`language-${path.extname(filePath).slice(1)}`],
                  },
                  data: {
                    meta: [
                      title ? `title="${title.value}"` : '',
                      showLineNumbers ? 'showLineNumbers' : '',
                    ].join(' '),
                  },
                  children: [
                    {
                      type: 'text',
                      value: source,
                    },
                  ],
                }),
              ],
            })
          );
        } catch (error) {
          console.error(error);
        }
      }

      if (node.name === 'ComponentPreview') {
        const name = getNodeAttributeByName(node, 'name')?.value as string;

        if (!name) {
          return null;
        }

        try {
          const component = Index[name];
          if (!component) return;
          const firstFile = component.files?.[0];
          if (!firstFile) return;

          const src =
            typeof firstFile === 'string' ? firstFile : firstFile.path || '';
          if (!src) return;

          // Read the source file.
          let filePath: string;
          if (path.isAbsolute(src) || src.startsWith(process.cwd())) {
            filePath = src;
          } else if (src.startsWith('src/')) {
            // Path already includes src/, just make it absolute
            filePath = path.join(process.cwd(), src);
          } else {
            // Relative path from registry root
            filePath = path.join(process.cwd(), 'src/registry', src);
          }
          let source = fs.readFileSync(filePath, 'utf8');

          // Replace imports.
          source = source.replaceAll(`@/registry/`, '@/components/');
          source = source.replaceAll('export default', 'export');

          const codeMeta = getNodeAttributeByName(node, 'data-code-meta');

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u('element', {
              tagName: 'pre',
              properties: {},
              children: [
                u('element', {
                  tagName: 'code',
                  properties: {
                    className: ['language-tsx'],
                  },
                  data: {
                    meta: ['showLineNumbers']
                      .concat(codeMeta ? [codeMeta.value as string] : [])
                      .join(' '),
                  },
                  children: [
                    {
                      type: 'text',
                      value: source,
                    },
                  ],
                }),
              ],
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

