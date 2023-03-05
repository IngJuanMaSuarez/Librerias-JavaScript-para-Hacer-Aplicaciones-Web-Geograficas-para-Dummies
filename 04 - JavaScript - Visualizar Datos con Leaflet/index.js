var mapa = L.map("contenedor-del-mapa").setView([4.65, -74.12], 11)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mapa)

var puntosDeInteresGeoJSON = {
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

var lineaDeInteresGeoJSON = {
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

L.geoJSON(puntosDeInteresGeoJSON, {}).addTo(mapa)

L.geoJSON(lineaDeInteresGeoJSON, {
    style: {
        color: "red"
    }
}).addTo(mapa)

var departamentoKML = omnivore.kml("./data/departamentos.kml").addTo(mapa)