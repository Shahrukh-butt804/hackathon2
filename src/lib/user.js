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
        confirmButtonText: "Cool",
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
          confirmButtonText: "Cool",
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
    // Fetch the cart for the user, if it exists
    const existingCart = await sanityClientforSignUP.fetch(
      `*[_type == "cart" && user._ref == $userId][0]`,
      { userId }
    );

    if (!existingCart) {
      // If no cart exists for the user, create a new one
      const newCart = await sanityClientforSignUP.create({
        _type: 'cart',
        user: { _ref: userId },
        items: [{ _ref: productId }],
        totalPrice: 0,  // This will be updated after calculating total
        createdAt: new Date().toISOString(),
      });

      // alert('Cart created and product added!');
      // console.log('Created Cart:', newCart);
    } else {
      // If cart exists, add product to the existing items
      const updatedCart = await sanityClientforSignUP
        .patch(existingCart._id)
        .setIfMissing({ items: [] })
        .append('items', [{ _ref: productId }])
        .commit();

      // alert('Product added to the existing cart!');
      // console.log('Updated Cart:', updatedCart);
    }

    // Fetch updated cart and calculate total price
    // const updatedCart = await sanityClientforSignUP.fetch(
    //   `*[_type == "cart" && user._ref == $userId][0]`,
    //   { userId }
    // );

    // const products = await Promise.all(
    //   updatedCart.items.map(async (item) => {
    //     const product = await sanityClientforSignUP.fetch(
    //       `*[_type == "product" && _id == $productId][0]`,
    //       { productId: item._ref }
    //     );
    //     console.log('Product:', product?.price);
    //     return product?.price || 0;  // Assuming the product has a price field
    //   })
    // );

    // const totalPrice = products.reduce((acc, price) => acc + price, 0);

    // Update cart with the total price
    // await sanityClientforSignUP.patch(updatedCart._id).set({ totalPrice }).commit();

    // alert('Cart updated Successfully');
    Swal.fire({
      title: "Success!",
      text: "Cart updated successfully",
      icon: "success",
      confirmButtonText: "Cool",
    });
    return true 
  } catch (error) {
    console.error('Error adding to cart:', error);
    Swal.fire({
      title: "Error!",
      text: error.message || "Something went wrong. Please try again.", 
      icon: "error", // Change the icon to "error"
      confirmButtonText: "Okay",
    });
  }
}
  
export { addToCart, login, signup };

