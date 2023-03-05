import {renderSelectedCountry} from "./renderCountry.js";
import {toggleDark} from "../darkMode.js";
import {getData} from "../passData.js";
import {loadCountries} from "../loadCountries.js";

let name = (getData('countryName'));
console.log(name);
let currentCountry = await loadCountries(name);
console.log(currentCountry);
await renderSelectedCountry(currentCountry);
toggleDark(()=>{
    let bodyDark = document.body;
    bodyDark.classList.toggle("dark");
    if(bodyDark.classList.contains('dark'))
        localStorage.setItem('dark','yes');
    else
        localStorage.setItem('dark','no');
});

