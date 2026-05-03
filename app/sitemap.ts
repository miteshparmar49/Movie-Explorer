import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mvpinfotech.in";

  const routes = [
    "/", // homepage
    "/about",

    // Services
    "/neto-by-maropost-development",
    "/shopify-development-services",
    "/wordpress-development-services",
    "/bigcommerce-development-services",
    "/seo-services",
    "/vue-js-development",
    "/react-js-development",
    "/node-js-development",
    "/next-js-development",
    "/express-js-development",

    // Marketing
    "/amazon-ppc-services",
    "/meta-ads-services",
    "/google-ads-services",
    "/blog",
    "/blog/shopify-seo-tips",
    "/blog/neto-to-shopify",
    "/blog/ecommerce-trends",
    "/blog/cro-tips",
    "/shopify-wordpress-rajkot",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}