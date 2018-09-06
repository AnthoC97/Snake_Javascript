//Un objet de la classe Phaser
var game = new Phaser.Game(800,600,Phaser.AUTO,'content',{preload: preload, create: create, update: update});
//Fonctions de base de Phaser
//Fonction pour charger les éléments avant le début du jeu
function preload(){
	game.load.image('tete', 'asset/img/tete.png');
	game.load.image('segment','asset/img/segment.png');
	game.load.image('pommeR','asset/img/pommeR.png');
	game.load.image('pommeV','asset/img/pommeV.png');
	game.load.image('pommeJ','asset/img/pommeJ.png');
	game.load.image('pommeVi','asset/img/pommeVi.png');
}
//Les éléments du jeu seront crées dans cette fonction*************************************************************************************
function create(){
	//Physique de base
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//Valeurs par défaut
	var vitesse = 1;
	var score = 0;
	var bonus = 1;
	var chrono = 300;
	//Interface====================================================================================
	//style de texte------------------------------------------------------
	var style1 = { font: "24px Arial", fill: "#ffffff", align: "left" };
	var textVitesse = game.add.text(0, 0, "Vitesse : "+vitesse, style1);
	var textScore = game.add.text(350, 0, "Score : "+score, style1);
	var textBonus = game.add.text(650, 0, "Bonus : "+bonus, style1);
	var textChrono = game.add.text(650, 574, "chrono : "+chrono, style1);
	//éléments du serpent-------------------------------------------------
	tete = game.add.sprite(400, 300, 'tete');
	segment = game.add.sprite(390,300,'segment');
	//--------------------------------------------------------------------
	//=============================================================================================
	//gerer les images par le centre--------------------------------------
	//--------------------------------------------------------------------
	//le serpent
	nbSegment = 30;
	serpent = [tete,segment];
	game.physics.enable(serpent[0]);
	coordTete = new Phaser.Point(tete.x,tete.y);
	coordSegment = new Phaser.Point(segment.x,segment.y);
	chemin = [coordTete, coordSegment];
}
//Cette fonction sera appelé à chaque fois qu'une nouvelle image sera affiché (fps)********************************************************
function update(){
	if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
		serpent.unshift(game.add.sprite(380,300,'segment'));
		
	}
}
