var puntosConImagenesGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            "nombre": "Dragonite",
            "imagen": "https://i.pinimg.com/originals/25/3d/d1/253dd10ff2aabc1dc6e6eeac0c144475.png"
        },
        "geometry": {
          "coordinates": [
            -74.05715462050158,
            4.709949001419545
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
            "nombre": "Tyranitar",
            "imagen": "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/fbe68f08d7cac83.png"
        },
        "geometry": {
          "coordinates": [
            -74.13573723400283,
            4.664381112597994
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
            "nombre": "Charizard",
            "imagen": "https://i.pinimg.com/236x/c6/c9/d1/c6c9d1def0d68eedcfde620273dd2c8b.jpg"
        },
        "geometry": {
          "coordinates": [
            -74.08620637458414,
            4.5893775373275645
          ],
          "type": "Point"
        }
      }
    ]
}

L.geoJSON(puntosConImagenesGeoJSON, {
    onEachFeature: function (feature, layer) {
        console.log(feature)
        console.log(layer)
        var contenidoPopup = "<img src = " + feature.properties.imagen + " />"
        layer.bindPopup(contenidoPopup)
    }
}).addTo(mapa)