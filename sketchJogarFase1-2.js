let musicaFundo;
let titulo = 'Fase 1 - 2';
var qtdeClickEntendi = 0;
var indexLatas = [0, 1, 2, 3, 4];
var lataAtual;
var lataX1 = 0;
var lataX2 = 0;
var lataY1 = 0;
var lataY2 = 0;

var acertouPlastico = false;
var acertouPapel = false;
var acertouVidro = false;
var acertouOrganico = false;
var acertouMetal = false;

var balaoPlastico = false;
var balaoPapel = false;
var balaoVidro = false;
var balaoOrganico = false;
var balaoMetal = false;

var balaoErrPlastico = false;
var balaoErrPapel = false;
var balaoErrVidro = false;
var balaoErrOrganico = false;
var balaoErrMetal = false;

function preload() {
	imgMato = loadImage('assets/mato.png');
	imgInstrutor = loadImage('assets/instrutor.png');
	musicaFundo = loadSound('assets/som-fundo.mp3');
	imgBalao = loadImage('assets/balaoInstrucoes.png');

	imgLixeiraPlastico = loadImage('assets/lata-plastico.png');
	imgLixeiraPapel = loadImage('assets/lata-papel.png');
	imgLixeiraVidro = loadImage('assets/lata-vidro.png');
	imgLixeiraOrganico = loadImage('assets/lata-organico.png');
	imgLixeiraMetal = loadImage('assets/lata-metal.png');

	imgLixeiraPlasticoSr = loadImage('assets/lata-plastico-sr.png');
	imgLixeiraPapelSr = loadImage('assets/lata-papel-sr.png');
	imgLixeiraVidroSr = loadImage('assets/lata-vidro-sr.png');
	imgLixeiraOrganicoSr = loadImage('assets/lata-organico-sr.png');
	imgLixeiraMetalSr = loadImage('assets/lata-metal-sr.png');

	imgBalaoSlcVermelha = loadImage('assets/balaoSlcplastico.png');
	imgBalaoSlcraAzul = loadImage('assets/balaoSlcpapel.png');
	imgBalaoSlcVerde = loadImage('assets/balaoSlcvidro.png');
	imgBalaoSlcMarrom = loadImage('assets/balaoSlcorganico.png');
	imgBalaoSlcAmarelo = loadImage('assets/balaoSlcmetal.png');

	imgBalaoErrVermelha = loadImage('assets/balaoErrplastico.png');
	imgBalaoErrraAzul = loadImage('assets/balaoErrpapel.png');
	imgBalaoErrVerde = loadImage('assets/balaoErrvidro.png');
	imgBalaoErrMarrom = loadImage('assets/balaoErrorganico.png');
	imgBalaoErrAmarelo = loadImage('assets/balaoErrmetal.png');


}

function setup() {

	sortearLata();
	distanciaBtn = windowHeight / 12;


	// mimics the autoplay policy
	getAudioContext().suspend();

	createCanvas(windowWidth - 10, windowHeight - 10);

	musicaFundo.play();
	musicaFundo.loop();

}

