import blogsArray from '/data/blog-data.js'

const blogList = document.getElementById('blog-posts-list')
const recentList = document.getElementById('recent-posts-list')

const RECENT_POST_COUNT = 3;

const getPostsHTML = (parentEl, recentOnly = false) => {
    const posts = recentOnly
        ? [...blogsArray]
            .sort((a, b) =>new Date(b.date) - new Date(a.date))
            .slice(0, RECENT_POST_COUNT)
        : blogsArray
        
    return posts.map(blog => {
        let dateObj = new Date(blog.date)
        dateObj = dateObj.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
        return `
        <li class="blog-post">
            <img class="blog-post-img" src="${blog.imgUrl}" alt="${blog.alt}" width="250">
            <time class="blog-post-date" datetime="">${dateObj}</time>
            <h2 class="blog-post-name">${blog.name}</h2>
            <p class="blog-post-description">${blog.descriptionText}</p>
        </li>
    `
    }).join('')
}

if (blogList) {
    blogList.innerHTML = getPostsHTML(blogList)
} else if (recentList) {
    recentList.innerHTML = getPostsHTML(recentList, true)
}