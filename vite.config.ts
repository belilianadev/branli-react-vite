import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: "antd",
          libDirectory: "es",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#0D5E72",
          "@font-size-base": "16px",
          "@layout-header-background": "#94D7C6",
          "@menu-bg": "#94D7C6",
          // "@layout-sider-background-light": "red",
          /*  "@font-family": "Roboto",
          "@menu-dark-highlight-color": "#94D7C6", // azul fuerte
          "@menu-item-color": "#0D5E72", // azul fuerte LETRA DEL MENU
          "@menu-bg": "white", // azul claro
          "@menu-dark-item-active-bg": "pink", // azul fuerte @menu-dark-item-active-bg
          "@menu-dark-item-hover-bg": "red", */
        },
      },
    },
  },
});
