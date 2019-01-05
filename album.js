var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const readline= require('readline');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'app/views'); //app.set (name,value);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const db= require('./models');

var name="";
var year="";
var artist_id="";

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Album name? ', (answer) => {
      name=answer;
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Album year? ', (answer) => {
      year=answer;
      resolve()
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Artist ID ?', (answer) => {
      artist_id=answer;

          db.albums.create({albumName:name, albumYear: year, artistID: artist_id})//creating attribute values
          .then(function(user){

             db.albums.findAll({where:{albumName:name}}) //finding album id to print on console
                    .then((results) => {
                      results.forEach(function(index){
                      console.log(`created album with ID ${index.id}`);
                       })
                    });  
          console.log(user);
          });
      resolve()
    })
  });
}

const main = async () => {
  await question1()
  await question2()
  await question3()
  rl.close()
}

main();


// app.listen(3000, function(){
//     console.log('listening on port 3000...');
// });


app.use(express.static('public'));