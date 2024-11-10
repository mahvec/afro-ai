import { ImagesSlider } from "C:/afro ai webstie/afro-ai/src/domain/homepage/components/image_slider.tsx";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


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
        Get In Touch with Us!
        </h1>
        <p className="text-center text-lg text-[#67e8bc] mb-4">
          Empowering Africa with Pay as you go Premium AI
        </p>
        <p className="text-center mb-10">
        At Afro AI, we're dedicated to ensuring that you have a seamless and enriching experience with our services. 
        We’ve set up multiple channels to provide you with the support you need and to hear your valuable feedback.
        </p>

        <div className="space-y-8 text-sm">
          <h2 className="text-[24px] text-[#67e8bc] font-semibold">Get in Touch through:</h2>
          <motion.div className="space-y-2">
            <p className="flex items-start">
              <span>1.</span>
              <span className="ml-2"><span className="uppercase text-[#67e8bc]">Leverage Our Social Media Handles:</span> Follow us on our social media platforms for updates, announcements, and quick support. 
                Feel free to reach out to us with any inquiries, and our team will respond promptly. We’re here to connect with you!

.           </span>
            </p>
                      {/* Social Media Icons */}
              <div className="flex items-center mt-4 space-x-4">
                <a 
                  href="https://facebook.com/yourpage" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
                <a 
                  href="https://instagram.com/yourpage" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://twitter.com/yourpage" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
    </div>
            <p className="flex items-start">
              <span>2.</span>
              <span className="ml-2"><span className="uppercase text-[#67e8bc]">Chat with Our Support Assistant</span>: We’ve integrated a support assistant through Tawk.io to offer real-time help directly on our website. 
                                     If you have any questions while browsing, simply click on the chat widget, and our assistant will guide you. 
                                     Whether it’s troubleshooting, assistance with our services, or general inquiries, 
                                     we're here to assist you.</span>
            </p>
            <p className="flex items-start">
              <span>3.</span>
              <span className="ml-2"><span className="uppercase text-[#67e8bc]">Email Support</span>: Prefer email communication? 
                                    No problem! Reach out to us at <span className="text-[#67e8bc]">support@afroai.ai</span> for any questions, feedback, or assistance.
                                     We’re always eager to hear your thoughts on how we can improve and enhance your experience.</span>
            </p><br></br>
            <p className="flex items-start">
              <span>●</span>
              <span className="ml-2">Cool Things to Know:</span>
            </p>
            {/* <div className="ml-5 space-y-2">
              <p className="flex items-start">
                <span>●</span>
                <span className="ml-2">
                  <span className="uppercase text-[#67e8bc]">Save Time:</span>  Check our list of already uploaded courses If your notes are there, you can use them right away! (Coming Soon).

                </span>
              </p>
              <p className="flex items-start">
                <span>●</span>
                <span className="ml-2">
                  <span className="uppercase text-[#67e8bc]">Learn How to Use It:</span> Watch short videos on our YouTube channel or check our resources section to become a Campus Genie pro

                </span>
              </p>
              <p className="flex items-start">
                <span>●</span>
                <span className="ml-2">
                  <span className="uppercase text-[#67e8bc]">Select which Premium AI to use:</span> You can use either ChatGPT or Claude AI to interact with your lecture notes on Campus Genie.

                </span>
              </p>
            </div> */}
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
