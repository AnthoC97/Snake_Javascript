var deplacementR = false;
var deplacementL = false;
var deplacementU = false;
var deplacementD = false;
var t = 0;



//Un objet de la classe Phaser
var game = new Phaser.Game(800,600,Phaser.AUTO,'content',{preload: preload, create: create, update: update, render: render});
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
	vitesse = 1;
	score = 0;
	bonus = 1;
	chrono = 120;
	//Interface====================================================================================
	//style de texte------------------------------------------------------
	style1 = { font: "24px Arial", fill: "#ffffff", align: "left" };
	textVitesse = game.add.text(0, 0, "Vitesse : "+vitesse.toString(), style1);
	textScore = game.add.text(350, 0, "Score : "+score.toString(), style1);
	textBonus = game.add.text(650, 0, "Bonus : "+bonus.toString(), style1);
	textChrono = game.add.text(650, 574, "chrono : "+chrono.toString(), style1);
	//---------------------------------------------------------------------
	//tete du serpent
	tete = game.add.sprite(400, 300, 'tete');
	//=============================================================================================
	//le serpent
	serpent = [tete];
	game.physics.enable(serpent[0]);
	
}
//Cette fonction sera appelé à chaque fois qu'une nouvelle image sera affiché (fps)********************************************************
passageUpdate = 300;
var pomme1;
var pomme2;
var pomme3;
function update(){
	//Générer des entiers aléatoires----------------------------------------
	function EntierAléatoire(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}
	//Génère un type de pomme aléatoire-------------------------------------
	function aleatoireTypePomme(){
		a = EntierAléatoire(1,129);
		if (a % 32 == 0){
			return 'pommeVi';
		}
		else if(a % 16 == 0){
			return 'pommeV';
		}
		else if (a % 8 == 0){
			return 'pommeJ';
		}
		else {
			return 'pommeR';
		}
	}
	//générer des pommes tout les 300 passages dans cette boucle-----------
	var h; var i; var p1;
	var j; var k; var p2;
	var l; var m; var p3;
	if (passageUpdate == 300){
		if (pomme1 == null){
			h = EntierAléatoire(0, 791);
			i = EntierAléatoire(0, 591);
			p1 = aleatoireTypePomme();
			pomme1 = game.add.sprite(h,i,p1);
			game.physics.enable(pomme1);
			
		}
		if (pomme2 == null){
			j = EntierAléatoire(0, 791);
			k = EntierAléatoire(0, 591);
			p2 = aleatoireTypePomme();
			pomme2 = game.add.sprite(j,k,p2);
			game.physics.enable(pomme2);
			
		}
		if (pomme3 == null){
			l = EntierAléatoire(0, 791);
			m = EntierAléatoire(0, 591);
			p3 = aleatoireTypePomme();
			pomme3 = game.add.sprite(l,m,p3);
			game.physics.enable(pomme3);
			
		}
		
		passageUpdate = 0;
	}
	//si le serpent touche une pomme------------------------------------------
	if(game.physics.arcade.collide(serpent[0], pomme1)){
		type1 = pomme1.key;
		pomme1.destroy();
		pomme1 = null;
		if (type1 == 'pommeR'){
			for (i = 0; i <= bonus-1; i++){
				serpent.push(game.add.sprite(coordQueue.x,coordQueue.y,'segment'));
			}
		}
		else if (type1 == 'pommeJ'){
			if(vitesse < 9){
				vitesse += 1;
				textVitesse.setText('Vitesse : '+vitesse);
			}
			else if (vitesse == 8){
				vitesse += 1;
				textVitesse.setText('Vitesse : Max');
			}
			else{
				textVitesse.setText('Vitesse : Max');
			}
		}
		else if (type1 == 'pommeV'){
			bonus += 0.1;
			textBonus.setText('Bonus : '+bonus);
		}
		else {
			typeA1 = EntierAléatoire(1,4);
			if (typeA1 == 1){
				for (i = 0; i <= bonus-1; i++){
					serpent.push(game.add.sprite(coordQueue.x,coordQueue.y,'segment'));
				}
			}
			else if (typeA1 == 2){
				if(vitesse < 9){
					vitesse += 1;
					textVitesse.setText('Vitesse : '+vitesse);
				}
				else if (vitesse == 8){
					vitesse += 1;
					textVitesse.setText('Vitesse : Max');
				}
				else{
					textVitesse.setText('Vitesse : Max');
				}
			}
			else{
				bonus += 0.1;
				textBonus.setText('Bonus : '+bonus);
			}
		}
	}
	if(game.physics.arcade.collide(serpent[0], pomme2)){
		type2 = pomme2.key;
		pomme2.destroy();
		pomme2 = null;
		if (type2 == 'pommeR'){
			for (i = 0; i <= bonus-1; i++){
				serpent.push(game.add.sprite(coordQueue.x,coordQueue.y,'segment'));
			}
		}
		else if (type2 == 'pommeJ'){
			if(vitesse < 9){
				vitesse += 1;
				textVitesse.setText('Vitesse : '+vitesse);
			}
			else if (vitesse == 8){
				vitesse += 1;
				textVitesse.setText('Vitesse : Max');
			}
			else{
				textVitesse.setText('Vitesse : Max');
			}
		}
		else if (type2 == 'pommeV'){
			bonus += 0.1;
			textBonus.setText('Bonus : '+bonus);
		}
		else {
			typeA2 = EntierAléatoire(1,4);
			if (typeA2 == 1){
				for (i = 0; i <= bonus-1; i++){
					serpent.push(game.add.sprite(coordQueue.x,coordQueue.y,'segment'));
				}
			}
			else if (typeA2 == 2){
				if(vitesse < 9){
					vitesse += 1;
					textVitesse.setText('Vitesse : '+vitesse);
				}
				else if (vitesse == 8){
					vitesse += 1;
					textVitesse.setText('Vitesse : Max');
				}
				else{
					textVitesse.setText('Vitesse : Max');
				}
			}
			else{
				bonus += 0.1;
				textBonus.setText('Bonus : '+bonus);
			}
		}
	}
	if(game.physics.arcade.collide(serpent[0], pomme3)){
		type3 = pomme3.key;
		pomme3.destroy();
		pomme3 = null;
		if (type3 == 'pommeR'){
			for (i = 0; i <= bonus-1; i++){
				serpent.push(game.add.sprite(coordQueue.x,coordQueue.y,'segment'));
			}
		}
		else if (type3 == 'pommeJ'){
			if(vitesse < 9){
				vitesse += 1;
				textVitesse.setText('Vitesse : '+vitesse);
			}
			else if (vitesse == 8){
				vitesse += 1;
				textVitesse.setText('Vitesse : Max');
			}
			else{
				textVitesse.setText('Vitesse : Max');
			}
		}
		else if (type3 == 'pommeV'){
			bonus += 0.1;
			textBonus.setText('Bonus : '+bonus);
		}
		else {
			typeA3 = EntierAléatoire(1,4);
			if (typeA3 == 1){
				for (i = 0; i <= bonus-1; i++){
					serpent.push(game.add.sprite(coordQueue.x,coordQueue.y,'segment'));
				}
			}
			else if (typeA3 == 2){
				if(vitesse < 9){
					vitesse += 1;
					textVitesse.setText('Vitesse : '+vitesse);
				}
				else if (vitesse == 8){
					vitesse += 1;
					textVitesse.setText('Vitesse : Max');
				}
				else{
					textVitesse.setText('Vitesse : Max');
				}
			}
			else{
				bonus += 0.1;
				textBonus.setText('Bonus : '+bonus);
			}
		}
	}
	//Gérer les déplacements=======================================================================
	if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
		deplacementU = true;
		deplacementR = false;
		deplacementD = false;
		deplacementL = false;
	}
	if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
		deplacementR = true;
		deplacementD = false;
		deplacementL = false;
		deplacementU = false;
	}
	if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
		deplacementD = true;
		deplacementL = false;
		deplacementU = false;
		deplacementR = false;
	}
	if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
		deplacementL = true;
		deplacementU = false;
		deplacementR = false;
		deplacementD = false;
	}
	if (vitesse <= 9){
		if (t == 10-vitesse){
			if(deplacementU && serpent[0].y > 0){
				b = new Phaser.Point(serpent[0].x,serpent[0].y);
				serpent[0].y -= 10;
			}
			if(deplacementR && serpent[0].x < 790){
				b = new Phaser.Point(serpent[0].x,serpent[0].y);
				serpent[0].x += 10;
			}
			if(deplacementD && serpent[0].y < 590){
				b = new Phaser.Point(serpent[0].x,serpent[0].y);
				serpent[0].y += 10;
			}
			if(deplacementL && serpent[0].x > 0){
				b = new Phaser.Point(serpent[0].x,serpent[0].y);
				serpent[0].x -= 10;
			}
			for (a = 1; a <= serpent.length-1; a++ ){
				c = b;
				b = new Phaser.Point(serpent[a].x,serpent[a].y);
				serpent[a].x = c.x;
				serpent[a].y = c.y;
			}
			t = 0;
		}
	}
	//=============================================================================================
	coordQueue = new Phaser.Point(serpent[serpent.length-1].x, serpent[serpent.length-1].y);
	passageUpdate += 1;
	t++;
}

