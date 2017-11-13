function Ledges() {
    //  Creamos las 15 plataformas
    ledges = game.add.group();
    ledges.enableBody = true;
    for (var i = 0; i < 5; i++) {
        var a = i * 110;
        var ledge;
        for (var j = 0; j < 3; j++) {
            switch (j) {
                case 0:
                    ledge = ledges.create(0, 200+a, "ledges");
                    break;

                case 1:
                    ledge = ledges.create(300, 220 + a+20, "ledges");
                    break;

                case 2:
                    ledge = ledges.create(600, 200 + a, "ledges");
                    break;
            }
            ledge.body.immovable = true;
            ledge.scale.setTo(0.5, 0.5);
        }
    }
}