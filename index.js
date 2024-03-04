import express from 'express';
const app = express();
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get('/Rafael', (req, res)=>{
    res.send('Hello Rafael!')
})
app.get('/calculadora', (req,res)=>{
    res.render('calculadora')
})

app.post('/calculadora', (req,res)=>{
    const operacao = req.body.operacao;
    const valor1 = parseInt(req.body.valor1)
    const valor2 = parseInt(req.body.valor2)
    let resultado;
    switch(operacao){
        case 'soma': resultado = valor1 + valor2; 
        break;
        case 'subtracao' : resultado = valor1 - valor2;
         break;
        case 'divisao' : resultado = valor1 / valor2; 
        break;
        case 'multiplicacao' : resultado = valor1 * valor2; 
        break;
    }
    res.render('calculadora', {operacao:operacao, resultado:resultado})
    
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
app.listen(port);