//ZAIDI ASMAE
import './cv.css' //Il faut importer le Css pour pouvoir profiter des styles ...*/
/* La fonction permet d'adapter les valeurs saisi au  formulaire  sur le CV et afficher ce dernier */
const Cv = ({currentUser}) => {
    return ( 
   // Le parametre dont depend la fonction est la fonction permettant l'actualisation des valeurs saisies par l'utillisateur */
    <div className ="container">
        <header>  {/* Notre  page du Cv  sera divisée en 3 parties : le "header", le "main " et le "footer" */ }
            <div className ="info-container">
                <img src={URL.createObjectURL(currentUser.image)} alt="image personnel" /> {/* la source sera celle  saisi en formulaire */ }
                <span className ="name">{currentUser.nom} {currentUser.prenom}</span>  {/* les inputs seront remplies par les valeurs saisies au clavier */}
                <span className ="date">{currentUser.age} ANS </span>
            </div>
            {/* il y aura  des div et span definis pour  pouvoir categoriser les informations entrées*/}
           
            <div className ="contact-container">
                <span className ="container-title">Contact info</span> {/* Ce span est defini pour inserer les informations du contact */}
                <div className ="contact-wrapper">
                    <a>
                        <i className ="fa-solid fa-location-dot"></i>
                        <span>{currentUser.adresse}</span>   {/*actualisation de la valeur de l'adresse */}
                    </a>
                   
                    <a href="mailto:zaidiasmae2002@gmail.com">
                        <i className ="fa-solid fa-envelope"></i>
                        <span>{ currentUser.emaila}</span>  {/*actualisation de la valeur de l'email' */}
                    </a>
                    <a href="tel:+212648589246">
                        <i className="fa-solid fa-phone"></i>
                        <span>{currentUser.numerotel}</span>  {/*actualisation de la valeur du numero de tel */}
                    </a>
                </div>
                </div>
            <div className="languages-container">
                <span className="container-title">langages</span> {/* Ce span est  defini pour inserer les langues maitrisées  */}
                <div className="languages-wrapper">
                    <span>{currentUser.langue}</span> {/*actualisation de la valeur des competences languistiques  */}
                    
                </div>
            </div>
        </header>  {/*fin du header */}
        <main> {/* dubut de la partie du main */}
            <section className ="profile-section">
                <div className ="section-title">PROFILE</div> {/* cette div  est  definie pour inserer les informations sur le profil */}
                <div className ="profile-infos">
                    {currentUser.dop}                {/*actualisation de la valeur du champ de description de l'objectif personnel  */}
                </div>
            </section>
            <section className ="education-section">
                <div className ="section-title">EDUCATION</div> {/* Cette div est  definie pour inserer des propos sur l'education  */}

                <div className ="education-infos">
                    <span className ="delay">{currentUser.date1}</span>    {/*actualisation de la valeur du champ de periode de la premiere formation  */}
                    <div className ="details">
                       {currentUser.form1}                                  {/*actualisation de la valeur du champ de la premiere  formation  */}
                    </div>
                </div>
                <div className ="education-infos">
                    <span className ="delay">{currentUser.date2}</span>  {/*actualisation de la valeur du champ de periode de la deuxieme formation  */}
                    <div className ="details">
                        {currentUser.form2}                    {/*actualisation de la valeur du champ de la deuxieme formation  */}
                    </div>
                </div>
                        
             <div className ="education-infos">
            <span className ="delay">{currentUser.date3}</span>       {/*actualisation de la valeur du champ de periode de la troisieme  formation  */}
            <div className ="details">
            {currentUser.form3}                               {/*actualisation de la valeur du champ de la troisieme   formation  */}
            </div>
        </div>
        </section>
            <section className="skills-section">
                <div className="section-title">SKILLS</div>  {/* Cette div est definie pour inserer les compétences techniques */}
                <ul className="skills-wrapper">
                    <li className ="skill">
                        <div className ="skill-name"> {currentUser.tech1}</div>      {/*actualisation de la valeur du champ de la premiere competence   */}
                        <div className ="skill-bar bar1" ></div>      {/* j'ai mis cette div pour mettre une animation du niveau d'aquisition des competences */}      
                    </li>
                    <li className ="skill">
                        <div className ="skill-name">{currentUser.tech2}</div>          {/*actualisation de la valeur du champ de la deuxieme  competence  */}
                        <div className ="skill-bar bar2" ></div>    {/* même  style d'animation */}
                    </li>
                    <li className ="skill">
                        <div className ="skill-name">{currentUser.tech3}</div>            {/*actualisation de la valeur du champ de la troisieme  competence  */}
                        <div className ="skill-bar bar3" ></div>           {/* même  style d'animation */}
                    </li>
                
                   </ul>
        </section> {/* la mise des section m'apparait benefique pour faciliter l'affectation des styles */}
        </main>  {/* fin du main*/}
        <footer> {/* balise footer*/}
            <div className ="edited">
                Edited by : <span>{currentUser.prenom} {currentUser.nom}</span>      {/* affichage du nom et prenom de l'utilisateur inserant ses propres infos */}
            </div>

            <div> Â© Copyright 2022. All rights reserved.</div>    {/* autre div dont sa valeur va demeurer afficher sans aucun changement */}
        </footer>

    </div> 
    )}
    
    

 
export default Cv;   {/* export la fonction pour pouvoir l'importer dans app.jsx*/}
