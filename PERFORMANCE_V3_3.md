# DSM Studio V3.3 — Performance Edition

Changes relative to uploaded salguera_studio.zip:

- Disabled the three *continuously moving* oversized blurred background layers. Their colors, placement and blur are preserved; removing constant movement reduces compositor work, especially without GPU acceleration.
- Disabled backdrop-filter on major cards for touch and reduced-motion devices, while keeping the card colors, gradients, borders and shadows.
- Converted the three featured project screenshots from PNG to optimized WebP, updating both the homepage and /projects references. Image content remains the same.
- Left all project URLs, navigation, section order and layout intact.

This is a code-level optimization, not a measured Chrome FPS or Lighthouse result. Validate on Chrome with GPU acceleration disabled and compare screenshots before deploying.

Run `npm ci`, `npm run build`, then `npm run start`.
