var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "style.css");
document.getElementsByTagName("head")[0].appendChild(element);
row = document.createElement('div')
row.className = 'row'
column = document.createElement('div')
column.className = 'column'


document.body.appendChild(row)
row.appendChild(column)
let imgs = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg',]
for (let index = 0; index < imgs.length; index++) {
column.innerHTML +=(`<img class="image" src="img/${imgs[index]}">`)
}




