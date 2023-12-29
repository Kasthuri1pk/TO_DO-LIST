import express from "express";
import bodyParser from "body-parser";

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var task=["go for a walk","learning javascript"];
var wish=["go for a vacaion","become a developer"];

app.get("/", (req,res)=>{
res.render("index.ejs",{task});
});


app.post('/addtask', (req, res) => {
    var newOne = req.body.newtask;
    task.push(newOne);
    res.redirect('/');
});

app.get("/bucket", (req,res)=>{ 
   res.render("bucket.ejs",{wish});
    });

    app.post("/bucket", (req, res) => {
        var newWish = req.body.newwish;
        wish.push(newWish);
        res.redirect('/bucket');
    });
    

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});