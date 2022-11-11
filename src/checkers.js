//ZAIDI ASMAE
const vcar = (x) => {
    var test = true
    // la commande qui suit est une fonction utile dans verifier si les choses saisis sont des caracteres ou pas  
     // toLowerCase est une fonction qui permet  de tous transformer en minuscule 
     // split est une fonction qui permet de transformer un element en "array" pour pouvoir utiliser forEach  qui est une autre fonction permettant de parcourir tout les elemnts d' un  "array" .
   x.toLowerCase().split("").forEach(char => {
       if(!(char.charCodeAt() >= 97 && char.charCodeAt() <= 122)){
        // la ligne precedente permet de verifier si les elements sont des caracteres ou pas 
           test = false
           // si non ; la variable test reçoit false 
       }})
   return test
   // la fonction retourne une valeur booléenne . true si le mot saisi sont des caracteres et false  sinon .
}
// la fonction permet de checker si le nom saisi est en majuscule ou pas 
export const vnom =(nom) =>{
    // la condition qui suit compare le nom avec son majuscule , s'ils sont pas identiques elle retourne false 
    if(!nom ) return false
    if(!(nom.toUpperCase() === nom)) return false
    // puis on fait appel à la fonction vcar pour verifier s'il s'agit des caracteres 
    return vcar(nom)
}
// La fonction permet de checker si la premiere lettre du prenom est escrite en majuscule ou pas 
export const vprenom =(prenom) =>{
    if(!prenom ) return false
    // on compare la premiere lettre avec elle meme transformée en majuscule
    if(!(prenom.toUpperCase()[0] === prenom[0])) return false
     // s'ils sont differents la fonction retourne false
    return vcar(prenom)
    // l'appel à la fonction permet de verifier si le prenom saisi est une chaine de caracteres 
}
// la fonction permet de verifier si l'age saisi est <18 ou l'invers 
export const vage =(age) => age >= 18

// la fonction permet de verifier si l'adresse mail saisi a une format convenable
export const  vmail = (email) => { 
    if(!email ) return false
    //c'est une expression standars permettant la verification du format de l'email 
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    return regexExp.test(email)
}

// La fonction permet de verifier que la description  saisie est une chaine de caracteres
export const vdesc =(desc) => { 
    if(!desc ) return false
    return vcar(desc)}
// La fonction permet de verifier l'adresse email saisi 
export const vadr =(adre) =>{
    if(!adre ) return false
    if(adre.length > 300) return false
    // si la taille d'adresse saisi est superieure à 300  la fonction retourne false et true sinon. 
    var test = true
    // ce qui suit est un appel de la fonction vcar pour s'assurer que l'adresse saisie est une chaine de caracteres
    adre.toLowerCase().split("").forEach(char => {
        if(!isNaN(char)) return false
        if(!(char.charCodeAt() >= 97 && char.charCodeAt() <= 122)){
            test = false
        }
    })
    return test
}



