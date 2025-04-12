// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const FAVICON = "/favicon.svg";
export const CONTACT_EMAIL = "email@example.com";
export const CONTACT_ADD_STREET = "PO Box 0000,";
export const CONTACT_ADD_CITY = "City,";
export const CONTACT_ADD_STCT = "State, Country,";
export const CONTACT_ADD_CODE = "CODE";
export const TAGLINE = "Colony is a simple site theme for a business website with a blog.";
export const COMPANY_NAME = "Colony Name";
export const LOGO_LIGHT = "/colony_wht.png";
export const LOGO_DARK = "/colony_blk.png";

// The following are further colour customisations, to change them update them to "bgcolor-exlight", "bgcolor-light", "bgcolor-primary", "bgcolor-dark" or "bgcolor-exdark" for reference colours these are 0-4 on the colour palette in the page footer.
// Note that the colour for the Central Band textbox can be adjusted in the .md file by updating the bgcolor-light with one of the above.
// Note that button colour is adjusted by adjusting the accent colour in the global.css file.

export const BLOG_CARD_COL = "bgcolor-light";
export const SITE_FOOTER_COL = "bgcolor-exdark";
export const INDEX_FOOTER_COL = "bgcolor-dark";
export const NAVBAR_COL = "bgcolor-light";

// The contact form utilises the web3forms system, to get started you need an API key to get one visit: https://web3forms.com
export const WEB3FORMS_KEY_HERE = "your access key goes here"

//The following are the menu customisations for the main Nav - to remove you can simply comment them out.

export const navmenu: Menu[] = [{
    label: "Home",
    href: "/",
},
{
    label: "Store",
    href: "/store",
},
{
    label: "Works",
    href: "/portfolio",
},
{
    label: "Blog",
    href: "/blog",
},
{
    label: "About",
    href: "/about",
},
{
    label: "Contact",
    href: "/contact",
},
];


// Uncomment or add more socials as desired, recommend 4 or fewer.
export const socials: Menu[] = [
{
    label: "Follow us on Bluesky",
    href: "/",
    iconName: "simple-icons:bluesky",
},
// {
//     label: "Follow us on Twitter",
//     href: "/",
//     iconName: "simple-icons:twitter",
// },
// {
//     label: "Follow us on Mastodon",
//     href: "/",
//     iconName: "simple-icons:mastodon",
// },
// {
//     label: "Join on Discord",
//     href: "/",
//     iconName: "simple-icons:discord",
// },
// {
//     label: "Follow us on Instagram",
//     href: "/",
//     iconName: "simple-icons:instagram",
// },
// {
//     label: "Follow us on Tiktok",
//     href: "/",
//     iconName: "simple-icons:tiktok",
// },
// {
//     label: "Follow us on Youtube",
//     href: "/",
//     iconName: "simple-icons:youtube",
// },
// {
//     label: "Follow us on Twitch",
//     href: "/",
//     iconName: "simple-icons:twitch",
// },
// {
//     label: "Follow us on Facebook",
//     href: "/",
//     iconName: "simple-icons:facebook",
// },
// {
//     label: "Follow us on LinkedIn",
//     href: "/",
//     iconName: "simple-icons:linkedin",
// },
{
    label: "Visit our Github",
    href: "/",
    iconName: "simple-icons:github",
},
// {
//     label: "Visit our Gitlab",
//     href: "/",
//     iconName: "simple-icons:gitlab",
// },
// {
//     label: "Add our blog to your RSS Feed",
//     href: "/",
//     iconName: "simple-icons:rss",
// },
];
