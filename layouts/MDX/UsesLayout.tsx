import { PageSEO } from '@/components/SEO'
import type { Authors } from 'contentlayer/generated'
import { ReactNode } from 'react'
import ContactForm from './ContactForm'
interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function UsesLayout({ children, content }: Props) {
  const { name } = content

  return (
    <>
      <PageSEO title={`Uses - ${name}`} description={`What I Use - ${name}`} />
      <div className="pt-8">
        <div className="mb-8 flex flex-col space-y-2 text-center">
          <center>
            <h1 className="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Contact me
            </h1>
            I'll respond faster than my code compiles.
          </center>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ContactForm />
        </div>
        <br />
        <div>
          <center>{children}</center>
        </div>
      </div>
    </>
  )
}
