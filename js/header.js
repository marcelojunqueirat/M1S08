export default function createHeader(header, logoObj, listaMenus) {
  let htmlElement = document.getElementsByTagName('html')[0];
  let logoImagem = header.querySelector('.logo');
  let logoTitulo = header.querySelector('#titulo-logo');
  let botaoDarkMode = header.querySelector('button.btn')
  logoImagem.setAttribute('src', logoObj.logoImg);
  logoImagem.setAttribute('alt', logoObj.alt);
  logoTitulo.innerText = logoObj.logoTitulo;

  let navMenus = header.querySelectorAll('.nav-link')

  listaMenus.forEach((menu, i = 0) => {
    navMenus[i].innerText = menu
  })

  botaoDarkMode.addEventListener('click', () => {
    if(botaoDarkMode.innerText === 'Modo Claro'){
      htmlElement.setAttribute("data-bs-theme", "light")
      botaoDarkMode.innerText = 'Modo Escuro';
    } else {
      htmlElement.setAttribute("data-bs-theme", "dark")
      botaoDarkMode.innerText = 'Modo Claro';
    }
  })
}
