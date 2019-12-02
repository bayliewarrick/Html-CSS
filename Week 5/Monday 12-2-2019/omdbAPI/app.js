const api_key = 'ce87c945'

function get_query() {
        let search_query = document.getElementById('query').value
        console.log(search_query)
}

function get_movies(completion) {
    let movies = []
//creates an object of XMLHTTPRequest
    let request = new XMLHttpRequest()
    request.onload = function() {
        // parse response text into a JS object
        let movies = JSON.parse(this.responseText)
        completion(movies)
}

    request.open('GET',post_url)
    request.send()
    
    return movies

}

document.addEventListener('click', get_query)




let post_url = `http://www.omdbapi.com/?s=klklkjkj&apikey=${api_key}`
//let postsUL = document.getElementById('postsUL')



get_movies((movies) => {
    console.log(movies)
})

/*
       let postItems = movies.map((post) =>  {
            return `<li>
            <img src="${post.thumbnailUrl}"/>
            <label>${post.title}</label>
            <a href="${post.url}">Thumbnail URL</a>
            </li>`
        })
        postsUL.innerHTML = postItems.join(' ')
    

    request.open('GET',post_url)
    request.send()
*/
