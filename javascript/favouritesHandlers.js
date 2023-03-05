export function handleFavouritesDragover(){
    let favList = document.getElementById('fav-list');
    favList.addEventListener('dragover',e =>{
        e.preventDefault();
        favList.classList.add('fav-list--over');
    });
}

export function handleFavouritesMobile(favArray){
    let favIcons = document.getElementsByClassName('fa');
    for(let i = 0;i<favIcons.length;i++){
        if(favArray.includes(favIcons[i].id) && !favIcons[i].classList.contains('checked')){
            favIcons[i].classList.add('checked');
        }
        favIcons[i].addEventListener('click',(e)=>{
            e.preventDefault();
            e.stopImmediatePropagation();
            let favCountryName = favIcons[i].id;
            if(favIcons[i].classList.contains('checked')){
                favIcons[i].classList.remove('checked');
                let index = favArray.indexOf(favCountryName);
                if (index > -1) { // only splice array when item is found
                    favArray.splice(index, 1); // 2nd parameter means remove one item only
                }
            }else{
                favIcons[i].classList.add('checked');
                favArray.push(favCountryName);
                console.log(favArray)
            }
            localStorage.setItem('favourites',JSON.stringify(favArray));
        });
    }
    localStorage.setItem('favourites',JSON.stringify(favArray));
    return favArray;
}