# Blog content structure

```
src/content/posts/
  └── {category-slug}/
        └── {sub-category-slug}/
              └── awesome-post.jsx
```

- `category-slug` must match `BLOG_TAXONOMY[].slug`.
- `sub-category-slug` must match the `subcategories[].slug` inside that category.
- Each post exports a `meta` object with `category` and `subCategory` set to the same slugs as the folders.
- You can add supporting assets next to the post inside the sub-category folder if needed.

Running `npm run sitemap` (or `npm run build`) will automatically pick up every post and refresh `public/sitemap.xml` before deployment.
