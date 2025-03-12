# Astro Colony Theme

## Overview
This Astro theme is designed for small businesses looking for a simple yet powerful online presence. It provides a streamlined layout for a **Landing Page**, **Blog**, and **About Page**. Future updates will include additional functionality for businesses needing a portfolio, store, contact page, or service listings.

<p align="center">
  <img src="https://github.com/t-morris/astro-colony/raw/main/Landing.png?raw=true" alt="Landing Page"/>
</p>

## Features
- **Landing Page** with customizable sections ("bands")
- **Blog** for company updates, articles, or news
- **About Page** for business details and team introduction
- **Centralized Customization** where most changes for nav, socials, and other info can be made from a single file.
- **Quick Theming** where adding the RGB values of an accent color and a backing color will automatically update the entire site.

## Roadmap (Upcoming Features)
- **Prior Projects Portfolio** (for design agencies and freelancers)
- **Contact Us** page for inquiries
- **Store** for digital or physical product sales
- **Services** page to showcase business offerings

## How to Use
The theme has a `consts.ts` file populated with the **majority of the customizable text** for the theme, including most of the text found in the footer of the main page, along with the **navbar and socials options**.

The theme's colors are controlled by an **accent color** and a **background color**, the RGB properties of which can be edited in the `global.css` file. Once the primary colors are set, the rest of the website's colors are automatically calculated. There is a color palette visible in the footer (on larger screen sizes) to help determine/preview colors.

This theme's **Font/Landing/Index Page** is built with flexible, modular "bands" that can be added or removed to fit your needs. The bands are configured using markdown (`.md`) files and referenced in the page by setting the `slug` property to the corresponding markdown filename (without the `.md` extension) when the band component is added to the index page.

## Structure

```text
├── public/
│   ├── blog_assets/
│   ├── fonts/
│   └── front/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── blog/
│   │   └── front/
│   ├── layouts/
│   ├── pages/
│   │   └── blog/
│   ├── styles/
│   │   └── global.css
│   └── consts.ts
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

### Index (Front) Page
The front page should be edited directly to add or rearrange bands. Additional bands can be added as per the "How to Use" section above.

<p align="center">
  <img src="https://github.com/t-morris/astro-colony/blob/main/LandingFull.png?raw=true" alt="FullLanding Page"/>
</p>

#### Available Bands

##### 1. Hero Band
The **Hero Band** serves as the primary introduction to your site.
- Displays a **main heading**, **subheading**, and **button**
- The button scrolls to the next section
- Must be referenced using `slug="hero"` (or another `.md` filename if customized)  
Example Markdown: `src/content/front/hero.md`.

##### 2. General Band
The **General Band** is a flexible content section.
- Supports text and the `heroImage` property as an accompanying image
- Displays the block of text with a supporting button.
- Can be aligned **left** or **right**
- Can have different background colors derived from the background colour provided selected by specifying: `exdark`, `dark`, `normal`, `light`, `exlight`  
Example Markdown: `src/content/front/band1.md`.

##### 3. Central Band
The **Central Band** is a fully customizable section with a **background image**.
- Uses the `heroImage` property for the background
- Supports fully custom HTML content (note that this means it can be configured with any content, and deleting this example will remove the existing grid of placeholder content)  
Example Markdown: `src/content/front/central.md`.

##### 4. Band Example

```text
---
//Title text for the band. Body text is controlled by the content below.
title: 'Many Things' 
//The heroImage is the image displayed beside (or as background for the hero or central bands)
heroImage: '/front/example_10.jpg'  the text.
//"Left" or "Right" will swap which side the text and image are placed in the band, or text and title for the Hero Band.
orientation: 'left' 
//Options are "bgcolor-exlight", "bgcolor-light", "bgcolor-primary", "bgcolor-dark" or "bgcolor-exdark" for reference colours these are 0-4 on the colour palette in the page footer.
style: 'exlight'
//The link for the button (if a button is present - see buttonText comment), this is ignored for 'Central Band'.
buttonHref: '#' 
//Changes what is printed in the button, leaving this blank will hide the button on this band, this is ignored for 'Central Band'.
buttonText: 'Button 1' 
---

Band 1 Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient vestibulum at litora adipiscing; in sapien rhoncus inceptos. Rhoncus litora dapibus hac gravida ornare felis. Felis orci orci odio diam consectetur mattis. 
```


#### Blog Page
Blog entries can be added in the same way as for normal Astro blog sites by adding entries to the `src/content/blog/` folder, with image assets being added to the `public/blog_assets/` folder.

#### About Us Page

## Installation & Setup
1. Clone the repository and install dependencies:
   ```sh
   git clone https://github.com/t-morris/astro-colony.git
   cd astro-colony
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Edit the markdown files in `src/content/` to update sections, removing or adding bands in the `pages/index.astro` files to reduce or increase the number and position of bands on the main page.
4. Edit the `accentr`, `accentg`, and `accentb` values in `src/styles/global.css` to change the accent colors.
5. Edit the `backgroundr`, `backgroundg`, and `backgroundb` values in `src/styles/global.css` to change the background colors.
6. Update the contents of `consts.ts` to provide your own site/company data.
7. Deploy using your preferred hosting service.

## Commands 
(as per Astro-supplied documentation, always check the official docs in case of changes)

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds your production site to `./dist/`         |
| `npm run preview`         | Previews your build locally before deploying     |
| `npm run astro ...`       | Runs CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Gets help using the Astro CLI                    |

## License & Attributions
This theme is open-source and available under the MIT License.  
This theme is built atop the default Astro-provided blog template, which itself is based on [Bear Blog](https://github.com/HermanMartinus/bearblog/).
