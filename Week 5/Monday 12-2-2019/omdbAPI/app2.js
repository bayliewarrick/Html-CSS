const api_key = 'ce87c945'



document.getElementById('submit').addEventListener('click',api_request)

function get_endpoint() {
    let endpoint = `http://www.omdbapi.com/?s=${get_query()}&apikey=${api_key}`
    return endpoint
}

function get_details(i) {
    let endpoint = `http://www.omdbapi.com/?i=${i}&apikey=${api_key}`
    let request = new XMLHttpRequest()

    request.onload = function() {
        let results = JSON.parse(this.responseText)
        
     year = results['Year']
     dir = results['Director']
     rated = results['Rated']
     released = results['Released']
     title = results['Title']
     poster = results['Poster']
     movie_details.innerHTML = `
        <label><b>${title}</b></label>
        <img src="${poster}" alt="${title}" />
        <p>Year: ${year}</p>
        <p>Released: ${released} </p>
        <p>Director: ${dir}</p>
     `
    }
    request.open('GET',endpoint)
    request.send()
    
}


function get_query() {
        let search_query = document.getElementById('query').value
        return search_query
}

function api_request() {
    let url = get_endpoint()
    //console.log(url)

    let request = new XMLHttpRequest()

    request.onload = function() {
        let results = JSON.parse(this.responseText)

        let movies = results['Search'].map(movie => {
            //console.log(movie)
            return `
            <li>
            <label>${movie.Title}</label>
            <button onclick="get_details('${movie.imdbID}')">View Movie</button>
            <hr/>
            </li>
            `
        })
        postsUL.innerHTML = movies.join(' ')
    }

    request.open('GET',url)
    request.send()
}










