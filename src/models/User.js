"use strict";

const UserStorage = require("./UserStorage");
const pool = require("../databases/db")

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        // const userInfo = await UserStorage.getUserInfo(client.id);
        const userInfo = await pool.query('select * from 회원 where 회원아이디 = ?', client.id);


        if (userInfo) {
            const { 회원아이디, 회원비밀번호 } = userInfo[0][0];

            if (회원아이디 === client.id && 회원비밀번호 === client.psword) {
                return { success: true };
            }

            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }

        return { success: false, msg: "존재하지 않는 아이디입니다." };
    }

    async register() {
        const client = this.body;
        try {
            const response = await pool.query("insert into 회원 values (?,?,?,?,?)",
            [
                client.id,
                client.psword,
                client.name,
                client.birth,
                client.tel
            ])
            
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }

    async check() {
       
            try {
                const [rows] = await pool.query('SELECT * FROM 회원');
                return rows;
        }
        catch (error) {
            console.error("회원 조회 중 오류 발생:", error);
            throw error;
        }
       
        
        
        }

    async book() {
        const client = this.body;
        try {
            const response = await pool.query("insert into 도서 values (?,?,?,?,?)",
            [
                client.bid,
                client.bname,
                client.author,
                client.publ,
                client.ISBN,
            ])
                
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    } 
    
    
    async chb() {
       
        try {
            const [rows] = await pool.query('SELECT * FROM 도서');
            return rows;
    }
    catch (error) {
        console.error("도서 조회 중 오류 발생:", error);
        throw error;
    }
   
    }
}


module.exports = User;


