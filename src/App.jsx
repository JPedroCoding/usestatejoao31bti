import React, { useState } from 'react';

export function App() {
  const [number, setNumber] = useState(100);
  const [Visivel, setVisivel] = useState(true);

  const addNumber = () => {
    setNumber(number + 100);
  };

  const Visibilidade = () => {
    if (Visivel === true) {
      setVisivel(false);
    } else {
      setVisivel(true);
    }
    
    //ou return setVisivel(!Visivel)

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-25 m-25 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Contagem</h1>
        
        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">Número: {number}</p>
          <button 
            onClick={addNumber} 
            className="w-full bg-red-900 text-white py-4 px-8 rounded hover:bg-red-700 transition"
          >
            Somar 100
          </button>
        </div>
        
        <div>
          {Visivel === true ? (
            <p className="text-lg text-gray-700 mb-2">Olá mundo</p>
          ) : "" } 
          <button 
            onClick={Visibilidade}
            className="w-full bg-gray-900 text-white py-4 px-8 rounded hover:bg-gray-700 transition"
          >
            {Visivel === true ? 'Esconder' : 'Mostrar'}
          </button>
        </div>
      </div>
    </div>
  );
}