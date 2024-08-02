

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "Going all-in with millennial design",
            date: "12th Oct 2022",
            readTime: "5 min",
            image: "path_to_image_1"
        },
        {
            id: 2,
            title: "Going all-in with millennial design",
            date: "12th Oct 2022",
            readTime: "5 min",
            image: "path_to_image_2"
        },
        {
            id: 3,
            title: "Going all-in with millennial design",
            date: "12th Oct 2022",
            readTime: "5 min",
            image: "path_to_image_3"
        }
    ];
    return (
        <div className="blog-section">
            <h2>Our Blogs</h2>
            <p>Find a bright idea to suit your taste with our great selection</p>
            <div className="blogs">
                {blogs.map(blog => (
                    <div className="blog-card" key={blog.id}>
                        <img src={blog.image} alt={blog.title} />
                        <h3>{blog.title}</h3>
                        <button>Read More</button>
                        <div className="blog-info">
                            <span>🕒 {blog.readTime}</span>
                            <span>📅 {blog.date}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="view-all">View All Post</button>
        </div>
    );
};