/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NAVER_CLOUD_PLATFORM_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
