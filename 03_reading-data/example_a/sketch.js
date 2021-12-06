function preload() {

  data = loadTable('03_meteroits.csv', 'ssv', 'header');

}




function setup() {
  createCanvas(1000, 9000);
  background("black")
  console.log("Rowcount= " + data.getRowCount());
  console.log(data.columns);


  let mass = data.getColumn("mass");
  let minMass = min(mass)
  let maxMass = max(mass)
  console.log(mass)
  console.log(minMass)
  console.log(maxMass)

  let columnMass

  for (var i = 0; i < data.getRowCount(); i++) {
    noStroke();
    fill("white");
    let columnName = data.getString(i, "name");
    text(columnName, 10, i * 20);


    columnMass = data.getNum(i, "mass");
    let mappedColumnMass = map(columnMass, 0, 23000000, 0, 10)

    circle(400, i * 20, log(mappedColumnMass))
    console.log(columnMass)

  }



}

function draw() {

}