
const contenedor = document.querySelector(".autos");

let imagenes = [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600",
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600"
];

fetch("https://api.carsdataset.com/api/v1/preview/search?page=1&page_size=30")

    .then(respuesta => respuesta.json())
        .then(datos => {

    for (let i = 0; i < datos.results.length; i++) {

        let auto = datos.results[i];

        contenedor.innerHTML += `
            <div class="tarjeta">

                <img src="${imagenes[i % 5]}">

                <div class="informacion">

                    <h2>${auto.brand} ${auto.model}</h2>

                    <p>Año: ${auto.year}</p>
                    <p>Motor: ${auto.cylinders} cilindros</p>
                    <p>Caballos: ${auto.power_hp} HP</p>
                    <p>Velocidad máxima: No disponible</p>
                    <p>Aceleración: No disponible</p>

                </div>

            </div>
        `;
    }

});
