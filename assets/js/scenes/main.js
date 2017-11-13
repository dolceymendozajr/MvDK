var main = {
    preload: function() {
        game.load.image("sky", "assets/img/bg.jpeg");
        game.load.image("ground", "assets/sprites/ground.png");
        game.load.image("ledges", "assets/sprites/ledges.png");
        game.load.spritesheet("donkeyStart", "assets/sprites/donkeyStart.png",61.33,55);
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

        CreateDonkey();
    
        CreateStars();
    
        barrels = game.add.group();
        barrels.enableBody = true;
        
        //aqui genera por primera vez un barril y luego se ira repitiendo ese proceso
        newBarrel();
    
        //  Creamos el puntaje
        starText = game.add.text(16, 20, "Stars collected: 0", {
            fontSize: "32px",
            fill: "#d83bdb"
        });
    
        //  Creamos los controladores
        cursors = game.input.keyboard.createCursorKeys();
    },

    update: function() {
        //aqui esta pendiente caundo un barril choca con mario
        game.physics.arcade.overlap(barrels,mario, collideBarrels, null, this);
        //aqui esta pendiente cuando un barril impacta la ultima plataforma

        game.physics.arcade.overlap(barrels , ground, deleteBarrel, null, this);

        //aqui llama a todas las colisiones
        Collides();   

        // Permitimos que mario pueda sobreponerse a las estrellas para recolectarlas
        game.physics.arcade.overlap(mario, stars, collectStar, null, this);  
        
        //aqui se encuentran todos los movimientos de mario 
        MoveMario();
    }
}