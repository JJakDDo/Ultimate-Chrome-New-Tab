const search_form = document.querySelector(".search-form");
const input = search_form.querySelector("input");


function init(){
    search_form.addEventListener("submit", function(e){
        e.preventDefault();
        let url = "https://www.google.com/search?q=";
        const query = input.value;
        console.log(url+query);
        window.location.href = url + query;
    });
}

init();