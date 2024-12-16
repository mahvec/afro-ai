import { ImagesSlider } from "./image_slider";
import { motion } from "framer-motion";

export default function Hero() {
  const images = ["/hero.png", "/hero2.png", "/hero3.png"];

  return (
    <ImagesSlider className="h-screen w-full" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          x: -80,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <main className="container mx-auto p-3 lg:p-0">
          <div className="w-full flex flex-col items-start justify-start">
            <motion.p className="text-2xl lg:text-[40px] text-[#67e8bc] uppercase md:w-[50%] font-bold">
              Unlock AI Power Tailored for Africa
            </motion.p>
            <motion.p className="text-[#67e8bc] text-xs">
              Access premium AI tools like ChatGPT 4 in local currencies. Boost
              your learning and productivity.
            </motion.p>
            <motion.p className="text-[#67e8bc] flex flex-col mt-20 text-sm">
              <span className=" uppercase">Our Offerings</span>
              <span className="underline">
                Affordable access to top AI models
              </span>
            </motion.p>
            <div className="md:w-[40%] pl-5 text-xs mt-2 space-y-2">
              <motion.p className="text-[#67e8bc] flex">
                <span>●</span>
                <span>
                  Campus Genie: AI-powered assistant for university,
                  polytechnic, and college of education students
                </span>
              </motion.p>
              <motion.p className="text-[#67e8bc] flex ">
                <span>●</span>
                <span>
                  Wise Nurse: Specialized for nursing and medical students
                  (anatomy, physiology, etc.). Interact with your lecture notes
                  and past exam questions for a 5-10x boost in academic
                  performance.
                </span>
              </motion.p>
            </div>
          </div>
        </main>
      </motion.div>
    </ImagesSlider>
  );
}
