import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Info1 from "@/components/Info1";
import NewArrival from "@/components/NewArrival";
import ChooseSection from "@/components/ChooseSection";
import DealOfMonth from "@/components/DealOfMonth";
import Testimony from "@/components/Testimony";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <NewArrival />
      <ChooseSection />
      <DealOfMonth />
      <Info1 />
      <Testimony />
      <InstagramFeed />
    </Layout>
  );
}
