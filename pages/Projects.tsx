import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import MainLayout from '@/layouts/MainLayout'
import ListLayout from '@/layouts/MDX/ListLayout'
import { allCoreContent, sortedProjectsPost } from '@/lib/utils/contentlayer'
import { allProjects } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

export const POSTS_PER_PAGE = 5

export const getStaticProps = async () => {
  const activePosts = allProjects.filter((p) => p.draft === false)
  const posts = sortedProjectsPost(activePosts)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
      pagination,
    },
  }
}

export default function Projects({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Projects"
      />
    </MainLayout>
  )
}
