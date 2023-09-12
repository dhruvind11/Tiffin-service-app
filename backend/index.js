const express = require('express');
require('./db/Config');
const User = require('./db/User');
const app = express();
const Jwt = require('jsonwebtoken');
const cors = require('cors');
const jwtKey = 'tiffin';
app.use(express.json())
app.use(cors())

app.post('/register', async(req, res) => {
    try {
        console.log(req.body);
        let data = new User(req.body);
        let result = await data.save();
        result = result.toObject();
        delete result.password;
        delete result.confirmPassword;
        res.send({ message: "User registered successfully", data: result });
    } catch (error) {
        res.status(500).send({ error: "Error registering user" });
    }
});


app.post('/login', async(req, res) => {
    try {
        console.log(req.body);
        if (req.body.email && req.body.password) {
            let data = await User.findOne(req.body).select("-password");
            if (data) {
                res.send(data);
            } else {
                res.send({ result: "no user found" })
            }
        } else {
            res.send({ result: "no user found" })
        }


    } catch (error) {
        res.status(400).send(error);
    }

    // try {
    //     console.log(req.body);
    //     if (req.body.email && req.body.password) {
    //         let data = await User.findOne(req.body);
    //         const isMatch = await bcrypt.compare(req.body.password, data.password);
    //         let data1 = data.select("-password");
    //         if (data1) {
    //             // Jwt.sign({ data }, jwtKey, { expiresIn: "1h" }, (err, token) => {
    //             //     if (err) {
    //             //         res.send("something went wrong");
    //             //     }
    //             //     res.send({ data, auth: token });
    //             // })
    //             res.send(data1);

    //         } else {
    //             res.send({ result: 'no match' });
    //         }
    //     } else {
    //         res.send("no user found");
    //     }
    // } catch (error) {
    //     res.status(400).send(error);
    // }

});
app.listen(5000);