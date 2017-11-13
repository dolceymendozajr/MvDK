function CreateMario() {
    // Configuramos a mario
    mario = game.add.sprite(32, game.world.height - 150, "mario");

    //  Activamos las fisicas a mario
    game.physics.arcade.enable(mario);

    //  Le damos propiedades de rebote, gravedad y coalisiones
    mario.body.bounce.y = 0.1;
    mario.body.gravity.y = 600;
    mario.body.collideWorldBounds = true;

    //  Creamos las dos animaciones, correr a la izquierda y derecha
    mario.animations.add("left", [0, 1, 2, 3], 10, true);
    mario.animations.add("right", [5, 6, 7, 8], 10, true);
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