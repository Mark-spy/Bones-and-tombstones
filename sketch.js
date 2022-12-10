//Narrações e créditos
var prologo, prologo_1, prologo_2, prologo_3, prologo_4, prologo_5;
var creditos, creditos_1, creditos_2, creditos_3, creditos_4, creditos_5;
var creditos_6, creditos_7, creditos_8, creditos_9, fim_1, fim_2;
var epilogo_a1, epilogo_a2, epilogo_a3, epilogo_a4, epilogo_b1, epilogo_b2, epilogo_b3, epilogo_b4;
var tutorial, tutorialImg;
var gameover, gameover_1, gameover_2, gameover_3, gameover_4, gameover_5;
var amongus_1, amongus_2, amongus_3, amongus_4;

//Sprites, botões background
var mia, mia_1, mia_2, mia_3, mia_4, mia_5, mia_6;
var mia_menu, mia_menuImg, mia_controles, mia_conrolesImg, mia_gameover, mia_gameoverImg;
var plague, plagueGif, plague_1, plague_2, plagueMask, plagueMaskImg;
var osso, ossoImg;
var esqueleto, esqueletoImg;
var rosaImg;
var mask, mask_menu, maskImg;
var lapideImg, lapideAltaImg, lapideGemeaImg;
var lapideAssombrada, lapideAssombradaImg;
var backGround, backGroundImg;
var titulo, tituloImg, jogar, jogarImg, controles, controlesImg, voltar, voltarImg;
var menu, menuImg;
var volte, volteImg;
var creditosButton, creditosButtonImg;
var flash, flashImg;
var amongus, amongusImg;
//Músicas
var menuMus, gameoverMus, quietezMus, creditosMus_1, creditosMus_2, gameplayMus, amongusMus;

//Efeitos Sonoros
var atack, grito, click, gemido, jump, queda, run, transition, walk, jumpscare_1,jumpscare_2;

//Variáveis que arazenam valores
//Movimentção
var direcao = 1;
var pulou = 0;
var chao = 1;
var andando = 0;
var velocidade = 1.1; // Quanto maior, mais devagar (1.1: correndo / 1.2: andando)
var barulho = 0;
var caiu = 1;

//Rosas
var rosas = 0;
//0: Prólogo 1: Menu 2: Controles3: Stage quieto 4: Stage run 
var gamestage = 0; //5: Gameover, prólogo e créditos ou AMONGUS
var skip = 0;

//Elementos do mapa
var portao1, portao2, portaoImg;

//Elementos singulares do jogo
var rosa1, rosa2, rosa3, rosa4, rosa5, rosa6, rosa7;
var lapide1;
var plagueSpider1;


