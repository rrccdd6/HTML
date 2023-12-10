
// Função para calcular o tempo necessário para o álcool sair do sangue
function calculateBAC() {
    // Obter os valores selecionados e inseridos pelo usuário
    const gender = document.getElementById('gender2').value;
    const weight = parseFloat(document.getElementById('peso2').value);
    const time = parseFloat(document.getElementById('tempo2').value);
    const beer = parseFloat(document.getElementById('beer').value);
    const wine = parseFloat(document.getElementById('wine').value);
    const liquor = parseFloat(document.getElementById('liquor').value);
  
    // Verificar se os valores são válidos
    if (!gender) {
      alert('Por favor, selecione um gênero.');
      return;
    }
  
    if (isNaN(weight) || weight <= 0) {
      alert('Por favor, insira um peso válido.');
      return;
    }
  
    if (isNaN(time) || time <= 0) {
      alert('Por favor, insira um tempo válido desde o último consumo.');
      return;
    }
  
    // Calcular o teor de álcool no sangue (BAC)
    const totalConsumption = calculateTotalConsumption(beer, wine, liquor);
    const r = calculateDistributionRatio(gender);
    const bac = (totalConsumption * 5.14 / (weight * r)) - 0.015 * time;
  
    // Calcular o tempo estimado para eliminar o álcool
    const eliminationTime = calculateEliminationTime(bac);
  
    // Arredondar o valor do BAC e exibir o resultado
    const roundedBAC = Math.max(0, bac.toFixed(3));
    const result = `Seu teor de álcool no sangue é de ${roundedBAC} g/L. 
Estima-se que levará aproximadamente ${eliminationTime} horas para eliminar completamente o álcool do seu organismo.`;
    alert(result);
  }
  
  // Função para calcular a quantidade total de álcool consumido
  function calculateTotalConsumption(beer, wine, liquor) {
    const beerAlcohol = beer * 0.54;
    const wineAlcohol = wine * 0.6;
    const liquorAlcohol = liquor * 0.6;
    return beerAlcohol + wineAlcohol + liquorAlcohol;
  }
  
  // Função para calcular o coeficiente de distribuição de álcool
  function calculateDistributionRatio(gender) {
    return gender === 'female' ? 0.55 : 0.68;
  }
  
  // Função para calcular o tempo estimado para eliminar o álcool
  function calculateEliminationTime(bac) {
    // Taxa de eliminação média do álcool no sangue por hora (varia de pessoa para pessoa)
    const eliminationRate = 0.015;
    return Math.ceil(bac / eliminationRate);
  }
  
  