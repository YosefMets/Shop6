import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default defineEventHandler( async (event) => {
  const { article, lang } = getRouterParams(event);
  const text = await readBody(event);
  if ( !text ) throw createError({ statusCode: 111, statusMessage: 'No text provided' });

  try {
    const uploadResponse = await cloudinary.uploader.upload(`data:text/plain;base64,${Buffer.from(text).toString('base64')}`, {
      resource_type: 'raw', // Тип файла (не изображение)
      public_id: `${article}-${lang}.html`,
      folder: 'db',
      invalidate: true,
    });

    return { url: uploadResponse.secure_url };
  } catch (error) {
    return { error: error.message };
  }
})