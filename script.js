let usersBlock = document.getElementsByClassName('users_block')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(users => {
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');

            userDiv.innerHTML = `<h4>${user.id}) -- ${user.name}</h4>`;

            

        }
    })