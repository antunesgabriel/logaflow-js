/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STATIC_URL: string;
  readonly VITE_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
