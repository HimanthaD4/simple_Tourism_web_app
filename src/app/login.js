// 'use client';

// import React, { useState } from 'react';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleLogin = async () => {
//     const response = await fetch('/api/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });
//     const data = await response.json();
//     alert(data.token ? 'Login successful!' : 'Login failed!');
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h1 className="text-2xl font-bold">Login</h1>
//       <div className="mt-4">
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-2 rounded mb-4"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border p-2 rounded mb-4"
//           value={formData.password}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//         />
//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;
