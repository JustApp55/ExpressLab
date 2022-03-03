require('dotenv').config()
const express = require('express'); //from documentation: express is function
const app = express();//app is an object
const port = process.env.PORT;

console.log(process.env.PORT);

// configure the app (app.set)
// mount middleware (app.use)

// define a "root" route directly on app // mount routes
 //app.get('/', function (req, res) {
   // res.send('<h1>Hello Justice!</h1>');
// });

  //  app.get('/home', function(req, res){
  //      res.send('<h1>Home Page</h1>')
  //  })
  
   const fs = require('fs') // this engine requires the fs module like we did monday
app.engine('hypatia', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#body#', options.body) 
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#image#', '<img src=' + options.image + '>')
     
    return callback(null, rendered)
  })
})


  // app.get('/', (req, res) => {
  //   res.render('template2', { title: 'gitGoofy', message: '<h2>Almost Friday', content: '<div style="color:pink; font-size:30px"> Are We There Yet?!', '<img src = "https://66.media.tumblr.com/0411433ae6e4dd1bd74041bf287a9d5f/tumblr_poq8ubnxbB1r2pp2to1_500.gif" >' })
  // })

  app.get('/', (req, res) => {
    res.render('template2', { title: 'gitGoofy', message: '<h2>Oh mehnn!', content: '<div style="color:pink; font-size:10px">', 
    image:" https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/finishing-homework.jpg?quality=82&strip=all"  })
  })
  
  app.get('/MJ', (req, res) => {
    res.render('template', { title: 'Drop de Mic ', message: 'Hello there  ', content: ' I\'m Michael Jackson, the all-time of King of Pop' })
  })
  
  app.get('/1more', (req, res) => {
    res.render('template', { title: 'Hey ', message: 'Here I am ', content: ' Lucky Dube: May be the King of Reggae!' })
  })

  app.get('/4', (req, res) => {
    res.render('template', { title: 'PCt ', message: 'Probate Court ', content: 'When a person dies, his or her bills become what?' })
  })
  
  app.get('/favPet', (req, res) => {
    res.render('template2', { title: ' ', message: ' ', content: ' ' })
  })

  // app.get('/htw', (req, res) => {
  //   res.send(`<h1>Heal The World!</h1> <img  src="https://www.youtube.com/embed/BWf-eARnf6U">`)
  // })
  
  app.get('/img', (req, res) => {
    res.render('template2', { title: 'gitGoofy', message: '<h2>Just think about it. Will ya?!', content: '<div style="color:pink; font-size:30px">', 
    image:"https://i.pinimg.com/550x/b8/56/76/b85676c5a738e107dbc2bc9dc6fa27a5.jpg "  })
  })

  app.get('/gif', (req, res) => {
    res.render('template2', { title: 'gitGoofy', message: '<h2>', content: '<div style="color:blue; !font-size:80px"> Are we there yet?', image:" https://66.media.tumblr.com/0411433ae6e4dd1bd74041bf287a9d5f/tumblr_poq8ubnxbB1r2pp2to1_500.gif"  })
  })

  app.get('/7', (req, res) => {
    res.render('template2', { title: '101', message: 'Fun facts', content: ' Octopuses have three hearts.' })
  })
  
  app.get('/8', (req, res) => {
    res.render('template2', { title: 'TriviaQue', message: 'Did you know that ', content: 'You fart on average 14 times a day, and each fart travels from your body at 7 mph. ' })
  })
  
  app.get('/9', (req, res) => {
    res.render('template2', { title: 'CI', message: 'Compound Interest ', content: 'S/he knows it earns. S/he who does not pays it' })
  })

  app.get('/10', (req, res) => {
    res.render('template2', { title: 'Money', message: 'Rules of Money ', content: '1. Make money, never lose money ' })
  })
  

    // specify the views directory
  app.set('views', './views') 
app.set('view engine', 'hypatia') // register the hypatia view engine
  
 // Tell the app to listen on port 3000 for HTTP requests from clients
  app.listen(port,() => {
    console.log('listening on port', port);
   });
