import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import wtfLogo from '@/images/logo/wtf-logo.png'
import vitalikLogo from '@/images/logo/vitalik.jpg'
import opLogo from '@/images/logo/op-logo.svg'
import dapplearningLogo from '@/images/logo/dapplearning-logo.webp'
import pkuLogo from '@/images/logo/pku-logo.webp'
import thubaLogo from '@/images/logo/thuba-logo.webp'
import upchainLogo from '@/images/logo/learnblockchain-logo.webp'
import ethFound from '@/images/logo/ethereum-foundation-logo.svg'
import starknet from '@/images/logo/starknet-logo.svg'
import imageLaptop from '@/images/laptop.png'
import bitcoinLogo from '@/images/logo/bitcoin.jpg'
import ethereumLogo from '@/images/logo/ethereum.png'
import confluxLogo from '@/images/logo/conflux-logo.png'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Bitcoin', bitcoinLogo],
  ['Ethereum', ethereumLogo],
  ['confluxLogo', confluxLogo],
  ['Optimism', opLogo],
  ['WTFSolidity', wtfLogo],
  // ['Dapping Learning', dapplearningLogo],
  ['thubaLogo', thubaLogo],
  ['PKUBlockchain', pkuLogo],
  ['upChainLogo', upchainLogo],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We're working with people from lots of amazing community
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image
                    src={logo}
                    alt={client}
                    unoptimized
                    style={{ maxWidth: '98px' }}
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing Blockchain for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe Web3 is one of the answers to the world’s greatest
          challenges. so we want to welcome 1 billion users into Web3.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  {/* <Link href={caseStudy.href}> */}
                  {/* <Link href={caseStudy.href}> */}
                  <span className="absolute inset-0 rounded-3xl" />
                  <Image
                    src={caseStudy.logo}
                    alt={caseStudy.client}
                    className="h-16 w-16"
                    unoptimized
                  />
                  {/* </Link> */}
                </h3>
                {/* <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p> */}
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        // eyebrow="Services"
        title="Enables creators, communities, developers and markets to connect across borders"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Build Infrastructure">
              We are committed to building high-quality Conflux infrastructure,
              aiming to enhance user interactions on the Conflux platform and
              significantly improve the efficiency and experience for
              developers.
            </ListItem>
            <ListItem title="Connect Community ">
              We are harnessing the strength of Conflux community, every FC/CFX
              holder is an integral part of us.
            </ListItem>
            {/* TODO: Update the following two Item */}
            <ListItem title="Developer Friendly">
              better developer experience We are at the forefront of modern
              e-commerce development.
            </ListItem>
            <ListItem title="Asian, African and Latin American markets">
              Asian, African and Latin American markets At Studio we understand
              the importance of having a xxx
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-semibold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            ConfluxDAO
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Shaping the Future, Uniting Conflux Believers, <br />
            Keep Building Conflux ecosystem and community.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: vitalikLogo }}
      >
        The community is the most important part. Code determines what a
        platform can do now, but the community decides what a platform can do in
        the future. Moreover, whether it's for blockchain or any software
        ecosystem, enabling people to participate and feel welcome is crucial,
        and this isn't something that can be achieved through code alone.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
