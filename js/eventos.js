function dimensoes(){
	var altura =  window.innerHeight;
	var largura = window.innerWidth;
	document.getElementById('p1').innerHTML = "Dimensoes da janela:</br> Altura: "+altura+
	"</br>Largura:"+largura;
}

function corEntrada(){
	document.querySelector('fieldset').style.backgroundColor = 'Coral'; 
}

function corSaida(){
	document.querySelector('fieldset').style.backgroundColor = 'White'; 
}
function caracteres(){
	var digitos_restantes = 100 - document.getElementById('caixa').value.length;
	document.getElementById('contador').innerHTML = digitos_restantes;
	if(digitos_restantes == 0)
		alert("Atingiu o valor máximo de caracteres");
}