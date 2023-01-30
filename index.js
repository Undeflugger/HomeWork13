// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише
//список категорій).



const category = document.getElementsByClassName('category')[0];
category.addEventListener('click', addDivInfo);
const catalog = document.getElementsByClassName('catalog')[0];
catalog.addEventListener('click', addDivCatalog);
const button = document.getElementById('button');
button.addEventListener('click', buyItem);
const mainBlock = document.getElementsByClassName('main-block')[0];
mainBlock.addEventListener('click', clear);

const laptops = document.getElementsByClassName('laptops')[0];
const mobile = document.getElementsByClassName('mobile')[0];
const household = document.getElementsByClassName('household')[0];
const tools = document.getElementsByClassName('tools')[0];

const items = document.getElementsByClassName('items')[0];

const h1 = document.getElementById('h3');
const p = document.getElementById('p');
const span = document.getElementById('span');

const categoryAll = [laptops, mobile, household, tools];

const arr = [{'name': 'Acer Aspire', 'description': 'Screen 15.6" IPS (1920x1080) Full HD', 'price': '1000$'},
    {'name': 'Asus S500MC-5114000370', 'description': 'Screen 15.6" IPS (1920x1080) Full HD', 'price': '1000$'},
    {'name': '28" Samsung Odyssey G7', 'description': 'Screen 15.6" IPS (1920x1080) Full HD', 'price': '1000$'},
    {'name': 'Apple iPhone 13', 'description': 'Screen 15.6" IPS (1920x1080) Full HD', 'price': '1000$'},
    {'name': 'Samsung S22 ULTRA', 'description': 'Screen 15.6" IPS (1920x1080) Full HD', 'price': '1000$'},
    {'name': 'LG 45" Ultra', 'description': 'Screen 15.6" IPS (1920x1080) Full HD', 'price': '1000$'},
    {'name': 'Refridgerator', 'description': 'Screen 15.6" IPS (1920x1080) Full HD', 'price': '1000$'},
    {'name': 'Wosher', 'description': 'Screen 15.6" IPS (1920x1080) Full HD', 'price': '1000$'},
    {'name': 'Mixer', 'description': 'Screen 15.6" IPS (1920x1080) Full HD', 'price': '1000$'},
    {'name': 'Drill', 'description': 'Screen 15.6" IPS (1920x1080) Full HD', 'price': '1000$'},
    {'name': 'Grinder tool', 'description': 'Screen 15.6" IPS (1920x1080) Full HD', 'price': '1000$'},
    {'name': 'Saw', 'description': 'Screen 15.6" IPS (1920x1080) Full HD', 'price': '1000$'}]

function addDivInfo(event){
    event.stopPropagation();
    items.style.display = 'none';
    const nameLink = event.target.innerText;
    switch(nameLink){
        case 'Laptops & Computers':
            showAll(laptops);
            break;
        case 'Mobile & TV':
            showAll(mobile);
            break;
        case  'Household appliances':
            showAll(household);
            break;
        case 'Tools':
            showAll(tools);
            break;
    }
}



function showAll(el){
    el.style.display = "block";
    categoryAll.filter((items) => items !== el).forEach((items) =>{
        items.style.display = "none";
    })


}

function addDivCatalog(event){
    event.stopPropagation();
    const nameLink = event.target.innerText;
    const index = arr.findIndex(el => el.name === nameLink);
    pushText(index);
    items.style.display = "block";
}

function pushText(el){
    h1.innerText = arr[el].name;
    p.innerText = arr[el].description;
    span.innerText = arr[el].price;
}


function displayNone(el){
    el.forEach(el => {
        el.style.display = "none";
    })
}

function buyItem(event){
    event.stopPropagation();
    event.preventDefault();
    items.style.display = "none";
    displayNone(categoryAll);
    alert('Bought!');

}

function clear(event){
    items.style.display = "none";
    displayNone(categoryAll);
}
