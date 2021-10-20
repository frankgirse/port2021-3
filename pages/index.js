import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import styles from '../css/Home.module.css'

import { Divider } from 'rsuite'

import NewsletterForm from '@/components/NewsletterForm'
import Image from 'next/image'
const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <main className={styles.main}>
        <h1 className="text-4xl font-semibold font-sans text-gray-500 xl:text-6xl">
          Dr. med. Frank Girse
        </h1>
        <Divider style={{  marginTop: "-13vh" , borderWidth: 1, width: '60vw' , borderColor: 'darkgray' }} />

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Referenz &rarr;</h2>
            <p>
              Dr.med. Markus Kuther
              <br />
              CA Frauenklinik
              <br />
              Perinatal Zentrum <br />
              Kantonsspital Thurgau{' '}
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Äquivalenznachweis MEDI: &rarr;</h2>
            <p>Approbation - FA Nachweis </p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h2>Promotion &rarr;</h2>
            <p>
              Qualitétskontrolle prognostischer Faktoren am Mammakarzinom
              <br />
              Professor J. Thorhorst Basel
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <wrapper className="">
              <div className="card" style={{ width: '10rem' }}>
                <div className="w-12/12">
                  <Image
                    src="/portrait63sw.png"
                    // just put the original width and height of the original image, in order to provide the right aspect ratio
                    // Next.js will automatically reduce the size if the rendered image needs to be smaller.
                    width={400 }
                    height={641}
                    layout="responsive"
                    alt="Portrait-3"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary"></a>
                </div>
              </div>
            </wrapper>
          </a>
        </div>
      </main>
    </>
  )
}
