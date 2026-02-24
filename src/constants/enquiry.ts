import { CreateAgentEnquiryEnquiries, PropertyEnquiryEnquiries } from '@/__generated__/types';

export const enquiryLabelMap = new Map<string, string>([
  [PropertyEnquiryEnquiries.PriceGuide, 'Price Guide'],
  [PropertyEnquiryEnquiries.Ofi, 'Ofi'],
  [PropertyEnquiryEnquiries.PropertySize, 'Property Size'],
  [PropertyEnquiryEnquiries.ContractSale, 'Contract Sale'],
  [PropertyEnquiryEnquiries.SimilarProperties, 'Similar Properties'],
  [PropertyEnquiryEnquiries.SaleRent, 'Sale Rent'],
  [PropertyEnquiryEnquiries.RentalApplication, 'Rental Application'],
  [PropertyEnquiryEnquiries.WhenAvailable, 'When Available'],
  [PropertyEnquiryEnquiries.AppraiseProperty, 'Appraise Property'],
  [PropertyEnquiryEnquiries.VideoPicture, 'Video Picture'],
  [PropertyEnquiryEnquiries.Tenanted, 'Tenanted'],
  [PropertyEnquiryEnquiries.Inspection, 'Inspection'],
  [CreateAgentEnquiryEnquiries.SellingProperty, 'Selling Property'],
  [CreateAgentEnquiryEnquiries.PropertyInfo, 'Property Property'],
  [CreateAgentEnquiryEnquiries.GeneralInquiry, 'Genera Inquiry'],
]);
