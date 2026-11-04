// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // User site repo (DinmaJJ/dinmajj.github.io), so no base path.
  site: 'https://dinmajj.github.io',
  server: { port: 4391 },
  devToolbar: { enabled: false },
});
