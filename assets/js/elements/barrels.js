function CreateBarrel() {
    //
    var barrel = barrels.create(32, 32, "barrel");
  
    //  Activamos las fisicas
    game.physics.arcade.enable(barrel);
  
    //  Le damos propiedades de rebote, gravedad y coalisiones
    barrel.body.bounce.x = 1;
    barrel.body.bounce.y = 0.2;
    barrel.body.gravity.y = 800;
    barrel.body.collideWorldBounds = true;
  
    barrel.animations.add("left", [0, 1, 2, 3], 10, true);
    barrel.animations.add("right", [4, 5, 6, 7], 10, true);
  
    barrel.body.velocity.x = velocityOfBarrels;
  
    barrel.animations.play("right");
}

function test(){
    console.log("aqui va otro barril !!!!");
    CreateBarrel();
    game.time.events.add(Phaser.Timer.SECOND * 2, test, this); //hilo 
}

function collideBarrels(){
    mario.kill();
    starText.text = "Pelaste el bollo !!";
    game.state.start("finish");
}