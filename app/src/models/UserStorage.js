"use strict";

//fs는 프로미스를 반환한다.
const fs = require("fs").promises;

class UserStorage {
    
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);   // => [id, psword, name]
        //Object.keys??
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    //데이터의 은닉화, 메서드로 전달.
    //...변수 로 받은 인자가 배열로 전달된다.
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        // const users = this.#users;
        //현재경로는 app.js의 경로임
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
          .catch(console.error);
    }

    
    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        
        return { success: true };
    }
}

module.exports = UserStorage;