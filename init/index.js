const mongoose = require('mongoose');
const Listing = require("../models/listings");
const initData = require("./data");

const MONGO_URL = "mongodb://127.0.0.1:27017/Horizon";

main()
    .then(() => {
        console.log("Connected To Horizon");
})
    .catch((err) => {
        console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data Was Initialized!")
};

initDB()