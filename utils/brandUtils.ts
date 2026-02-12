import { BrandName } from "../hooks/useBrand";

/**
 * Utility function to get brand-specific content
 */
export const getBrandContent = (brandName: BrandName) => {
  const contentMap: Record<
    BrandName,
    {
      welcomeMessage: string;
      features: string[];
      footerText: string;
    }
  > = {
    "Brand One": {
      welcomeMessage: "Welcome to Brand One!",
      features: ["Feature A", "Feature B", "Feature C"],
      footerText: "© Brand One 2026",
    },
    "Brand Two": {
      welcomeMessage: "Experience Premium with Brand Two",
      features: ["Premium Feature X", "Premium Feature Y", "Premium Feature Z"],
      footerText: "© Brand Two Premium Services",
    },
    "Brand Three": {
      welcomeMessage: "Exclusive Access to Brand Three",
      features: [
        "Exclusive Feature 1",
        "Exclusive Feature 2",
        "Exclusive Feature 3",
      ],
      footerText: "© Brand Three Exclusive Club",
    },
  };

  return contentMap[brandName] || contentMap["Brand One"];
};

/**
 * Utility function to get brand-specific API endpoints
 */
export const getBrandApiUrl = (brandName: BrandName): string => {
  const apiUrlMap: Record<BrandName, string> = {
    "Brand One": "https://api.brandone.com/v1",
    "Brand Two": "https://api.brandtwo.com/v1",
    "Brand Three": "https://api.brandthree.com/v1",
  };

  return apiUrlMap[brandName] || apiUrlMap["Brand One"];
};
