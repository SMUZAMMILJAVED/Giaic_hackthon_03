import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div>
      {/* A brand built  */}
      <div className="w-full flex  justify-center  items-center px-4">
        <div className="w-full max-w-[1250px] flex lg:flex-row flex-col lg:gap-0 gap-[40px] items-center justify-between mt-[88px] lg:mb-[89px] mb-[32px]">
          <h1 className="md:text-[36px] text-[32px]  text-darkPurple">
            A brand built on the love of craftmanship,
            <br />
            quality and outstanding customer service
          </h1>

          <button className="flex justify-center items-center lg:w-[192px] w-full  h-[56px] text-darkPurple  bg-[#f9f9f9]">
            <Link href="">View collection</Link>
          </button>
        </div>
      </div>

      {/* sofa */}
      <div className="w-full flex justify-center px-4 lg:py-[60px] pb-[32px]">
        <div className="w-full max-w-7xl flex lg:flex-row lg:gap-4 gap-6 flex-col justify-center">
          <div className="bg-[#2A254B] text-white flex flex-col justify-between w-full lg:basis-[50%] p-[40px_32px_30px_32px]  lg:p-[60px_0px_60px_60px]  ">
            <div>
              <h1 className="md:text-[32px] text-[20px] mb-3">
                It started with a small idea
              </h1>
              <p className="lg:pr-[75px] md:text-[18px] text-[14px] ">
                A global brand with local beginnings, our story begain in a
                small studio in South London in early 2014
              </p>
            </div>

            <div className=" ">
              <button className="flex  justify-center items-center md:w-[170px] mt-[32px]  h-[56px] w-full bg-[#F9F9F926]">
                <Link href="">View collection</Link>
              </button>
            </div>
          </div>

          <div className="flex-1 ">
            <Image
              src="/first.png"
              alt="Right Image"
              width={630}
              height={478}
              className="w-full lg:h-[478px]"
            />
          </div>
        </div>
      </div>

      {/* Our Service  */}
      <div className="bg-[#f9f9f9] w-full grid lg:grid-cols-2 grid-cols-1 text-[#2A254B] ">
        <div>
          <Image
            src="/left.png"
            alt="Image"
            width={720}
            height={603}
            className="w-full lg:mb-0 mb-10"
          />
        </div>

        <div className="flex flex-col justify-between gap-[64px] lg:gap-6 px-4 lg:p-[72px_100px_54px_84px]">
          <div className="xl:space-y-6 lg:space-y-2 space-y-3  ">
            <h1 className="xl:text-[24px] text-[20px]">
              From a studio in London to a global brand with
              <br />
              over 400 outlets
            </h1>

            <p className="text-textp xl:text-[16px] text-[14px] ">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>

            <p className="text-textp xl:text-[16px] text-[14px] ">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </div>

          <div className="w-full flex  items-center lg:mb-0 mb-[38px] ">
            <button className="flex justify-center items-center md:w-[170px] w-full bg-white  h-[56px] text-[#2A254B] ">
              <Link href="">Get in touch</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
