let body = document.querySelector("body");
let cotainner = document.querySelector(".container");
let texst = document.querySelector(".color-text");

const style = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
];



function generatorcolors() {
    let hashtag = "#";
    for (let index = 0; index < 6; index++) {
        let colors = Math.trunc(Math.random() * style.length);
        hashtag += style[colors];
    }
    return hashtag;
}
function lastgenaretaor() {
    let colors1 = generatorcolors()
    let colors2 = generatorcolors()
    let colors3 = generatorcolors()
    let colors4 = generatorcolors()
    let degrre = Math.trunc(Math.random() * 360);
    let gradient = `linear-gradient(${degrre}deg, ${colors1}, ${colors2})`
    texst.textContent = gradient;
    body.style.background = gradient;
    let butons = `linear-gradient(${degrre}deg, ${colors3}, ${colors4})`
    cotainner.style.background = butons

}
cotainner.addEventListener("click", lastgenaretaor)


