import Contacts from "./components/Contacts"
import FinancialSoft from "./components/FinancialSoft"
import Fintech from "./components/Fintech"
import InfiniteScroll from "./components/InfiniteScroll"
import Hero from "./components/Hero"
import Testimonials from "./components/TestimonialCard"
import Dashboard from "./components/Dashboard"

const page = () => {
  return (
    <div>
      <Hero />
      <Testimonials />
      <Dashboard />

      <InfiniteScroll />
      <Fintech />
      <FinancialSoft />
      <Contacts />
    </div>
  )
}

export default page