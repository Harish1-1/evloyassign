let my = document.getElementById("hello");
let search = document.getElementById("search");
let keywords = document.getElementById("key");
my.addEventListener("submit", function(event) {
    event.preventDefault();
    const api_key = "AIzaSyDIM2lMePGZFl2gGepi_Zu5sWR46yOZ6D4";
    const keyword = keywords.value;
    console.log(keyword)
    fetch(`https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(keyword)}&key=${api_key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let appear = data.pageInfo.totalResults;
            search.innerHTML = `<p>"${keyword}" appeared <i>${appear}`
        })

})
