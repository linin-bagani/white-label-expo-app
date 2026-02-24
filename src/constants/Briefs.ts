import {
  AdvanceNewBriefFormType,
  NewBriefBuyerClientFormType,
  NewBriefBuyerFormType,
  NewBriefFormType,
  NewBriefLegalFormType,
} from '@/types/FormTypes';
import { SelectOptionProps } from '@/types/UITypes';
import { BuyerType, PropertyCategory } from '@/__generated__/types';

export const BuyerTypeLabelValue: Record<
  BuyerType,
  {
    label: string;
    value: BuyerType;
  }
> = {
  [BuyerType.Investor]: {
    label: 'Investor',
    value: BuyerType.Investor,
  },
  [BuyerType.OwnerOccupier]: {
    label: 'Owner Occupier',
    value: BuyerType.OwnerOccupier,
  },
  [BuyerType.HolidayRental]: {
    label: 'Holiday Rental',
    value: BuyerType.HolidayRental,
  },
};

export const NewBriefFormValues: NewBriefFormType = {
  title: '',
  briefTypeOfBuyer: BuyerTypeLabelValue[BuyerType.Investor],
  minBudget: 0,
  maxBudget: 0,
  bed: 0,
  bath: 0,
  car: 0,
  yield: 0,
  categories: [],
  interestAreasType: 'Suburb',
  interestAreas: [],
  powerSearch: null,
  prePortal: true,
  onMarket: false,
};

export const AdvanceNewBriefFormValues: AdvanceNewBriefFormType = {
  deadline: null,
  ownerOcc: 0,
  dom: 0,
  socialHousing: 0,
  vacancyRate: 0,
  distanceTransport: 0,
  easement: undefined,
  // flood: { label: '', value: '' },
  flood: null,
  fire: null,
  landAreaMin: 0,
  landAreaMax: 0,
  clients: [],
  bankLender: '',
  conveyancer: '',
  conveyancerDetails: '',
  mobileNumberCountryCode: 61,
  mobileNumber: '',
};

export const NewBriefBuyerClientFormValues: NewBriefBuyerClientFormType = {
  name: '',
  email: undefined,
  dialCode: undefined,
  mobileNumber: undefined,
};

export const NewBriefBuyerFormValues: NewBriefBuyerFormType = {
  name: '',
  email: '',
  type: 'Investor',
  dialCode: 61,
  mobileNumber: '',
  postalAddress: '',
  purchasingEntity: '',
  clients: [],
};

export const NewBriefLegalFormValues: NewBriefLegalFormType = {
  bankLender: '',
  conveyancer: '',
  conveyancerContact: '',
};

export const BriefLandAreaOptions: SelectOptionProps[] = [
  {
    label: '',
    value: '',
  },
  {
    label: '200m²',
    value: 200,
  },
  {
    label: '300m²',
    value: 300,
  },
  {
    label: '400m²',
    value: 400,
  },
  {
    label: '500m²',
    value: 500,
  },
  {
    label: '600m²',
    value: 600,
  },
  {
    label: '700m²',
    value: 700,
  },
  {
    label: '800m²',
    value: 800,
  },
  {
    label: '900m²',
    value: 900,
  },
  {
    label: '900m²',
    value: 900,
  },
  {
    label: '1,000m²',
    value: 1000,
  },
  {
    label: '1,200m²',
    value: 1200,
  },
  {
    label: '1,500m²',
    value: 1500,
  },
  {
    label: '1,750m²',
    value: 2000,
  },
  {
    label: '3,000m²',
    value: 3000,
  },
  {
    label: '4,000m²',
    value: 4000,
  },
  {
    label: '5,000m²',
    value: 5000,
  },
];

export const BriefFloodOptions: SelectOptionProps[] = [
  {
    label: '0 (No Flood)',
    value: '0',
  },
  {
    label: '1-2 (Low Flood)',
    value: '1',
  },
  {
    label: '3+',
    value: '3',
  },
];

