import { swiper } from './slider.js';
import { getData } from './fetchData.js';

let startIndex = 0;
let endIndex = 3;
let currentType = [];
let allObject = [];
let comfortObjects = [];
let businessObjects = [];
let premiumObjects = [];
const container = document.querySelector('.obj-card-container');
const loadMoreBtn = document.querySelector('.load-more-btn');
const curentSelection = document.querySelectorAll(".obj-type-item");

async function init() {
    allObject = await getData();
    comfortObjects = allObject.filter(obj => obj.type === "Comfort")
    businessObjects = allObject.filter(obj => obj.type === "Бізнес")
    premiumObjects = allObject.filter(obj => obj.type === "Premium");
    return { allObject, comfortObjects, businessObjects, premiumObjects };
}

init().then(({ allObject, comfortObjects, businessObjects, premiumObjects }) => {
    
    curentSelection.forEach(button => {
        button.addEventListener('click', handleClick);
    });
    currentType = allObject
    const startCards = currentType.slice(startIndex, endIndex);
    createMarckup(startCards);
    curentSelection[0].style.textDecoration = 'underline';
    
    function handleClick(event) {
        startIndex = 0;
        endIndex = 3;
        const type = event.currentTarget.dataset.type;

        document.querySelectorAll('.obj-type-item')
        .forEach(el => el.style.textDecoration = 'none');

        event.currentTarget.style.textDecoration = 'underline';
        

        if (type === "all") { currentType = allObject };
        if (type === "comfort") { currentType = comfortObjects };
        if (type === "business") { currentType = businessObjects };
        if (type === "premium") { currentType = premiumObjects };
       
        const startCards = currentType.slice(startIndex, endIndex);
        createMarckup(startCards);
        loadMoreBtn.style.display = 'block'
    }
    
})

loadMoreBtn.addEventListener("click", event => { 
       startIndex = startIndex + 3;
    endIndex = endIndex + 3;
    if (endIndex >= currentType.length)
    { loadMoreBtn.style.display = 'none' };
        let nexstCards = currentType.slice(startIndex, endIndex);
       
    createMarckup(nexstCards, 'append');
    
    const objCard = document.querySelector(".obj-card-container");
    const domRect = objCard.getBoundingClientRect();
    window.scrollBy({ top: (domRect.height), behavior: "smooth" })
     
    
 })

    function createMarckup(arrayObj, method = "inner") {
        let list = '';
        const marckUp = arrayObj.map(obj => {
            list = list + `
    <div class="card">
<div class="card-header">
<p>${obj.year} р.</p>
<p>${obj.type}</p>
</div>
        <img src=${obj.img} width="416" height="234"/>
        <h3>${obj.name}</h3>
        <p>${obj.adress}<p>
    </div>
    `
        }
        ).join("");

        if (method === 'inner') {
            container.innerHTML = list;
        } else if (method === 'append') {
            container.insertAdjacentHTML('beforeend', list);
        } else {
            console.error(`Невідомий метод рендеру: ${method}`);
        }
    }
