let musicaFundo;
let titulo = 'Fase 1';
var qtdeClickEntendi = -1;

function preload() {
	imgMato = loadImage('assets/mato.png');
	imgInstrutor = loadImage('assets/instrutor.png');
	musicaFundo = loadSound('assets/som-fundo.mp3');
	imgBalaoFase1 = loadImage('assets/balaoFase1.png');

	imgBalaoLixeiraVermelha = loadImage('assets/balaoLxvermelha.png');
	imgBalaoLixeiraAzul = loadImage('assets/balaoLxazul.png');
	imgBalaoLixeiraVerde = loadImage('assets/balaoLxverde.png');
	imgBalaoLixeiraMarrom = loadImage('assets/balaoLxmarrom.png');
	imgBalaoLixeiraAmarelo = loadImage('assets/balaoLxamarela.png');

	imgLixeiraPlastico = loadImage('assets/lata-plastico.png');
	imgLixeiraPapel = loadImage('assets/lata-papel.png');
	imgLixeiraVidro = loadImage('assets/lata-vidro.png');
	imgLixeiraOrganico = loadImage('assets/lata-organico.png');
	imgLixeiraMetal = loadImage('assets/lata-metal.png');

	fala1 = loadSound('assets/falaExplicarFase1.mp3');
	fala2 = loadSound('assets/falaFase1Vermelha.mp3');
	fala3 = loadSound('assets/falaFase1Azul.mp3');
	fala4 = loadSound('assets/falaFase1Verde.mp3'); 
	fala5 = loadSound('assets/falaFase1Marrom.mp3');
	fala6 = loadSound('assets/falaFase1Amarela.mp3');
}

function setup() {

	distanciaBtn = windowHeight / 12;


	// mimics the autoplay policy
	getAudioContext().suspend();

	createCanvas(windowWidth - 10, windowHeight - 10);

	btnVoltar = createButton('Entendi');
	btnVoltar.position((windowWidth / 2) - 350, windowHeight - 330);
	btnVoltar.mousePressed(clickEntendi);
	btnVoltar.addClass('btn');
	btnVoltar.addClass('btn-danger');
	btnVoltar.style('width', '100px');
	btnVoltar.style('font-size', '22px');

	musicaFundo.setVolume(0.02);
	musicaFundo.play();
	musicaFundo.loop();
	fala1.play();

}

function draw() {
	background(255);


	fill(50);


	image(imgMato, 0, windowHeight - 90);
	image(imgInstrutor, windowWidth / 2, windowHeight - 450);
	imgInstrutor.resize(150, 200);

	image(imgBalaoFase1, (windowWidth / 2) - 400, windowHeight - 630);
	imgBalaoFase1.resize(350, 350);

	//======== Desenha as Lixeiras =========== 
	switch (qtdeClickEntendi) {
		case 0:
			image(imgLixeiraPlastico, (windowWidth / 2) - 500, windowHeight - 230);
			image(imgLixeiraPapel, (windowWidth / 2) - 300, windowHeight - 230);
			image(imgLixeiraVidro, (windowWidth / 2) - 100, windowHeight - 230);
			image(imgLixeiraOrganico, (windowWidth / 2) + 100, windowHeight - 230);
			image(imgLixeiraMetal, (windowWidth / 2) + 300, windowHeight - 230);
			break;
		case 1:
			image(imgBalaoLixeiraVermelha, (windowWidth / 2) - 400, windowHeight - 630);
			imgBalaoLixeiraVermelha.resize(350, 350);
			image(imgLixeiraPlastico, (windowWidth / 2) - 500, windowHeight - 230);
			break;
		case 2:
			image(imgBalaoLixeiraAzul, (windowWidth / 2) - 400, windowHeight - 630);
			imgBalaoLixeiraAzul.resize(350, 350);
			image(imgLixeiraPapel, (windowWidth / 2) - 300, windowHeight - 230);
			break;
		case 3:
			image(imgBalaoLixeiraVerde, (windowWidth / 2) - 400, windowHeight - 630);
			imgBalaoLixeiraVerde.resize(350, 350);
			image(imgLixeiraVidro, (windowWidth / 2) - 100, windowHeight - 230);
			break;
		case 4:
			image(imgBalaoLixeiraMarrom, (windowWidth / 2) - 400, windowHeight - 630);
			imgBalaoLixeiraMarrom.resize(350, 350);
			image(imgLixeiraOrganico, (windowWidth / 2) + 100, windowHeight - 230);
			break;
		case 5:
			image(imgBalaoLixeiraAmarelo, (windowWidth / 2) - 400, windowHeight - 630);
			imgBalaoLixeiraAmarelo.resize(350, 350);
			image(imgLixeiraMetal, (windowWidth / 2) + 300, windowHeight - 230);
			break;
		case 6:
			console.log('Fase 1 - parte 2');
			window.location.href = "jogarFase1-2.html";
			break;
		default:
			break;
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
	switch (qtdeClickEntendi) {
		case 1:
			fala1.stop();
			fala2.play();
			break;
		case 2:
			fala2.stop();
			fala3.play();
			break;
		case 3:
			fala3.stop();
			fala4.play();
			break;
		case 4:
			fala4.stop();
			fala5.play();
			break;
		case 5:
			fala5.stop();
			fala6.play();
			break;
		default:
			break;
	}


}

function mousePressed() {
	userStartAudio();
}