const express=require('express');

const authRouter=require('./authRouter');
const cookies = require("cookie-parser");
const PORT=process.env.PORT||9003;
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require("multer");
const app = express();
app.use(
    cors({
        credentials: true, // чтобы работали secured куки
        origin: true // автоматом подставляется текущий сервер в Origin
    })
);

app.use(cookies());

app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth",authRouter);

(async () => {
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`)
    });
})();

