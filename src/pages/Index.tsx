import EmergencyBanner from "@/components/EmergencyBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import EmergencySection from "@/components/EmergencySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => (
  <>
    <SEOHead page="home" />
    <EmergencyBanner />
    <Navbar />
    <Hero />
    <TrustBar />
    <ServicesGrid />
    <EmergencySection />
    <WhyChooseUs />
    <Reviews />
    <ServiceArea />
    <CTASection />
    <Footer />
  </>
);

export default Index;
