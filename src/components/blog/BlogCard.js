import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function BlogCard(data) {
    let post = data && data.data;

    return (
        <>

            <Link
                to={`/blog/post/${post.slug}`}
                className="rounded-2xl bg-white dark:bg-dark-main dark:hover:bg-dark-third transition duration-300 ease-in-out shadow-card hover:bg-gray-100 p-3 hover:opacity-90 opacity-100"
            >
                <div>
                    <Link
                        to={`/blog/categories/${post.category.id}`}
                        className="inline-block"
                    >
                        <span
                            className={`
                    ${post.category.name === "Machine Learning"
                                    ? " bg-green-100 text-green-700"
                                    : post.category.name === "Deep Learning"
                                        ? "bg-rose-100 text-rose-700"
                                        : post.category.name === "Inteligencia Artificial"
                                            ? "bg-blue-100 text-blue-700"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                } 
                    inline-flex items-center px-3 py-0.5 rounded-full text-sm font-gilroy-medium`}
                        >
                            {post.category.name}
                        </span>
                    </Link>
                </div>
                <Link to={`/blog/post/${post.slug}`} className="block mt-4">
                    <p className="text-xl font-gilroy-semibold text-gray-900 dark:text-white">
                        {post.title}
                    </p>
                    <div
                        className="my-2 text-md dark:text-dark-txt text-gray-700 font-gilroy-regular"
                        dangerouslySetInnerHTML={{
                            __html:
                                DOMPurify.sanitize(post.excerpt.length) > 60
                                    ? DOMPurify.sanitize(
                                        post.excerpt.slice(0, 100)
                                    ) + "..."
                                    : post && DOMPurify.sanitize(post.excerpt),
                        }}
                    />
                </Link>

            </Link>
        </>
    );
}

export default BlogCard;
