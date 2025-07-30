import svgPaths from "./svg-rgcp527o9z";
import imgHero from "figma:asset/97d5a2d7a8f2c0c233def954b28aa020bf6f907c.png";
import imgImage from "figma:asset/803f1ce325ce4e4842222fe8a0b44d2b436c1fc9.png";
import imgImage1 from "figma:asset/907acf0637733609c459b75d8a41c389e105bc91.png";
import imgImage2 from "figma:asset/36cf9889ec9a218734837055090b3a5c5d244197.png";
import imgImage3 from "figma:asset/7021b4930e13f1cf7e8d9f72d86f5722d0081d80.png";
import imgImage4 from "figma:asset/9246ff9c1256ce54e2185b64b3acdccd7bc06c6e.png";
import imgImage5 from "figma:asset/d298613f82c20971fbd3fcf7cde89608809cd281.png";
import imgImage6 from "figma:asset/26c3f342a3f6aedb2f6e80c0412abb6fe9ccb2f1.png";
import imgImage7 from "figma:asset/edb4a33caf453e51bafa846685f7caa09746990b.png";
import imgImage8 from "figma:asset/d7bfcea665a05cfc42a0ce6f1906444a1abd6707.png";

function LogoLarge() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0"
      data-name="logo_large"
    >
      <div className="flex h-[195.047px] items-center justify-center relative shrink-0 w-[96px]">
        <div className="flex-none rotate-[90deg]">
          <div className="font-['Krub:Regular',_sans-serif] leading-[0] not-italic relative text-[56px] text-[rgba(255,255,255,0.5)] text-left text-nowrap tracking-[-2.24px]">
            <p className="adjustLetterSpacing block leading-[48px] whitespace-pre">
              bogus
              <br />
              ch@tter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative shrink-0"
      data-name="logo"
    >
      <LogoLarge />
    </div>
  );
}

function LogoLarge1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0"
      data-name="logo_large"
    >
      <Logo />
    </div>
  );
}

function Logo1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start pl-6 pr-4 py-0 relative"
      data-name="logo"
    >
      <LogoLarge1 />
    </div>
  );
}

function AboutPageLink() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-0 relative shrink-0"
      data-name="about page link"
    >
      <div className="font-['Font_Awesome_6_Free:Solid',_sans-serif] leading-[0] not-italic relative shrink-0 text-[27px] text-[rgba(255,255,255,0.5)] text-nowrap text-right">
        <p className="block leading-[normal] whitespace-pre"></p>
      </div>
    </div>
  );
}

function AboutPageLink1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end leading-[0] not-italic p-0 relative shrink-0 text-[rgba(255,255,255,0.5)] text-nowrap text-right"
      data-name="about page link"
    >
      <div className="font-['Font_Awesome_6_Free:Solid',_sans-serif] relative shrink-0 text-[27px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre"></p>
      </div>
      <div className="font-['Inter:Black',_sans-serif] font-black relative shrink-0 text-[24px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          about
        </p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-9 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="links"
    >
      <AboutPageLink />
      <AboutPageLink1 />
    </div>
  );
}

function Header() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] relative shrink-0 w-full"
      data-name="header"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-6 py-0 relative w-full">
          <div className="flex h-[136px] items-center justify-center relative shrink-0 w-[195.047px]">
            <div className="flex-none rotate-[90deg]">
              <Logo1 />
            </div>
          </div>
          <Links />
        </div>
      </div>
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Arrow up">
          <path
            d={svgPaths.p8b06900}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}

function ArrowMenuButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative shrink-0"
      data-name="arrow menu button"
    >
      <ArrowUp />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(31,31,31,0.8)] relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Image Title Placeholder
            </p>
          </div>
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[normal] overflow-inherit">
              some written expressions about what this is and means including
              materials, techniques and inspiration....
            </p>
          </div>
          <ArrowMenuButton />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-2.5 h-[1024px] items-start justify-end p-0 relative shrink-0 w-[1440px]"
      data-name="hero"
      style={{ backgroundImage: `url('${imgHero}')` }}
    >
      <Frame2 />
    </div>
  );
}

function ArrowUp1() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Arrow up">
          <path
            d={svgPaths.p8b06900}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}

function ArrowMenuButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative shrink-0"
      data-name="arrow menu button"
    >
      <ArrowUp1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 bg-[rgba(31,31,31,0.8)] grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Image Title Placeholder
            </p>
          </div>
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[normal] overflow-inherit">
              some written expressions about what this is and means including
              materials, techniques and inspiration....
            </p>
          </div>
          <ArrowMenuButton1 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat box-border content-stretch flex flex-row gap-2.5 h-[1200px] items-end justify-start p-0 relative shrink-0 w-full"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage}')` }}
    >
      <Frame3 />
    </div>
  );
}

function ArrowUp2() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Arrow up">
          <path
            d={svgPaths.p8b06900}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}

function ArrowMenuButton2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative shrink-0"
      data-name="arrow menu button"
    >
      <ArrowUp2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 bg-[rgba(31,31,31,0.8)] grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Image Title Placeholder
            </p>
          </div>
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[normal] overflow-inherit">
              some written expressions about what this is and means including
              materials, techniques and inspiration....
            </p>
          </div>
          <ArrowMenuButton2 />
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat box-border content-stretch flex flex-row gap-2.5 h-[1200px] items-end justify-start p-0 relative shrink-0 w-full"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage1}')` }}
    >
      <Frame4 />
    </div>
  );
}

function ArrowUp3() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Arrow up">
          <path
            d={svgPaths.p8b06900}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}

