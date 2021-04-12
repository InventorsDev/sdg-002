<<<<<<< HEAD
# MedTime ⏰

A web/mobile app that:
* Helps people set reminders to take their drugs
* Detect fall via mobile device API, and prompt the userasking if they are okay or not....and if the user should not reply within `N minutes/seconds` it should automatically send an SMS to people they have added as their favorite contacts.

### Proposed  architecture/structure

From the app index page, the user can easily set a reminder to take a particular drug. They get to set:
 * The no. of hours they take the drug
 * Total no. of days they will be taking the drug.  and finally
 * The no. of pills they will be taking for each interval

And, once its time to take their drug, the user will be reminded (via **push notification**)

____

***For fall detection***, the user will have the option of selecting maximum of **3 people** from their contact list to set as their *favorite contacts*.

And once the app detects a fall from the device, it will prompt the user asking if they are okay or not.
and if the user should not reply within a particular time-frame, all of their favorite contacts will be alerted via **SMS** you along with the last ***recorded location*** of the user.

### Tools
- **Front-end** - HTML, CSS & Javascript
- **Back-end** - Nodejs & Express
=======
# medtime

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
>>>>>>> 1eefedb1157b8750159f3da72f6bfdf7874f12dc
