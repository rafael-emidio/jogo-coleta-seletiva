let musicaFundo;
let titulo = 'Coleta Seletiva';

function preload() {
	imgMato = loadImage('assets/mato.png');
	imgInstrutor = loadImage('assets/instrutor.png');
	imgBalao = loadImage('assets/balao1.png');
	musicaFundo = loadSound('assets/som-fundo.mp3');
	fala1 = loadSound('assets/falaBemVindo.mp3');
}

function setup() {
	
	
	distanciaBtn = windowHeight/12;

	// mimics the autoplay policy
	getAudioContext().suspend();

	createCanvas(windowWidth-10, windowHeight-10);

	btnIniciar = createButton('Iniciar Jogo');
	btnIniciar.position(windowWidth/2, windowHeight/7+(distanciaBtn*1));
	btnIniciar.mousePressed(paginaEscolherFase);
	btnIniciar.addClass('btn');
	btnIniciar.addClass('btn-danger');
	btnIniciar.style('width', '250px');
	btnIniciar.style('font-size', '26px');

	// btnInstrucoes = createButton('Instruções');
	// btnInstrucoes.position(windowWidth/2, windowHeight/7+(distanciaBtn*2));
	// btnInstrucoes.mousePressed(paginaInstrucoes);
	// btnInstrucoes.addClass('btn');
	// btnInstrucoes.addClass('btn-danger');
	// btnInstrucoes.style('width', '250px');
	// btnInstrucoes.style('font-size', '26px');

	btnCreditos = createButton('Créditos');
	btnCreditos.position(windowWidth/2, windowHeight/7+(distanciaBtn*2));
	btnCreditos.mousePressed(paginaCreditos);
	btnCreditos.addClass('btn');
	btnCreditos.addClass('btn-danger');
	btnCreditos.style('width', '250px');
	btnCreditos.style('font-size', '26px');

	musicaFundo.play();
	fala1.play();

  	//musicaFundo.loop();
	
}

function draw() {
	background(255);

	
	fill(50);

	image(imgMato, 0, windowHeight-90);

	image(imgInstrutor, windowWidth/2, windowHeight-350);
	imgInstrutor.resize(200, 250);

	image(imgBalao, (windowWidth/2)-300, windowHeight-550);

	textSize(32);
	textAlign(CENTER);
	text(titulo, windowWidth/2, 50);
}

function paginaCreditos() {
	console.log('creditos');
	window.location.href = "creditos.html";
}
function paginaInstrucoes() {
	console.log('intrucoes');
	window.location.href = "instrucoes.html";
}
function paginaEscolherFase() {
	console.log('escolher fase');
	window.location.href = "escolherFase.html";
}

function mousePressed() {
	musicaFundo.setVolume(0.02);
  	userStartAudio();
}
