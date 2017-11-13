function CreateStars() {
    
        //  Creamos el grupo de las estrellas y le damos la propiedad de cuerpo
        stars = game.add.group();
        stars.enableBody = true;
    
        //  Crearemos las 10 estrellas para poder ganar el juego
        for (var i = 0; i < 3; i++) {
            var x=i*300+80;
            for (var j = 0; j < 3; j++) {
                var y=j*150+150;
    
                //  Create a star inside of the 'stars' group
                var star = stars.create(x, y, "star");
    
                //  Let gravity do its thing
                star.body.gravity.y = 300;
    
                //  This just gives each star a slightly random bounce value
                star.body.bounce.y = 0.7 + Math.random() * 0.2;
                
                //Creamos las animaciones de las estrellas
                star.animations.add("rotate", [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
            }
        }
    
        var bigStar = stars.create(480,0, "star");
        bigStar.scale.setTo(1.3,1.3);
        bigStar.body.gravity.y = 300;
        bigStar.body.bounce.y = 0.7;
        bigStar.animations.add("rotate", [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    
        // Activamos la animación a las estrellas
        stars.callAll("play", null, "rotate");
    }

    function collectStar(mario, star) {
        // Elimina la estrella de la pantalla
        star.kill();
    
        //  Actualiza el puntaje y agrega la estrella
        score++;
        starText.text = "Stars collected: " + score;
    }
    