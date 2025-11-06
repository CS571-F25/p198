import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
plugins: [react()],
base: '/p198-Matchbites/',
build: {
outDir: 'docs'
}
})