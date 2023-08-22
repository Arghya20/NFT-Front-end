import BrandIntegration from "./components/BrandsIntegration/Index";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Index";
import InfoSection from "./components/InfoSection/Index";
import TopFold from "./components/TopFold/Index";
import TrendingNfts from "./components/TrendingNfts/Index";
import "./app.css";

const App = () => {
  return (
    <div>
      <Header></Header>
      <TopFold></TopFold>
      <BrandIntegration></BrandIntegration>
      <TrendingNfts></TrendingNfts>
      <InfoSection></InfoSection>
      <Footer></Footer>
    </div>
  );
};

export default App;
