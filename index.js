const express = require("express")
const path = require("path")
const app = express()

// console.log(__dirname)
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))

// app.get('/', function (req, res) {
//   res.send('<h1>Top page!</h1>')
// })

app.get('/about', function (req, res) {
    res.send('This is about page')
  });

app.post('/api/v1/quiz', function (req, res) {
    const answer = req.body.answer;
    if(answer === "2"){
        // res.send("correct")
        res.redirect("/correct.html")
    } else {
        // res.send("incorrect")
        res.redirect("/wrong.html")
    }
});


app.get('/api/v1/user', function (req, res) {
    res.send({
        name: "Mike",
        age: 30,
    });
});

app.listen(3000, function(){
    console.log("Running")
});