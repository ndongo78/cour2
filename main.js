
// String Number Array Object, undefined,null

//Operators

//addition operator +
// subtract operator -
// multiplication operator *
// division operator /
//module operator %
//operator +=
// ++ ajouter 1 et -- subtract 1

// let a=15;
// let b=20;

// let z=  b % a;

//? creer un script qui demande a user d'entre son prenom et afficher Bonjour suivi du prenom
// const prenom =prompt("Veillez saisir votre prenom");

// const message="Bonjour ";

// console.log(message +" " + prenom)

//? creer un script qui demande a user d'entre un nombre  et afficher le nomber multIplier 10 alerter le resultat

// const nombre= prompt("Entrer un nombre");
// const result= nombre * 10;

// alert(result)

// let n=5;
// // n *= 5;
// n /= 5;
// n -= 5;

// console.log(n)

//comparaison
//> < >= <=  == === !=
const result= 0 >= 2;
const boll=undefined;
// alert(Boolean(boll));
//console.log(Boolean(-1))

//conditions 
if(true){
    //si c'est true ce block de code est executer
}//sinion si 
else if(true){

}
else{
     //sinon c'est true ce block de code est executer
}

//? Demander user quel heure il est venu 
//? Si l'heure inferieur a 8 on execute un code  C'est pas l'heure de commence 
//? Sinon si heure est superior a 8h on execute un code afficher Vous etes en retard
//? Sinon  heure 8 on affiche Bonjour vous etes a l'heure

// let heureDebut=8;
// let heureDePointage=prompt("Veillez entrer l'heure de votre arriver")

// if(heureDePointage < heureDebut){
//     alert("C'est pas l'heure de commence")
// }else if (heureDePointage > heureDebut){
//     alert("Vous etes en retard")
// }else{
//     alert("Bonjour vous etes a l'heure")
// }

//Boite de nuit
//? Pour entre dans notre boite il faut etre age de 18 ou plus 
//? Demander au user d'entrer son annee de naissance 
//? Verifier que le user a entrer des donnes valide avant de lancer notre algo
//? Si le user est age de 18  affiche Laisser le entre
//? sinon if le user est age de moins de 18 affiche Vous ne pouvez pas entrer
//? sinon  le user est age de plus de 18 affiche Vous pouvez entreer l'acien

//tenery operator
//condition ? vrai : false;

// const annee=2023;

// const userYear=prompt("Veillez entrer votre annee de naissance");

// const age= annee - Number(userYear);
// age >=18 ? alert("Vous pouvez entreer l'acien") :  alert("Vous ne pouvez pas entrer") 

// if(userYear === ""){
//     alert("Ne peut etre vide")
// }else if (isNaN(userYear)){
//     alert("Veillez des nombres")
// }else{
//      const age= annee - userYear;
//       age >=18 ? alert("Vous pouvez entreer l'acien") :  alert("Vous ne pouvez pas entrer")
//     //  if(age >= 18){
//     //   alert("Vous pouvez entreer l'acien")
//     //  }else{
//     //     alert("Vous ne pouvez pas entrer")
//     //  }
// }

//tenery operator
//condition ? vrai : false;
//switch
//  const annee=2023;

// const userYear=prompt("Veillez entrer votre annee de naissance")
// switch (userYear) {
//      case "login":
//         alert("Vous devez vous connecter")
//         break;
//     case "password":
//         alert("Mot de passe incorrect")
//            default:
//             alert("Vous etes connecter")
// }

//operator de login || && !

const a="";
const b=0;

 //alert(true || false ) //true
//  alert(false || false) //false
// alert(false || true) //true
// alert(true || true) //true

// if(1 || 0){
//     alert("information")
// }
// let heureDebut=8;
// let isWeek= true;

// if(heureDebut < 10 || heureDebut > 18 ||  isWeek ){
//    alert("true ou false")
// }

// let firstName=undefined;
// let lastName=undefined;
// let nickName="john";


// true || alert("Bonjour");
//  false || alert("Bonjour les informations")
// alert(firstName || lastName || nickName)

