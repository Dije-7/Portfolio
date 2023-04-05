import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro/Intro'
import SectionContainer from '@/components/SectionContainer'
import { PageSEO } from '@/components/SEO'
import Works from '@/components/Work/Works'
import siteMetadata from '@/data/siteMetadata'
import HomeLayout from '@/layouts/HomeLayout'
import { allCoreContent, sortedProjectsPost } from '@/lib/utils/contentlayer'
import { allProjects } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = async () => {
  const sortedPosts = sortedProjectsPost(allProjects)
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.author} description={siteMetadata.description} />
      <SectionContainer>
        <Header />
      </SectionContainer>
      <Hero />
      <Intro />
      <Works />
      <HomeLayout> </HomeLayout>
    </>
  )
}
