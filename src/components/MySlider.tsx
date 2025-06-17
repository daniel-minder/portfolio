import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { slideList, type SlideType } from "../data"
import { MiniatureCarousel } from "./MiniatureCarousel"
import { Slide } from "./Slide"

export const MySlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, startIndex: 1 })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const slides: SlideType[] = slideList

  const stopAllVideos = () => {
    const iframes = document.querySelectorAll("iframe")
    iframes.forEach((iframe) => {
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        "*"
      )
    })
  }

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', () => {
      onSelect()
      stopAllVideos()
    })
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="overflow-hidden w-full flex-grow" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <Slide key={index} slide={slide} scrollNext={{ func: () => scrollTo(selectedIndex + 1), visible: index !== slides.length - 1 }} scrollPrev={{ func: () => scrollTo(selectedIndex - 1), visible: index !== 0 }} />
          ))}
        </div>
      </div>
      <div className="hidden lg:flex px-8 flex-wrap items-center justify-center gap-8">
        {/* {slides.map((slide, index) => (
          <Miniature key={index} image={slide.miniature} active={index === selectedIndex} onClick={() => scrollTo(index)} />
        ))} */}
      </div>
      <MiniatureCarousel slides={slides} selectedIndex={selectedIndex} onClick={(index: number) => scrollTo(index)} />
    </div>
  )
}