mapboxgl.accessToken = "pk.eyJ1IjoiaW5nanVhbm1hc3VhcmV6IiwiYSI6ImNsZDZjMXJpYTFhdzgzdnBhZXdkczQxcnQifQ.25y1PWrOTW12YssZ73JQtA"

const mapa = new mapboxgl.Map({
    container: "contenedor-del-mapa",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-74.12, 4.65],
    zoom: 11
})

const marcador = new mapboxgl.Marker({
    color: "green",
    rotation: 45
}).setLngLat([-74.0654527, 4.6281045]).addTo(mapa)

const popup = new mapboxgl.Popup({
    offset: 25
}).setHTML("<h3>Hola GeoCositas</h3>")
//.setText("Hola GeoCositas")

const marcador2 = new mapboxgl.Marker({
}).setLngLat([-74.063889, 4.613573]).setPopup(popup).addTo(mapa)

function clicSobreMapa(evento){
    console.log(evento)
    alert("Diste clic en el punto con coordenadas latitud: " + evento.lngLat.lat + " y longitud: " + evento.lngLat.lng)
}

mapa.on("click", clicSobreMapa)