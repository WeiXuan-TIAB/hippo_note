import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon', // 前綴
        }),
      ],
    }),
    Icons(),
  ],
  base: '/TIAB_project/hippo_note/',
})


