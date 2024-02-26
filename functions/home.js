const postButton=document.getElementById('post-btn');
const message=document.getElementById('msg');
const username=document.getElementById('username');
const tweetData=document.getElementById('tweet-data');
message.addEventListener('input',()=>{

    if(message.value.length>0)
    {
        postButton.style.backgroundColor='#1A8CD8';
    }else{
        postButton.style.backgroundColor='#0F4E78';

    }

});
postButton.addEventListener('click',()=>{

    if(message.value.length===0){
     alert('Please enter a message');
        return;
    }

    postButton.style.backgroundColor='#0F4E78';
    fetch('http://localhost:4079/api/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message.value})
    }).then(response => response.json()).then(data => {
        console.log(data);
    });
    
const username="Nitesh Gupta";
const tag ="@nit_hck";
const tweetDataDiv = document.getElementById('tweet-data');

const user_img= "../assets/profile pic.jpg"

// Create a div to contain the user's profile picture
const profilePicDiv = document.createElement('div');

profilePicDiv.classList.add('profile-img');
const profilePic = document.createElement('img');
profilePic.src = user_img;
profilePicDiv.appendChild(profilePic);


const tweetDiv1 = document.createElement('div');
tweetDiv1.textContent = username;
tweetDiv1.classList.add('username');
const tweetDiv2 = document.createElement('div');
tweetDiv2.textContent = tag;
tweetDiv2.classList.add('sub_username');

const textDiv = document.createElement('div');
textDiv.textContent = message.value;

// Append the text div to the tweet-data div
tweetDataDiv.appendChild(profilePicDiv);
tweetDataDiv.appendChild(tweetDiv1);
tweetDataDiv.appendChild(tweetDiv2);
tweetDataDiv.appendChild(textDiv);

// Array of SVG strings
const svgStrings = [
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" /></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" /></svg>`
];  
const svgDiv = document.createElement('div');
svgDiv.classList.add('tweet-icons');

// Append SVG icons to the SVG div
svgStrings.forEach(svgString => {
    const svgElement = new DOMParser().parseFromString(svgString, 'image/svg+xml').documentElement;
    svgDiv.appendChild(svgElement);

});

svgDiv.children[2].setAttribute('id', 'heart-svg');

tweetDataDiv.appendChild(svgDiv);


const heartSvg = document.getElementById('heart-svg');
heartSvg.addEventListener('click', function() {
    
    if (heartSvg.style.fill === `red`) {
        heartSvg.style.fill = 'black';
    } else {
        heartSvg.style.fill = 'red';
    }
});


message.value='';

});

