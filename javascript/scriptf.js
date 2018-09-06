
	var deplacementR = false;
	var deplacementL = false;
	var deplacementU = false;
	var deplacementD = false;
	var t = 0;
	var v = 0;

var game = new Phaser.Game(800,600,Phaser.AUTO,'content',{preload: preload, create: create, update: update, render: render});

function preload(){
	game.load.image('tete', 'asset/img/tete.png');
	game.load.image('segment','asset/img/segment.png');
	game.load.image('pommeR','asset/img/pommeR.png');
	game.load.image('pommeV','asset/img/pommeV.png');
	game.load.image('pommeJ','asset/img/pommeJ.png');
	game.load.image('pommeVi','asset/img/pommeVi.png');
}

function create(){
	tete = game.add.sprite(400, 300, 'tete');
	serpent = [tete];
	coordQueue = new Phaser.Point(serpent[serpent.length-1].x, serpent[serpent.length-1].y);
	for (i = 0; i <= 15; i++){
		serpent.push(game.add.sprite(coordQueue.x-10,coordQueue.y,'segment'));
		coordQueue = new Phaser.Point(serpent[serpent.length-1].x, serpent[serpent.length-1].y);
	}
	
}

function update(){
	if(v == 20){
		deplacementR = true;
		deplacementU = false;
	}
	if(v == 40){
		deplacementU = true;
		deplacementR = false;
		v = 0;
	}
	//Vérification du déplacement vers la droite
	if (t == 20){
		if(deplacementR){
			b = new Phaser.Point(serpent[0].x,serpent[0].y);
			serpent[0].x += 10;
		}
		if(deplacementU){
			b = new Phaser.Point(serpent[0].x,serpent[0].y);
			serpent[0].y -= 10;
		}
		for (a = 1; a <= serpent.length-1; a++ ){
			c = b;
			b = new Phaser.Point(serpent[a].x,serpent[a].y);
			serpent[a].x = c.x;
			serpent[a].y = c.y;
		}
		t = 0;
	}
	//---------------------------------------------------------------
	coordQueue = new Phaser.Point(serpent[serpent.length-1].x, serpent[serpent.length-1].y);
	t++;
	v++;
	//=============================================================================================
}

function render(){
	
}