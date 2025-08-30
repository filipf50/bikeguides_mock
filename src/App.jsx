import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid'; // Necesitarás instalar @heroicons/react

// Instalar Heroicons: npm install @heroicons/react
// Asegúrate de que las imágenes estén en tu carpeta 'public' o usa URLs externas.

// --- Componente de Tarjeta de Ruta ---
const RouteCard = ({ image, title, speed, location }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{speed}</p>
      <p className="text-gray-500 text-sm">{location}</p>
    </div>
  </div>
);

// --- Componente de Tarjeta de Guía ---
const GuideCard = ({ image, name, role, location, rating }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 rounded-full object-cover mb-3"
    />
    <h3 className="font-semibold text-lg text-center">{name}</h3>
    <p className="text-gray-600 text-sm text-center">{role}</p>
    <p className="text-gray-500 text-sm text-center mb-2">{location}</p>
    <div className="flex items-center text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating) ? 'fill-current' : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-1 text-gray-700 text-sm">{rating}</span>
    </div>
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
      View Profile
    </button>
  </div>
);

function App() {
  return (
    <div className="font-sans antialiased bg-gray-50">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-center text-white">
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            Guides
          </a>
          <a href="#" className="hover:text-gray-200">
            Routes
          </a>
          <a href="#" className="hover:text-gray-200">
            Affiliates
          </a>
          <a href="#" className="hover:text-gray-200">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center flex flex-col justify-center items-center text-white p-6"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>{' '}
        {/* Oscurece la imagen de fondo */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-2xl leading-tight">
            Find your local cycling guide
          </h1>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Enter a destination"
              className="p-3 rounded-l-md w-72 max-w-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-md transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12">
        {/* Popular Routes Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Popular Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RouteCard
              image="https://images.unsplash.com/photo-1592809633737-175b65fd2b82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNpY2xpc3RhfGVufDB8fDB8fHww"
              title="Coastal Adventure"
              speed="46 km/hour"
              location="Barcelona"
            />
            <RouteCard
              image="https://images.unsplash.com/photo-1754546183200-886b4788a37f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Mountain Challenge"
              speed="60 km/hour"
              location="Granada"
            />
            <RouteCard
              image="https://images.unsplash.com/photo-1631276893368-554b60393efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNpY2xpc3RhfGVufDB8fDB8fHww"
              title="Riverside Ride"
              speed="43 km/hour"
              location="Bilbao"
            />
            <RouteCard
              image="https://images.unsplash.com/photo-1474962558142-9ca83af74bb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNpY2xpc3RhfGVufDB8fDB8fHww"
              title="City Exploration"
              speed="€42 /hour" // Precio por hora, asumiendo que es una guía pagada
              location="Valencia"
            />
          </div>
        </section>

        {/* Become a Guide Section */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md flex justify-between items-center flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Become a Guide
            </h2>
            <p className="text-gray-600 max-w-md">
              Share your passion for cycling and connect with cyclists from
              around the world.
            </p>
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition-colors">
            Sign Up
          </button>
        </section>

        {/* Local Guides Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Local Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GuideCard
              image="https://media.istockphoto.com/id/1124750236/es/foto/mujer-feliz-en-arriba-de-la-bicicleta-el%C3%A9ctrica-de-monta%C3%B1a-en-monta%C3%B1as-europeas.webp?a=1&b=1&s=612x612&w=0&k=20&c=IRSzPgHcAONErSASHGv5dNviH64K4vV06W0sIwq-9X4="
              name="Marta S."
              role="Mountain Biking"
              location="Barcelona"
              rating={4.98}
            />
            <GuideCard
              image="https://plus.unsplash.com/premium_photo-1683842178426-f7ac718f7772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9hZCUyQmN5Y2xpbmd8ZW58MHx8MHx8fDA%3D"
              name="David L."
              role="Road Cycling"
              location="Granada"
              rating={4.7}
            />
            <GuideCard
              image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              name="Laura G"
              role="Touring"
              location="Bilbao"
              rating={4.9}
            />
            <GuideCard
              image="https://media.istockphoto.com/id/2186856505/es/foto/escena-urbana-de-un-joven-que-camina-con-una-bicicleta-vintage-en-su-hombro.webp?a=1&b=1&s=612x612&w=0&k=20&c=pcXDFA63gW1_dSoMKSEwT0U9UaF1_-eYq572Wb0PblE="
              name="Carlos M."
              role="Urban Cycling"
              location="Valencia"
              rating={4.6}
            />
          </div>
        </section>

        {/* Affiliates Section (Placeholder) */}
        <section className="bg-white p-8 rounded-lg shadow-md flex justify-between items-center flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Affiliates
            </h2>
            <p className="text-gray-600 max-w-md">
              Partner with us to expand your reach.
            </p>
          </div>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md text-lg hover:bg-gray-300 transition-colors">
            Contact Us
          </button>
        </section>
      </main>

      {/* Footer (Simple Placeholder) */}
      <footer className="bg-gray-800 text-white p-8 text-center mt-12">
        <p>
          &copy; {new Date().getFullYear()} Cycling Guides. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
