import { formatedPikomon } from "./pikomon.js"
import { getPikomon } from "./database.js"

const container = document.querySelector('#container')
container = formatedPikomon(getPikomon())












