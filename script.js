    
    
document.querySelector('#find').addEventListener('click', () => {

    const pokemonName = document.querySelector('#search').value.toLowerCase();  
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((result) => { //console.log(result.name)

            document.querySelector('#pokemonContent').innerHTML +=

            `The pokemon name is ${result.name}`

        })
        .catch((error) => console.error(error));

})    
    