console.log(location.href);

const url = new URL(location); //make url from current location
const userJSON = url.searchParams.get('user');
const user = JSON.parse(userJSON);

let userDetailsBlock = document.querySelector(".user_details_block");
let userNameBlock = document.querySelector(".user_name_block");
let userAdressBlock = document.querySelector(".user_address_block");
let userCompanyBlock = document.querySelector(".user_company_block");

const userPostsBtn = document.createElement('button');
userPostsBtn.classList.add('posts_btn');
userPostsBtn.innerText = 'posts of current user';
userDetailsBlock.appendChild(userPostsBtn);

userNameBlock.innerHTML = `
    <h3><b>${user.username}</b></h3>
    <h4><b>${user.name}</b></h4>
    <p><b>email</b> - ${user.email}</p>
    <p><b>phone number</b> - ${user.phone}</p>
    <p><b>user website</b> - ${user.website}</p>
    `;

userAdressBlock.innerHTML = `
    <h4><u>USER ADRESS</u></h4>
    <p><b>city</b> - ${user.address.city}</p>
    <p><b>street</b> - ${user.address.street}</p>
    <p><b>suite</b> - ${user.address.suite}</p>
    <p><b>zipcode</b> - ${user.address.zipcode}</p>
    <h5><u>coord</u></h5>
    <p><b>lat</b> - ${user.address.geo.lat}</p>
    <p><b>lng</b> - ${user.address.geo.lng}</p>
    `;

userCompanyBlock.innerHTML = `
    <h4><u>USER COMPANY</u></h4>
    <p><b>user company</b> - ${user.company.catchPhrase}</p>
    <p><b>catch phrase</b> - ${user.company.companyName}</p>
    <p><b>bs</b> - ${user.company.bs}</p>
    `;

const userPostsBlock = document.querySelector('.user_posts_block');

userPostsBtn.onclick = function () {
    userPostsBlock.innerHTML = '';
    userPostsBlock.classList.toggle('flex');

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(data => data.json())
        .then(posts => {
            for (const post of posts) {
                const postDiv = document.createElement('div');
                const postDetailsBtn = document.createElement('button');
                postDiv.innerHTML = `<p>${post.title}</p>`;

                //info about current post in query params
                let postDetailsLink = `post-details.html?post=${JSON.stringify(post)}`;

                postDetailsBtn.innerHTML = `<a href='${postDetailsLink}'>DETAILS INFO</a>`;
                postDiv.classList.add('post');
                postDiv.classList.add('flex');
                postDiv.appendChild(postDetailsBtn);

                userPostsBlock.appendChild(postDiv);
            }
        })
}


    console.log(user);