# Astro Business Theme

## Overview
This Astro theme is designed for small businesses looking for a simple yet powerful online presence. It provides a streamlined layout for a **Landing Page**, **Blog**, and **About Page**. Future updates will include additional functionality for businesses needing a portfolio, store, contact page, or service listings.

## Features
- **Landing Page** with customizable sections ("bands")
- **Blog** for company updates, articles, or news
- **About Page** for business details and team introduction
- **Performance-focused** with Astro’s lightweight, static site generation

## Roadmap (Upcoming Features)
- **Prior Projects Portfolio** (for design agencies and freelancers)
- **Contact Us** page for inquiries
- **Store** for digital or physical product sales
- **Services** page to showcase business offerings

## How to Use
This theme's **Landing Page** is built with flexible, modular "bands" that can be added or removed to fit your needs. The bands are configured using markdown (`.md`) files and referenced in the page by setting the `slug` property to the corresponding markdown filename (without the `.md` extension).

### Available Bands

#### 1. Hero Band
The **Hero Band** serves as the primary introduction to your site.
- Displays a **main heading**, **subheading**, and **button**
- The button scrolls to the next section
- Must be referenced using `slug="hero"` (or another `.md` filename if customized)

##### Example Markdown (`content/hero.md`):
```yaml
---
title: "Welcome to Our Business"
description: "We create high-quality solutions tailored to your needs."
buttonText: "Learn More"
---
```

#### 2. General Band
The **General Band** is a flexible content section.
- Supports text and an accompanying image
- Can be aligned **left** or **right**
- Can have different background styles: `exdark`, `dark`, `normal`, `faded`

##### Example Markdown (`content/services.md`):
```yaml
---
title: "Our Services"
description: "We offer a range of expert solutions for your business."
image: "/images/services.jpg"
imagePosition: "left"
background: "dark"
---
```

#### 3. Central Band
The **Central Band** is a fully customizable section with a **background image**.
- Uses the `heroImage` property for the background
- Supports fully custom HTML content

##### Example Markdown (`content/featured.md`):
```yaml
---
title: "Why Choose Us?"
heroImage: "/images/featured-bg.jpg"
---

<div class="custom-content">
  <h2>Experience, Quality, Results</h2>
  <p>We help businesses achieve their goals with tailored strategies.</p>
</div>
```

## Installation & Setup
1. Clone the repository and install dependencies:
   ```sh
   git clone https://github.com/your-repo/astro-business-theme.git
   cd astro-business-theme
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Edit the markdown files in `content/` to update sections.
4. Deploy using your preferred hosting service.

## License
This theme is open-source and available under the MIT License.




































# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
