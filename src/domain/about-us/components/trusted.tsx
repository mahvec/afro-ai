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
          Together, we're not just accessing AI; we're unleashing Africa's potential, one mind at a time.
          </p>

          <p className="w-full lg:w-1/2">
          When you choose Afro AI, you're not just getting access to premium AI tools; you're becoming part 
              of a larger movement to democratize artificial intelligence across Africa. Together, we're building 
              a future where African talent can thrive, powered by the latest in AI technology.
          </p>
        </div>
      </div>
    </div>
  );
}
