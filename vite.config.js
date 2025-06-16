import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html';
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
     createHtmlPlugin({
      inject: {
        data: {
          title: 'Default Title',
          description: 'Default Description',
        },
      },
    }),
  ],
  
})
