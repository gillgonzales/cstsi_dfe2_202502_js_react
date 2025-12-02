import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
w            input: ['resources/js/client/main.jsx'],
            refresh: true,
        }),
        react()
    ],
});
