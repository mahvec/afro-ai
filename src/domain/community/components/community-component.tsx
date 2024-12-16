import { Users, HelpCircle, BookOpen } from "lucide-react";

const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-4 flex items-center">
      {icon}
      <span className="ml-2 text-[#67e8bc]">{title}</span>
    </h2>
    {children}
  </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="mb-2 flex items-start">
    <span className="text-primary mr-2">●</span>
    <span>{children}</span>
  </li>
);

export default function CommunityNotes() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto bg-black rounded-lg text-white py-[100px] shadow-xl overflow-hidden">
        <div className=" border-2 rounded border-[#67e8bc] text-white py-8 px-6">
          <h1 className="text-4xl font-bold text-center">Afro AI</h1>
          <p className="text-xl text-center mt-2">
            Empowering Africa through AI
          </p>
        </div>

        <div className="p-6 sm:p-10">
          <Section
            title="Community"
            icon={<Users className="w-8 h-8 text-primary" />}
          >
            <p className="mb-4">
              Join the vibrant Afro AI family! Our community is a melting pot of
              African innovation, where minds from across the continent connect,
              collaborate, and create.
            </p>
            <ul className="list-none pl-5">
              <ListItem>
                Share Knowledge: Exchange ideas with fellow users, from Nigeria,
                Senegal to Somalia, Cape Town to Cairo.
              </ListItem>
              <ListItem>
                Solve Challenges: Tackle uniquely African problems with the
                power of collective intelligence.
              </ListItem>
              <ListItem>
                Celebrate Diversity: Experience the richness of our continent's
                cultures through AI-powered interactions.
              </ListItem>
              <ListItem>
                Shape the Future: Your feedback helps Afro AI grow smarter and
                more in tune with African needs.
              </ListItem>
            </ul>
            <p className="mt-4">
              Together, we're not just using AI – we're defining how AI serves
              Africa. Join us in building a brighter, more connected future for
              our continent!
            </p>
            <p className="mt-4 font-semibold">
              #AfroAITogether #InnovateAfrica #AIForAll
            </p>
          </Section>

          <Section
            title="How It Works"
            icon={<BookOpen className="w-8 h-8 text-primary" />}
          >
            <ul className="list-none pl-5">
              <ListItem>
                Ask Anything: Type your question in any African language. School
                work, business advice, local info - we've got you.
              </ListItem>
              <ListItem>
                Get Smart Answers: Afro AI taps into a vast knowledge base,
                tailored for African contexts.
              </ListItem>
              <ListItem>
                Learn & Grow: Each interaction makes Afro AI smarter. Your
                questions help us serve Africa better.
              </ListItem>
              <ListItem>
                Connect Anytime: Available 24/7 on your phone or computer. No
                internet? We're working on SMS access.
              </ListItem>
              <ListItem>
                Respect Privacy: Your data stays yours. We don't store personal
                info.
              </ListItem>
              <ListItem>
                Affordable Access: Pay only for what you use. More lower special
                rates if you watch our training videos (Coming soon).
              </ListItem>
            </ul>
            <p className="mt-4">
              Start your Afro AI journey now. Let's innovate together!
            </p>
          </Section>

          <Section
            title="Need Help? We've Got You!"
            icon={<HelpCircle className="w-8 h-8 text-primary" />}
          >
            <p className="mb-4">
              Welcome to Afro AI's support hub. We're here to ensure your
              journey with us is smooth and rewarding.
            </p>

            <h3 className="text-2xl font-semibold mb-2">Quick Start Guide</h3>
            <ul className="list-none pl-5 mb-4">
              <ListItem>
                Ask Anything: Type your question in your preferred African
                language.
              </ListItem>
              <ListItem>
                Get Instant Answers: Our AI processes your query and provides a
                tailored response.
              </ListItem>
              <ListItem>
                Refine Your Results: Not quite what you needed? Rephrase or ask
                for more details.
              </ListItem>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Common Issues</h3>
            <ul className="list-none pl-5 mb-4">
              <ListItem>
                Language Not Recognized? We're constantly expanding. Try English
                or another major African language for now.
              </ListItem>
              <ListItem>
                Unexpected Responses? Be specific in your questions. The more
                context, the better we understand.
              </ListItem>
              <ListItem>
                App Not Loading? Check your internet connection.
              </ListItem>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Self-Help Resources</h3>
            <ul className="list-none pl-5 mb-4">
              <ListItem>
                Tutorial Videos: Watch our quick guides on{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  YouTube
                </a>
              </ListItem>
              <ListItem>
                User Forum: Connect with other users at{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  community.afroai.com
                </a>
              </ListItem>
              <ListItem>
                FAQ: Browse our{" "}
                <a href="/" className="text-blue-400 hover:underline">
                  Frequently Asked Questions
                </a>{" "}
                on the homepage for instant solutions
              </ListItem>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Still Stuck?</h3>
            <p className="mb-2">We're just a message away</p>
            <ul className="list-none pl-5 mb-4">
              <ListItem>Chat with us 24/7 in the app</ListItem>
              <ListItem>
                Email:{" "}
                <a
                  href="mailto:support@afroai.com"
                  className="text-blue-400 hover:underline"
                >
                  support@afroai.com
                </a>
              </ListItem>
              <ListItem>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/support@afroai.com"
                  className="text-blue-400 hover:underline"
                >
                  support@afroai.com
                </a>
              </ListItem>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Feedback</h3>
            <p className="mb-4">
              Your input shapes Afro AI. Share your experience or suggest
              improvements. Together, we're building an AI that truly serves
              Africa.
            </p>
            <p>
              Remember, every question you ask helps Afro AI grow smarter. Keep
              learning, keep asking!
            </p>
          </Section>

          <div className="text-center mt-8">
            <a
              href="http://www.afrocentricai.org/login"
              className="bg-gradient-to-r from-[#67e8bc] to-[#40eab1] px-8 py-3 rounded-full text-lg text-black font-semibold hover:from-[#67e8bc] hover:to-green-600 transition-all duration-200"
            >
              Start Your Afro AI Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
