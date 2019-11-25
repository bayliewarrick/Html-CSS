let body = document.body

let container = document.getElementById('container')
let head = document.getElementsByTagName('head')[0]
let header = document.createElement('div')
let h1 = document.createElement('h1')
let home = document.createElement('a')
let cat = document.createElement('a')
let css = document.createElement('link')
let content = document.createElement('div')
let thecurse = document.createElement('h1')
let thecurseP = document.createElement('p')
let contentBox = document.createElement('div')
let contentBoxh3 = document.createElement('h3')
let contentBoxH3P = document.createElement('p')
let commentslikesBox = document.createElement('div')
let commentslikesH3P = document.createElement('p')
let commentslikesH3p2 = document.createElement('p')

let contentBoxh32 = document.createElement('h3')
let contentBoxH3P2 = document.createElement('p')
let commentslikesBox2 = document.createElement('div')
let commentslikesH3P2 = document.createElement('p')
let commentslikesH3p22 = document.createElement('p')


contentBoxh3.innerHTML = 'Hello WatchKit'
h1.innerHTML = 'HighOnCoding'
home.innerHTML = 'Home'
cat.innerHTML = 'Categories'
thecurse.innerHTML = 'Curse of the Current Reviews'
thecurseP.innerHTML = 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users <br /> scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice <br/> is dependent on three important factors price, screenshot and reviews'
contentBoxH3P.innerHTML = 'Last month Apple released the anticipated Watchkit Framework for developers in the form of iOS 8.2 beta SDK release. The Watchkit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the Watchkit framework and developing apps for the Apple Watch. '
commentslikesH3P.innerHTML = '12 comments'
commentslikesH3p2.innerHTML = '124 likes'
contentBoxh32.innerHTML = 'Introduction to Swift'
contentBoxH3P2.innerHTML = 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.  '
commentslikesH3P2.innerHTML = '12 comments'
commentslikesH3p22.innerHTML = '124 likes'


header.setAttribute('id','header')
css.setAttribute('rel','stylesheet')
css.setAttribute('type','text/css')
css.setAttribute('href','style.css')
content.setAttribute('class','contentBox')
contentBox.setAttribute('class','content')
commentslikesBox.setAttribute('class','comments_likes')
commentslikesBox2.setAttribute('class','comments_likes')


head.appendChild(css)
container.appendChild(header)
header.appendChild(h1)
header.appendChild(home)
header.appendChild(cat)
container.appendChild(content)
content.appendChild(thecurse)
content.appendChild(thecurseP)
container.appendChild(contentBox)
contentBox.appendChild(contentBoxh3)
contentBox.appendChild(contentBoxH3P)
contentBox.appendChild(commentslikesBox)
commentslikesBox.appendChild(commentslikesH3P)
commentslikesBox.appendChild(commentslikesH3p2)

contentBox.appendChild(contentBoxh32)
contentBox.appendChild(contentBoxH3P2)
contentBox.appendChild(commentslikesBox2)
commentslikesBox2.appendChild(commentslikesH3P2)
commentslikesBox2.appendChild(commentslikesH3p22)
