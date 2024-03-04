export const formatedPikomon = (data) => {
    let htmlString = ``
    for (const pikomon of data) {
        htmlString += `<div class="piko.card">
        <img class="piko.img" src="${pikomon.imageURL}">
          <li class="piko-name">${pikomon.name}</li>
          <li class="piko-category">Category: ${pikomon.category}</li>
          <li class="piko-abilites">Abilities: ${pikomon.abilites} inches</li>
          <li class="piko-weakness">Weakness: ${pikomon.weakness}</li>
        </div>
        </div>`
    }
 }

/*

import the data base into this module- 

this module will define the function. 

 export const formatedPikomon = (data) => {
    let htmlString = ''
    for (const pikomon of data) {
        htmlString += `<div class="piko.card">
        <img class="piko.img" src="${pikomon.imageURL}">
          <li class="piko-name">${pikomon.name}</li>
          <li class="piko-category">Category: ${pikomon.category}</li>
          <li class="piko-abilites">Abilities: ${pikomon.abilites} inches</li>
          <li class="piko-weakness">Weakness: ${pikomon.weakness}</li>
        </div>`
    }

 }


iterating through the datat base pulling all the objects out of the array to be used in the main.js module

export{formatedPikoman}

*/