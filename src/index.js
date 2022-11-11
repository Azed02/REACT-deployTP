import React from 'react';
import ReactDOM from 'react-dom/client';  // importer ReactDom afin d'afficher les resultats 
import App from './App';    // importer la fonction  "App" du dossier "App.jsx" pour executer son contenu 


const root = ReactDOM.createRoot(document.getElementById('root')); // precise l'emplacement d'affichage en creant un root 
root.render(        // affichage dans le root crée 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

