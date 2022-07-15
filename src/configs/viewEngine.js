import express from "express";

const configViewEngine = (app) => {
    //xét quyền truy cập để file đc chia sẻ ra ngoài
    app.use(express.static('./src/public'))


    //vị trí file view
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

export default configViewEngine