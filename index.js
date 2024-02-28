import express from 'express';
const app = express();
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get('/calculo', (req, res)=>{
    res.render('calculadora')
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
app.post('/pesquisar', (req, res)=> {
    res.send('Dados Recebidos: ' + req.body.nome)
})
app.post('/calculadora', (req, res)=>{
    const v1 = parseInt(req.body.valor1) 
    const v2 = parseInt(req.body.valor2)
    const soma = v1 + v2
    res.send('A soma é: ' + soma)
})
app.listen(port);