# Reproduction: Tailwind v4 & Custom At-Rule in Build

Version: Tailwind v4 as of 4.0.0-beta.2

## Reproduction 

1. Clone this repo
2. Install dependencies with your package manager (e.g `pnpm install`)
3. Run `dev` script (e.g `pnpm dev`), inspect browser and observe the **correct** output from TailwindCSS
4. Run `build` followed by `preview` script, inspect browser and observe the **incorrect** output from TailwindCSS

The affected code is at [src/style.css](src/style.css).

Expected output: @mixin is correctly resolved and applied to `.test`. In preview site, green box should be shown.

Actual output: @mixin is not correctly resolved. In preview site, red box is shown instead.

> [!NOTE]
> See [vite.config.ts](vite.config.ts) for the TailwindCSS & PostCSS configuration

