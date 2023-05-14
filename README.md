# google_calender_integration

# Deployed link : [https://google-calender-jdda.onrender.com]


This is a simple Node.js application that demonstrates how to use the Google Calendar API to fetch calendar events. The application consists of the following parts:

# index.js: 
the main entry point of the application
# routes/calendar.js:
 a router module that handles the calendar-related routes
# services/google.js:
 a service module that encapsulates the interaction with the Google Calendar API

# Prerequisites

To run this application, you need to have the following:

* A Google account with access to Google Calendar
* A Google Cloud project with the Google Calendar API enabled
* A set of OAuth 2.0 credentials (client ID and client secret) for the Google Cloud project
Node.js and NPM installed on your machine

# Installation
To install and run the application, follow these steps:

1. Clone the repository to your local machine.
2. Run npm install to install the dependencies.
3. Create a .env file in the root directory of the project with the following contents:

```bash
GOOGLE_CLIENT_ID=<your_client_id_here>
GOOGLE_CLIENT_SECRET=<your_client_secret_here>
GOOGLE_CLIENT_REDIRECT_URI=http://localhost:3000/calendar/redirect
```

Replace <your_client_id_here> and <your_client_secret_here> with your actual OAuth 2.0 credentials for the Google Cloud project.

4. Run npm start to start the application.

5. Open your web browser and go to http://localhost:3000/calendar/init to initiate the OAuth 2.0 flow and grant the application access to your Google Calendar.

6. After granting access, you will be redirected to http://localhost:3000/calendar/redirect, where you should see a list of your upcoming calendar events.

# License
This application is licensed under the MIT License. See the LICENSE file for more information.

# Response
The response of the API is a JSON array containing the upcoming calendar events for the authenticated user. Each event is represented as a JSON object with the following properties:

* id: the unique identifier of the event
* summary: the summary or title of the event
* description: the description of the event (if any)
* location: the location of the event (if any)
* start: an object representing the start time of the *  event, with the following properties:
  * dateTime: the date and time of the start of the event in ISO 8601 format
  * timeZone: the time zone of the start time
* end: an object representing the end time of the event, with the same properties as start
* attendees: an array of objects representing the attendees of the event (if any), with the following properties:
 * email: the email address of the attendee
 * responseStatus: the status of the attendee's response to the event (e.g., accepted, tentative, declined, or needsAction)


 # Contact Information :
  
  # Linkedin : [https://www.linkedin.com/in/guddu-tiwari-57b841230/]

  # Resume : [https://drive.google.com/file/d/1uGspjyk-gKX_5r7DHaXXCbqIKKznWvXU/view]

  # Portfolio: [https://drive.google.com/file/d/1uGspjyk-gKX_5r7DHaXXCbqIKKznWvXU/view]