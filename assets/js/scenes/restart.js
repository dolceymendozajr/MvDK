var restart = {
    preload: function() {
        game.load.image('sky', 'assets/img/bg.jpeg');
    },

    create: function() {
        game.add.sprite(0, 0, "sky");
        controllers = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        var mainText= game.add.text(game.width/2 - 115,game.height/2 +50,
            'Press [SPACEBAR] to restart',
            {font: "25px Arial",fill: "#ffffff"}
        );
    },

    update: function() {
        if(controllers.isDown){
            game.state.start('main');     
        }
    }
}