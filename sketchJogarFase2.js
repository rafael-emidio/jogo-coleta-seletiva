let musicaFundo;
let titulo = '';
var qtdeClickEntendi = 0;

function preload() {
	imgMato = loadImage('assets/mato.png');
	imgInstrutor = loadImage('assets/instrutor.png');
	musicaFundo = loadSound('assets/som-fundo.mp3');
	imgBalaoFase1 = loadImage('assets/balaoFase2.png');

	imgBalaoLixeiraVermelha = loadImage('assets/balaoResplastico.png');
	imgBalaoLixeiraAzul = loadImage('assets/balaoRespapel.png');
	imgBalaoLixeiraVerde = loadImage('assets/balaoResvidro.png');
	imgBalaoLixeiraMarrom = loadImage('assets/balaoResorganico.png');
	imgBalaoLixeiraAmarelo = loadImage('assets/balaoResmetal.png');

	imgLixeiraPlastico = loadImage('assets/lata-plastico.png');
	imgLixeiraPapel = loadImage('assets/lata-papel.png');
	imgLixeiraVidro = loadImage('assets/lata-vidro.png');
	imgLixeiraOrganico = loadImage('assets/lata-organico.png');
	imgLixeiraMetal = loadImage('assets/lata-metal.png');

	imgResiduoPlastico1 = loadImage('assets/residuoPlastico1.png');
	imgResiduoPlastico2 = loadImage('assets/residuoPlastico2.png');
	imgResiduoPlastico3 = loadImage('assets/residuoPlastico3.png');

	imgResiduoPapel1 = loadImage('assets/residuoPapel1.png');
	imgResiduoPapel2 = loadImage('assets/residuoPapel2.png');
	imgResiduoPapel3 = loadImage('assets/residuoPapel3.png');

	imgResiduoVidro1 = loadImage('assets/residuoVidro1.png');
	imgResiduoVidro2 = loadImage('assets/residuoVidro2.png');
	imgResiduoVidro3 = loadImage('assets/residuoVidro3.png');

	imgResiduoOrganico1 = loadImage('assets/residuoOrganico1.png');
	imgResiduoOrganico2 = loadImage('assets/residuoOrganico2.png');
	imgResiduoOrganico3 = loadImage('assets/residuoOrganico3.png');

	imgResiduoMetal1 = loadImage('assets/residuoMetal1.png');
	imgResiduoMetal2 = loadImage('assets/residuoMetal2.png');
	imgResiduoMetal3 = loadImage('assets/residuoMetal3.png');

	fala1 = loadSound('assets/falaFase2Vermelha.mp3');
	fala2 = loadSound('assets/falaFase2Azul.mp3');
	fala3 = loadSound('assets/falaFase2Verde.mp3');
	fala4 = loadSound('assets/falaFase2Marrom.mp3');
	fala5 = loadSound('assets/falaFase2Amarelo.mp3');


}

function setup() {

	distanciaBtn = windowHeight / 12;


	// mimics the autoplay policy
	getAudioContext().suspend();

	createCanvas(windowWidth - 10, windowHeight - 10);

	btnVoltar = createButton('Entendi');
	btnVoltar.position((windowWidth / 2) + 200, windowHeight - 400);
	btnVoltar.mousePressed(clickEntendi);
	btnVoltar.addClass('btn');
	btnVoltar.addClass('btn-danger');
	btnVoltar.style('width', '100px');
	btnVoltar.style('font-size', '22px');

	musicaFundo.setVolume(0.02);
	musicaFundo.play();
	musicaFundo.loop();

}

