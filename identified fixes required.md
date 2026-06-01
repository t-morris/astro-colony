# Identified Fixes Required

Code review findings for the Astro Colony theme. Issues are grouped by severity.

---

## Critical / Breaking

### 1. Contact form submit button is an `<a>` tag
**File:** `src/pages/contact.astro:167`

The "Send Message" button is an anchor element, not a submit button. Clicking it navigates to an empty URL instead of submitting the form.

```html
<!-- Current (broken) -->
<a href="" class="bgButton">

<!-- Fix -->
<button type="submit" class="bgButton">
```

---

### 2. Blog index silently drops the second post
**File:** `src/pages/blog/index.astro:26,44`

The featured post uses `posts.slice(0,1)` and the remainder uses `posts.slice(2)`, meaning `posts[1]` (the second-newest post) is never rendered.

```js
// Current
posts.slice(0,1).map(...)  // post[0] only
posts.slice(2).map(...)    // skips post[1]

// Fix
posts.slice(0,1).map(...)
posts.slice(1).map(...)    // or slice(2) intentionally — but document it
```

---

### 3. `getEntryBySlug` removed in Astro 5
**Files:** `src/components/GeneralBand.astro:2`, `src/components/CentralBand.astro:5`

`getEntryBySlug` was deprecated in Astro 4 and removed in Astro 5. `HeroBand.astro` already uses the correct replacement.

```ts
// Current (broken)
import { getEntryBySlug, render } from "astro:content";
const thisBand = await getEntryBySlug("front", slug);

// Fix
import { getEntry, render } from "astro:content";
const thisBand = await getEntry("front", slug);
```

---

### 4. `front` collection is missing a `loader`
**File:** `src/content.config.ts:18-27`

The `blog`, `store`, and `portfolio` collections all define a `glob()` loader, but `front` does not. This will fail or behave unexpectedly under Astro 5's content layer.

```ts
// Current (missing loader)
const front = defineCollection({
  schema: z.object({ ... }),
});

// Fix
const front = defineCollection({
  loader: glob({ base: './src/content/front', pattern: '**/*.{md,mdx}' }),
  schema: z.object({ ... }),
});
```

---

### 5. `productImageSix` renders the wrong image
**File:** `src/layouts/PortfolioWork.astro:61`

The sixth gallery thumbnail uses `productImageFive` as its `src` instead of `productImageSix`.

```html
<!-- Current (wrong src) -->
{productImageSix && <a ... data-image={productImageSix}>
    <img src={productImageFive} />

<!-- Fix -->
{productImageSix && <a ... data-image={productImageSix}>
    <img src={productImageSix} />
```

---

## Moderate

### 6. `astro-icon` listed under `devDependencies`
**File:** `package.json:26`

`astro-icon` is used throughout the theme at runtime and should be in `dependencies`, not `devDependencies`. Some deployment environments prune dev dependencies for production builds.

---

### 7. Wrong collection type on `PortfolioWork.astro`
**File:** `src/layouts/PortfolioWork.astro:10`

```ts
// Current (wrong)
type Props = CollectionEntry<'store'>['data'];

// Fix
type Props = CollectionEntry<'portfolio'>['data'];
```

---

### 8. Icon config excludes non-solar icon packs
**File:** `astro.config.mjs:11`

The `icon` integration is configured to only include `solar`, but the theme also uses `material-symbols`, `mdi`, and `simple-icons`.

```js
// Current (restrictive)
icon({ include: { solar: ["*"] } })

// Fix — include all used packs, or remove the restriction entirely
icon({
  include: {
    solar: ["*"],
    "material-symbols": ["*"],
    mdi: ["*"],
    "simple-icons": ["*"],
  }
})
```

---

### 9. `contact.astro` passes no `description` to `<BaseHead>`
**File:** `src/pages/contact.astro:14`

`description` is defined as a required prop in `BaseHead`'s interface but is not passed here, leaving the meta description tag empty.

```astro
<!-- Current -->
<BaseHead title="Contact Us" />

<!-- Fix -->
<BaseHead title="Contact Us" description="Get in touch with us." />
```

---

## Minor

### 10. Debug class name left in production code
**File:** `src/layouts/PortfolioWork.astro:56-61`

```html
<div class="blarg">  <!-- placeholder/debug class with no styles -->
```

Replace with a meaningful class name or remove.

---

### 11. HTML attribute double-quote typo
**File:** `src/layouts/PortfolioWork.astro:38`

```html
<!-- Current (malformed) -->
<div class="flex mt-0 border-t-[1px] border-neutral-300"">

<!-- Fix -->
<div class="flex mt-0 border-t-[1px] border-neutral-300">
```

---

### 12. Redundant `global.css` imports in components
**Files:** `src/components/HeroBand.astro:2`, `src/components/CentralBand.astro:2`, `src/components/ColourPalette.astro:3`, `src/layouts/BlogPost.astro:7`

`BaseHead.astro` already imports `global.css` on every page. These per-component imports are redundant and can be removed.

---

## Summary

| # | Severity | File | Description |
|---|---|---|---|
| 1 | Critical | `pages/contact.astro` | Submit button is an `<a>` tag — form never submits |
| 2 | Critical | `pages/blog/index.astro` | Second post silently skipped in listing |
| 3 | Critical | `components/GeneralBand.astro`, `CentralBand.astro` | `getEntryBySlug` removed in Astro 5 |
| 4 | Critical | `content.config.ts` | `front` collection missing `loader` |
| 5 | Critical | `layouts/PortfolioWork.astro` | `productImageSix` shows wrong image |
| 6 | Moderate | `package.json` | `astro-icon` in `devDependencies` |
| 7 | Moderate | `layouts/PortfolioWork.astro` | Wrong collection type (`store` vs `portfolio`) |
| 8 | Moderate | `astro.config.mjs` | Icon config excludes `material-symbols`, `mdi`, `simple-icons` |
| 9 | Moderate | `pages/contact.astro` | Missing `description` prop on `BaseHead` |
| 10 | Minor | `layouts/PortfolioWork.astro` | Debug class `blarg` left in |
| 11 | Minor | `layouts/PortfolioWork.astro` | Extra `"` in HTML attribute |
| 12 | Minor | Multiple components | Redundant `global.css` imports |
