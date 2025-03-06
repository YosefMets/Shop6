export default defineEventHandler( (event) => {
  const { article, lang } = getRouterParams(event);
  const fetchUri = `https://res.cloudinary.com/deucrhprn/raw/upload/db/${article}-${lang}.html`;

  return $fetch( fetchUri );
})