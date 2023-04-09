var mapa = L.map("contenedor-del-mapa").setView([4.65, -74.12], 11)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mapa)

L.geoJson.ajax("http://mapas.parquesnacionales.gov.co/services/pnn/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=pnn:departamentos&maxFeatures=50&outputFormat=application%2Fjson").addTo(mapa);