export const BriefFireOptions: SelectOptionProps[] = [
  {
    label: '0 (No Fire)',
    value: '0',
  },
  {
    label: '1-2 (Low Fire)',
    value: '1',
  },
  {
    label: '3+',
    value: '3',
  },
];

export const BriefAreaInterestOptions: SelectOptionProps[] = [
  {
    label: 'Suburb',
    value: 'Suburb',
  },
  {
    label: 'Region',
    value: 'Region',
  },
];

export const BriefEasementOptions: SelectOptionProps[] = [
  {
    label: 'Yes',
    value: 'yes',
  },
  {
    label: 'No',
    value: 'no',
  },
];

export const BriefTypeOfBuyer: SelectOptionProps[] = [
  {
    label: 'Investor',
    value: BuyerType.Investor,
  },
  {
    label: 'Owner Occupier',
    value: BuyerType.OwnerOccupier,
  },
  {
    label: 'Holiday Rental',
    value: BuyerType.HolidayRental,
  },
];

export const propertyCategories = [
  // { key: 'ALL', value: 'All' },
  { value: PropertyCategory.Acreage, label: PropertyCategory.Acreage.replaceAll('_', ' ') },
  {
    value: PropertyCategory.AcreageSemiRural,
    label: PropertyCategory.AcreageSemiRural.replaceAll('_', ' '),
  },
  { value: PropertyCategory.Alpine, label: PropertyCategory.Alpine.replaceAll('_', ' ') },
  { value: PropertyCategory.Apartment, label: PropertyCategory.Apartment.replaceAll('_', ' ') },
  {
    value: PropertyCategory.BlockOfUnits,
    label: PropertyCategory.BlockOfUnits.replaceAll('_', ' '),
  },
  { value: PropertyCategory.Flat, label: PropertyCategory.Flat.replaceAll('_', ' ') },
  {
    value: PropertyCategory.DuplexSemiDetached,
    label: PropertyCategory.DuplexSemiDetached.replaceAll('_', ' '),
  },
  { value: PropertyCategory.Farm, label: PropertyCategory.Farm.replaceAll('_', ' ') },
  { value: PropertyCategory.Holiday, label: PropertyCategory.Holiday.replaceAll('_', ' ') },
  { value: PropertyCategory.House, label: PropertyCategory.House.replaceAll('_', ' ') },
  { value: PropertyCategory.Retirement, label: PropertyCategory.Retirement.replaceAll('_', ' ') },
  { value: PropertyCategory.Studio, label: PropertyCategory.Studio.replaceAll('_', ' ') },
  { value: PropertyCategory.Terrace, label: PropertyCategory.Terrace.replaceAll('_', ' ') },
  { value: PropertyCategory.TownHouse, label: PropertyCategory.TownHouse.replaceAll('_', ' ') },
  { value: PropertyCategory.Unit, label: PropertyCategory.Unit.replaceAll('_', ' ') },
  { value: PropertyCategory.Villa, label: PropertyCategory.Villa.replaceAll('_', ' ') },
  { value: PropertyCategory.Land, label: PropertyCategory.Land.replaceAll('_', ' ') },
  {
    value: PropertyCategory.LandDevelopment,
    label: PropertyCategory.LandDevelopment.replaceAll('_', ' '),
  },
  { value: PropertyCategory.Offices, label: PropertyCategory.Offices.replaceAll('_', ' ') },
  { value: PropertyCategory.Retail, label: PropertyCategory.Retail.replaceAll('_', ' ') },
  { value: PropertyCategory.Rural, label: PropertyCategory.Rural.replaceAll('_', ' ') },
  {
    value: PropertyCategory.SemiDetached,
    label: PropertyCategory.SemiDetached.replaceAll('_', ' '),
  },
  { value: PropertyCategory.Warehouse, label: PropertyCategory.Warehouse.replaceAll('_', ' ') },
  { value: PropertyCategory.Lifestyle, label: PropertyCategory.Lifestyle.replaceAll('_', ' ') },
];
