let musicaFundo;
let titulo = 'Fase 2 - 2';
var qtdeClickEntendi = 0;
var indexResiduos = [
	1.1, 1.2, 1.3, //residuos de plastico
	2.1, 2.2, 2.3, //residuos de papel
	3.1, 3.2, 3.3, //residuos de vidro
	4.1, 4.2, 4.3, //residuos de organico
	5.1, 5.2, 5.3  //residuos de metal
];
var residuoAtual;
var x = 0;
var y = 0;
var startX = 0;
var startY = 0;
var pressed = false;
var pontos = 0;
var gameOver = false;
var indexLixeira;



function preload() {
	gifFogos = loadImage('assets/fogos1.gif');

	imgMato = loadImage('assets/mato.png');
	imgInstrutor = loadImage('assets/instrutor.png');
	musicaFundo = loadSound('assets/som-fundo.mp3');
	imgBalao = loadImage('assets/balaoParte2Fase2.png');

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

	imgBalaoIndVermelha = loadImage('assets/balaoIndResplastico.png');
	imgBalaoIndAzul = loadImage('assets/balaoIndRespapel.png');
	imgBalaoIndVerde = loadImage('assets/balaoIndResvidro.png');
	imgBalaoIndMarrom = loadImage('assets/balaoIndResorganico.png');
	imgBalaoIndAmarelo = loadImage('assets/balaoIndResmetal.png');

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

	fala1 = loadSound('assets/falaFase22Vermelho.mp3');
	fala2 = loadSound('assets/falaFase22Azul.mp3'); 
	fala3 = loadSound('assets/falaFase22Verde.mp3'); 
	fala4 = loadSound('assets/falaFase22Marrom.mp3'); 
	fala5 = loadSound('assets/falaFase22Amarelo.mp3');


}

function setup() {

	
	distanciaBtn = windowHeight / 12;

	btnDica = createButton('Dica');
	btnDica.position(windowWidth/2+200, 10);
	btnDica.mousePressed(tocarAudio);
	btnDica.addClass('btn');
	btnDica.addClass('btn-danger');
	btnDica.style('width', '110px');
	btnDica.style('font-size', '22px');

	// mimics the autoplay policy
	getAudioContext().suspend();

	createCanvas(windowWidth - 10, windowHeight - 10);

	btnVoltar = createButton('Entendi');
	btnVoltar.position((windowWidth / 2) - 300, windowHeight - 400);
	btnVoltar.mousePressed(clickEntendi);
	btnVoltar.addClass('btn');
	btnVoltar.addClass('btn-danger');
	btnVoltar.style('width', '100px');
	btnVoltar.style('font-size', '22px');

	indexResiduos = embaralhar(indexResiduos);
	indexLixeira = Math.trunc(indexResiduos[0]);

	//tira 5 residuos da lista
	indexResiduos.pop();
	indexResiduos.pop();
	indexResiduos.pop();
	indexResiduos.pop();
	indexResiduos.pop();


	tocarAudio(Math.trunc(indexResiduos[0]));
	console.log(indexResiduos);

	musicaFundo.setVolume(0.02);
	musicaFundo.play();
	musicaFundo.loop();

	x = windowWidth / 2 - 150;
	y = 100;

	

}

