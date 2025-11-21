let table;


let movieMenu
let superJoyFont


let movieSong
let canvas

let audioButton

let videoButton

let modemVolSlider
let modemRateSlider

let modemAmplitude
let mappedAmplitude

let posterArray = []
let mp3Array= []
let imageArray= []
let rec1songArray= []
let rec2songArray= []
let rec3songArray= []


let selectedSong

let randColor

function preload(){
	table = loadTable('js/DataFinalProject.csv', 'csv', 'header', loadContentArrays);
    superJoyFont = loadFont('SuperJoyful.ttf')
    
}

function loadContentArrays(){
   for(let i = 0; i < table.getRowCount(); i++){
    posterArray[i] = loadImage('images/' + table.getString(i, 'Poster'))
    mp3Array[i] = loadSound('Media/' + table.getString(i, 'Mp3'))
    imageArray[i] = loadImage('images/' + table.getString(i, 'Image'))
    rec1songArray[i] = loadSound('Media/' + table.getString(i, 'Rec1mp3'))
     rec2songArray[i] = loadSound('Media/' + table.getString(i, 'Rec2mp3'))
     rec3songArray[i] = loadSound('Media/' + table.getString(i, 'Rec3mp3'))
  }

  print(posterArray)
  print(mp3Array)
  print(imageArray)
  print(rec1songArray)
  print(rec2songArray)
  print(rec3songArray)


}





function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0)
  canvas.style('z-index', '-1')



randColor = color(random(225), random(225), random(225))


audioButton = createButton('Play Song')
  audioButton.mousePressed(playAudio)
  audioButton.position(525,615)

  modemAmplitude = new p5.Amplitude()
 
 //movieMenu = createSelect()
//movieMenu.option('select Movie')

//for (var i = 0; i < table.getRowCount(); i++){
    //let movies = table.getString(i, 'movies');
//}

//submitButton = createButton('Submit')
//submitButton.position(190,50)


movieMenu = createSelect()
movieMenu.position(50, 50)
movieMenu.option('select movie')

  //cycle through the table rows
  for (var i = 0; i < table.getRowCount(); i++){

    
    let movies = table.getString(i,'Movies')

    //to show the options
    
   movieMenu.option(movies)
  
  }

   print(posterArray)
  print(mp3Array)
  print(imageArray)
  print(rec1songArray)
  print(rec2songArray)
  print(rec3songArray)

  //submitButton.mousePressed(changeData)

}


function playAudio(){

  if(!movieSong.isPlaying()){
    movieSong.loop()
    audioButton.html('Pause Song')
    
  } else{
    movieSong.pause()
    audioButton.html('Play Song')
  }
} 


function startScreen(){
   background(0)
  imageMode(CENTER)
   textFont(superJoyFont)
  fill(randColor)
  textSize(50)
  textAlign(CENTER)
  text("Music", windowWidth/2, windowHeight/2)

}

function draw(){
  background(0)
  imageMode(CENTER)
   textFont(superJoyFont)
  fill(randColor)
  textSize(50)
  textAlign(LEFT)
  text("Music", windowWidth/2, windowHeight/2)
  //modemSound.setVolume(modemVolSlider.value())
  //modemSound.rate(modemRateSlider.value())

  //mappedAmplitude = modemAmplitude.getLevel() *1000

  // fill(map(mappedAmplitude, 0, 300, 0, 255))
  // ellipse(windowWidth/2, windowHeight/2, mappedAmplitude, mappedAmplitude)

  //modemSound.rate(map(mouseX, 0, windowWidth, 0, 2))
  
  for (let i = 0; i < table.getRowCount(); i ++){
    if(movieMenu.value() == table.getString(i, 'Movies')){

      image(posterArray[i], 200, 350, 300, 500)
      image(imageArray[i],550, 350, 300,500)
      //200, 300, 300, 500
      //windowWidth/2, windowHeight/2, 300, 500

      text(table.getString(i, 'Song'), 800, 90)
      // text(table.getString(i, 'Poster'), windowWidth/2, 130)
      // text(table.getString(i, 'Image'), windowWidth/2, 170)
      text(table.getString(i, 'Mp3'), 800, 210)
      text(table.getString(i, 'Artist'), windowWidth/2, 250)
      text(table.getString(i, 'Genre'), windowWidth/2, 290)
      text(table.getString(i, 'Song Rec 1'), windowWidth/2, 330)
       text(table.getString(i, 'Rec1mp3'), windowWidth/2, 370)
      text(table.getString(i, 'Song Rec 2'), windowWidth/2, 410, 500)
      text(table.getString(i, 'Rec2mp3'), windowWidth/2, 450)
      text(table.getString(i, 'Song Rec 3'), windowWidth/2, 490)
      text(table.getString(i, 'Rec3mp3'), windowWidth/2, 530)
     
      
      movieSong = mp3Array[i]
      //selectedSong = songArray[i]
    }
  }


}

