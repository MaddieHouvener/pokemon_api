const express  = require("express");
const { company } = require("faker");
const faker = require("faker");
const app = express();
const port = 8000;


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User {
    constructor() {
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

const companies = new Company();
const users = new User();

//creating api route that returns a new user with this path
app.get("/api/users/new", (req, res) => {
    res.json({users});
    res.json( { status: "ok" } );
})

//creating api route that returns a new company
app.get("/api/companies/new", (req, res) => {
    res.json({companies});
    res.json( { status: "ok" } );
})

//Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/users/company", (req, res) => {
    res.json({ users , companies });
    res.json( { status: "ok" } );
})

app.listen( port, () => console.log(`Listening on port: ${port}, coming from faker API`));