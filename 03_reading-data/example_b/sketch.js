function preload() {

data = loadTable('erathquake.csv', 'csv', 'header');

}







function setup() {
  createCanvas(1000, 9000);
  background("black")

  console.log("Rowcount= " + data.getRowCount());
  console.log("All columns= " + data.columns);


  let depth = data.getColumn("Depth");
  let minDepth = min(depth)
  let maxDepth = max(depth)

  let mag = data.getColumn("Magnitude");
  let minMag = min(mag)
  let maxMag = max(mag)

  console.log(depth)
  console.log(minDepth)
  console.log(maxDepth)

  console.log(mag)
  console.log(minMag)
  console.log(maxMag)




  let circleDepth
  let colorMag

  for (var i = 0; i < data.getRowCount(); i++) {
    fill("white")
    let columnName = data.getString(i, "DateTime");
    text(columnName, 10, i * 20);

    colorMag = data.getNum(i, "Magnitude");

    let mappedColorMag = map(colorMag, 0, 9.1, 0, 255);



    fill(mappedColorMag, 50, 50);



    circleDepth = data.getNum(i, "Depth");
    circle(400, i * 20, circleDepth / 10)

  }



}

function draw() {

}