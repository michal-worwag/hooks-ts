// src/useSlugify/useSlugify.ts
function useSlugify(str) {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug;
}
export { useSlugify };
