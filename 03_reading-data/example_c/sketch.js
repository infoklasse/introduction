function preload() {

  data = loadTable('02_UFO_sightings_selection.csv', 'ssv', 'header');

}




function setup() {
  createCanvas(5000, 5000);
  background("black")
  console.log("Rowcount= " + data.getRowCount());
  console.log(data.columns);


  let dur = data.getColumn("duration (seconds)");
  let minDur = min(dur)
  let maxDur = max(dur)
  console.log(dur)
  console.log(minDur)
  console.log(maxDur)


  for (var i = 0; i < data.getRowCount(); i++) {
    noStroke();
    fill("white");
    let columnName = data.getString(i, "city");
    text(columnName, 60, 50 + i * 20);

    let columnShape = data.getString(i, "shape");
    // text(columnShape, 10, 50+i*20);

    fill(127, 201, 127)
    if (columnShape == "circle") { circle(40, 45 + i * 20, 10) }
    fill(255, 255, 153)
    if (columnShape == "disk") { ellipse(40, 45 + i * 20, 20, 5) }
    fill(240, 2, 127)
    if (columnShape == "rectangle") { rect(40, 45 + i * 20, 10, 10) }


    stroke(2555,255,0);
    let columnDuration = data.getNum(i, "duration (seconds)");
    console.log(columnDuration)
    line(60, 45+i*20, 60+columnDuration/10, 45+i*20);



  }



}

function draw() {
  strokeWeight(15);

  //LEARNINGS
  //zeige draw spezifikationen 
  // console log zeigen
  // random werte zeigen

}