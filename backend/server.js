const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json())

//middleware to route activities 
const contactRouter = require("./routes/contact");
app.use("/send", contactRouter);
app.use(express.static(__dirname + 'my-app/public'));

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('build'))
  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'my-app','build', 'index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log("Listening on Port "+port))