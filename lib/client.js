import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    dataset: 'production',
    projectId: process.env.DAZMA_PUBLIC_SANITY_ID,
    apiVersion: '2022-10-01',
    useCdn: true,
    token: process.env.DAZMA_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);