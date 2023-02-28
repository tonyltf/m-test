/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_PATH: string;
  readonly VITE_API_KEY: string;
  readonly VITE_MAP_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
