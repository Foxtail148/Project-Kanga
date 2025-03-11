let tentativas = 5;

function updateTentativas(){
	tentativasSpan.innerText = tentativas;
}
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));