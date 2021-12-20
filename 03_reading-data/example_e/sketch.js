var table;
//Zur Kartierung nutzen wir die Library Leaflet. Sie ist gut dokumentiert und hat sogar Tutorial für Starters
//https://leafletjs.com


// Leaflet Map Variable
var mymap;

function preload() {
    table = loadTable("data/02_UFO_sightings_selection.csv", "ssv", "header");
}

function setup() {
    // Einstellung der Map
    mymap = L.map('quake-map').setView([51.505, -0.09], 3);

    
    // Gestaltung der Karte (hier gibt es verschiedene Optionen. Auswahl hier ist eine Karte von Stamen Design)
    //Desweiteren können noch weitere grundlegende Einstellungen gemacht werden, zb maximale und minimale Zoom Stufen und vieles mehr.
    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
    }).addTo(mymap);



    // Das kennen wir bereits
    for (var i=0; i<table.getRowCount(); i++){
        var row = table.getRow(i)

        // Überspringt die Row, wenn keine Daten vorhanden sind
        if (row.get('duration (seconds)')==''){
            continue
        }

       // Hier zapfen wir die Comments aus dem CSV an. Diese benutzen wir später für ein Popup.
        var comment = table.getString(i,'comments')
        console.log(comment)

        // Das »L.« bevor dem circle zeigt, dass hier mit der Leaflet Library gearbeitet wird.
        //Dem Circle werden die Koordinaten gegeben. Der Radius des Circles ist die Duration.
        var circle = L.circle([row.getNum('Latitude'), row.getNum('Longitude')], {
            color: 'red',      // the dot stroke color
            fillColor: 'yellow', // the dot fill color
            fillOpacity: 0.25,  // use some transparency so we can see overlaps
            radius: row.getNum('duration (seconds)')/50
        })


        // Dem Circle wird ein Popup angebunden mit Comments als Inhalt. Der Circle wird dann zu der Variable mymap hinzugefügt. (.addTo) 
        circle.bindPopup(comment).addTo(mymap);
    }

}