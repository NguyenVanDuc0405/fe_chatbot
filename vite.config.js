import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true, // Tự động mở trình duyệt khi chạy Vite
    hmr: true, // Hỗ trợ Hot Module Replacement (HMR)
    watch: {
      usePolling: true, // Để theo dõi thay đổi tệp (có thể hữu ích khi dùng Docker)
    }
  },
  esbuild: {
    // Cấu hình cho lỗi chi tiết hơn
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  plugins: [react()]
})
