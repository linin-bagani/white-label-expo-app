  import Constants from "expo-constants";

export type BrandName = "Brand One" | "Brand Two" | "Brand Three";

export interface BrandInfo {
  brandName: BrandName;
  brandSlug: string;
  themeColor: string;
  logoPath?: string;
}

export const useBrand = (): BrandInfo => {
  const appName = Constants.expoConfig?.name as BrandName;
  const slug = Constants.expoConfig?.slug;
  const themeColor = Constants.expoConfig?.extra?.themeColor;
  const logoPath = Constants.expoConfig?.extra?.logoPath;

  return {
    brandName: appName || "Brand One",
    brandSlug: slug || "brand-one",
    themeColor: themeColor || "#007AFF",
    logoPath,
  };
};
