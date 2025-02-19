import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // 追加: コンテナ外からのアクセスを許可
    port: 5137,       // 追加: 3000番ポートで起動
    strictPort: true,  // 追加: ポートが使われていないか確認
    watch: {
      usePolling: true, // 追加: ホットリロードのための監視方法を変更
    }
  }
})
