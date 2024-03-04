export const formatedPikomon = (data) => {
    let htmlString = ``
    for (const pikomon of data) {
        htmlString += `<div class="piko.card">
        <img class="piko.img" src="${pikomon.imageUrl}">
          <li class="piko-name">${pikomon.name}</li>
          <li class="piko-category">Category: ${pikomon.category}</li>
          <li class="piko-abilites">Abilities: ${pikomon.abilities} inches</li>
          <li class="piko-weakness">Weakness: ${pikomon.weakness}</li>
        </div>`
    }

    return htmlString
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

export const FishList = (fishes) => {
    let htmlString = ''
    for (const fish of fishes) {
        htmlString += `<div style="padding: 15px">
        <div class="gallery">
        <img class="polaroid" src="${fish.image}">
          <div class="desc">
          <p style="font-size:150%"><b>${fish.name}</b></p>
          <p>Species: ${fish.type}</p>
          <p>Size: ${fish.size} inches</p>
          <p>Diet: ${fish.food}</p>
          <p>Harvest Location: ${fish.location}</p>
          </div>
        </div>
      </div>`
    }

    return htmlString
}
*/