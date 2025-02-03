// metadata.ts
import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

async function getProduct(slug: string) {
  return await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      title,
      image,
      price,
      description,
      stock_quantity
    }`,
    { slug }
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProduct(params.slug);
  return {
    title: product ? product.title : 'Product Not Found',
    description: product ? product.description : 'This product does not exist.',
  };
}
