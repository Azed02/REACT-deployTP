//ZAIDI ASMAE
import "./formulaire.css" // on importe le dossier contenant le CSS 
import { vnom,vprenom,vage,vdesc,vadr,vmail } from "../../checkers"; // on importe le differents fonctions permettant de verifier les conditions imposées 
export default function FormInput({setIsReady,setCurrentUser}){
    //DECLARATION DES VARIABLES
    let prenom, nom,age, emaila, adresse,numerotel, dop, image, form1, form2,form3,date1, date2 , date3, langue, tech1,tech2, tech3;
// La fonction qui suit s'assure des conditions precisées par l'utilisateur sur les champs du formulaire  et permet l'affichage du cv dans le cas où tout est respecté
    const submitHandler = (e) => {
        e.preventDefault() //"preventDefault" etait necessaire pour empecher l'actualisation de la page  apres avoir soumis le formulaire 
        if(vnom(nom)&& vprenom(prenom) && vage(age)  && vdesc(dop)&& vadr(adresse)&&vmail(emaila) ){ //dans le cas où  tout est respecté
           setCurrentUser({prenom,nom,age,emaila,adresse,numerotel,dop,image,form1,date1,form2,date2,form3,date3,langue,tech1,tech2,tech3}) // Les nouveux valeurs saisies seront enregistés
           console.log("test")
            setIsReady(true)  // Le Cv sera prêt à afficher 
        } else {  // cette pertie permet l'affichage des alertes en cas de braver les conditions des inputs 
            if(!vprenom(prenom)) alert("veuillez saisir la 1ère lettre en majuscule ");
            if(!vnom(nom)) alert("veuillez saisir le nom en MAJ ");
            if(!vage(age)) alert("veuillez saisir un age > 18");
            if(!vmail(emaila)) alert("veuillez saisir  un email convenable");
           
            if(!vadr(adresse)) alert("veuillez saisir une adresse adequate ");
        }
       
    }
    return( 
        <form onSubmit={submitHandler} className="mep">
           <div className="titre">
            {/* La arrow function onChange permet de stocker les valeurs saisies au clavier par l'utilisateur pour pouvoir les inserer au Cv*/}
            <label id="txt" > <strong> FORMULAIRE A REMPLIRE  :</strong></label>
            
        </div> <br></br>
        <section className="infop">
        <span className="ip"> <i>INFORMATIONS PERSONNELLES </i></span> <br></br><br/>
        <div  id ="image ">  {/* htmlFor remplace  For presente dans l'HTML*/}
                <label htmlFor="inpimage" >Cliquer pour ajouter une photo ! </label>
                <input id="inpimage" type="file" accept="image/*"  onChange={event=>{image=event.target.files[0]}}/>
            {/* Le type file permet aux utilisateurs de choisir un fichiers de leurs repertoires , j'ai ajouté le parametre accept pour imposer le choix d'une photo */}
            </div> <br></br>
        <div>
                <legend id="txt">Sexe:</legend>
                <input type="radio" name="Sexe" id="sexe"/>
                <label htmlFor="Sexe">Feminin</label>
                <input type="radio" name="Sexe" id="sexe"/>
                <label htmlFor="Sexe">Masculin</label>
        </div> <br />
         <div>
                    <label id="txt" >Nom:</label> <br/>
                    <input type="text" id="nom" onChange={event => {nom = event.target.value}}/>  {/* on  va utiliser la meme fonction onChange appliquée aux differents champs */}
        </div>  <br></br>
        <div>
            <label id="txt">Prénom:</label> <br />
            <input type="text" id="prenom" onChange={event => {prenom = event.target.value}} /> 
        </div> <br></br>
        <div>
                <label id="txt">Âge:</label> <br /> 
                <input type="number" id="age" onChange={event => {age  = event.target.value}} />
         </div> <br></br>
         <div>
                <label id="txt">Adresse complète:</label> <br />
                <input type="text" id="adr"  onChange={event => {adresse = event.target.value}}/> 
         </div> <br />
         <div>
                <label id="txt">Mail:</label> <br />
                <input type="text" id="mail"  size="30" onChange={event => {emaila = event.target.value}} />
         </div>  <br />
         <div>
                <label id="txt"> Numero de télephone :</label> <br /> 
                <input type="text" id="age"  onChange={event => {numerotel  = event.target.value}}/>
         </div> <br/>
        </section>
        <div className="dop">
            <label id="txt">DESCRIPTION D'OBJECTIFS PERSONNELS:</label>  <br /> <br />
            <textarea id="description" cols="68" rows="6" onChange={event => {dop=event.target.value}}></textarea>  {/* textarea est une input qu'on peut modifier sa taille  */}
        </div> <br />
        
        <div className="FD">
            <label id="txt">FORMATIONS ET DIPLOMES:</label> <br /> <br />
            <section className="sc1">
                <div > <textarea id="formation" cols="28" rows="2" placeholder="La formation..." onChange={event => {form1=event.target.value}}></textarea> 
                <textarea id="formation" cols="28" rows="2" placeholder="Date de debut - Date de fin"  onChange={event => {date1=event.target.value}} ></textarea>  {/* placeholder je l' ai utiliser pour mieux detailler ce qu'on attend de l'utilisateur  */}
                </div>
                 <div >
                <textarea id="formation" cols="28" rows="2" placeholder="La formation..." onChange={event => {form2=event.target.value}}></textarea> 
                <textarea id="formation" cols="28" rows="2" placeholder="Date de debut - Date de fin" onChange={event => {date2=event.target.value}}></textarea> 
                 </div>
                 <div > <textarea id="formation" cols="28" rows="2" placeholder="La formation..." onChange={event => {form3=event.target.value}}></textarea> 
                 <textarea id="formation" cols="28" rows="2" placeholder="Date de debut - Date de fin" onChange={event => {date3=event.target.value}}></textarea> 
                
                 </div>
               
            </section>
        </div> <br></br>
        <section className="comp">
                <label className="titlecom"> COMPÉTENCES ACQUISES </label><br/><br/>
            <div>
                <label id="txt"> Techniques:</label> <br /> <br />
                <textarea id="techniques" cols="68" rows="2" onChange={event => {tech1=event.target.value}} placeholder="niveau elevé ..."></textarea> <br /><br />
                <textarea id="techniques" cols="68" rows="2" onChange={event => {tech2=event.target.value}} placeholder="niveau moyen ..."></textarea> <br /><br />
                <textarea id="techniques" cols="68" rows="2" onChange={event => {tech3=event.target.value}} placeholder="niveau simple ..."></textarea> 
            </div> <br />
            <div>
                <label id="txt">Linguistiques:</label> <br /> <br />
                <textarea id="linguistiques" cols="68" rows="6" onChange={event => {langue=event.target.value}}></textarea> 
            </div> <br />
        </section> <br />
        <button id="bttn" ><strong>submit</strong> </button>   {/* Le bouton ainsi utilisé est la base pour que les checkers font leurs travails */}

        </form>
    )
}