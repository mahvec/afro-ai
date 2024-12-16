
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
        Frequently Asked Questions (FAQs)
        </h1>
        {/* <p className="text-center text-lg text-[#67e8bc] mb-4">
          Empowering Africa with Pay as you go Premium AI
        </p>
        <p className="text-center mb-10">
        Imagine having a super-smart friend who knows all your class notes (Anatomy, Physiology, Biochemistry etc) and can answer any question about them.
        That's Wise Nurse! It's a cool new tool that uses artificial intelligence to help all medical students (Nurses, Medical Students and all Students related to Health Sciences) study better and understand your lectures more easily.

        </p> */}

        <div className="space-y-8 text-sm">
          {/* <h2 className="text-[24px] text-[#67e8bc] font-semibold">How Wise Nurse Works:</h2> */}
          <motion.div className="space-y-2">
            <p className="flex items-start">
              <span>1.</span>
              <span className="ml-2"><span className="uppercase text-[#67e8bc]">Q: What languages does Afro AI support?</span> A: Premium models of AI most especially ChatGpt support major African languages including Swahili, Yoruba, Zulu, Amharic, and more. 
              </span>
            </p>
            <p className="flex items-start">
              <span>2.</span>
              <span className="ml-2"><span className="uppercase text-[#67e8bc]">Q: How accurate is Afro AI's information?</span> A: Afro AI uses premium ChatGPT 4o and 
                 is constantly updated by Open AI, which are one of the owners of the premium models we use. 
                However, always verify critical information from official sources.
              </span>
            </p>
            <p className="flex items-start">
              <span>3.</span>
              <span className="ml-2"><span className="uppercase text-[#67e8bc]">Q: How accurate is Campus Genie's/Wisenurse's information?</span> A: Campus Genie/Wise Nurse 
                use your lecture notes as their primary knowledgebase leveragig the power of premium ChatGPT 4o and Claude 3.5 Sonnet  AI models to interact with the knowledgebase 
                therefore they are less prone to hallucinate. 
                However, always verify critical information from official sources because it is widely known that premium models do hallucinate atimes.

              </span>
              </p>
              <p className="flex items-start">
              <span>4.</span>
              <span className="ml-2"><span className="uppercase text-[#67e8bc]">Q: Can Afro AI help with my Course work?</span> A: Yes! Afro AI/Campus Genie/Wisenurse can
                                       explain concepts and guide you through problems. Remember, the goal is to learn, not just get answers.

              </span>
            </p>
            <p className="flex items-start">
              <span>5.</span>
              <span className="ml-2"><span className="uppercase text-[#67e8bc]">Q: Is my data safe with Afro AI?</span> A: We prioritize your privacy. 
                                        We don't sell your data.


              </span>
            </p>
            <p className="flex items-start">
              <span>6.</span>
              <span className="ml-2"><span className="uppercase text-[#67e8bc]">Q: How much does Afro AI cost?</span> A: We offer flexible pricing plans. Check our pricing page for details.

              </span>
            </p>
            <p className="flex items-start">
              <span>7.</span>
              <span className="ml-2"><span className="uppercase text-[#67e8bc]">Q: How is Afro AI different from other AI assistants?</span> A: Afro AI is not different from other AI assistants; it only brings the premium models of Chatgpt and Claude AI at your fingertips 
                for an affordable price which might have cost you $20 dollars ( N27,000/N30,000). 
                Therefore you are not using a different AI assistant, you are using the same premium model of Chatgpt 4(4o) or Claude AI (Claude 3 Sonnet)

              </span>
            </p>
            <p className="flex items-start">
              <span>8.</span>
              <span className="ml-2"><span className="uppercase text-[#67e8bc]">Q: Can I contribute to improving Afro AI? A:</span>Absolutely! 
                Your usage and feedback helps us provide a better user experience  and in the long run will help us to train the 
                premium models to understand the nuances of African culture promoting an African tailored response to all African users.
              </span>
            </p>
            <br></br>
            {/* <p className="flex items-start">
              <span>●</span>
              <span className="ml-2">Cool Things to Know:</span>
            </p>
            <div className="ml-5 space-y-2">
              <p className="flex items-start">
                <span>●</span>
                <span className="ml-2">
                  <span className="uppercase text-[#67e8bc]">Save Time:</span>  Check our list of already uploaded courses If your notes are there, you can use them right away! (Coming Soon).

                </span>
              </p>
              <p className="flex items-start">
                <span>●</span>
                <span className="ml-2">
                  <span className="uppercase text-[#67e8bc]">Learn How to Use It:</span> Watch short videos on our YouTube channel or check our resources section to become a Wise Nurse pro

                </span>
              </p>
              <p className="flex items-start">
                <span>●</span>
                <span className="ml-2">
                  <span className="uppercase text-[#67e8bc]">Select which Premium AI to use:</span> You can use either ChatGPT or Claude AI to interact with your lecture notes on Wise Nurse.

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
