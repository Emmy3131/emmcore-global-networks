import Index from "../LandingPage/Index"
import ServiceOverview from "./ServiceOverview"
import FeaturedProducts from "./FeaturedProducts"
import InvestmentSection from "./InvestmentPlan"
import Testimonials from "./Testimonials"
import CTASection from "./CTA"
const Home =()=>{
  return(
    <div>
      <Index />
      <ServiceOverview/>
      <FeaturedProducts/>
      <InvestmentSection/>
      <Testimonials/>
      <CTASection/>
    </div>
  )
}
export default Home;