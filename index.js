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
    const nameLink = event.target.innerText;
    if(nameLink === 'Laptops & Computers'){
        displayNone(mobile, household, tools);
        items.style.display = "none";
        laptops.style.display = "block";
    }else if(nameLink === 'Mobile & TV'){
        displayNone(laptops, household, tools);
        items.style.display = "none";
        mobile.style.display = "block";      
    }else if(nameLink === 'Household appliances'){
        displayNone(laptops, mobile, tools);
        items.style.display = "none";
        household.style.display = "block";      
    }else if(nameLink === 'Tools'){
        displayNone(laptops, mobile, household);
        items.style.display = "none";
        tools.style.display = "block";      
    }
}

function addDivCatalog(event){
    event.stopPropagation();
    const nameLink = event.target.innerText;
    switch(nameLink){
        case 'Acer Aspire':
            pushText(0);
            break;
        case 'Asus S500MC-5114000370':
            pushText(1);
            break;
        case '28" Samsung Odyssey G7':
            pushText(2);
            break;
        case 'Apple iPhone 13':
            pushText(3);
            break;
        case 'Samsung S22 ULTRA':
            pushText(4);
            break;
        case 'LG 45" Ultra':
            pushText(5);
            break;
        case 'Refridgerator':
            pushText(6);
            break;
        case 'Wosher':
            pushText(7);
            break;
        case 'Mixer':
            pushText(8);
            break;
        case 'Drill':
            pushText(9);
            break;
        case 'Grinder tool':
            pushText(10);
            break;
        case 'Saw':
            pushText(11);
            break;
    }
    items.style.display = "block";
}

function pushText(el){
    h1.innerText = arr[el].name;
    p.innerText = arr[el].description;
    span.innerText = arr[el].price;
}


function displayNone(el1, el2, el3 = el1, el4 = el1){
    el1.style.display = "none";
    el2.style.display = "none";
    el3.style.display = "none";
    el4.style.display = "none";
}

function buyItem(event){
    event.stopPropagation();
    event.preventDefault();
    items.style.display = "none";
    displayNone(laptops, mobile, household, tools);
    alert('Bought!');

}

function clear(event){
    items.style.display = "none";
    displayNone(laptops, mobile, household, tools);
}