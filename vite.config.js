// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     open: true,
//     hmr: true,
//     watch: {
//       usePolling: true,
//     }
//   },
//   esbuild: {
//     jsxFactory: 'React.createElement',
//     jsxFragment: 'React.Fragment',
//   },
//   plugins: [react()]
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})