function preload() {
  //// NARRAÇÕES E CRÉDITOS
  //Créditos
  creditos_1 = loadImage("imagens/creditos_1.png");
  creditos_2 = loadImage("imagens/creditos_2.png");
  creditos_3 = loadImage("imagens/creditos_3.png");
  creditos_4 = loadImage("imagens/creditos_4.png");
  creditos_5 = loadImage("imagens/creditos_5.png");
  creditos_6 = loadImage("imagens/creditos_6.png");
  creditos_7 = loadImage("imagens/creditos_7.png");
  creditos_8 = loadImage("imagens/creditos_8.png");
  creditos_9 = loadImage("imagens/creditos_9.png");
  fim_1 = loadImage("imagens/fim_1.png");
  fim_2 = loadImage("imagens/fim_2.png");

  //Epilogos antes dos créditos
  epilogo_a1 = loadImage("imagens/epilogo_a1.png");
  epilogo_a2 = loadImage("imagens/epilogo_a2.png");
  epilogo_a3 = loadImage("imagens/epilogo_a3.png");
  epilogo_a4 = loadImage("imagens/epilogo_a4.png");
  epilogo_b1 = loadImage("imagens/epilogo_b1.png");
  epilogo_b2 = loadImage("imagens/epilogo_b2.png");
  epilogo_b3 = loadImage("imagens/epilogo_b3.png");
  epilogo_b4 = loadImage("imagens/epilogo_b4.png");

  //Prólogo antes do jogo
  prologo_1 = loadImage("imagens/prologo_1.png");
  prologo_2 = loadImage("imagens/prologo_2.png");
  prologo_3 = loadImage("imagens/prologo_3.png");
  prologo_4 = loadImage("imagens/prologo_4.png");
  prologo_5 = loadImage("imagens/prologo_5.png");

  //Epílogo de GameOver
  gameover_1 = loadImage("imagens/gameover_1.png");
  gameover_2 = loadImage("imagens/gameover_2.png");
  gameover_3 = loadImage("imagens/gameover_3.png");
  gameover_4 = loadImage("imagens/gameover_4.png");
  gameover_5 = loadImage("imagens/gameover_5.png");

  //Easter Egg do AMONGUS
  amongus_1 = loadImage("imagens/amongus_1.png");
  amongus_2 = loadImage("imagens/amongus_2.png");
  amongus_3 = loadImage("imagens/amongus_3.png");
  amongus_4 = loadImage("imagens/amongus_4.png");

  ////SPRITES, BOTÕES E BACKGROUNDS
  //Sprites da protagonista
  mia_menuImg = loadImage("sprites/mia.png");
  mia_controlesImg = loadImage("sprites/mia_lanterna.png");
  mia_gameoverImg = loadImage("sprites/mia_insana.png");
  mia_1 = loadImage("sprites/mia_1.png");
  mia_2 = loadImage("sprites/mia_2.png");
  mia_3 = loadImage("sprites/mia_3.png");
  mia_4 = loadImage("sprites/mia_4.png");
  mia_5 = loadImage("sprites/mia_5.png");
  mia_6 = loadImage("sprites/mia_6.png");

  //Botões e backgrounds
  jogarImg = loadImage("sprites/jogar.png");
  voltarImg = loadImage("sprites/voltar.png");
  controlesImg = loadImage("sprites/controles.png");
  creditosButtonImg = loadImage("sprites/creditos.png");
  tituloImg = loadImage("sprites/titulo.png");
  menuImg = loadImage("sprites/menu.png");
  backGroundImg = loadImage("sprites/background.png");
  tutorialImg = loadImage("imagens/controles.png");

  //Elementos do jogo e seu antagonista
  ossoImg = loadImage("sprites/osso.png");
  esqueletoImg = loadImage("sprites/esqueleto.png");
  plagueGif = loadImage("sprites/plague.gif");
  plague_1 = loadImage("sprites/plague_1.gif");
  plague_2 = loadImage("sprites/plague_2.gif");
  portaoImg = loadImage("sprites/portao.png");
  rosaImg = loadImage("sprites/rosa.png");
  maskImg = loadImage("sprites/mask.png");
  lapideAssombradaImg = loadImage("sprites/lapide_assombrada.png");
  lapideAltaImg = loadImage("sprites/lapide_alta.png");
  lapideImg = loadImage("sprites/lapide_normal.png");
  lapideGemeaImg = loadImage("sprites/lapide_gemea.png");
  flashImg = loadImage("sprites/branco.png");
  amongusImg = loadImage("sprites/amongus.png");
  volteImg = loadImage("sprites/volte.png");
  

  ////TRILHA SONORA E EFEITOS SONOROS
  //Trilha sonora

  gameplayMus = loadSound("musicas/corra.mp3");
  gameoverMus = loadSound("musicas/gameover.mp3");
  menuMus = loadSound("musicas/menu.mp3");
  quietezMus = loadSound("musicas/quietez.mp3");
  creditosMus_1 = loadSound("musicas/creditos.mp3");
  creditosMus_2 = loadSound("musicas/final_alternativo.mp3");
  amongusMus = loadSound("musicas/amongus.mp3");

  //Efeitos sonoros
  walk = loadSound("efeitos/walk.mp3");
  atack = loadSound("efeitos/atack.mp3");
  click = loadSound("efeitos/click.mp3");
  gemido = loadSound("efeitos/gemido.mp3");
  jump = loadSound("efeitos/queda.mp3");
  jumpscare_1 = loadSound("efeitos/jumpscare_1.mp3");
  jumpscare_2 = loadSound("efeitos/jumpscare_2.mp3");
  queda = loadSound("efeitos/queda.mp3");
  run = loadSound("efeitos/run.mp3");
  transition = loadSound("efeitos/transition.mp3");
  grito = loadSound("efeitos/grito.mp3");
}

