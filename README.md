# WEB103 Project 3 - **EchoWave**

Submitted by: **Rashidun Rithy**

About this web app: **a virtual community space for live music fans in the Dallas area. Pick a venue to see its upcoming and past shows, or browse every event with live countdowns to showtime.**

Time spent: **4.5** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [] **The web app uses React to display data from the API**
- [] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [ ]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [ ]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [] **The web app displays a title.**
- [] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [] *Note: A non-visual list of links to different locations is insufficient.* 
- [] **Each location has a detail page with its own unique URL.**
- [] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [] An additional page shows all possible events
  - [] Users can sort *or* filter events by location.
- [] Events display a countdown showing the time remaining before that event
  - [] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [] Live countdown that ticks every second; past events turn grayscale with a red "Event passed" badge and crossed-out title
- [] Events page can also be sorted earliest-first or latest-first
- [] Venue cards on the home page with hover animations, plus a responsive single-column layout on phones
- [] API returns 404 errors for unknown locations or events

## Video Walkthrough

Here's a walkthrough of implemented required features:

![alt text](EchoWave.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I had some trouble setting up render beacuse i didn't realse at first that i had to to suspend the other project before i could start the new project.

## License

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.