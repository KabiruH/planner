const express = require("express");
const app = express();
const PORT = 4000;
const database = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({
        message: "Hello world",
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

    //👇🏻 array representing the data
   
    //👇🏻 generates a random string as ID
    const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/register", (req, res) => {
        const { username, email, password } = req.body;
        //👇🏻 checks if the user does not exist
        let result = database.filter(
            (user) => user.email === email || user.username === username
        );
        //👇🏻 creates the user's data structure on the server
        if (result.length === 0) {
            database.push({
                id: generateID(),
                username,
                password,
                email,
                timezone: {},
                schedule: [],
            });
            return res.json({ message: "Account created successfully!" });
        }
        //👇🏻 returns an error
        res.json({ error_message: "User already exists!" });
    });

   
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    let result = database.filter(
        (user) => user.username === username && user.password === password
    );
    //👇🏻 user doesn't exist
    if (result.length !== 1) {
        return res.json({
            error_message: "Incorrect credentials",
        });
    }
    //👇🏻 user exists
    res.json({
        message: "Login successfully",
        data: {
            _id: result[0].id,
            _email: result[0].email,
        },
    });
});
