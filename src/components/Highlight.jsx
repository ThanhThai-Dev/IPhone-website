import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlight = () => {

  useGSAP(()=>{
    gsap.from('#title', {
      opacity: 5,
      x: -99,
    });

    gsap.to('#title', {
      opacity: 1,
      y: 0
    });

    gsap.to('.link',{
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.25
    });
  },[])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full
    common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end md:flex justify-between">
          <h1 id="title" className="section-heading [transition-timing-function:cubic-bezier(0,0.55,0.45,1)]">Get the highLights</h1>
          <div className="flex flex-wrap items-end gap-5">
            {/* watch video  */}
            <p className="link">
            Watch the film
            <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            {/* see video in youtube */}
            <p className="link">
            Watch the film
            <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        {/* video carousel from component  */}
        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlight