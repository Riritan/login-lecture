"use strict"

const User = require("../../models/User");



const output={
    home: (req,res) =>{
        res.render("home/index"); 
    },
    login:(req,res) =>{
        res.render("home/login");
    },
    register:(req,res)=>{
        res.render("home/register");

    },
    check:(req,res) =>{
        res.render("home/check"); 

    },
    book: (req, res) => {
        res.render("home/book");
    },

    chb: (req, res) => {
        res.render("home/chb");
    }

};


const process ={
    login: async (req,res) =>{
       const user = new User (req.body);
       const response =await user.login();
       return res.json(response);
    },
    register:async (req,res)=>{
        const user = new User (req.body);
        const response = await user.register();
        console.log('register', response);
        return res.json(response);
    },

    book:async (req,res)=>{
        const user = new User (req.body);
        const response = await user.book();
        console.log('book', response);
        return res.json(response);
    }
    

    
};

module.exports ={
    output,
    process,
};