function setup() {
  //O básico né?
  createCanvas(960,540);

  //Soundtrack do menu
  menuMus.loop();
  menuMus.setVolume(0.25);

  //Geração do mapa INTEIRO
  spawn();

  //Player ou protagonista da gameplay
  mia = createSprite(480, 370);
  mia.addImage("mia", mia_1);
  mia.scale = 0.4;

  //Menu
  menu = createSprite(480,270);
  menu.addImage("menu", menuImg);
  titulo = createSprite(480,100);
  titulo.addImage("titulo", tituloImg);
  jogar = createSprite(480,250);
  jogar.addImage("jogar", jogarImg);
  controles = createSprite(480, 350);
  controles.addImage("controles", controlesImg);
  creditosButton = createSprite(100, 450);
  creditosButton.addImage("créditos", creditosButtonImg);
  mia_menu = createSprite(250, 300);
  mia_menu.addImage("mia_menu", mia_menuImg);
  mask_menu = createSprite(700, 300);
  mask_menu.addImage("mask_menu", maskImg);
  mask_menu.scale =  0.25;
  tutorial = createSprite(480, 270);
  tutorial.addImage("controles", tutorialImg);
  tutorial.visible = false;

  //Variável que exibirá os créditos e o epílogo
  creditos = createSprite(480,270);
  creditos.addImage("creditos", creditos_1);
  creditos.visible = false;

  //Tive que colocar o Voltar aqui porque o crédito estava na frente de tudo
  voltar = createSprite(480, 450);
  voltar.addImage("voltar", voltarImg);
  voltar.visible = false;


  //Flash
  flash = createSprite(480, 270);
  flash.scale = 2;
  flash.addImage("flash", flashImg);
  flash.visible = false;

  //Cutscene do prólogo
  prologo = createSprite(480, 270)
  prologo.addImage("prologo", prologo_1);
setTimeout(function() {
    prologo.addImage("prologo", prologo_2);
    }, 4800);
setTimeout(function() {
    prologo.addImage("prologo", prologo_3);
    }, 9600);
setTimeout(function() {
    prologo.addImage("prologo", prologo_4);
    }, 19200);
setTimeout(function() {
    prologo.addImage("prologo", prologo_5);
   }, 24000);
setTimeout(function() {
    if(skip == 0){
      prologo.visible = false;
      gamestage = 1;
    }
  }, 28750);
}

function draw() {
  //Básico
  background("black");
  drawSprites();

  //TODAS AS COISAS DIRETAMENTE RELACIONADAS AO ESTADO DE JOGO
  //Skip da cutscene do prólogo
  if(gamestage == 0){
    if(keyDown("esc")){
      prologo.visible = false;
      gamestage = 1;
      click.play();
      skip = 1;
    }
  }
  if(gamestage == 1){
    //Ao voltar dos controles e créditos
    voltar.scale = 1;
    tutorial.visible = false;
    voltar.visible = false;
    creditos.visible = false;

    //Começar a jogar, e sua cutscene de transição
    if ((keyDown("enter")) || (mousePressedOver(jogar))){
      menu.visible = false;
      jogar.scale = 0;
      controles.scale = 0;
      creditosButton.scale = 0;
      titulo.visible = false;
      mia_menu.visible = false;
      mask_menu.visible = false;
      transition.play();
      click.play();
      flash.visible = true;
      gamestage = 3;
      setTimeout(function() {
        quietezMus.stop();
        quietezMus.loop();
        flash.visible = false;
      }, 1750)
      menuMus.stop();
    }
    //Aqui se mostra os controles
    if ((mousePressedOver(controles))){
      gamestage = 2;
      tutorial.visible = true;
      voltar.visible = true;
      click.play();
    }
    //Caso o jogador se apresse em ver os créditos
    if (mousePressedOver(creditosButton)){
      gamestage = 2;
      click.play();
      creditos.visible = true;
      voltar.visible = true;


    }
  }
    //Saída dos controles e créditos
    if(gamestage == 2){
      if((mousePressedOver(voltar)) || (keyDown("esc"))){
        gamestage = 1;
        click.play();
      }
    }
  
  //Física dos andar e correr
  if((gamestage == 3) || (gamestage == 4)){
    if((keyDown("a")) && (chao == 1)){
      if(backGround.velocityX < 0){
        parar();
      }
      esquerda();
    } else if((keyDown("d")) && (chao == 1)){
        if(backGround.velocityX > 0){
          parar();
        }
      direita();
    } else {
      andando = 0;
    }
    parada();

    //Física do pulo e seus efeitos donoros
    chao = 0;
    if(mia.position.y >= 370){
      chao = 1;
      mia.velocityY = 0;
      if (caiu == 0){
        caiu = 1;
        queda.play();
      }
    }
    if(((keyDown("w")) || (keyDown("enter")) || (mouseWentDown())) && (chao == 1)){
      mia.velocityY = -15;
      mia.position.y = 369;
      chao = 0;
      caiu = 0;
      queda.play();
      run.stop();
      walk.stop();
      barulho = 0;
    }
    if(chao == 0){
      mia.velocityY = mia.velocityY + 1;
    }

    //Loop do Background
   if (backGround.position.x >= 1446 ){
     backGround.position.x -= 1445.45454584;
   }
   if (backGround.position.x <= -485){
     backGround.position.x += 1445.45454584;
    }

    //Sprites da Mia e efeitos sonoros
    if (((backGround.velocityX >= 0.1) && (backGround.velocityX < 15)) && ((andando == 1) || (chao == 0))){
      mia.addImage("mia", mia_5)
      if((barulho != 1) && (chao == 1)){
        barulho = 1;
        run.stop();
        walk.loop();
      }
    } else if (((backGround.velocityX <= -0.1) && (backGround.velocityX > -15)) && ((andando == 1) || (chao == 0))){
      mia.addImage("mia", mia_2)
      if((barulho != 1) && (chao == 1)){
        barulho = 1;
        run.stop();
        walk.loop();
      }
    } else if (backGround.velocityX >= 15){
      mia.addImage("mia", mia_6)
      if((barulho != 2) && (chao == 1)){
        barulho = 2;
        walk.stop();
        run.loop();
      }
    } else if (backGround.velocityX <= -15){
      mia.addImage("mia", mia_3)
      if((barulho != 2) && (chao == 1)){
        barulho = 2;
        walk.stop();
        run.loop();
      }
    } else {
      if(direcao == 0){
        mia.addImage("mia", mia_4)
        walk.stop();
        run.stop();
        barulho = 0;
      }
      if(direcao == 1){
        mia.addImage("mia", mia_1)
        walk.stop();
        run.stop();
        barulho = 0;
      }
    }



    if ((backGround.velocityX > -0.1) && (backGround.velocityX < 0.1)){

    }
    //AMONGUS
    //AMONGUS FUGINDO DE VOCÊ KKKKK
    if (amongus.position.x >= 80){
      amongus.velocityX = amongus.velocityX - 1;
      amongus.velocityX = amongus.velocityX / velocidade;
    }

    //Caso vocẽ o alcance
    if(mia.collide(amongus)){
      gamestage = 5
      amongusSet();
    }
  }  

  //Stágio quieto
  if(gamestage == 3){

  }
  //Stágio da corrida
  if(gamestage == 4){

  }

  //Finalização: (Prólogo e créditos, gameover ou Easter egg do AMONGUS)
  if(gamestage == 5){

  }
}

