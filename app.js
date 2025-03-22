// Función para convertir de Euros a Dólares
function fromEuroToDollar(euros) {
    return euros * 1.07;
}

// Función para convertir de Dólares a Yenes
function fromDollarToYen(dollars) {
    return dollars * 149.03;
}

// Función para convertir de Yenes a Libras
function fromYenToPound(yens) {
    return yens * 0.0072;
}

// Exportar las funciones para poder usarlas en test.js
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
