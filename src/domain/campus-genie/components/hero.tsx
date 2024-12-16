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
              Campus Genie: Your AI Study Buddy
            </h1>
            <p className="text-center text-lg text-[#67e8bc] mb-4">
              Empowering Africa with Pay as you go Premium AI
            </p>
            <p className="text-center mb-10">
              Imagine having a super-smart friend who knows all your class notes
              and can answer any question about them. That's Campus Genie! It's
              a cool new tool that uses artificial intelligence to help you
              study better and understand your lectures more easily.
            </p>

            <div className="space-y-8 text-sm">
              <h2 className="text-[24px] text-[#67e8bc] font-semibold">
                How Campus Genie Works:
              </h2>
              <motion.div className="space-y-2">
                <p className="flex items-start">
                  <span>1.</span>
                  <span className="ml-2">
                    Send your lecture notes or past exam questions to{" "}
                    <span className="lowercase text-[#67e8bc]">
                      documents@afroai.ai
                    </span>
                    &nbsp; Name your lecture notes like this:
                    Course_University_Level ({" "}
                    <span className=" text-[#67e8bc]">
                      Biology101_UniversityOfLagos_100level
                    </span>{" "}
                    ).
                  </span>
                </p>
                <p className="flex items-start">
                  <span>2.</span>
                  <span className="ml-2">
                    We run a check on the uploaded lecture note making sure it's
                    clear, readable and doesn't contain profanity. If it passes
                    our quality check, we go ahead to upload it to our AI
                    database where
                    <span className=" text-[#67e8bc]">Campus Genie</span>
                    can interact with your lecture notes.
                  </span>
                </p>
                <p className="flex items-start">
                  <span>3.</span>
                  <span className="ml-2">
                    {" "}
                    We'll send you an email notifying you when to begin using{" "}
                    <span className=" text-[#67e8bc]">Campus Genie</span> to
                    study, create mock tests/examinations and explain complex
                    topics in a way a class 6 pupil can understand.
                  </span>
                </p>
                <br></br>
                <p className="flex items-start">
                  <span>●</span>
                  <span className="ml-2">Cool Things to Know:</span>
                </p>
                <div className="ml-5 space-y-2">
                  <p className="flex items-start">
                    <span>●</span>
                    <span className="ml-2">
                      <span className="uppercase text-[#67e8bc]">
                        Save Time:
                      </span>{" "}
                      Check our list of already uploaded courses If your notes
                      are there, you can use them right away! (Coming Soon).
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span>●</span>
                    <span className="ml-2">
                      <span className="uppercase text-[#67e8bc]">
                        Learn How to Use It:
                      </span>{" "}
                      Watch short videos on our YouTube channel or check our
                      resources section to become a Campus Genie pro
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span>●</span>
                    <span className="ml-2">
                      <span className="uppercase text-[#67e8bc]">
                        Select which Premium AI to use:
                      </span>{" "}
                      You can use either ChatGPT or Claude AI to interact with
                      your lecture notes on Campus Genie.
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
