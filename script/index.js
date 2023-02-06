function main() {
    let toggles =  document.querySelectorAll('.char-title');
    let apiUrl = 'https://swapi.dev/api/people';
    let name = document.getElementsByClassName('name')
    let gender = document.getElementById('gender')
    let height = document.getElementById('height')
    let container = document.querySelectorAll('.char')
    let containerArray = [...container]
    console.log(containerArray)
    
    //to toggle the character info
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () =>{
            toggle.parentNode.classList.toggle('active')
        })
    })

    //to add the api
    async function getMovies(url){
        const res = await fetch(url)
        const data = await res.json()
        const info = data.results
        console.log(data.results)
        for (let i = 0; i < containerArray.length; i++) {
            let element = containerArray[i]
            element.firstElementChild.innerText = info[i].name
            element.lastElementChild.children[1].innerHTML = 'Name: ' + info[i].name
            element.lastElementChild.children[2].innerHTML = 'Gender: ' + info[i].gender
            element.lastElementChild.children[3].innerHTML = 'Height: ' + info[i].height + 'cm'

        }
    }
    getMovies(apiUrl)
}

main()

// module.exports = { main }
