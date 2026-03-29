import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import pdf from 'astro-pdf';
import icon from 'astro-icon';

const pdfEnabled = process.env.GENERATE_PDF === 'true';
const pdfLaunch = process.env.GITHUB_ACTIONS === 'true'
  ? {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
  : undefined;

const integrations = [
  tailwind(),
  mdx(),
  icon(),
];

if (pdfEnabled) {
  integrations.push(
    pdf({
      launch: pdfLaunch,
      pages: {
        '/print': {
          path: 'TheVibeCodersHandbook.pdf',
          waitForTimeout: 3000, // Wait for fonts to load
          pdf: {
            format: 'A4',
            printBackground: true,
            margin: {
              top: '18mm',
              right: '16mm',
              bottom: '18mm',
              left: '16mm',
            },
            displayHeaderFooter: true,
            headerTemplate: `
              <div style="font-family: 'Courier New', monospace; font-size: 8px; color: #999; width: 100%; text-align: center; padding-top: 6px;">
                The Vibe Coder's Handbook — March 2026 Edition
              </div>
            `,
            footerTemplate: `
              <div style="font-family: 'Courier New', monospace; font-size: 8px; color: #999; width: 100%; text-align: center; padding-bottom: 6px;">
                Page <span class="pageNumber"></span> of <span class="totalPages"></span>
                &nbsp;·&nbsp; vibecodershandbook.pages.dev
              </div>
            `,
          },
        },
      },
    })
  );
}

export default defineConfig({
  site: 'https://vibecodershandbook.pages.dev',
  integrations,
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
    assets: '_assets',
  },
});
