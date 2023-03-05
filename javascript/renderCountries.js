export async function renderCountries(countries){
    let container = document.getElementById('add-countries');
    let cardElement;
    let cardString;
    let star = document.createElement("button");
    star.innerHTML =

    container.innerHTML='';
    countries.forEach((country)=>{

        cardElement= document.createElement("div");
        cardElement.classList.add('col')
        cardString =`<a class="card text-black text-decoration-none" href="#" draggable="true">
                <img src=${country['flags']['svg']} class="card-img-top img-fluid  object-fit-cover " alt="...">
                <div class="card-body">
                    <h4 class="card-title"><b>${country['name']['common']}</b></h4>
                    <div class="card-text"><b>Population: </b>${country['population'].toLocaleString()}</div>
                    <div class="card-text"><b>Region: </b>${country['region']} </div>
                    <div class="card-text"><b>Capital: </b>${country['capital']}</div>
                    <i id="${country['name']['common']}" class="fa fa-star d-flex justify-content-end w-100" display="hidden!important;"></i>
                </div>
            </a>`;


        cardElement.innerHTML = cardString;
        cardElement.append(star);

            cardElement.addEventListener('dragstart',e => {
            let name = country['name']['common'];
            let icon = country['flags']['svg'];
            e.dataTransfer.setData("text/plain",name + ","+ icon);
        });
        cardElement.addEventListener('click',(event)=>{

            localStorage.setItem('currentCountry',JSON.stringify(country));
           // localStorage.setItem('cname',country['name']['common']);
            window.location.href = 'details.html?countryName='+country['name']['common'];
        });

        container.append(cardElement);
    });
}
