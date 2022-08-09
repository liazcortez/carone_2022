import axios from "axios";
let baseURL;
let dpxURL = "https://dealerproxapi.com/api/v1";
if (process.env.NODE_ENV === "production") {
  baseURL = "https://apicarone.com/api/v1";
} else {
  //baseURL = "https://apicarone.com/api/v1";
  baseURL = "http://localhost:5001/api/v1";

  // dpx url for devs
  // dpxURL = "http://localhost:5000/api/v1";
}
export { baseURL, dpxURL };

export default axios.create({
  baseURL: baseURL,
});
