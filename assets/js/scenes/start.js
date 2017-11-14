var start = {
    preload: function() {
        game.load.image('sky', 'assets/img/bg.jpeg');
    },

    create: function() {
        game.add.sprite(0, 0, "sky");
        key = game.input.keyboard.addKey(Phaser.Keyboard.UP);

        var mainText= game.add.text(game.width/2 - 115,game.height/2 +50,'Presiona ↑ para iniciar el juego',
        {font: "25px Arial",fill: "#ffffff"});
        game.add.tween(mainText).to( { alpha: 0 }, 1000, "Linear", true,0,-1,true);
    },

    update: function() {
        if(key.isDown){
            game.state.start('main');     
        }
    }
}