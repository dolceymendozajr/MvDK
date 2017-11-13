var main = {
    preload: function() {
        game.load.image("sky", "assets/img/bg.jpeg");
        game.load.image("ground", "assets/sprites/ground.png");
        game.load.image("ledges", "assets/sprites/ledges.png");
        game.load.spritesheet("star", "assets/sprites/stars.png", 26, 26);
        game.load.spritesheet("barrel", "assets/sprites/barrels.png", 28, 30);
        game.load.spritesheet("mario", "assets/sprites/mario.png", 23, 35);
    },

    create: function() {
        //Iniciar sistemas de fisicas, modo arcade
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //Agregar background
        game.add.sprite(0, 0, "sky");
    
        Platforms();
    
        Ledges();
    
        CreateMario();
    
        CreateStars();
    
        barrels = game.add.group();
        barrels.enableBody = true;
    
        test();
    
        //  Creamos el puntaje
        starText = game.add.text(16, 20, "Stars collected: 0", {
            fontSize: "32px",
            fill: "#d83bdb"
        });
    
        //  Creamos los controladores
        cursors = game.input.keyboard.createCursorKeys();
    
    },

    update: function() {
        game.physics.arcade.overlap(barrels, mario, collideBarrels, null, this);
        
        Collides();
        
        // Permitimos que mario pueda sobreponerse a las estrellas para recolectarlas
        game.physics.arcade.overlap(mario, stars, collectStar, null, this);  
        MoveMario();
    }
}