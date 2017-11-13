//characters
var mario;
var donkey;

//objects
var platforms;
var ground;
var cursors;
var ledges;
var barrels;
var velocityOfBarrels = 300;
var i = 0;
var stars;
var score = 0;
var starText;

function Collides() {
    //  Creamos las coalisiones entre los diferentes objetos
    game.physics.arcade.collide(mario, platforms);
    game.physics.arcade.collide(donkey, platforms);
    game.physics.arcade.collide(mario, ledges);
    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.collide(stars, ledges);
    game.physics.arcade.collide(barrels, platforms);
    game.physics.arcade.collide(barrels, ledges);
    game.physics.arcade.collide(mario, barrels);
    game.physics.arcade.collide(barrels, barrels);
}