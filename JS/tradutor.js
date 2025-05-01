const campo_pesquisa = document.getElementById("campo-pesquisa");
const botao = document.getElementById("botao-pesquisa");
const lacuna = document.getElementById("lacuna-pesquisa");

botao.addEventListener('keyup', function() {

alert(1)
return;
 const palavra = campo_pesquisa.value.trim();

 const result_falsos= ['Resultado 1', 'Resultado 2', 'Resultado 3'];
//  agora encontra uma forma deste código
//  procurar as palavras que estão armazenadas no banco de dados

 lacuna.innerHTML = ''; //Limpa os resultados anteriores 
    if (palavra) {            
    const result_filtrados = result_falsos.filter(item =>
    item.toLowerCase().includes(palavra.toLowerCase()));
    // Filtra os resultados que correspondem à palavra escrita pelo usuário

 if (result_filtrados.length > 0) {

    result_filtrados.forEach(item => {
      const caixa = document.createElement('div');
      caixa.textContent = item;
      caixa.classList.add('search-found');
      lacuna.appendChild(caixa);
    });
  }
  else{
        lacuna.innerHTML = "Nenhum resultado encontrado.";
    } 
   } else{
        lacuna.innerHTML = 'Digite alguma coisa para receber os resultados';
    }
});
