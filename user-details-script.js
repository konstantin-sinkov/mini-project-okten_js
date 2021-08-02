console.log(location.href);

const url = new URL(location); //make url from current location
const userJSON = url.searchParams.get('user');
const user = JSON.parse(userJSON);


console.log(user);