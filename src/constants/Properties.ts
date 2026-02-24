import { PropertyFormSchemaType } from '@/types/FormTypes';
import { PropertyCategorySelect } from '@/types/PropertyTypes';
import { SelectOptionProps } from '@/types/UITypes';

export const initialAddPropertyValues: PropertyFormSchemaType = {
  id: '',
  sellingPrice: 0,
  address: '',
  suburb: '',
  suburbObj: {
    id: '',
  },
  priceView: '',
  state: '',
  postalCode: 0,
  features: {
    bathrooms: null,
    bedrooms: null,
    garages: null,
  },
  description: '',
  category: '',
  isTenanted: true,
  leaseEndDate: null,
  rentPriceWeekly: null,
  landArea: null,
};

export const propertyCategories: PropertyCategorySelect[] = [
  { label: 'Acreage', value: 'ACREAGE' },
  { label: 'AcreageSemi-rural', value: 'ACREAGE SEMI RURAL' },
  { label: 'Apartment', value: 'APARTMENT' },
  { label: 'Block of Units', value: 'BLOCK OF UNITS' },
  { label: 'Flat', value: 'FLAT' },
  { label: 'DuplexSemi-detached', value: 'DUPLEX SEMI DETACHED' },
  { label: 'Semi-Detached', value: 'SEMI DETACHED' },
  { label: 'House', value: 'HOUSE' },
  { label: 'Retirement', value: 'RETIREMENT' },
  { label: 'Studio', value: 'STUDIO' },
  { label: 'Town House', value: 'TOWN HOUSE' },
  { label: 'Unit', value: 'UNIT' },
  { label: 'Holiday', value: 'Holiday' },
  { label: 'Villa', value: 'VILLA' },
  { label: 'Rural', value: 'RURAL' },
  { label: 'Land', value: 'LAND' },
  { label: 'Offices', value: 'OFFICES' },
  { label: 'Retail', value: 'RETAIL' },
  { label: 'Alpine', value: 'ALPINE' },
  { label: 'Lifestyle', value: 'LIFESTYLE' },
  { label: 'Warehouse', value: 'WAREHOUSE' },
  { label: 'Land/Development', value: 'LAND DEVELOPMENT' },
  { label: 'Farm', value: 'FARM' },
];

export const featureOptions = [
  {
    label: '',
    value: '',
  },
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '5+',
    value: '5+',
  },
];

export const PropertyOfferDayOptions: SelectOptionProps[] = [
  {
    label: '1 (day)',
    value: '1',
  },
  {
    label: '2 (days)',
    value: '2',
  },
  {
    label: '3 (days)',
    value: '3',
  },
  {
    label: '4 (days)',
    value: '4',
  },
  {
    label: '5 (days)',
    value: '5',
  },
  {
    label: '6 (days)',
    value: '6',
  },
  {
    label: '7 (days)',
    value: '7',
  },
];
