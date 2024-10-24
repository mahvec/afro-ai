import { ImagesSlider } from "C:/afro ai webstie/afro-ai/src/domain/homepage/components/image_slider.tsx";
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
        <div className="container p-3 mx-auto flex flex-col items-start mt-20 justify-start">
          <motion.p className="text-[40px] text-[#67e8bc] uppercase w-[50%] mt-20 font-bold text-right" >
          About Us
          </motion.p>
          <motion.p className="text-[#dcf7ee] flex flex-col mt-5 text-sm break-words text-center">
            In the heart of Africa's digital renaissance, Afro AI was born from a simple yet powerful vision: 
              to make advanced artificial intelligence accessible to every African mind eager to learn and grow. 
              We are a passionate collective of AI enthusiasts who believe that the future of Africa lies in 
              democratizing access to cutting-edge technology.
          </motion.p>
          <motion.p className="text-[40px] text-[#67e8bc] mt-10 uppercase w-[50%] font-bold ">
          Our Story
          </motion.p>
          <motion.p className="text-[#dcf7ee] flex flex-col mt-5 text-sm text-center">
          The journey began when we noticed a significant gap: while premium AI models were revolutionizing 
              education and productivity worldwide, many Africans were left behind due to payment barriers and 
              currency restrictions. We asked ourselves: "What if we could bridge this gap? What if we could 
              make these powerful tools accessible to every student, professional, and innovator across Africa?"
          </motion.p>
          <motion.p className="text-[40px] text-[#67e8bc] mt-10 uppercase w-[50%] font-bold ">
          Our Mission
          </motion.p>
          <motion.p className="text-[#dcf7ee] flex flex-col mt-5 text-sm text-center">
             Guided by the spirit of Ubuntu – "I am because we are" – our mission is to unlock the transformative 
              power of premium AI tools for African learners(students) and professionals. We believe that when one African 
              rises, we all rise together. By making advanced AI accessible in local currencies and at affordable 
              rates, we're not just providing a service; we're nurturing a movement of digital empowerment across 
              the continent.
          </motion.p>
          <motion.p className="text-[40px] text-[#67e8bc] mt-10 uppercase w-[50%] font-bold ">
          Our Vision
          </motion.p>
          <motion.p className="text-[#dcf7ee] flex flex-col mt-5 text-sm text-center">
          We envision an Africa where every student can access world-class AI tools to enhance their learning, 
              where every professional can leverage AI to boost their productivity, and where every innovator can 
              harness AI to solve local challenges. We're not just selling access to AI – we're investing in 
              Africa's future.
          </motion.p>
       </div>
      </motion.div>
    </ImagesSlider>
  );
}
