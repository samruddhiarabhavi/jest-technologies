import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'

const Legal = lazy(() => import('./pages/Legal'))

export default function App() {
  const location = useLocation()
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route
            path="/privacy"
            element={<PageTransition><Suspense fallback={null}><Legal kind="privacy" /></Suspense></PageTransition>}
          />
          <Route
            path="/terms"
            element={<PageTransition><Suspense fallback={null}><Legal kind="terms" /></Suspense></PageTransition>}
          />
          <Route path="*" element={<PageTransition><Home /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </MotionConfig>
  )
}
