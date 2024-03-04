import { formatedPikomon } from "./pikomon.js"
import { getPikomon } from "./database.js"

const container = document.getElementById('container')
container.innerHTML = formatedPikomon(getPikomon())












