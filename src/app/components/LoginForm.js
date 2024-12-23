// import React from 'react';

// const LoginForm = ({ userData, setUserData, handleLoginSubmit, handleLoginToggle }) => {
//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-60 flex justify-center items-center z-40">
//       <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-10 rounded-2xl shadow-xl w-96 max-w-full">
//         <h1 className="text-3xl text-center mb-6 text-white font-semibold">LOGIN</h1>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-4 mb-6 border rounded-md"
//           value={userData.email}
//           onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-4 mb-6 border rounded-md"
//           value={userData.password}
//           onChange={(e) => setUserData({ ...userData, password: e.target.value })}
//         />
//         <button className="w-full bg-blue-600 text-white py-3 rounded-md" onClick={handleLoginSubmit}>
//           Login
//         </button>
//         <button className="w-full mt-6 bg-gray-300 py-2 rounded-md" onClick={handleLoginToggle}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
