let valorCarrinho = document.getElementById('valorCarrinho')
let valorTotal = 0
let valorUnidade = 10


function adicionarAoCarrinho(id) {
    alert('Item adicionado ao carrinho')
    
    let qtdInput = document.getElementById(`qtd${id}`).value

    let quantidade = parseInt(qtdInput)
    
    
    valorTotal += valorUnidade * quantidade

    valorCarrinho.innerHTML = valorTotal
}

function enviarFormulario() {
    alert('Dados enviados, em breve entraremos em contato!')
}

function cadastrar() {
    alert('E-mail cadastrado com sucesso! Bem vinda(o) a Nails Art Duda!')
}

function logar() {
    alert('Login realizado com sucesso! Bem vinda(o) a Nails Art Duda!')
}

function toggleMenu() {
    const links = document.getElementById('links');

    links.classList.toggle('hidden');

}