mapboxgl.accessToken = "pk.eyJ1IjoiaW5nanVhbm1hc3VhcmV6IiwiYSI6ImNsZDZjMXJpYTFhdzgzdnBhZXdkczQxcnQifQ.25y1PWrOTW12YssZ73JQtA"

const mapa = new mapboxgl.Map({
    container: "contenedor-del-mapa",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-74.12, 4.65],
    zoom: 11
})

mapa.on("load", () => {

    mapa.addSource("departamentos", {
        "type": "geojson",
        "data": "http://mapas.parquesnacionales.gov.co/services/pnn/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pnn:departamentos&maxFeatures=50&outputFormat=application%2Fjson"
    })

    mapa.addSource("pokemon", {
        "type": "geojson",
        "data": "./data/puntosConImagenes.geojson"
    })

    mapa.addLayer({
        "id": "departamentos-layer",
        "type": "fill",
        "source": "departamentos",
        "paint": {
            "fill-color": "green",
            "fill-opacity": 0.2
        }
    })

    mapa.addLayer({
        "id": "pokemon-layer",
        "type": "circle",
        "source": "pokemon"
    })

})

mapa.on("click", "pokemon-layer", function(layer) {
    var pokemon = layer.features[0]
    new mapboxgl.Popup()
    .setLngLat(pokemon.geometry.coordinates)
    .setHTML("<img src = " + pokemon.properties.imagen + " />")
    .addTo(mapa)
})