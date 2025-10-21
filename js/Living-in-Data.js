let table;

let submitButton
let companyMenu

let canvas 



function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/PersonalData.csv', 'csv', 'header');

}



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style('z-index', '-1')


  background(0);
  fill(255)


submitButton = createButton('Submit')
//To change button position
submitButton.position(50,100)


companyMenu = createSelect()
companyMenu.position(50, 50)
companyMenu.option('select company')

  //cycle through the table rows
  for (var i = 0; i < table.getRowCount(); i++){

    //grab each of the dates
    let date = table.getString(i, 'Date');
    
    let company = table.getString(i,'Company')

    //to show the options
    
    companyMenu.option(company)
  
  }

  submitButton.mousePressed(changeData)

}


function changeData(){
  background(0)
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER)

  

  for (let i = 0; i < table.getRowCount(); i ++){
    if(companyMenu.value() == table.getString(i, 'Company')){
      text(table.getString(i, 'Company'), windowWidth/2, 50)
      text(table.getString(i, 'Date'), windowWidth/2, 90)
      text(table.getString(i, 'Location'), windowWidth/2, 130)
      text(table.getString(i, 'Service'), windowWidth/2, 170)
      text(table.getString(i, 'Frequency'), windowWidth/2, 2100)
      
      }
    }
  }

