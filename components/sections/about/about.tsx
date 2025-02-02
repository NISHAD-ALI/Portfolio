'use client'

import { useSectionInView } from '@/lib/hooks'
import { motion, useScroll, useTransform } from 'framer-motion'
import portfolioImg from '@/public/images/WhatsApp Image 2024-07-31 at 12.57.12 PM.jpeg'
import Image from 'next/image'
import SectionDivider from '@/components/shared/section-divider'
import { useRef } from 'react'
import SectionHeading from '@/components/shared/section-heading'
import Link from 'next/link'
import { smoothScrollTo } from '@/lib/utils'

export default function About() {
  const { ref } = useSectionInView('about', 0.4)
  const divRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.section
      className="flex flex-col md:scroll-mt-4 lg:scroll-mt-24 items-center justify-start leading-8 h-[1000px] lg:h-[1100px] z-50 w-full dark:bg-darkBg dark:text-white"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex flex-col items-center w-full pt-56">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          className="w-full sm:w-[60%] sm:text-center lg:w-[1040px] xl:w-[1180px] lg:h-[700px] overflow-hidden py-12 px-4"
          ref={divRef}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
        >
          <div className="relative group w-full">
            <div className="flex flex-col gap-3 relative lg:text-start lg:block lg:absolute lg:right-0 lg:top-[27%] xl:top-1/3 lg:max-w-[580px] xl:max-w-[650px] text-md lg:text-lg z-40 font-semibold tracking-wide text-primary xl:h-[442px]">
              <div className="flex flex-col gap-6 justify-center h-full">
                <span>
                  I&apos;m Nishad Ali, a skilled full-stack developer proficient in the MERN Stack. 
                  I aim to leverage my expertise in creating innovative web applications. 
                  I have a strong foundation in HTML, CSS, TypeScript, JavaScript, React, Node.js, Express.js, and MongoDB, and 
                  I&apos;m committed to delivering robust, user-friendly solutions that align with industry standards.
                </span>
                <span>
                  As a dedicated self-learner, 
                  I&apos;m focused on continuous improvement and embracing new technologies to stay ahead in the field.
                </span>
                <p className="flex flex-col items-start sm:items-center lg:items-start">
                  <Link
                    href={'contact'}
                    onClick={(e) => {
                      smoothScrollTo({ e, id: 'contact' })
                    }}
                    className="w-52 lg:w-40"
                  >
                    <span className="text-2xl font-bold dark:bg-[#ddbea9] uppercase lg:normal-case bg-[#ffcbb4]">
                      Contact me!
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="absolute hidden lg:block lg:left-0 lg:top-1/4 z-30">
              <div className="relative w-72 h-72 lg:w-[380px] lg:h-[380px] xl:w-[430px] xl:h-[440px]">
                <div className="bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] rounded-full z-20"></div>
                <div className="absolute inset-0">
                  <Image
                    src={portfolioImg}
                    alt="portfolio image"
                    placeholder="blur"
                    width={470}
                    height={470}
                    className="rounded-full z-10 lg:w-[380px] lg:h-[380px] xl:w-[390px] xl:h-[450px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </motion.section>
  )
}
