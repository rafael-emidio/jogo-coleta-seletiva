let musicaFundo = new p5.MonoSynth();

function preload() {
	imgMato = loadImage('assets/mato.png');
	imgInstrutor = loadImage('assets/instrutor.png');
	
}

function setup() {
	
	distanciaBtn = windowHeight/12;

	//musicaFundo = loadSound('assets/som-fundo.mp3');

	createCanvas(windowWidth, windowHeight);

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

	// mimics the autoplay policy
	getAudioContext().suspend();

	// This won't play until the context has resumed
	musicaFundo.play('A6');
	
}

function draw() {
	background(255);

	if (mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}

	ellipse(mouseX, mouseY, 80, 80);
	image(imgMato, 0, windowHeight-90);
	image(imgInstrutor, 100, windowHeight-150);
}

function mouseClicked() {
	userStartAudio();
}

function teste() {
	console.log('teste');	
}