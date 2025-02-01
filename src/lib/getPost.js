import Swal from "sweetalert2";
import sanityClient from "./sanityClient";

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

export const getStaticPropsAllData = async (category) => {
  try {
    let query = '*[_type == "products"]';

    if (category != "null" && category != undefined) {
      query = `*[_type == "products" && category->title == "${category}"]{..., category->}`;
    }

    // console.log(query)
    const categories = await sanityClient.fetch(query);

    return {
      props: {
        categories,
      },
      revalidate: 10, // Re-generate page every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching product", error);
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
