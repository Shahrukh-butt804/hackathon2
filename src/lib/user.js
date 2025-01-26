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
      // Optionally, you can store a session or JWT token here (localStorage, cookies, etc.)
      
    } catch (error) {
      console.error('Error during login:', error);
      alert(`Failed to log in: ${error.message}`);
    }
}
  
export {signup ,login};