function draw() {
	background(255);


	fill(50);


	image(imgMato, 0, windowHeight - 90);
	image(imgInstrutor, windowWidth / 2 + 400, windowHeight - 450);
	imgInstrutor.resize(150, 200);

	//image(imgBalaoFase1, (windowWidth / 2) - 400, windowHeight - 630);
	//imgBalaoFase1.resize(350, 350);

	//======== Desenha as Lixeiras =========== 
	switch (qtdeClickEntendi) {
		case 0:
			image(imgBalaoFase1, (windowWidth / 2), windowHeight - 630);
			imgBalaoFase1.resize(350, 350);

			image(imgLixeiraPlastico, (windowWidth / 2) - 500, windowHeight - 230);
			image(imgLixeiraPapel, (windowWidth / 2) - 300, windowHeight - 230);
			image(imgLixeiraVidro, (windowWidth / 2) - 100, windowHeight - 230);
			image(imgLixeiraOrganico, (windowWidth / 2) + 100, windowHeight - 230);
			image(imgLixeiraMetal, (windowWidth / 2) + 300, windowHeight - 230);
			break;
		case 1:
			image(imgBalaoLixeiraVermelha, (windowWidth / 2), windowHeight - 630);
			//imgBalaoLixeiraVermelha.resize(350, 350);
			image(imgLixeiraPlastico, (windowWidth / 2), windowHeight - 230);

			textSize(32);
			textAlign(CENTER);
			text("Embalagens", windowWidth / 2 - 200, windowHeight - 550);
			image(imgResiduoPlastico1, (windowWidth / 2) - 500, windowHeight - 630);

			textSize(32);
			textAlign(CENTER);
			text("Garrafas Pet", windowWidth / 2 - 200, windowHeight - 350);
			image(imgResiduoPlastico2, (windowWidth / 2) - 500, windowHeight - 430);

			textSize(32);
			textAlign(CENTER);
			text("Sacolas", windowWidth / 2 - 200, windowHeight - 150);
			image(imgResiduoPlastico3, (windowWidth / 2) - 500, windowHeight - 230);
			break;
		case 2:
			image(imgBalaoLixeiraAzul, (windowWidth / 2), windowHeight - 630);
			//imgBalaoLixeiraVermelha.resize(350, 350);
			image(imgLixeiraPapel, (windowWidth / 2), windowHeight - 230);

			textSize(32);
			textAlign(CENTER);
			text("Papel", windowWidth / 2 - 200, windowHeight - 550);
			image(imgResiduoPapel1, (windowWidth / 2) - 500, windowHeight - 630);

			textSize(32);
			textAlign(CENTER);
			text("Papelão", windowWidth / 2 - 200, windowHeight - 350);
			image(imgResiduoPapel2, (windowWidth / 2) - 500, windowHeight - 430);

			textSize(32);
			textAlign(CENTER);
			text("Jornais", windowWidth / 2 - 200, windowHeight - 150);
			image(imgResiduoPapel3, (windowWidth / 2) - 500, windowHeight - 230);
			break;
		case 3:
			image(imgBalaoLixeiraVerde, (windowWidth / 2), windowHeight - 630);
			//imgBalaoLixeiraVermelha.resize(350, 350);
			image(imgLixeiraVidro, (windowWidth / 2), windowHeight - 230);

			textSize(32);
			textAlign(CENTER);
			text("Garrafas", windowWidth / 2 - 200, windowHeight - 550);
			image(imgResiduoVidro1, (windowWidth / 2) - 500, windowHeight - 630);

			textSize(32);
			textAlign(CENTER);
			text("Copos", windowWidth / 2 - 200, windowHeight - 350);
			image(imgResiduoVidro2, (windowWidth / 2) - 500, windowHeight - 430);

			textSize(32);
			textAlign(CENTER);
			text("Recipientes", windowWidth / 2 - 200, windowHeight - 150);
			image(imgResiduoVidro3, (windowWidth / 2) - 500, windowHeight - 230);
			break;
		case 4:
			image(imgBalaoLixeiraMarrom, (windowWidth / 2), windowHeight - 630);
			//imgBalaoLixeiraVermelha.resize(350, 350);
			image(imgLixeiraOrganico, (windowWidth / 2), windowHeight - 230);

			textSize(32);
			textAlign(CENTER);
			text("Restos de comida", windowWidth / 2 - 200, windowHeight - 550);
			image(imgResiduoOrganico1, (windowWidth / 2) - 500, windowHeight - 630);

			textSize(32);
			textAlign(CENTER);
			text("Cascas de frutas", windowWidth / 2 - 200, windowHeight - 350);
			image(imgResiduoOrganico2, (windowWidth / 2) - 500, windowHeight - 430);

			textSize(32);
			textAlign(CENTER);
			text("Folhas secas", windowWidth / 2 - 200, windowHeight - 150);
			image(imgResiduoOrganico3, (windowWidth / 2) - 500, windowHeight - 230);
			break;
		case 5:
			image(imgBalaoLixeiraAmarelo, (windowWidth / 2), windowHeight - 630);
			//imgBalaoLixeiraVermelha.resize(350, 350);
			image(imgLixeiraMetal, (windowWidth / 2), windowHeight - 230);

			textSize(32);
			textAlign(CENTER);
			text("Ferramentas", windowWidth / 2 - 200, windowHeight - 550);
			image(imgResiduoMetal1, (windowWidth / 2) - 500, windowHeight - 630);

			textSize(32);
			textAlign(CENTER);
			text("Latas", windowWidth / 2 - 200, windowHeight - 350);
			image(imgResiduoMetal2, (windowWidth / 2) - 500, windowHeight - 430);

			textSize(32);
			textAlign(CENTER);
			text("Talheres", windowWidth / 2 - 200, windowHeight - 150);
			image(imgResiduoMetal3, (windowWidth / 2) - 500, windowHeight - 230);
			break;
		case 6:
			console.log('Fase 1 - parte 2');
			window.location.href = "jogarFase2-2.html";
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
			fala1.play();
			break;
		case 2:
			fala1.stop();
			fala2.play();
			break;
		case 3:
			fala2.stop();
			fala3.play();
			break;
		case 4:
			fala3.stop();
			fala4.play();
			break;
		case 5:
			fala4.stop();
			fala5.play();
			break;
		default:
			break;
	}


}

function mousePressed() {
	userStartAudio();
}