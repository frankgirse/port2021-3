import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'

import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen bg-gray-700">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                {/*<div className="mr-3 ml-10 lg:w-24 xl:w-36 ">
                  <Image
                    src="/LogoGyn.png"
                    alt="Logo Frauenheilkunde"
                    height="100"
                    width="170"
                    layout="responsive"
                  ></Image>
  </div>*/}
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden ml-10 h-8 text-1xl text-yellow-700 font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-3 uppercase font-sans lg:ml-10  font-bolt bg-gray-700 hover:font-bold hover:bg-gray-600 rounded-2xl text-base text-gray-100 hover:border-b-4 hover:border-gray-700 hover:text-yellow-600 sm:p-4 lg:text-1xl xl:text-2xl dark:text-gray-400"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
