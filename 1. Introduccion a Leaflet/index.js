var mapa = L.map("contenedor-del-mapa").setView([4.65, -74.12], 11)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mapa)

var marcador = L.marker([4.6281045, -74.0654527]).addTo(mapa)
marcador.bindPopup("Hola GeoCositas")

const circulo = L.circle([4.613573, -74.063889], {
    radius: 1000,
    color: "green"
}).addTo(mapa)
circulo.bindPopup("Programación en SIG")

function clicSobreMapa(evento){
    alert("Diste clic en el punto con coordenadas latitud: " + evento.latlng.lat + " y longitud: " + evento.latlng.lng)
}

mapa.on("click", clicSobreMapa);

console.log(mapa)
console.log(marcador)
console.log(circulo)