export const registryConfig = {
  /**
   * Registry namespace identifier for shadcn CLI
   * @example "@darx" - Users can install components with: `npx shadcn add @darx/magic-genie-tabs`
   * @see https://ui.shadcn.com/docs/registry/namespace#overview
   */
  namespace: "@darx",
  /**
   * URL pattern for resolving namespaced components
   * The {name} placeholder will be replaced with the component name
   * @example "https://darx.in/r/{name}.json" resolves to "https://darx.in/r/magic-genie-tabs.json"
   * This tells shadcn CLI where to fetch component definitions when installing with namespace prefix
   * @see https://ui.shadcn.com/docs/registry/namespace#url-pattern-system
   */
  namespaceUrl: "https://darshitdev.in/r/{name}.json",
};
