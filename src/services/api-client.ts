import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c0a4bddd1da42dfa578497b25546c2a",
  },
});
