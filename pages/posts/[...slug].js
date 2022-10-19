import { getMdxNode, getMdxPaths } from "next-mdx/server"

export default function DetailPage({ post }) {
    console.log(post)
    return <div className="site-container">
        <article>
            <h1 className="text-2xl font-bold">{post.frontMatter.title}</h1>
            <p className="my-2">{post.frontMatter.excerpt}</p>
            <hr className="my-4"></hr>
            <div>{post.content}</div>
        </article>
    </div>
}

export async function getStaticPaths() {
    return {
        paths: await getMdxPaths("post"),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const post = await getMdxNode("post", context)

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post,
        },
    }
}