var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "style.css");
document.getElementsByTagName("head")[0].appendChild(element);
var newslist = document.getElementById('menu')

function displayAll() {
    newslist.innerHTML = ''
    for(index = 1; index < news['articles'].length; index++) {
        var author= news['articles'][index].author
        var image = news['articles'][index].urlToImage
        var title = news['articles'][index].title
        var url = news['articles'][index].url
        var description = news['articles'][index].description

        newslist.innerHTML += (`
        <li>
        <div class="newsItem">
        <h1>${title}</h1>
        <img src="${image}">
        <p>${description}</p> 
        <hr/>
        <a href="${url}">link to news url</a>
        </div>
        </li>
        `)
    }
}

displayAll()
