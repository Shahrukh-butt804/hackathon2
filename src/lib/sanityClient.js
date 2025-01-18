// sanityClient.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: '13h586qu', // Replace with your Sanity project ID
  dataset: 'production',       // Replace with your dataset name
  useCdn: true,                // `true` for faster response, `false` if you need the latest data
      apiVersion: '2023-01-01',    // Use the latest API version
    // token:'sk54kJmg7iwLaSpTn1YmQRwfADt9CpliRms0hs21NT5jkiMQBFYz9Y0oFs4lFsyRKorbHaJ3RO6O7PcxBKNotGhmgoNNxC1hvMXLnKMDI6g2gM83QMI45dtFSidYRuuE49BY7DpirH4Uo5ZxkHfl6c4xOz8DljpI0cwpdmTYnigdFuCkcRST', //
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