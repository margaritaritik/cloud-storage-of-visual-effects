const express=require('express');

const authRouter=require('./authRouter');
const cookies = require("cookie-parser");
const PORT=process.env.PORT||9003;
const cors = require('cors');
const app = express();
app.use(
    cors({
        credentials: true, // чтобы работали secured куки
        origin: true // автоматом подставляется текущий сервер в Origin
    })
);
app.use(cookies());
// let corsOptions = {
//     origin: `http://localhost:6003`
// };


// app.use(cors(corsOptions));

app.use(express.json());
app.use("/auth",authRouter);

// const start=()=>{
//     try{
//        app.listen(PORT,()=>console.log(`SERVER WORKING ON PORT ${PORT}`));
//     }catch (e){
//         console.log(e);
//     }
//
// }
(async () => {
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`)
    });
})();

// start();