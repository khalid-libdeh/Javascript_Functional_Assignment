export async function loadCountries(countryName){
    try {
        let response;
        if (countryName === 'all' || countryName === '')
            response = await fetch('https://restcountries.com/v3.1/all');
        else
            response = await fetch('https://restcountries.com/v3.1/name/' + countryName);


        console.log(response.status); // 200
        console.log(response.statusText); // OK
        if (response.status === 200) {
            let data = await response.json();
            return data;
            // handle data
        } else {
            console.log(response.status);
        }
    }catch(err){
        console.log(err);
    }
}

export function renderCountries(countries){
    let container = document.getElementById('add-countries');
    let cardElement;
    let cardString;

    container.innerHTML='';
    countries.forEach((country)=>{

            cardElement= document.createElement("div");
            cardElement.classList.add('col-sm')
            cardString =`<a class="card text-black text-decoration-none" href="#">
                <img src=${country['flags']['svg']} class="card-img-top img-fluid  object-fit-cover " alt="...">
                <div class="card-body">
                    <h4 class="card-title"><b>${country['name']['common']}</b></h4>
                    <div class="card-text"><b>Population: </b>${country['population'].toLocaleString()}</div>
                    <div class="card-text"><b>Region: </b>${country['region']} </div>
                    <div class="card-text"><b>Capital: </b>${country['capital']}</div>
                </div>
            </a>`;

            cardElement.innerHTML = cardString;
            cardElement.addEventListener('click',(event)=>{
                localStorage.setItem('currentCountry',JSON.stringify(country));
                localStorage.setItem('cname',country['name']['common']);
                document.location.href = 'details.html';
            });
            container.append(cardElement);
    });
}
