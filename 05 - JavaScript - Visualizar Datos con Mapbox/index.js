mapboxgl.accessToken = "pk.eyJ1IjoiaW5nanVhbm1hc3VhcmV6IiwiYSI6ImNsZDZjMXJpYTFhdzgzdnBhZXdkczQxcnQifQ.25y1PWrOTW12YssZ73JQtA"

const mapa = new mapboxgl.Map({
    container: "contenedor-del-mapa",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-74.12, 4.65],
    zoom: 11
})

mapa.on("load", () => {

    mapa.addSource("puntosDeInteres", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [
                {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                    -74.10966159424332,
                    4.691148644459972
                    ],
                    "type": "Point"
                }
                },
                {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                    -74.10966159424332,
                    4.59602699923056
                    ],
                    "type": "Point"
                }
                },
                {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                    -74.03024860019572,
                    4.739745959795826
                    ],
                    "type": "Point"
                }
                }
            ]
        }
    })

    mapa.addSource("lineasDeInteres", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "coordinates": [
                    [
                      -74.12200815998341,
                      4.583619467614412
                    ],
                    [
                      -74.1425458743883,
                      4.625927073431285
                    ],
                    [
                      -74.12474652190362,
                      4.685289930645268
                    ],
                    [
                      -74.07682518829262,
                      4.7180396983690684
                    ]
                  ],
                  "type": "LineString"
                }
              }
            ]
        }
    })

    mapa.addSource("localidades", {
        "type": "geojson",
        "data": "./data/localidades.geojson"
    })

    mapa.addSource("aeropuertos", {
        "type": "geojson",
        "data": "https://raw.githubusercontent.com/IngJuanMaSuarez/Spider-World/main/data/airports_world.json"
    })

    mapa.addLayer({
        "id": "puntosDeInteres-layer",
        "type": "circle",
        "source": "puntosDeInteres",
        "paint": {
            "circle-radius": 10,
            "circle-color": "red"
        }
    })

    mapa.addLayer({
        "id": "lineasDeInteres-layer",
        "type": "line",
        "source": "lineasDeInteres"
    })

    mapa.addLayer({
        "id": "localidades-layer",
        "type": "fill",
        "source": "localidades",
        "paint": {
            "fill-color": "green",
            "fill-opacity": 0.2
        }
    })

    mapa.addLayer({
        "id": "aeropuertos-layer",
        "type": "circle",
        "source": "aeropuertos"
    })
})

mapa.on("click", "aeropuertos-layer", function(layer) {
    var aeropuerto = layer.features[0]
    new mapboxgl.Popup()
    .setLngLat(aeropuerto.geometry.coordinates)
    .setHTML("<h3>" + aeropuerto.properties.name + "</h3>")
    .addTo(mapa)
})