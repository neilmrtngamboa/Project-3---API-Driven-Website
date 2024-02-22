    
    
document.querySelector('#find').addEventListener('click', () => {

    const pokemonName = document.querySelector('#search').value.toLowerCase();  
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) =>  response.json())
        .then((result) => {console.log(result)

            if(document.querySelector('#search').value == ""){
                alert("Field is empty!");
            }else{
                document.querySelector('#pokemonContent').innerHTML +=

                `The pokemon name is ${result.name.toUpperCase()}
                Pokemon Type: ${result.types[0].type.name.toUpperCase()}
                
    
                `
                if(result.types[0].type.name.toLowerCase() == 'water'){
                    document.querySelector('#pokemonContent').style.background = "rgb(0, 255, 255)";
                }else if (result.types[0].type.name.toLowerCase() == 'fire'){
                    document.querySelector('#pokemonContent').style.background = "rgb(195, 0, 0)";
                    document.querySelector('#cardContent').style.color = 'white';
                }else if(result.types[0].type.name.toLowerCase() == 'bug'){
                    document.querySelector('#pokemonContent').style.background = "rgb(39, 105, 0)";
                    document.querySelector('#cardContent').style.color = 'white';
                }else if (result.types[0].type.name.toLowerCase() == 'dark'){
                    document.querySelector('#pokemonContent').style.background = "rgb(37, 0, 101)";
                    document.querySelector('#cardContent').style.color = 'white';
                }else if(result.types[0].type.name.toLowerCase() == 'dragon'){
                    document.querySelector('#pokemonContent').style.background = "rgb(37, 117, 146)";
                    document.querySelector('#cardContent').style.color = 'white';
                }else if (result.types[0].type.name.toLowerCase() == 'electric'){
                    document.querySelector('#pokemonContent').style.background = "rgb(249, 241, 146)";
                    document.querySelector('#cardContent').style.color = 'black';
                }else if(result.types[0].type.name.toLowerCase() == 'fairy'){
                    document.querySelector('#pokemonContent').style.background = "rgb(255, 0, 128)";
                    document.querySelector('#cardContent').style.color = 'white';
                }else if(result.types[0].type.name.toLowerCase() == 'fighting'){
                    document.querySelector('#pokemonContent').style.background = "rgb(255, 94, 0)";
                    document.querySelector('#cardContent').style.color = 'white';
                }else if (result.types[0].type.name.toLowerCase() == 'ghost'){
                    document.querySelector('#pokemonContent').style.background = "rgb(79, 0, 118)";
                    document.querySelector('#cardContent').style.color = 'white';
                }else if (result.types[0].type.name.toLowerCase() == 'grass'){
                    document.querySelector('#pokemonContent').style.background = "rgb(57, 212, 0)";
                    document.querySelector('#cardContent').style.color = 'black';
                }else if (result.types[0].type.name.toLowerCase() == 'ground'){
                    document.querySelector('#pokemonContent').style.background = "rgb(183, 122, 0)";
                    document.querySelector('#cardContent').style.color = 'black';
                }else if (result.types[0].type.name.toLowerCase() == 'ice'){
                    document.querySelector('#pokemonContent').style.background = "rgb(142, 207, 255)";
                    document.querySelector('#cardContent').style.color = 'black';
                }else if (result.types[0].type.name.toLowerCase() == 'normal'){
                    document.querySelector('#pokemonContent').style.background = "rgb(186, 96, 138)";
                    document.querySelector('#cardContent').style.color = 'white';
                }else if (result.types[0].type.name.toLowerCase() == 'poison'){
                    document.querySelector('#pokemonContent').style.background = "rgb(60, 0, 199)";
                    document.querySelector('#cardContent').style.color = 'white';
                }else if (result.types[0].type.name.toLowerCase() == 'psychic'){
                    document.querySelector('#pokemonContent').style.background = "rgb(255, 0, 154)";
                    document.querySelector('#cardContent').style.color = 'white';
                }else if (result.types[0].type.name.toLowerCase() == 'rock'){
                    document.querySelector('#pokemonContent').style.background = "rgb(119, 76, 0)";
                    document.querySelector('#cardContent').style.color = 'white';
                }else if (result.types[0].type.name.toLowerCase() == 'steel'){
                    document.querySelector('#pokemonContent').style.background = "rgb(0, 169, 147)";
                    document.querySelector('#cardContent').style.color = 'white';
                }

                document.querySelector('#newSearch').style.display = "block";
                document.querySelector('#find').disabled = true;
                document.querySelector('#newSearch').addEventListener('click', () => {
                    location.reload();
                });
              
            }



        })
        .catch((error) => console.error(error));


})

    