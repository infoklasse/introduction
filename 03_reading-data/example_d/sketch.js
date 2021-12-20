
function preload() {

data = loadTable('erathquake.csv', 'csv', 'header');

}







function setup() {
  createCanvas(1000, 9000);
  background("black")

  console.log("Rowcount= " + data.getRowCount());
  console.log("All columns= " + data.columns);




  for (var i = 0; i < data.getRowCount(); i++) {
    fill("white")
    let columnName = data.getString(i, "DateTime");
    text(columnName, 10, i * 20);


    //Hier benutzen wir nun die Library »Moment.js« (https://momentjs.com), welche im index.html file referenziert wird
    //(siehe Zeile 4)

    //moment(XX) nimmt dabei die Variable welche die Zeit inne hält. In unserem fall moment(columnName)
    //.format(XX) nimmt das Format in was wir die Zeit umwandeln wollen. Zum Beispiel .format('LT')
    //Die verschiedenen Kodierungen findet ihr hier: https://momentjs.com/docs/#/parsing/string-format/.


    //Anbei ein paar Beispiele die auch im Frontend gespiegelt werden

    let LTFormat =  moment(columnName).format('LT');
    text(LTFormat, 250, i * 20);

    let LLFormat =  moment(columnName).format('LL');
    text(LLFormat, 450, i * 20);

    let GGFormat =  moment(columnName).format('gggg');
    text(GGFormat, 600, i * 20);


  }



}

function draw() {

}