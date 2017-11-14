function CreateBarrel() {
    //
    var barrel = barrels.create(game.width / 2 - 30 , 32, "barrel");
  
    //  Activamos las fisicas
    game.physics.arcade.enable(barrel);
    
    barrel.animations.add("left", [0, 1, 2, 3], 10, true);
    barrel.animations.add("right", [4, 5, 6, 7], 10, true);
        
    //  Le damos propiedades de rebote, gravedad y coalisiones
    barrel.body.bounce.x = 1;
    barrel.body.bounce.y = 0.2;
    barrel.body.gravity.y = 800;
    barrel.body.collideWorldBounds = true;
    
    if(i == 0){
        barrel.body.velocity.x = velocityOfBarrels;
        barrel.animations.play("right");
    }else{
        barrel.body.velocity.x = -1*velocityOfBarrels;
        barrel.animations.play("left");
    }
}

function newBarrel(){
    if(i == 1){
        i = i-1;
    }else{
        i = i+1;
    }
    CreateBarrel(i);
    game.time.events.add(Phaser.Timer.SECOND * 2, newBarrel, this); //hilo 
}

function collideBarrels(){
    mario.kill();
    game.state.start("restart");
}

function deleteBarrel(ground, barrel){ 
    barrel.body.collideWorldBounds = false;
    barrel.body.outOfBoundsKill = true;
}