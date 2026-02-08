# ENKRYX Website

A complete, production-ready website for the startup **ENKRYX**, built with Next.js 16, Tailwind CSS 4, and curated for maximum performance and professional aesthetics.

## Features

- **Next.js 16 + App Router**: Latest stable framework features.
- **Tailwind CSS 4**: Modern, high-performance styling.
- **Responsive Design**: Mobile-first approach for all devices.
- **SEO Optimized**: Dynamic `sitemap.xml`, `robots.txt`, and comprehensive metadata.
- **Third-Party Integrations**:
  - **EmailJS**: Seamless contact form handling.
  - **WhatsApp**: Direct click-to-chat integration.
  - **Tawk.to**: Live chat widget.
- **Data-Driven**: Easily update projects, services, and team via `src/data/siteData.json`.

## Quick Start

1.  **Extract the project**: Ensure all files are in your development directory.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run locally**:
    ```bash
    npm run dev
    ```
4.  **Visit**: [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

1.  Push your code to a GitHub repository.
2.  Import the project in [Vercel](https://vercel.com).
3.  Add the following **Environment Variables**:
    - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
    - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
    - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
    - `NEXT_PUBLIC_TAWK_PROPERTY_ID`
    - `NEXT_PUBLIC_TAWK_WIDGET_ID`
    - `NEXT_PUBLIC_WHATSAPP_NUMBER` (Include country code, e.g., `1234567890`)
4.  Click **Deploy**.

## Configuration & Customization

### Updating Content
Edit `src/data/siteData.json` to modify:
- **Services**: Description, timeline, and icons.
- **Portfolio**: Projects, summaries, and details.
- **Team**: Members, roles, and bios.
- **Testimonials**: Quotes and authors.

### Replacing Images
Place your optimized images in `/public/images/`:
- **Logo**: `logo.webp` (Update `Header.tsx` if name differs).
- **Team**: `team1.webp`, `team2.webp`, etc.
- **Portfolio**: `portfolio1.webp`, `portfolio2.webp`, etc.
*Note: Recommended format is WebP. Hero images should be max 1600px wide, team photos 300x300px.*

### Tawk.to Setup
Update `src/components/TawkToWidget.tsx` with your Property and Widget IDs or use the environment variables mentioned above.

## Verification Checklist

- [ ] **Form Submission**: Test the contact form and verify EmailJS receives the message.
- [ ] **WhatsApp Link**: Ensure the WhatsApp button opens correctly.
- [ ] **Live Chat**: Confirm the Tawk.to widget appears on all pages.
- [ ] **Responsiveness**: Check mobile, tablet, and desktop views.
- [ ] **Performance**: Run Lighthouse; target score > 85 on mobile.

## Built by Antigravity — ENKRYX Software & Web Solutions
