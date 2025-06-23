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
        downloadResume(`{import.meta.env. BASE_URL}/resume.en.pdf`)
      } else if (result.isDenied) {
        downloadResume('{import.meta.env. BASE_URL}/resume_pl.pdf')
      }
    })
  }

  return (
    <div className="flex h-full lg:flex-row w-full gap-8 px-4 lg:px-8 xl:px-16 font-montserrat items-center justify-center">
      <div className="w-full lg:w-[700px] break-words text-wrap text-center font-light tracking-wider">
        <h1 className="text-[50px] tracking-wider font-gothic text_shadow font-bold">GAME DESIGNER & DEVELOPER</h1>
        <p className="leading-8">
          My name is <span className="italic">Daniel Minder</span>, and I’m a Game Designer with over 6 years of industry experience. I’ve had the pleasure of working on projects of various scales and genres, allowing me to hone my skills in <br />
          <Label title="GAME DESIGN" color="#e14538" color2="#c02320" /> , <Label title="LEVEL DESIGN" color="#b76700" color2="#984e00" /> , <Label title="SCRIPTING" color="#948f1f" color2="#6c6b00" /> and <Label title="CUTSCENE DIRECTING" color="#008957" color2="#006f3f" /> .<br /> Working in game development is incredibly fulfilling for me, as games are my true passion. I’m particularly interested in areas such as User Experience, <br /> User Interface, and player psychology. No matter the project, my ultimate goal is always to deliver an exceptional experience for players.
        </p>  
        <div className="flex items-center justify-center gap-4 pt-4">
          <a href="https://www.linkedin.com/in/daniel-minder/" target="_blank">
            <img src={`${import.meta.env.BASE_URL}button_linkedin.png`} className="w-12 h-12 aspect-square transition-all duration-200 ease-in-out transform grayscale hover:grayscale-0" />
          </a>
          <a href="mailto:minder.daniel44@gmail.com" target="_blank">
            <img src={`${import.meta.env.BASE_URL}button_mail.png`} className="w-12 h-12 aspect-square transition-all duration-200 ease-in-out transform grayscale hover:grayscale-0" />
          </a>
          <a href="https://www.facebook.com/daniel.g.minder" target="_blank">
            <img src={`${import.meta.env.BASE_URL}button_facebook.png`} className="w-12 h-12 aspect-square transition-all duration-200 ease-in-out transform grayscale hover:grayscale-0" />
          </a>
          <div className="relative group">
          <a onClick={() => chooseLanguageAndDownload()}>
            <img src={`${import.meta.env.BASE_URL}button_cv.png`} className="w-12 h-12 aspect-square transition-all duration-200 ease-in-out transform grayscale hover:grayscale-0" />
          </a>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-gray-600 text-white text-xs rounded py-1 px-2 transition-opacity duration-300">
          Download resume
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MeSlide = ({ slide }: { slide: SlideType }) => {
  return (
    <div className="lg:mt-16 flex flex-col lg:flex-row w-full flex items-center justify-center self-center gap-8 px-4 lg:px-8 xl:px-16 font-montserrat">

      {/* Left - Video (2/5 width) */}
      <div className="w-[50%] lg:w-[25%]">
        <div className="aspect-square flex items-center justify-center self-center">
          <img
            src={`${import.meta.env.BASE_URL}slides/${slide.image}`}
            alt={slide.name}
            className="w-full h-full  object-cover rounded-full"
          />
        </div>
      </div>

      {/* Right - Description (3/5 width) */}
      <div className="w-full-[80%] lg:w-[50%] flex flex-col gap-3 items-start justify-normal">
        <h1 className="text-[40px] font-gothic text_shadow font-bold mb-[-15px]">{slide.name}</h1>
        <div className="flex gap-2 flex-wrap">
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
                <a key={index} href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a>
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
        <div className="flex gap-2 flex-wrap">
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
                <a className="underline italic hover:underline hover:text-red-600 hover:font-bold" key={index} href={link.link}>{link.name}</a>
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
    <span className={`font-normal whitespace-nowrap tracking-wider text-[12px] font-roboto_mono rounded-md text-white py-[3px] px-[10px]`} style={{ backgroundImage: `linear-gradient(to bottom right, ${color}, ${color2 ?? color})` }}>{title}</span>
  )
}