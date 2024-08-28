import Contacts from "./components/Contacts"
import FinancialSoft from "./components/FinancialSoft"
import Fintech from "./components/Fintech"
import InfiniteScroll from "./components/InfiniteScroll"
import Hero from "./components/Hero"
import Testimonials from "./components/TestimonialCard"
import Dashboard from "./components/Dashboard"
import BlogCards from "./components/BlogCards"
import BlogCards2 from "./components/BlogCards2"
import FintechServices from "./components/FintechServices"
import GenAICards from "./components/GenAICards"
import ContactSection from "./components/ContactSection"

const page = () => {
  return (
    <div>
      <Hero />
      <Testimonials />
      <Dashboard />
      <BlogCards />
      <BlogCards2 />
      <FintechServices />
      <GenAICards />
      <ContactSection />
      <InfiniteScroll />
      <Fintech />
      <FinancialSoft />
      <Contacts />
    </div>
  )
}

export default page