//&&
// nous retourne true si les deux operandes sont true et false dans les autres cas
// true && true  //true
// false && true //false
// true && false //false
// false && false //false

// let hour =12;
// let minute=30;

// let x=1;

// (x >-1) && alert("Bonjour")


// hour && alert ("C'est l'heure de la pause");


// if(1 && 5){
//     document.getElementById("para").textContent= "C'est l'heure de la pause";
// }
// !
// inverse la condition 

// alert(!"Hello world!");
// alert(!null)

//? Pour entre dans notre boite il faut etre age de 18 ou plus 
//? Demander au user d'entrer son annee de naissance 
//? Verifier que le user a entrer des donnes valide avant de lancer notre algo
//? Si le user est age de 18  affiche Laisser le entre
//? sinon if le user est age de moins de 18 affiche Vous ne pouvez pas entrer
//? sinon  le user est age de plus de 18 affiche Vous pouvez entreer l'acien

// const annee=2023;

// const userYear=prompt("Votre annee de naissance")

// //validation dentrer input
// if(!isNaN(userYear) && userYear != ""){
//     const age= annee - userYear;
//     if(age >= 18 || age >18 ){
//         document.getElementById("para").textContent= "Vous pouvez entreer l'acien";
//     }else{
//         document.getElementById("para").textContent= "Vous ne pouvez pas entrer";
//     }
// }else{
//     alert("Verifier le champs")
// }

//? ecrire le divinet
//? Demande au user d'entre un nombre si le nombre est supperieur a divinet afficher nombre trop ,
//? sinon if le nombre est inferieur
//? devinet afficher le nombre est petit sinon afficher bravo vous avez trouver divinet

// const divin=10;

// const number=prompt("Entrer votre nombre")

// if(number > divin){
//     alert("Nombre trop grand")
// }else if(number < divin){
//     alert("Nombre trop petit")
// }else{
//     alert("Bravo vous avez trouver le divinet")
// }

//! Math

// //genere random number
//  const random=Math.floor(Math.random() * 10) +1;
// //arrondir les numbers
// const arrondi=random.toFixed(2)
// //mathe

//? ecrire le divinet
//? Demande au user d'entre un nombre si le nombre est supperieur a divinet afficher nombre trop ,
//? sinon if le nombre est inferieur
//? devinet afficher le nombre est petit sinon afficher bravo vous avez trouver divinet
//? ajouter un compteur d'essaye si le user a effectuer 5 tentative affiche desoler avous echouer

// const divinet=Math.floor(Math.random() *10)+1;
// const number=prompt("Entrer votre nombre")
// let compteur=5;

// if(number > divinet && compteur !=0){
//     alert("Nombre trop grand")
//     compteur--;
//     console.log(compteur)
// }else if(number < divinet  && compteur !=0){
//     alert("Nombre trop petit")
//     compteur--;
//     console.log(compteur)
// }else{
//     alert("Bravo vous avez trouver le divinet")
// }

//document.getElementById("para").textContent=divinet;

// const randomNumber=Math.floor(Math.random()*100)+1;
// document.getElementById("para").textContent=randomNumber;

//! les boucles 

//for while do while 

//while tant que la condition est true execute le code

// while(condition){}

// let i=10;

//  while( i ) {
//     console.log(i)
// }

//do while
//do {corps de la boucle}while( condition)
// let i=10;
// do{
//   console.log(i)
//   i--;
// }while( i > 0)

//for

// for(debut ; condition; etape){
//  // corps de la boucle
// }

// const z=2;
// for(let x=10  ;   x > 0; x--){
//     console.log(x * z)
// }

//? ecrire une boucle qui calcul la somme des nombres de 1 a 100

// let  x=0;

// while(x <100){
//     console.log(x)
//     x++;
// }

//? ecrire une boucle qui affiche la table de multiplication d'un nombre choisir par un user

// const number=parseInt(prompt("Saissir un nombre"))

// for (let i=0 ; i <= 10 ; i++){
//  console.log(`${number} x ${i} = ${number * i}`);
// }

//? ecrire un boucle qui recherche le plus grand nombre dabs notre tableau

const noteArray=[10,50,1000,150,0,-1]