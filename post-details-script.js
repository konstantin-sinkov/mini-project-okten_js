const url = new URL(location);
const postJSON = url.searchParams.get('post');
const post = JSON.parse(postJSON);
// console.log(post);

let postBlock = document.querySelector('.post_block');
let commentsBlock = document.querySelector('.comments_block');

postBlock.innerHTML = 
    `
    <h4>Post id - ${post.id}</h4>
    <h4>Post title - ${post.name}</h4>
    <p>${post.body}</p>
    `;

function getComments() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(data => data.json())
        .then(comments => {
            for (const comment of comments) {
                let commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML =
                    `
                    user email - ${comment.email}
                    <p>${comment.body}</p>
                    `
                commentsBlock.appendChild(commentDiv);
            }
        })
}

getComments(post);