function ArrowMenuButton3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative shrink-0"
      data-name="arrow menu button"
    >
      <ArrowUp3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 bg-[rgba(31,31,31,0.8)] grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Image Title Placeholder
            </p>
          </div>
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[normal] overflow-inherit">
              some written expressions about what this is and means including
              materials, techniques and inspiration....
            </p>
          </div>
          <ArrowMenuButton3 />
        </div>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat box-border content-stretch flex flex-row gap-2.5 h-[1086px] items-end justify-start p-0 relative shrink-0 w-full"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage2}')` }}
    >
      <Frame5 />
    </div>
  );
}

function ArrowUp4() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Arrow up">
          <path
            d={svgPaths.p8b06900}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}

function ArrowMenuButton4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative shrink-0"
      data-name="arrow menu button"
    >
      <ArrowUp4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 bg-[rgba(31,31,31,0.8)] grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Image Title Placeholder
            </p>
          </div>
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[normal] overflow-inherit">
              some written expressions about what this is and means including
              materials, techniques and inspiration....
            </p>
          </div>
          <ArrowMenuButton4 />
        </div>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat box-border content-stretch flex flex-row gap-2.5 h-[1200px] items-end justify-start p-0 relative shrink-0 w-full"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage3}')` }}
    >
      <Frame6 />
    </div>
  );
}

function ArrowUp5() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Arrow up">
          <path
            d={svgPaths.p8b06900}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}

function ArrowMenuButton5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative shrink-0"
      data-name="arrow menu button"
    >
      <ArrowUp5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 bg-[rgba(31,31,31,0.8)] grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Image Title Placeholder
            </p>
          </div>
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[normal] overflow-inherit">
              some written expressions about what this is and means including
              materials, techniques and inspiration....
            </p>
          </div>
          <ArrowMenuButton5 />
        </div>
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat box-border content-stretch flex flex-row gap-2.5 h-[1200px] items-end justify-start p-0 relative shrink-0 w-full"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage4}')` }}
    >
      <Frame7 />
    </div>
  );
}

function ArrowUp6() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Arrow up">
          <path
            d={svgPaths.p8b06900}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}

function ArrowMenuButton6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative shrink-0"
      data-name="arrow menu button"
    >
      <ArrowUp6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 bg-[rgba(31,31,31,0.8)] grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Image Title Placeholder
            </p>
          </div>
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[normal] overflow-inherit">
              some written expressions about what this is and means including
              materials, techniques and inspiration....
            </p>
          </div>
          <ArrowMenuButton6 />
        </div>
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat box-border content-stretch flex flex-row gap-2.5 h-[1200px] items-end justify-start p-0 relative shrink-0 w-full"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage5}')` }}
    >
      <Frame8 />
    </div>
  );
}

function ArrowUp7() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Arrow up">
          <path
            d={svgPaths.p8b06900}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}

function ArrowMenuButton7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative shrink-0"
      data-name="arrow menu button"
    >
      <ArrowUp7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 bg-[rgba(31,31,31,0.8)] grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Image Title Placeholder
            </p>
          </div>
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[normal] overflow-inherit">
              some written expressions about what this is and means including
              materials, techniques and inspiration....
            </p>
          </div>
          <ArrowMenuButton7 />
        </div>
      </div>
    </div>
  );
}

function Image6() {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat box-border content-stretch flex flex-row gap-2.5 h-[1200px] items-end justify-start p-0 relative shrink-0 w-full"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage6}')` }}
    >
      <Frame9 />
    </div>
  );
}

function ArrowUp8() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Arrow up">
          <path
            d={svgPaths.p8b06900}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}

function ArrowMenuButton8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative shrink-0"
      data-name="arrow menu button"
    >
      <ArrowUp8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 bg-[rgba(31,31,31,0.8)] grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Image Title Placeholder
            </p>
          </div>
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[normal] overflow-inherit">
              some written expressions about what this is and means including
              materials, techniques and inspiration....
            </p>
          </div>
          <ArrowMenuButton8 />
        </div>
      </div>
    </div>
  );
}

function Image7() {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat box-border content-stretch flex flex-row gap-2.5 h-[1200px] items-end justify-start p-0 relative shrink-0 w-full"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage7}')` }}
    >
      <Frame10 />
    </div>
  );
}

function ArrowUp9() {
  return (
    <div className="relative shrink-0 size-8" data-name="Arrow up">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Arrow up">
          <path
            d={svgPaths.p8b06900}
            id="Icon"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}

function ArrowMenuButton9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2.5 relative shrink-0"
      data-name="arrow menu button"
    >
      <ArrowUp9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 bg-[rgba(31,31,31,0.8)] grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Image Title Placeholder
            </p>
          </div>
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[normal] overflow-inherit">
              some written expressions about what this is and means including
              materials, techniques and inspiration....
            </p>
          </div>
          <ArrowMenuButton9 />
        </div>
      </div>
    </div>
  );
}

function Image8() {
  return (
    <div
      className="bg-center bg-contain bg-no-repeat box-border content-stretch flex flex-row gap-2.5 h-[1200px] items-end justify-start p-0 relative shrink-0 w-full"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage8}')` }}
    >
      <Frame11 />
    </div>
  );
}

export default function DeaktopWebTemplate() {
  return (
    <div
      className="bg-[#1f1f1f] box-border content-stretch flex flex-col gap-2.5 items-start justify-center p-0 relative size-full"
      data-name="deaktop_web_template"
    >
      <Header />
      <Hero />
      <Image />
      <Image1 />
      <Image2 />
      <Image3 />
      <Image4 />
      <Image5 />
      <Image6 />
      <Image7 />
      <Image8 />
    </div>
  );
}