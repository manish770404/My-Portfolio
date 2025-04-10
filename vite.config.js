import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Add JSON support
// import json from '@rollup/plugin-json'

export default defineConfig({
  plugins: [
    tailwindcss(),
    // json(), // Include JSON plugin for proper JSON imports
  ],
})
