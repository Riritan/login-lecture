"use strict";

const express = require("express");
const router =express.Router();


const ctrl = require("./home.ctrl");
const User = require("../../models/User");

router.get("/",ctrl.output.home);
router.get("/login",ctrl.output.login);
router.get("/register",ctrl.output.register);
router.get('/book', ctrl.output.book); 
router.get('/chb', async(req,res)=>{ 
    try {
    const user = new User();
    const bookList = await user.chb();
    res.render("home/chb", { bookList });
} catch (error) {
    console.error("책 조회 중 오류 발생:", error);
    res.status(500).send("Internal Server Error");
    
}



});    
// router.get("/check",ctrl.output.check);
router.get("/check", async (req, res) => {
    try {
        const user = new User();
        const userList = await user.check();
        res.render("home/check", { userList });
    } catch (error) {
        console.error("회원 조회 중 오류 발생:", error);
        res.status(500).send("Internal Server Error");
        
    }


});



router.post("/login",ctrl.process.login);
router.post("/register",ctrl.process.register);
router.post("/book",ctrl.process.book);
// router.post("/check",ctrl.process.check);


module.exports = router;