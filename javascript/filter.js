export function onFilterChange(cb){
    let elements = document.getElementsByClassName('dropdown-item');

    Array.from(elements).forEach((element) => {
        element.addEventListener('click', (event) => {
            cb(event.target.innerText);
            filterMenuValue.innerText = event.target.innerText;
        });
    });
    let filterMenuValue = document.getElementById('drop-down');

}

export function filterCountries(countries, filter){
    let tempCountries = [];
    if(filter==='No filter')
        return countries;

    countries.forEach((country)=>{
      if(country['region'].includes(filter))
          tempCountries.push(country);
    })

    return tempCountries;
}


