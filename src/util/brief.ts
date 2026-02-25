import {
  AgentBrief,
  AgentBriefPropertyGroup,
  BuyerType,
  CreateAgentBriefInput,
  PropertyCategory,
  YesNoValue,
} from '@/__generated__/types';
import { BriefDetailsFormValues } from '@/types/BriefTypes';
import { AdvanceNewBriefFormType, NewBriefFormType } from '@/types/FormTypes';
import { BriefFireOptions, BriefFloodOptions, BuyerTypeLabelValue } from '@/constants/Briefs';
import { formatToUnits } from '@/util/number';

export const generateBudgetText = (minPrice?: number | null, maxPrice?: number | null) => {
  let budgetText: string = '';

  if (maxPrice && !minPrice) {
    // budgetText = `up to ${formattedPrice(maxPrice)}`;
    budgetText = `up to ${formatToUnits(maxPrice)}`;
  }
  if (!maxPrice && minPrice) {
    // budgetText = `from ${formattedPrice(minPrice)}`;
    budgetText = `from ${formatToUnits(minPrice)}`;
  }
  if (maxPrice && minPrice) {
    // budgetText = `${formattedPrice(minPrice)} to ${formattedPrice(maxPrice)}`;
    budgetText = `${formatToUnits(minPrice)} to ${formatToUnits(maxPrice)}`;
  }

  return budgetText;
};

export const generateBriefDetailsFormValues = (details: AgentBrief): BriefDetailsFormValues => {
  const floodValue = BriefFloodOptions.find(
    (item) => parseInt(item.value as string) === (details.floodRiskFactor || 0),
  );
  const fireValue = BriefFireOptions.find(
    (item) => parseInt(item.value as string) === (details.fireRiskFactor || 0),
  );

  const briefFormValues: NewBriefFormType = {
    title: details.title || '',
    briefTypeOfBuyer: BuyerTypeLabelValue[details.type as BuyerType],
    minBudget: details.minPrice || 0,
    maxBudget: details.maxPrice || 0,
    bed: details.bed || 0,
    bath: details.bath || 0,
    car: details.parking || 0,
    yield: details.type === BuyerType.Investor ? details.yieldPercent || 0 : null,
    categories: details.propertyCategories as PropertyCategory[],
    interestAreasType: 'Suburb',
    interestAreas: details.briefLocations
      ? details.briefLocations?.map((item) => ({
          suburb: {
            id: item?.location?.id || '',
            full: item?.location?.full,
            suburb: item?.location?.suburb,
            state: item?.location?.state,
            postalCode: item?.location?.postalCode,
            type: item?.location?.type,
          },
          radius: item?.maxDistanceFromSuburb || 0,
        }))
      : [],
    powerSearch: details.featuresKeyword || null,
    prePortal:
      details.propertyGroup === AgentBriefPropertyGroup.PrePortal || details.propertyGroup === null,
    onMarket:
      details.propertyGroup === AgentBriefPropertyGroup.OnMarket || details.propertyGroup === null,
  };
  const advanceSettingsFormValues: AdvanceNewBriefFormType = {
    deadline: details.deadline ? new Date(details.deadline) : null,
    ownerOcc: details.ownerOccRentalPercent || 0,
    dom: details.daysOnMarket || 0,
    socialHousing: details.socialHousingPercent || 0,
    vacancyRate: details.vacancyRatePercent || 0,
    distanceTransport: details.distanceFromPublicTransport || 0,
    easement: details.hasEasementIdentified === YesNoValue.Yes,
    flood: floodValue ? { label: floodValue.label, value: floodValue.value.toString() } : null,
    fire: fireValue ? { label: fireValue.label, value: fireValue.value.toString() } : null,
    landAreaMin: details.landAreaMin || 0,
    landAreaMax: details.landAreaMax || 0,
    clients: details.additionalClients
      ? details.additionalClients.map((item) => ({
          clientName: item?.name,
          email: item?.email,
          mobileNumberCountryCode: item?.mobileNumberCountryCode,
          mobileNumber: item?.mobileNumber,
        }))
      : [],
    bankLender: details.bankLender || '',
    conveyancer: details.conveyancer || '',
    conveyancerDetails: details.conveyancerContactDetails || '',
    buyerName: details.name || '',
    buyerEmail: details.email || null,
    mobileNumberCountryCode: details.mobileNumberCountryCode,
    mobileNumber: details.mobileNumber,
  };

  return { brief: briefFormValues, advanceSettings: advanceSettingsFormValues };
};

export const generateSaveBriefInput = (params: {
  uuid?: string;
  briefFormValues: BriefDetailsFormValues;
}): CreateAgentBriefInput => {
  const { uuid, briefFormValues } = params;
  const { brief, advanceSettings } = briefFormValues;

  const saveAgentBriefInput: CreateAgentBriefInput = {
    agentBriefId: uuid,
    title: brief.title,
    type: brief.briefTypeOfBuyer?.value,
    minPrice: brief.minBudget,
    maxPrice: brief.maxBudget,
    bed: brief.bed,
    bath: brief.bath,
    parking: brief.car,
    propertyCategories: brief.categories,
    yieldPercent: brief.briefTypeOfBuyer?.value === BuyerType.Investor ? brief.yield : undefined,
    suburbsOfInterest: brief.interestAreas.map((item) => ({
      id: item.suburb.id,
      maxDistanceFromSuburb: item.radius,
    })),
    featuresKeyword: brief.powerSearch,
    propertyGroup:
      brief.prePortal && brief.onMarket
        ? null
        : AgentBriefPropertyGroup.PrePortal || AgentBriefPropertyGroup.OnMarket,
    deadline: advanceSettings.deadline,
    ownerOccRentalPercent: advanceSettings.ownerOcc,
    daysOnMarket: advanceSettings.dom,
    socialHousingPercent: advanceSettings.socialHousing,
    vacancyRatePercent: advanceSettings.vacancyRate,
    distanceFromPublicTransport: advanceSettings.distanceTransport,
    hasEasementIdentified: advanceSettings.easement ? YesNoValue.Yes : YesNoValue.No,
    floodRiskFactor: parseInt(advanceSettings.flood?.value ? advanceSettings.flood?.value : '0'),
    fireRiskFactor: parseInt(advanceSettings.fire?.value ? advanceSettings.fire?.value : '0'),
    landArea: {
      min: advanceSettings.landAreaMin,
      max: advanceSettings.landAreaMax,
    },
    name: advanceSettings.buyerName,
    email: advanceSettings.buyerEmail,
    mobileNumberCountryCode: advanceSettings.mobileNumberCountryCode ?? 61,
    mobileNumber: advanceSettings.mobileNumber ?? '',
    postalAddress: advanceSettings.postalAddress,
    purchasingEntity: advanceSettings.purchasingEntity,
    bankLender: advanceSettings.bankLender,
    conveyancer: advanceSettings.conveyancer,
    conveyancerContactDetails: advanceSettings.conveyancerDetails,
    additionalClients: advanceSettings.clients.map((item) => ({
      name: item.clientName ?? '',
      email: item.email,
      mobileNumberCountryCode: item.mobileNumberCountryCode ?? 61,
      mobileNumber: item.mobileNumber,
    })),
  };

  return saveAgentBriefInput;
};
