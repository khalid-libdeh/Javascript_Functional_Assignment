export async function onFilterChange(cb){
    let elements = document.getElementsByClassName('dropdown-item');

    Array.from(elements).forEach((element) => {
        element.addEventListener('click', (event) => {
            cb(event.target.innerText);
            filterMenuValue.innerText = event.target.innerText;
        });
    });
    let filterMenuValue = document.getElementById('drop-down');

}

export function filterCountries(countries, filter, favArray){

    if(filter==='No filter')
        return countries;
    else if(filter ==='Favourites'){
        console.log(favArray);
        console.log(countries);
        return countries.filter(country=> favArray.includes(country['name']['common']));
    }
    let tempCountries = countries.filter((country)=>{
        return country['region'].includes(filter);
    })

    return tempCountries;
}


