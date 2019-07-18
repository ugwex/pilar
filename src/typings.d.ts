// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html
/* SystemJS module definition */

declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare var tinymce: any;
declare var PR: any;
declare module "*.json" {
  const value: any;
  export default value;
}
