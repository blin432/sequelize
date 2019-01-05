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

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('artist name ?', (answer) => {
      name=answer;

          db.artist.create({artistName:name})//creating attribute values
          .then(function(user){

             db.artist.findAll({where:{artistName:name}}) //finding artist ID to print to console
                    .then((results) => {
                      results.forEach(function(index){
                      console.log(`created artist with ID ${index.id}`);
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
  rl.close() 
}

main();


// app.listen(3000, function(){
//     console.log('listening on port 3000...');
// });


app.use(express.static('public'));