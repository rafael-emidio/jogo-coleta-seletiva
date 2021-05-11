let musicaFundo;

function preload() {
	imgMato = loadImage('assets/mato.png');
	imgInstrutor = loadImage('assets/instrutor.png');
	musicaFundo = loadSound('assets/som-fundo.mp3');
}

function setup() {
	
	distanciaBtn = windowHeight/12;

	// mimics the autoplay policy
	getAudioContext().suspend();

	createCanvas(windowWidth-10, windowHeight-10);

	btnIniciar = createButton('Iniciar Jogo');
	btnIniciar.position(windowWidth/2, windowHeight/7+(distanciaBtn*1));
	btnIniciar.mousePressed(teste);
	btnIniciar.addClass('btn');
	btnIniciar.addClass('btn-danger');
	btnIniciar.style('width', '250px');
	btnIniciar.style('font-size', '26px');

	btnInstrucoes = createButton('Instruções');
	btnInstrucoes.position(windowWidth/2, windowHeight/7+(distanciaBtn*2));
	btnInstrucoes.mousePressed(teste);
	btnInstrucoes.addClass('btn');
	btnInstrucoes.addClass('btn-danger');
	btnInstrucoes.style('width', '250px');
	btnInstrucoes.style('font-size', '26px');

	btnCreditos = createButton('Créditos');
	btnCreditos.position(windowWidth/2, windowHeight/7+(distanciaBtn*3));
	btnCreditos.mousePressed(teste);
	btnCreditos.addClass('btn');
	btnCreditos.addClass('btn-danger');
	btnCreditos.style('width', '250px');
	btnCreditos.style('font-size', '26px');

	musicaFundo.play();
  	musicaFundo.loop();
	
}
let s = 'Coleta Seletiva';
function draw() {
	background(255);

	
	fill(50);

	image(imgMato, 0, windowHeight-90);
	image(imgInstrutor, windowWidth/2, windowHeight-350);

	textSize(32);
	textAlign(CENTER);
	text(s, windowWidth/2, 50);
}

function teste() {
	console.log('teste');	
}

function mousePressed() {
  userStartAudio();
}