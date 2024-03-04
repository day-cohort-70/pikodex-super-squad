import { formatedPikomon } from "./pikomon.js" //this will imort the formatedPikomon object (function) from pikomon.js so that the logic of that function can be accessed and used when the function has been inviked on this module
import { getPikomon } from "./database.js"  //this will imort the getPikomon object (function) from the database so that the data base can be accessed when the function has been inviked on this module

const container = document.querySelector('#container')
container = formatedPikomon(getPikomon())

// create cards for each pikoman that contain specific details 

//we want to arrande the cards using css so that they present in a 3 row collum 







