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
        let HTML;
        data.results.forEach((personaje)=>{
            HTML+= `<h3>${personaje.name}</h3>
            <img src="${personaje.image}" alt="${personaje.name}">`
        })
        allCharacter.innerHTML=HTML;
        console.log(data);
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
            console.log(response);
            return response.json();
        }
    })
    .then((data)=>{
        console.log(data, 'esta es la data de getCharacter');
    })
    .catch(error=> console.log('Hay un error'))
}