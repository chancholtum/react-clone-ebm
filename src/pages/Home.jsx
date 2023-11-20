import ContactUs from "../components/ContactUs";
import ELibrary from "../components/ELibrary";
import Header from "../components/Header";
import NewsAndEvent from "../components/NewsAndEvent";
import Promotions from "../components/Promotions";
import RouteAndFare from "../components/RouteAndFare";
import VisionEBM from "../components/VisionEBM";

function Home() {
  return (
    <>
      <Header />
      <VisionEBM />
      <RouteAndFare />
      <Promotions />
      <NewsAndEvent />
      <ELibrary />
      <ContactUs />
    </>
  );
}

export default Home;
