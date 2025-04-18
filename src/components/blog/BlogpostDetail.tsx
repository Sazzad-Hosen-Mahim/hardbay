import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../blog/blogpost";
import CommonWrapper from "@/common/CommonWrapper";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useEffect } from "react";
import { fetchBlogDetails } from "@/store/Slices/BlogSlice/blogDetailsSlice";

const BlogPostDetail = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useAppDispatch();

  const { post } = useAppSelector((state) => state.blogDetails);

  if (!id) {
    return <div>Post not found!</div>;
  }

  useEffect(() => {
    dispatch(fetchBlogDetails(id));
  }, [dispatch, id]);

  if (!post) {
    return <div>Post not found!</div>;
  }

  console.log(post);

  return (
    <CommonWrapper>
      <div className="bg-white p-4 md:p-10 mx-auto flex flex-col md:flex-row gap-10 mt-16">
        {/* Left column: Blog Post Detail */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue">
            {post.title}
          </h1>
          <p className="text-base text-primary-orange">
            {new Date(post?.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
          <div>
            <img src={post.image} alt="" className="w-[90%] lg:h-[500px]" />
          </div>
          <div className="text-lg text-primary-blue">{post.content}</div>
        </div>

        {/* Right column: Blog Headlines (auto-height) */}
        <div className="w-full md:w-[300px] space-y-6 border border-gray-300 rounded-2xl shadow-md p-4 self-start">
          <h2 className="text-2xl font-semibold text-primary-orange">
            Headlines
          </h2>
          <ul className="space-y-3">
            {blogPosts.map((post) => (
              <li
                key={post.id}
                className="text-lg font-semibold hover:underline cursor-pointer hover:text-primary-orange"
              >
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default BlogPostDetail;
