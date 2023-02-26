import {renderSelectedCountry} from "./renderCountry.js";
import {loadCountries} from "../loadCountries.js";
import {toggleDark} from "../darkMode.js";

let countries = await loadCountries('all');
let currentCountry = JSON.parse(localStorage.getItem('currentCountry'));
renderSelectedCountry(currentCountry);
toggleDark(()=>{
    let bodyDark = document.body;
    bodyDark.classList.toggle("dark");
    if(bodyDark.classList.contains('dark'))
        localStorage.setItem('dark','yes');
    else
        localStorage.setItem('dark','no');
});

