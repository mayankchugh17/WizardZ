import Image from "next/image";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 min-h-screen w-full gap-10">
      {/* LEFT CONTENT */}
      <div className="w-full md:w-[45%]">
        <h1 className="text-3xl md:text-[65px] font-bold leading-tight">
          Navigating the digital landscape for success
        </h1>

        <p className="mt-6 mb-6 text-[16px] md:text-[20px] leading-normal text-gray-700">
          Our digital marketing agency helps businesses grow and succeed online
          through services like SEO, PPC, social media marketing, and content
          creation.
        </p>

        <button className="bg-black text-white py-3 px-6 text-[16px] md:text-[18px] rounded-xl font-semibold">
          Book a consultation
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-[55%] flex justify-center">
        <Image
          src="/1.avif"
          alt="hero"
          width={500}
          height={500}
          className="w-full h-auto max-w-[500px]"
          priority
        />
      </div>
    </section>
  );
}