function render() {
	tempsE = Math.round(this.game.time.totalElapsedSeconds());
	score = Math.round(tempsE*bonus*(serpent.length-1));
	textScore.setText('Score : '+score);
	tempsR = (chrono-tempsE);
    textChrono.setText('Chrono : '+tempsR);
	if (tempsR == 0){
		game.destroy();
		alert('Votre score est de '+score);
	}
}

/*

game.input.keyboard.isDown(Phaser.Keyboard.UP)

//Initialisation du serpent
	var snake = game.add.graphics(0,0);
	//tête
	snake.beginFill(0x0000ff);
	snake.drawRect(400, 300, 10, 10);
	//corps
	snake.beginFill(0x00ff00);
	snake.drawRect(390, 300, 10, 10);
	//Valeurs par défaut
	var vitesse = 1;
	var score = 0;
	var bonus = 1;
	var chrono = 300;
	
	//style de texte
	var style1 = { font: "24px Arial", fill: "#ffffff", align: "left" };
	var textVitesse = game.add.text(0, 0, "Vitesse : "+vitesse, style1);
	var textScore = game.add.text(350, 0, "Score : "+score, style1);
	var textBonus = game.add.text(650, 0, "Bonus : "+bonus, style1);
	var textChrono = game.add.text(650, 574, "chrono : "+chrono, style1);
	game.load.image('tete', 'asset/img/tete.png');
	
	
		alert(''+chemin[0])
		
		
		
		
		function genererPommeAleatoire(){
		a = EntierAléatoire(0, 791);
		b = EntierAléatoire(0, 591);
		c = EntierAléatoire(0, 791);
		d = EntierAléatoire(0, 591);
		e = EntierAléatoire(0, 791);
		f = EntierAléatoire(0, 591);
		p1 = aleatoireTypePomme();
		p2 = aleatoireTypePomme();
		p3 = aleatoireTypePomme();
		pomme1 = game.add.sprite(a,b,p1);
		pomme2 = game.add.sprite(c,d,p2);
		pomme3 = game.add.sprite(e,f,p3);
	}
	*/