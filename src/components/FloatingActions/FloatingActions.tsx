import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Actions, BackToTopButton, WhatsAppButton } from './styles'
import { WhatsAppIcon } from '../../assets/icons/WhatsAppIcon'

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Actions>
      <BackToTopButton
        href="#home"
        $visible={showBackToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp size={19} strokeWidth={2.2} />
      </BackToTopButton>
      <WhatsAppButton
        href="https://wa.me/5511949273405?text=Ol%C3%A1%20Leonardo!%20Encontrei%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact me on WhatsApp"
        title="Contact me on WhatsApp"
      >
        <WhatsAppIcon />
      </WhatsAppButton>
    </Actions>
  )
}