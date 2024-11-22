# Issue using PostCSS plugins with Tailwind 4 as of 4.0.0-alpha.34

See https://github.com/tailwindlabs/tailwindcss/issues/14973#issuecomment-2480498783 for discussion.

## Reproduction 

1. Clone this repo
2. Install dependency with your package manager (e.g `pnpm install`)
3. Run `dev` script (e.g `pnpm dev`), inspect browser and observe the **correct** output from TailwindCSS
4. Run `build` followed by `preview` script, inspect browser and observe the **incorrect** output from TailwindCSS

The affected code is at [src/style.css](src/style.css).

Expected output: Postcss plugins should also be applied after production build

Actual output: Postcss plugins are not applied after production build, only applied during dev

> [!NOTE]
> See [vite.config.ts](vite.config.ts) for the TailwindCSS & PostCSS configuration

Similar issues were observed for [postcss-custom-selectors](https://www.npmjs.com/package/postcss-custom-selectors) and [postcss-custom-media](https://www.npmjs.com/package/postcss-custom-media).

## Additional Problem

When using `postcss-mixins`, the mixin is **NOT** available within the `@utlity` scope unless directly imported or declared within it. For example, the below code does not work...

```css
@define-mixin A { /* */ }

@utility a {
    @mixin A; /* yield mixin-not-defined error */
}
```

...while the following does:

```css
@utility b {
    @define-mixin B { /* */ }
    /* or @import 'mixins/B.css' */

    @mixin B;
}
```

