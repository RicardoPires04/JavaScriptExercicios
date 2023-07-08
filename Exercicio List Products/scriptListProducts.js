var produtos = new Array (
    {nome: "Nike", categoria: "T-Shirt", preco: 35},
    {nome: "Adidas", categoria: "Shoes", preco: 100},
    {nome: "Puma", categoria: "Cargo Pants", preco: 65}
);


function listaTabela(){
    let tbody = document.getElementById("tbody");

    for (let i = 0; i < this.produtos.length; i++){
        let tr = tbody.insertRow();

        let td_nome = tr.insertCell();
        let td_categoria = tr.insertCell();
        let td_preco = tr.insertCell();

        td_nome.innerText = this.produtos[i].nome;
        td_categoria.innerText = this.produtos[i].categoria;
        td_preco.innerText = this.produtos[i].preco;

    }

    this.listaTabela();
}