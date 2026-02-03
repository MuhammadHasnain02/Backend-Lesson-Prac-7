import express from "express";
import { 
    homePage,
    aboutPage,
    contactPage
} from "../controllers/userControllers.js";

export const userRoutes = express.Router();

userRoutes.get("/", homePage);
userRoutes.get("/about", aboutPage);
userRoutes.get("/contact", contactPage);

// ---------------------------------------

// import express from "express";

// export const userRoutes = express.Router();

// userRoutes.get("/", (req, res) => {
//     res.send("Home Page");
// });

// userRoutes.get("/about", (req, res) => {
//     res.send("About Page");
// });

// userRoutes.get("/contact", (req, res) => {
//     res.send("Contact Page");
// });
