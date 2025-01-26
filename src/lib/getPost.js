import Swal from 'sweetalert2';
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
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong. Please try again.", 
        icon: "error", // Change the icon to "error"
        confirmButtonText: "Okay",
      });
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
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong. Please try again.", 
        icon: "error", // Change the icon to "error"
        confirmButtonText: "Okay",
      });
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
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong. Please try again.", 
        icon: "error", // Change the icon to "error"
        confirmButtonText: "Okay",
      });
      return null;
    }
};

export const fetchCartsByUserId = async (userId) => {
  try {
    // Fetch all carts for the given userId
    const userCarts = await sanityClient.fetch(
      `*[_type == "cart" && user._ref == $userId]`,
      { userId }
    );

    if (userCarts.length === 0) {
      // alert('No carts found for this user.');
      // console.log('No carts for user:', userId);
      return [];
    }

    // alert('Carts fetched successfully!');
    // console.log('Fetched Carts:', userCarts);

    // // Optionally, you can fetch product details for each cart here, if needed
    // const cartsWithProducts = await Promise.all(
    //   userCarts.map(async (cart) => {
    //     const products = await Promise.all(
    //       cart.items.map(async (item) => {
    //         const product = await sanityClient.fetch(
    //           `*[_type == "product" && _id == $productId][0]`,
    //           { productId: item._ref }
    //         );
    //         return product || null;
    //       })
    //     );
    //     return { ...cart, products };
    //   })
    // );

    return userCarts;

  } catch (error) {
    console.error('Error fetching carts:', error);
    Swal.fire({
      title: "Error!",
      text: error.message || "Something went wrong. Please try again.", 
      icon: "error", // Change the icon to "error"
      confirmButtonText: "Okay",
    });
    return [];
  }
}
