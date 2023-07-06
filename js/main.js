import createHeader from "./header.js";
import createCards from "./card.js";
import createOptions from "./selectOption.js";
import submitForm from "./form.js";

/* Dados */
let menus = ['Todos os remédios', 'Sobre nós', 'Fale conosco'];

let logo = {
  logoImg: './images/logo.svg',
  nomeLogo: 'Farmácia Milagrosa',
  alt: 'Imagem de logotipo',
  logoTitulo: 'Farmácia Milagrosa'
};

let medicamentos = [
  {
    id: 0,
    titulo:'SHAMPOO JOHNSONS BABY CABELOS CLAROS 400ML',
    imagem:'./images/remedio.png',
    imagemAlt: 'Foto de remedio 1',
    unidade: 'un',
    favorito: false,
    valor: 'R$ 27,99'
  },
  {
    id: 1,
    titulo:'CIMEGRIPE 400MG COM 20 CÁPSULAS',
    imagem:'./images/remedio.png',
    imagemAlt: 'Foto de remedio 2',
    unidade: 'cp',
    favorito: false,
    valor: 'R$ 12,91'
  },
  {
    id: 2,
    titulo:'LORATADINA CIMED COM 12 COMPRIMIDOS 10MG GENERICO',
    imagem:'./images/remedio.png',
    imagemAlt: 'Foto de remedio 3',
    unidade: 'un',
    favorito: false,
    valor: 'R$ 6,77'
  },  
  {
    id: 3,
    titulo:'TOPERMA 700MG COM 10 EMPLASTROS',
    imagem:'./images/remedio.png',
    imagemAlt: 'Foto de remedio 4',
    unidade: 'un',
    favorito: false,
    valor: 'R$ 155,60'
  },
  {
    id: 4,
    titulo:'AMOXICILINA TEUTO 500MG COM 21 COMPRIMIDOS',
    imagem:'./images/remedio.png',
    imagemAlt: 'Foto de remedio 5',
    unidade: 'un',
    favorito: false,
    valor: 'R$ 13,00'
  },
  {
    id: 5,
    titulo:'SALBUTAMOL GLENMARK 100MCG GENERICO',
    imagem:'./images/remedio.png',
    imagemAlt: 'Foto de remedio 6',
    unidade: 'un',
    favorito: false,
    valor: 'R$ 23,15'
  }
];

let assuntos = ['Selecione', 'Comercial', 'Dúvidas', 'Revenda'];

/* Elementos */
let header = document.getElementsByTagName('header')[0];
let cardBody = document.querySelector('#card-body');
let assuntoElement = document.getElementById('assunto')
let formElement = document.querySelector('form')

/* Criação */
createHeader(header, logo, menus);

if (cardBody != null) {
  createCards(cardBody, medicamentos.length, medicamentos);
}

if (assuntoElement != null) {
  createOptions(assuntoElement, assuntos);
}

if (formElement != null) {
  submitForm(formElement)
}

