import React,{useState} from "react" // importer la biblioteque React from "react "
import FormInput from "./Components/form/formulaire" // importer la fonction du components pour pouvoir l'executer 
import Cv from "./Components/cv/cv" // de même on a importer la fonction Cv du components .
function App() {
// cette fonction permet de passer du formulaire eu Cv 
  const [cvIsReady,setCvisReady] = useState(false) 
  const [currentUser,setCurrentUser] = useState({})  /* les deux useStates precedentes permettant d'actualiser 
  les valeurs des inputs inserées au clavier . ainsi que la verification des ces informations pour afficher le Cv final*/

  return (
    <div>
      {
        !cvIsReady    // si les valeurs inserées satisfaient les conditions precisés 
        ?
        <FormInput    // les valeurs seront enregistrés et le Cv sera prêt à afficher 
            setIsReady={setCvisReady}
            setCurrentUser={setCurrentUser}
          />
        : // sinon 
        <Cv 
            currentUser={currentUser} // Les valeurs saisies vont pas être adaptées aux précedentes .
            />
      }
    </div>
  );
}

export default App;  // Ce export nous sera utile dans l'appel de la fonction "App" dans "index.js"
 