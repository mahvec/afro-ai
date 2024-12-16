import { VelocityScroll } from "@/components/ui/scrolling_text";

export default function Trusted() {
  return (
    <div className="w-full  h-full lg:h-[60vh] bg-black flex flex-col items-center justify-center">
      <div className="py-20">
        <VelocityScroll
          text="Experience the Power of Premium Models of A.I."
          default_velocity={3}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white md:text-7xl md:leading-[5rem]"
        />
      </div>
      <div className="container mx-auto flex items-center justify-center p-3 lg:p-0">
        <div className="flex lg:flex-row flex-col justify-between items-start text-white md:text-xl lg:text-2xl my-10">
          <p className="w-full lg:w-1/2 ">
            Empowering Africa's Technology Revolution with Afro AI
          </p>

          <p className="w-full lg:w-1/2 text-justify lg:text-start">
            Afro AI is dedicated to revolutionizing Africa's tech scene with
            innovative AI solutions.By understanding local nuances, we foster
            inclusive development and empower communities to thrive.
          </p>
        </div>
      </div>
    </div>
  );
}
