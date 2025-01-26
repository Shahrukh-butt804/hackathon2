import {sanityClientforSignUP} from '@/lib/sanityClient';

async function signup(user) {
    try {
      if (!user.username || !user.email || !user.password) {
        alert('All fields are required!');
        return;
      }
  
      const newUser = await sanityClientforSignUP.create({
        _type: 'user', // Matches the schema name in Sanity
        username: user.username,
        email: user.email,
        password: user.password, // Avoid storing plaintext passwords in production
      });
  
      alert('User created successfully!');
      console.log('Created User:', newUser);
      return true;

    } catch (error) {
      console.error('Error creating user:', error);
      alert(`Failed to create user: ${error.message}`);
    }
}
async function login(user) {
    try {
      if (!user.email || !user.password) {
        alert('Email and password are required!');
        return;
      }
  
      // Fetch the user from Sanity using the provided email
      const existingUser = await sanityClientforSignUP.fetch(
        `*[_type == "user" && email == $email][0]`,
        { email: user.email }
      );
  
      // If no user is found
      if (!existingUser) {
        alert('User not found!');
        return;
      }
  
      // Compare the provided password with the stored password (you would ideally use bcrypt to hash/compare passwords in a production environment)
      if (existingUser.password !== user.password) {
        alert('Invalid password!');
        return;
      }
  
      // If the user exists and the password matches, proceed
      alert('Login successful!');
      console.log('Logged in User:', existingUser);
      return existingUser;
      // Optionally, you can store a session or JWT token here (localStorage, cookies, etc.)
      
    } catch (error) {
      console.error('Error during login:', error);
      alert(`Failed to log in: ${error.message}`);
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

      alert('Cart created and product added!');
      console.log('Created Cart:', newCart);
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

    alert('Cart updated Successfully');
    return true 
  } catch (error) {
    console.error('Error adding to cart:', error);
    alert(`Failed to add to cart: ${error.message}`);
  }
}
  
export {signup ,login,addToCart};
