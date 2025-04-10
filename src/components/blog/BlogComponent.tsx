// BlogComponent.js or BlogComponent.tsx
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../blog/blogpost"; // Import the blogPosts array
import CommonWrapper from "@/common/CommonWrapper";

const BlogComponent = () => {
  return (
    <div className="">
        <CommonWrapper>

        <div className="min-h-screen bg-white text-gray-800 p-4 md:p-10  mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue ">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left column: blog posts */}
        <div className="col-span-3 space-y-10">
          {blogPosts.map((post, index) => {
            const [month, day, year] = post.date.split(/\s+/);

            return (
              <div
                key={post.id} // Use post id as the key
                className="bg-white border border-gray-300 rounded-2xl shadow-md p-6 flex flex-col md:flex-row md:items-start gap-6"
              >
                <div className="flex-shrink-0 text-center">
                  <div className="bg-gray-100 rounded-lg px-3 py-2 w-16 mx-auto">
                    <div className="text-xl font-bold text-primary-orange">
                      {day.replace(",", "")}
                    </div>
                    <div className="text-xs uppercase text-primary-blue font-semibold ">
                      {month.slice(0, 3)}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-primary-blue hover:underline cursor-pointer hover:text-primary-orange ">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-4 text-sm text-primary-orange hover:underline"
                  >
                    See More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right column: Blog Headlines */}
        <div className="col-span-1 space-y-6 border border-gray-300 rounded-2xl shadow-md p-4  ">
          <h2 className="text-2xl font-semibold text-primary-orange">Headlines</h2>
          <ul className="space-y-3">
            {blogPosts.map((post) => (
              <li key={post.id} className="text-lg font-semibold hover:underline cursor-pointer hover:text-primary-orange">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

        </CommonWrapper>



    </div>
  
  );
};

export default BlogComponent;
