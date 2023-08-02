"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.editItem = exports.decreaseQty = exports.increaseQty = exports.deleteCartItem = exports.addCartItem = exports.setDataProduct = exports.productSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reactHotToast = require("react-hot-toast");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = {
  productList: [],
  cartItem: []
};
var productSlice = (0, _toolkit.createSlice)({
  name: "product",
  initialState: initialState,
  reducers: {
    setDataProduct: function setDataProduct(state, action) {
      state.productList = _toConsumableArray(action.payload);
    },
    addCartItem: function addCartItem(state, action) {
      var check = state.cartItem.some(function (el) {
        return el._id === action.payload._id;
      });

      if (check) {
        (0, _reactHotToast.toast)("Already Item in Cart");
      } else {
        (0, _reactHotToast.toast)("Item Add successfully");
        var total = action.payload.price;
        state.cartItem = [].concat(_toConsumableArray(state.cartItem), [_objectSpread({}, action.payload, {
          qty: 1,
          total: total
        })]);
      }
    },
    //---------------Admin edit load data
    editItem: function editItem(state, action) {
      var check = state.cartItem.some(function (el) {
        return el._id === action.payload._id;
      });

      if (check) {
        var total = action.payload.price;
        state.cartItem = [].concat(_toConsumableArray(state.cartItem), [_objectSpread({}, action.payload, {
          qty: 1,
          total: total
        })]);
      }
    },
    //----------------------------------------
    deleteCartItem: function deleteCartItem(state, action) {
      (0, _reactHotToast.toast)("one Item Delete");
      var index = state.cartItem.findIndex(function (el) {
        return el._id === action.payload;
      });
      state.cartItem.splice(index, 1);
      console.log(index);
    },
    increaseQty: function increaseQty(state, action) {
      var index = state.cartItem.findIndex(function (el) {
        return el._id === action.payload;
      });
      var qty = state.cartItem[index].qty;
      var qtyInc = ++qty;
      state.cartItem[index].qty = qtyInc;
      var price = state.cartItem[index].price;
      var total = price * qtyInc;
      state.cartItem[index].total = total;
    },
    decreaseQty: function decreaseQty(state, action) {
      var index = state.cartItem.findIndex(function (el) {
        return el._id === action.payload;
      });
      var qty = state.cartItem[index].qty;

      if (qty > 1) {
        var qtyDec = --qty;
        state.cartItem[index].qty = qtyDec;
        var price = state.cartItem[index].price;
        var total = price * qtyDec;
        state.cartItem[index].total = total;
      }
    }
  }
});
exports.productSlice = productSlice;
var _productSlice$actions = productSlice.actions,
    setDataProduct = _productSlice$actions.setDataProduct,
    addCartItem = _productSlice$actions.addCartItem,
    deleteCartItem = _productSlice$actions.deleteCartItem,
    increaseQty = _productSlice$actions.increaseQty,
    decreaseQty = _productSlice$actions.decreaseQty,
    editItem = _productSlice$actions.editItem;
exports.editItem = editItem;
exports.decreaseQty = decreaseQty;
exports.increaseQty = increaseQty;
exports.deleteCartItem = deleteCartItem;
exports.addCartItem = addCartItem;
exports.setDataProduct = setDataProduct;
var _default = productSlice.reducer;
exports["default"] = _default;