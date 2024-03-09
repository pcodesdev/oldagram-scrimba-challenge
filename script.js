
const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "assets/profile1.jpg",
    post: "assets/post-img1.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Nairobi, Kenya",
    avatar: "assets/profile2.jpg",
    post: "assets/post-img2.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "assets/profile3.jpg",
    post: "assets/post-img3.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];


// Function to render posts
function renderPosts() {
 const postsContainer = document.getElementById("posts-container");
 postsContainer.innerHTML = ''; // Clear the container before re-rendering

 posts.forEach((post, index) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    // Create post content
    postElement.innerHTML = `
      <div class="display-flex-column">
        <div class="container-profile">
          <img src=${post.avatar} alt="profile 1" class="profile-one" />
          <div class="container-profile-text">
            <h4 class="profile-name">${post.name}</h4>
            <p class="profile-place">${post.location}</p>
          </div>
        </div>
        <img src=${post.post} alt="post image" class="post-img" />

        <div class="icons">
          <img src="assets/like.png" alt="like icon" class="like-icon" data-index="${index}" />
          <img src="assets/comment.png" alt="comment icon" class="" />
          <img src="assets/share.png" alt="share icon" class="" />
        </div>
        <p class="likes-count">${post.likes}</p>
        <p>
          <span class="latest-comment">${post.username}</span>${post.comment}
        </p>
      </div>
    `;

    // Add event listener to like icon
    const likeIcon = postElement.querySelector('.like-icon');
    likeIcon.addEventListener('click', () => incrementLikes(index));

    postsContainer.appendChild(postElement);
 });
}

// Function to increment likes
function incrementLikes(index) {
 posts[index].likes++; // Increment likes
 renderPosts(); // Re-render posts to reflect the updated likes count
}

// Call the renderPosts function when the page loads
window.addEventListener("load", renderPosts);
