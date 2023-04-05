import { sortedProjectsPost } from '@/lib/utils/contentlayer'
import { allProjects } from 'contentlayer/generated'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import {
  HiOutlineDocumentAdd,
  HiOutlineDocumentDuplicate,
  HiOutlineHome,
  HiOutlinePencil,
  HiOutlineUser,
} from 'react-icons/hi'
import { TbBolt, TbBoltOff } from 'react-icons/tb'

type PaletteOption = {
  id: string
  name: string
  onSelect: (v: string) => void
  icon?: ReactNode
}

export default function usePaletteOptions() {
  const router = useRouter()
  const sortedPosts = sortedProjectsPost(allProjects)
  const { theme, setTheme } = useTheme()

  const generalOptions: PaletteOption[] = [
    {
      id: 'Toggle Theme',
      name: 'Toggle Theme',
      icon: theme === 'dark' ? <TbBolt /> : <TbBoltOff />,
      onSelect: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    },
    {
      id: 'Copy Current URL',
      name: 'Copy Current URL',
      icon: <HiOutlineDocumentDuplicate />,
      onSelect: () => navigator.clipboard.writeText(window.location.href),
    },
  ]

  const pageOptions: PaletteOption[] = [
    { id: '/', name: 'Home', icon: <HiOutlineHome />, onSelect: (v) => router.push(v) },
    {
      id: '/Projects',
      name: 'Projects',
      icon: <HiOutlinePencil />,
      onSelect: (v) => router.push(v),
    },
    { id: '/about', name: 'About', icon: <HiOutlineUser />, onSelect: (v) => router.push(v) },
    { id: '/uses', name: 'Uses', icon: <HiOutlineDocumentAdd />, onSelect: (v) => router.push(v) },
  ]

  const ProjectsOptions: PaletteOption[] = sortedPosts.map((post) => ({
    id: post.slug,
    name: post.title,
    onSelect: (v) => router.push(`/Projects/${v}`),
  }))

  return { pageOptions, ProjectsOptions, generalOptions }
}
