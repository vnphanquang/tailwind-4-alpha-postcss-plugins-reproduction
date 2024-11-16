import { defineConfig } from "vite";
import postcssMixins from "postcss-mixins";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  css: {
    transformer: "postcss",
    postcss: {
      plugins: [postcssMixins()],
    },
  },
  plugins: [tailwindcss()],
});
