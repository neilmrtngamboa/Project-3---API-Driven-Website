    
    
document.querySelector('#find').addEventListener('click', () => {

    const pokemonName = document.querySelector('#search').value.toLowerCase();  
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) =>  response.json())
        .then((result) => {console.log(result)

            

            if(document.querySelector('#search').value == ""){
                alert("Field is empty!");
            }else{
                document.querySelector('#pokemonContent').innerHTML +=

                ` <div class="card d-flex mx-auto bg-light" style=" width: 15rem;">
                    <div class="card-body shadow">
                    <h3 class="text-center">${result.name.toUpperCase()}</h3>
                    <img class="img-fluid d-flex mx-auto" src="${result.sprites.front_default}" alt="" style="height: 10rem; width: 10rem;">
                    <div class="row">
                        <div class="col-md-7">
                            <h5>Type: ${result.types[0].type.name.toUpperCase()} </h5>
                        </div>
                        <div class="col-md-5">
                            <h5>Weight: ${result.weight}</h5>
                        </div>
                        <hr>
                        <h5>Abilities: ${result.abilities[0].ability.name} , ${result.abilities[1].ability.name} </h5>
                    </div>                    
                </div>
                </div>`


                if(result.types[0].type.name.toLowerCase() == 'water'){
                    document.querySelector('#pokemonContent').style.background = "rgb(0, 255, 255)";
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if (result.types[0].type.name.toLowerCase() == 'fire'){
                    document.querySelector('#pokemonContent').style.background = "rgb(195, 0, 0)";
                    document.querySelector('#cardContent').style.color = 'white';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if(result.types[0].type.name.toLowerCase() == 'bug'){
                    document.querySelector('#pokemonContent').style.background = "rgb(39, 105, 0)";
                    document.querySelector('#cardContent').style.color = 'white';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if (result.types[0].type.name.toLowerCase() == 'dark'){
                    document.querySelector('#pokemonContent').style.background = "rgb(37, 0, 101)";
                    document.querySelector('#cardContent').style.color = 'white';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if(result.types[0].type.name.toLowerCase() == 'dragon'){
                    document.querySelector('#pokemonContent').style.background = "rgb(37, 117, 146)";
                    document.querySelector('#cardContent').style.color = 'white';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if (result.types[0].type.name.toLowerCase() == 'electric'){
                    document.querySelector('#pokemonContent').style.background = "rgb(249, 241, 146)";
                    document.querySelector('#cardContent').style.color = 'black';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if(result.types[0].type.name.toLowerCase() == 'fairy'){
                    document.querySelector('#pokemonContent').style.background = "rgb(255, 0, 128)";
                    document.querySelector('#cardContent').style.color = 'white';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if(result.types[0].type.name.toLowerCase() == 'fighting'){
                    document.querySelector('#pokemonContent').style.background = "rgb(255, 94, 0)";
                    document.querySelector('#cardContent').style.color = 'white';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if (result.types[0].type.name.toLowerCase() == 'ghost'){
                    document.querySelector('#pokemonContent').style.background = "rgb(79, 0, 118)";
                    document.querySelector('#cardContent').style.color = 'white';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if (result.types[0].type.name.toLowerCase() == 'grass'){
                    document.querySelector('#pokemonContent').style.background = "rgb(57, 212, 0)";
                    document.querySelector('#cardContent').style.color = 'black';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if (result.types[0].type.name.toLowerCase() == 'ground'){
                    document.querySelector('#pokemonContent').style.background = "rgb(183, 122, 0)";
                    document.querySelector('#cardContent').style.color = 'black';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if (result.types[0].type.name.toLowerCase() == 'ice'){
                    document.querySelector('#pokemonContent').style.background = "rgb(142, 207, 255)";
                    document.querySelector('#cardContent').style.color = 'black';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if (result.types[0].type.name.toLowerCase() == 'normal'){
                    document.querySelector('#pokemonContent').style.background = "rgb(186, 96, 138)";
                    document.querySelector('#cardContent').style.color = 'white';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if (result.types[0].type.name.toLowerCase() == 'poison'){
                    document.querySelector('#pokemonContent').style.background = "rgb(60, 0, 199)";
                    document.querySelector('#cardContent').style.color = 'white';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if (result.types[0].type.name.toLowerCase() == 'psychic'){
                    document.querySelector('#pokemonContent').style.background = "rgb(255, 0, 154)";
                    document.querySelector('#cardContent').style.color = 'white';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if (result.types[0].type.name.toLowerCase() == 'rock'){
                    document.querySelector('#pokemonContent').style.background = "rgb(119, 76, 0)";
                    document.querySelector('#cardContent').style.color = 'white';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }else if (result.types[0].type.name.toLowerCase() == 'steel'){
                    document.querySelector('#pokemonContent').style.background = "rgb(0, 169, 147)";
                    document.querySelector('#cardContent').style.color = 'white';
                    document.querySelector('#pokemonContent').style.backgroundImage = "url(/images/bg-pokeballs.png)";
                }

                document.querySelector('#newSearch').style.display = "block";
                document.querySelector('#find').disabled = true;
                document.querySelector('#newSearch').addEventListener('click', () => {
                    location.reload();
                });
              
            }



        })
        .catch((error) => alert('Pokemon Not found!'));//console.error(error));


})

    