function direita(){
  backGround.velocityX = backGround.velocityX - 2;
  portao1.velocityX = portao1.velocityX - 2;
  amongus.velocityX = amongus.velocityX - 2;
  volte.velocityX = volte.velocityX - 2;

  direcao = 1;
  andando = 1;
}

function esquerda(){
  backGround.velocityX = backGround.velocityX + 2;
  portao1.velocityX = portao1.velocityX + 2;
  amongus.velocityX = amongus.velocityX + 2;
  volte.velocityX = volte.velocityX + 2;

  direcao = 0
  andando = 1;
}

function parada(){
  if(chao == 1){
    backGround.velocityX = backGround.velocityX / velocidade;
    portao1.velocityX = portao1.velocityX / velocidade;
    amongus.velocityX = amongus.velocityX / velocidade;
    volte.velocityX = volte.velocityX / velocidade;
  }
}

function parar(){
  backGround.velocityX = 0;
  portao1.velocityX = 0;
  amongus.velocityX = 0;
  volte.velocityX = 0;

  andando = 0;
}

function amongusSet(){
  amongusMus.stop();
  amongusMus.play();
  run.stop();
  walk.stop();
  queda.stop();
  quietezMus.stop();
  gameplayMus.stop();
  creditos.addImage("creditos", amongus_1);
  creditos.visible = true;

  //Cutscene de parabenização por ter achado o Easter Egg do AMONGUS Kkkkk
  setTimeout(function() {
    creditos.addImage("creditos", amongus_2);
    }, 3840);
  setTimeout(function() {
    creditos.addImage("creditos", amongus_1);
    }, 7680);
  setTimeout(function() {
    creditos.addImage("creditos", amongus_3);
    }, 11520);
  setTimeout(function() {
    creditos.addImage("creditos", amongus_4);
    }, 15360);
}

function spawn(){
  backGround = createSprite(480,270);
  backGround.addImage("background", backGroundImg);
  backGround.scale = 1.363636364;

  portao1  = createSprite(480,315);
  portao1.addImage("portão", portaoImg);
  portao1.scale = 2.5;

  amongus = createSprite(-4800, 400);
  amongus.addImage("AMONGUS", amongusImg);
  amongus.scale = 0.1

  volte = createSprite(-2880, 150);
  volte.addImage("volte", volteImg);
}