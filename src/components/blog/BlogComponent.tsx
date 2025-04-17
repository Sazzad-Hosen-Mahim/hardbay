import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
// import { blogPosts } from "../blog/blogpost"; // Import the blogPosts array
import CommonWrapper from "@/common/CommonWrapper";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useEffect } from "react";
import { fetchPosts } from "@/store/Slices/BlogSlice/blogSlice";

const BlogComponent = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts?.data);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  return (
    <div className="">
      <CommonWrapper>
        <div className="min-h-screen bg-white text-gray-800 p-4 md:p-10  mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue ">
            Blog
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Left column: blog posts */}
            <div className="col-span-3 space-y-10">
              {posts?.data.map((post) => {
                // const [month, day] = post.date.split(/\s+/);

                return (
                  <div
                    key={post.id}
                    className="bg-white border border-gray-300 rounded-2xl shadow-md p-6 flex flex-col md:flex-row md:items-start gap-6"
                  >
                    <div className="flex-shrink-0 text-center">
                      <div className="bg-gray-100 rounded-lg px-3 py-2 w-16 mx-auto">
                        <div className="text-xl font-bold text-primary-orange">
                          {post?.createdAt.slice(8, 10)}
                        </div>
                        <div className="text-xs uppercase text-primary-blue font-semibold ">
                          {new Date(post?.createdAt).toLocaleString("default", {
                            month: "short",
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-primary-blue hover:underline cursor-pointer hover:text-primary-orange ">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">
                        {post?.content}
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {post?.createdAt.slice(0, 10)}
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
            <div className="col-span-1 space-y-6 border border-gray-300 rounded-2xl shadow-md p-4">
              <h2 className="text-2xl font-semibold text-primary-orange">
                Headlines
              </h2>
              <ul className="space-y-3">
                {posts?.data.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-lg font-semibold hover:underline hover:text-primary-orange block"
                    >
                      {post.title}
                    </Link>
                    <div className="text-sm text-primary-orange">
                      {new Date(post?.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </div>
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
