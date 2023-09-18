const superHeroToken='2450840285123031'
const baseURL=`https://www.superheroapi.com/api.php/${superHeroToken}`
const newHeroButton=document.getElementById('newHeroButton')

const heroimageDiv=document.getElementById('heroImage')
const searchButton=document.getElementById('searchButton')
const searchInput=document.getElementById('searchInput')

const getSuperHero=(id,name)=>{
    fetch(`${baseURL}/${id}`)
    .then(respnse=>respnse.json())
    .then(json=>{
        console.log(json)
        heroimageDiv.innerHTML=`'<img src="${json.image.url}" height=200 width=200>'`
    })
}

//search input
const getSearchSuperHero=(name)=>{
    console.log();
    fetch(`${baseURL}/search/${name}`)
    .then(respnse=>respnse.json())
    .then(json=>{
        // console.log(hero)
        const hero = json.results[0]
        heroimageDiv.innerHTML=`'<img src="${hero.image.url}" height=200 width=200>'`
    })
}
const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random()* numberOfHeroes) + 1
}
console.log(randomHero())
newHeroButton.onclick=()=>getSuperHero(randomHero())
searchButton.onclick=()=>getSearchSuperHero(searchInput.value)
