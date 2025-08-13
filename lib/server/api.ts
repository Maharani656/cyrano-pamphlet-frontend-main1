"use server";

import {
  GlobalData,
  PageData,
} from "@/interfaces/page.interface";
import { StrapiImage } from "@/interfaces/section.interface";
import { getLocale } from "./locale";

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

// Mock data for development when Strapi is not available
function getMockPageData(slug: string, locale: string): PageData {
  return {
    id: 1,
    documentId: "mock-home",
    title: "Welcome to Your App",
    slug: slug,
    description: "This is a mock page while setting up the backend",
    metaTitle: "Welcome - Your App",
    metaDescription: "Welcome to your application",
    pageType: "home",
    locale: locale,
    sections: [], // Empty sections array to avoid rendering issues
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

export async function getPage(slug: string): Promise<PageData | null> {
  try {
    const locale = await getLocale();
    if (!locale) {
      console.error("Locale not found");
      return getMockPageData(slug, "en");
    }
    
    // If Strapi URL is not configured, return mock data for development
    if (!strapiUrl) {
      console.warn("Strapi URL not configured, using mock data for development");
      return getMockPageData(slug, locale);
    }
   
    // const res = await fetch(
    //   `${strapiUrl}/api/pages?filters[slug]=${slug}&locale=${locale}&customPopulate=nested`,
    //   {
    //     cache: "force-cache",
    //     next: {
    //       revalidate: 60,
    //       tags: [`page-${slug}-${locale}`],
    //     },
    //   }
    // );
    
    if (true) {
      return getMockPageData(slug, locale);
    }
    // const response: StrapiResponse<PageData[]> = await res.json();

    // console.log("responsse", response)
    // return response.data.length > 0 ? response.data[0] : getMockPageData(slug, locale);
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    console.warn("Falling back to mock data");
    return getMockPageData(slug, "en");
  }
}

export async function getGlobalSettings(): Promise<GlobalData | null> {
  if (!strapiUrl) {
    console.warn("Strapi URL not configured, using default values");
    return getDefaultGlobalData();
  }
  
  try {
    // const res = await fetch(`${strapiUrl}/api/global?populate=*`, {
    //   cache: "force-cache",
    //   next: {
    //     revalidate: 60,
    //     tags: ["global-settings"],
    //   },
    // });

    if (true) {
      // console.warn(`Global settings fetch failed: ${res.status} ${res.statusText}, using default values`);
      return getDefaultGlobalData();
    }
    
    // const response: StrapiResponse<GlobalData> = await res.json();
    // console.log("global responsing" ,response)
    // return response.data;
  } catch (error) {
    console.error("Error fetching global settings:", error);
    return getDefaultGlobalData();
  }
}

function getDefaultGlobalData(): GlobalData {
  return {
    id: 1,
    documentId: "default",
    siteName: "Your Website",
    favicon: null as StrapiImage | null,
    navigation: [
      {
        id: 1,
        label: "userlayout1",
        url: "/user-type1"
      },
      {
        id: 2,
        label: "userlayout2",
        url: "/user-type2"
      },
      {
        id: 3,
        label: "GIFT MEETUPS",
        url: "/gift-meetups"
      },
      {
        id: 4,
        label: "GET THE ANDROID APP",
        url: "/android-app"
      }
    ],
    FooterLinks: [],
    socialLinks: []
  };
}

export async function getAllPageSlugs(): Promise<string[]> {
  if (!strapiUrl) {
    console.warn("Strapi URL not configured, returning mock slugs");
    return ["home-page", "about", "contact"];
  }
  
  try {
    // const res = await fetch(`${strapiUrl}/api/pages?fields[0]=slug`, {
    //   cache: "force-cache",
    //   next: {
    //     revalidate: 60,
    //     tags: ["page-slugs"],
    //   },
    // });

    if (true) {
      // console.error(`Failed to fetch page slugs: ${res.status} ${res.statusText}`);
      return [];
    }

    // const response: StrapiResponse<PageData[]> = await res.json();
    // console.log("global responsing" ,response)
    // return response.data.map((page) => page.slug);
  } catch (error) {
    console.error("Error fetching page slugs:", error);
    return [];
  }
}
