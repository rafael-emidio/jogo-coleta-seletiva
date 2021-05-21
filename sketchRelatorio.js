let musicaFundo;
let titulo = '';
let titulo2 = '';
let frase = 'Com sua ajuda conseguimos limpar todos os residuos e deixar o planeta mais limpo!'

function preload() {
	imgMato = loadImage('assets/mato.png');
	imgInstrutor = loadImage('assets/instrutor.png');
	imgBalao = loadImage('assets/balao1.png');
	musicaFundo = loadSound('assets/som-fundo.mp3');
}

function setup() {
	
	distanciaBtn = windowHeight/12;

	// mimics the autoplay policy
	getAudioContext().suspend();

	createCanvas(windowWidth-10, windowHeight-10);

	btnVoltar = createButton('Voltar ao menu');
	btnVoltar.position(windowWidth/2-150, windowHeight/2+150);
	btnVoltar.mousePressed(paginaMenuInicial);
	btnVoltar.addClass('btn');
	btnVoltar.addClass('btn-danger');
	btnVoltar.style('width', '250px');
	btnVoltar.style('font-size', '26px');

	pts1  =  getCookie('pontosFase1');
	pts2  =  getCookie('pontosFase2');

	if(pts1 == null)
		pts1 = 0;
	if(pts2 == null)
		pts2 = 0;

	titulo = "Você fez " + pts1 + ' de 500 pontos na primeira fase.';
	titulo2 = "Você fez " + pts2 + ' de 1000 pontos na segunda fase.';

	textSize(32);
	textAlign(CENTER);
	
}

function draw() {
	background(255);

	
	fill(50);

	image(imgMato, 0, windowHeight-90);

	image(imgInstrutor, windowWidth/2+300, windowHeight-300);
	imgInstrutor.resize(150, 200);

	//image(imgBalao, (windowWidth/2)-300, windowHeight-550);

	
	text(frase, windowWidth/2, 50);

	text(titulo, windowWidth/2, 200);

	text(titulo2, windowWidth/2, 350);

	
}

function paginaMenuInicial() {
	console.log('escolher fase');
	window.location.href = "index.html";
}

function mousePressed() {
  userStartAudio();
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}