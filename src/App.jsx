function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">My E-Commerce Site</div>
            <nav className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Shop</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
              <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Store</h1>
            <p className="text-gray-600 mt-4">Find the best products at the best prices.</p>
            <a href="#" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-500">
              Shop Now
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/150" alt="Product 1" className="rounded-t-lg" />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Product 1</h2>
            <p className="text-gray-600 mt-2">$19.99</p>
            <a href="#" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500">
              Add to Cart
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/150" alt="Product 2" className="rounded-t-lg" />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Product 2</h2>
            <p className="text-gray-600 mt-2">$29.99</p>
            <a href="#" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500">
              Add to Cart
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/150" alt="Product 3" className="rounded-t-lg" />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Product 3</h2>
            <p className="text-gray-600 mt-2">$39.99</p>
            <a href="#" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500">
              Add to Cart
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow mt-10">
        <div className="container mx-auto px-6 py-4">
          <p className="text-gray-600 text-center">&copy; 2024 My E-Commerce Site. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