function draw() {
	background(255);


	fill(50);


	image(imgMato, 0, windowHeight - 90);
	image(imgInstrutor, windowWidth / 2, windowHeight - 450);
	imgInstrutor.resize(150, 200);
	image(imgBalao, (windowWidth / 2) - 400, windowHeight - 630);
	imgBalao.resize(350, 350);

	//======== Desenha as Lixeiras ===========
	image(imgLixeiraPlasticoSr, (windowWidth / 2) - 500, windowHeight - 230);
	image(imgLixeiraPapelSr, (windowWidth / 2) - 300, windowHeight - 230);
	image(imgLixeiraVidroSr, (windowWidth / 2) - 100, windowHeight - 230);
	image(imgLixeiraOrganicoSr, (windowWidth / 2) + 100, windowHeight - 230);
	image(imgLixeiraMetalSr, (windowWidth / 2) + 300, windowHeight - 230);
	
	if (acertouPlastico)
		image(imgLixeiraPlastico, (windowWidth / 2) - 500, windowHeight - 230);
	if (acertouPapel)
		image(imgLixeiraPapel, (windowWidth / 2) - 300, windowHeight - 230);
	if (acertouVidro)
		image(imgLixeiraVidro, (windowWidth / 2) - 100, windowHeight - 230);
	if (acertouOrganico)
		image(imgLixeiraOrganico, (windowWidth / 2) + 100, windowHeight - 230);
	if (acertouMetal)
		image(imgLixeiraMetal, (windowWidth / 2) + 300, windowHeight - 230);

	//Verifica qual balão vai aparecer na tela
	if(balaoPlastico){
		image(imgBalaoSlcVermelha, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoSlcVermelha.resize(350, 350);
	}
	if(balaoPapel){
		image(imgBalaoSlcraAzul, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoSlcraAzul.resize(350, 350);
	}
	if(balaoVidro){
		image(imgBalaoSlcVerde, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoSlcVerde.resize(350, 350);
	}
	if(balaoOrganico){
		image(imgBalaoSlcMarrom, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoSlcMarrom.resize(350, 350);
	}
	if(balaoMetal){
		image(imgBalaoSlcAmarelo, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoSlcAmarelo.resize(350, 350);
	}

	//Verifica se o jogador errou 
	if(balaoErrPlastico){
		image(imgBalaoErrVermelha, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoErrVermelha.resize(350, 350);
	}
	if(balaoErrPapel){
		image(imgBalaoErrraAzul, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoErrraAzul.resize(350, 350);
	}
	if(balaoErrVidro){
		image(imgBalaoErrVerde, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoErrVerde.resize(350, 350);
	}
	if(balaoErrOrganico){
		image(imgBalaoErrMarrom, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoErrMarrom.resize(350, 350);
	}
	if(balaoErrMetal){
		image(imgBalaoErrAmarelo, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoErrAmarelo.resize(350, 350);
	}


	textSize(32);
	textAlign(CENTER);
	text(titulo, windowWidth / 2, 50);
}
function paginaInicial() {
	console.log('home');
	window.location.href = "index.html";
}

function clickEntendi() {
	console.log(qtdeClickEntendi);
	qtdeClickEntendi++;

}

function descubraLata(lata) {
	switch (lata) {
		case 0:
			balaoPlastico = true;
			balaoPapel = false;
			balaoVidro = false;
			balaoOrganico = false;
			balaoMetal = false;
			lataX1 = (windowWidth / 2) - 500;
			lataX2 = ((windowWidth / 2) - 500) + 100;
			lataY1 = windowHeight - 230;
			lataY2 = (windowHeight - 230) + 200;
			break;
		case 1:
			balaoPlastico = false;
			balaoPapel = true;
			balaoVidro = false;
			balaoOrganico = false;
			balaoMetal = false;
			lataX1 = (windowWidth / 2) - 300;
			lataX2 = ((windowWidth / 2) - 300) + 100;
			lataY1 = windowHeight - 230;
			lataY2 = (windowHeight - 230) + 200;
			break;
		case 2:
			balaoPlastico = false;
			balaoPapel = false;
			balaoVidro = true;
			balaoOrganico = false;
			balaoMetal = false;
			lataX1 = (windowWidth / 2) - 100;
			lataX2 = ((windowWidth / 2) - 100) + 100;
			lataY1 = windowHeight - 230;
			lataY2 = (windowHeight - 230) + 200;
			break;
		case 3:
			balaoPlastico = false;
			balaoPapel = false;
			balaoVidro = false;
			balaoOrganico = true;
			balaoMetal = false;
			lataX1 = (windowWidth / 2) + 100;
			lataX2 = ((windowWidth / 2) + 100) + 100;
			lataY1 = windowHeight - 230;
			lataY2 = (windowHeight - 230) + 200;
			break;
		case 4:
			balaoPlastico = false;
			balaoPapel = false;
			balaoVidro = false;
			balaoOrganico = false;
			balaoMetal = true;
			lataX1 = (windowWidth / 2) + 300;
			lataX2 = ((windowWidth / 2) + 300) + 100;
			lataY1 = windowHeight - 230;
			lataY2 = (windowHeight - 230) + 200;
			break;
		default:
			break;
	}
}

function mouseClicked() {
	console.log('X: ' + mouseX, 'Y: ' + mouseY);
	console.log('X1: ' + lataX1, 'X2: ' + lataX2, 'Y1: ' + lataY1, 'Y2: ' + lataY2);

	//Caso o jogador acerte a lata correta
	if (mouseX > lataX1 && mouseX < lataX2 && mouseY > lataY1 && mouseY < lataY2) {
		switch (lataAtual) {
			case 0:
				acertouPlastico = true;
				balaoErrPlastico = false;
				break;
			case 1:
				acertouPapel = true;
				balaoErrPapel = false;
				break;
			case 2:
				acertouVidro = true;
				balaoErrVidro = false;
				break;
			case 3:
				acertouOrganico = true;
				balaoErrOrganico = false;
				break;
			case 4:
				acertouMetal = true;
				balaoErrMetal = false;
				break;
			default:
				break;
		}

		var index = indexLatas.indexOf(lataAtual);
		if (index !== -1) {
			indexLatas.splice(index, 1);
			sortearLata();
		}


	}

	//Caso o jogador erre a lata
	else {
		if (indexLatas.length > 0) {
			switch (lataAtual) {
				case 0:
					balaoErrPlastico = true;
					titulo = 'Lata Vermelha';
					break;
				case 1:
					balaoErrPapel = true;
					titulo = "Lata Azul";
					break;
				case 2:
					balaoErrVidro = true;
					titulo = "Lata Verde";
					break;
				case 3:
					balaoErrOrganico = true;
					titulo = "Lata Marrom";
					break;
				case 4:
					balaoErrMetal = true;
					titulo = "Lata Amarela";
					break;
				default:
					break;
			}
		}
	}

}

function sortearLata() {
	if (indexLatas.length > 0) {
		var lata = indexLatas[Math.floor(Math.random() * indexLatas.length)];
		console.log('Lata: ' + lata);
		lataAtual = lata;
		titulo = "Lata: "+lataAtual;
		descubraLata(lata);
	}
	else{
		alert('PARABÉNS');
	}
}

function mousePressed() {
	userStartAudio();
}