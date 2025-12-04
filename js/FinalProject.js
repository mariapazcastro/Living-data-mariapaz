let table;


let movieMenu
let superJoyFont


let movieSong
let rec1Song
let rec2Song
let rec3Song
let canvas

let audioButton



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

let startScreenBool
let choosingScreenBool = false

let startButton
let rec1Button
let rec2Button
let rec3Button



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

  startButton = createButton('Start')
  startButton.mousePressed(choosingScreen)
  startButton.position(windowWidth/2, 700)
  //startButton.style('background-color', 'rgb('+random(225), random(225), random(225)+'')


  audioButton = createButton('Play Song')
  audioButton.mousePressed(playAudio)
  audioButton.position(525,615)
  audioButton.hide()

  rec1Button = createButton('Rec1 Song')
  rec1Button.mousePressed(playrec1Audio)
  rec1Button.position(1350,360)
  rec1Button.hide()

  rec2Button = createButton('Rec2 Song')
  rec2Button.mousePressed(playrec2Audio)
  rec2Button.position(1350,420)
  rec2Button.hide()

  rec3Button = createButton('Rec3 Song')
  rec3Button.mousePressed(playrec3Audio)
  rec3Button.position(1350,500)
  rec3Button.hide()

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
  movieMenu.hide()

   print(posterArray)
  print(mp3Array)
  print(imageArray)
  print(rec1songArray)
  print(rec2songArray)
  print(rec3songArray)



   background(0)
  imageMode(CENTER)
  textFont(superJoyFont)
  fill(randColor)
  textSize(100)
  textAlign(CENTER)
  text("Music", windowWidth/2, windowHeight/3)

  textAlign(CENTER)
  textSize(50)
  //textWrap(WORD)
  text('In almost every movie, there is one specific song that becomes iconic thanks to the movie', windowWidth/2 - 400, windowHeight/2, 800)
   
   // if(startButton.isPressed){
   //   StartScreen = false
   //  choosingScreenBool = true
 //}


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

function playrec1Audio(){

  if(!rec1Song.isPlaying()){
    rec1Song.loop()
    rec1Button.html('Pause Rec1')
    
  } else{
    rec1Song.pause()
    rec1Button.html('Play Rec1')
  }

} 

function playrec2Audio(){

  if(!rec2Song.isPlaying()){
    rec2Song.loop()
    rec2Button.html('Pause Rec2')
    
  } else{
    rec2Song.pause()
    rec2Button.html('Play Rec2')
  }

} 

function playrec3Audio(){

  if(!rec3Song.isPlaying()){
    rec3Song.loop()
    rec3Button.html('Pause Rec3')
    
  } else{
    rec3Song.pause()
    rec3Button.html('Play Rec3')
  }

} 


function startScreen(){
  
}

function choosingScreen(){
  choosingScreenBool = true
  startButton.hide()
  movieMenu.show()
  audioButton.show()
  rec1Button.show()
  rec2Button.show()
  rec3Button.show()
   background(0)
   imageMode(CENTER)
   textFont(superJoyFont)
   fill(randColor)
   textSize(40)
   textAlign(LEFT)

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

     
      text(table.getString(i, 'Song'), windowWidth/2, 120, 700)
      // text(table.getString(i, 'Poster'), windowWidth/2, 130)
      // text(table.getString(i, 'Image'), windowWidth/2, 170)
      //text(table.getString(i, 'Mp3'), windowWidth/2, 210)
      textSize(40)
      text(table.getString(i, 'Artist'), windowWidth/2, 190, 700)
      textSize(35)
      text(table.getString(i, 'Genre'), windowWidth/2, 260, 700)
       textSize(40)
      text(table.getString(i, 'Song Rec 1'), windowWidth/2, 380, 700)
      //text(table.getString(i, 'Rec1mp3'), windowWidth/2, 540, 800)
      text(table.getString(i, 'Song Rec 2'), windowWidth/2, 430, 640)
      // text(table.getString(i, 'Rec2mp3'), windowWidth/2, 450)
      text(table.getString(i, 'Song Rec 3'), windowWidth/2, 520, 700)
      // text(table.getString(i, 'Rec3mp3'), windowWidth/2, 530)
     
      
      movieSong = mp3Array[i]
      //selectedSong = songArray[i]

      rec1Song = rec1songArray[i]

      rec2Song = rec2songArray[i]

      rec3Song = rec3songArray[i]
    }
  }


}

function draw(){
  if (choosingScreenBool == true){
    choosingScreen()
  }
}

