function CreatePeach() {
    
        // Configuramos a peach
        peach = game.add.sprite( 485 , 0 , "peach");
        // peach.scale.setTo(0.5,0.5);
    
        //  Activamos las fisicas a peach
        game.physics.arcade.enable(peach);
    
    
        //  Creamos la animacion gritando
        peach.animations.add("screaming", [0, 1, 2, 3], 10, true);
        peach.animations.play("screaming");
    }