export default function createCards(fatherCard, quantidadeCards, produtos) {
  for (let id = 0; id < quantidadeCards; id++) {
    let card = `<div id = ${id} class="col"><div class="card mb-4 rounded-3 shadow-sm"><div class="card-header py-3 text-end"><h4 class="my-0 fw-normal pe-3 heart"><i class="bi bi-heart-fill"></i></h4></div><div class="card-body"><div><img class="img-fluid rounded"></div><h1 class="card-title pricing-card-title mt-3"><small class="text-body-secondary fw-light"></small></h1><ul class="list-unstyled mt-3 mb-4"><li></li></ul><button type="button" class="w-100 btn btn-lg btn-outline-primary fs-4">Adicionar</button></div></div></div>`
    fatherCard.innerHTML += card;
  }

  fillCards(produtos);
}

function fillCards(produtos) {
  for (let id = 0; id < produtos.length; id++) {
    let elementoCard = document.getElementById(id)
    let nomeProduto = elementoCard.querySelector('ul li');
    let precoProduto = elementoCard.querySelector('h1');
    let imagemProduto = elementoCard.querySelector('img');
    let botaoAdicionar = elementoCard.querySelector('button');
    let botaoFavorito = elementoCard.querySelector('i');
  
    nomeProduto.innerText = produtos[id].titulo;
    precoProduto.innerText= produtos[id].valor;
    precoProduto.innerHTML += `<small class="text-body-secondary fw-light">/${produtos[id].unidade}</small>`
  
    imagemProduto.setAttribute('src', produtos[id].imagem);
    imagemProduto.setAttribute('alt', produtos[id].imagemAlt);

    botaoAdicionar.addEventListener('click', () => {
      console.log(produtos[id].titulo);
      console.log(produtos);
      alert(`${produtos[id].titulo} foi adicionado ao carrinho com sucesso.`);
    })

    botaoFavorito.addEventListener('click', () => {
      console.log(produtos[id].titulo);

      if(produtos[id].favorito === false) {
        alert(`${produtos[id].titulo} foi adicionado aos favoritos com sucesso.`);
        botaoFavorito.style.color = 'red';
        produtos[id].favorito = true;
      } else {
        alert(`${produtos[id].titulo} foi removido dos favoritos.`);
        botaoFavorito.style.color = 'rgb(168, 9, 9)'
        produtos[id].favorito = false;
      }

      produtos.forEach(element => {
        if (element.favorito === true){
          console.log(element)
        }
      });
    })
  }
}

