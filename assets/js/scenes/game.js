var game = new Phaser.Game(800, 800, Phaser.AUTO, "");

game.state.add('start', start);
game.state.add('main', main);
game.state.add('finish', finish);
game.state.add('restart', restart);

game.state.start("start");