let table;


let movieMenu
let superJoyFont


let modemSound
let canvas

let audioButton

let videoButton

let modemVolSlider
let modemRateSlider

let modemAmplitude
let mappedAmplitude

let songArray
let imageArray


let selectedSong


function preload(){
	table = loadTable('js/DataFinalProject.csv', 'csv', 'header');
    superJoyFont = loadFont('SuperJoyful.ttf')
    //modemSound = loadSound('Media/Tiroteo-Remix.mp3')
}



//function loadSongArray(){
  //for(let i = 0; i < table.getRowCount(); i++){
    //songArray[i] = loadSong('Song/' + table.getString(i, 'Song'))
  //}

//}


function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0)
  canvas.style('z-index', '-1')

  background(0)

  //createButton('Font test')
   textFont(superJoyFont)
  fill(random(225), random(225), random(225))
  textSize(50)
  textAlign(CENTER)
  text("Music", windowWidth/2, windowHeight/2)

audioButton = createButton('Play Modem')
  audioButton.mousePressed(playAudio)

  modemAmplitude = new p5.Amplitude()
 
 //movieMenu = createSelect()
//movieMenu.option('select Movie')

//for (var i = 0; i < table.getRowCount(); i++){
    //let movies = table.getString(i, 'movies');
//}

submitButton = createButton('Submit')
submitButton.position(190,50)


movieMenu = createSelect()
movieMenu.position(50, 50)
movieMenu.option('select movie')

  //cycle through the table rows
  for (var i = 0; i < table.getRowCount(); i++){

    
    let movies = table.getString(i,'Movies')

    //to show the options
    
   movieMenu.option(movies)
  
  }

  //submitButton.mousePressed(changeData)

}


function playAudio(){


  if(!modemSound.isPlaying()){
    selectedSong.loop()
    audioButton.html('Pause Modem')
    
  } else{
    selectedSong.pause()
    modemButton.html('Play Modem')
  }
} 


function draw(){
  background(0)
  // modemSound.setVolume(modemVolSlider.value())
  // modemSound.rate(modemRateSlider.value())

  //mappedAmplitude = modemAmplitude.getLevel() *1000

  // fill(map(mappedAmplitude, 0, 300, 0, 255))
  // ellipse(windowWidth/2, windowHeight/2, mappedAmplitude, mappedAmplitude)

  //modemSound.rate(map(mouseX, 0, windowWidth, 0, 2))
  for (let i = 0; i < table.getRowCount(); i ++){
    if(movieMenu.value() == table.getString(i, 'Movies')){

      text(table.getString(i, 'Song'), windowWidth/2, 50)
      text(table.getString(i, 'Poster'), windowWidth/2, 90)
      text(table.getString(i, 'Song'), windowWidth/2, 130)
      text(table.getString(i, 'Image'), windowWidth/2, 170)
      text(table.getString(i, 'Mp3'), windowWidth/2, 210)
      text(table.getString(i, 'Artist'), windowWidth/2, 250)
      text(table.getString(i, 'Genre'), windowWidth/2, 290)
      text(table.getString(i, 'Song Rec 1'), windowWidth/2, 330)
       text(table.getString(i, 'Rec1mp3'), windowWidth/2, 370)
      text(table.getString(i, 'Song Rec 2'), windowWidth/2, 410)
      text(table.getString(i, 'Rec2mp3'), windowWidth/2, 450)
      text(table.getString(i, 'Song Rec 3'), windowWidth/2, 490)
      text(table.getString(i, 'Rec3mp3'), windowWidth/2, 530)
      // for(let j = 0; j < table.getString(i, 'frequency'); j++){
      //   image(imageArray[i], random(windowWidth), random(windowHeight), 30,30)
      // }

      //selectedSong = songArray[i]
    }
  }


}

