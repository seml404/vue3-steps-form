declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module '*.svg?inline' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const vars: Record<string, string>;
  export default vars;
}
