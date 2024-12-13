import ContactUs from "./components/contact-us";
import Faq from "./components/faq";
import Hero from "./components/hero";
import Products from "./components/products";
import Trusted from "./components/trusted";
import WhyChooseUs from "./components/why_choose_us";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <Trusted />
      <Products />
      <WhyChooseUs />
      <ContactUs />
      <Faq />
    </div>
  );
}
