import { Pool } from 'pg';
import jwt from 'jsonwebtoken';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      // Insert the new user into the database (no email check, no password hashing)
      const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]
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
   
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
