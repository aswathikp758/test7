"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var express = require("express");

var cors = require("cors");

var mongoose = require("mongoose");

var dotenv = require("dotenv").config();

var Stripe = require('stripe');

var app = express();
app.use(cors());
app.use(express.json({
  limit: "10mb"
}));
var PORT = process.env.PORT || 8080; //mongodb connection

console.log(process.env.MONGODB_URL);
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("Connect to Database");
})["catch"](function (err) {
  return console.log(err);
}); //schema

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  confirmPassword: String,
  image: String
}); //

var userModel = mongoose.model("user", userSchema); //api

app.get("/", function (req, res) {
  res.send("Server is running");
}); //signup

app.post("/signup", function _callee(req, res) {
  var _req$body, email, image;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.body);
          _req$body = req.body, email = _req$body.email, image = _req$body.image;
          userModel.findOne({
            email: email
          }, function (err, result) {
            console.log(result);
            console.log(err);

            if (result) {
              res.send({
                message: "Email id is already register",
                alert: false
              });
            } else {
              var data = userModel(req.body);
              data.save();
              var date_ob = new Date(); //console.log(date_ob);

              res.send({
                message: "successfully sign up ",
                date_ob: date_ob,
                alert: true
              });
            }
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}); //api login

app.post("/login", function (req, res) {
  console.log(req.body);
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;
  userModel.findOne({
    email: email,
    password: password
  }, function (err, result) {
    if (result) {
      var dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
        password: result.password
      };
      console.log(dataSend);
      res.send({
        message: "Login is successfully",
        alert: true,
        data: dataSend
      });
    } else {
      res.send({
        message: "Incorrect Email and Password or please sign up",
        alert: false
      });
    }
  });
}); //-------Admin---------------
//---------------------------
//api admin_login

app.post("/admin_login", function (req, res) {
  console.log(req.body);
  var _req$body3 = req.body,
      email = _req$body3.email,
      password = _req$body3.password;
  userModel.findOne({
    email: email,
    password: password
  }, function (err, result) {
    if (result) {
      var dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image
      };
      console.log(dataSend);
      res.send({
        message: "Login is successfully",
        alert: true,
        data: dataSend
      });
    } else {
      res.send({
        message: "Incorrect Email and Password or please sign up",
        alert: false
      });
    }
  });
}); //---------------------------
//product section

var schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String
});
var productModel = mongoose.model("product", schemaProduct); //save product in data 
//api

app.post("/uploadProduct", function _callee2(req, res) {
  var data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(req.body);
          _context2.next = 3;
          return regeneratorRuntime.awrap(productModel(req.body));

        case 3:
          data = _context2.sent;
          data.save();
          res.send({
            message: "upload successfully"
          });

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //

app.get("/product", function _callee3(req, res) {
  var data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(productModel.find({}));

        case 2:
          data = _context3.sent;
          res.send(JSON.stringify(data));

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}); //Payment gateway-----

var schemaOrder = mongoose.Schema({
  userid: String,
  email: String,
  totalQuantity: String,
  totalPrice: String
});
var orderModel = mongoose.model("order", schemaOrder);
console.log(process.env.STRIPE_SECRET_KEY);
var stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
app.post("/checkout-payment", function _callee4(req, res) {
  var data, params, session;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log(req.body);
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(orderModel(req.body));

        case 4:
          data = _context4.sent;
          data.save();
          params = {
            submit_type: 'pay',
            mode: "payment",
            payment_method_types: ['card'],
            billing_address_collection: "auto",
            shipping_options: [{
              shipping_rate: "shr_1NJWQnSJzaS8WWMB4BtFe0RI"
            }],
            line_items: req.body.map(function (item) {
              return {
                price_data: {
                  currency: "inr",
                  product_data: {
                    name: item.name //  images:(item.image)

                  },
                  unit_amount: item.price * 100
                },
                adjustable_quantity: {
                  enabled: true,
                  minimum: 1
                },
                quantity: item.qty
              };
            }),
            success_url: "".concat(process.env.CLIENT_URL, "/success"),
            cancel_url: "".concat(process.env.CLIENT_URL, "/cancel")
          };
          _context4.next = 9;
          return regeneratorRuntime.awrap(stripe.checkout.sessions.create(params));

        case 9:
          session = _context4.sent;
          res.status(200).json(session.id);
          _context4.next = 16;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](1);
          res.status(_context4.t0.statusCode || 500).json(_context4.t0.message);

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 13]]);
}); //----------------payment status---------------

app.get("/getdata", function _callee5(req, res) {
  var sort, data;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          sort = {
            length: -1
          };
          _context5.next = 3;
          return regeneratorRuntime.awrap(productModel.find({}).sort(sort));

        case 3:
          data = _context5.sent;
          res.json({
            success: true,
            data: data
          });

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
});
app.put("/update", function _callee6(req, res) {
  var _req$body4, _id, rest, data;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          console.log(req.body);
          _req$body4 = req.body, _id = _req$body4._id, rest = _objectWithoutProperties(_req$body4, ["_id"]);
          console.log(rest);
          _context6.next = 5;
          return regeneratorRuntime.awrap(productModel.updateOne({
            _id: _id
          }, rest));

        case 5:
          data = _context6.sent;
          res.send({
            success: true,
            message: "data updated successfully",
            data: data
          });

        case 7:
        case "end":
          return _context6.stop();
      }
    }
  });
});
app["delete"]("/delete/:id", function _callee7(req, res) {
  var id, data;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          console.log(id);
          _context7.next = 4;
          return regeneratorRuntime.awrap(productModel.deleteOne({
            _id: id
          }));

        case 4:
          data = _context7.sent;
          res.send({
            success: true,
            message: "data deleted successfully",
            data: data
          });

        case 6:
        case "end":
          return _context7.stop();
      }
    }
  });
});
app.get("/userdata", function _callee8(req, res) {
  var data;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(userModel.find({}));

        case 2:
          data = _context8.sent;
          res.json({
            success: true,
            data: data
          });

        case 4:
        case "end":
          return _context8.stop();
      }
    }
  });
});
app.listen(PORT, function () {
  return console.log("server is running at port:" + PORT);
});