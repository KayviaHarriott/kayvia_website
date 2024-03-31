import { defineConfig } from 'vite';
import svgr from "@svgr/rollup";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),  svgr()
  ]
});
