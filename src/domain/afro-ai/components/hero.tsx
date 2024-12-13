
import { ImagesSlider } from "@/domain/homepage/components/image_slider";
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

      
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#1a1a2e] text-[#dcf7ee]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto p-6"
      >
        <h1 className="text-[40px] text-[#67e8bc] uppercase font-bold text-center mb-8">
          Introducing Afro: Our AI Assistant
        </h1>
        <p className="text-center text-lg text-[#67e8bc] mb-4">
          Empowering Africa with Pay as you go Premium AI
        </p>
        <p className="text-center mb-10">
          Afro AI is revolutionizing access to world-class artificial intelligence across Africa.
          Our innovative platform brings the power of premium AI models like ChatGPT-4o to
          every African at an affordable rate. Interact with the premium model of ChatGpt 4o using our AI assistant called "Afro"  You can begin using it for any and every task.
        </p>

        <div className="space-y-8 text-sm">
          <h2 className="text-[24px] text-[#67e8bc] font-semibold">Key Features:</h2>
          <motion.div className="space-y-2">
            <p className="flex items-start">
              <span>●</span>
              <span className="ml-2">Affordable Access: Pay in three African currencies, making advanced AI accessible to all.</span>
            </p>
            <p className="flex items-start">
              <span>●</span>
              <span className="ml-2">Multilingual Support: Fluent understanding of Hausa, Igbo, and Yoruba languages.</span>
            </p>
            <p className="flex items-start">
              <span>●</span>
              <span className="ml-2">Flexible Pricing: Purchase Units and pay only for what you need – no long-term commitments. With one payment you get accesss to the below integrated tools</span>
            </p>
            <br></br>
            <p className="flex items-start">
              <span>●</span>
              <span className="ml-2">Integrated Tools:</span>
            </p>
            <div className="ml-5 space-y-2">
              <p className="flex items-start">
                <span>●</span>
                <span className="ml-2">
                  <span className="uppercase text-[#67e8bc]">Afro AI:</span> Direct access to ChatGPT-4o.
                </span>
              </p>
              <p className="flex items-start">
                <span>●</span>
                <span className="ml-2">
                  <span className="uppercase text-[#67e8bc]">Campus Genie:</span> Interact with your lecture notes using premium AI.
                </span>
              </p>
              <p className="flex items-start">
                <span>●</span>
                <span className="ml-2">
                  <span className="uppercase text-[#67e8bc]">Wise Nurse:</span> For Medical students, Nurses, and Health Science students to interact with their lecture notes using premium AI.
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="px-6 py-3 bg-[#67e8bc] text-[#1a1a2e] font-bold rounded-md">
            Get started
          </button>
        </div>
      </motion.div>
    </div>
    </motion.div>
    </ImagesSlider>
  );
}
