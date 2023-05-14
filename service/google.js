// services/google.js

// Import required modules
const { google } = require("googleapis");

// Initialize OAuth2 client with credentials from environment variables
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_CLIENT_REDIRECT_URI;
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Define function to get calendar events using the initialized OAuth2 client
const getCalendarEvents = async () => {
  try {
    // Get access token using OAuth2 client
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // Use Google Calendar API to fetch calendar events
    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
    const events = await calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    });

    // Return the calendar events
    return events.data.items;
  } catch (error) {
    // Throw an error if something goes wrong
    throw error;
  }
};

// Export the getCalendarEvents function for use in other parts of the application
module.exports = { getCalendarEvents };
