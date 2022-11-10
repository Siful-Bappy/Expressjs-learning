import userModel from "../models/User.js";
import bcrypt from 'bcrypt'

class userController {
  static home = (req, res) => {
    res.render("index");
  };

  // Without hasing
//   static createUserDoc = async (req, res) => {
//     try {
//       const doc = new userModel({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//       });
//     //   console.log(doc);
//       await doc.save();
//       res.redirect("/login");
//     } catch (e) {
//       console.log(e);
//     }

// With hasing
static createUserDoc = async (req, res) => {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    try {
      const doc = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.hashPassword,
      });
    //   console.log(doc);
      await doc.save();
      res.redirect("/login");
    } catch (e) {
      console.log(e);
    }
  };
  
  static registration = (req, res) => {
    res.render("registration");
  };

  static verifyLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        const result = await userModel.findOne({email: email});
        if(result != null) {
            if(result.email === email && result.password === password) {
                console.log("The result come from: ", result);
                // res.redirect("/")
                res.send(`<h1>Dashboard: ${result}</h1>`)
            } else {
                res.send("<h1>Email and password is not valid</h1>")
            } 
        } else {
            res.send("<h1>Please create a new account</h1>");
        }
        res.send("Login")
    } catch (e) {
        console.log(e);
    }
  };
  static login = (req, res) => {
    res.render("login");
  };
}

export default userController;
