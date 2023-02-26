export function onSearch(cb){
        let search = document.getElementById('search');
        search.addEventListener('input',()=>{
                debounce(cb(search.value));
        });
}

export function debounce (fn){
        let timeoutId;

        return (arg) => {
                // cancel the previous timer
                if (timeoutId) {
                        clearTimeout(timeoutId);
                }
                // setup a new timer
                timeoutId = setTimeout(() => {
                        fn(arg);
                }, 600);
        };
};
