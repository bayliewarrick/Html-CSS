const post_url = "https://jsonplaceholder.typicode.com/photos"
let postsUL = document.getElementById('postsUL')


function get_photos(completion) {
    let photos = []
//creates an object of XMLHTTPRequest
    let request = new XMLHttpRequest()
    request.onload = function() {
        // parse response text into a JS object
        let photos = JSON.parse(this.responseText)
        completion(photos)
}

    request.open('GET',post_url)
    request.send()
    
    return photos

}

get_photos((photos) => {
    console.log(photos)
})

/*
       let postItems = posts.map((post) =>  {
            return `<li>
            <img src="${post.thumbnailUrl}"/>
            <label>${post.title}</label>
            <a href="${post.url}">Thumbnail URL</a>
            </li>`
        })
        postsUL.innerHTML = postItems.join(' ')
    })

    request.open('GET',post_url)
    request.send()
*/

