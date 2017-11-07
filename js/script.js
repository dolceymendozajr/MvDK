

var game = new Phaser.Game(800, 800, Phaser.AUTO, "", {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.image("sky", "assets/bg.jpeg");
    game.load.image("ground", "assets/ground.png");
    game.load.image("ledges", "assets/ledges.png");
    game.load.spritesheet("star", "assets/stars.png", 26, 26);
    game.load.spritesheet("barrel", "assets/barrels.png", 28, 30);
    //game.load.spritesheet('mario', 'assets/mario.png', 40, 50);
    game.load.spritesheet("mario", "assets/mario1.png", 23, 35);
}

var mario;
var platforms;
var cursors;
var ledges;
var barrels;
var velocityOfBarrels = 300;
var barrel;

var stars;
var score = 0;
var starText;

function create() {
    //Iniciar sistemas de fisicas, modo arcade
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //Agregar background
    game.add.sprite(0, 0, "sky");

    Platforms();

    Ledges();

    CreateMario();

    CreateStars();

    CreateBarrel();

    //  Creamos el puntaje
    starText = game.add.text(16, 20, "Stars collected: 0", {
        fontSize: "32px",
        fill: "#d83bdb"
    });

    //  Creamos los controladores
    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    Collides();
    barrel.animations.play("right");
    // Activamos la animación a las estrellas
    stars.callAll("play", null, "rotate");

    // Permitimos que mario pueda sobreponerse a las estrellas para recolectarlas
    game.physics.arcade.overlap(mario, stars, collectStar, null, this);

    MoveMario();
}

function collectStar(mario, star) {
    // Elimina la estrella de la pantalla
    star.kill();

    //  Actualiza el puntaje y agrega la estrella
    score++;
    starText.text = "Stars collected: " + score;
}

function Ledges() {
    //  Creamos las 15 plataformas
    ledges = game.add.group();
    ledges.enableBody = true;
    for (var i = 0; i < 5; i++) {
        var a = i * 105;
        var ledge;
        for (var j = 0; j < 3; j++) {
            switch (j) {
                case 0:
                    ledge = ledges.create(0, 200+a, "ledges");
                    break;

                case 1:
                    ledge = ledges.create(300, 220 + a+20, "ledges");
                    break;

                case 2:
                    ledge = ledges.create(600, 200 + a, "ledges");
                    break;
            }
            ledge.body.immovable = true;
            ledge.scale.setTo(0.5, 0.5);
        }
    }
}

function Platforms() {
    //Crear grupo de plataformas (Superior e inferior) y le asignamos la propiedad de que sea un cuerpo
    platforms = game.add.group();
    platforms.enableBody = true;

    // Creamos el piso y lo escalamos para que tome el ancho completo, además le asignamos la propiedad de que sea inamovible
    var ground = platforms.create(0, game.world.height - 64, "ground");
    ground.body.immovable = true;

    // Creamos la plataforma principal para Donkey Kong
    var mainPlatform = platforms.create(280, 100, "ground");
    mainPlatform.scale.setTo(0.3, 0.5);
    mainPlatform.body.immovable = true;
}

function CreateMario() {
    // Configuramos a mario
    mario = game.add.sprite(32, game.world.height - 150, "mario");

    //  Activamos las fisicas a mario
    game.physics.arcade.enable(mario);

    //  Le damos propiedades de rebote, gravedad y coalisiones
    mario.body.bounce.y = 0.1;
    mario.body.gravity.y = 800;
    mario.body.collideWorldBounds = true;

    //  Creamos las dos animaciones, correr a la izquierda y derecha
    //mario.animations.add('left', [0, 1, 2], 10, true);
    //mario.animations.add('right', [3, 4, 5], 10, true);
    mario.animations.add("left", [0, 1, 2, 3], 10, true);
    mario.animations.add("right", [5, 6, 7, 8], 10, true);
}

function CreateBarrel() {
  //
  barrels = game.add.group();
  barrels.enableBody = true;

  //
  barrel = barrels.create(32, 32, "barrel");

  //  Activamos las fisicas
  game.physics.arcade.enable(barrel);

  //  Le damos propiedades de rebote, gravedad y coalisiones
  barrel.body.bounce.x = 1;
  barrel.body.gravity.y = 800;
  barrel.body.collideWorldBounds = true;

  barrel.animations.add("left", [0, 1, 2, 3], 10, true);
  barrel.animations.add("right", [4, 5, 6, 7], 10, true);

  barrel.body.velocity.x = velocityOfBarrels;
}

function CreateStars() {
    //  Creamos el grupo de las estrellas y le damos la propiedad de cuerpo
    stars = game.add.group();
    stars.enableBody = true;

    //  Crearemos las 10 estrellas para poder ganar el juego
    for (var i = 0; i < 10; i++) {
        //  Create a star inside of the 'stars' group
        var star = stars.create(i * 70, 0, "star");

        //  Let gravity do its thing
        star.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        //Creamos las animaciones de las estrellas
        star.animations.add("rotate", [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    }
}

function Collides() {
    //  Creamos las coalisiones entre los diferentes objetos
    game.physics.arcade.collide(mario, platforms);
    game.physics.arcade.collide(mario, ledges);
    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.collide(stars, ledges);
    game.physics.arcade.collide(barrels, platforms);
    game.physics.arcade.collide(barrels, ledges);
}

function MoveMario() {
    //  Resetear el movimiento de mario a 0
    mario.body.velocity.x = 0;

    if (cursors.left.isDown) {
        //  Moverse a la izquierda
        mario.body.velocity.x = -150;

        mario.animations.play("left");
    } else if (cursors.right.isDown) {
        //  Moverse a la derecha
        mario.body.velocity.x = 150;

        mario.animations.play("right");
    } else {
        //  Quedarse quieto
        mario.animations.stop();

        mario.frame = 4;
    }

    //  Le permite que mario salte si está tocando el suelo
    if (cursors.up.isDown && mario.body.touching.down) {
        mario.body.velocity.y = -350;
    }
}