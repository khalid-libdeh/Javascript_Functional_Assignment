export function onSearch(cb){
        let search = document.getElementById('search');
        search.addEventListener('input',()=>{
                debounce(cb(search.value),250);
        });
}

export function debounce (fn, delay){
        let timeoutId;

        return (arg) => {
                // cancel the previous timer
                if (timeoutId) {
                        clearTimeout(timeoutId);
                }
                // setup a new timer
                timeoutId = setTimeout(() => {
                        fn(arg);
                }, delay);
        };
};
