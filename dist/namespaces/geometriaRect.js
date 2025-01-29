"use strict";
// Este namespace é responsável pelos métodos responsáveis por calcular a area de um retângulo.
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaRect.js.map