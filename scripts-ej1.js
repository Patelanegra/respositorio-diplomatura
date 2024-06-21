document.addEventListener('DOMContentLoaded', function () {
    const medio_de_transporte = ["Pie", "Bicicleta", "Colectivo", "Auto", "Avión"];
    
    document.getElementById('submitBtn').addEventListener('click', function () {
        const metros = document.getElementById('metros').value;
        const resultado = document.getElementById('resultado');
        
        if (metros >= 0 && metros < 1000) {
            resultado.textContent = medio_de_transporte[0];
        } else if (metros >= 1000 && metros < 10000) {
            resultado.textContent = medio_de_transporte[1];
        } else if (metros >= 10000 && metros < 30000) {
            resultado.textContent = medio_de_transporte[2];
        } else if (metros >= 30000 && metros < 100000) {
            resultado.textContent = medio_de_transporte[3];
        } else if (metros >= 100000) {
            resultado.textContent = medio_de_transporte[4];
        } else {
            resultado.textContent = '';
        }
    });
});