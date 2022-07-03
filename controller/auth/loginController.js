const jwt = require('jsonwebtoken')
const User = require('../../models/User')

const bcrypt = require('bcryptjs')

exports.login = (req, res) => {

  // User.findOne({ email: req.body.email }).then(user => {
  //     if (user) {
  //         return res.status(400).json({ email: "Email already exists" });
  //     } else {
  //         const newUser = new User({
  //             email: req.body.email,
  //             password: req.body.password
  //         });
  //         bcrypt.genSalt(10, (err, salt) => {
  //             bcrypt.hash(newUser.password, salt, (err, hash) => {
  //                 newUser.password = hash;
  //                 newUser
  //                     .save()
  //                     .then(user => res.json(user))
  //                     .catch(err => console.log(err));

  //             });
  //         });
  //     }
  // });

  if (req.body.data?.email && req.body.data?.password) {
    const email = req.body.data.email;
    const password = req.body.data.password;

    User.findOne({ email }).then(user => {

      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {


          const payload = {
            id: user.id,
            name: user.name
          };

          jwt.sign(
            payload,
            'peshawaGroup##2022@$%@!!@3@',
            {
              expiresIn: 31556926
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );


        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  } else {
    console.log('invalid data input')
    return res.json({})
  }
};