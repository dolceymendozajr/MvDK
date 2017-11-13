var start = {
    preload: function() {
        game.load.image('sky', 'assets/img/bg.jpeg');
    },

    create: function() {
        game.add.sprite(0, 0, "sky");
        controllers = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        var mainText= game.add.text(game.width/2 - 115,game.height/2 +50,'Press [SPACEBAR] to start',{font: "25px Arial",fill: "#ffffff"});
        var authorsT = game.add.text(game.width/2-40,game.height -160,'Authors',{font: "25px Arial",fill: "#ffffff"});
        var brText = game.add.text(game.width/2-70,game.height -140,'Dolcey Mendoza',{font: "25px Arial",fill: "#ffffff"});
        var jrText = game.add.text(game.width/2-70,game.height -120,'Martin Molinares',{font: "25px Arial",fill: "#ffffff"});
        var javText =game.add.text(game.width/2-70,game.height -100,'William Cadenas',{font: "25px Arial",fill: "#ffffff"});
        game.add.tween(mainText).to( { alpha: 0 }, 1000, "Linear", true,0,-1,true);
    },

    update: function() {
        if(controllers.isDown){
            game.state.start('main');     
        }
    }
}