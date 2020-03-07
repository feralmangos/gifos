"use strict"

document.getElementById("btn-night").addEventListener("click", function() {
    document.body.style.backgroundColor = "#110038";
    document.getElementById("logo").src = "img/gifOF_logo_dark.png";
    let element = document.getElementById("top-bar");
    element.className = "top-bar2";
    let element2 = document.getElementById("top-search-bar");
    element2.className = "top-search-bar2";
    for (i = 0; i < 4; i++) {
        let trendingBar = "trending-bar" + i;
        let element3 = document.getElementById(trendingBar);
        element3.className = "trending-bar2"
    }
    document.getElementById("misguifos").className = "misguifos2";
});
document.getElementById("btn-day").addEventListener("click", function() {
    document.body.style.backgroundColor = "#fff4fd";
    document.getElementById("logo").src = "img/gifOF_logo.png";
    let element = document.getElementById("top-bar");
    element.className = "top-bar";
    let element2 = document.getElementById("top-search-bar");
    element2.className = "top-search-bar";
    for (i = 0; i < 4; i++) {
        let trendingBar = "trending-bar" + i;
        let element3 = document.getElementById(trendingBar);
        element3.className = "trending-bar"
    }
    document.getElementById("misguifos").className = "misguifos"
});

/*Gifs*/

let apiKey = "X9RaiTfV4ox9bTTI07YUGvvyKHsQVA1Q";
let searchFromBar = "cat";
console.log(searchFromBar)

let trendingBoxes = [];

(async function getSearchResults(search, apiKey) {
    for (let i = 0; i < 4; i++) {
        const found = await fetch("https://api.giphy.com/v1/gifs/random?api_key=X9RaiTfV4ox9bTTI07YUGvvyKHsQVA1Q&tag=&rating=R")
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data;
            })
            .catch(error => {
                return error;
            });
        trendingBoxes.push(found);
        console.log(trendingBoxes)
    }
    calculating();
})()



console.log(trendingBoxes);



function calculating() {
    for (let i = 0; i < 4; i++) {
        let trendinImg = "trending" + i;
        let imagesrc = trendingBoxes[i].data.images.downsized.url;
        let text = trendingBoxes[i].data.title;
        console.log(text)
        document.getElementById("title-box" + i).innerHTML = text;
        console.log(imagesrc + " " + trendinImg)
        let element = document.getElementById(trendinImg)
        element.src = imagesrc;
    }

}




/*(async function Print(trending, trendingBoxes) {

    for (let i = 0; i < 4; i++) {
        elemId = "trending" + i;
        document.getElementById(elemId).src = trendingBoxes.data[i].images.downsized.url;
        console.log(trendingBoxes.data[i].images.downsized.url)
    }
})();*/