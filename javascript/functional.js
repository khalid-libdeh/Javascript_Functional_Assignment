import {onSearch} from './searchFunctions.js';
import {loadCountries} from './loadCountries.js';
import {renderCountries} from "./renderCountries.js";
import {toggleDark} from './darkMode.js'
import {filterCountries, onFilterChange} from "./filter.js";
import {handleFavouritesDragover, handleFavouritesMobile} from "./favouritesHandlers.js";

let countries = [];
    let filter = [];
    let fav = JSON.parse(localStorage.getItem('favourites'));
    fav = handleFavouritesMobile(fav);
    let favList = document.getElementById('fav-list');

    countries = await loadCountries();
    localStorage.setItem('allCountries',JSON.stringify(countries));
    await renderCountries(filterCountries(countries,filter));
    onSearch(async (searchValue) => {

        countries = await loadCountries(searchValue);
        await renderCountries(filterCountries(countries,filter,fav));
    });

    await onFilterChange((selectedFilter)=>{
       filter = selectedFilter;
       renderCountries(filterCountries(countries,filter,fav));
       fav = handleFavouritesMobile(fav);
    });

    toggleDark(()=>{
        let bodyDark = document.body;
        bodyDark.classList.toggle("dark");
        if(bodyDark.classList.contains('dark'))
            localStorage.setItem('dark','yes');
        else
            localStorage.setItem('dark','no');
    });

    handleFavouritesDragover();


    favList.addEventListener('drop', e =>{
        e.preventDefault();

        favList.classList.remove('fav-list--over');
        let data = e.dataTransfer.getData('text/plain').split(",");
        renderFavouritesList(data);
    });
    fav = handleFavouritesMobile(fav);

function renderFavouritesList(data){

    if(fav.includes(data[0]))
        return;

    let listItemString = `<img src="${data[1]}" class="rounded">
        <span>${data[0]}</span>`
    let listItem = document.createElement('div');
    listItem.id = data[0];
    listItem.innerHTML = listItemString;
    let buttonString = `<i id="${data[0]}" class="fa fa-close"></i>`;
    let buttonElement = document.createElement('button');
    buttonElement.classList.add('xBtn');
    buttonElement.innerHTML = buttonString;
    fav.push(data[0]);
    listItem.append(buttonElement);
    buttonElement.addEventListener('click',()=>{
        let removeElement = buttonElement.parentElement;
        for(let i=0; i<fav.length;i++){
            if(fav[i] === removeElement.id) {
                fav.splice(i, 1);

            }
        }
        localStorage.setItem('favourites',JSON.stringify(fav));
        removeElement.remove();
        renderCountries(filterCountries(countries,filter,fav));

    });
    favList.append(listItem);
    localStorage.setItem('favourites',JSON.stringify(fav));
}



