Title: Cost Eater
=================
-----------------

####Problem Statement:
  * It can be difficult to figure out weekly expenses, because everything
    has a different price and lifespan.

####This prototype will specialize to groceries:
  * Long term, but expensive, purchases can cause spikes in spending which  makes conventional budget graphing method not to reflect the true
  cost over a time period. 

####Example:
  * You likely only buy spices, flour, sugar, and other staples once
    or twice a year.
  * However, items like milk and eggs are probably purchased every week.
  * See how these average out over time to a consistent weekly cost.

--------------------------------------------------------------------

####Problem Solution:
  * This app introduces a new field "lifespan" to every items, which could be the days for food to go bad or the estimated time for the food to be consumed. With the lifespan for each item, the app will calculate and give a true, averaged, daily, weekly or monthly cost that reflects the actual value of food dedicated/comsumed during the time period.

--------------------------------------------------------------------

####Features (tentative):
  * Server-side data persistence : keep track of user history
  * Front-end framework : likely Twitter Bootstrap
  * Charting/graphing : visuals for grocery spending
  * Sending emails/SMS : sending weekly financial summary to users/let user know when some food has expired or run out
  * Geolocation : find the nearest grocery store

--------------------------------------------------------------------

####Data:
  * User info: Username, password
      * Custom lists of types of food and its lifespan
      * Shopping history 
      * Financial status
      * To-Buy list

--------------------------------------------------------------------

####Algorithms:
  * Basic calculation of time averaged-costs
  * Time and date calculations

--------------------------------------------------------------------

####Pages:
  * Index: landing page; user creation/login
  * HomePage: current status; cost estimate of next shopping
  * History: see past grocery trips, and what they cost
  * Input: add a recent shopping to your profile

--------------------------------------------------------------------

#COMMENTS BY MING
* I don't understand the features.  Features are functionality that your web application will provide.
* What's the need for sending email/SMSs? Ditto for geolocation.
