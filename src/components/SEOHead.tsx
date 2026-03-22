import { useEffect } from "react";
import { seoConfig } from "@/lib/config";

interface SEOHeadProps {
  page: "home" | "about" | "services" | "specials" | "contact";
}

const SEOHead = ({ page }: SEOHeadProps) => {
  const pageSeo = seoConfig.seo[page];

  useEffect(() => {
    document.title = pageSeo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", pageSeo.description);
    }

    // Schema.org JSON-LD
    let script = document.getElementById("schema-jsonld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "schema-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": seoConfig.businessName,
      "telephone": seoConfig.phone,
      "email": seoConfig.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": seoConfig.address.street,
        "addressLocality": seoConfig.address.city,
        "addressRegion": seoConfig.address.state,
        "postalCode": seoConfig.address.zip,
      },
      "url": window.location.origin,
      "areaServed": seoConfig.serviceArea,
    });

    return () => {
      // cleanup is optional since we rewrite on each page
    };
  }, [page, pageSeo]);

  return null;
};

export default SEOHead;
