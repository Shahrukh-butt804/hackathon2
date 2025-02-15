// sanityClient.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID_SANITY, // Replace with your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,       // Replace with your dataset name
  useCdn: true,                // `true` for faster response, `false` if you need the latest data
   apiVersion: '2023-01-01',    // Use the latest API version
});

export const sanityClientforSignUP = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID_SANITY, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, 
  apiVersion: "2023-01-01", 
  token: process.env.NEXT_PUBLIC_TOKEN_SANITY,
});

export default sanityClient;


// const sanityClient = createClient({
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//     useCdn: false,
//     token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
//   });


// Create Image URL builder
const builder = imageUrlBuilder(sanityClient);

// Function to generate image URL from Sanity
export const urlFor = (source) => {
  return builder.image(source);
};

// EXAMPLE USAGE
// src={urlFor(category.image).width(200).url()} 
// src={urlFor(category.image).width(400).height(300).fit('crop').format('webp').url()}