import Swal from "sweetalert2";
import type { SlideType } from "../data";

const getYouTubeId = (url: string) => {
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export const Slide = ({ slide, scrollNext, scrollPrev }: { slide: SlideType, scrollNext: { func: () => void, visible: boolean }, scrollPrev: { func: () => void, visible: boolean } }) => {
  return (

    // <div className="w-full flex-shrink-0 cursor-grab select-none">
    //   {slide.type === 'home' ? (
    //     <HomeSlide slide={slide} />
    //   ) : slide.type == 'me' ? (
    //     <MeSlide slide={slide} />
    //   ) : (
    //     <ProjectSlide slide={slide} />
    //   )}
    // </div>

    <div className="relative w-full flex-shrink-0 cursor-grab select-none">
      <div onClick={scrollPrev.func} className={`cursor-pointer ${scrollPrev.visible ? '' : 'hidden cursor-default'} hidden absolute lg:flex items-center justify-center left-0 top-0 h-full w-[50px] z-10`}>
        <img src={`${import.meta.env.BASE_URL}arrow-left.svg`} className={`${scrollPrev.visible ? '' : 'hidden cursor-auto'} w-[30px] aspect-square rounded-full`} />
      </div>
      <div onClick={scrollNext.func} className={`cursor-pointer ${scrollNext.visible ? '' : 'hidden cursor-default'} hidden absolute lg:flex items-center justify-center right-0 top-0 h-full w-[50px] z-10`}>
        <img src={`${import.meta.env.BASE_URL}arrow-right.svg`} className={`${scrollNext.visible ? '' : 'hidden cursor-auto'} w-[30px] aspect-square rounded-full`} />
      </div>

      <div onClick={scrollPrev.func} className={`cursor-pointer ${scrollPrev.visible ? '' : 'hidden cursor-default'} flex absolute lg:hidden items-end justify-center left-0 top-0 h-full w-[30px] z-10`}>
        <img src={`${import.meta.env.BASE_URL}swipe-left.svg`} className={`${scrollPrev.visible ? '' : 'hidden cursor-auto'} w-[20px] aspect-square rounded-full`} />
      </div>
      <div onClick={scrollNext.func} className={`cursor-pointer ${scrollNext.visible ? '' : 'hidden cursor-default'} flex absolute lg:hidden items-end justify-center right-0 top-0 h-full w-[30px] z-10`}>
        <img src={`${import.meta.env.BASE_URL}swipe-right.svg`} className={`${scrollNext.visible ? '' : 'hidden cursor-auto'} w-[20px] aspect-square rounded-full`} />
      </div>

      {slide.type === 'home' ? (
        <HomeSlide />
      ) : slide.type === 'me' ? (
        <MeSlide slide={slide} />
      ) : (
        <ProjectSlide slide={slide} />
      )}
    </div>
  )
}

const HomeSlide = () => {
  const downloadResume = (url: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = ''
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const chooseLanguageAndDownload = () => {
    Swal.fire({
      title: 'Please choose the language of the resume you want to download',
      showDenyButton: true,
      confirmButtonText: 'English',
      denyButtonText: 'Polish',
      icon: 'question',
      customClass: {
        confirmButton: 'my-btn my-btn-confirm',
        denyButton: 'my-btn my-btn-deny',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        downloadResume('/resume_en.pdf')
      } else if (result.isDenied) {
        downloadResume('/resume_pl.pdf')
      }
    })
  }

  return (
    <div className="flex h-full lg:flex-row w-full gap-8 px-4 lg:px-8 xl:px-16 font-montserrat items-center justify-center">
      <div className="w-full lg:w-[600px] break-words text-wrap text-center font-light tracking-wider">
        <h1 className="text-[50px] tracking-wider font-gothic text_shadow font-bold">GAME & LEVEL DESIGNER</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at fermentum nisl, vitae condimentum dui. Duis laoreet odio vitae ante placerat tempor. Aliquam tincidunt, enim et <Label title="Label!!" color="#9D00FF" color2="#590091" /> porttitor, justo felis tincidunt massa, maximus efficitur ex tortor a lacus.  Morbi commodo volutpat ligula sed faucibus. Praesent fringilla pulvinar scelerisque. Donec vel ultricies enim, vel ornare purus. Pellentesque dictum ante odio, non pretium dui molestie sed. Suspendisse consequat egestas volutpat. Sed mollis magna eu leo interdum, et mattis nisi consectetur. Suspendisse vel gravida nisl. Ut congue metus a varius tempus. Vestibulum a tristique mi, eget condimentum risus. Vivamus nec risus viverra, dictum neque varius, facilisis orci. Suspendisse luctus vel eros eu mollis. Duis lacinia commodo mollis. Morbi ut libero a libero accumsan aliquam.</p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <a href="https://www.linkedin.com/in/daniel-minder/" target="_blank">
            <img src={`${import.meta.env.BASE_URL}/linkedin.svg`} className="w-16 h-16 aspect-square transition-all duration-200 ease-in-out transform grayscale hover:grayscale-0" />
          </a>
          <a href="mailto:minder.daniel44@gmail.com" target="_blank">
            <img src={`${import.meta.env.BASE_URL}/mail.svg`} className="w-16 h-16 aspect-square transition-all duration-200 ease-in-out transform grayscale hover:grayscale-0" />
          </a>
          <a href="https://www.facebook.com/daniel.g.minder" target="_blank">
            <img src={`${import.meta.env.BASE_URL}/facebook.svg`} className="w-16 h-16 aspect-square transition-all duration-200 ease-in-out transform grayscale hover:grayscale-0" />
          </a>
          <a onClick={() => chooseLanguageAndDownload()}>
            <img src={`${import.meta.env.BASE_URL}/cv2.svg`} className="w-16 h-16 aspect-square transition-all duration-200 ease-in-out transform grayscale hover:grayscale-0" />
          </a>
        </div>
      </div>
    </div>
  )
}

const MeSlide = ({ slide }: { slide: SlideType }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 px-4 lg:px-8 xl:px-16 font-montserrat">

      {/* Left - Video (3/5 width) */}
      <div className="w-full lg:w-1/3">
        <div className="aspect-square w-full">
          <img
            src={`${import.meta.env.BASE_URL}/slides/${slide.image}`}
            alt={slide.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Right - Description (2/5 width) */}
      <div className="w-full lg:w-2/3 flex flex-col gap-3 items-start justify-normal">
        <h1 className="text-[40px] font-gothic text_shadow font-bold mb-[-15px]">{slide.name}</h1>
        <div className="flex gap-2">
          {slide.labels.map((label, index) => (
            <Label key={index} title={label.name} color={label.color} color2={label.color2} />
          ))}
        </div>
        {slide.description &&
          <div className="flex flex-col gap-4">
            {slide.description.map((description, index) => (
              <p key={index} className="text-justify text-[14px]">{description}</p>
            ))}
          </div>
        }
        {slide.dots &&
          <ul className="list-disc pl-5 font-semibold text-[14px]">
            {slide.dots.map((dot, index) => (
              <li key={index}>{dot}</li>
            ))}
          </ul>
        }
        {slide.links &&
          <div className="flex gap-2 text-[14px]">
            {slide.links.map((link, index) => (
              <>
                <a key={index} href={link.link}>{link.name}</a>
                {index !== slide.links.length - 1 ? '•' : null}
              </>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

const ProjectSlide = ({ slide }: { slide: SlideType }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 px-4 lg:px-8 xl:px-16 font-montserrat">

      {/* Left - Video (3/5 width) */}
      {slide.iframe ? (
        <div className="w-full lg:w-3/5">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${getYouTubeId(slide.iframe)}?enablejsapi=1`}
              title={slide.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="w-full lg:w-3/5">
          <div className="aspect-video w-full">
            <img
              src={`${import.meta.env.BASE_URL}/slides/${slide.image}`}
              alt={slide.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Right - Description (2/5 width) */}
      <div className="w-full lg:w-2/5 flex flex-col gap-3 items-start justify-normal pb-10">
        <h1 className="text-[40px] font-gothic text_shadow font-bold mb-[-15px]">{slide.name}</h1>
        <div className="flex gap-2">
          {slide.labels.map((label, index) => (
            <Label key={index} title={label.name} color={label.color} color2={label.color2}/>
          ))}
        </div>
        {slide.description &&
          <div className="flex flex-col gap-4">
            {slide.description.map((description, index) => (
              <p key={index} className="text-justify text-[14px]">{description}</p>
            ))}
          </div>
        }
        {slide.dots &&
          <ul className="list-disc pl-5 font-semibold text-[14px]">
            {slide.dots.map((dot, index) => (
              <li key={index}>{dot}</li>
            ))}
          </ul>
        }
        {slide.links &&
          <div className="flex gap-2 text-[14px]">
            {slide.links.map((link, index) => (
              <>
                <a className="hover:underline" key={index} href={link.link}>{link.name}</a>
                {index !== slide.links.length - 1 ? '•' : null}
              </>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export const Label = ({ title, color, color2 }: { title: string, color: string, color2?: string }) => {
  return (
    <span className={`font-normal tracking-wider text-[12px] font-roboto_mono rounded-md text-white py-[3px] px-[10px]`} style={{ backgroundImage: `linear-gradient(to bottom right, ${color}, ${color2 ?? color})` }}>{title}</span>
  )
}