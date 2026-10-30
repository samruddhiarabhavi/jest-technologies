import { motion } from 'framer-motion'
import ArchViz from '../components/ArchViz'

const words = 'We Engineer Ideas Into Digital Products.'.split(' ')

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 sm:pt-36">
      <div className="grid-bg absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </motion.p>
          <h1 className="mt-7 text-[2.9rem] font-extrabold leading-[0.98] sm:text-6xl lg:text-[4.6rem]">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-1.5 align-bottom">
                <motion.span
                  className={'inline-block ' + (w === 'Ideas' ? 'text-accent' : '')}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-7 max-w-xl text-lg text-mute"
          >
            JEST Technologies builds high-performance web platforms, intelligent applications and scalable software systems that turn ambitious ideas into products people actually use.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#contact" className="btn btn-accent">Start a Project</a>
            <a href="#projects" className="btn btn-ghost">Explore Our Work</a>
          </motion.div>
        </div>
        <ArchViz />
      </div>
    </section>
  )
}
