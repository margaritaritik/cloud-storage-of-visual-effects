

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
// app.use(
//     fileUpload({
//         createParentPath: true,
//     }),
// );
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth",authRouter);

app.post("auth/upload-file", async (req, res) => {
    try {
        console.log(req.body);
        // if (!req.files) {
        //     res.send({
        //         status: "failed",
        //         message: "No file uploaded",
        //     });
        // } else {
        //     let file = req.files.file;
        //
        //     console.log(req.files);
        //
        //     file.mv("./uploads/" + file.name);
        //
        //     res.send({
        //         status: "success",
        //         message: "File is uploaded",
        //         data: {
        //             name: file.name,
        //             mimetype: file.mimetype,
        //             size: file.size,
        //         },
        //     });
       // }
    } catch (err) {
        res.status(500).send(err);
    }
});

(async () => {
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`)
    });
})();

