import express from "express";
export const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index')
})

router.get('/diego', (req,res)=>{
    res.send("Hello Diego!")
})

router.get('/calculadora', (req,res)=>{
    res.render('calculadora')
})

router.post('/calculadora', (req,res)=>{
    const operacao = req.body.operacao;
    const valor1 = parseInt(req.body.valor1)
    const valor2 = parseInt(req.body.valor2)
    let resultado;
    switch(operacao){
        case 'soma': 
            resultado = valor1+valor2; 
            break;
        case 'subtracao': 
            resultado = valor1-valor2; 
            break;
        case 'divisao': 
            resultado = valor1/valor2; 
            break;
        case 'multiplicacao': 
            resultado = valor1*valor2; 
            break;
    }
    res.render('calculadora',{operacao:operacao, resultado:resultado})
    

})

router.get('/tabela',(req,res)=>{
    res.render('tabela')
})

router.post('/tabela',(req,res)=>{
    console.log(req.body.linhas)
    res.render('tabela', {linhas:req.body.linhas})
})

router.get('/:nome', (req,res)=>{
    res.send(req.params.nome)
})

router.get('/:nome/:sobrenome', (req,res)=>{
    res.send(req.params.nome+" "+req.params.sobrenome)
})

router.get('/soma/:x/:y', (req,res)=>{
    const soma = parseInt(req.params.x)+parseInt(req.params.y)
    res.send("O resultado da soma é: "+soma)
})

router.post('/pesquisar', (req, res) => {
    res.send("Dados recebidos: "+req.body.nome)
})

export default router;