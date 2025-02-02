import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import CeramicProducts from "@/components/CeramicProducts";
import PopularProducts from "@/components/PopularProducts";
import SubscriptionSection from "@/components/SubscriptionSection";
import GetInTouchSection from "@/components/GetInTouchSection";


export default function Home() {
  return (
      <div>
        <Hero/>
        <CardSection/>
       <CeramicProducts/>
       <PopularProducts/>
       <SubscriptionSection/>
       <GetInTouchSection/>
      </div>
  );
}
