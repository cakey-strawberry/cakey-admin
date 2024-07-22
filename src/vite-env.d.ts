/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NAVER_CLOUD_PLATFORM_CLIENT_ID: string;
  readonly VITE_API_URL: string;
  readonly VITE_ADMIN_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
