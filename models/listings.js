const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListningSchema = new Schema({
    Image: {
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
            set: (v) => v === "" ? "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500" : v
        },
        filename: {
            type: String,
            default: "default_image"
        }
    },
    Title : {
        type : String ,
        required : true ,
    }, 
    Description : String ,
    Package_Type : String , 

});

const Listing = mongoose.model("Listing" , ListningSchema);
module.exports = Listing;
