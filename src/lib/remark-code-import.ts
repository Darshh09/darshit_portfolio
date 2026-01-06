// This is the source code of the "remark-code-import" library,
// customized to fit the project.

import fs from 'node:fs';
import { EOL } from 'node:os';
import path from 'node:path';

import stripIndent from 'strip-indent';
import { visit } from 'unist-util-visit';

function extractLines(
  content: string,
  fromLine: number | undefined,
  hasDash: boolean,
  toLine: number | undefined,
  preserveTrailingNewline = false
) {
  const lines = content.split(EOL);
  const start = fromLine || 1;

  let end: number;
  if (!hasDash) {
    end = start;
  } else if (toLine) {
    end = toLine;
  } else if (lines[lines.length - 1] === '' && !preserveTrailingNewline) {
    end = lines.length - 1;
  } else {
    end = lines.length;
  }

  return lines.slice(start - 1, end).join('\n');
}

type RemarkCodeImportOptions = {
  rootDir?: string;
  preserveTrailingNewline?: boolean;
  removeRedundantIndentations?: boolean;
};

export function remarkCodeImport(options: RemarkCodeImportOptions = {}) {
  // Default rootDir is the "src" directory in the current working directory
  const rootDir = options.rootDir || path.join(process.cwd(), 'src');

  if (!path.isAbsolute(rootDir)) {
    throw new Error(`"rootDir" has to be an absolute path`);
  }

  return function transformer(tree: unknown, file: unknown) {
    const codes: Array<[unknown, number, unknown]> = [];

    visit(
      tree as never,
      'code',
      (node: unknown, index: number, parent: unknown) => {
        codes.push([node, index, parent]);
      }
    );

    for (const [rawNode] of codes) {
      const node = rawNode as {
        meta?: string;
        value?: string;
      };

      const fileMeta = (node.meta || '')
        // Allow escaping spaces
        .split(/(?<!\\) /g)
        .find((meta: string) => meta.startsWith('file='));

      if (!fileMeta) {
        continue;
      }

      const res =
        /^file=(.+?)(?:(?:#(?:L(\d+)(-)?)?)(?:L(\d+))?)?$/.exec(fileMeta);

      if (!res || !res[1]) {
        throw new Error(`Unable to parse file path ${fileMeta}`);
      }

      const filePath = res[1];

      const fromLine = res[2] ? parseInt(res[2], 10) : undefined;

      const hasDash = !!res[3] || fromLine === undefined;

      const toLine = res[4] ? parseInt(res[4], 10) : undefined;

      const normalizedFilePath = filePath
        .replace(/^@/, rootDir)
        .replace(/\\ /g, ' ');

      const vfile = file as { dirname?: string; path?: string };
      const fileDirname =
        vfile.dirname || (vfile.path ? path.dirname(vfile.path) : rootDir);

      const fileAbsPath = path.resolve(fileDirname, normalizedFilePath);

      const relativePathFromRootDir = path.relative(rootDir, fileAbsPath);

      if (
        !rootDir ||
        relativePathFromRootDir.startsWith(`..${path.sep}`) ||
        path.isAbsolute(relativePathFromRootDir)
      ) {
        throw new Error(
          `Attempted to import code from "${fileAbsPath}", which is outside from the rootDir "${rootDir}"`
        );
      }

      const fileContent = fs.readFileSync(fileAbsPath, 'utf8');

      node.value = extractLines(
        fileContent,
        fromLine,
        hasDash,
        toLine,
        options.preserveTrailingNewline
      );

      if (options.removeRedundantIndentations) {
        node.value = stripIndent(node.value);
      }
    }
  };
}