function draw() {
	background(255);


	fill(50);

	if (!gameOver) {
		image(imgMato, 0, windowHeight - 90);


		//======== Desenha as Lixeiras ===========
		switch (qtdeClickEntendi) {
			case 0:
				image(imgInstrutor, windowWidth / 2, windowHeight - 450);
				imgInstrutor.resize(150, 200);
				image(imgBalao, (windowWidth / 2) - 400, windowHeight - 630);
				imgBalao.resize(350, 350);
				image(imgLixeiraPlastico, (windowWidth / 2) - 500, windowHeight - 230);
				image(imgLixeiraPapel, (windowWidth / 2) - 300, windowHeight - 230);
				image(imgLixeiraVidro, (windowWidth / 2) - 100, windowHeight - 230);
				image(imgLixeiraOrganico, (windowWidth / 2) + 100, windowHeight - 230);
				image(imgLixeiraMetal, (windowWidth / 2) + 300, windowHeight - 230);
				break;
			case 1:
				image(imgInstrutor, windowWidth / 2 + 450, windowHeight - 450);
				imgInstrutor.resize(150, 200);
				//image(imgBalao, (windowWidth / 2) + 400, windowHeight - 630);
				//imgBalao.resize(350, 350);
				image(imgLixeiraPlasticoSr, (windowWidth / 2) - 500, windowHeight - 230);
				image(imgLixeiraPapelSr, (windowWidth / 2) - 300, windowHeight - 230);
				image(imgLixeiraVidroSr, (windowWidth / 2) - 100, windowHeight - 230);
				image(imgLixeiraOrganicoSr, (windowWidth / 2) + 100, windowHeight - 230);
				image(imgLixeiraMetalSr, (windowWidth / 2) + 300, windowHeight - 230);

				switch (Math.trunc(indexResiduos[0])) {

					case 1:
						especifico = Math.round((indexResiduos[0] % 1) * 10);
						image(imgBalaoIndVermelha, (windowWidth / 2) + 100, windowHeight - 550);
						switch (especifico) {
							case 1:

								image(imgResiduoPlastico1, x, y);
								break;
							case 2:
								image(imgResiduoPlastico2, x, y);
								break;
							case 3:
								image(imgResiduoPlastico3, x, y);
								break;

							default:
								break;
						}
						break;
					case 2:
						especifico = Math.round((indexResiduos[0] % 1) * 10);
						image(imgBalaoIndAzul, (windowWidth / 2) + 100, windowHeight - 550);

						switch (especifico) {
							case 1:
								image(imgResiduoPapel1, x, y);
								break;
							case 2:
								image(imgResiduoPapel2, x, y);
								break;
							case 3:
								image(imgResiduoPapel3, x, y);
								break;

							default:
								break;
						}
						break;
					case 3:
						especifico = Math.round((indexResiduos[0] % 1) * 10);
						image(imgBalaoIndVerde, (windowWidth / 2) + 100, windowHeight - 550);

						switch (especifico) {
							case 1:
								image(imgResiduoVidro1, x, y);
								break;
							case 2:
								image(imgResiduoVidro2, x, y);
								break;
							case 3:
								image(imgResiduoVidro3, x, y);
								break;

							default:
								break;
						}
						break;
					case 4:
						especifico = Math.round((indexResiduos[0] % 1) * 10);
						image(imgBalaoIndMarrom, (windowWidth / 2) + 100, windowHeight - 550);

						switch (especifico) {
							case 1:

								image(imgResiduoOrganico1, x, y);
								break;
							case 2:
								image(imgResiduoOrganico2, x, y);
								break;
							case 3:
								image(imgResiduoOrganico3, x, y);
								break;

							default:
								break;
						}
						break;
					case 5:
						especifico = Math.round((indexResiduos[0] % 1) * 10);
						image(imgBalaoIndAmarelo, (windowWidth / 2) + 100, windowHeight - 550);

						switch (especifico) {
							case 1:

								image(imgResiduoMetal1, x, y);
								break;
							case 2:
								image(imgResiduoMetal2, x, y);
								break;
							case 3:
								image(imgResiduoMetal3, x, y);
								break;

							default:
								break;
						}
						break;
					default:
						console.log("Sua pontuação foi de: " + pontos + " pontos.");
						gameOver = true;
						eraseCookie('pontosFase2');
						setCookie('pontosFase2', pontos, 60);
						console.log('relatorio');
						window.location.href = "relatorio.html";
						break;
				}
				break;

		}

		textSize(32);
		textAlign(CENTER);
		text("Pontos: " + pontos, windowWidth / 2, 50);
	}
}

