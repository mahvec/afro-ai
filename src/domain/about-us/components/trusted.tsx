import { VelocityScroll } from "@/components/ui/scrolling_text";

export default function Trusted() {
  return (
    <div className="w-full  h-full bg-black flex flex-col items-center justify-center py-[100px]">
      <VelocityScroll
        text="WE EXIST TO EMPOWER AFRICA WITH AI.  "
        default_velocity={2}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white md:text-7xl md:leading-[5rem]"
      />
    </div>
  );
}
