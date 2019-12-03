
const postURL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders/'


const deleteOrderButton = document.querySelector("#deleteOrder")
const sendOrderButton = document.querySelector("#sendOrderButton")
const searchOrderButton = document.querySelector('#searchOrder')
const currentOrder = document.querySelector('#currentOrder')


function getorders() {
    let request = new XMLHttpRequest()
    let currentOrders = document.getElementById('currentOrders')
    currentOrders.innerHTML = ''
    request.onload = function() {
        let results = JSON.parse(this.responseText)
        Object.keys(results).forEach(function (item) {
            coffee = results[item]['coffee']
            email = results[item]['emailAddress']
            currentOrders.innerHTML += 
            `
            <li><label> Customer: ${email} | Order: ${coffee}</label></li>
            `
            
           //console.log(results[item]['coffee'])
        })

    }

    request.open('GET',postURL)
    request.send()

}



searchOrderButton.addEventListener('click',() => {
    event.preventDefault()
    let request = new XMLHttpRequest()
    let email = document.getElementById('customerOrderEmail').value
    let postURL = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`
    currentOrders.innerHTML = ''
    request.open('get',postURL)
    request.send()
    request.onload = function() {
        let results = JSON.parse(this.responseText)
        let coffee = results['coffee']
        let email = results['emailAddress']
        currentOrder.innerHTML = `
        <label><b>Order Email Address: </b> ${email}</label>
        <label><b>Order: </b> ${coffee}</label>
        `
    }

})


deleteOrderButton.addEventListener('click',() => {
    event.preventDefault()
    let request = new XMLHttpRequest()
    let email = document.getElementById('deleteEmail').value
    let postURL = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`
    currentOrders.innerHTML = ''
    request.open('delete',postURL)
    request.send()
    request.onload = function() {
        getorders()
    }

})


sendOrderButton.addEventListener('click',() => {
    event.preventDefault()
    let emailAddress = document.getElementById('customerEmail').value
    let coffee = document.getElementById('coffeeOrder').value
    //Send a POST request
    let request = new XMLHttpRequest()
    request.open('POST', postURL)
    request.setRequestHeader('Content-Type', 'application/json')
    let body = {
        "emailAddress": emailAddress,
        "coffee": coffee
    }
    request.send(JSON.stringify(body))
    request.onload = function(){
        getorders()
    }
})

allOrders = document.getElementById('searchAllOrders')

allOrders.addEventListener('click', () => {
    getorders()
})







