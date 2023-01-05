import { useRef } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import imagem from "../assets/charlotte.png";

export default function Main() {
  const container = useRef();
  return (
    <div className="flex-1 grid sm:grid-cols-2 sm:gap-20 overflow-hidden">
      <div className="flex flex-col justify-center items-center sm:items-end h-full ">
        <div>
          <div className="text-6xl sm:text-8xl font-semibold">Charlotte</div>
          <div className="flex justify-center gap-5">
            <div>c a k e </div> <div> s h o p</div>
          </div>
        </div>
      </div>
      <div
        ref={container}
        className="flex justify-center sm:justify-start items-start sm:items-center h-full relative"
      >
        <img className="w-9/12 rounded shadow-2xl" src={imagem} />
        <MouseParallax
          isAbsolutelyPositioned={true}
          enableOnTouchDevice={true}
          parallaxContainerRef={container}
        >
          <div className="w-20 h-20 bg-orange-600 absolute top-20 right-16 rotate-12"></div>
          <div className="w-20 h-20 bg-green-600 absolute bottom-20 right-20 rotate-45"></div>
          <div className="w-20 h-20 bg-cyan-600 absolute top-52 -left-5 rotate-12"></div>
        </MouseParallax>
      </div>
    </div>
  );
}
