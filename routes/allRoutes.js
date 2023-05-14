// Import required modules
const express = require("express");

// Create a new router instance
const router = express.Router();

// Import routes for the calendar functionality
const calendarRoutes = require("./calender");

// Use the calendar routes under the "/calendar" URL path
router.use("/calendar", calendarRoutes);

// Export the router for use in other parts of the application
module.exports = router;
