const poke_container = document.getElementById('poke-container')
const pokemon_count = 251
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

const fetchPokemon = async () => {
    for(let i = 1; i<=pokemon_count; i++) {
        await getPokemon()
    }
}

const getPokemon = async (id) => {
    const url = `https://pokemon.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}

fetchPokemon()

const API = "https://pokeapi.co/api/v2/pokemon/1"