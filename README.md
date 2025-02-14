# conversor-moedas
Conversor de moedas simples

1. Estrutura HTML

<select id="fromCurrency"> e <select id="toCurrency">

Dropdowns preenchidos dinamicamente com as moedas suportadas pela API.

Se precisar adicionar uma moeda manualmente, edite a função loadCurrencies().

<input type="number" id="amount">

Campo para inserir o valor a ser convertido.

Se quiser definir um valor mínimo, adicione min="0.01" dentro da tag <input>.

<button id="convertButton">Converter</button>

Botão que chama a função de conversão ao ser clicado.

Se quiser mudar o texto do botão, edite o conteúdo entre as tags <button>.

<button id="swap">⇅</button>

Botão que inverte as moedas selecionadas.

Se quiser modificar o ícone, altere o conteúdo do botão.

<p id="result"></p> e <p id="lastUpdate"></p>

Exibem o resultado da conversão e a última atualização das taxas.

2. Estilos CSS

O fundo da página é preto (background: #000;).

Para mudar a cor, edite background no body.

A interface tem efeito de vidro (glassmorphism) com backdrop-filter: blur(10px);.

Para remover, basta deletar esta linha.

O botão #convertButton muda de cor ao passar o mouse.

Para alterar, edite background: #28a745; e background: #218838;.

3. Lógica em JavaScript

3.1 Carregamento das Moedas

A função loadCurrencies() carrega todas as moedas da API e preenche os selects.

Se quiser adicionar moedas manualmente, pode criar <option> dentro dos selects.

3.2 Conversão de Moedas

A função do botão de conversão busca os dados da API e realiza a conversão.

Para alterar a API, substitua https://v6.exchangerate-api.com/v6/ pela nova URL.

3.3 Salvando a Última Conversão

O código usa localStorage para armazenar a última conversão.

Se quiser limpar os dados ao recarregar a página, remova localStorage.setItem().




