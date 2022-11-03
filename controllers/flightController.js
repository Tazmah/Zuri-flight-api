const express = require("express")
const bodyParser = require("body-parser")
const flights = require("../models/flight")

const app = express()

/* app.set('view engine', 'ejs') */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

/* exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example") 
} */

const bookFlight = (req, res) => {
    const { inputTitle, inputTime, inputPrice, inputDate } = req.body

    flights.push({
        title: inputTitle,
        time: inputTime,
        price: inputPrice,
        date: inputDate
    })

    res.render("flights", {
        data: flights
    })
}

const getAllFlight = (req, res) => {
    res.render("flights", {
        data: flights
    })
}

const getFlight = (req, res) => {
    const flight = req.params

    res.render("flight", {
        data: flight
    })
}

const editFlight = (req, res) => {
    const { inputTitle, inputTime, inputPrice, inputDate } = req.body

    flight.push({
        title: inputTitle,
        time: inputTime,
        price: inputPrice,
        date: inputDate
    })

    res.render("flight", {
        data: flight
    })
}

const deleteFlight = (req, res) => {
    var requestedtitle = req.body.title;
    var j = 0;
    flights.forEach(flight => {
        j = j + 1;
        if (flight.title == requestedtitle) {
            flights.splice((j - 1), 1)
        }
    })
    res.render("flights", {
        data: flights
    })
}

module.exports = {
    bookFlight,
    getAllFlight,
    getFlight,
    editFlight,
    deleteFlight
}