import { defineConfig, loadEnv } from "vite";
import { VitePWA } from 'vite-plugin-pwa'
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const env = loadEnv("mock", process.cwd(), "");
  const processEnvValues = {
    "process.env": Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ["favicon.ico", "apple-touch-ico.png"],
        injectRegister: 'auto'
      })
    ],
    define: {
      ...processEnvValues,
    },
  };
});
