import {onSearch} from './searchFunctions.js';
import {loadCountries, renderCountries} from './loadCountries.js';
import {toggleDark} from './darkMode.js'
import {filterCountries, onFilterChange} from "./filter.js";

let countries = [];
    let filter ='No filter';
    countries = await loadCountries('all');
    localStorage.setItem('allCountries',JSON.stringify(countries));
    renderCountries(filterCountries(countries,filter));
    onSearch(async (searchValue) => {

        countries = await loadCountries(searchValue);
        renderCountries(filterCountries(countries,filter));
    });

    onFilterChange((selectedFilter)=>{
       filter = selectedFilter;
       renderCountries(filterCountries(countries,filter));
    });
    toggleDark(()=>{
        let bodyDark = document.body;
        bodyDark.classList.toggle("dark");
        if(bodyDark.classList.contains('dark'))
            localStorage.setItem('dark','yes');
        else
            localStorage.setItem('dark','no');
    });




