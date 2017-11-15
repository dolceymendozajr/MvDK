var finish= {
    preload: function() {
        game.load.image('sky', 'assets/img/bg.jpeg');
    },

    create: function() {
        game.add.sprite(0, 0, "sky");
        key = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        var mainText= game.add.text(game.width/2 - 115,game.height/2 +10,
            '¡GANASTE!',
            {font: "25px Arial",fill: "#ffffff"}
        );
        var mainText= game.add.text(game.width/2 - 115,game.height/2 +50,
            'Presiona ↑ para reiniciar el juego',
            {font: "25px Arial",fill: "#ffffff"}
        );

    },

    update: function() {
        if(key.isDown){
            game.state.start('main');     
        }
    }
}
