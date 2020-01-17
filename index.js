const express = require("express")
const app = express()

app.use(express.static(__dirname + "/"));

app.get("/", (req,res) => {
    res.sendFile(path(__dirname + "/index.html"))
});

const port = process.env.PORT || 3000
app.listen(3000, () => console.log(`listening on port ${port}`));
