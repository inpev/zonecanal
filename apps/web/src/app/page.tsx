import { Header } from "@/shared/components/layout/Header";
import { Showcase } from "@/features/homepage/Showcase";
import { DiscoverySection } from "@/features/homepage/DiscoverySection";
import { VerifiedProvidersSection } from "@/features/homepage/VerifiedProvidersSection";
import { FeaturedProducts } from "@/features/homepage/FeaturedProducts";
import { BrandsSection } from "@/features/homepage/BrandsSection";
import { TrustSection } from "@/features/homepage/TrustSection";
import { BusinessBuyingSection } from "@/features/homepage/BusinessBuyingSection";
import { Footer } from "@/shared/components/layout/Footer";
import { showcaseData } from "@/data/showcase";
import { discoveryData } from "@/data/discovery";
import { verifiedProvidersData } from "@/data/providers";
import { brandsData } from "@/data/brands";
import { productsData } from "@/data/products";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main id="main-content" className="container">
        <Showcase data={showcaseData} />
        <DiscoverySection data={discoveryData} />
        <VerifiedProvidersSection data={verifiedProvidersData} />
        <FeaturedProducts data={productsData} />
        <BrandsSection data={brandsData} />
        <TrustSection />
        <BusinessBuyingSection />
      </main>
      <Footer />
    </div>
  );
}