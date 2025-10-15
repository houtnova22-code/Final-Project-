// import React from "react";

// // mock data for products
// const products = [
//   { id: 1, name: "Gentle Cleansing Balm", price: "$42", image: "/images/cleanser.jpg" },
//   { id: 2, name: "Hydrating Face Serum", price: "$68", image: "/images/serum.jpg" },
//   { id: 3, name: "Nourishing Night Cream", price: "$56", image: "/images/moisturizer.jpg" },
//   { id: 4, name: "Brightening Clay Mask", price: "$38", image: "/images/mask.jpg" },
// ];

// export default function HomePage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero section */}
//       <header className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: url('/images/hero-bg.jpg') }}>
//         <div className="h-full bg-black bg-opacity-40 flex flex-col justify-center items-center px-4 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Natural Beauty Begins with Nature</h1>
//           <p className="text-lg md:text-2xl mb-8">Discover our collection of premium skincare products crafted with pure ingredients</p>
//           <div>
//             <a href="#shop" className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg mr-4">Shop Collection</a>
//             <a href="#about" className="px-6 py-3 border border-white text-white font-semibold rounded-lg">Learn Our Story</a>
//           </div>
//         </div>
//       </header>

//       {/* Features / Values */}
//       <section className="py-16 bg-gray-50 text-center">
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-semibold">100% Natural</h3>
//             <p className="mt-2">Pure botanical ingredients sourced sustainably from nature</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold">Clinically Tested</h3>
//             <p className="mt-2">Dermatologist-approved formulas proven to deliver results</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold">Cruelty Free</h3>
//             <p className="mt-2">Never tested on animals, always made with compassion</p>
//           </div>
//         </div>
//       </section>

//       {/* Bestselling section */}
//       <section id="shop" className="py-16">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">Bestselling Favorites</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {products.map((prod) => (
//               <div key={prod.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
//                 <img src={prod.image} alt={prod.name} className="w-full h-48 object-cover" />
//                 <div className="p-4 text-center">
//                   <h3 className="font-semibold">{prod.name}</h3>
//                   <p className="mt-2 text-lg">{prod.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-8">
//             <a href="/shop" className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold">View All Products</a>
//           </div>
//         </div>
//       </section>

//       {/* Subscribe / Newsletter */}
//       <section className="py-16 bg-gray-100">
//         <div className="max-w-md mx-auto text-center px-4">
//           <h2 className="text-2xl font-bold mb-4">Join Our Wellness Community</h2>
//           <p className="mb-6">Subscribe to receive exclusive offers, skincare tips, and early access to new products</p>
//           <form className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-1 px-4 py-3 border rounded-lg focus:outline-none"
//             />
//             <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold">Subscribe</button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }