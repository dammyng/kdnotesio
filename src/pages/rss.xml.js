import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "Kd Notes",
    description: "A Theme for Astro",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**/*.md"),
  });
