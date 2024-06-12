import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getAllPlaces, getPlaceById } from "../controllers/place.js";
import { getItinerary, postItinerary, deleteItinerary } from "../controllers/itinerary.js";
import { getallComments, postComment } from "../controllers/comment.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/register', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);




// Events Routes
router.get("/places", getAllPlaces);
router.get("/places/:id", getPlaceById);

// Ratings Routes
router.get("/itinerary", getItinerary);
router.post("/itinerary", postItinerary);
router.delete("/itinerary/:id", deleteItinerary);

// User Comment
router.get("/users/:user_id/comments", getallComments);
router.post("/users/:user_id/comments",  postComment);
// router.delete("/users/:user_id/comments/:place_id", deleteComment);
 
export default router;