import sanityClient from './sanityClient';

export const getStaticPropsCategories = async () => {
    try {
      const query = '*[_type == "categories"]';
      const categories = await sanityClient.fetch(query);
  
      return {
        props: {
          categories,
        },
        revalidate: 10, // Re-generate page every 10 seconds
      };
    } catch (error) {
      console.error("Error fetching Categories", error);
      return {
        notFound: true,
      };
    }
};

export const getStaticPropsAllData = async () => {
    try {
      const query = '*[_type == "products"]';
      const categories = await sanityClient.fetch(query);
  
      return {
        props: {
          categories,
        },
        revalidate: 10, // Re-generate page every 10 seconds
      };
    } catch (error) {
      console.error("Error fetching product", error)
      return {
        notFound: true,
      };
    }
};

export const getProductById = async (id) => {
    try {
      const query = `*[_type == "products" && _id == $id][0]`;
      const params = { id }; // Pass the id as a parameter to the query
      const product = await sanityClient.fetch(query, params);
  
      return product;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      return null;
    }
  };