// ENV
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}



const express = require('express');
const app = express();
const Review = require('./models/Review');
const mongoose = require('mongoose');
// const Listing = require("./models/listings");
const ejsMate = require("ejs-mate");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const methodOverride = require('method-override');

const path = require("path");

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views")); 
app.engine('ejs', ejsMate);
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname , "/public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(methodOverride('_method'));




// 2. Database URL Setup
const dbUrl = process.env.ATLASDB_URL;

// Debugging ke liye check karein ki Render URL read kar pa raha hai ya nahi
if (!dbUrl) {
  console.log("CRITICAL ERROR: ATLASDB_URL is not defined in Environment Variables!");
}

// 3. Mongoose Connection Options ke sath
mongoose.connect(dbUrl || "mongodb://127.0.0.1:27017/Horizon", {
  serverSelectionTimeoutMS: 5000 // 5 sec me timeout ho jayega agar connect nahi hua
})
  .then(() => {
    console.log("Connected to Live DB successfully!");
  })
  .catch((err) => {
    console.log("DB Connection Error Details:", err.message);
  });





// Index Route
app.get("/" , async (req , res) => {
    res.render("./listings/index.ejs");  
});


// Index Route
app.get("/listings" , async (req , res) => {
    res.render("./listings/index.ejs");  
});


// New Listing Form Render Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// New Listing Adding 
// app.post('/listings', upload.single('listing[Image]'), async (req, res) => {

//     const newListing = new Listing(req.body.listing);
//     if (req.file) {
//         newListing.Image = {
//             url: `/uploads/${req.file.filename}`, // ya req.file.filename agar local storage hai
//             filename: req.file.filename
//         };
//     }
//     else{
//             console.log("Image Not Found!");
//     }

//     // console.log(req.file.path);

//     await newListing.save();
//     res.redirect("/listings");
//     // res.send("Successufull");
// }); 

// About Horizon Route
app.get("/listings/about" , async (req , res) => {
    res.render("./listings/about_us.ejs");  
});

// About Horizon Services Route
app.get("/listings/services" , async (req , res) => {
    res.render("./listings/services.ejs");  
});

// About Horizon Cars Fleet Route
app.get("/listings/fleet" , async (req , res) => {
    res.render("./listings/our_fleet.ejs");  
});



// About Horizon Contact Us Route
app.get("/listings/contact" , async (req , res) => {
    res.render("./listings/contact.ejs");  
});


// Horizon Taxi Booking Route
app.get("/listings/booknow" , async (req , res) => {
    res.render("./listings/booknow.ejs");  
});

// Horizon Airport Pickup Route
app.get("/listings/airport" , async (req , res) => {
    res.render("./listings/airport_pickup.ejs");  
});

// Horizon Airport Pickup Route
app.get("/listings/custom" , async (req , res) => {
    res.render("./listings/custom.ejs"); 
});


// Horizon South Goa Route
app.get("/listings/south-goa" , async (req , res) => {
    res.render("./listings/south_goa.ejs"); 
});


// Horizon North Goa Route
app.get("/listings/north-goa" , async (req , res) => {
    res.render("./listings/north-goa.ejs"); 
});



// Horizon North Goa Route
app.get("/listings/mysore" , async (req , res) => {
    res.render("./listings/mysore.ejs"); 
});


// Horizon North Goa Route
app.get("/listings/railway" , async (req , res) => {
    res.render("./listings/railway.ejs"); 
});


// app.get("/listings/:id" , async (req , res) => {
//     let {id} = req.params;
//     console.log(id);
//     const listing = await Listing.findById(id);
//     res.render("./listings/show.ejs" , {listing});  
// });

// app.get("/listings/:id/edit" , async (req , res) => {
//     let {id} = req.params;
//     console.log(id);
//     const listing = await Listing.findById(id);
//     res.render("./listings/edit.ejs" , {listing});  
// });

// app.put('/listings/:id', upload.single('listing[Image]'), async (req, res) => {

//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id , {...req.body.listing});
//     res.redirect(`/listings/${id}`);
// }); 


// app.delete('/listings/:id', async (req, res) => {

//     let {id} = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     res.redirect("/listings");
// }); 



// app.get("/testListing" , async (req , res) => {
//      let sampleListng = new Listing({
//         Title : 'North Goa Sightseeing',
//         Description : 'Fort Aguada, dolphin trip, Calangute, Baga, Anjuna, Vagator and more — full day with a local driver.',
//         Package_Type : 'Day rates on request',
//      });

//      await sampleListng.save();
//      console.log("Sample Listing Was Saved");
//      res.send('Testing Successfull!');
// })




// 1. Reviews Load aur Render karne ke liye
app.get("/listings/review", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.render("listings/review.ejs", { reviews });
  } catch (err) {
    console.log(err);
    res.status(500).send("Database Error");
  }
});

// 2. Naya Review Save karne ke liye
app.post("/listings/review", async (req, res) => {
    console.log(req.body);
  try {
    const { name, location, rating, comment , tour } = req.body;
    await Review.create({ name, location, rating, comment , tour });
    res.redirect("/listings/review");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error saving review");
  }
});





app.listen(8000 , () => {
    console.log("The Server is Listning");
});