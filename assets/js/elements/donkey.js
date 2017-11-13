function CreateDonkey() {

    // Configuramos a donkey
    donkey = game.add.sprite( game.width / 2 - 30 , 32 , "donkeyStart");

    //  Activamos las fisicas a donkey
    game.physics.arcade.enable(donkey);

    //  Le damos propiedades de rebote, gravedad y coalisiones
    donkey.body.bounce.y = 0.0;
    donkey.body.gravity.y = 600;
    donkey.body.collideWorldBounds = true;

    //  Creamos la animacion, enojado
    donkey.animations.add("angry", [0, 1, 2], 10, true);
    donkey.animations.play("angry");
}