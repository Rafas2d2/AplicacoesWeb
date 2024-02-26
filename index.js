import express from 'express';
const app = express();
const port = 3000

app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/Rafael', (req, res)=>{
    res.send('Hello Rafael!')
})
app.get('/:nome', (req, res)=>{
    res.send(req.params.nome)
})
app.get('/:nome/:sobrenome', (req, res)=>{
    res.send(req.params.nome + "" + req.params.sobrenome)
})
app.get('/:soma/:valor/:valor2', (req, res)=>{
    const soma = parseInt(req.params.valor) + parseInt(req.params.valor2)
    res.send("O resultado da soma é: " + soma)
})
app.listen(port);