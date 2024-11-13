import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import playformCompress from '@playform/compress';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://comet-cdn.netlify.app/',
  integrations: [starlight({
      title: 'Comet CDN',
      social: {
          github: 'https://github.com/cometcdn/comet',
      },
      sidebar: [
          {
              label: 'Guides',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Example Guide', slug: 'guides/example' },
              ],
          },
          {
              label: 'Reference',
              autogenerate: { directory: 'reference' },
          },
      ],
      }), playformCompress()],

  output: 'server',
  adapter: netlify(),
});