let musicaFundo;
let titulo = 'Créditos';

function preload() {
	imgMato = loadImage('assets/mato.png');
	imgInstrutor = loadImage('assets/instrutor.png');
	musicaFundo = loadSound('assets/som-fundo.mp3');
	imgBalao = loadImage('assets/balaoCreditos.png');

	fala1 = loadSound('assets/falaCreditos.mp3');
}

function setup() {
	
	distanciaBtn = windowHeight/12;

	// mimics the autoplay policy
	getAudioContext().suspend();

	createCanvas(windowWidth-10, windowHeight-10);

	btnVoltar = createButton('Voltar');
	btnVoltar.position(windowWidth/2, windowHeight-180);
	btnVoltar.mousePressed(paginaInicial);
	btnVoltar.addClass('btn');
	btnVoltar.addClass('btn-danger');
	btnVoltar.style('width', '250px');
	btnVoltar.style('font-size', '26px');

	musicaFundo.setVolume(0.02);
	//musicaFundo.play();
	fala1.play();
  	//musicaFundo.loop();
	
}

function draw() {
	background(255);

	
	fill(50);

	image(imgMato, 0, windowHeight-90);
	image(imgInstrutor, windowWidth/2, windowHeight-450);
	image(imgBalao, (windowWidth/2)-400, windowHeight-700);

	textSize(32);
	textAlign(CENTER);
	text(titulo, windowWidth/2, 50);
}
function paginaInicial() {
	console.log('home');
	window.location.href = "index.html";
}

function teste() {
	console.log('teste');	
}

function mousePressed() {
  userStartAudio();
}