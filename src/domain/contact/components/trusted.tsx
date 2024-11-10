import { VelocityScroll } from "@/components/ui/scrolling_text";

export default function Trusted() {
  return (
    <div className="w-full  h-full bg-black flex flex-col items-center justify-center">
      <VelocityScroll
        text="Experience the Power of Premium Models of A.I."
        default_velocity={2}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white md:text-7xl md:leading-[5rem]"
      />
      <div className="container mx-auto flex items-center justify-center ">
        <div className="flex lg:flex-row flex-col justify-between items-start text-white text-xs my-10">
          <p className="w-full lg:w-1/2 ">
            Empowering Africa's Technology Revolution with Afro AI
          </p>

          <p className="w-full lg:w-1/2">
            Afro AI is dedicated to revolutionizing Africa's tech scene with
            innovative AI solutions.By understanding local nuances, we foster
            inclusive development and empower communities to thrive.
          </p>
        </div>
      </div>
    </div>
  );
}
