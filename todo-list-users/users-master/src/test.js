const {getAllUsers, getAUserByID, createUser, displayAUser, displayUsers} = require('./asyncawait');
const {users} = require('./users');

(async ()=>{
    const allUsers = await getAllUsers();
    console.log(allUsers);

    const user =  {
        "id": 3,
        "name": "Michel Howell",
        "username": "auth",
        "email": "Shanna@melissa.tv",
        "address": {
        "street": "Robert Plains",
        "suite": "Suite 123",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        },
        };
    const users = await displayUsers(user);
    console.log(users);
    const foundUser = await displayAUser(3);
    console.log(foundUser);
    const notFoundUser = await displayAUser(4);
    console.log(notFoundUser);
})(users)