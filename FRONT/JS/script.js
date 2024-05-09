function getAllCharacter(){
    const allCharacter=document.getElementById('allCharacter');
    
    const url='http://localhost:3000/characters'
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new error('la respuesta no es OK');
        }
        else{
            return response.json();
        }
    })
    .then((data)=>{
        console.log(data);
        const {characters}=data;
        let HTML;
        characters.forEach((personaje)=>{
            HTML+= `<h3>${personaje.name}</h3>
            <img src="${personaje.img}" alt="${personaje.name}">
            <p>Espcecie: ${personaje.species}`
        })
        allCharacter.innerHTML=HTML;
    })
    .catch(error=> console.log('Hay un error'))
}

function getCharacter(){
    const character=document.getElementById('character');
    const nameCharacter=document.getElementById('nombrePersonaje').value.toLowerCase();
    
    const url=`http://localhost:3000/characters/${nameCharacter}`
    
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new error('la respuesta no es OK');
        }
        else{
            return response.json();
        }
    })
    .then((data)=>{
        console.log(data);
        let HTML;
        data.results.forEach((personaje)=>{
            HTML+= `<h3>${personaje.name}</h3>
            <img src="${personaje.image}" alt="${personaje.name}">`
        })
        character.innerHTML=HTML;
        console.log(data);
    })
    .catch(error=> console.log('Hay un error'))
}