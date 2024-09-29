function usuario(){
alert("Bom dia!!");
var Nome, nome_carreguei;
Nome = prompt("Escreva aqui o seu nome:");
while(Nome == ""){
Nome = prompt("Não podes deixar o campo em branco\nEscreva o seu nome:");
}
nome_carreguei = "Seja muito bem vindo(a), " + Nome + "!";
alert(nome_carreguei);
}
function matérias(){
	var materias,nomesdemateria,arrumadinho,escreve;
	arrumadinho = 1;
	alert("Sou a calculadora legal!!");
	materias = prompt("Insira aqui o numero de matérias que deseja colocar\nNo ciclo de estudos:");
	var materias = Number(materias);
	while(materias > 0){
		nomesdemateria = prompt("insira aqui o nome da matéria:\nFaltam " + materias);
		
		materias = materias - 1;
	}
	
}
function calculando(){
	 matérias();
	var horas,materias2, horas_semanais,materias,dificuldades, n_de_dificul_1,n_de_dificul_2,valor_de_estudo;
	n_de_dificul_2 = 0;
	horas = prompt("Insira aqui quantas horas de estudo diarias você pretende fazer\nLembre-se: o ideal é no minimo 2 horas diarias");
	horas = Number(horas);
	horas_semanais = horas*7;
	alert("Certo, isso equivale a "+horas_semanais+" horas semanais.");
	alert("Agora pegue uma folha e escreva o nome de cada matéria que vai estudar\nAo terminar pressine \"ok\"");
	materias = prompt("Otimo! Insira aqui o NUMERO de matérias que deseja colocar\nNo ciclo de estudos:");
	materias2 = Number(materias);
	materias = Number(materias);
	while(materias > 0){
		dificudades = prompt("Insira aqui a dificuldade que você tem em cada matéria\nEm uma escala de 1 à 5 (Anote no seu caderno também):\nFaltam " + materias);
		n_de_dificul_1 = Number(dificudades);
		n_de_dificul_2 = n_de_dificul_1 + n_de_dificul_2;
		materias = materias - 1;
}
	valor_de_estudo = horas_semanais/n_de_dificul_2;
	alert("Ótimo! Temos todos os preparativos e agora vamos começar!");
	while(materias2 > 0){
	dificudades = prompt("Novamente insira aqui a dificuldade que você tem em cada matéria\nEm uma escala de 1 à 5:\nFaltam " + materias2);
	alert("Escreva "+Math.round(Number(dificudades)*valor_de_estudo)+" Quadradinhos em frente ao nome da matéria correspondente.");
	materias2 = materias2 - 1;
	}
	document.getElementById("2").innerHTML += "CADA QUADRADINHO QUE você FEZ EQUIVALE A UMA HORA DE ESTUDO, OU SENDO, A CADA HORA QUE ESTUDAR\nEM ALGUMA MATÉRIA VOCÊ MARCA UM DOS QUADRADOS COM UM 'X'. UMA VEZ QUE TODOS OS QUADRADOS DE UMA DETERMINADA MAÉRIA FORAM MARCADOS, VOCÊ NÃO PODERA ESTUDAR AQUELA MATÉRIA ATÉ O FIM DO CICLO.\nQUANDO VOCÊ ESTUDAR TODAS AS HORAS DE TODOS OS QUADRADOS RECOMEÇE O CICLO. VOCÊ PODE ESTUDAR O QUANTO QUISER E VAI MARCAR O CORRESPONDENTE DE ESTUDO NO PAPEL E ASSSIM NÃO FICARÁ SOBRE CARREGADO<br>";
}