let musicaFundo;
let titulo = 'Esolha uma das fases:';

function preload() {
	imgMato = loadImage('assets/mato.png');
	imgInstrutor = loadImage('assets/instrutor.png');
	musicaFundo = loadSound('assets/som-fundo.mp3');
	imgBalao = loadImage('assets/balaoInstrucoes.png');
	fala1 = loadSound('assets/falaInstrucoes.mp3');
	fala2 = loadSound('assets/falaEscolherFase.mp3');
	
}

function setup() {
	
	distanciaBtn = windowHeight/12;

	// mimics the autoplay policy
	getAudioContext().suspend();

	createCanvas(windowWidth-10, windowHeight-10);

	btnFase1 = createButton('Jogar Fase 1');
	btnFase1.position(windowWidth/2, windowHeight-500);
	btnFase1.mousePressed(jogarFase1);
	btnFase1.addClass('btn');
	btnFase1.addClass('btn-danger');
	btnFase1.style('width', '250px');
	btnFase1.style('font-size', '26px');

    btnFase2 = createButton('Jogar Fase 2');
	btnFase2.position(windowWidth/2, windowHeight-430);
	btnFase2.mousePressed(jogarFase2);
	btnFase2.addClass('btn');
	btnFase2.addClass('btn-danger');
	btnFase2.style('width', '250px');
	btnFase2.style('font-size', '26px');

	musicaFundo.setVolume(0.02);
	musicaFundo.play();
	fala1.play();
  	musicaFundo.loop();
	
}

function draw() {
	background(255);

	
	fill(50);

	image(imgMato, 0, windowHeight-90);
	image(imgInstrutor, (windowWidth/2)-250, windowHeight-450);
	image(imgBalao, (windowWidth/2)-600, windowHeight-600);
    imgBalao.resize(300, 300);

	textSize(32);
	textAlign(CENTER);
	text(titulo, windowWidth/2, 50);
}
function jogarFase1() {
	console.log('jogarFase1');
	window.location.href = "jogarFase1.html";
}

function jogarFase2() {
	console.log('jogarFase2');
	window.location.href = "jogarFase2.html";
}

function mousePressed() {
  userStartAudio();
}