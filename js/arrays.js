
const family = ['Caluza', 'Silile', 'Wonder', 'Tman', 'Midu']
// push & unshift adds values to an array 1st & last respectivly 
family.push('Mum', 'Dad')
family.unshift('Ndhlovu')
console.log('family', family);

// const parents = ['Mum', 'Dad']
// console.log('parents', parents);

// const wholeFamily = kids +  parents
// console.log('family',wholeFamily);

// pop & shift values to an array 1st & last respectivly 
family.pop()
family.shift()
console.log('Fam', family);


// spread operator
const hobbies = ['swimming', 'running', 'diving'];
const moreHobbies = ['driving', 'flying', ...hobbies]

console.log('hobbies', hobbies);
console.log('more', moreHobbies);


// Loop thru an Array

const cities = ['Bulawayo', 'Harare', 'Gweru', 'Bridge', 'Falls', 'Plumtree']


// function createList (arr) {
//     let item = '';
//     for (let i = 0; i < arr.length; i++) {
//         item += `<li>${arr[i]}</li>`
//     }
//     return item;
// }

// document.querySelector('main').innerHTML = `
// <ol>
//     ${createList(cities)}
// </ol>
// `
