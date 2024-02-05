import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
module.exports = {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.startsWith('post') // (return true)
          }
        }
      }
    })
  ],
}