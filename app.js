import get from "./utils/elements.js";
import getUser from "./utils/fetchuser.js";
import display from "./utils/display.js";

const btn = get(".btn");

const showUser = async () => {
// get user from api
const person = await getUser();
// display user
display(person);
};


window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);