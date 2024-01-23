import React from 'react';
import Navbar from './compenents/Nav';
import './App.css'
import './compenents/Register.jsx'
import './compenents/Login.jsx'

const App = () => {
    return (
        <>
            <Navbar/>

            <main className='text-slate-200 text-center flex items-center justify-center h-[85vh]'>
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-md shadow-lg p-20">
                    <div>
                    <h1 className="text-3xl font-bold mb-10 relative">
  <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-500 via-pink-500 to-red-500 animate-gradient">
    Invest in your career
  </span>
</h1>


                    </div>

                    <ul className="text-center">
                        <li className="mb-2">Stay competitive in a rapidly changing job market</li>
                        <li className="mb-2">Enhance your expertise and knowledge</li>
                        <li className="mb-2">Open doors to new and exciting career paths</li>
                    </ul>
                </div>
            </main>

        </>
    );
};

export default App;

