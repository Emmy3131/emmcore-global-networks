import PortfolioHero from "./PorfolioHeader";
import PortfolioWebsites from "./Projects";
import RepairPortfolio from "./PhoneRepair";
import CaseStudies from "./CaseStudy";


const PortfolioPage = () => {
  return (
    <div>
        <PortfolioHero />
        <PortfolioWebsites />
        <RepairPortfolio />
        <CaseStudies />
    </div>
  );
};

export default PortfolioPage;