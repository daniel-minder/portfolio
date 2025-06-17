import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import type { SlideType } from '../data'
import { Miniature } from './Miniature'

export const MiniatureCarousel = ({ slides, selectedIndex, onClick }: { slides: SlideType[], selectedIndex: number, onClick: (index: number) => void }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    align: 'start',
    startIndex: 1
  })

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(selectedIndex, false)
    }
  }, [selectedIndex, emblaApi])

  return (
    <div className="embla overflow-x-hidden h-[150px] w-[95%] px-10 self-center flex items-center justify-center gap-8 cursor-grab select-none" ref={emblaRef}>
      <div className="embla__container flex gap-8">
        {slides.map((slide, index) => (
          <Miniature key={index} image={slide.miniature} active={index === selectedIndex} onClick={() => onClick(index)} />
        ))}
      </div>
    </div>
  )
}