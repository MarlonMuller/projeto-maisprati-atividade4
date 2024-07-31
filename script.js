let valorCarrinho = document.getElementById('valorCarrinho')
let valorTotal = 0
let valorUnidade = 10

document.addEventListener('DOMContentLoaded', () => {
    atualizarValorCarrinho()
})

function atualizarValorCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
    valorTotal = carrinho.reduce((acc, item) => acc + (item.quantidade * valorUnidade), 0)
    valorCarrinho.innerHTML = valorTotal
}

function adicionarAoCarrinho(id) {
    alert('Item adicionado ao carrinho')
    
    let qtdInput = document.getElementById(`qtd${id}`).value
    let quantidade = parseInt(qtdInput)
    
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []

    let itemExistente = carrinho.find(item => item.id === id)
    if (itemExistente) {
        itemExistente.quantidade += quantidade
    } else {
        carrinho.push({ id, quantidade })
    }
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
    atualizarValorCarrinho()
    alert('Item adicionado ao carrinho')
}


function enviarFormulario() {
    let nome = document.querySelector('input[placeholder="Nome"]').value;
    let email = document.querySelector('input[placeholder="E-mail"]').value;
    let telefone = document.querySelector('input[placeholder="Telefone"]').value;
    let numeroPedido = document.querySelector('input[placeholder="Número Pedido"]').value;
    let mensagem = document.querySelector('textarea[placeholder="Mensagem"]').value;

    let formulario = {
        nome, email, telefone, numeroPedido, mensagem
    };

    let formularios = JSON.parse(localStorage.getItem('formularios')) || [];
    formularios.push(formulario);
    localStorage.setItem('formularios', JSON.stringify(formularios));

    alert('Dados enviados, em breve entraremos em contato!');
}

function cadastrar() {

    let email = document.querySelector('#cadastro input[type="email"').value
    let senha = document.querySelector('#cadastro input[type="password"]').value

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.find(usuario => usuario.email === email)) {
        alert('E-mail já cadastrado!');
        return;
    }

    usuarios.push({email, senha})
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert('E-mail cadastrado com sucesso! Bem vinda(o) a Nails Art Duda!')
}

function logar() {
    let email = document.querySelector('#login input[type="email"]').value;
    let senha = document.querySelector('#login input[type="password"]').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

    if (usuario) {
        alert('Login realizado com sucesso! Bem-vinda(o) à Nails Art Duda!');
    } else {
        alert('Credenciais inválidas!');
    }

}

function toggleMenu() {
    const links = document.getElementById('links');
    links.classList.toggle('hidden');

}