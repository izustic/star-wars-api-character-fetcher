function main() {
    let toggles =  document.querySelectorAll('.char-title');
    let apiUrl = 'https://swapi.dev/api/people';
    let container = document.querySelectorAll('.char')
    

    let mainImages = [
        'images/luke.png', 
        'images/c3po.png', 
        'images/r2d2.png', 
        'images/darth.png', 
        'images/leia.png', 
        'images/owen.png', 
        'images/beru.png', 
        'images/r5d4.png', 
        'images/biggs.jpg', 
        'images/kenobi.png']

    let containerArray = [...container]
  // console.log(containerArray.length)
    
    //to toggle the character info
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () =>{
            toggle.parentNode.classList.toggle('active');
        })
    })
    //for afixing the images
    containerArray.forEach((el, index) => {
        const imageElement = el.querySelector('.images');
        imageElement.src = mainImages[index];
      });

    //to add the api
    async function getMovies(url){
        const res = await fetch(url)
       // console.log(res)
        const data = await res.json()
        //console.log(data);
        const info = data.results
        //console.log(info);
        for (let i = 0; i < containerArray.length; i++) {
            let element = containerArray[i]
            //console.log(element.firstElementChild.innerText)
            element.firstElementChild.innerText = info[i].name
            element.lastElementChild.children[1].innerHTML = 'Name: ' + info[i].name
            element.lastElementChild.children[2].innerHTML = 'Gender: ' + info[i].gender
            element.lastElementChild.children[3].innerHTML = 'Height: ' + info[i].height + 'cm'

        }
    }
    getMovies(apiUrl)
}

main()

module.exports = { main }
