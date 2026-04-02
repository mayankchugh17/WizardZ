import Image from "next/image";

export default function Slider() {
  return (
    <section className="flex flex-wrap items-center justify-around gap-16 md:gap-20 py-8 px-6 md:px-16">
      <Image
        src="/Amazon.png"
        width={120}
        height={60}
        alt="Amazon"
        className="h-auto w-[80px] md:w-[120px]"
      />

      <Image
        src="/dribble.png"
        width={120}
        height={60}
        alt="Dribbble"
        className="h-auto w-[80px] md:w-[120px]"
      />

      <Image
        src="/hubspot.png"
        width={120}
        height={60}
        alt="Hubspot"
        className="h-auto w-[80px] md:w-[120px]"
      />

      <Image
        src="/Netflix.png"
        width={120}
        height={60}
        alt="Netflix"
        className="h-auto w-[80px] md:w-[120px]"
      />

      <Image
        src="/notion.png"
        width={120}
        height={60}
        alt="Notion"
        className="h-auto w-[80px] md:w-[120px]"
      />

      <Image
        src="/zoom.png"
        width={120}
        height={60}
        alt="Zoom"
        className="h-auto w-[80px] md:w-[120px]"
      />
    </section>
  );
}
