var destinations = {
  id: "", //mongo id
  img: "string",
  name: "string",
  description: "string",
  category_id: "", // foreign key / ref
  state: "string", //two letter state code
  country: "", //two/three letter country code
  temperature: "Number",
  temperature_timestamp: "Number",
  weather: "Number",
  vaccination_rate: "Number", // in percentage
  safety_rating: "Number", //TODO: to be clarified
};

var attractions = {
  id: "",
  destination_id: "", // foreign key / ref
  img: "string", // link to static image
  name: "string",
  description: "string",
  state: "string", //two letter state code
  country: "", //two/three letter country code
  rating: "",
  timing: "",
  entry_fee: "",
  pincode: "string",
  google_business_url: "",
};

var activities = {
  id: "",
  destination_id: "", // foreign key / ref
  img: "string",
  name: "string",
  description: "string",
  state: "string", //two letter state code
  country: "", //two/three letter country code
  rating: "",
  timing: "",
  entry_fee: "",
  pincode: "",
  google_business_url: "",
};

var categories = {
  img: "url",
  name: "string",
  description: "string",
};

var userAccounts = {
  // should refer to interest schema and bookings schema
  name: "string",
  email: "string",
  mobile_num: "Number",
  interest: "Array of id",
  img: "url",
  completed_trips: "", // array of objects
  ongoing_trips: "", // array of objects
  password: "",
};

var bookings = {
  trip_name: "",
  destination_id: "", // foreign key / ref
  user_id: "", // foreign key / ref
  start_date: "",
  end_date: "",
  hotel_name: "",
};

var trip_planning = {
  id: "",
  name: "",
  plan: [
    {
      order: "Number",
      date: "Date",
      time: "",
      destination_id: "",
      attraction_id: "",
      activity_id: "",
      cost: "",
      directions: "",
      user_notes: "",
      mode_of_transport: "",
      hrs_inteneded_to_spend: "",
    },
  ],
};

var reviews = {
  id: "",
  description: "",
  user_id: "",
  is_anonymous_review: "boolean",
  attraction_id: "",
  activity_id: "",
  destination_id: "", // denormalized
};

// Systems thinking brainstorming

// Personas
/**
 * Traveller-subscriber/user
 * Non-tech Admins (Who'll manage locations activites and attractions)
 * Biz team - who'll need access to dashboards to decide things like :
 * - what attractions,activities,places to promote.
 * - which ones bring most in terms of revenue
 */

// User Story
/**
 * As a traveller I should be able to :
 * - See list of popular destinations
 * - Explore popular attractions and activities in a destination
 * - Be informed about lesser known activities and attractions
 * - Know the safety track record of the region
 * - Know emergency information (Hospitals, Fire Services, Police Departments)
 * - Find direction to attraction, acitivty, destination from my location
 *
 * As a attraction owner I should be able to :
 * - Know bookings against my biz
 * - Know my ranking
 * - How to improve my ranking
 * - Optionally promote through paid promotion
 * - Access to dashboard which will allow me to do the above
 * ....
 *
 * As a biz (app's) admin I should be able to :
 * - ....
 *
 * As a biz (app's) sales person I should be able to :
 * - ....
 *
 * As a tech support person I should be able to :
 * - See the logs to look for errors, warning or diagnostic information when something goes wrong
 * - Access user's account information
 * - Be alerted when there are critical errors that needs attention
 */
