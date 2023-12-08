import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  <>
    <div className="h-screen bg-primary">
      <p className="text-4xl text-center text-secondary bg-primary font-heading ">Hello world</p>
      <p className="font-subheading text-white text-4xl">This is subheading</p>
      <p className="text-yellow-500 font-paragraph text-4xl">This is a simple text for movie recommendation system</p>
      <p className="text-yellow-500 font-paragraph text-4xl">Let me check it</p>
      

    </div>

  </>
);

