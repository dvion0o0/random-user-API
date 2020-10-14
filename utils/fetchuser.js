const URL = "https://randomuser.me/api/";
const getUser = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // destructuring
const person = data.results[0];
const {phone, email} = person;
const {large:image} = person.picture;
const {password} = person.login;
const {first, last} = person.name;
const {age} = person.dob;
const{street:{number, name},} = person.location;

return {
    image,
    phone,
    email,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
    password,
};
};

export default getUser;