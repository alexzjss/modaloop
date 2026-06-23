import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Em GitHub Pages de projeto, os arquivos são servidos em /<nome-do-repositório>/.
// Ajuste "clothing" caso o repositório seja renomeado.
export default defineConfig({
  base: '/clothing/',
  plugins: [react()],
})
