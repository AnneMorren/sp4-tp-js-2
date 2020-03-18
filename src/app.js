/*

Conseil 1: l'anglais est super important pour votre carrière de développeur/dévelopeuse : utilisez les outils de traduction !

Conseil 2 : quand une fonction est codée et se copporte correctement, pas besoin de la recoder encore et encore...
https://fr.wikipedia.org/wiki/Ne_vous_r%C3%A9p%C3%A9tez_pas
Une fonction peut utiliser le service rendu par une autre fonction pour éviter de répéter du code

exemple :

function a(param) {
  return param.length;
}

function b(x) {
  const y = x + "-courage";
  return a(y);
}

*/
/*

helpers : 

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/isArray
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/isInteger

- nombre decimal ? : https://www.youtube.com/watch?v=lzsYQYvEKss
- une moyenne (average) ? : https://www.youtube.com/watch?v=onLsjGIrf_E

*/

function demoFunction(numbers) {
  return numbers.length;
}

sumAllNumbers = null;
getSmallestNumber = null;
getBiggestNumber = null;
sumPositiveNumbers = null;
getAverage = null;
sumPositiveOddIntegers = null;

// ATTENTION : ne pas modifier cet export !!!
module.exports = {
  demoFunction,
  sumAllNumbers,
  getSmallestNumber,
  getBiggestNumber,
  sumPositiveNumbers,
  getAverage,
  sumPositiveOddIntegers
};
