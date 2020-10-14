import get from "./elements.js";
import getUser from "./fetchuser.js";
import removeActive from "./remove.js";

const img = get(".user-img");
const title = get(".user-title");
const value =  get(".user-value");
const btns = document.querySelectorAll(".icon");
const data = Array.from(btns);


const displayUser = (person) => {
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;
   removeActive(btns);
   btns[0].classList.add("active");
    btns.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener("click", ()=>{
            title.textContent = `My ${label} is`;
            value.textContent = person[label];
           removeActive(btns);
            btn.classList.add("active");
        });
    });
};

export default displayUser;