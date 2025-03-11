import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white text-center p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to My Tailwind App</h1>
        <p className="text-lg mt-2">React + Tailwind CSS setup</p>
      </header>
      <main className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <p className="text-gray-700">This is a simple React app styled with Tailwind CSS.</p>
      </main>
      <footer className="mt-6 text-gray-500">
        <p>&copy; 2025 My App</p>
      </footer>
    </div>
  );
}

export default App;