let musicaFundo;
let titulo = 'Fase 1 - 2';
var qtdeClickEntendi = -1;
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

var gifPlastico = false;
var gifPapel = false;
var gifVidro = false;
var gifOrganico = false;
var gifMetal = false;

function preload() {
	gifFogos = loadImage('assets/fogos1.gif');

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

	fala1 = loadSound('assets/falaFase12Verde.mp3'); //falta
	fala2 = loadSound('assets/falaFase12Verde.mp3'); //falta
	fala3 = loadSound('assets/falaFase12Verde.mp3'); 
	fala4 = loadSound('assets/falaFase12Verde.mp3'); //falta
	fala5 = loadSound('assets/falaFase12Verde.mp3'); //falta

	falaErr1 = loadSound('assets/falaErrVermelho.mp3');
	falaErr2 = loadSound('assets/falaErrVerde.mp3'); //falta
	falaErr3 = loadSound('assets/falaErrVerde.mp3');
	falaErr4 = loadSound('assets/falaErrVerde.mp3'); //falta
	falaErr5 = loadSound('assets/falaErrVerde.mp3'); //falta

}

function setup() {

	sortearLata();
	distanciaBtn = windowHeight / 12;


	// mimics the autoplay policy
	getAudioContext().suspend();

	createCanvas(windowWidth - 10, windowHeight - 10);


	musicaFundo.setVolume(0.02);
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

	if (acertouPlastico) {
		if (gifPlastico)
			image(gifFogos, (windowWidth / 2) - 650, windowHeight - 300);
		image(imgLixeiraPlastico, (windowWidth / 2) - 500, windowHeight - 230);
	}

	if (acertouPapel) {
		if (gifPapel)
			image(gifFogos, (windowWidth / 2) - 450, windowHeight - 300);
		image(imgLixeiraPapel, (windowWidth / 2) - 300, windowHeight - 230);
	}
	if (acertouVidro) {
		if (gifVidro)
			image(gifFogos, (windowWidth / 2) - 250, windowHeight - 300);
		image(imgLixeiraVidro, (windowWidth / 2) - 100, windowHeight - 230);
	}
	if (acertouOrganico) {
		if (gifOrganico)
			image(gifFogos, (windowWidth / 2) - 50, windowHeight - 300);
		image(imgLixeiraOrganico, (windowWidth / 2) + 100, windowHeight - 230);
	}
	if (acertouMetal) {
		if (gifMetal)
			image(gifFogos, (windowWidth / 2) + 150, windowHeight - 300);
		image(imgLixeiraMetal, (windowWidth / 2) + 300, windowHeight - 230);
	}

	//Verifica qual balão vai aparecer na tela
	if (balaoPlastico) {
		image(imgBalaoSlcVermelha, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoSlcVermelha.resize(350, 350);
	}
	if (balaoPapel) {
		image(imgBalaoSlcraAzul, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoSlcraAzul.resize(350, 350);
	}
	if (balaoVidro) {
		image(imgBalaoSlcVerde, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoSlcVerde.resize(350, 350);
	}
	if (balaoOrganico) {
		image(imgBalaoSlcMarrom, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoSlcMarrom.resize(350, 350);
	}
	if (balaoMetal) {
		image(imgBalaoSlcAmarelo, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoSlcAmarelo.resize(350, 350);
	}

	//Verifica se o jogador errou 
	if (balaoErrPlastico) {
		image(imgBalaoErrVermelha, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoErrVermelha.resize(350, 350);
	}
	if (balaoErrPapel) {
		image(imgBalaoErrraAzul, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoErrraAzul.resize(350, 350);
	}
	if (balaoErrVidro) {
		image(imgBalaoErrVerde, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoErrVerde.resize(350, 350);
	}
	if (balaoErrOrganico) {
		image(imgBalaoErrMarrom, (windowWidth / 2) - 400, windowHeight - 630);
		imgBalaoErrMarrom.resize(350, 350);
	}
	if (balaoErrMetal) {
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
				gifPlastico = true;
				gifPapel = false;
				gifVidro = false;
				gifOrganico = false;
				gifMetal = false;
				break;
			case 1:
				acertouPapel = true;
				balaoErrPapel = false;
				gifPlastico = false;
				gifPapel = true;
				gifVidro = false;
				gifOrganico = false;
				gifMetal = false;
				break;
			case 2:
				acertouVidro = true;
				balaoErrVidro = false;
				gifPlastico = false;
				gifPapel = false;
				gifVidro = true;
				gifOrganico = false;
				gifMetal = false;
				break;
			case 3:
				acertouOrganico = true;
				balaoErrOrganico = false;
				gifPlastico = false;
				gifPapel = false;
				gifVidro = false;
				gifOrganico = true;
				gifMetal = false;
				break;
			case 4:
				acertouMetal = true;
				balaoErrMetal = false;
				gifPlastico = false;
				gifPapel = false;
				gifVidro = false;
				gifOrganico = false;
				gifMetal = true;
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
					fala1.stop();
					fala2.stop();
					fala3.stop();
					fala4.stop();
					fala5.stop();
					falaErr1.stop();
					falaErr1.play();

					falaErr2.stop();
					falaErr3.stop();
					falaErr4.stop();
					falaErr5.stop();
					balaoErrPlastico = true;
					titulo = 'Lata Vermelha';
					break;
				case 1:
					fala1.stop();
					fala2.stop();
					fala3.stop();
					fala4.stop();
					fala5.stop();
					falaErr2.stop();
					falaErr2.play();

					falaErr1.stop();
					falaErr3.stop();
					falaErr4.stop();
					falaErr5.stop();
					balaoErrPapel = true;
					titulo = "Lata Azul";
					break;
				case 2:
					fala1.stop();
					fala2.stop();
					fala3.stop();
					fala4.stop();
					fala5.stop();
					falaErr3.stop();
					falaErr3.play();

					falaErr2.stop();
					falaErr1.stop();
					falaErr4.stop();
					falaErr5.stop();
					balaoErrVidro = true;
					titulo = "Lata Verde";
					break;
				case 3:
					fala1.stop();
					fala2.stop();
					fala3.stop();
					fala4.stop();
					fala5.stop();
					falaErr4.stop();
					falaErr4.play();

					falaErr2.stop();
					falaErr3.stop();
					falaErr1.stop();
					falaErr5.stop();
					balaoErrOrganico = true;
					titulo = "Lata Marrom";
					break;
				case 4:
					fala1.stop();
					fala2.stop();
					fala3.stop();
					fala4.stop();
					fala5.stop();
					falaErr5.stop();
					falaErr5.play();

					falaErr2.stop();
					falaErr3.stop();
					falaErr4.stop();
					falaErr1.stop();
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
	console.log("Sorteando lata...");
	if (indexLatas.length > 0) {
		var lata = indexLatas[Math.floor(Math.random() * indexLatas.length)];
		console.log('Lata: ' + lata);
		lataAtual = lata;
		titulo = "Lata: " + lataAtual;
		switch (lata) {
			case 1:
				falaErr1.stop();
				falaErr2.stop();
				falaErr3.stop();
				falaErr4.stop();
				falaErr5.stop();
				fala1.play();
				fala2.stop();
				fala3.stop();
				fala4.stop();
				fala5.stop();
				break;
			case 2:
				falaErr1.stop();
				falaErr2.stop();
				falaErr3.stop();
				falaErr4.stop();
				falaErr5.stop();
				fala2.play();
				fala1.stop();
				fala3.stop();
				fala4.stop();
				fala5.stop();
				break;
			case 3:
				falaErr1.stop();
				falaErr2.stop();
				falaErr3.stop();
				falaErr4.stop();
				falaErr5.stop();
				fala3.play();
				fala2.stop();
				fala1.stop();
				fala4.stop();
				fala5.stop();
				break;
			case 4:
				falaErr1.stop();
				falaErr2.stop();
				falaErr3.stop();
				falaErr4.stop();
				falaErr5.stop();
				fala4.play();
				fala2.stop();
				fala3.stop();
				fala1.stop();
				fala5.stop();
				break;
			case 5:
				falaErr1.stop();
				falaErr2.stop();
				falaErr3.stop();
				falaErr4.stop();
				falaErr5.stop();
				fala5.play();
				fala2.stop();
				fala3.stop();
				fala4.stop();
				fala1.stop();
				break;
			default:
				break;
		}
		descubraLata(lata);

	}
	else {
		alert('Parabéns, você completou a primeira fase!');
		console.log('jogarFase2');
		window.location.href = "jogarFase2.html";
		gifPlastico = true;
		gifPapel = true;
		gifVidro = true;
		gifOrganico = true;
		gifMetal = true;
	}
}

function mousePressed() {

	userStartAudio();
}