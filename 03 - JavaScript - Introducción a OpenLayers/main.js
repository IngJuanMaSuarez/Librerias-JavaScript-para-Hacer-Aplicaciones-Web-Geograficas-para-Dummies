import './style.css';
import {Feature, Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point.js';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [-74.12, 4.65],
    projection: "EPSG:4326",
    zoom: 11
  })
});

var marcador = new Feature({
  geometry: new Point([-74.0654527, 4.6281045])
})

var fuenteVectorial = new VectorSource({
  features: [marcador]
})

var capaVectorial = new VectorLayer({
  source: fuenteVectorial
})

map.addLayer(capaVectorial)

function clicSobreMapa(evento){
  alert("Haz dado clic en el punto con coordenadas latitud: " + evento.coordinate[1] + " y longitud: " + evento.coordinate[0])
}

map.on("click", clicSobreMapa)