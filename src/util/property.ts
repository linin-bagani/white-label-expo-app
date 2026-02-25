import { generateFindAdsViewTrackingUrl, isViewComAuPremiumListing } from './viewcomau';
import { Property, PropertySource } from '@/__generated__/types';

export const generateListingUrl = (
  property: Pick<Property, 'source' | 'url' | 'slugUrlPrefix' | 'slugUrl'>,
) => {
  const { slugUrlPrefix, url, slugUrl, source } = property;

  let result = `https://www.realty.com.au/${slugUrlPrefix}/${slugUrl}`;

  switch (source) {
    case PropertySource.Shortlist: {
      if (url) result = url;
      break;
    }
    case PropertySource.XmlView:
    case PropertySource.XmlViewPremium: {
      if (url) {
        result = generateFindAdsViewTrackingUrl(url, isViewComAuPremiumListing(source)).toString();
      }
      break;
    }
    case PropertySource.XmlScrape: {
      if (url) result = url;
      break;
    }
  }

  return result;
};
