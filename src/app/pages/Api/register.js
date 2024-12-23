import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Initialize the PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Function to generate JWT token for the user
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method === 'POST') {
    // Extract fields from the request body
    const { name, email, password } = req.body;

    // Check if required fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      // Check if user already exists
      const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (userExists.rows.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, hashedPassword]
      );

      const newUser = result.rows[0];

      // Generate a JWT token
      const token = generateToken(newUser);

      // Send back the response with user data and token
      res.status(201).json({
        message: 'User registered successfully',
        token,
        user: { id: newUser.id, name: newUser.name, email: newUser.email },
      });
    } catch (error) {
      // Log error for debugging
      console.error('Error during registration:', error);

      // Return a server error response
      res.status(500).json({ message: 'Server error, please try again later' });
    }
  } else {
    // Handle non-POST requests
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
