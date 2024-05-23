import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://4lch4.com',
  integrations: [mdx(), sitemap()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
})
