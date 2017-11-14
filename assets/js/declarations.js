//characters
var mario;
var donkey;

//objects
var platforms;
var mainplatform
var ground;
var ledges;

//objects
var cursors;
var barrels;
var i = 0;
var stars;
var starText;

//others
var velocityOfBarrels = 300;
var score = 0;

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