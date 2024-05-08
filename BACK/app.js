const express = require('express');
const app = express();

const axios = require('axios');

const cors = require('cors');

app.use(cors());

app.get('/characters', async (req, res)=>{
    let urlPages='https://rickandmortyapi.com/api/character';
    console.log(urlPages);
    try{
        const response = await axios.get(urlPages);
        const {info:{pages}}=response.data;
        let characters=[];
        for (let i=1;i++;i<=pages){
            let url=`https://rickandmortyapi.com/api/character/?page=${i}`
            console.log(url);
            try{
                const response = await axios.get(url);
                const {results} = response.data;
                
            }
            catch{
                res.status(401).json({error:'No se puedieron obtener los personajes'});
            }
        }
        console.log(characters)
        res.json({characters});
    }
    catch{
        res.status(401).json({error:'No se puedieron obtener los personajes'});
    }
})

app.get('/characters/:name', async (req, res)=>{
    const name=req.params.name;
    const url=`https://rickandmortyapi.com/api/character/?name=${name}`;
    console.log(url);
    try{
        const response = await axios.get(url);
        const {results} = response.data;
        res.json({results});
    }
    catch{
        res.status(401).json({error:'No se pudo obtener el personajes'});
    }
})


app.listen(3000, ()=>{
    console.log('Servidor escuchando...');
})