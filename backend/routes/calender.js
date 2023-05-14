// Import required modules
const { google } = require("googleapis");
const express = require("express");
require('dotenv').config();

// Create a new router instance
const router = express.Router();

// Get the necessary Google API credentials from environment variables
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_CLIENT_REDIRECT_URI;

// Create a new OAuth2 client instance with the credentials
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Define a route to initialize the Google OAuth2 authentication flow
router.get("/init", (req, res) => {
  // Generate the authentication URL for the user to visit
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline", // Request offline access to refresh token
    scope: ["https://www.googleapis.com/auth/calendar.readonly"], // Request read-only access to user's calendar
  });
  // Redirect user to the authentication URL
  res.redirect(authUrl);
});

// Define a route for the Google OAuth2 redirect URI
router.get("/redirect/", async (req, res) => {
  try {
    // Get the authorization code from the query parameters
    const { code } = req.query;
    // Exchange the authorization code for access and refresh tokens
    const { tokens } = await oAuth2Client.getToken(code);
    // Set the access and refresh tokens on the OAuth2 client
    oAuth2Client.setCredentials(tokens);

    // Create a new Google Calendar API client instance with the authenticated OAuth2 client
    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
    // Get the user's next 10 upcoming events from their primary calendar
    const events = await calendar.events.list({
      calendarId: "primary", // Use the user's primary calendar
      timeMin: new Date().toISOString(), // Only get events from now on
      maxResults: 10, // Only get the next 10 events
      singleEvents: true, // Treat recurring events as separate events
      orderBy: "startTime", // Order events by start time
    });

    // Return the list of events to the user
    res.send(events.data.items);
  } catch (error) {
    // Handle any errors that occur during the authentication flow
    res.status(500).send({ error: error.message });
  }
});

// Export the router for use in other parts of the application
module.exports = router;
