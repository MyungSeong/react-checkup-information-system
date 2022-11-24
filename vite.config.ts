import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';
import checkerPlugin from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
            },
        }),
        tsConfigPaths(),
        checkerPlugin({
            typescript: true,
            eslint: { lintCommand: 'eslint --ext .js,.jsx,.ts,.tsx .' },
        }),
    ],
});
