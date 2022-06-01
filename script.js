const poke_container = document.getElementById('poke-container')
let pokemon_count = 151
const colors = {
    fire: '#FDDFDF',
    water: '#DEF3FD',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5'
}

const main_types = Object.keys(colors)
console.log(main_types)

let fetchPokemon = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)

}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    // map establish that type will now refer to type object's type.name
    const poke_types = pokemon.types.map(type => type.type.name)
    // console.log(poke_types)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const typeName = type[0].toUpperCase() + type.slice(1)

    const color = colors[type]

    // style draws in CSS property! Be aware that certain descriptors change in presentation when ported over to JavaScript.
    pokemonEl.style.backgroundColor=color
    
    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${typeName}</span></small>
    </div>
    `

// div class="pokemon" becomes the parent for pokemonInnerHTML
    pokemonEl.innerHTML = pokemonInnerHTML

    // adds the HTML just created into the container element previously established at the beginning of the document.
    // Additional Note.  Your poke-container needs to already be established within the HTML, otherwise you can not attach the Element that you are creating. In other works, screate small bones and then insert the qualities you are looking for using JavaScript.
    // Fun note, when using the debugger on browser you will not be able to easily determine if the site is created using JavaScript made HTML or natural HTML.
    poke_container.appendChild(pokemonEl)
}

fetchPokemon()