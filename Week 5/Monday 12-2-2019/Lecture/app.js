const post_url = "http://jsonplaceholder.typicode.com/posts"
let postsUL = document.getElementById('postsUL')

//creates an object of XMLHTTPRequest
let request = new XMLHttpRequest()
request.addEventListener('load', function () {
    // parse response text into a JS object
    let posts = JSON.parse(this.responseText)
    
    let postItems = posts.map((post) =>  {
        return `<li>${post.title}</li>`
    })
    postsUL.innerHTML = postItems.join(' ')
})

request.open('GET',post_url)
request.send()