const express = require('express');
const app = express();

app.set("view engine","ejs");

app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message: "Developar aplications especializadas em crashar"
        },
        {
            title: "E",
            message: "Eu uso EJS e Javascript pra quebrar HTML renderizado"
        },
        {
            title: "M",
            message: "Muitos códigos quebrados"
        },
    ];

    const subtitle = 'Linguagem das brabas pra quebrar códigos HTML';
    res.render("pages/index",{
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(666);
console.log("Running");