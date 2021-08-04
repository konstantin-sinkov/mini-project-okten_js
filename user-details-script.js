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
    <h4>${user.username}</h4>
    <h5>${user.name}</h5>
    <p>email - ${user.email}</p>
    <p>phone number - ${user.phone}</p>
    <p>user website - ${user.website}</p>
    `;

userAdressBlock.innerHTML = `
    <h4>USER ADRESS</h4>
    <p>city - ${user.address.city}</p>
    <p>street - ${user.address.street}</p>
    <p>suite - ${user.address.suite}</p>
    <p>zipcode - ${user.address.zipcode}</p>
    <h6>coord</h6>
    <p>lat - ${user.address.geo.lat}</p>
    <p>lng - ${user.address.geo.lng}</p>
    `;

userCompanyBlock.innerHTML = `
    <h4>USER ADRESS</h4>
    <p>user company - ${user.company.catchPhrase}</p>
    <p>catch phrase - ${user.company.companyName}</p>
    <p>bs - ${user.company.bs}</p>
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