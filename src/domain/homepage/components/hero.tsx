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
        <div className="container p-3 mx-auto flex flex-col items-start justify-start">
          <motion.p className="text-[40px] text-[#67e8bc] uppercase w-[50%] font-bold">
            Experience The Power of Premium AI Models Tailored for Africa
          </motion.p>
          <motion.p className="text-[#67e8bc] text-sm">
            Access premium AI tools for a 5-10x boost in academic performance and productivity. 
          </motion.p>
          <motion.p className="text-[#67e8bc] flex flex-col mt-20 text-sm">
            <span className=" uppercase">Our Offerings:</span>
            <span className="underline">
              {" "}
              
            </span>
          </motion.p>
          <div className="w-[40%] pl-5 text-sm mt-2 space-y-2">
            <motion.p className="text-[#dcf7ee] flex">
              <span>●</span>
              <span>
              <span className="uppercase text-[#67e8bc]">Campus Genie:</span> Interact with your lecture notes
                and past exam questions using our premium AI-powered assistant for Universities, Polytechnics,
                and Colleges of Education Students.
              </span>
            </motion.p>
            <motion.p className="text-[#dcf7ee] flex ">
              <span>●</span>
              <span>
              <span className="uppercase text-[#67e8bc]">Wise Nurse:</span> Interact with your lecture notes
                and past exam questions using our premium AI-powered assistant specialized for nursing and medical students
                (anatomy, physiology, etc.). 
              </span>
            </motion.p>
            <motion.p className="text-[#dcf7ee] flex ">
              <span>●</span>
              <span>
              <span className="uppercase text-[#67e8bc]">Afro AI ChatBot:</span> Interact with the premium model of ChatGpt 4o using our AI assistant called "Afro" 
              </span>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