function setCookie(name, value, minutes) {
	var expires = "";
	if (minutes) {
		var date = new Date();
		date.setTime(date.getTime() + (minutes * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function eraseCookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function embaralhar(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function paginaInicial() {
	console.log('home');
	window.location.href = "index.html";
}

function clickEntendi() {
	btnVoltar.remove();
	console.log(qtdeClickEntendi);
	qtdeClickEntendi++;

}


function mousePressed() {
	userStartAudio();
	startX = mouseX;
	startY = mouseY;
	pressed = true;
}

function mouseReleased() {
	pressed = false;
	checarResidoLixeira();

}

function mouseDragged() {
	lixeiraAtual = Math.trunc(indexResiduos[0])
	alvoY1 = windowHeight - 230;
	alvoY2 = (windowHeight - 230) + 200;

	if (mouseX - 200 <= x && mouseX >= x) {
		if (mouseY - 200 <= y && mouseY >= y) {
			var diffX = startX - mouseX;
			var diffY = startY - mouseY;
			x = x - diffX;
			y = y - diffY;
			startX = mouseX;
			startY = mouseY;
		}
	}

}

function checarResidoLixeira() {

	console.log("LIXEIRA NUMERO: "+indexLixeira);
	switch (lixeiraAtual) {
		case 1:
			alvoX1 = (windowWidth / 2) - 500;
			alvoX2 = ((windowWidth / 2) - 500) + 100;
			if (mouseX > alvoX1 && mouseX < alvoX2) {
				if (mouseY > alvoY1 && mouseY < alvoY2) {
					console.log('no lixo');
					indexResiduos.shift();
					indexLixeira = Math.trunc(indexResiduos[0]);
					tocarAudio();
					x = windowWidth / 2 - 150;
					y = 150;
					pontos += 100;
				}
			}
			break;
		case 2:
			alvoX1 = (windowWidth / 2) - 300;
			alvoX2 = ((windowWidth / 2) - 300) + 100;
			if (mouseX > alvoX1 && mouseX < alvoX2) {
				if (mouseY > alvoY1 && mouseY < alvoY2) {
					console.log('no lixo');
					indexResiduos.shift();
					indexLixeira = Math.trunc(indexResiduos[0]);
					tocarAudio();
					x = windowWidth / 2 - 150;
					y = 150;
					pontos += 100;
				}
			}
			break;
		case 3:
			alvoX1 = (windowWidth / 2) - 100;
			alvoX2 = ((windowWidth / 2) - 100) + 100;
			if (mouseX > alvoX1 && mouseX < alvoX2) {
				if (mouseY > alvoY1 && mouseY < alvoY2) {
					console.log('no lixo');
					indexResiduos.shift();
					indexLixeira = Math.trunc(indexResiduos[0]);
					tocarAudio();
					x = windowWidth / 2 - 150;
					y = 150;
					pontos += 100;
				}
			}
			break;
		case 4:
			alvoX1 = (windowWidth / 2) + 100;
			alvoX2 = ((windowWidth / 2) + 100) + 100;
			if (mouseX > alvoX1 && mouseX < alvoX2) {
				if (mouseY > alvoY1 && mouseY < alvoY2) {
					console.log('no lixo');
					indexResiduos.shift();
					indexLixeira = Math.trunc(indexResiduos[0]);
					tocarAudio();
					x = windowWidth / 2 - 150;
					y = 150;
					pontos += 100;
				}
			}
			break;
		case 5:
			alvoX1 = (windowWidth / 2) + 300;
			alvoX2 = ((windowWidth / 2) + 300) + 100;
			if (mouseX > alvoX1 && mouseX < alvoX2) {
				if (mouseY > alvoY1 && mouseY < alvoY2) {
					console.log('no lixo');
					indexResiduos.shift();
					indexLixeira = Math.trunc(indexResiduos[0]);
					tocarAudio();
					x = windowWidth / 2 - 150;
					y = 150;
					pontos += 100;
				}
			}
			break;

		default:
			break;
	}
}

function tocarAudio() {
	switch (indexLixeira) {

		case 1:
			fala1.stop();			
			fala2.stop();
			fala3.stop();
			fala4.stop();
			fala5.stop();
			fala1.play();
			break;
		case 2:
			fala1.stop();			
			fala2.stop();
			fala3.stop();
			fala4.stop();
			fala5.stop();
			fala2.play();
			break;
		case 3:
			fala1.stop();			
			fala2.stop();
			fala3.stop();
			fala4.stop();
			fala5.stop();
			fala3.play();
			break;
		case 4:
			fala1.stop();			
			fala2.stop();
			fala3.stop();
			fala4.stop();
			fala5.stop();
			fala4.play();
			break;
		case 5:
			fala1.stop();			
			fala2.stop();
			fala3.stop();
			fala4.stop();
			fala5.stop();
			fala5.play();
			break;
		default:
			break;
	}
}

function dica() {
	fala1.play();
}

