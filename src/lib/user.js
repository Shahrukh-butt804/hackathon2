import { sanityClientforSignUP } from '@/lib/sanityClient';
import Swal from "sweetalert2";

async function signup(user) {
    try {
      if (!user.username || !user.email || !user.password) {
        Swal.fire({
          title: "Error!",
          text: "All fields are required", 
          icon: "error", // Change the icon to "error"
          confirmButtonText: "Okay",
        });
        return;
      }

      if (user.username.length < 3) {
        Swal.fire({
          title: "Error!",
          text: "username must be 3 characters long", 
          icon: "error", // Change the icon to "error"
          confirmButtonText: "Okay",
        });
        return;
      }

      if (!user.email.includes("@")) {
        Swal.fire({
          title: "Error!",
          text: "Please enter Valid email address", 
          icon: "error", // Change the icon to "error"
          confirmButtonText: "Okay",
        });
        return;
      }
      if (user.password.length < 8) {
        Swal.fire({
          title: "Error!",
          text: "Password must be 8 characters long",
          icon: "error", // Change the icon to "error"
          confirmButtonText: "Okay",
        });
        return;
      }

      // check if user already exists
      const existingUser = await sanityClientforSignUP.fetch(
        `*[_type == "user" && email == $email][0]`,
        { email: user.email }
      );

      if (existingUser) {
        Swal.fire({
          title: "Error!",
          text: "User already exists",
          icon: "error", // Change the icon to "error"
          confirmButtonText: "Okay",
        });
        return;
      }


  
      const newUser = await sanityClientforSignUP.create({
        _type: 'user', // Matches the schema name in Sanity
        username: user.username,
        email: user.email,
        password: user.password, // Avoid storing plaintext passwords in production
      });
  
      Swal.fire({
        title: "Success!",
        text: "User Created successfully",
        icon: "success",
        confirmButtonText: "Okay",
      });
      console.log('Created User:', newUser);
      return true;

    } catch (error) {
      console.error('Error creating user:', error);
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong. Please try again.", 
        icon: "error", // Change the icon to "error"
        confirmButtonText: "Okay",
      });
    }
}
async function login(user) {
    try {
      if (!user.email || !user.password) {
        Swal.fire({
          title: "Error!",
          text: "Email password is required", 
          icon: "error", // Change the icon to "error"
          confirmButtonText: "Okay",
        });
        return;
      }
  
      // Fetch the user from Sanity using the provided email
      const existingUser = await sanityClientforSignUP.fetch(
        `*[_type == "user" && email == $email][0]`,
        { email: user.email }
      );
  
      // If no user is found
      if (!existingUser) {
        Swal.fire({
          title: "Error!",
          text: "user not found", 
          icon: "error", // Change the icon to "error"
          confirmButtonText: "Okay",
        });
        return;
      }
  
      // Compare the provided password with the stored password (you would ideally use bcrypt to hash/compare passwords in a production environment)
      if (existingUser.password !== user.password) {
        Swal.fire({
          title: "Error!",
          text: "Invalid password", 
          icon: "error", // Change the icon to "error"
          confirmButtonText: "Okay",
        });
        return;
      }
  
      // If the user exists and the password matches, proceed
          Swal.fire({
          title: "Success!",
          text: "Logged In successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
      // console.log('Logged in User:', existingUser);
      return existingUser;
      // Optionally, you can store a session or JWT token here (localStorage, cookies, etc.)
      
    } catch (error) {
      console.error('Error during login:', error);
         Swal.fire({
      title: "Error!",
      text: error.message || "Something went wrong. Please try again.", 
      icon: "error", // Change the icon to "error"
      confirmButtonText: "Okay",
    });
    }
}

async function addToCart(userId, productId) {
  try {
    // Fetch the existing cart for the user
    const existingCart = await sanityClientforSignUP.fetch(
      `*[_type == "cart" && user._ref == $userId][0]`,
      { userId }
    );

    if (!existingCart) {
      // If no cart exists for the user, create a new one
      await sanityClientforSignUP.create({
        _type: "cart",
        user: { _ref: userId },
        items: [{ _ref: productId }],
        totalPrice: 0, // This will be updated after calculating total
        createdAt: new Date().toISOString(),
      });

      Swal.fire({
        title: "Success!",
        text: "Cart created and product added!",
        icon: "success",
        confirmButtonText: "Okay",
      });
    } else {
      // If cart exists, check if the product already exists in the cart
      const productExists = existingCart.items.some((item) => item._ref === productId);

      if (productExists) {
        Swal.fire({
          title: "Already in Cart!",
          text: "This product is already in your cart.",
          icon: "info", // Info icon to indicate no action was taken
          confirmButtonText: "Okay",
        });
        return false; // No further action needed
      }

      // Add the product to the existing cart if it doesn't exist
      await sanityClientforSignUP
        .patch(existingCart._id)
        .setIfMissing({ items: [] })
        .append("items", [{ _ref: productId }])
        .commit();

      Swal.fire({
        title: "Success!",
        text: "Product successfully added to your cart!",
        icon: "success",
        confirmButtonText: "Okay",
      });
    }

    return true;
  } catch (error) {
    console.error("Error adding to cart:", error);

    Swal.fire({
      title: "Error!",
      text: error.message || "Something went wrong. Please try again.",
      icon: "error",
      confirmButtonText: "Okay",
    });

    return false;
  }
}
async function clearCart(userId) {
  try {
    // Fetch the existing cart for the user
    const existingCart = await sanityClientforSignUP.fetch(
      `*[_type == "cart" && user._ref == $userId][0]`,
      { userId: userId }
    );

    if (!existingCart) {
      Swal.fire({
        title: "Cart Not Found!",
        text: "You don't have a cart to clear.",
        icon: "info",
        confirmButtonText: "Okay",
      });
      return false; // No cart exists for the user
    }

    // Clear the cart items and reset total price to 0
       await sanityClientforSignUP
      .patch(existingCart._id)
      .set({ items: [], totalPrice: 0 }) // Empty the cart and reset price
      .commit();


    return true;
  } catch (error) {
    console.error("Error clearing cart:", error);

    Swal.fire({
      title: "Error!",
      text: error.message || "Something went wrong while clearing the cart.",
      icon: "error",
      confirmButtonText: "Okay",
    });

    return false;
  }
}

async function fetchCartsByUserId (userId) {
  try {
    // Fetch all carts for the given userId
    const userCarts = await sanityClientforSignUP.fetch(
      `*[_type == "cart" && user._ref == $userId]`,
      { userId }
    );

    if (userCarts.length === 0) {
      return [];
    }

    return userCarts;

  } catch (error) {
    console.error('Error fetching carts:', error);
    Swal.fire({
      title: "Error!",
      text: error.message || "Something went wrong. Please try again.", 
      icon: "error",
      confirmButtonText: "Okay",
    });
    return [];
  }
}

export { addToCart, login, signup ,clearCart,fetchCartsByUserId };

