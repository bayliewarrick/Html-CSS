var element = document.createElement("link");
var menulist = document.getElementById('menu')

element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "style.css");
document.getElementsByTagName("head")[0].appendChild(element);



function displayAll() {
    menulist.innerHTML = ''
    for(index = 0; index < dishes.length; index++) {
        var description = dishes[index].description
        var image = dishes[index].imageURL
        var title = dishes[index].title
        var price = dishes[index].price

        menulist.innerHTML += (`
        <li>
        <img src="${image}"> 
        <label>${title}</label><br/>
        <span>${description}</span>
        <h3>$${price}</h3>
        </li>
        `)
    }
}

function displayEntrees() {
    menulist.innerHTML = ''
    var entrees = dishes.filter(function(dishes) {
        return dishes.course == "Entrees";
    })
    for(index = 0; index < entrees.length; index++) {
        var description = entrees[index].description
        var image = entrees[index].imageURL
        var title = entrees[index].title
        var price = entrees[index].price

        menulist.innerHTML += (`
        <li>
        <img src="${image}"> 
        <label>${title}</label><br/>
        <span>${description}</span>
        <h3>$${price}</h3>
        </li>
        `)
    }
}

function displayDesserts() {
    menulist.innerHTML = ''
    var desserts = dishes.filter(function(dishes) {
        return dishes.course == "Desserts";
    })
    for(index = 0; index < desserts.length; index++) {
        var description = desserts[index].description
        var image = desserts[index].imageURL
        var title = desserts[index].title
        var price = desserts[index].price

        menulist.innerHTML += (`
        <li>
        <img src="${image}"> 
        <label>${title}</label><br/>
        <span>${description}</span>
        <h3>$${price}</h3>
        </li>
        `)
    }
}

function returnID() {
    console.log(this.id)
}



function displayStarters() {
    menulist.innerHTML = ''
    var Starters = dishes.filter(function(dishes) {
        return dishes.course == "Starters";
    })
    for(index = 0; index < Starters.length; index++) {
        var description = Starters[index].description
        var image = Starters[index].imageURL
        var title = Starters[index].title
        var price = Starters[index].price

        menulist.innerHTML += (`
        <li>
        <img src="${image}"> 
        <label>${title}</label><br/>
        <span>${description}</span>
        <h3>$${price}</h3>
        </li>
        `)
    }
}


function displayAll() {
    menulist.innerHTML = ''
    var Items = dishes.filter(function(dishes) {
        return dishes.course == "Starters";
    })
    for(index = 0; index < Starters.length; index++) {
        var description = Starters[index].description
        var image = Starters[index].imageURL
        var title = Starters[index].title
        var price = Starters[index].price

        menulist.innerHTML += (`
        <li>
        <img src="${image}"> 
        <label>${title}</label><br/>
        <span>${description}</span>
        <h3>$${price}</h3>
        </li>
        `)
    }
}



function display() {
    menulist.innerHTML = ''
    var items = dishes.filter(function(dishes) {
        return dishes.course == this.id;
    })
    for(index = 0; index < items.length; index++) {
        var description = items[index].description
        var image = items[index].imageURL
        var title = items[index].title
        var price = items[index].price

        menulist.innerHTML += (`
        <li>
        <img src="${image}"> 
        <label>${title}</label><br/>
        <span>${description}</span>
        <h3>$${price}</h3>
        </li>
        `)
    }
}




x = document.getElementsByClassName('menubutton')
for(i = 0; i < x.length; i++) {
    document.getElementById(x[i].id).addEventListener('click', function() {
        menulist.innerHTML = ''
    var items = dishes.filter(function(dishes) {
        console.log(x[1].id)
    })
    for(index = 0; index < items.length; index++) {
        var description = items[index].description
        var image = items[index].imageURL
        var title = items[index].title
        var price = items[index].price

        menulist.innerHTML += (`
        <li>
        <img src="${image}"> 
        <label>${title}</label><br/>
        <span>${description}</span>
        <h3>$${price}</h3>
        </li>
        `)
    }
    }) 
}


/*
document.getElementById("all").addEventListener("click", displayAll)
document.getElementById("entrees").addEventListener("click", displayEntrees)
document.getElementById("desserts").addEventListener("click", displayDesserts)
document.getElementById("starters").addEventListener("click", displayStarters)
*/