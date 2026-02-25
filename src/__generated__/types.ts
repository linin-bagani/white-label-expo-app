export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  Double: { input: any; output: any };
  JSON: { input: any; output: any };
  NonUtcDate: { input: any; output: any };
  Timezone: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type AcceptOrRejectAgentOfferInput = {
  agentOfferId: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  source: AgentOfferSource;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String']['output'];
  expiresIn: Scalars['Int']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  isLoginAsMode?: Maybe<Scalars['Boolean']['output']>;
  loginAsAdminUserId?: Maybe<Scalars['ID']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  type?: Maybe<AccessTokenType>;
  user?: Maybe<ViewerUser>;
};

export enum AccessTokenType {
  Admin = 'ADMIN',
  Agency = 'AGENCY',
  AgencyGroup = 'AGENCY_GROUP',
  Agent = 'AGENT',
  Broker = 'BROKER',
  Consumer = 'CONSUMER',
  Developer = 'DEVELOPER',
  PlatformAgent = 'PLATFORM_AGENT',
}

export type ActivitiesConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Activity = {
  __typename?: 'Activity';
  action?: Maybe<Scalars['String']['output']>;
  adminUser?: Maybe<AdminUser>;
  changes?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  entityId?: Maybe<Scalars['ID']['output']>;
  entityType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLoginAs?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type ActivityConnection = {
  __typename?: 'ActivityConnection';
  edges?: Maybe<Array<Maybe<ActivityEdge>>>;
  nodes?: Maybe<Array<Maybe<Activity>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type ActivityEdge = {
  __typename?: 'ActivityEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Activity>;
};

export type AdSalesAgreement = {
  __typename?: 'AdSalesAgreement';
  agency?: Maybe<Agency>;
  agent?: Maybe<Agent>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isAccepted?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pdfS3Key?: Maybe<Scalars['String']['output']>;
  signedDate?: Maybe<Scalars['Date']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AddAgentConversationContactInput = {
  agentContactIds: Array<Scalars['ID']['input']>;
  agentConversationId: Scalars['ID']['input'];
};

export type AddDeveloperProjectObjectImage = {
  isMain: Scalars['Boolean']['input'];
  type: DeveloperProjectObjectType;
  url: Scalars['String']['input'];
};

export type AddDeveloperProjectObjectInput = {
  developerProjectUuid: Scalars['ID']['input'];
  objects: Array<AddDeveloperProjectObjectImage>;
};

export type AddRecordToGoogleSheetInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
  records: Array<Scalars['JSON']['input']>;
  sheetId: Scalars['ID']['input'];
  subSheetId?: InputMaybe<Scalars['Int']['input']>;
};

export type AdditionalClientInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  mobileNumberCountryCode?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type Admin = {
  __typename?: 'Admin';
  id: Scalars['ID']['output'];
};

export type AdminAgentsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentType?: InputMaybe<Array<InputMaybe<AgentType>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdDateRange?: InputMaybe<DateRangeInput>;
  crmIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasBriefPropertyAlerts?: InputMaybe<Scalars['Boolean']['input']>;
  hasBriefs?: InputMaybe<Scalars['Boolean']['input']>;
  isBuyer?: InputMaybe<Scalars['Boolean']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeTestAgency?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subscription?: InputMaybe<Scalars['String']['input']>;
};

export type AdminPropertyStatistics = {
  __typename?: 'AdminPropertyStatistics';
  adsCount?: Maybe<Scalars['Int']['output']>;
  agenciesCount?: Maybe<Scalars['Int']['output']>;
  agentBriefPropertyAlertsCount?: Maybe<Scalars['Int']['output']>;
  agentBriefsCount?: Maybe<Scalars['Int']['output']>;
  agentsCount?: Maybe<Scalars['Int']['output']>;
  brokersCount?: Maybe<Scalars['Int']['output']>;
  consumersCount?: Maybe<Scalars['Int']['output']>;
  dailyAgencyContactRevealsCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyAgentContactRevealsCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyFbLikesCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyListingImpressionsCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyMailboxFacebookPostCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyNewCurrentPropertyCount?: Maybe<Array<Maybe<RentalSaleDateCountMap>>>;
  dailyNewSoldPropertyCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyPropertyEnquiryByStateCount?: Maybe<Array<Maybe<PropertyEnquiryByStateCount>>>;
  dailyPropertyEnquiryCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyTrafficByReferrerDomainCount?: Maybe<Array<Maybe<TrafficByReferrerDomainCount>>>;
  dailyXmlLogsCount?: Maybe<Array<Maybe<DateCountMap>>>;
  listingImpressionsCount?: Maybe<Scalars['Int']['output']>;
  monthlyPropertyEnquiryCount?: Maybe<Array<Maybe<MonthCountMap>>>;
  propertiesCount?: Maybe<Scalars['Int']['output']>;
  propertiesCountByCrm?: Maybe<Array<Maybe<NameCountPercentageMap>>>;
  propertyEnquiriesByReferrerCount?: Maybe<Array<Maybe<PropertyEnquiriesByReferrerCount>>>;
  propertyListingByStateCount?: Maybe<Array<Maybe<PropertyListingByStateCount>>>;
  propertyProportionByStatus?: Maybe<Array<Maybe<StatusCountMap>>>;
  propertyProportionByType?: Maybe<Array<Maybe<TypeCountMap>>>;
  socialCount?: Maybe<Scalars['Int']['output']>;
};

export type AdminPropertyStatisticsAgentBriefPropertyAlertsCountArgs = {
  input?: InputMaybe<AgentBriefPropertyAlertsCountInput>;
};

export type AdminPropertyStatisticsAgentBriefsCountArgs = {
  input?: InputMaybe<AgentBriefsCountInput>;
};

export type AdminPropertyStatisticsDailyFbLikesCountArgs = {
  numberOfDays?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminPropertyStatisticsMonthlyPropertyEnquiryCountArgs = {
  lastMonth?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminPropertyStatisticsPropertiesCountByCrmArgs = {
  input?: InputMaybe<PropertiesCountByCrmInput>;
};

export type AdminPropertyStatisticsPropertyProportionByTypeArgs = {
  status?: InputMaybe<Scalars['String']['input']>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  lastLoginDate?: Maybe<Scalars['Date']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type AdminUserEdge = {
  __typename?: 'AdminUserEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AdminUser>;
};

export type AdminUsersConnection = {
  __typename?: 'AdminUsersConnection';
  edges?: Maybe<Array<Maybe<AdminUserEdge>>>;
  nodes?: Maybe<Array<Maybe<AdminUser>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AdminUsersConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AgenciesConnectionByEnquiriesCountOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  crmId?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgenciesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  suburbCode?: InputMaybe<Scalars['String']['input']>;
};

export type AgenciesConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  crmId?: InputMaybe<Scalars['String']['input']>;
  crmStatus?: InputMaybe<AgenciesConnectionOptionsCrmStatus>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isBap?: InputMaybe<Scalars['Boolean']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  isFromSignUp?: InputMaybe<Scalars['Boolean']['input']>;
  isReip?: InputMaybe<Scalars['Boolean']['input']>;
  isTrial?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<AgenciesConnectionOptionsSortBy>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  state?: InputMaybe<PropertyStates>;
  subscriptionPlan?: InputMaybe<AgenciesSubscriptionPlan>;
  suburbCode?: InputMaybe<Scalars['String']['input']>;
};

export enum AgenciesConnectionOptionsCrmStatus {
  Integrated = 'INTEGRATED',
  NotIntegrated = 'NOT_INTEGRATED',
  NoCrm = 'NO_CRM',
}

export enum AgenciesConnectionOptionsSortBy {
  EnquiriesCount = 'ENQUIRIES_COUNT',
  Id = 'ID',
}

export enum AgenciesSubscriptionPlan {
  FbPortal = 'FB_PORTAL',
  Mailbox = 'MAILBOX',
  Reach = 'REACH',
  ReachHighlight = 'REACH_HIGHLIGHT',
  ReachPremier = 'REACH_PREMIER',
}

export type Agency = {
  __typename?: 'Agency';
  aboutUs?: Maybe<Scalars['String']['output']>;
  accountManager?: Maybe<AgencyAccountManager>;
  adminEmail?: Maybe<Scalars['String']['output']>;
  adminFirstName?: Maybe<Scalars['String']['output']>;
  adminLastName?: Maybe<Scalars['String']['output']>;
  adminMobile?: Maybe<Scalars['String']['output']>;
  agencyCrmEmail?: Maybe<Array<Maybe<AgencyCrmEmail>>>;
  /** @deprecated Use `initials`. */
  agencyInitials?: Maybe<Scalars['String']['output']>;
  agencyLogoUrl?: Maybe<Scalars['String']['output']>;
  agencySubscriptionStatus?: Maybe<Scalars['String']['output']>;
  agents?: Maybe<Array<Maybe<Agent>>>;
  agentsConnection?: Maybe<AgentsConnection>;
  automatedAdSetting?: Maybe<AgencyAutomatedAdSetting>;
  bannerColor?: Maybe<Scalars['String']['output']>;
  championEmail?: Maybe<Scalars['String']['output']>;
  championFirstName?: Maybe<Scalars['String']['output']>;
  championLastName?: Maybe<Scalars['String']['output']>;
  championMobile?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  coverPhotoUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  crmEmail?: Maybe<Scalars['String']['output']>;
  crmIntegrations?: Maybe<Array<Maybe<AgencyCrm>>>;
  email?: Maybe<Scalars['String']['output']>;
  enquiryEmails?: Maybe<Array<Maybe<EnquiryEmail>>>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  initials?: Maybe<Scalars['String']['output']>;
  integrationByType?: Maybe<Integration>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isBap?: Maybe<Scalars['Boolean']['output']>;
  isDisabled?: Maybe<Scalars['Boolean']['output']>;
  isFollowedByConsumer?: Maybe<Scalars['Boolean']['output']>;
  isFromSignUp?: Maybe<Scalars['Boolean']['output']>;
  isReip?: Maybe<Scalars['Boolean']['output']>;
  landlineNumber?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latestForRentProperties?: Maybe<Array<Maybe<Property>>>;
  latestForSaleProperties?: Maybe<Array<Maybe<Property>>>;
  location?: Maybe<Array<Maybe<Location>>>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  marketingContactEmail?: Maybe<Scalars['String']['output']>;
  marketingContactFirstName?: Maybe<Scalars['String']['output']>;
  marketingContactLastName?: Maybe<Scalars['String']['output']>;
  marketingContactMobile?: Maybe<Scalars['String']['output']>;
  miniLogoUrl?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  officeEmail?: Maybe<Scalars['String']['output']>;
  originalLogoUrl?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['Int']['output']>;
  profileVideo?: Maybe<Scalars['String']['output']>;
  propertiesConnection?: Maybe<PropertiesConnection>;
  propertyEnquiriesConnection?: Maybe<PropertyEnquiriesConnection>;
  propertyFbPostsConnection?: Maybe<PropertyFbPostsConnection>;
  propertyPromotionGroupsConnection?: Maybe<PropertyPromotionGroupsConnection>;
  rentalEnquiryEmail?: Maybe<Scalars['String']['output']>;
  reportEmails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  scrapedCount?: Maybe<Scalars['Int']['output']>;
  settings?: Maybe<AgencySetting>;
  slugUrl?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<AgencyStatistics>;
  street?: Maybe<Scalars['String']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  subscription?: Maybe<AgencySubscription>;
  subscriptions?: Maybe<Array<Maybe<AgencySubscription>>>;
  suburb?: Maybe<Scalars['String']['output']>;
  tempPassword?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['ID']['output'];
};

export type AgencyAgentsConnectionArgs = {
  filter?: InputMaybe<AgentsConnectionFilter>;
};

export type AgencyIntegrationByTypeArgs = {
  type?: InputMaybe<IntegrationType>;
};

export type AgencyPropertiesConnectionArgs = {
  filter?: InputMaybe<PropertiesConnectionFilter>;
};

export type AgencyPropertyEnquiriesConnectionArgs = {
  options?: InputMaybe<AgencyPropertyEnquiriesConnectionOptions>;
};

export type AgencyPropertyFbPostsConnectionArgs = {
  filter?: InputMaybe<PropertyFbPostsConnectionFilter>;
};

export type AgencyPropertyPromotionGroupsConnectionArgs = {
  options?: InputMaybe<PropertyPromotionGroupsConnectionOptions>;
};

export type AgencyAccountManager = {
  __typename?: 'AgencyAccountManager';
  adminUser?: Maybe<AdminUser>;
  agency?: Maybe<Agency>;
  id: Scalars['ID']['output'];
};

export type AgencyAutomatedAdSetting = {
  __typename?: 'AgencyAutomatedAdSetting';
  agency?: Maybe<Agency>;
  campaignRentalBudget?: Maybe<Scalars['Float']['output']>;
  campaignRentalDays?: Maybe<Scalars['Int']['output']>;
  campaignRentalIsPackage?: Maybe<Scalars['Boolean']['output']>;
  campaignSaleBudget?: Maybe<Scalars['Float']['output']>;
  campaignSaleDays?: Maybe<Scalars['Int']['output']>;
  campaignSaleIsPackage?: Maybe<Scalars['Boolean']['output']>;
  campaignSoldBudget?: Maybe<Scalars['Float']['output']>;
  campaignSoldDays?: Maybe<Scalars['Int']['output']>;
  campaignSoldIsPackage?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isBoostForRent?: Maybe<Scalars['Boolean']['output']>;
  isBoostForSale?: Maybe<Scalars['Boolean']['output']>;
  isBoostSold?: Maybe<Scalars['Boolean']['output']>;
  isSendReport?: Maybe<Scalars['Boolean']['output']>;
  reportEmail?: Maybe<Scalars['String']['output']>;
  startListingDate?: Maybe<Scalars['Date']['output']>;
  uuid: Scalars['ID']['output'];
};

export type AgencyBillingCardInput = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  addressZip?: InputMaybe<Scalars['String']['input']>;
  billingCardId?: InputMaybe<Scalars['String']['input']>;
  expiredMonth?: InputMaybe<Scalars['Int']['input']>;
  expiredYear?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  newDefaultCardId?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
};

export type AgencyConnection = {
  __typename?: 'AgencyConnection';
  edges?: Maybe<Array<Maybe<AgencyEdge>>>;
  nodes?: Maybe<Array<Maybe<Agency>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgencyContactTracker = {
  __typename?: 'AgencyContactTracker';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  ipInfo?: Maybe<IpInfo>;
  pageUrl?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Scalars['String']['output']>;
  type?: Maybe<AgencyContactTrackerType>;
};

export enum AgencyContactTrackerType {
  Email = 'EMAIL',
  Number = 'NUMBER',
}

export type AgencyCrm = {
  __typename?: 'AgencyCrm';
  agency?: Maybe<Agency>;
  authorizedAt?: Maybe<Scalars['Date']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  crm?: Maybe<Crm>;
  eagleConfig?: Maybe<AgencyCrmEagleConfig>;
  id: Scalars['ID']['output'];
  integrationCode?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAuthorized?: Maybe<Scalars['Boolean']['output']>;
  isIntegrated?: Maybe<Scalars['Boolean']['output']>;
  lastEmailedAt?: Maybe<Scalars['Date']['output']>;
  lockedonConfig?: Maybe<AgencyCrmLockedonConfig>;
  statistics?: Maybe<AgencyCrmStatistics>;
  zenuConfig?: Maybe<AgencyCrmZenuConfig>;
};

export type AgencyCrmEagleConfig = {
  __typename?: 'AgencyCrmEagleConfig';
  agency?: Maybe<Agency>;
  agencyCrm?: Maybe<AgencyCrm>;
  clientId?: Maybe<Scalars['String']['output']>;
  clientSecret?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isSendEnquiries?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  uuid: Scalars['ID']['output'];
};

export type AgencyCrmEmail = {
  __typename?: 'AgencyCrmEmail';
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
};

export type AgencyCrmLockedonConfig = {
  __typename?: 'AgencyCrmLockedonConfig';
  agency?: Maybe<Agency>;
  agencyCrm?: Maybe<AgencyCrm>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  officeId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  uuid: Scalars['ID']['output'];
};

export type AgencyCrmPublishedStatistics = {
  __typename?: 'AgencyCrmPublishedStatistics';
  forRentCount?: Maybe<Scalars['Int']['output']>;
  forSaleCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  listingCount?: Maybe<Scalars['Int']['output']>;
  soldCount?: Maybe<Scalars['Int']['output']>;
};

export type AgencyCrmStatistics = {
  __typename?: 'AgencyCrmStatistics';
  forRentCount?: Maybe<Scalars['Int']['output']>;
  forSaleCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  listingCount?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<AgencyCrmPublishedStatistics>;
  soldCount?: Maybe<Scalars['Int']['output']>;
};

export type AgencyCrmZenuConfig = {
  __typename?: 'AgencyCrmZenuConfig';
  agency?: Maybe<Agency>;
  agencyCrm?: Maybe<AgencyCrm>;
  authorisationId?: Maybe<Scalars['String']['output']>;
  authorisationToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  uuid: Scalars['ID']['output'];
};

export type AgencyDevelopersSignUpRequestInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type AgencyEdge = {
  __typename?: 'AgencyEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Agency>;
};

export type AgencyEnquiryWebhook = {
  __typename?: 'AgencyEnquiryWebhook';
  agency?: Maybe<Agency>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  officeId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<AgencyEnquiryWebhookType>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['ID']['output'];
};

export enum AgencyEnquiryWebhookType {
  LockedOn = 'LOCKED_ON',
  PropNow = 'PROP_NOW',
}

export type AgencyForgotPassword = {
  __typename?: 'AgencyForgotPassword';
  agencyId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isValid?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AgencyGroup = {
  __typename?: 'AgencyGroup';
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  membersConnection?: Maybe<AgencyGroupMembersConnection>;
  name?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<AgencyGroupStatistics>;
  tempPassword?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['ID']['output'];
};

export type AgencyGroupMembersConnectionArgs = {
  options?: InputMaybe<AgencyGroupMembersConnectionOptions>;
};

export type AgencyGroupEdge = {
  __typename?: 'AgencyGroupEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgencyGroup>;
};

export type AgencyGroupMember = {
  __typename?: 'AgencyGroupMember';
  agency?: Maybe<Agency>;
  agencyGroup?: Maybe<AgencyGroup>;
  id: Scalars['ID']['output'];
};

export type AgencyGroupMemberEdge = {
  __typename?: 'AgencyGroupMemberEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgencyGroupMember>;
};

export type AgencyGroupMembersConnection = {
  __typename?: 'AgencyGroupMembersConnection';
  edges?: Maybe<Array<Maybe<AgencyGroupMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<AgencyGroupMember>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgencyGroupMembersConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agencyUuid?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdDateRange?: InputMaybe<DateRangeInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AgencyGroupStatisticViews = {
  __typename?: 'AgencyGroupStatisticViews';
  id: Scalars['ID']['output'];
  pageViews?: Maybe<Scalars['Int']['output']>;
  searchViews?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AgencyGroupStatistics = {
  __typename?: 'AgencyGroupStatistics';
  agentNumberCallCount?: Maybe<Scalars['Int']['output']>;
  agentNumberRevealCount?: Maybe<Scalars['Int']['output']>;
  audienceByDevice?: Maybe<AgencyGroupStatisticsAudienceByDevice>;
  dailyAgentNumberCalls?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyAgentNumberReveals?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyEngagements?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyEnquiries?: Maybe<Array<Maybe<DateCountMap>>>;
  dailySearchViews?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyViews?: Maybe<Array<Maybe<DateCountMap>>>;
  engagementsCount?: Maybe<Scalars['Int']['output']>;
  enquiriesCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  newPropertyListingsCount?: Maybe<Scalars['Int']['output']>;
  socialPostsCount?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<AgencyGroupStatisticViews>;
};

export type AgencyGroupStatisticsAgentNumberCallCountArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsAgentNumberRevealCountArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsAudienceByDeviceArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsDailyAgentNumberCallsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsDailyAgentNumberRevealsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsDailyEngagementsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsDailyEnquiriesArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsDailySearchViewsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsDailyViewsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsEngagementsCountArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsEnquiriesCountArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsNewPropertyListingsCountArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsSocialPostsCountArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsViewsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyGroupStatisticsAudienceByDevice = {
  __typename?: 'AgencyGroupStatisticsAudienceByDevice';
  desktop?: Maybe<Scalars['Int']['output']>;
  desktopPercent?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  mobile?: Maybe<Scalars['Int']['output']>;
  mobilePercent?: Maybe<Scalars['Float']['output']>;
  tablet?: Maybe<Scalars['Int']['output']>;
  tabletPercent?: Maybe<Scalars['Float']['output']>;
};

export type AgencyGroupsConnection = {
  __typename?: 'AgencyGroupsConnection';
  edges?: Maybe<Array<Maybe<AgencyGroupEdge>>>;
  nodes?: Maybe<Array<Maybe<AgencyGroup>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgencyGroupsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdDateRange?: InputMaybe<DateRangeInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AgencyPropertiesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<PropertyGroup>;
  tier?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AgencyPropertyEnquiriesConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<PropertyEnquiryGroup>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgencySetting = {
  __typename?: 'AgencySetting';
  agency?: Maybe<Agency>;
  id: Scalars['ID']['output'];
  isAdvertiseFindAds?: Maybe<Scalars['Boolean']['output']>;
  isAdvertiseThribee?: Maybe<Scalars['Boolean']['output']>;
  isPostRental?: Maybe<Scalars['Boolean']['output']>;
  isPostSale?: Maybe<Scalars['Boolean']['output']>;
  isPostSold?: Maybe<Scalars['Boolean']['output']>;
  isSendBuyerEnquiries?: Maybe<Scalars['Boolean']['output']>;
  isSendGeneralNews?: Maybe<Scalars['Boolean']['output']>;
  isSendMarketingInitiatives?: Maybe<Scalars['Boolean']['output']>;
  isSendNewListingNotification?: Maybe<Scalars['Boolean']['output']>;
  isSendTpsNotification?: Maybe<Scalars['Boolean']['output']>;
  timezone?: Maybe<Scalars['Timezone']['output']>;
  timezoneOffset?: Maybe<Scalars['Int']['output']>;
};

export type AgencySitemap = {
  __typename?: 'AgencySitemap';
  agencyId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AgencyStatistics = {
  __typename?: 'AgencyStatistics';
  agentNumberCallCount?: Maybe<Scalars['Int']['output']>;
  agentNumberRevealCount?: Maybe<Scalars['Int']['output']>;
  aggregatedPropertyFbPostsStatistics?: Maybe<AggregatedPropertyFbPostStatistics>;
  audienceByDevice?: Maybe<AgencyStatisticsAudienceByDevice>;
  dailyAgentNumberCalls?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyAgentNumberReveals?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyEngagements?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyEnquiries?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyForRentCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyForSaleCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailySearchViews?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyViews?: Maybe<Array<Maybe<DateCountMap>>>;
  emailRevealCount?: Maybe<Scalars['Int']['output']>;
  engagements?: Maybe<AgencyStatisticsEngagements>;
  engagementsByProperty?: Maybe<Array<Maybe<AgencyStatisticsEngagementsByProperty>>>;
  engagementsCount?: Maybe<Scalars['Int']['output']>;
  enquiriesCount?: Maybe<Scalars['Int']['output']>;
  forRentCount?: Maybe<Scalars['Int']['output']>;
  forSaleCount?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use `forSaleCount`. */
  forSaleRentListingCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastXMLUpdate?: Maybe<Scalars['Date']['output']>;
  newPropertyListingsCount?: Maybe<Scalars['Int']['output']>;
  numberRevealCount?: Maybe<Scalars['Int']['output']>;
  ofiTimesCount?: Maybe<Scalars['Int']['output']>;
  propertyPostalCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  propertySavedInspectionTimesCount?: Maybe<Scalars['Int']['output']>;
  savedPropertiesCount?: Maybe<Scalars['Int']['output']>;
  socialPostsCount?: Maybe<Scalars['Int']['output']>;
  soldCount?: Maybe<Scalars['Int']['output']>;
  topPropertiesByEnquiry?: Maybe<Array<Maybe<Property>>>;
  views?: Maybe<AgencyStatisticsViews>;
  viewsByProperty?: Maybe<Array<Maybe<AgencyStatisticsViewsByProperty>>>;
};

export type AgencyStatisticsAgentNumberCallCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgencyStatisticsAgentNumberRevealCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgencyStatisticsAggregatedPropertyFbPostsStatisticsArgs = {
  filter: AggregatedPropertyFbPostStatisticsFilter;
};

export type AgencyStatisticsAudienceByDeviceArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsDailyAgentNumberCallsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsDailyAgentNumberRevealsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsDailyEngagementsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsDailyEnquiriesArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsDailyForRentCountArgs = {
  filter: DailyCountFilter;
};

export type AgencyStatisticsDailyForSaleCountArgs = {
  filter: DailyCountFilter;
};

export type AgencyStatisticsDailySearchViewsArgs = {
  endDate: Scalars['Date']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsDailyViewsArgs = {
  endDate: Scalars['Date']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsEmailRevealCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgencyStatisticsEngagementsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsEngagementsByPropertyArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsEngagementsCountArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsEnquiriesCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgencyStatisticsForRentCountArgs = {
  options?: InputMaybe<ForRentCountOptions>;
};

export type AgencyStatisticsForSaleCountArgs = {
  options?: InputMaybe<ForSaleCountOptions>;
};

export type AgencyStatisticsForSaleRentListingCountArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsLastXmlUpdateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AgencyStatisticsNewPropertyListingsCountArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsNumberRevealCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgencyStatisticsSocialPostsCountArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsSoldCountArgs = {
  options?: InputMaybe<SoldCountOptions>;
};

export type AgencyStatisticsTopPropertiesByEnquiryArgs = {
  options: AgencyStatisticsTopPropertiesByEnquiryFilter;
};

export type AgencyStatisticsViewsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsViewsByPropertyArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type AgencyStatisticsAudienceByDevice = {
  __typename?: 'AgencyStatisticsAudienceByDevice';
  desktop?: Maybe<Scalars['Int']['output']>;
  desktopPercent?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  mobile?: Maybe<Scalars['Int']['output']>;
  mobilePercent?: Maybe<Scalars['Float']['output']>;
  tablet?: Maybe<Scalars['Int']['output']>;
  tabletPercent?: Maybe<Scalars['Float']['output']>;
};

export type AgencyStatisticsEngagements = {
  __typename?: 'AgencyStatisticsEngagements';
  id: Scalars['ID']['output'];
  propertyPageFloorplanViews?: Maybe<Scalars['Int']['output']>;
  propertyPageImageViews?: Maybe<Scalars['Int']['output']>;
  propertyPageVideoViews?: Maybe<Scalars['Int']['output']>;
  searchPageFloorplanViews?: Maybe<Scalars['Int']['output']>;
  searchPageImageViews?: Maybe<Scalars['Int']['output']>;
  searchPageVideoViews?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AgencyStatisticsEngagementsByProperty = {
  __typename?: 'AgencyStatisticsEngagementsByProperty';
  id: Scalars['ID']['output'];
  property?: Maybe<Property>;
  propertyPageFloorplanViews?: Maybe<Scalars['Int']['output']>;
  propertyPageImageViews?: Maybe<Scalars['Int']['output']>;
  propertyPageVideoViews?: Maybe<Scalars['Int']['output']>;
  searchPageFloorplanViews?: Maybe<Scalars['Int']['output']>;
  searchPageImageViews?: Maybe<Scalars['Int']['output']>;
  searchPageVideoViews?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AgencyStatisticsTopPropertiesByEnquiryFilter = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  group?: InputMaybe<PropertyGroup>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgencyStatisticsViews = {
  __typename?: 'AgencyStatisticsViews';
  id: Scalars['ID']['output'];
  pageViews?: Maybe<Scalars['Int']['output']>;
  searchViews?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AgencyStatisticsViewsByProperty = {
  __typename?: 'AgencyStatisticsViewsByProperty';
  id: Scalars['ID']['output'];
  pageViews?: Maybe<Scalars['Int']['output']>;
  property?: Maybe<Property>;
  searchViews?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AgencySubscription = {
  __typename?: 'AgencySubscription';
  agency?: Maybe<Agency>;
  agencyId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isTrial?: Maybe<Scalars['Boolean']['output']>;
  package?: Maybe<AgencySubscriptionPackage>;
  startDate?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
  subscriptionType?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AgencySubscriptionCoupon = {
  __typename?: 'AgencySubscriptionCoupon';
  amountOff?: Maybe<Scalars['Float']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  percentOff?: Maybe<Scalars['Float']['output']>;
  valid?: Maybe<Scalars['Boolean']['output']>;
};

export enum AgencySubscriptionPackage {
  Commercial = 'COMMERCIAL',
  Developers = 'DEVELOPERS',
  FbPortal = 'FB_PORTAL',
  Mailbox = 'MAILBOX',
  Reach = 'REACH',
  ReachHighlight = 'REACH_HIGHLIGHT',
  ReachPremier = 'REACH_PREMIER',
}

export type AgencySuggestionsFilter = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export type AgencyVerify = {
  __typename?: 'AgencyVerify';
  agencyId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isValid?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  verificationKey?: Maybe<Scalars['String']['output']>;
};

export type Agent = {
  __typename?: 'Agent';
  aboutHtml?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  agency?: Maybe<Agency>;
  agencyLogo?: Maybe<Scalars['String']['output']>;
  agencyName?: Maybe<Scalars['String']['output']>;
  agencySlugUrl?: Maybe<Scalars['String']['output']>;
  agentFbIntegration?: Maybe<AgentFacebookPage>;
  /** Buyer Agent has areaOfSpecializationLocationType */
  agentLocationStates?: Maybe<Array<Maybe<AgentLocation>>>;
  agentType?: Maybe<Scalars['String']['output']>;
  areaOfSpecializationLocationType?: Maybe<AreaOfSpecializationLocationType>;
  areaOfSpecializations?: Maybe<Array<Maybe<AreaOfSpecialization>>>;
  automatedAdSetting?: Maybe<AgentAutomatedAdSetting>;
  billingCards?: Maybe<AgentStripeCustomerInfo>;
  briefsConnection?: Maybe<AgentBriefsConnection>;
  broker?: Maybe<Broker>;
  brokerBuyerInvite?: Maybe<Array<Maybe<BrokerBuyerInvite>>>;
  businessNumber?: Maybe<Scalars['String']['output']>;
  buyerContents?: Maybe<Array<Maybe<AgentContent>>>;
  buyerTransactionsConnection?: Maybe<AgentBuyerTransactionsConnection>;
  canAvail?: Maybe<Scalars['Boolean']['output']>;
  canAvailBuy1Take1Offer?: Maybe<Buy1Take1Result>;
  checklist?: Maybe<AgentChecklist>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactNo?: Maybe<Scalars['String']['output']>;
  contactsConnection?: Maybe<AgentContactsConnection>;
  conversationsConnection?: Maybe<AgentConversationsConnection>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  crmLeadEmails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  directorySubscriptionInterval?: Maybe<Scalars['String']['output']>;
  directorySubscriptionsConnection?: Maybe<AgentDirectorySubscriptionsConnection>;
  email?: Maybe<Scalars['String']['output']>;
  enquiryEmail?: Maybe<Scalars['String']['output']>;
  enquiryEmails?: Maybe<Array<Maybe<EnquiryEmail>>>;
  facebook?: Maybe<Scalars['String']['output']>;
  fbLink?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  freeSuburbs?: Maybe<AgentDirectorySubscription>;
  fullName?: Maybe<Scalars['String']['output']>;
  hasActiveAccelerateOrElevateSubscription?: Maybe<Scalars['Boolean']['output']>;
  hasDirectorySubscription?: Maybe<Scalars['Boolean']['output']>;
  /** Separated Agent Location since HO has no areaOfSpecializationLocationType */
  hoLocationStates?: Maybe<Array<Maybe<AgentLocation>>>;
  id: Scalars['ID']['output'];
  initials?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  instagramUsername?: Maybe<Scalars['String']['output']>;
  integrationByType?: Maybe<Integration>;
  isContactEmailForInquiry?: Maybe<Scalars['Boolean']['output']>;
  isDisabled?: Maybe<Scalars['Boolean']['output']>;
  isDisplayInDirectory?: Maybe<Scalars['Boolean']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isFollowedByConsumer?: Maybe<Scalars['Boolean']['output']>;
  landlineNumber?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Maybe<AgentLanguage>>>;
  lastLogin?: Maybe<Scalars['Date']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  licenseNumber?: Maybe<Scalars['String']['output']>;
  linkedIn?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Array<Maybe<Location>>>;
  marketVideo?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `AgentStatistics.medianSoldPrice`. */
  medianSoldPrice?: Maybe<Scalars['Float']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  mobileNumberCountryCode?: Maybe<Scalars['Int']['output']>;
  offersConnection?: Maybe<AgentOffersConnection>;
  order?: Maybe<Scalars['Int']['output']>;
  platformAgent?: Maybe<PlatformAgent>;
  position?: Maybe<Scalars['String']['output']>;
  pricingType?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  profileVideo?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<Array<Maybe<Property>>>;
  propertiesConnection?: Maybe<PropertiesConnection>;
  /** @deprecated No longer supported */
  propertiesLocation?: Maybe<Array<Maybe<Location>>>;
  propertyEnquiriesConnection?: Maybe<PropertyEnquiriesConnection>;
  propertyFbPostsConnection?: Maybe<PropertyFbPostsConnection>;
  propertyInspectionsConnection?: Maybe<AgentPropertyInspectionsConnection>;
  /** @deprecated Use `AgentStatistics.listingCount`. */
  propertyListings?: Maybe<Scalars['Int']['output']>;
  propertyLiveStreamsConnection?: Maybe<PropertyLiveStreamConnection>;
  /** Please use propertyLocations */
  propertyLocations?: Maybe<Array<Maybe<Location>>>;
  /** @deprecated Use `AgentStatistics.soldCount`. */
  propertySales?: Maybe<Scalars['Int']['output']>;
  propertyShortlistsConnection?: Maybe<AgentPropertyShortlistsConnection>;
  reaUrl?: Maybe<Scalars['String']['output']>;
  rentalInquiryEmail?: Maybe<Scalars['String']['output']>;
  reportEmails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  reviewRating?: Maybe<ReviewRating>;
  reviewsConnection?: Maybe<ReviewsConnection>;
  role?: Maybe<AgentRole>;
  sellLine?: Maybe<Scalars['String']['output']>;
  services?: Maybe<Array<Maybe<AgentService>>>;
  settings?: Maybe<AgentSetting>;
  /** @deprecated Use `Agent.propertyShortlistsConnection`. */
  shortlistPropertiesConnection?: Maybe<PropertiesConnection>;
  slugUrl?: Maybe<Scalars['String']['output']>;
  soldCountAYear?: Maybe<Scalars['Int']['output']>;
  soldVideo?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<AgentStatistics>;
  stripeCustomerBillingInfo?: Maybe<StripeCustomerBillingInfo>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  subscriptionByPackage?: Maybe<AgentSubscription>;
  subscriptionByPackages?: Maybe<AgentSubscription>;
  subscriptionsConnection?: Maybe<AgentSubscriptionsConnection>;
  suburbsConnection?: Maybe<AgentSuburbsConnection>;
  tempPassword?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  type?: Maybe<AgentType>;
  userName?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
  vendorLeads?: Maybe<Scalars['String']['output']>;
  whatsapp?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type AgentBriefsConnectionArgs = {
  options?: InputMaybe<AgentBriefsConnectionOptions>;
};

export type AgentBrokerBuyerInviteArgs = {
  brokerId?: InputMaybe<Scalars['ID']['input']>;
};

export type AgentBuyerTransactionsConnectionArgs = {
  options?: InputMaybe<AgentBuyerTransactionsOptions>;
};

export type AgentContactsConnectionArgs = {
  options?: InputMaybe<AgentContactsConnectionOptions>;
};

export type AgentConversationsConnectionArgs = {
  options?: InputMaybe<AgentConversationsConnectionOptions>;
};

export type AgentDirectorySubscriptionsConnectionArgs = {
  filter?: InputMaybe<AgentDirectorySubscriptionsConnectionFilter>;
};

export type AgentIntegrationByTypeArgs = {
  type?: InputMaybe<IntegrationType>;
};

export type AgentOffersConnectionArgs = {
  options?: InputMaybe<AgentOffersConnectionOptions>;
};

export type AgentPropertiesConnectionArgs = {
  filter?: InputMaybe<PropertiesConnectionFilter>;
};

export type AgentPropertiesLocationArgs = {
  group?: InputMaybe<Scalars['String']['input']>;
};

export type AgentPropertyEnquiriesConnectionArgs = {
  options?: InputMaybe<AgentPropertyEnquiriesConnectionOptions>;
};

export type AgentPropertyFbPostsConnectionArgs = {
  filter?: InputMaybe<AgentFbPostsConnectionFilter>;
};

export type AgentPropertyInspectionsConnectionArgs = {
  options?: InputMaybe<AgentPropertyInspectionsConnectionOptions>;
};

export type AgentPropertyLiveStreamsConnectionArgs = {
  options?: InputMaybe<PropertyLiveStreamsConnectionOptions>;
};

export type AgentPropertyLocationsArgs = {
  group?: InputMaybe<PropertyGroup>;
};

export type AgentPropertyShortlistsConnectionArgs = {
  options?: InputMaybe<AgentPropertyShortlistsOptions>;
};

export type AgentReviewsConnectionArgs = {
  filter?: InputMaybe<ReviewsConnectionFilter>;
};

export type AgentShortlistPropertiesConnectionArgs = {
  filter?: InputMaybe<PropertiesConnectionFilter>;
};

export type AgentStatisticsArgs = {
  filter?: InputMaybe<PerformanceStatisticsFilter>;
};

export type AgentSubscriptionByPackageArgs = {
  package: AgentSubscriptionPackage;
};

export type AgentSubscriptionByPackagesArgs = {
  packages: Array<InputMaybe<AgentSubscriptionPackage>>;
};

export type AgentSubscriptionsConnectionArgs = {
  options?: InputMaybe<AgentSubscriptionsConnectionOptions>;
};

export type AgentSuburbsConnectionArgs = {
  filter?: InputMaybe<AgentSuburbsConnectionFilter>;
};

export type AgentAudienceByDevice = {
  __typename?: 'AgentAudienceByDevice';
  desktopCount?: Maybe<Scalars['Int']['output']>;
  desktopPercent?: Maybe<Scalars['String']['output']>;
  mobileCount?: Maybe<Scalars['Int']['output']>;
  mobilePercent?: Maybe<Scalars['String']['output']>;
  tabletCount?: Maybe<Scalars['Int']['output']>;
  tabletPercent?: Maybe<Scalars['String']['output']>;
};

export type AgentAutomatedAdSetting = {
  __typename?: 'AgentAutomatedAdSetting';
  agent?: Maybe<Agent>;
  campaignRentalBudget?: Maybe<Scalars['Float']['output']>;
  campaignRentalDays?: Maybe<Scalars['Int']['output']>;
  campaignSaleBudget?: Maybe<Scalars['Float']['output']>;
  campaignSaleDays?: Maybe<Scalars['Int']['output']>;
  campaignSoldBudget?: Maybe<Scalars['Float']['output']>;
  campaignSoldDays?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isBoostForRent?: Maybe<Scalars['Boolean']['output']>;
  isBoostForSale?: Maybe<Scalars['Boolean']['output']>;
  isBoostSold?: Maybe<Scalars['Boolean']['output']>;
  isSendReport?: Maybe<Scalars['Boolean']['output']>;
  reportEmail?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['ID']['output'];
};

export type AgentBillingCardInput = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  addressZip?: InputMaybe<Scalars['String']['input']>;
  billingCardId?: InputMaybe<Scalars['String']['input']>;
  expiredMonth?: InputMaybe<Scalars['Int']['input']>;
  expiredYear?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  newDefaultCardId?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
};

export type AgentBoxExternalAgent = {
  __typename?: 'AgentBoxExternalAgent';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type AgentBoxListing = {
  __typename?: 'AgentBoxListing';
  address?: Maybe<Scalars['String']['output']>;
  bath?: Maybe<Scalars['Int']['output']>;
  bed?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  externalAgent?: Maybe<AgentBoxExternalAgent>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  latitude?: Maybe<Scalars['Float']['output']>;
  listingUrl?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  mainHeadline?: Maybe<Scalars['String']['output']>;
  mainImage?: Maybe<Scalars['String']['output']>;
  officeId?: Maybe<Scalars['String']['output']>;
  officeName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalParking?: Maybe<Scalars['Int']['output']>;
};

export type AgentBrief = {
  __typename?: 'AgentBrief';
  /** @deprecated Use `isUnlockedAllProperties` to check if properties are unlocked. Use Purchase.stripeChargeId  */
  additionalClients?: Maybe<Array<Maybe<AgentBriefClient>>>;
  agent?: Maybe<Agent>;
  /** @deprecated Use `offersConnection`. */
  agentOffers?: Maybe<Array<Maybe<AgentOffer>>>;
  agentPropertyInspectionsConnection?: Maybe<AgentPropertyInspectionsConnection>;
  agentPropertyShortlist?: Maybe<AgentPropertyShortlist>;
  bankLender?: Maybe<Scalars['String']['output']>;
  bath?: Maybe<Scalars['Int']['output']>;
  bed?: Maybe<Scalars['Int']['output']>;
  briefLocations?: Maybe<Array<Maybe<AgentBriefLocation>>>;
  conveyancer?: Maybe<Scalars['String']['output']>;
  conveyancerContactDetails?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  crimeRatingPercent?: Maybe<Scalars['Float']['output']>;
  daysOnMarket?: Maybe<Scalars['Int']['output']>;
  deadline?: Maybe<Scalars['Date']['output']>;
  distanceFromPublicTransport?: Maybe<Scalars['Int']['output']>;
  distanceFromSchoolCatchments?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  featuresKeyword?: Maybe<Scalars['String']['output']>;
  fireRiskFactor?: Maybe<Scalars['Int']['output']>;
  floodRiskFactor?: Maybe<Scalars['Int']['output']>;
  hasActiveOffers?: Maybe<Scalars['Boolean']['output']>;
  hasEasementIdentified?: Maybe<YesNoValue>;
  hasProperties?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAgentOfferLinked?: Maybe<Scalars['Boolean']['output']>;
  isPropertyEnquired?: Maybe<Scalars['Boolean']['output']>;
  isPropertyShortlisted?: Maybe<Scalars['Boolean']['output']>;
  isUnlockedAllProperties?: Maybe<Scalars['Boolean']['output']>;
  landAreaMax?: Maybe<Scalars['Int']['output']>;
  landAreaMin?: Maybe<Scalars['Int']['output']>;
  linkedPropertiesConnection?: Maybe<PropertiesConnection>;
  locations?: Maybe<Array<Maybe<Location>>>;
  maxDistanceFromSuburb?: Maybe<Scalars['Int']['output']>;
  maxPrice?: Maybe<Scalars['Int']['output']>;
  minPrice?: Maybe<Scalars['Int']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  mobileNumberCountryCode?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  offersConnection?: Maybe<AgentOffersConnection>;
  order?: Maybe<Scalars['Int']['output']>;
  ownerOccRentalPercent?: Maybe<Scalars['Float']['output']>;
  parking?: Maybe<Scalars['Int']['output']>;
  postalAddress?: Maybe<Scalars['String']['output']>;
  progress?: Maybe<AgentBriefProgress>;
  propertiesConnection?: Maybe<AgentBriefPropertiesConnection>;
  propertyCategories?: Maybe<Array<Maybe<PropertyCategory>>>;
  propertyEnquiriesConnection?: Maybe<PropertyEnquiriesConnection>;
  propertyGroup?: Maybe<AgentBriefPropertyGroup>;
  proximityPlaces?: Maybe<Array<Maybe<AgentBriefProximityPlaces>>>;
  purchase?: Maybe<Purchase>;
  purchasingEntity?: Maybe<Scalars['String']['output']>;
  searchCountData?: Maybe<Scalars['Int']['output']>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  secondaryMobileNumber?: Maybe<Scalars['String']['output']>;
  secondaryMobileNumberCountryCode?: Maybe<Scalars['Int']['output']>;
  secondaryName?: Maybe<Scalars['String']['output']>;
  sellerCode?: Maybe<Scalars['String']['output']>;
  socialHousingPercent?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<AgentBriefSource>;
  status?: Maybe<BriefStatus>;
  stripeChargeId?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<BuyerType>;
  unreadAgentBriefPropertyCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  vacancyRatePercent?: Maybe<Scalars['Float']['output']>;
  yieldPercent?: Maybe<Scalars['Float']['output']>;
};

export type AgentBriefAgentPropertyInspectionsConnectionArgs = {
  options?: InputMaybe<AgentBriefAgentPropertyInspectionsConnectionOptions>;
};

export type AgentBriefIsAgentOfferLinkedArgs = {
  propertyId: Scalars['ID']['input'];
};

export type AgentBriefIsPropertyEnquiredArgs = {
  propertyId: Scalars['ID']['input'];
};

export type AgentBriefIsPropertyShortlistedArgs = {
  propertyId: Scalars['ID']['input'];
};

export type AgentBriefLinkedPropertiesConnectionArgs = {
  options?: InputMaybe<LinkedPropertiesConnectionOptions>;
};

export type AgentBriefOffersConnectionArgs = {
  options?: InputMaybe<AgentOffersConnectionOptions>;
};

export type AgentBriefPropertiesConnectionArgs = {
  options?: InputMaybe<AgentBriefPropertiesConnectionOptions>;
};

export type AgentBriefPropertyEnquiriesConnectionArgs = {
  options?: InputMaybe<PropertyEnquiriesConnectionOptions>;
};

export type AgentBriefAgentPropertyInspectionsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type AgentBriefClient = {
  __typename?: 'AgentBriefClient';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  mobileNumberCountryCode?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AgentBriefEdge = {
  __typename?: 'AgentBriefEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentBrief>;
};

export type AgentBriefLocation = {
  __typename?: 'AgentBriefLocation';
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  maxDistanceFromSuburb?: Maybe<Scalars['Int']['output']>;
};

export type AgentBriefProgress = {
  __typename?: 'AgentBriefProgress';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<AgentBriefProgressStatus>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export enum AgentBriefProgressStatus {
  Accepted = 'ACCEPTED',
  Active = 'ACTIVE',
  Conveyancing = 'CONVEYANCING',
  Evaluation = 'EVALUATION',
  Inspect = 'INSPECT',
  InNegotiation = 'IN_NEGOTIATION',
  NewDeal = 'NEW_DEAL',
  OfferMade = 'OFFER_MADE',
  Settled = 'SETTLED',
  Shortlist = 'SHORTLIST',
  Transacted = 'TRANSACTED',
}

export type AgentBriefPropertiesConnection = {
  __typename?: 'AgentBriefPropertiesConnection';
  edges?: Maybe<Array<Maybe<AgentBriefPropertyEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentBriefProperty>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AgentBriefPropertiesConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  bath?: InputMaybe<NumberRangeInput>;
  bed?: InputMaybe<NumberRangeInput>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdDateRange?: InputMaybe<DateRangeInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isAiMatched?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeViewListing?: InputMaybe<Scalars['Boolean']['input']>;
  isPropertyPrePortal?: InputMaybe<Scalars['Boolean']['input']>;
  isPurchased?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPrePortalAndOnMarket?: InputMaybe<Scalars['Boolean']['input']>;
  isUnread?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  landArea?: InputMaybe<NumberRangeInput>;
  last?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Array<Scalars['ID']['input']>>;
  parking?: InputMaybe<NumberRangeInput>;
  price?: InputMaybe<NumberRangeInput>;
  sorting?: InputMaybe<AgentBriefPropertiesConnectionSortingOptions>;
};

export enum AgentBriefPropertiesConnectionSortingOptions {
  AiMatched = 'AI_MATCHED',
  Newest = 'NEWEST',
  PriceHighLow = 'PRICE_HIGH_LOW',
  PriceLowHigh = 'PRICE_LOW_HIGH',
  Unread = 'UNREAD',
}

export type AgentBriefProperty = {
  __typename?: 'AgentBriefProperty';
  agentBrief?: Maybe<AgentBrief>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  hasRead?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAiMatched?: Maybe<Scalars['Boolean']['output']>;
  isUnlockedProperty?: Maybe<Scalars['Boolean']['output']>;
  property?: Maybe<Property>;
  purchase?: Maybe<Purchase>;
  stripeChargeId?: Maybe<Scalars['ID']['output']>;
};

export type AgentBriefPropertyAlertsCountInput = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  isActiveBrief?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeTestAgency?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AgentBriefPropertyCategory = {
  __typename?: 'AgentBriefPropertyCategory';
  category?: Maybe<PropertyCategory>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AgentBriefPropertyEdge = {
  __typename?: 'AgentBriefPropertyEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentBriefProperty>;
};

export enum AgentBriefPropertyGroup {
  OnMarket = 'ON_MARKET',
  PrePortal = 'PRE_PORTAL',
}

export enum AgentBriefProximityPlaces {
  Cafe = 'CAFE',
  Childcare = 'CHILDCARE',
  MainRoad = 'MAIN_ROAD',
  Park = 'PARK',
  School = 'SCHOOL',
  Shop = 'SHOP',
}

export enum AgentBriefSource {
  Homeowner = 'HOMEOWNER',
  HomeownerBroker = 'HOMEOWNER_BROKER',
  HomeownerBrokerStrategy = 'HOMEOWNER_BROKER_STRATEGY',
  HomeownerEnquiry = 'HOMEOWNER_ENQUIRY',
  HomeownerStrategy = 'HOMEOWNER_STRATEGY',
  Htag = 'HTAG',
  Realty = 'REALTY',
}

export type AgentBriefsConnection = {
  __typename?: 'AgentBriefsConnection';
  edges?: Maybe<Array<Maybe<AgentBriefEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentBrief>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AgentBriefsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentBriefPropertyCreatedDateRange?: InputMaybe<DateRangeInput>;
  agentBriefUuids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  agentPropertyShortlistStatus?: InputMaybe<Array<InputMaybe<AgentPropertyShortlistStatus>>>;
  bath?: InputMaybe<NumberRangeInput>;
  bed?: InputMaybe<NumberRangeInput>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdDate?: InputMaybe<Scalars['Date']['input']>;
  deadlineDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasPropertyAlerts?: InputMaybe<Scalars['Boolean']['input']>;
  hasPropertyShorList?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeTestAgency?: InputMaybe<Scalars['Boolean']['input']>;
  isNotShortlisted?: InputMaybe<Scalars['Boolean']['input']>;
  isShowAgentBriefOfferLinked?: InputMaybe<Scalars['Boolean']['input']>;
  isShowAgentBriefPropertyEnquired?: InputMaybe<Scalars['Boolean']['input']>;
  isShowAgentBriefShortlisted?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSubBrokerBriefs?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  landArea?: InputMaybe<NumberRangeInput>;
  last?: InputMaybe<Scalars['Int']['input']>;
  parking?: InputMaybe<NumberRangeInput>;
  price?: InputMaybe<NumberRangeInput>;
  progressStatus?: InputMaybe<AgentBriefProgressStatus>;
  propertyCategories?: InputMaybe<Array<InputMaybe<PropertyCategory>>>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  sorting?: InputMaybe<AgentBriefsConnectionOptionsSorting>;
  sources?: InputMaybe<Array<InputMaybe<AgentBriefSource>>>;
  status?: InputMaybe<BriefStatus>;
  subBrokerIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  suburbsOfInterest?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum AgentBriefsConnectionOptionsSorting {
  Newest = 'NEWEST',
  Oldest = 'OLDEST',
  Order = 'ORDER',
}

export type AgentBriefsCountInput = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeTestAgency?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AgentBuyerPackage {
  BuyerAdvanced = 'BUYER_ADVANCED',
  BuyerAdvancedAddOn = 'BUYER_ADVANCED_ADD_ON',
  BuyerAdvancedTrial = 'BUYER_ADVANCED_TRIAL',
  BuyerBasic = 'BUYER_BASIC',
  BuyerFree = 'BUYER_FREE',
  BuyerPro = 'BUYER_PRO',
}

export enum AgentBuyerSubscriptionType {
  Annual = 'ANNUAL',
  Monthly = 'MONTHLY',
}

export type AgentBuyerTransaction = {
  __typename?: 'AgentBuyerTransaction';
  action?: Maybe<TransactionAction>;
  agent?: Maybe<Agent>;
  agentOffer?: Maybe<AgentOffer>;
  id: Scalars['ID']['output'];
  propertyEnquiry?: Maybe<PropertyEnquiry>;
  salesPrice?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<TransactionSource>;
  status?: Maybe<TransactionStatus>;
  stripeInvoiceId?: Maybe<Scalars['String']['output']>;
  transactionFee?: Maybe<Scalars['Float']['output']>;
};

export type AgentBuyerTransactionEdge = {
  __typename?: 'AgentBuyerTransactionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentBuyerTransaction>;
};

export type AgentBuyerTransactionsConnection = {
  __typename?: 'AgentBuyerTransactionsConnection';
  edges?: Maybe<Array<Maybe<AgentBuyerTransactionEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentBuyerTransaction>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AgentBuyerTransactionsOptions = {
  action?: InputMaybe<TransactionAction>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isIncludeTestAgency?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  propertyStatus?: InputMaybe<PropertyStatus>;
  source?: InputMaybe<TransactionSource>;
  status?: InputMaybe<TransactionStatus>;
};

export type AgentChecklist = {
  __typename?: 'AgentChecklist';
  agent?: Maybe<Agent>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  hasArrangedInsurance?: Maybe<Scalars['Boolean']['output']>;
  hasAttendedAuction?: Maybe<Scalars['Boolean']['output']>;
  hasAttendedSettlement?: Maybe<Scalars['Boolean']['output']>;
  hasBookedAdditionalInspection?: Maybe<Scalars['Boolean']['output']>;
  hasCheckedComparableSales?: Maybe<Scalars['Boolean']['output']>;
  hasChosenSuburbsAndPropertyType?: Maybe<Scalars['Boolean']['output']>;
  hasCollectedKeys?: Maybe<Scalars['Boolean']['output']>;
  hasCompletedAdvancedBriefWithAi?: Maybe<Scalars['Boolean']['output']>;
  hasConfirmedContractTerms?: Maybe<Scalars['Boolean']['output']>;
  hasDecidedNonNegotiablesAndWishListFeatures?: Maybe<Scalars['Boolean']['output']>;
  hasDefinedPurchaseGoal?: Maybe<Scalars['Boolean']['output']>;
  hasDonePreSettlementInspection?: Maybe<Scalars['Boolean']['output']>;
  hasDownloadedHomeownerApp?: Maybe<Scalars['Boolean']['output']>;
  hasEngagedAuction?: Maybe<Scalars['Boolean']['output']>;
  hasEngagedPrivateTreaty?: Maybe<Scalars['Boolean']['output']>;
  hasEnsuredFunds?: Maybe<Scalars['Boolean']['output']>;
  hasFinanceApproved?: Maybe<Scalars['Boolean']['output']>;
  hasFoundSelectedBroker?: Maybe<Scalars['Boolean']['output']>;
  hasInspectedProperties?: Maybe<Scalars['Boolean']['output']>;
  hasInvitedTeamMember?: Maybe<Scalars['Boolean']['output']>;
  hasLookedInMarketplace?: Maybe<Scalars['Boolean']['output']>;
  hasOrderedBuildingAndPestInspectionReport?: Maybe<Scalars['Boolean']['output']>;
  hasOrderedPreOfferInspection?: Maybe<Scalars['Boolean']['output']>;
  hasOrderedPropertyValuation?: Maybe<Scalars['Boolean']['output']>;
  hasOrganisedListUtilitiesServices?: Maybe<Scalars['Boolean']['output']>;
  hasPaidDeposit?: Maybe<Scalars['Boolean']['output']>;
  hasProvidedContractToLenderAndConveyancer?: Maybe<Scalars['Boolean']['output']>;
  hasRequestedContractOfSale?: Maybe<Scalars['Boolean']['output']>;
  hasResearchedOverlays?: Maybe<Scalars['Boolean']['output']>;
  hasResearchedRecentSales?: Maybe<Scalars['Boolean']['output']>;
  hasReviewedBasicAlertsAndShortlist?: Maybe<Scalars['Boolean']['output']>;
  hasReviewedSmartAlertsAndShortlist?: Maybe<Scalars['Boolean']['output']>;
  hasSecuredProperty?: Maybe<Scalars['Boolean']['output']>;
  hasSentContract?: Maybe<Scalars['Boolean']['output']>;
  hasSetMaximumBudget?: Maybe<Scalars['Boolean']['output']>;
  hasSetWalkAwayPrice?: Maybe<Scalars['Boolean']['output']>;
  hasSharedInformationWithTeam?: Maybe<Scalars['Boolean']['output']>;
  hasStrategy?: Maybe<Scalars['Boolean']['output']>;
  hasSubmittedOffer?: Maybe<Scalars['Boolean']['output']>;
  hasUpdatedAddress?: Maybe<Scalars['Boolean']['output']>;
  hasUpgradedBuyerAssist?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AgentChecklistEdge = {
  __typename?: 'AgentChecklistEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentChecklist>;
};

export enum AgentChecklistToCheck {
  HasArrangedInsurance = 'hasArrangedInsurance',
  HasAttendedAuction = 'hasAttendedAuction',
  HasAttendedSettlement = 'hasAttendedSettlement',
  HasBookedAdditionalInspection = 'hasBookedAdditionalInspection',
  HasCheckedComparableSales = 'hasCheckedComparableSales',
  HasChosenSuburbsAndPropertyType = 'hasChosenSuburbsAndPropertyType',
  HasCollectedKeys = 'hasCollectedKeys',
  HasCompletedAdvancedBriefWithAi = 'hasCompletedAdvancedBriefWithAi',
  HasConfirmedContractTerms = 'hasConfirmedContractTerms',
  HasDecidedNonNegotiablesAndWishListFeatures = 'hasDecidedNonNegotiablesAndWishListFeatures',
  HasDefinedPurchaseGoal = 'hasDefinedPurchaseGoal',
  HasDonePreSettlementInspection = 'hasDonePreSettlementInspection',
  HasDownloadedHomeownerApp = 'hasDownloadedHomeownerApp',
  HasEngagedAuction = 'hasEngagedAuction',
  HasEngagedPrivateTreaty = 'hasEngagedPrivateTreaty',
  HasEnsuredFunds = 'hasEnsuredFunds',
  HasFinanceApproved = 'hasFinanceApproved',
  HasFoundSelectedBroker = 'hasFoundSelectedBroker',
  HasInspectedProperties = 'hasInspectedProperties',
  HasInvitedTeamMember = 'hasInvitedTeamMember',
  HasLookedInMarketplace = 'hasLookedInMarketplace',
  HasOrderedBuildingAndPestInspectionReport = 'hasOrderedBuildingAndPestInspectionReport',
  HasOrderedPreOfferInspection = 'hasOrderedPreOfferInspection',
  HasOrderedPropertyValuation = 'hasOrderedPropertyValuation',
  HasOrganisedListUtilitiesServices = 'hasOrganisedListUtilitiesServices',
  HasPaidDeposit = 'hasPaidDeposit',
  HasProvidedContractToLenderAndConveyancer = 'hasProvidedContractToLenderAndConveyancer',
  HasRequestedContractOfSale = 'hasRequestedContractOfSale',
  HasResearchedOverlays = 'hasResearchedOverlays',
  HasResearchedRecentSales = 'hasResearchedRecentSales',
  HasReviewedBasicAlertsAndShortlist = 'hasReviewedBasicAlertsAndShortlist',
  HasReviewedSmartAlertsAndShortlist = 'hasReviewedSmartAlertsAndShortlist',
  HasSecuredProperty = 'hasSecuredProperty',
  HasSentContract = 'hasSentContract',
  HasSetMaximumBudget = 'hasSetMaximumBudget',
  HasSetWalkAwayPrice = 'hasSetWalkAwayPrice',
  HasSharedInformationWithTeam = 'hasSharedInformationWithTeam',
  HasStrategy = 'hasStrategy',
  HasSubmittedOffer = 'hasSubmittedOffer',
  HasUpdatedAddress = 'hasUpdatedAddress',
  HasUpgradedBuyerAssist = 'hasUpgradedBuyerAssist',
}

export type AgentChecklistsConnection = {
  __typename?: 'AgentChecklistsConnection';
  edges?: Maybe<Array<Maybe<AgentChecklistEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentChecklistEdge>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AgentChecklistsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AgentContact = {
  __typename?: 'AgentContact';
  address?: Maybe<AgentContactAddress>;
  agent?: Maybe<Agent>;
  avatarS3Url?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['Date']['output']>;
  broker?: Maybe<Broker>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  emails?: Maybe<Array<Maybe<AgentContactEmail>>>;
  firstName?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  hasAcceptedInvite?: Maybe<Scalars['Boolean']['output']>;
  hasBuyPotential?: Maybe<Scalars['Boolean']['output']>;
  hasSellPotential?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  initials?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  nickName?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['String']['output']>;
  phoneNumbers?: Maybe<Array<Maybe<AgentContactPhone>>>;
  primaryEmail?: Maybe<AgentContactEmail>;
  primaryPhoneNumber?: Maybe<AgentContactPhone>;
  role?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<AgentContactType>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AgentContactAddress = {
  __typename?: 'AgentContactAddress';
  full?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetName?: Maybe<Scalars['String']['output']>;
  streetNumber?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type AgentContactAddressInput = {
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetName?: InputMaybe<Scalars['String']['input']>;
  streetNumber?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

export type AgentContactEdge = {
  __typename?: 'AgentContactEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentContact>;
};

export type AgentContactEmail = {
  __typename?: 'AgentContactEmail';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<AgentContactEmailType>;
};

export type AgentContactEmailInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  type: AgentContactEmailType;
};

export enum AgentContactEmailType {
  Others = 'OTHERS',
  Personal = 'PERSONAL',
  Secondary = 'SECONDARY',
  Work = 'WORK',
}

export type AgentContactPhone = {
  __typename?: 'AgentContactPhone';
  countryCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  type?: Maybe<AgentContactPhoneType>;
};

export type AgentContactPhoneInput = {
  countryCode: Scalars['String']['input'];
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  number: Scalars['String']['input'];
  type: AgentContactPhoneType;
};

export enum AgentContactPhoneType {
  Fax = 'FAX',
  Home = 'HOME',
  Mobile = 'MOBILE',
  Others = 'OTHERS',
  Work = 'WORK',
}

export type AgentContactTracker = {
  __typename?: 'AgentContactTracker';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  ipInfo?: Maybe<IpInfo>;
  pageUrl?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Scalars['String']['output']>;
  type?: Maybe<AgentContactTrackerType>;
};

export enum AgentContactTrackerType {
  Number = 'NUMBER',
  NumberCall = 'NUMBER_CALL',
}

export enum AgentContactType {
  Buyer = 'BUYER',
  Professional = 'PROFESSIONAL',
  TeamMember = 'TEAM_MEMBER',
}

export type AgentContactsConnection = {
  __typename?: 'AgentContactsConnection';
  edges?: Maybe<Array<Maybe<AgentContactEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentContact>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentContactsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasAcceptedInvite?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  potential?: InputMaybe<AgentContactsConnectionOptionsPotential>;
  type?: InputMaybe<AgentContactType>;
  types?: InputMaybe<Array<InputMaybe<AgentContactType>>>;
};

export enum AgentContactsConnectionOptionsPotential {
  All = 'ALL',
  Buyer = 'BUYER',
  BuyerSeller = 'BUYER_SELLER',
  Seller = 'SELLER',
}

export type AgentContent = {
  __typename?: 'AgentContent';
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
};

export type AgentContentDataInput = {
  isRealtyCdnVideoUrlDefault?: InputMaybe<Scalars['Boolean']['input']>;
  p?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<MediaUrlsInput>;
};

export type AgentContentInput = {
  data: AgentContentDataInput;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: ContentNames;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type AgentConversation = {
  __typename?: 'AgentConversation';
  agent?: Maybe<Agent>;
  conversation?: Maybe<Conversation>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AgentConversationEdge = {
  __typename?: 'AgentConversationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConversationMember>;
};

export type AgentConversationsConnection = {
  __typename?: 'AgentConversationsConnection';
  edges?: Maybe<Array<Maybe<AgentConversationEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentConversation>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentConversationsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AgentDevice = {
  __typename?: 'AgentDevice';
  app?: Maybe<AgentDeviceApp>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  notificationDeviceToken: Scalars['String']['output'];
  type: AgentDeviceType;
};

export enum AgentDeviceApp {
  Homeowner = 'HOMEOWNER',
  RealtyLive = 'REALTY_LIVE',
}

export enum AgentDeviceType {
  Android = 'ANDROID',
  Apple = 'APPLE',
}

export type AgentDirectorySubscription = {
  __typename?: 'AgentDirectorySubscription';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  directoriesCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  remainingDirectory?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subscriptionType?: Maybe<Scalars['String']['output']>;
  suburbsConnection?: Maybe<AgentSuburbsConnection>;
};

export type AgentDirectorySubscriptionSuburbsConnectionArgs = {
  filter?: InputMaybe<AgentSuburbsConnectionFilter>;
};

export type AgentDirectorySubscriptionEdge = {
  __typename?: 'AgentDirectorySubscriptionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentDirectorySubscription>;
};

export type AgentDirectorySubscriptionsConnection = {
  __typename?: 'AgentDirectorySubscriptionsConnection';
  edges?: Maybe<Array<Maybe<AgentDirectorySubscriptionEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentDirectorySubscription>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentDirectorySubscriptionsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AgentEdge = {
  __typename?: 'AgentEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Agent>;
};

export type AgentFacebookPage = {
  __typename?: 'AgentFacebookPage';
  accessToken?: Maybe<Scalars['String']['output']>;
  agentId?: Maybe<Scalars['ID']['output']>;
  fbUserId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pageId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AgentFbPostsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<AgentFbPostsGroup>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export enum AgentFbPostsGroup {
  AgentPlus = 'AGENT_PLUS',
  PropertyForRent = 'PROPERTY_FOR_RENT',
  PropertyForSale = 'PROPERTY_FOR_SALE',
  PropertySold = 'PROPERTY_SOLD',
  SuburbData = 'SUBURB_DATA',
}

export type AgentFindAccountInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  mobileNumberCountryCode?: InputMaybe<Scalars['Int']['input']>;
  types?: InputMaybe<Array<InputMaybe<AgentType>>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type AgentForgotPassword = {
  __typename?: 'AgentForgotPassword';
  agentId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isValid?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export enum AgentFromPrePortalPackage {
  BuyerAdvancedMonthly = 'BUYER_ADVANCED_MONTHLY',
  BuyerBasicMonthly = 'BUYER_BASIC_MONTHLY',
  BuyerFree = 'BUYER_FREE',
}

export type AgentInstagram = {
  __typename?: 'AgentInstagram';
  agentId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  instagramUrl?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isIntegrated?: Maybe<Scalars['Boolean']['output']>;
  media?: Maybe<Array<Maybe<InstagramMedia>>>;
  userId?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type AgentInstagramMediaArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type AgentInviteColleagueInput = {
  agentEmail?: InputMaybe<Scalars['String']['input']>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  agentName?: InputMaybe<Scalars['String']['input']>;
  locationId: Scalars['ID']['input'];
  purchasedSuburbId?: InputMaybe<Scalars['ID']['input']>;
  senderId: Scalars['ID']['input'];
};

export type AgentLanguage = {
  __typename?: 'AgentLanguage';
  agent?: Maybe<Agent>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
};

export type AgentLead = {
  __typename?: 'AgentLead';
  agentId?: Maybe<Scalars['ID']['output']>;
  bedroom?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  goal?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  leadStatus?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  priceRange?: Maybe<Scalars['String']['output']>;
  stage?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AgentLeadEdge = {
  __typename?: 'AgentLeadEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentLead>;
};

export type AgentLeadMessage = {
  __typename?: 'AgentLeadMessage';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AgentLeadMessageEdge = {
  __typename?: 'AgentLeadMessageEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentLeadMessage>;
};

export type AgentLeadMessagesConnection = {
  __typename?: 'AgentLeadMessagesConnection';
  edges?: Maybe<Array<Maybe<AgentLeadMessageEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentLeadMessage>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentLeadsConnection = {
  __typename?: 'AgentLeadsConnection';
  edges?: Maybe<Array<Maybe<AgentLeadEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentLead>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentLeadsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  leadStatus?: InputMaybe<Scalars['String']['input']>;
};

export type AgentLocation = {
  __typename?: 'AgentLocation';
  areaOfSpecializationType?: Maybe<AreaOfSpecializationLocationType>;
  id?: Maybe<Scalars['ID']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type AgentOffer = {
  __typename?: 'AgentOffer';
  agent?: Maybe<Agent>;
  agentBrief?: Maybe<AgentBrief>;
  agentBuyerTransaction?: Maybe<AgentBuyerTransaction>;
  buyerAgent?: Maybe<Agent>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  hasRead?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  legalPurchaser?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  offerAmount?: Maybe<Scalars['String']['output']>;
  offers?: Maybe<Array<Maybe<AgentOffer>>>;
  order?: Maybe<Scalars['Int']['output']>;
  progress?: Maybe<AgentOfferProgress>;
  property?: Maybe<Property>;
  proposedClosingDate?: Maybe<Scalars['Date']['output']>;
  source?: Maybe<AgentOfferSource>;
  terms?: Maybe<AgentOfferTerms>;
};

export type AgentOfferAgentBuyerTransactionArgs = {
  options?: InputMaybe<AgentBuyerTransactionsOptions>;
};

export type AgentOfferEdge = {
  __typename?: 'AgentOfferEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentOffer>;
};

export type AgentOfferProgress = {
  __typename?: 'AgentOfferProgress';
  id: Scalars['ID']['output'];
  status?: Maybe<AgentOfferProgressStatus>;
};

export enum AgentOfferProgressStatus {
  Accepted = 'ACCEPTED',
  CounterOffer = 'COUNTER_OFFER',
  Offer = 'OFFER',
  Received = 'RECEIVED',
  Rejected = 'REJECTED',
}

export enum AgentOfferSource {
  Buyer = 'BUYER',
  Seller = 'SELLER',
}

export type AgentOfferTerms = {
  __typename?: 'AgentOfferTerms';
  agent?: Maybe<Agent>;
  agentOffer?: Maybe<AgentOffer>;
  daysForFinance?: Maybe<Scalars['String']['output']>;
  daysToSettlement?: Maybe<Scalars['String']['output']>;
  depositAmount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  inspectionTerms?: Maybe<Scalars['String']['output']>;
  other?: Maybe<Scalars['String']['output']>;
  pestsAndBuildingInspection?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer supported */
  petsAndBuildingInspection?: Maybe<Scalars['String']['output']>;
};

export type AgentOffersConnection = {
  __typename?: 'AgentOffersConnection';
  edges?: Maybe<Array<Maybe<AgentOfferEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentOffer>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AgentOffersConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdDateRange?: InputMaybe<DateRangeInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasRead?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isAuthor?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeTestAgency?: InputMaybe<Scalars['Boolean']['input']>;
  isUsedInTransaction?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type AgentPropertyEngagementsCount = {
  __typename?: 'AgentPropertyEngagementsCount';
  engagementTotalCount?: Maybe<Scalars['Int']['output']>;
  propertyEngagementStatistics?: Maybe<Scalars['JSON']['output']>;
  propertyPageFloorplanCount?: Maybe<Scalars['Int']['output']>;
  propertyPageImageCount?: Maybe<Scalars['Int']['output']>;
  propertyPageVideoCount?: Maybe<Scalars['Int']['output']>;
  searchResultPageFloorplanCount?: Maybe<Scalars['Int']['output']>;
  searchResultPageImageCount?: Maybe<Scalars['Int']['output']>;
  searchResultPageVideoCount?: Maybe<Scalars['Int']['output']>;
};

export type AgentPropertyEnquiriesComparisonGraph = {
  __typename?: 'AgentPropertyEnquiriesComparisonGraph';
  agentPropertyEnquiryData?: Maybe<Scalars['JSON']['output']>;
};

export type AgentPropertyEnquiriesConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<AgentPropertyEnquiryGroup>;
  hasRead?: InputMaybe<Scalars['Boolean']['input']>;
  isAuthor?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeTestAgency?: InputMaybe<Scalars['Boolean']['input']>;
  isUsedInTransaction?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export enum AgentPropertyEnquiryGroup {
  Appraisal = 'APPRAISAL',
  Rental = 'RENTAL',
  Sale = 'SALE',
  SaleAndRental = 'SALE_AND_RENTAL',
}

export type AgentPropertyInspection = {
  __typename?: 'AgentPropertyInspection';
  agent: Agent;
  agentBrief: AgentBrief;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  property: Property;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  videosConnection?: Maybe<AgentPropertyInspectionVideosConnection>;
};

export type AgentPropertyInspectionVideosConnectionArgs = {
  options?: InputMaybe<AgentPropertyInspectionVideosConnectionOptions>;
};

export type AgentPropertyInspectionEdge = {
  __typename?: 'AgentPropertyInspectionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentPropertyInspection>;
};

export type AgentPropertyInspectionVideo = {
  __typename?: 'AgentPropertyInspectionVideo';
  commentsConnection?: Maybe<AgentPropertyInspectionVideoCommentsConnection>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  inspection: AgentPropertyInspection;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  videoUrl: Scalars['String']['output'];
};

export type AgentPropertyInspectionVideoCommentsConnectionArgs = {
  options?: InputMaybe<AgentPropertyInspectionVideoCommentsConnectionOptions>;
};

export type AgentPropertyInspectionVideoComment = {
  __typename?: 'AgentPropertyInspectionVideoComment';
  comment: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  video: AgentPropertyInspectionVideo;
};

export type AgentPropertyInspectionVideoCommentEdge = {
  __typename?: 'AgentPropertyInspectionVideoCommentEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentPropertyInspectionVideoComment>;
};

export type AgentPropertyInspectionVideoCommentsConnection = {
  __typename?: 'AgentPropertyInspectionVideoCommentsConnection';
  edges?: Maybe<Array<Maybe<AgentPropertyInspectionVideoCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentPropertyInspectionVideoComment>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentPropertyInspectionVideoCommentsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AgentPropertyInspectionVideoEdge = {
  __typename?: 'AgentPropertyInspectionVideoEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentPropertyInspectionVideo>;
};

export type AgentPropertyInspectionVideosConnection = {
  __typename?: 'AgentPropertyInspectionVideosConnection';
  edges?: Maybe<Array<Maybe<AgentPropertyInspectionVideoEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentPropertyInspectionVideo>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentPropertyInspectionVideosConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AgentPropertyInspectionsConnection = {
  __typename?: 'AgentPropertyInspectionsConnection';
  edges?: Maybe<Array<Maybe<AgentPropertyInspectionEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentPropertyInspection>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentPropertyInspectionsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentBriefId?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type AgentPropertyRequest = {
  __typename?: 'AgentPropertyRequest';
  agent: Agent;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  property: Property;
  type: AgentPropertyRequestType;
  updatedAt: Scalars['Date']['output'];
};

export type AgentPropertyRequestEdge = {
  __typename?: 'AgentPropertyRequestEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentPropertyRequest>;
};

export enum AgentPropertyRequestSource {
  Homeowner = 'HOMEOWNER',
}

export enum AgentPropertyRequestType {
  Conveyancing = 'CONVEYANCING',
  DepreciationSchedule = 'DEPRECIATION_SCHEDULE',
  Inspection = 'INSPECTION',
  InspectionPestsBuilding = 'INSPECTION_PESTS_BUILDING',
  InspectionVideo = 'INSPECTION_VIDEO',
  NegotiationService = 'NEGOTIATION_SERVICE',
  NegotiationStrategy = 'NEGOTIATION_STRATEGY',
  PropertyInvestmentReport = 'PROPERTY_INVESTMENT_REPORT',
  PropertyReport = 'PROPERTY_REPORT',
  ValuationDesktop = 'VALUATION_DESKTOP',
  ValuationFull = 'VALUATION_FULL',
}

export type AgentPropertyRequestsConnection = {
  __typename?: 'AgentPropertyRequestsConnection';
  edges?: Maybe<Array<Maybe<AgentPropertyRequestEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentPropertyRequest>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentPropertyRequestsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  types?: InputMaybe<Array<InputMaybe<AgentPropertyRequestType>>>;
};

export type AgentPropertyShortlist = {
  __typename?: 'AgentPropertyShortlist';
  agent?: Maybe<Agent>;
  agentBrief?: Maybe<AgentBrief>;
  id?: Maybe<Scalars['ID']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  property?: Maybe<Property>;
  propertyDocuments?: Maybe<Array<Maybe<PropertyDocument>>>;
  status?: Maybe<AgentPropertyShortlistStatus>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type AgentPropertyShortlistEdge = {
  __typename?: 'AgentPropertyShortlistEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentPropertyShortlist>;
};

export enum AgentPropertyShortlistStatus {
  Conveyancing = 'CONVEYANCING',
  Evaluation = 'EVALUATION',
  Inspect = 'INSPECT',
  InNegotiation = 'IN_NEGOTIATION',
  Shortlist = 'SHORTLIST',
}

export type AgentPropertyShortlistsConnection = {
  __typename?: 'AgentPropertyShortlistsConnection';
  edges?: Maybe<Array<Maybe<AgentPropertyShortlistEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentPropertyShortlist>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentPropertyShortlistsOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentBriefIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isActiveBrief?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPrePortalAndOnMarket?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  propertyId?: InputMaybe<Scalars['String']['input']>;
  sorting?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<AgentPropertyShortlistStatus>;
};

export type AgentPropertyViewsComparisonGraph = {
  __typename?: 'AgentPropertyViewsComparisonGraph';
  agentPostalCodes?: Maybe<Scalars['JSON']['output']>;
  agentPropertyViewData?: Maybe<Scalars['JSON']['output']>;
};

export type AgentPropertyViewsCount = {
  __typename?: 'AgentPropertyViewsCount';
  propertyPageViewCount?: Maybe<Scalars['Int']['output']>;
  propertyViewTotalCount?: Maybe<Scalars['Int']['output']>;
  propertyViewsStatistics?: Maybe<Scalars['JSON']['output']>;
  searchResultsPageViewCount?: Maybe<Scalars['Int']['output']>;
};

export type AgentReview = {
  __typename?: 'AgentReview';
  agentReviewRequest?: Maybe<AgentReviewRequest>;
  agentReviewRequestId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  communicationCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  credibilityCount?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  marketCount?: Maybe<Scalars['Int']['output']>;
  negotiationCount?: Maybe<Scalars['Int']['output']>;
  overAllCount?: Maybe<Scalars['Float']['output']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['ID']['output']>;
  slugUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AgentReviewConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentReviewEdge = {
  __typename?: 'AgentReviewEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentReview>;
};

export type AgentReviewRequest = {
  __typename?: 'AgentReviewRequest';
  agent?: Maybe<Agent>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AgentReviewRequestVerify = {
  __typename?: 'AgentReviewRequestVerify';
  agent?: Maybe<Agent>;
  agentId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isValid?: Maybe<Scalars['Boolean']['output']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['ID']['output']>;
  reviewRequestToBuyer?: Maybe<AgentReviewRequest>;
  reviewRequestToVendor?: Maybe<AgentReviewRequest>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  verificationKey?: Maybe<Scalars['String']['output']>;
};

export enum AgentRole {
  Agent = 'AGENT',
  Both = 'BOTH',
  PropertyManager = 'PROPERTY_MANAGER',
}

export type AgentScrape = {
  __typename?: 'AgentScrape';
  agency?: Maybe<AgentScrapeAgency>;
  description?: Maybe<Scalars['String']['output']>;
  friendlyName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  personalQuote?: Maybe<Scalars['String']['output']>;
  pictureUrl?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AgentScrapeAgency = {
  __typename?: 'AgentScrapeAgency';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export enum AgentService {
  Auctions = 'AUCTIONS',
  FullBaServices = 'FULL_BA_SERVICES',
  Inspections = 'INSPECTIONS',
  Negotiation = 'NEGOTIATION',
  PropertyData = 'PROPERTY_DATA',
  Sourcing = 'SOURCING',
}

export type AgentSetting = {
  __typename?: 'AgentSetting';
  agent?: Maybe<Agent>;
  alertFrequency?: Maybe<AlertFrequencyOptions>;
  alertNotification?: Maybe<AlertNotificationOptions>;
  alertPropertyGroup?: Maybe<AlertPropertyGroupOptions>;
  hoDownloadAppSource?: Maybe<HomeOwnerAppDownloadSource>;
  hoFinancialGoal?: Maybe<HomeownerFinancialStrategyType>;
  hoHasApprovedFinance?: Maybe<Scalars['Boolean']['output']>;
  hoHasDigitalStrategy?: Maybe<Scalars['Boolean']['output']>;
  hoHelpWith?: Maybe<Array<Maybe<HomeownerHelpWith>>>;
  hoIsPutContactWithMortgageBroker?: Maybe<Scalars['Boolean']['output']>;
  hoRiskTolerance?: Maybe<RiskTolerance>;
  id: Scalars['ID']['output'];
  isPostRental?: Maybe<Scalars['Boolean']['output']>;
  isPostSale?: Maybe<Scalars['Boolean']['output']>;
  isPostSold?: Maybe<Scalars['Boolean']['output']>;
  isSendEmailNotifications?: Maybe<Scalars['Boolean']['output']>;
  isSendMobileNotifications?: Maybe<Scalars['Boolean']['output']>;
  isSendNegotiationEmail?: Maybe<Scalars['Boolean']['output']>;
  isSendNegotiationSms?: Maybe<Scalars['Boolean']['output']>;
  preferredTimeZone?: Maybe<Scalars['Timezone']['output']>;
  saveStreamToGallery?: Maybe<SaveStreamToGalleryOptions>;
  timezone?: Maybe<Scalars['Timezone']['output']>;
  timezoneOffset?: Maybe<Scalars['Int']['output']>;
};

export type AgentStatistics = {
  __typename?: 'AgentStatistics';
  acceptedOffersCount?: Maybe<Scalars['Int']['output']>;
  agentNumberCallCount?: Maybe<Scalars['Int']['output']>;
  agentNumberRevealCount?: Maybe<Scalars['Int']['output']>;
  appraisalEnquiriesCount?: Maybe<Scalars['Int']['output']>;
  attemptEnquiriesCount?: Maybe<Scalars['Int']['output']>;
  briefPropertyAlertsCount?: Maybe<Scalars['Int']['output']>;
  briefsCount?: Maybe<Scalars['Int']['output']>;
  buyerEnquiriesCount?: Maybe<Scalars['Int']['output']>;
  dealsVolumeAmount?: Maybe<Scalars['Int']['output']>;
  directorySuburbsCount?: Maybe<Scalars['Int']['output']>;
  enquiriesCount?: Maybe<Scalars['Int']['output']>;
  enquiriesCountByPropertyId?: Maybe<Scalars['Int']['output']>;
  enquiriesCountMonthly?: Maybe<Scalars['Int']['output']>;
  featuredSuburbsCount?: Maybe<Scalars['Int']['output']>;
  forRentCount?: Maybe<Scalars['Int']['output']>;
  forSaleCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  listingCount?: Maybe<Scalars['Int']['output']>;
  medianSoldPrice?: Maybe<Scalars['Float']['output']>;
  numberRevealCount?: Maybe<Scalars['Int']['output']>;
  offersCount?: Maybe<Scalars['Int']['output']>;
  offersCountByPropertyId?: Maybe<Scalars['Int']['output']>;
  ofiTimesCount?: Maybe<Scalars['Int']['output']>;
  propertyDeviceCount?: Maybe<AgentAudienceByDevice>;
  propertyEngagementCount?: Maybe<AgentPropertyEngagementsCount>;
  propertyEnquiryComparisonGraph?: Maybe<AgentPropertyEnquiriesComparisonGraph>;
  propertyLiveStreamsCount?: Maybe<Scalars['Int']['output']>;
  propertySavedInspectionTimesCount?: Maybe<Scalars['Int']['output']>;
  propertyShortlistCountByPropertyId?: Maybe<Scalars['Int']['output']>;
  propertyViewComparisonGraph?: Maybe<AgentPropertyViewsComparisonGraph>;
  propertyViewCount?: Maybe<AgentPropertyViewsCount>;
  remainingDirectorySuburbsCount?: Maybe<Scalars['Int']['output']>;
  rentalEnquiriesCount?: Maybe<Scalars['Int']['output']>;
  saleEnquiriesCount?: Maybe<Scalars['Int']['output']>;
  savedPropertiesCount?: Maybe<Scalars['Int']['output']>;
  soldCount?: Maybe<Scalars['Int']['output']>;
  unreadBriefPropertyAlertCount?: Maybe<Scalars['Int']['output']>;
};

export type AgentStatisticsAgentNumberCallCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentStatisticsAgentNumberRevealCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentStatisticsAppraisalEnquiriesCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentStatisticsBriefPropertyAlertsCountArgs = {
  input?: InputMaybe<AgentStatisticsBriefPropertyAlertsCountInput>;
};

export type AgentStatisticsBriefsCountArgs = {
  input?: InputMaybe<AgentStatisticsBriefsCountInput>;
};

export type AgentStatisticsBuyerEnquiriesCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentStatisticsEnquiriesCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentStatisticsEnquiriesCountByPropertyIdArgs = {
  hasAgentBrief?: InputMaybe<Scalars['Boolean']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type AgentStatisticsForRentCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentStatisticsForSaleCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentStatisticsListingCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentStatisticsMedianSoldPriceArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentStatisticsOffersCountArgs = {
  input?: InputMaybe<AgentStatisticsOffersCountInput>;
};

export type AgentStatisticsOffersCountByPropertyIdArgs = {
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type AgentStatisticsPropertyShortlistCountByPropertyIdArgs = {
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type AgentStatisticsRentalEnquiriesCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentStatisticsSaleEnquiriesCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentStatisticsSoldCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentStatisticsBriefPropertyAlertsCountInput = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  isActiveBrief?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AgentStatisticsBriefsCountInput = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AgentStatisticsOffersCountInput = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  isActiveBrief?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AgentStripeCustomerInfo = {
  __typename?: 'AgentStripeCustomerInfo';
  cardList?: Maybe<Array<Maybe<StripeCustomerCard>>>;
  defaultCard?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type AgentStripeCustomerInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId: Scalars['String']['input'];
};

export type AgentSubscription = {
  __typename?: 'AgentSubscription';
  agent?: Maybe<Agent>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mainAgentPlusLocation?: Maybe<Location>;
  package?: Maybe<AgentSubscriptionPackage>;
  packageType?: Maybe<PackageType>;
  startDate?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<AgentSubscriptionStatus>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  stripeSubscription?: Maybe<StripeSubscription>;
  subscriptionType?: Maybe<AgentSubscriptionType>;
  suburbImageUrl?: Maybe<Scalars['String']['output']>;
  suburbMessage?: Maybe<Scalars['String']['output']>;
  suburbTextOverlay?: Maybe<Scalars['String']['output']>;
  suburbTextOverlayFont?: Maybe<Scalars['String']['output']>;
  suburbTextOverlayFontColor?: Maybe<Scalars['String']['output']>;
  suburbTextOverlayFontSize?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AgentSubscriptionCoupon = {
  __typename?: 'AgentSubscriptionCoupon';
  amountOff?: Maybe<Scalars['Float']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  durationInMonths?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  percentOff?: Maybe<Scalars['Float']['output']>;
  valid?: Maybe<Scalars['Boolean']['output']>;
};

export type AgentSubscriptionEdge = {
  __typename?: 'AgentSubscriptionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentSubscription>;
};

export enum AgentSubscriptionPackage {
  Accelerate = 'ACCELERATE',
  AgentPlus = 'AGENT_PLUS',
  Buyer = 'BUYER',
  BuyerAdvanced = 'BUYER_ADVANCED',
  BuyerAdvancedAddOn = 'BUYER_ADVANCED_ADD_ON',
  BuyerAdvancedTrial = 'BUYER_ADVANCED_TRIAL',
  BuyerBasic = 'BUYER_BASIC',
  BuyerPro = 'BUYER_PRO',
  HomeownerHtag = 'HOMEOWNER_HTAG',
  HomeownerLandchecker = 'HOMEOWNER_LANDCHECKER',
  HomeownerRealty = 'HOMEOWNER_REALTY',
  HomeownerRealtyByBroker = 'HOMEOWNER_REALTY_BY_BROKER',
  Mailbox = 'MAILBOX',
  Socialads = 'SOCIALADS',
}

export enum AgentSubscriptionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
}

export enum AgentSubscriptionType {
  Annual = 'ANNUAL',
  Annual_474 = 'ANNUAL_474',
  Annual_594 = 'ANNUAL_594',
  BiAnnual = 'BI_ANNUAL',
  BuyerBasicAnnual = 'BUYER_BASIC_ANNUAL',
  BuyerBasicMonthly = 'BUYER_BASIC_MONTHLY',
  Monthly = 'MONTHLY',
  Monthly_29 = 'MONTHLY_29',
  Monthly_79 = 'MONTHLY_79',
  Monthly_89 = 'MONTHLY_89',
  OneOff = 'ONE_OFF',
  Quarterly = 'QUARTERLY',
}

export type AgentSubscriptionsConnection = {
  __typename?: 'AgentSubscriptionsConnection';
  edges?: Maybe<Array<Maybe<AgentSubscriptionEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentSubscription>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentSubscriptionsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasNotEnded?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  packages?: InputMaybe<Array<AgentSubscriptionPackage>>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<AgentSubscriptionStatus>;
};

export type AgentSuburb = {
  __typename?: 'AgentSuburb';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isReserved?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['Int']['output']>;
  subscription?: Maybe<AgentDirectorySubscription>;
  type?: Maybe<AgentSuburbsType>;
};

export type AgentSuburbDetail = {
  __typename?: 'AgentSuburbDetail';
  id: Scalars['ID']['output'];
  isReserved?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  subscription?: Maybe<AgentDirectorySubscription>;
  type?: Maybe<Scalars['Boolean']['output']>;
};

export type AgentSuburbDetailConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AgentSuburbDetailEdge = {
  __typename?: 'AgentSuburbDetailEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentSuburbDetail>;
};

export type AgentSuburbDetailsConnection = {
  __typename?: 'AgentSuburbDetailsConnection';
  edges?: Maybe<Array<Maybe<AgentSuburbDetailEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentSuburbDetail>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentSuburbEdge = {
  __typename?: 'AgentSuburbEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentSuburb>;
};

export type AgentSuburbsConnection = {
  __typename?: 'AgentSuburbsConnection';
  edges?: Maybe<Array<Maybe<AgentSuburbEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentSuburb>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentSuburbsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<AgentSuburbsType>;
};

export enum AgentSuburbsType {
  Accelerate = 'ACCELERATE',
  Directory = 'DIRECTORY',
  Featured = 'FEATURED',
  FeaturedAccelerate = 'FEATURED_ACCELERATE',
  FeaturedElevate = 'FEATURED_ELEVATE',
}

export enum AgentType {
  Buyer = 'BUYER',
  BuyerSeller = 'BUYER_SELLER',
  Homeowner = 'HOMEOWNER',
  HomeownerBuyer = 'HOMEOWNER_BUYER',
  Seller = 'SELLER',
}

export type AgentsConnection = {
  __typename?: 'AgentsConnection';
  edges?: Maybe<Array<Maybe<AgentEdge>>>;
  nodes?: Maybe<Array<Maybe<Agent>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AgentsConnectionByEnquiriesCountOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<PropertyEnquiryGroup>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type AgentsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdDateRange?: InputMaybe<DateRangeInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeOnlyRealAgents?: InputMaybe<Scalars['Boolean']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeTestAgency?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subscription?: InputMaybe<Scalars['String']['input']>;
};

export type AgentsCountByPropertySearchFilter = {
  category?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  includeOnlyRealAgents?: InputMaybe<Scalars['Boolean']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  price?: InputMaybe<SellingPrice>;
};

export type AggregatedPropertyFbPostStatistics = {
  __typename?: 'AggregatedPropertyFbPostStatistics';
  engagedUsers?: Maybe<Scalars['Int']['output']>;
  engagement?: Maybe<Scalars['Int']['output']>;
  engagements?: Maybe<Engagements>;
  id: Scalars['ID']['output'];
  postsCount?: Maybe<Scalars['Int']['output']>;
  reach?: Maybe<Scalars['Int']['output']>;
  shares?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type AggregatedPropertyFbPostStatisticsFilter = {
  country?: InputMaybe<Country>;
  endDate: Scalars['Date']['input'];
  group?: InputMaybe<AggregatedPropertyFbPostStatisticsGroup>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeOffMarket?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['Date']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
};

export enum AggregatedPropertyFbPostStatisticsGroup {
  Buy = 'BUY',
  Rent = 'RENT',
}

export type AggregationPeriod = {
  __typename?: 'AggregationPeriod';
  duration?: Maybe<Scalars['Int']['output']>;
  timeUnit?: Maybe<Scalars['String']['output']>;
};

export enum AlertFrequencyOptions {
  Daily = 'DAILY',
  Instantly = 'INSTANTLY',
}

export enum AlertNotificationOptions {
  Both = 'BOTH',
  Email = 'EMAIL',
  Sms = 'SMS',
}

export enum AlertPropertyGroupOptions {
  BriefSpecific = 'BRIEF_SPECIFIC',
  OnMarket = 'ON_MARKET',
  OnMarketOrPrePortal = 'ON_MARKET_OR_PRE_PORTAL',
  PrePortal = 'PRE_PORTAL',
}

export type AnalyticsEvent = {
  __typename?: 'AnalyticsEvent';
  anonymousId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  dimension1?: Maybe<Scalars['Int']['output']>;
  dimension2?: Maybe<Scalars['Int']['output']>;
  dimension3?: Maybe<Scalars['String']['output']>;
  dimension4?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  pageId?: Maybe<Scalars['Int']['output']>;
  pageType?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Scalars['String']['output']>;
  referrerDomain?: Maybe<Scalars['String']['output']>;
  search?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type AnalyticsPage = {
  __typename?: 'AnalyticsPage';
  anonymousId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  dimension1?: Maybe<Scalars['Int']['output']>;
  dimension2?: Maybe<Scalars['Int']['output']>;
  dimension3?: Maybe<Scalars['String']['output']>;
  dimension4?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  pageId?: Maybe<Scalars['String']['output']>;
  pageType?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Scalars['String']['output']>;
  referrerDomain?: Maybe<Scalars['String']['output']>;
  search?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type AppVersion = {
  __typename?: 'AppVersion';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ApplyPropertyCouponResult = {
  __typename?: 'ApplyPropertyCouponResult';
  coupon?: Maybe<PropertyCoupon>;
  discountAmount?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export enum AreaOfSpecialization {
  Commercial = 'COMMERCIAL',
  FirstHomeBuyer = 'FIRST_HOME_BUYER',
  HolidayHome = 'HOLIDAY_HOME',
  Investor = 'INVESTOR',
  OwnerOccupier = 'OWNER_OCCUPIER',
  PositiveCashFlow = 'POSITIVE_CASH_FLOW',
}

export enum AreaOfSpecializationLocationType {
  AustraliaWide = 'AUSTRALIA_WIDE',
  Region = 'REGION',
  State = 'STATE',
}

export type AutomatedAdLog = {
  __typename?: 'AutomatedAdLog';
  agency?: Maybe<Agency>;
  agent?: Maybe<Agent>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  errorCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  propertyStatus?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type AutomatedAdLogConnection = {
  __typename?: 'AutomatedAdLogConnection';
  edges?: Maybe<Array<Maybe<AutomatedAdLogEdge>>>;
  nodes?: Maybe<Array<Maybe<AutomatedAdLog>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type AutomatedAdLogConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  type: FailedAdType;
};

export type AutomatedAdLogEdge = {
  __typename?: 'AutomatedAdLogEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AutomatedAdLog>;
};

export enum BriefStatus {
  Active = 'ACTIVE',
  All = 'ALL',
  Completed = 'COMPLETED',
  Live = 'LIVE',
  Withdrawn = 'WITHDRAWN',
}

export type Broker = {
  __typename?: 'Broker';
  aboutMe?: Maybe<Scalars['String']['output']>;
  agentsConnection?: Maybe<AgentsConnection>;
  awardsConnection?: Maybe<BrokerAwardsConnection>;
  brokerBuyerInviteesConnection?: Maybe<BrokerBuyerInviteesConnection>;
  brokerCharges?: Maybe<Array<Maybe<BrokerCharge>>>;
  businessName?: Maybe<Scalars['String']['output']>;
  buyerAgentBriefsConnection?: Maybe<AgentBriefsConnection>;
  canAvail?: Maybe<Scalars['Boolean']['output']>;
  certificatesConnection?: Maybe<BrokerCertificationsConnection>;
  company?: Maybe<BrokerCompany>;
  config: Array<BrokerConfig>;
  conversationsConnection?: Maybe<AgentConversationsConnection>;
  email?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  headerColor?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  initials?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isFromPropertyEnquiry?: Maybe<Scalars['Boolean']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  lastLogin?: Maybe<Scalars['Date']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  locationsConnection?: Maybe<BrokerLocationsConnection>;
  logoShape?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  mobileNumberCountryCode?: Maybe<Scalars['Int']['output']>;
  ownerBrokerId?: Maybe<Broker>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profileLogoCircleUrl?: Maybe<Scalars['String']['output']>;
  profileLogoRectUrl?: Maybe<Scalars['String']['output']>;
  profileLogoUrl?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  referralCode?: Maybe<Scalars['String']['output']>;
  settings?: Maybe<BrokerSetting>;
  slugUrl?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<BrokerStatistics>;
  stripeAccountId?: Maybe<Scalars['String']['output']>;
  stripeCustomerBillingInfo?: Maybe<StripeCustomerBillingInfo>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<BrokerType>;
  uuid: Scalars['ID']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type BrokerAgentsConnectionArgs = {
  filter?: InputMaybe<AgentsConnectionFilter>;
};

export type BrokerAwardsConnectionArgs = {
  filter?: InputMaybe<BrokerAwardsConnectionFilter>;
};

export type BrokerBrokerBuyerInviteesConnectionArgs = {
  filter?: InputMaybe<BrokerBuyerInviteesConnectionFilter>;
};

export type BrokerBuyerAgentBriefsConnectionArgs = {
  options?: InputMaybe<AgentBriefsConnectionOptions>;
};

export type BrokerCertificatesConnectionArgs = {
  filter?: InputMaybe<BrokerCertificationsConnectionFilter>;
};

export type BrokerConversationsConnectionArgs = {
  options?: InputMaybe<AgentConversationsConnectionOptions>;
};

export type BrokerLocationsConnectionArgs = {
  filter?: InputMaybe<BrokerLocationsConnectionFilter>;
};

export type BrokerAward = {
  __typename?: 'BrokerAward';
  brokerId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  pictureUrl?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type BrokerAwardEdge = {
  __typename?: 'BrokerAwardEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<BrokerAward>;
};

export type BrokerAwardsConnection = {
  __typename?: 'BrokerAwardsConnection';
  edges?: Maybe<Array<Maybe<BrokerAwardEdge>>>;
  nodes?: Maybe<Array<Maybe<BrokerAward>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type BrokerAwardsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type BrokerBuyerAndSubBrokerSearchInput = {
  isIncludeSubBrokerBuyers?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type BrokerBuyerAndSubBrokerSearchSearchResult = {
  __typename?: 'BrokerBuyerAndSubBrokerSearchSearchResult';
  brokers: Array<Maybe<Broker>>;
  buyers: Array<Maybe<Agent>>;
};

export type BrokerBuyerInvite = {
  __typename?: 'BrokerBuyerInvite';
  agent?: Maybe<Agent>;
  broker?: Maybe<Broker>;
  email?: Maybe<Scalars['String']['output']>;
  expiryDate?: Maybe<Scalars['Date']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  mobileNumberCountryCode?: Maybe<Scalars['Int']['output']>;
  preApprovedAmount?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<InviteStatus>;
};

export type BrokerBuyerInviteEdge = {
  __typename?: 'BrokerBuyerInviteEdge';
  cursor: Scalars['String']['output'];
  node: BrokerBuyerInvite;
};

export type BrokerBuyerInviteesConnection = {
  __typename?: 'BrokerBuyerInviteesConnection';
  edges?: Maybe<Array<Maybe<BrokerBuyerInviteEdge>>>;
  nodes?: Maybe<Array<Maybe<BrokerBuyerInvite>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BrokerBuyerInviteesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brokerIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  createdDateRange?: InputMaybe<DateRangeInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeOnlyRealAgents?: InputMaybe<Scalars['Boolean']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSubBrokerInvites?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSubBrokerInvitesOnly?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BrokerCertification = {
  __typename?: 'BrokerCertification';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  pictureUrl?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type BrokerCertificationEdge = {
  __typename?: 'BrokerCertificationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<BrokerCertification>;
};

export type BrokerCertificationsConnection = {
  __typename?: 'BrokerCertificationsConnection';
  edges?: Maybe<Array<Maybe<BrokerCertificationEdge>>>;
  nodes?: Maybe<Array<Maybe<BrokerCertification>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type BrokerCertificationsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type BrokerCharge = {
  __typename?: 'BrokerCharge';
  broker?: Maybe<Broker>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  directoriesCount?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  finalAmount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  remainingDirectory?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  stripeSubscription?: Maybe<StripeSubscription>;
};

export enum BrokerChargeName {
  HomeownerRealTimeAlerts = 'HOMEOWNER_REAL_TIME_ALERTS',
  HomeownerSolo = 'HOMEOWNER_SOLO',
  HomeownerTeam = 'HOMEOWNER_TEAM',
  HomeownerTeamSolo = 'HOMEOWNER_TEAM_SOLO',
}

export type BrokerCompaniesConnection = {
  __typename?: 'BrokerCompaniesConnection';
  edges?: Maybe<Array<Maybe<BrokerCompanyEdge>>>;
  nodes?: Maybe<Array<Maybe<BrokerCompany>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type BrokerCompaniesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type BrokerCompany = {
  __typename?: 'BrokerCompany';
  contactNumber?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pmsCode?: Maybe<Scalars['String']['output']>;
  pmsCodeHex?: Maybe<Scalars['String']['output']>;
};

export type BrokerCompanyEdge = {
  __typename?: 'BrokerCompanyEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<BrokerCompany>;
};

export type BrokerConfig = {
  __typename?: 'BrokerConfig';
  broker: Broker;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type BrokerEdge = {
  __typename?: 'BrokerEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Broker>;
};

export type BrokerEnquiriesConnection = {
  __typename?: 'BrokerEnquiriesConnection';
  edges?: Maybe<Array<Maybe<BrokerEnquiryEdge>>>;
  nodes?: Maybe<Array<Maybe<BrokerEnquiry>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type BrokerEnquiriesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brokerId?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  enquiryKeyword?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type BrokerEnquiry = {
  __typename?: 'BrokerEnquiry';
  contactNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  listedPrice?: Maybe<Scalars['Float']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  referrer?: Maybe<Scalars['String']['output']>;
};

export type BrokerEnquiryEdge = {
  __typename?: 'BrokerEnquiryEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<BrokerEnquiry>;
};

export type BrokerFindAccountInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  mobileNumberCountryCode?: InputMaybe<Scalars['Int']['input']>;
  types?: InputMaybe<Array<InputMaybe<BrokerType>>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type BrokerForgotPassword = {
  __typename?: 'BrokerForgotPassword';
  agencyId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isValid?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type BrokerInviteHomeownerBuyerInput = {
  brokerUuid: Scalars['ID']['input'];
  buyerBrokerInvites: Array<CreateBrokerBuyerInviteInput>;
};

export type BrokerLocation = {
  __typename?: 'BrokerLocation';
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  type?: Maybe<Scalars['String']['output']>;
};

export type BrokerLocationEdge = {
  __typename?: 'BrokerLocationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<BrokerLocation>;
};

export type BrokerLocationsConnection = {
  __typename?: 'BrokerLocationsConnection';
  edges?: Maybe<Array<Maybe<BrokerLocationEdge>>>;
  nodes?: Maybe<Array<Maybe<BrokerLocation>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type BrokerLocationsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  chargeId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type BrokerSeat = {
  __typename?: 'BrokerSeat';
  totalCount?: Maybe<Scalars['Int']['output']>;
  usedCount?: Maybe<Scalars['Int']['output']>;
};

export type BrokerSetting = {
  __typename?: 'BrokerSetting';
  broker: Broker;
  id: Scalars['ID']['output'];
  isSendBuyerActivation?: Maybe<Scalars['Boolean']['output']>;
  isSendBuyerAlerts?: Maybe<Scalars['Boolean']['output']>;
  isSendBuyerConveyancing?: Maybe<Scalars['Boolean']['output']>;
  isSendBuyerEvaluation?: Maybe<Scalars['Boolean']['output']>;
  isSendBuyerInactivity?: Maybe<Scalars['Boolean']['output']>;
  isSendBuyerInspectBAndP?: Maybe<Scalars['Boolean']['output']>;
  isSendBuyerInspectPhysical?: Maybe<Scalars['Boolean']['output']>;
  isSendBuyerNegotiation?: Maybe<Scalars['Boolean']['output']>;
  isSendBuyerOffer?: Maybe<Scalars['Boolean']['output']>;
  isSendBuyerShortlist?: Maybe<Scalars['Boolean']['output']>;
  isSendBuyerStrategy?: Maybe<Scalars['Boolean']['output']>;
  isSendBuyerUnconditional?: Maybe<Scalars['Boolean']['output']>;
  sendAlertsVia?: Maybe<SendAlertsType>;
  subDomain?: Maybe<Scalars['String']['output']>;
  themeColor?: Maybe<Scalars['String']['output']>;
};

export type BrokerStatistics = {
  __typename?: 'BrokerStatistics';
  brokerOwnerSeatsCount?: Maybe<BrokerSeat>;
  buyerAcceptedOffersCount?: Maybe<Scalars['Int']['output']>;
  buyerBriefPropertyAlertsCount?: Maybe<Scalars['Int']['output']>;
  buyerEnquiriesCount?: Maybe<Scalars['Int']['output']>;
  buyerOffersCount?: Maybe<Scalars['Int']['output']>;
  buyerTotalBriefsCount?: Maybe<Scalars['Int']['output']>;
  enquiriesCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  numberRevealCount?: Maybe<Scalars['Int']['output']>;
};

export type BrokerStatisticsBuyerAcceptedOffersCountArgs = {
  filter?: InputMaybe<BuyerAcceptedOffersCountFilter>;
};

export type BrokerStatisticsBuyerBriefPropertyAlertsCountArgs = {
  filter?: InputMaybe<BuyerBriefPropertyAlertsCountFilter>;
};

export type BrokerStatisticsBuyerEnquiriesCountArgs = {
  filter?: InputMaybe<BuyerEnquiriesCountFilter>;
};

export type BrokerStatisticsBuyerOffersCountArgs = {
  filter?: InputMaybe<BuyerOffersCountFilter>;
};

export type BrokerStatisticsBuyerTotalBriefsCountArgs = {
  filter?: InputMaybe<BuyerTotalBriefsCountFilter>;
};

export type BrokerStatisticsEnquiriesCountArgs = {
  filter?: InputMaybe<BrokersConnectionOptions>;
};

export enum BrokerType {
  Homeowner = 'HOMEOWNER',
  Realty = 'REALTY',
}

export type BrokersConnection = {
  __typename?: 'BrokersConnection';
  edges?: Maybe<Array<Maybe<BrokerEdge>>>;
  nodes?: Maybe<Array<Maybe<Broker>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type BrokersConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  ownerBrokerId?: InputMaybe<Scalars['ID']['input']>;
  sortBy?: InputMaybe<BrokersConnectionOptionsSortBy>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  type?: InputMaybe<BrokerType>;
  types?: InputMaybe<Array<BrokerType>>;
};

export enum BrokersConnectionOptionsSortBy {
  Featured = 'FEATURED',
  Id = 'ID',
}

export type Buy1Take1Result = {
  __typename?: 'Buy1Take1Result';
  canAvail?: Maybe<Scalars['Boolean']['output']>;
  duration?: Maybe<Scalars['Date']['output']>;
};

export type BuyerAcceptedOffersCountFilter = {
  createdDateRange?: InputMaybe<DateRangeInput>;
};

export enum BuyerAgentSorting {
  Featured = 'FEATURED',
  Newest = 'NEWEST',
}

export type BuyerBriefPropertyAlertsCountFilter = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  isActiveBrief?: InputMaybe<Scalars['Boolean']['input']>;
  isPrePortal?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BuyerEnquiriesCountFilter = {
  createdDateRange?: InputMaybe<DateRangeInput>;
};

export type BuyerOffersCountFilter = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isPrePortal?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BuyerTotalBriefsCountFilter = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<AgentBriefProgressStatus>;
};

export enum BuyerType {
  HolidayRental = 'HOLIDAY_RENTAL',
  Investor = 'INVESTOR',
  OwnerOccupier = 'OWNER_OCCUPIER',
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type CategoryCountMap = {
  __typename?: 'CategoryCountMap';
  category?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type ChangeAgentBuyerSubscription = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  newPackageType: AgentBuyerPackage;
  stripeCardId?: InputMaybe<Scalars['String']['input']>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
  subscriptionType: AgentBuyerSubscriptionType;
  trialDays?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangeAgentPasswordByForgotPasswordCodeInput = {
  agentId: Scalars['ID']['input'];
  code: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type ChangePlatformAgentPasswordInput = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type Channel = {
  __typename?: 'Channel';
  articleLink?: Maybe<Scalars['String']['output']>;
  channelPicture?: Maybe<Scalars['String']['output']>;
  externalLink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<ChannelName>;
  privateLink?: Maybe<Scalars['String']['output']>;
  scheduledDate?: Maybe<Scalars['Date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export enum ChannelName {
  AuctionUpdate = 'AUCTION_UPDATE',
  RealtyNews = 'REALTY_NEWS',
  RealEstateTalk = 'REAL_ESTATE_TALK',
  RealEstateUncut = 'REAL_ESTATE_UNCUT',
}

export type ClicksPerDayDetails = {
  __typename?: 'ClicksPerDayDetails';
  clicks?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
};

export type Consumer = {
  __typename?: 'Consumer';
  agencyName?: Maybe<Scalars['String']['output']>;
  agencySuburb?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  changeTypeRequest?: Maybe<ConsumerTypeRequest>;
  consumerAlertsConnection?: Maybe<ConsumerAlertsConnection>;
  consumerCollectionsConnection?: Maybe<ConsumerCollectionsConnection>;
  consumerFriendRequestsConnection?: Maybe<ConsumersConnection>;
  consumerFriendsConnection?: Maybe<ConsumersConnection>;
  consumerPage?: Maybe<ConsumerPage>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  eventsConnection?: Maybe<EventsConnection>;
  firstName?: Maybe<Scalars['String']['output']>;
  followedAgenciesConnection?: Maybe<AgencyConnection>;
  followedAgentsConnection?: Maybe<AgentsConnection>;
  followedConsumersConnection?: Maybe<ConsumersConnection>;
  followedPagesConnection?: Maybe<ConsumerPageConnection>;
  followedPropertiesConnection?: Maybe<PropertiesConnection>;
  followedSuburbsConnection?: Maybe<LocationsConnection>;
  followersConnection?: Maybe<ConsumersConnection>;
  friendInfo?: Maybe<ConsumerFriend>;
  friendsConnection?: Maybe<ConsumersConnection>;
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<ConsumerGender>;
  hasOffMarketSubscription?: Maybe<Scalars['Boolean']['output']>;
  heartedPropertiesConnection?: Maybe<PropertiesConnection>;
  id: Scalars['ID']['output'];
  initials?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isContributorFollowed?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  locationId?: Maybe<Scalars['ID']['output']>;
  locationNameById?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profilePage?: Maybe<ConsumerPage>;
  profilePageId?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  role?: Maybe<ConsumerRole>;
  statistics?: Maybe<ConsumerStatistics>;
  type?: Maybe<ConsumerType>;
  unreadMessageCount?: Maybe<Scalars['Int']['output']>;
};

export type ConsumerConsumerAlertsConnectionArgs = {
  filter?: InputMaybe<ConsumerAlertsConnectionFilter>;
};

export type ConsumerConsumerCollectionsConnectionArgs = {
  filter?: InputMaybe<ConsumerCollectionsConnectionFilter>;
};

export type ConsumerConsumerFriendRequestsConnectionArgs = {
  filter?: InputMaybe<ConsumerFriendsConnectionFilter>;
};

export type ConsumerConsumerFriendsConnectionArgs = {
  filter?: InputMaybe<ConsumerFriendsConnectionFilter>;
};

export type ConsumerEventsConnectionArgs = {
  filter?: InputMaybe<EventsConnectionFilter>;
};

export type ConsumerFollowedAgenciesConnectionArgs = {
  filter?: InputMaybe<ConsumerFollowedAgenciesConnectionFilter>;
};

export type ConsumerFollowedAgentsConnectionArgs = {
  filter?: InputMaybe<ConsumerFollowedAgentsConnectionFilter>;
};

export type ConsumerFollowedConsumersConnectionArgs = {
  filter?: InputMaybe<ConsumerFollowedConsumersConnectionFilter>;
};

export type ConsumerFollowedPagesConnectionArgs = {
  filter?: InputMaybe<ConsumerFollowedPagesConnectionFilter>;
};

export type ConsumerFollowedPropertiesConnectionArgs = {
  filter?: InputMaybe<ConsumerFollowedPropertiesConnectionFilter>;
};

export type ConsumerFollowedSuburbsConnectionArgs = {
  filter?: InputMaybe<ConsumerFollowedSuburbsConnectionFilter>;
};

export type ConsumerFollowersConnectionArgs = {
  filter?: InputMaybe<ConsumerFollowersConnectionFilter>;
};

export type ConsumerHeartedPropertiesConnectionArgs = {
  filter?: InputMaybe<HeartedPropertiesConnectionFilter>;
};

export type ConsumerAlert = {
  __typename?: 'ConsumerAlert';
  bathrooms?: Maybe<Scalars['Int']['output']>;
  bedrooms?: Maybe<Scalars['Int']['output']>;
  cars?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isIncludeOffMarket?: Maybe<Scalars['Boolean']['output']>;
  locationIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  locations?: Maybe<Array<Maybe<Location>>>;
  maxPrice?: Maybe<Scalars['Float']['output']>;
  minPrice?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  propertiesConnection?: Maybe<PropertiesConnection>;
};

export type ConsumerAlertPropertiesConnectionArgs = {
  filter?: InputMaybe<PropertiesAlertConnectionFilter>;
};

export type ConsumerAlertEdge = {
  __typename?: 'ConsumerAlertEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConsumerAlert>;
};

export type ConsumerAlertsConnection = {
  __typename?: 'ConsumerAlertsConnection';
  edges?: Maybe<Array<Maybe<ConsumerAlertEdge>>>;
  nodes?: Maybe<Array<Maybe<ConsumerAlert>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type ConsumerAlertsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerClaimedPropertiesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerCollection = {
  __typename?: 'ConsumerCollection';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  propertiesConnection?: Maybe<PropertiesConnection>;
  propertyIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
};

export type ConsumerCollectionPropertiesConnectionArgs = {
  filter?: InputMaybe<PropertiesCollectionConnectionFilter>;
};

export type ConsumerCollectionEdge = {
  __typename?: 'ConsumerCollectionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConsumerCollection>;
};

export type ConsumerCollectionsConnection = {
  __typename?: 'ConsumerCollectionsConnection';
  edges?: Maybe<Array<Maybe<ConsumerCollectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ConsumerCollection>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type ConsumerCollectionsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerDeviceToken = {
  __typename?: 'ConsumerDeviceToken';
  consumer?: Maybe<Consumer>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type ConsumerEdge = {
  __typename?: 'ConsumerEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Consumer>;
};

export type ConsumerEvent = {
  __typename?: 'ConsumerEvent';
  agency?: Maybe<Agency>;
  agent?: Maybe<Agent>;
  event?: Maybe<Event>;
  id: Scalars['ID']['output'];
  property?: Maybe<Property>;
};

export type ConsumerEventEdge = {
  __typename?: 'ConsumerEventEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConsumerEvent>;
};

export type ConsumerEventsConnection = {
  __typename?: 'ConsumerEventsConnection';
  edges?: Maybe<Array<Maybe<ConsumerEventEdge>>>;
  nodes?: Maybe<Array<Maybe<ConsumerEvent>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type ConsumerEventsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerFollowAgency = {
  __typename?: 'ConsumerFollowAgency';
  id: Scalars['ID']['output'];
};

export type ConsumerFollowAgent = {
  __typename?: 'ConsumerFollowAgent';
  id: Scalars['ID']['output'];
};

export type ConsumerFollowConsumer = {
  __typename?: 'ConsumerFollowConsumer';
  id: Scalars['ID']['output'];
};

export type ConsumerFollowPage = {
  __typename?: 'ConsumerFollowPage';
  id: Scalars['ID']['output'];
};

export type ConsumerFollowProperty = {
  __typename?: 'ConsumerFollowProperty';
  id: Scalars['ID']['output'];
};

export type ConsumerFollowSuburb = {
  __typename?: 'ConsumerFollowSuburb';
  id: Scalars['ID']['output'];
};

export type ConsumerFollowedAgenciesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerFollowedAgentsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerFollowedConsumersConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerFollowedPagesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerFollowedPropertiesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerFollowedSuburbsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerFollowersConnection = {
  __typename?: 'ConsumerFollowersConnection';
  edges?: Maybe<Array<Maybe<ConsumerEdge>>>;
  nodes?: Maybe<Array<Maybe<Consumer>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type ConsumerFollowersConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerForgotPassword = {
  __typename?: 'ConsumerForgotPassword';
  agencyId?: Maybe<Scalars['ID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isValid?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type ConsumerFriend = {
  __typename?: 'ConsumerFriend';
  createdAt?: Maybe<Scalars['Date']['output']>;
  dateAccepted?: Maybe<Scalars['Date']['output']>;
  isRequester?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<ConsumerFriendStatus>;
};

export enum ConsumerFriendStatus {
  Accepted = 'ACCEPTED',
  Canceled = 'CANCELED',
  Request = 'REQUEST',
}

export type ConsumerFriendsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export enum ConsumerGender {
  Female = 'female',
  Male = 'male',
}

export type ConsumerHideProperty = {
  __typename?: 'ConsumerHideProperty';
  consumerId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isHide?: Maybe<Scalars['Boolean']['output']>;
  propertyId?: Maybe<Scalars['Int']['output']>;
};

export enum ConsumerOffMarketSubscriptionPackage {
  OffMarketPremiumAlerts = 'OFF_MARKET_PREMIUM_ALERTS',
  OffMarketProAlerts = 'OFF_MARKET_PRO_ALERTS',
}

export type ConsumerPage = {
  __typename?: 'ConsumerPage';
  about?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  agent?: Maybe<Agent>;
  agentPostsConnection?: Maybe<EventsConnection>;
  agentProfilePostsConnection?: Maybe<EventsConnection>;
  categories?: Maybe<Array<Maybe<Category>>>;
  consumerPageEventsConnection?: Maybe<EventsConnection>;
  consumerProfilePageEventsConnection?: Maybe<EventsConnection>;
  contact?: Maybe<Scalars['String']['output']>;
  contributorId: Scalars['Int']['output'];
  coverImage?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  followCount?: Maybe<Scalars['String']['output']>;
  followersConnection?: Maybe<ConsumerFollowersConnection>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['JSON']['output']>;
  initials?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isClaimed?: Maybe<Scalars['Boolean']['output']>;
  isFollowed?: Maybe<Scalars['Boolean']['output']>;
  isOfficial?: Maybe<Scalars['Boolean']['output']>;
  isPageOwner?: Maybe<Scalars['Boolean']['output']>;
  isProfileFriends?: Maybe<Scalars['Boolean']['output']>;
  isSuburb?: Maybe<Scalars['Boolean']['output']>;
  locationId?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  owner?: Maybe<Consumer>;
  pageId: Scalars['String']['output'];
  phoneNo?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  profileImageS3?: Maybe<Scalars['String']['output']>;
  profilePostsConnection?: Maybe<EventsConnection>;
  type?: Maybe<ConsumerPageType>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ConsumerPageAgentPostsConnectionArgs = {
  filter?: InputMaybe<EventsConnectionFilter>;
};

export type ConsumerPageAgentProfilePostsConnectionArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  filter?: InputMaybe<EventsConnectionFilter>;
};

export type ConsumerPageConsumerPageEventsConnectionArgs = {
  filter?: InputMaybe<EventsConnectionFilter>;
};

export type ConsumerPageConsumerProfilePageEventsConnectionArgs = {
  filter?: InputMaybe<EventsConnectionFilter>;
};

export type ConsumerPageFollowersConnectionArgs = {
  filter?: InputMaybe<ConsumerFollowersConnectionFilter>;
};

export type ConsumerPageProfilePostsConnectionArgs = {
  filter?: InputMaybe<EventsConnectionFilter>;
};

export type ConsumerPageCategory = {
  __typename?: 'ConsumerPageCategory';
  category?: Maybe<Category>;
  id: Scalars['ID']['output'];
};

export type ConsumerPageConnection = {
  __typename?: 'ConsumerPageConnection';
  edges?: Maybe<Array<Maybe<ConsumerPageEdge>>>;
  nodes?: Maybe<Array<Maybe<ConsumerPage>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type ConsumerPageConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isSupport?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerPageEdge = {
  __typename?: 'ConsumerPageEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConsumerPage>;
};

export type ConsumerPageEventsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum ConsumerPageType {
  Agent = 'AGENT',
  Business = 'BUSINESS',
  Profile = 'PROFILE',
  Suburb = 'SUBURB',
}

export type ConsumerPost = {
  __typename?: 'ConsumerPost';
  checkIn?: Maybe<Scalars['String']['output']>;
  consumerId?: Maybe<Scalars['ID']['output']>;
  consumerPageId?: Maybe<Scalars['ID']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  contributor?: Maybe<ConsumerPostContributor>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<PostImage>>>;
  isEdited?: Maybe<Scalars['Boolean']['output']>;
  isOwner?: Maybe<Scalars['Boolean']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaHost?: Maybe<Scalars['String']['output']>;
  metaImage?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ConsumerPostContributor = Consumer | ConsumerPage;

export type ConsumerPostImage = {
  __typename?: 'ConsumerPostImage';
  consumerId?: Maybe<Scalars['ID']['output']>;
  consumerPostId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  s3Key?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ConsumerPropertyClaim = {
  __typename?: 'ConsumerPropertyClaim';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  property?: Maybe<Property>;
};

export type ConsumerPropertyClaimConnection = {
  __typename?: 'ConsumerPropertyClaimConnection';
  edges?: Maybe<Array<Maybe<ConsumerPropertyClaimEdge>>>;
  nodes?: Maybe<Array<Maybe<ConsumerPropertyClaim>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type ConsumerPropertyClaimEdge = {
  __typename?: 'ConsumerPropertyClaimEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConsumerPropertyClaim>;
};

export enum ConsumerRole {
  Admin = 'ADMIN',
  Buyer = 'BUYER',
  Buying = 'BUYING',
  None = 'NONE',
  Owner = 'OWNER',
  Ownerbuyer = 'OWNERBUYER',
  Renting = 'RENTING',
  Seller = 'SELLER',
}

export type ConsumerSearchSuggestionFilter = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export type ConsumerSearchSuggestionResult = {
  __typename?: 'ConsumerSearchSuggestionResult';
  consumer?: Maybe<Array<Maybe<Consumer>>>;
  consumerPage?: Maybe<Array<Maybe<ConsumerPage>>>;
};

export type ConsumerSendEmailInput = {
  businessEmail?: InputMaybe<Scalars['String']['input']>;
  businessName?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type ConsumerStatistics = {
  __typename?: 'ConsumerStatistics';
  followersCount?: Maybe<Scalars['Int']['output']>;
  friendsCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  likesCount?: Maybe<Scalars['Int']['output']>;
  postCount?: Maybe<Scalars['Int']['output']>;
};

export type ConsumerSubscription = {
  __typename?: 'ConsumerSubscription';
  consumer?: Maybe<Consumer>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  package?: Maybe<ConsumerSubscriptionPackage>;
  startDate?: Maybe<Scalars['Date']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  subscriptionType?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export enum ConsumerSubscriptionPackage {
  OffMarketPremiumAlerts = 'OFF_MARKET_PREMIUM_ALERTS',
  OffMarketProAlerts = 'OFF_MARKET_PRO_ALERTS',
}

export enum ConsumerType {
  Agent = 'AGENT',
  Consumer = 'CONSUMER',
  Contributor = 'CONTRIBUTOR',
}

export type ConsumerTypeCategory = {
  __typename?: 'ConsumerTypeCategory';
  category?: Maybe<Scalars['String']['output']>;
  consumerId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
};

export type ConsumerTypeRequest = {
  __typename?: 'ConsumerTypeRequest';
  consumer?: Maybe<Consumer>;
  consumerId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  latest?: Maybe<ConsumerTypeRequest>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ConsumerTypeRequestConnection = {
  __typename?: 'ConsumerTypeRequestConnection';
  edges?: Maybe<Array<Maybe<ConsumerTypeRequestEdge>>>;
  nodes?: Maybe<Array<Maybe<ConsumerTypeRequest>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type ConsumerTypeRequestConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  consumerId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConsumerTypeRequestEdge = {
  __typename?: 'ConsumerTypeRequestEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConsumerTypeRequest>;
};

export type ConsumersConnection = {
  __typename?: 'ConsumersConnection';
  edges?: Maybe<Array<Maybe<ConsumerEdge>>>;
  nodes?: Maybe<Array<Maybe<Consumer>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type ConsumersConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ContactAgentsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  includeOnlyRealAgents?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  listingType?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  priceMax?: InputMaybe<Scalars['Int']['input']>;
  priceMin?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentByPageOptionsInput = {
  page: Scalars['String']['input'];
};

export enum ContentNames {
  AboutMe = 'ABOUT_ME',
  CoverPhoto = 'COVER_PHOTO',
  ProfileVideo = 'PROFILE_VIDEO',
}

export type ContributorsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Conversation = {
  __typename?: 'Conversation';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  membersConnection?: Maybe<ConversationMembersConnection>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type ConversationMembersConnectionArgs = {
  options?: InputMaybe<ConversationMembersConnectionOptions>;
};

export type ConversationEdge = {
  __typename?: 'ConversationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConversationMember>;
};

export type ConversationMember = {
  __typename?: 'ConversationMember';
  agentContact?: Maybe<AgentContact>;
  conversation?: Maybe<Conversation>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type ConversationMemberEdge = {
  __typename?: 'ConversationMemberEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConversationMember>;
};

export type ConversationMembersConnection = {
  __typename?: 'ConversationMembersConnection';
  edges?: Maybe<Array<Maybe<ConversationMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<ConversationMember>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type ConversationMembersConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConversationsConnection = {
  __typename?: 'ConversationsConnection';
  edges?: Maybe<Array<Maybe<ConversationEdge>>>;
  nodes?: Maybe<Array<Maybe<Conversation>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type ConversationsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type CounterAgentOfferInput = {
  agentBriefId: Scalars['ID']['input'];
  agentOfferId: Scalars['ID']['input'];
  daysForFinance: Scalars['String']['input'];
  daysToSettlement: Scalars['String']['input'];
  depositAmount: Scalars['Int']['input'];
  inspectionTerms: Scalars['String']['input'];
  legalPurchaser?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  offerAmount: Scalars['Int']['input'];
  other?: InputMaybe<Scalars['String']['input']>;
  petsAndBuildingInspection: Scalars['String']['input'];
  proposedClosingDate?: InputMaybe<Scalars['Date']['input']>;
  source: AgentOfferSource;
  status: AgentOfferProgressStatus;
};

export enum Country {
  Australia = 'AUSTRALIA',
}

export type CreateAdSalesAgreementInput = {
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  isAccepted: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  signedDate: Scalars['Date']['input'];
};

export type CreateAdminUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type CreateAgencyCommercialSubscriptionInput = {
  agencyId: Scalars['ID']['input'];
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgencyContactTrackerInput = {
  agencyId: Scalars['ID']['input'];
  ipInfo?: InputMaybe<IpInfoInput>;
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  type: AgencyContactTrackerType;
};

export type CreateAgencyCrmEagleConfigInput = {
  clientId: Scalars['String']['input'];
  clientSecret: Scalars['String']['input'];
  isSendEnquiries?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateAgencyCrmInput = {
  agencyId: Scalars['ID']['input'];
  crmEmail?: InputMaybe<Scalars['String']['input']>;
  crmId: Scalars['ID']['input'];
  eagleConfig?: InputMaybe<CreateAgencyCrmEagleConfigInput>;
  integrationCode?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lockedonConfig?: InputMaybe<CreateAgencyCrmLockedonConfigInput>;
  zenuConfig?: InputMaybe<CreateAgencyCrmZenuConfigInput>;
};

export type CreateAgencyCrmLockedonConfigInput = {
  officeId: Scalars['String']['input'];
};

export type CreateAgencyCrmZenuConfigInput = {
  authorisationId: Scalars['String']['input'];
  authorisationToken: Scalars['String']['input'];
};

export type CreateAgencyEnquiryInput = {
  agencyId: Scalars['ID']['input'];
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  enquiries?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  ipInfo?: InputMaybe<IpInfoInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  propertyAddress?: InputMaybe<Scalars['String']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgencyFbIntegrationInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  fbUserId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pageId?: InputMaybe<Scalars['String']['input']>;
  type: IntegrationType;
};

export type CreateAgencyFbSubscriptionInput = {
  agencyId: Scalars['ID']['input'];
  pageName: Scalars['String']['input'];
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripeSource?: InputMaybe<Scalars['String']['input']>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgencyFromSubscriptionInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateAgencyGroupInput = {
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  lastName: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateAgencyGroupMember = {
  agencyGroupID: Scalars['ID']['input'];
  agencyId: Scalars['ID']['input'];
};

export type CreateAgencyInput = {
  adminEmail: Scalars['String']['input'];
  adminFirstName: Scalars['String']['input'];
  adminLastName: Scalars['String']['input'];
  adminMobile?: InputMaybe<Scalars['String']['input']>;
  crmId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgencyInstagramInput = {
  accessToken: Scalars['String']['input'];
  fbUserId: Scalars['ID']['input'];
};

export type CreateAgencySitemapInput = {
  agencyId: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  url: Scalars['String']['input'];
};

export type CreateAgencyVerificationInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  crmIntegrations?: InputMaybe<Array<InputMaybe<InviteAgencyInputCrmIdCode>>>;
  file: Scalars['Upload']['input'];
  firstName: Scalars['String']['input'];
  landlineNumber?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  verificationKey: Scalars['String']['input'];
};

export type CreateAgentAccelerateOneDollarPromoInput = {
  agentId: Scalars['ID']['input'];
  couponCode?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['Date']['input']>;
  featuredSuburbIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  pricingAmount?: InputMaybe<Scalars['Float']['input']>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentAccessTokenFromLoginOtp = {
  otp: Scalars['String']['input'];
  token: Scalars['ID']['input'];
};

export type CreateAgentAddOnInput = {
  packageType: AgentSubscriptionPackage;
  stripeCardId?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentBriefFromClientAgentInput = {
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agencyName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  mobileNumberCountryCode?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type CreateAgentBriefFromClientInput = {
  agent: CreateAgentBriefFromClientAgentInput;
  alertNotification?: InputMaybe<AlertNotificationOptions>;
  brief: CreateAgentBriefInput;
};

export type CreateAgentBriefFromLinkInput = {
  agentUuid: Scalars['ID']['input'];
  formInput: CreateAgentBriefInput;
};

export type CreateAgentBriefInput = {
  additionalClients?: InputMaybe<Array<AdditionalClientInput>>;
  agentBriefId?: InputMaybe<Scalars['ID']['input']>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  bankLender?: InputMaybe<Scalars['String']['input']>;
  bath?: InputMaybe<Scalars['Int']['input']>;
  bed?: InputMaybe<Scalars['Int']['input']>;
  conveyancer?: InputMaybe<Scalars['String']['input']>;
  conveyancerContactDetails?: InputMaybe<Scalars['String']['input']>;
  crimeRatingPercent?: InputMaybe<Scalars['Float']['input']>;
  daysOnMarket?: InputMaybe<Scalars['Int']['input']>;
  deadline?: InputMaybe<Scalars['Date']['input']>;
  distanceFromPublicTransport?: InputMaybe<Scalars['Int']['input']>;
  distanceFromSchoolCatchments?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  featuresKeyword?: InputMaybe<Scalars['String']['input']>;
  fireRiskFactor?: InputMaybe<Scalars['Int']['input']>;
  floodRiskFactor?: InputMaybe<Scalars['Int']['input']>;
  hasEasementIdentified?: InputMaybe<YesNoValue>;
  hoOtherPropertyCategory?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  landArea?: InputMaybe<NumberRangeInput>;
  maxDistanceFromSuburb?: InputMaybe<Scalars['Int']['input']>;
  maxPrice?: InputMaybe<Scalars['Int']['input']>;
  minPrice?: InputMaybe<Scalars['Int']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  mobileNumberCountryCode?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerOccRentalPercent?: InputMaybe<Scalars['Float']['input']>;
  parking?: InputMaybe<Scalars['Int']['input']>;
  postalAddress?: InputMaybe<Scalars['String']['input']>;
  propertyCategories?: InputMaybe<Array<PropertyCategory>>;
  propertyGroup?: InputMaybe<AgentBriefPropertyGroup>;
  proximityPlaces?: InputMaybe<Array<InputMaybe<AgentBriefProximityPlaces>>>;
  purchasingEntity?: InputMaybe<Scalars['String']['input']>;
  searchCountData?: InputMaybe<Scalars['Int']['input']>;
  secondaryEmail?: InputMaybe<Scalars['String']['input']>;
  secondaryMobileNumber?: InputMaybe<Scalars['String']['input']>;
  secondaryMobileNumberCountryCode?: InputMaybe<Scalars['Int']['input']>;
  secondaryName?: InputMaybe<Scalars['String']['input']>;
  socialHousingPercent?: InputMaybe<Scalars['Float']['input']>;
  source?: InputMaybe<AgentBriefSource>;
  suburbsOfInterest: Array<SuburbsOfInterest>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<BuyerType>;
  vacancyRatePercent?: InputMaybe<Scalars['Float']['input']>;
  yieldPercent?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateAgentBuyerHomeownerRealtySubscriptionInput = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
  stripeCustomerId: Scalars['String']['input'];
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentContactInput = {
  address?: InputMaybe<AgentContactAddressInput>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  brokerId?: InputMaybe<Scalars['ID']['input']>;
  emails?: InputMaybe<Array<InputMaybe<AgentContactEmailInput>>>;
  firstName: Scalars['String']['input'];
  hasAcceptedInvite?: InputMaybe<Scalars['Boolean']['input']>;
  hasBuyPotential?: InputMaybe<Scalars['Boolean']['input']>;
  hasSellPotential?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  nickName?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  phoneNumbers?: InputMaybe<Array<InputMaybe<AgentContactPhoneInput>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AgentContactType>;
};

export type CreateAgentContactTrackerInput = {
  agentId: Scalars['ID']['input'];
  ipInfo?: InputMaybe<IpInfoInput>;
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  type: AgentContactTrackerType;
};

export type CreateAgentConversationInput = {
  agentContactIds: Array<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type CreateAgentDeviceInput = {
  app?: InputMaybe<AgentDeviceApp>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  platform: AgentDeviceType;
  token: Scalars['String']['input'];
};

export enum CreateAgentEnquiryEnquiries {
  GeneralInquiry = 'GENERAL_INQUIRY',
  PropertyInfo = 'PROPERTY_INFO',
  PropertyManagement = 'PROPERTY_MANAGEMENT',
  SellingProperty = 'SELLING_PROPERTY',
}

export type CreateAgentEnquiryInput = {
  agentId: Scalars['ID']['input'];
  budget?: InputMaybe<Scalars['Int']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  enquiries?: InputMaybe<Array<InputMaybe<CreateAgentEnquiryEnquiries>>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  ipInfo?: InputMaybe<IpInfoInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  message: Scalars['String']['input'];
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  mobileNumberCountryCode?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  propertyAddress?: InputMaybe<Scalars['String']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentFbIntegrationInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  fbUserId?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pageId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentForgotPasswordInput = {
  isCodeInvalid?: InputMaybe<Scalars['Boolean']['input']>;
  mobileNumber: Scalars['String']['input'];
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentFromListingUploaderInput = {
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  mobileNumber: Scalars['String']['input'];
  mobileNumberCountryCode: Scalars['Int']['input'];
};

export type CreateAgentFromPrePortalSignUpInput = {
  agencyName?: InputMaybe<Scalars['String']['input']>;
  agentMembership: Array<InputMaybe<Scalars['String']['input']>>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  existingAgentId?: InputMaybe<Scalars['ID']['input']>;
  firstName: Scalars['String']['input'];
  isSaveBillingInfo?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  licenseNumber?: InputMaybe<Scalars['String']['input']>;
  mobileNumber: Scalars['String']['input'];
  mobileNumberCountryCode: Scalars['Int']['input'];
  package?: InputMaybe<AgentFromPrePortalPackage>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
  type: AgentType;
};

export type CreateAgentFromSignUpInput = {
  agencyId: Scalars['ID']['input'];
  agencyName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  mobileNumber: Scalars['String']['input'];
  password: Scalars['String']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  reaUrl?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
};

export type CreateAgentFromSignUpMobileInput = {
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agencyName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  mobileNumber: Scalars['String']['input'];
  password: Scalars['String']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  reaUrl?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
};

export type CreateAgentInput = {
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  agencyId: Scalars['ID']['input'];
  agentType?: InputMaybe<Scalars['String']['input']>;
  areaOfSpecializations?: InputMaybe<Array<InputMaybe<AreaOfSpecialization>>>;
  businessNumber?: InputMaybe<Scalars['String']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  crmLeadEmails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email: Scalars['String']['input'];
  facebook?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  landlineNumber?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  mobileNumberCountryCode?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  reportEmails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  services?: InputMaybe<Array<InputMaybe<AgentService>>>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
  vendorLeads?: InputMaybe<Scalars['String']['input']>;
  welcomeEmail?: InputMaybe<Scalars['Boolean']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentLead = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
  bedroom?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  goal?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  priceRange?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  streetNumber?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentNewPasswordInput = {
  mobileNumber: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentOfferInput = {
  agentBriefId: Scalars['ID']['input'];
  daysForFinance: Scalars['String']['input'];
  daysToSettlement: Scalars['String']['input'];
  depositAmount: Scalars['Int']['input'];
  inspectionTerms: Scalars['String']['input'];
  legalPurchaser?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  offerAmount: Scalars['Int']['input'];
  other?: InputMaybe<Scalars['String']['input']>;
  petsAndBuildingInspection: Scalars['String']['input'];
  propertyId: Scalars['ID']['input'];
  proposedClosingDate?: InputMaybe<Scalars['Date']['input']>;
};

export type CreateAgentPaymentFromSignupInput = {
  agentId: Scalars['ID']['input'];
  couponCode?: InputMaybe<Scalars['String']['input']>;
  expiryDate?: InputMaybe<Scalars['Date']['input']>;
  featuredSuburbIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  key?: InputMaybe<CreateAgentPaymentType>;
  pricingAmount?: InputMaybe<Scalars['Float']['input']>;
  referralCode?: InputMaybe<Scalars['String']['input']>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
  subscriptionPlan?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentPaymentInput = {
  expiryDate?: InputMaybe<Scalars['Date']['input']>;
  featuredSuburbIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hasCoupon?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<CreateAgentPaymentType>;
  numberOfExclusive?: InputMaybe<Scalars['Int']['input']>;
  numberOfReserved?: InputMaybe<Scalars['Int']['input']>;
  pricingAmount?: InputMaybe<Scalars['Float']['input']>;
  pricingName?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  remainingDirectory?: InputMaybe<Scalars['Int']['input']>;
  reserveIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
  subscriptionPlan?: InputMaybe<Scalars['String']['input']>;
  suburbIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum CreateAgentPaymentType {
  AgentDirectoryExclusiveMonthly = 'AGENT_DIRECTORY_EXCLUSIVE_MONTHLY',
  AgentDirectoryExclusiveYearly = 'AGENT_DIRECTORY_EXCLUSIVE_YEARLY',
  AgentDirectoryPremiumMonthly = 'AGENT_DIRECTORY_PREMIUM_MONTHLY',
  AgentDirectoryPremiumYearly = 'AGENT_DIRECTORY_PREMIUM_YEARLY',
  AgentUpgradeAccelerate = 'AGENT_UPGRADE_ACCELERATE',
  AgentUpgradeAccelerateMultiple = 'AGENT_UPGRADE_ACCELERATE_MULTIPLE',
  DualDirectoryExclusiveMonthly = 'DUAL_DIRECTORY_EXCLUSIVE_MONTHLY',
  DualDirectoryExclusiveYearly = 'DUAL_DIRECTORY_EXCLUSIVE_YEARLY',
  DualDirectoryPremiumMonthly = 'DUAL_DIRECTORY_PREMIUM_MONTHLY',
  DualDirectoryPremiumYearly = 'DUAL_DIRECTORY_PREMIUM_YEARLY',
  PmDirectoryExclusiveMonthly = 'PM_DIRECTORY_EXCLUSIVE_MONTHLY',
  PmDirectoryExclusiveYearly = 'PM_DIRECTORY_EXCLUSIVE_YEARLY',
  PmDirectoryPremiumMonthly = 'PM_DIRECTORY_PREMIUM_MONTHLY',
  PmDirectoryPremiumYearly = 'PM_DIRECTORY_PREMIUM_YEARLY',
}

export type CreateAgentPlatformSubscriptionInput = {
  agency: Scalars['String']['input'];
  contactNumber: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  isAnnualPackage: Scalars['Boolean']['input'];
  isTrial: Scalars['Boolean']['input'];
  lastName: Scalars['String']['input'];
  packageType: CreatePlatformPackageType;
  reaUrl?: InputMaybe<Scalars['String']['input']>;
  referralCode?: InputMaybe<Scalars['String']['input']>;
  stripeTokenId: Scalars['String']['input'];
};

export type CreateAgentPlusSubscriptionBillingInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  isSaveBillingInfo?: InputMaybe<Scalars['Boolean']['input']>;
  isUseSavedBillingInfo?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentPlusSubscriptionInput = {
  agencyName?: InputMaybe<Scalars['String']['input']>;
  agentId?: InputMaybe<Scalars['String']['input']>;
  billing?: InputMaybe<CreateAgentPlusSubscriptionBillingInput>;
  email: Scalars['String']['input'];
  facebookPageId?: InputMaybe<Scalars['String']['input']>;
  facebookPageName?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  isAnnualPackage?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  locations?: InputMaybe<Array<InputMaybe<CreateAgentPlusSubscriptionLocationInput>>>;
  mobileNumber: Scalars['String']['input'];
  mobileNumberCountryCode: Scalars['Int']['input'];
  package: CreateAgentPlusSubscriptionPackage;
  profilePictureUrl?: InputMaybe<Scalars['String']['input']>;
  suburbImageUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentPlusSubscriptionLocationInput = {
  full: Scalars['String']['input'];
  isAnnual?: InputMaybe<Scalars['Boolean']['input']>;
  isExclusive?: InputMaybe<Scalars['Boolean']['input']>;
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  locationId: Scalars['ID']['input'];
};

export enum CreateAgentPlusSubscriptionPackage {
  Post = 'POST',
  Profile = 'PROFILE',
}

export type CreateAgentPropertyInspectionInput = {
  agentBriefId?: InputMaybe<Scalars['ID']['input']>;
  propertyId: Scalars['ID']['input'];
  videos?: InputMaybe<Array<CreateAgentPropertyInspectionVideosInput>>;
};

export type CreateAgentPropertyInspectionVideoCommentInput = {
  agentPropertyInspectionVideoId: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
};

export type CreateAgentPropertyInspectionVideoInput = {
  agentPropertyInspectionId: Scalars['ID']['input'];
  comments?: InputMaybe<Array<Scalars['String']['input']>>;
  s3Bucket: Scalars['String']['input'];
  s3Key: Scalars['String']['input'];
};

export type CreateAgentPropertyInspectionVideosInput = {
  comments?: InputMaybe<Array<Scalars['String']['input']>>;
  s3Bucket: Scalars['String']['input'];
  s3Key: Scalars['String']['input'];
};

export type CreateAgentPropertyRequestInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  propertyId: Scalars['ID']['input'];
  stripeAccount?: InputMaybe<StripeAccount>;
  type: AgentPropertyRequestType;
};

export type CreateAgentReviewInput = {
  communicationCount: Scalars['Int']['input'];
  credibilityCount: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  marketCount: Scalars['Int']['input'];
  negotiationCount: Scalars['Int']['input'];
  reviewCode: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateAgentTransactionInput = {
  action: TransactionAction;
  agentOfferId?: InputMaybe<Scalars['ID']['input']>;
  propertyEnquiryId?: InputMaybe<Scalars['ID']['input']>;
  salesPrice?: InputMaybe<Scalars['String']['input']>;
  source: TransactionSource;
  transactionFee?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateBrokerAwardInput = {
  brokerId: Scalars['ID']['input'];
  file?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBrokerBuyerInviteInput = {
  email: Scalars['String']['input'];
  expiryDate?: InputMaybe<Scalars['Date']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  mobileNumber: Scalars['String']['input'];
  mobileNumberCountryCode: Scalars['Int']['input'];
  preApprovedAmount?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateBrokerCertificateInput = {
  brokerId: Scalars['ID']['input'];
  file?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBrokerCompanyInput = {
  name: Scalars['String']['input'];
};

export type CreateBrokerEnquiryInput = {
  brokerId: Scalars['ID']['input'];
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  listedPrice?: InputMaybe<Scalars['Float']['input']>;
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBrokerInput = {
  brokerCompanyId?: InputMaybe<Scalars['ID']['input']>;
  businessLocation?: InputMaybe<Scalars['String']['input']>;
  businessName?: InputMaybe<Scalars['String']['input']>;
  contactNumber: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  propertyId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBrokerPaymentInput = {
  featuredSuburbIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hasCoupon?: InputMaybe<Scalars['Boolean']['input']>;
  pricingAmount?: InputMaybe<Scalars['Float']['input']>;
  pricingName?: InputMaybe<Scalars['String']['input']>;
  remainingDirectory?: InputMaybe<Scalars['Int']['input']>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
  suburbIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type CreateBrokerSignUpInput = {
  brokerInvitees?: InputMaybe<Array<InputMaybe<CreateBrokerBuyerInviteInput>>>;
  businessName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  homeownerBuyerAgentUuid?: InputMaybe<Scalars['ID']['input']>;
  mobileNumber: Scalars['String']['input'];
  mobileNumberCountryCode: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type CreateChannelInput = {
  articleLink?: InputMaybe<Scalars['String']['input']>;
  externalLink?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<ChannelName>;
  privateLink?: InputMaybe<Scalars['String']['input']>;
  scheduledDate?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsumerAlertInput = {
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  cars?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isIncludeOffMarket?: InputMaybe<Scalars['Boolean']['input']>;
  locations: Array<InputMaybe<Scalars['ID']['input']>>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
};

export type CreateConsumerAlertWithConsumerSignupInput = {
  Bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  cars?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  fbId?: InputMaybe<Scalars['String']['input']>;
  fbProfileUrl?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfileUrl?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isIncludeOffMarket?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  locations: Array<InputMaybe<Scalars['ID']['input']>>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offMarketPlan?: InputMaybe<ConsumerOffMarketSubscriptionPackage>;
  password: Scalars['String']['input'];
  phoneCountryCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsumerAlertWithExistingConsumerInput = {
  Bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  cars?: InputMaybe<Scalars['Int']['input']>;
  consumerId: Scalars['String']['input'];
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isIncludeOffMarket?: InputMaybe<Scalars['Boolean']['input']>;
  locations: Array<InputMaybe<Scalars['ID']['input']>>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offMarketPlan?: InputMaybe<ConsumerOffMarketSubscriptionPackage>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsumerAppleSignUpInput = {
  appleUserId: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsumerInput = {
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agencyName?: InputMaybe<Scalars['String']['input']>;
  agencySuburb?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fbId?: InputMaybe<Scalars['String']['input']>;
  fbProfileUrl?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfileUrl?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsumerOffMarketSubWithConsumerSignupInput = {
  email: Scalars['String']['input'];
  fbId?: InputMaybe<Scalars['String']['input']>;
  fbProfileUrl?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfileUrl?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  offMarketPlan?: InputMaybe<ConsumerOffMarketSubscriptionPackage>;
  password: Scalars['String']['input'];
  phoneCountryCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsumerOffMarketSubWithExistingConsumerInput = {
  consumerId: Scalars['String']['input'];
  offMarketPlan?: InputMaybe<ConsumerOffMarketSubscriptionPackage>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsumerOffMarketSubscriptionInput = {
  consumerId: Scalars['ID']['input'];
  offMarketPlan?: InputMaybe<ConsumerOffMarketSubscriptionPackage>;
  stripeTokenId: Scalars['String']['input'];
};

export type CreateConsumerPageInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contact?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isOfficial?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  pageId: Scalars['String']['input'];
  phoneNo?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsumerPagePostInput = {
  checkIn?: InputMaybe<Scalars['String']['input']>;
  consumerPageId?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaHost?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaUrl?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsumerPostInput = {
  checkIn?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaHost?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaUrl?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConsumerTokenUsingSocialLoginInput = {
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agencyName?: InputMaybe<Scalars['String']['input']>;
  agencySuburb?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fbId?: InputMaybe<Scalars['String']['input']>;
  fbProfileUrl?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfileUrl?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCrmInput = {
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  file?: InputMaybe<Scalars['Upload']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomAgentPropertyShortlistInput = {
  address: Scalars['String']['input'];
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  briefIds: Array<Scalars['ID']['input']>;
  carports?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrls?: InputMaybe<Array<Scalars['String']['input']>>;
  landAreaSqm?: InputMaybe<Scalars['Float']['input']>;
  propertyCategory: PropertyCategory;
  sellingPrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<AgentPropertyShortlistStatus>;
  url: Scalars['String']['input'];
};

export type CreateDeveloperFromSignUpInput = {
  email: Scalars['String']['input'];
  enquiryEmail?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  organizationName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDeveloperProjectEnquiryInput = {
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  developerProjectUuid: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  message: Scalars['String']['input'];
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDeveloperProjectInput = {
  builderName?: InputMaybe<Scalars['String']['input']>;
  cardEmail?: InputMaybe<Scalars['String']['input']>;
  cardFirstName?: InputMaybe<Scalars['String']['input']>;
  cardLastName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  developerId: Scalars['ID']['input'];
  endDate?: InputMaybe<Scalars['Date']['input']>;
  floorPlanUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  floors: Scalars['Int']['input'];
  headline?: InputMaybe<Scalars['String']['input']>;
  imageUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  inspectionText?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  package?: InputMaybe<DeveloperProjectPackage>;
  percentCompleted: Scalars['Float']['input'];
  postalCode: Scalars['Int']['input'];
  priceText?: InputMaybe<Scalars['String']['input']>;
  stage: DeveloperProjectStage;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  state: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  street: Scalars['String']['input'];
  streetNumber?: InputMaybe<Scalars['String']['input']>;
  stripeSourceId?: InputMaybe<Scalars['String']['input']>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
  suburb: Scalars['String']['input'];
  totalUnits?: InputMaybe<Scalars['Int']['input']>;
  unitType?: InputMaybe<Scalars['String']['input']>;
  videoUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreateDeveloperPropertyImageUrlInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  url: Scalars['String']['input'];
};

export type CreateDeveloperPropertyInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  developerProjectUuid: Scalars['ID']['input'];
  externalLink1?: InputMaybe<Scalars['String']['input']>;
  externalLink2?: InputMaybe<Scalars['String']['input']>;
  externalLink3?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<PropertyFeatures>;
  floorPlanUrls?: InputMaybe<Array<InputMaybe<CreateDeveloperPropertyImageUrlInput>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  imageUrls?: InputMaybe<Array<InputMaybe<CreateDeveloperPropertyImageUrlInput>>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  landArea?: InputMaybe<Scalars['Int']['input']>;
  landAreaUnit?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  postalCode: Scalars['Int']['input'];
  priceView?: InputMaybe<Scalars['String']['input']>;
  sellingPrice?: InputMaybe<Scalars['Float']['input']>;
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
  streetNumber: Scalars['String']['input'];
  subNumber: Scalars['String']['input'];
  suburb: Scalars['String']['input'];
  videoLink?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDeveloperTokenInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateDomainIntegrationInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  redirectUri?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDomainOffMarketInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  actionDate?: InputMaybe<Scalars['Date']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  displaySoldPrice?: InputMaybe<Scalars['Boolean']['input']>;
  leasedDuration?: InputMaybe<Scalars['Int']['input']>;
  leasedPrice?: InputMaybe<Scalars['Int']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  soldPrice?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEventConsumerShareInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateExistingPostPromotionInput = {
  currency: Scalars['String']['input'];
  customerId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['Date']['input'];
  isPackagePrice?: InputMaybe<Scalars['Boolean']['input']>;
  package: Scalars['String']['input'];
  postId?: InputMaybe<Scalars['ID']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  propertyId: Scalars['String']['input'];
  reportEmail?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['Date']['input'];
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripeSource?: InputMaybe<Scalars['String']['input']>;
  stripeToken?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateFacebookGroupPageInput = {
  description: Scalars['String']['input'];
  facebookPagesId?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
};

export type CreateFacebookPageInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  locationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  pageId: Scalars['String']['input'];
  pageName: Scalars['String']['input'];
};

export type CreateFacebookPagePortalInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  pageId: Scalars['ID']['input'];
  pageName: Scalars['ID']['input'];
  url: Scalars['ID']['input'];
};

export type CreateFoundationPaymentInput = {
  maxRedemptions?: InputMaybe<Scalars['Int']['input']>;
  portfolioHighlightPackage?: InputMaybe<Scalars['Boolean']['input']>;
  promoCode?: InputMaybe<Scalars['String']['input']>;
  promoDescription?: InputMaybe<Scalars['String']['input']>;
  promoName?: InputMaybe<Scalars['String']['input']>;
  promoPrice?: InputMaybe<Scalars['Float']['input']>;
  propertyIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  stripeTokenId: Scalars['String']['input'];
  subscriptionType?: InputMaybe<Scalars['String']['input']>;
};

export type CreateHeroInput = {
  episode?: InputMaybe<Scalars['Int']['input']>;
  externalLink?: InputMaybe<Scalars['String']['input']>;
  heroId?: InputMaybe<Scalars['ID']['input']>;
  publicLink?: InputMaybe<Scalars['String']['input']>;
  scheduledDate?: InputMaybe<Scalars['String']['input']>;
  show?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateHomeownerAgentContactsInput = {
  contacts: Array<CreateAgentContactInput>;
};

export type CreateHomeownerAgentSubscriptionPackage = {
  agentId: Scalars['ID']['input'];
  hoPackages?: InputMaybe<Array<InputMaybe<AgentSubscriptionPackage>>>;
  referralCode?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId: Scalars['ID']['input'];
};

export type CreateInvestorInput = {
  address: Scalars['String']['input'];
  agencyName?: InputMaybe<Scalars['String']['input']>;
  docusignEnvelopeId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  isAgreedTerms?: InputMaybe<Scalars['Boolean']['input']>;
  isSophisticated?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateLocationInput = {
  country?: InputMaybe<LocationCountry>;
  full: Scalars['String']['input'];
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  locationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  postalCode?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  stateFull?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LocationType>;
};

export type CreatePagSessionInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['JSON']['input'];
  url: Scalars['String']['input'];
};

export type CreatePlatformAgentAppraisalEnquiryInput = {
  appraisalPropertyId: Scalars['String']['input'];
  callTimeMessage?: InputMaybe<Scalars['String']['input']>;
  contactNumber: Scalars['String']['input'];
  contactNumberCountryCode: Scalars['Int']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  isAddedPropertyValue?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  platformAgentUuid: Scalars['ID']['input'];
  propertyAddress: Scalars['String']['input'];
};

export type CreatePlatformAgentContentInput = {
  data: Scalars['JSON']['input'];
  id: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  page: Scalars['String']['input'];
};

export type CreatePlatformAgentEnquiryInput = {
  contactNumber: Scalars['String']['input'];
  contactNumberCountryCode: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  platformAgentUuid: Scalars['ID']['input'];
  propertyShortId?: InputMaybe<Scalars['ID']['input']>;
  type: PlatformAgentEnquiryType;
};

export type CreatePlatformAgentPropensityAppraisalEnquiryInput = {
  appraisalPropertyId: Scalars['ID']['input'];
  platformAgentUuid: Scalars['ID']['input'];
  propertyAddress: Scalars['String']['input'];
};

export type CreatePlatformAgentSuburbInput = {
  cardId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  latLng?: InputMaybe<LatLngInput>;
  locationId?: InputMaybe<Scalars['Int']['input']>;
  stripeCustomerId: Scalars['String']['input'];
  suburbName?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePlatformAgentTokenInput = {
  password: Scalars['String']['input'];
  type: LoginType;
  username: Scalars['String']['input'];
};

export enum CreatePlatformPackageType {
  Lite = 'LITE',
  Pro = 'PRO',
}

export type CreatePromotionInfoInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  agencyLogoUrl?: InputMaybe<Scalars['String']['input']>;
  agencyName?: InputMaybe<Scalars['String']['input']>;
  agentEmail?: InputMaybe<Scalars['String']['input']>;
  agentFirstName?: InputMaybe<Scalars['String']['input']>;
  agentImageUrl?: InputMaybe<Scalars['String']['input']>;
  agentLastName?: InputMaybe<Scalars['String']['input']>;
  bannerBgColor?: InputMaybe<Scalars['String']['input']>;
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  officeId?: InputMaybe<Scalars['ID']['input']>;
  parking?: InputMaybe<Scalars['Int']['input']>;
  propertyStatus?: InputMaybe<Scalars['String']['input']>;
  propertyType?: InputMaybe<Scalars['String']['input']>;
  targetingAgeMax?: InputMaybe<Scalars['Int']['input']>;
  targetingAgeMin?: InputMaybe<Scalars['Int']['input']>;
  targetingCountries?: InputMaybe<Scalars['JSON']['input']>;
  targetingGender?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePromotionInput = {
  autoSoldBudget?: InputMaybe<Scalars['Float']['input']>;
  autoSoldDuration?: InputMaybe<Scalars['Int']['input']>;
  creativeSpec: Scalars['JSON']['input'];
  currency: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  endDate: Scalars['Date']['input'];
  info?: InputMaybe<CreatePromotionInfoInput>;
  isAutoBoostOnSold?: InputMaybe<Scalars['Boolean']['input']>;
  isDailyReport?: InputMaybe<Scalars['Boolean']['input']>;
  isPackagePrice?: InputMaybe<Scalars['Boolean']['input']>;
  package: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  promotionLocation?: InputMaybe<Array<InputMaybe<CreatePromotionTargetingLocationInput>>>;
  propertyId: Scalars['String']['input'];
  reportEmail?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['Date']['input'];
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripeSource?: InputMaybe<Scalars['String']['input']>;
  stripeToken?: InputMaybe<Scalars['String']['input']>;
  targetingSpec: Scalars['JSON']['input'];
  title: Scalars['String']['input'];
};

export type CreatePromotionTargetingLocationInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Int']['input']>;
  radiusUnit?: InputMaybe<DistanceUnit>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePropertyAppraisalEnquiryInput = {
  address: Scalars['String']['input'];
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  appraisal: Scalars['String']['input'];
  contactNumber: Scalars['String']['input'];
  contactVia: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  priceMax: Scalars['Float']['input'];
  priceMin: Scalars['Float']['input'];
  propertyId: Scalars['ID']['input'];
  sellingTimeframe: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreatePropertyCouponInput = {
  amountOff?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountOff?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  maxRedemptions?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePropertyEnquiryAgencyInput = {
  agencyId: Scalars['ID']['input'];
  allocatedAmount?: InputMaybe<Scalars['Int']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  enquiries?: InputMaybe<Array<InputMaybe<PropertyEnquiryEnquiriesAgency>>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  householdIncome?: InputMaybe<Scalars['String']['input']>;
  ipInfo?: InputMaybe<IpInfoInput>;
  isGetBroker?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  propertyId: Scalars['ID']['input'];
  referrer?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePropertyEnquiryInput = {
  agentId: Scalars['ID']['input'];
  allocatedAmount?: InputMaybe<Scalars['Int']['input']>;
  briefUuids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  contactNumberCountryCode?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  enquiries?: InputMaybe<Array<InputMaybe<PropertyEnquiryEnquiries>>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  householdIncome?: InputMaybe<Scalars['String']['input']>;
  ipInfo?: InputMaybe<IpInfoInput>;
  isCreateHomeownerAccount?: InputMaybe<Scalars['Boolean']['input']>;
  isGetBroker?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  propertyId: Scalars['ID']['input'];
  referrer?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePropertyInput = {
  address: Scalars['String']['input'];
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agentIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  category?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  estimatedOnMarketDate?: InputMaybe<Scalars['Date']['input']>;
  externalLink1?: InputMaybe<Scalars['String']['input']>;
  externalLink2?: InputMaybe<Scalars['String']['input']>;
  externalLink3?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<PropertyFeatures>;
  headline?: InputMaybe<Scalars['String']['input']>;
  isFromListingUploader?: InputMaybe<Scalars['Boolean']['input']>;
  isPrePortal?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  isShowAddress?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPrice?: InputMaybe<Scalars['Boolean']['input']>;
  isShowRentPriceMonthly?: InputMaybe<Scalars['Boolean']['input']>;
  isShowRentPriceWeekly?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSoldPrice?: InputMaybe<Scalars['Boolean']['input']>;
  isUnderOffer?: InputMaybe<Scalars['Boolean']['input']>;
  landArea?: InputMaybe<Scalars['Int']['input']>;
  landAreaUnit?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  objects?: InputMaybe<PropertyObjects>;
  ofiTimes?: InputMaybe<Array<InputMaybe<OfiTimes>>>;
  postalCode?: InputMaybe<Scalars['Int']['input']>;
  prePortalSource?: InputMaybe<Scalars['String']['input']>;
  priceView?: InputMaybe<Scalars['String']['input']>;
  reaId?: InputMaybe<Scalars['String']['input']>;
  rentBond?: InputMaybe<Scalars['Float']['input']>;
  rentDateAvailable?: InputMaybe<Scalars['Date']['input']>;
  rentPriceMonthly?: InputMaybe<Scalars['Float']['input']>;
  rentPriceWeekly?: InputMaybe<Scalars['Float']['input']>;
  sellingPrice?: InputMaybe<Scalars['Float']['input']>;
  soldDate?: InputMaybe<Scalars['Date']['input']>;
  soldPrice?: InputMaybe<Scalars['Float']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  streetNumber?: InputMaybe<Scalars['String']['input']>;
  subNumber?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  videoLink?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePropertyInspectionInput = {
  consumerId: Scalars['ID']['input'];
  isPublish?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  propertyId: Scalars['ID']['input'];
  propertyInspectionObjects?: InputMaybe<Array<InputMaybe<PropertyInspectionObjects>>>;
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type CreatePropertyLiveStreamInput = {
  agentId: Scalars['ID']['input'];
  dateScheduled: Scalars['Date']['input'];
  dateScheduledTimezone: Scalars['Timezone']['input'];
  propertyId: Scalars['ID']['input'];
};

export type CreatePropertyObjectInput = {
  objectKey?: InputMaybe<Scalars['String']['input']>;
  propertyId: Scalars['ID']['input'];
  s3Bucket: Scalars['String']['input'];
  s3Key: Scalars['String']['input'];
  type: PropertyObjectType;
};

export type CreatePropertyShowInput = {
  articleLink?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  propertyIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  propertyShowId?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['Date']['input']>;
  scheduledDate?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateRmaAgentInput = {
  agencyId?: InputMaybe<Scalars['String']['input']>;
  agentId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  integrationId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rmaAgentId?: InputMaybe<Scalars['String']['input']>;
  rmaAgentReviewUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReviewRequestInput = {
  agentId: Scalars['ID']['input'];
  agentReviewRequestVerifyId: Scalars['ID']['input'];
  buyerEmail?: InputMaybe<Scalars['String']['input']>;
  buyerName?: InputMaybe<Scalars['String']['input']>;
  propertyId: Scalars['ID']['input'];
  vendorEmail?: InputMaybe<Scalars['String']['input']>;
  vendorName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRmaAgentIntegrationInput = {
  agentId: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  rmaAgentId: Scalars['String']['input'];
  rmaAgentReviewUrl: Scalars['String']['input'];
};

export type CreateS3ObjectFromUrlInput = {
  pathPrefix?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type CreateSitemapInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sitemap?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSuburbToExistingChargeInput = {
  chargeId?: InputMaybe<Scalars['ID']['input']>;
  remainingDirectory?: InputMaybe<Scalars['Int']['input']>;
  suburbIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type CreateSuburbToExistingSubscriptionInput = {
  agentSubscriptionId?: InputMaybe<Scalars['ID']['input']>;
  remainingDirectory?: InputMaybe<Scalars['Int']['input']>;
  suburbIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type CreateTalentFormInput = {
  additionalTagsAccount?: InputMaybe<Scalars['String']['input']>;
  backupContact?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  companyWebsite?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  facebook?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  instagram?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  linkedin?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  pinterest?: InputMaybe<Scalars['String']['input']>;
  professionalPhotoKey?: InputMaybe<Scalars['Upload']['input']>;
  signatureKey?: InputMaybe<Scalars['String']['input']>;
  skypeName?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTopicMessageInput = {
  checkIn?: InputMaybe<Scalars['String']['input']>;
  consumerId?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaHost?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaUrl?: InputMaybe<Scalars['String']['input']>;
  topicId: Scalars['ID']['input'];
};

export type CreateUpdateAgentFromHomeownerSignUpInput = {
  buyerInviteId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  financialGoal?: InputMaybe<HomeownerFinancialStrategyType>;
  hasDigitalStrategy?: InputMaybe<Scalars['Boolean']['input']>;
  helpWith?: InputMaybe<Array<InputMaybe<HomeownerHelpWith>>>;
  hoDownloadAppSource?: InputMaybe<HomeOwnerAppDownloadSource>;
  hoHasApprovedFinance?: InputMaybe<Scalars['Boolean']['input']>;
  isPutContactWithMortgageBroker?: InputMaybe<Scalars['Boolean']['input']>;
  isTestAgency?: InputMaybe<Scalars['Boolean']['input']>;
  locationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mobileNumber: Scalars['String']['input'];
  mobileNumberCountryCode: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  referralCode?: InputMaybe<Scalars['String']['input']>;
  riskTolerance?: InputMaybe<RiskTolerance>;
};

export type CreateUpgradeAgencyReachSubscriptionInput = {
  agencyId: Scalars['ID']['input'];
  endDate: Scalars['Date']['input'];
  package: Scalars['String']['input'];
  startDate: Scalars['Date']['input'];
  status: Scalars['String']['input'];
};

export type CreateUpgradeFbPostInput = {
  agencyId: Scalars['ID']['input'];
  agentId?: InputMaybe<Scalars['ID']['input']>;
  currency: Scalars['String']['input'];
  email: Scalars['String']['input'];
  endDate: Scalars['Date']['input'];
  key?: InputMaybe<CreateAgentPaymentType>;
  nameOnCard: Scalars['String']['input'];
  package: Scalars['String']['input'];
  postId?: InputMaybe<Scalars['ID']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  pricingAmount?: InputMaybe<Scalars['Int']['input']>;
  propertyId: Scalars['ID']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  startDate: Scalars['Date']['input'];
  stripeTokenId: Scalars['ID']['input'];
  subscriptions?: InputMaybe<Array<InputMaybe<UpgradeSubscription>>>;
  suburbIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title: Scalars['String']['input'];
};

export type CreateVendorPromotionGroupInput = {
  creativeSpec: Scalars['JSON']['input'];
  currency: Scalars['String']['input'];
  email: Scalars['String']['input'];
  endDate: Scalars['Date']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  isDailyReport?: InputMaybe<Scalars['Boolean']['input']>;
  isPackagePrice?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  package: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  propertyId: Scalars['String']['input'];
  reportEmail?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['Date']['input'];
  stripeToken?: InputMaybe<Scalars['String']['input']>;
  targetingSpec: Scalars['JSON']['input'];
  title: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
  userType?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVendorPromotionInput = {
  creativeSpec: Scalars['JSON']['input'];
  currency: Scalars['String']['input'];
  email: Scalars['String']['input'];
  endDate: Scalars['Date']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  isDailyReport?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  package: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  propertyId: Scalars['String']['input'];
  reportEmail?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['Date']['input'];
  stripeToken?: InputMaybe<Scalars['String']['input']>;
  targetingSpec: Scalars['JSON']['input'];
  title: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
  userType?: InputMaybe<Scalars['String']['input']>;
};

export type Crm = {
  __typename?: 'Crm';
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  initials?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Array<Maybe<CrmUser>>>;
};

export type CrmEdge = {
  __typename?: 'CrmEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Crm>;
};

export type CrmIntegration = {
  crmId: Scalars['ID']['input'];
  integrationCode?: InputMaybe<Scalars['String']['input']>;
};

export type CrmUser = {
  __typename?: 'CrmUser';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isPrePortal?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type CrmsConnection = {
  __typename?: 'CrmsConnection';
  edges?: Maybe<Array<Maybe<CrmEdge>>>;
  nodes?: Maybe<Array<Maybe<Crm>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type CrmsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subscription?: InputMaybe<Scalars['String']['input']>;
};

export type Customer = {
  __typename?: 'Customer';
  facebookPageId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  market: Scalars['String']['output'];
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  userKey: Scalars['String']['output'];
};

export type DailyCountFilter = {
  endDate: Scalars['Date']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeOffMarket?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['Date']['input'];
};

export type DataSeries = {
  __typename?: 'DataSeries';
  dimensions?: Maybe<Array<Maybe<Dimensions>>>;
  metric?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Array<Maybe<Values>>>;
};

export type DateCountMap = {
  __typename?: 'DateCountMap';
  count?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
};

export type DatePeriod = {
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
};

export type DateRangeInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DateValueCountMap = {
  __typename?: 'DateValueCountMap';
  count?: Maybe<Scalars['Float']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
};

export type DeletePlatformAgentSuburbInput = {
  id: Scalars['ID']['input'];
  stripeSubscriptionId?: InputMaybe<Scalars['String']['input']>;
};

export type Developer = {
  __typename?: 'Developer';
  about?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  billingCards?: Maybe<DeveloperBillingCards>;
  brandColor?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  enquiriesConnection?: Maybe<DeveloperProjectEnquiriesConnection>;
  enquiryEmail?: Maybe<Scalars['String']['output']>;
  facebookUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  instagramUrl?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  miniLogoUrl?: Maybe<Scalars['String']['output']>;
  organizationLogoUrl?: Maybe<Scalars['String']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  projectsConnection?: Maybe<DeveloperProjectsConnection>;
  slug?: Maybe<Scalars['String']['output']>;
  slugUrl?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<DeveloperStatistics>;
  tempPassword?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  uuid: Scalars['ID']['output'];
  verifiedDate?: Maybe<Scalars['Date']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type DeveloperEnquiriesConnectionArgs = {
  options?: InputMaybe<DeveloperProjectEnquiriesConnectionOptions>;
};

export type DeveloperProjectsConnectionArgs = {
  options?: InputMaybe<DeveloperProjectsConnectionOptions>;
};

export type DeveloperBillingCards = {
  __typename?: 'DeveloperBillingCards';
  cardList?: Maybe<StripeCustomerSources>;
  defaultCard?: Maybe<Scalars['String']['output']>;
};

export type DeveloperForgotPassword = {
  __typename?: 'DeveloperForgotPassword';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isValid?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type DeveloperProject = {
  __typename?: 'DeveloperProject';
  aboutSuburbDescription?: Maybe<Scalars['String']['output']>;
  aboutSuburbImageUrl?: Maybe<Scalars['String']['output']>;
  activeSubscription?: Maybe<DeveloperProjectSubscription>;
  builderName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  developer?: Maybe<Developer>;
  endDate?: Maybe<Scalars['Date']['output']>;
  enquiriesConnection?: Maybe<DeveloperProjectEnquiriesConnection>;
  floors?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inspectionText?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  location?: Maybe<Location>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  mainObject?: Maybe<DeveloperProjectObject>;
  name?: Maybe<Scalars['String']['output']>;
  objects?: Maybe<Array<Maybe<DeveloperProjectObject>>>;
  percentCompleted?: Maybe<Scalars['Float']['output']>;
  postalCode?: Maybe<Scalars['Int']['output']>;
  priceText?: Maybe<Scalars['String']['output']>;
  propertiesConnection?: Maybe<PropertiesConnection>;
  slug?: Maybe<Scalars['String']['output']>;
  slugUrl?: Maybe<Scalars['String']['output']>;
  socialPostImageUrl?: Maybe<Scalars['String']['output']>;
  stage?: Maybe<DeveloperProjectStage>;
  startDate?: Maybe<Scalars['Date']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<DeveloperProjectStatistics>;
  status?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  streetNumber?: Maybe<Scalars['String']['output']>;
  subNumber?: Maybe<Scalars['String']['output']>;
  subscriptions?: Maybe<Array<Maybe<DeveloperProjectSubscription>>>;
  suburb?: Maybe<Scalars['String']['output']>;
  totalUnits?: Maybe<Scalars['Int']['output']>;
  unitType?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['ID']['output'];
  video?: Maybe<DeveloperProjectVideo>;
};

export type DeveloperProjectEnquiriesConnectionArgs = {
  options?: InputMaybe<DeveloperProjectEnquiriesConnectionOptions>;
};

export type DeveloperProjectObjectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<DeveloperProjectObjectType>;
};

export type DeveloperProjectPropertiesConnectionArgs = {
  options?: InputMaybe<DeveloperProjectPropertiesConnectionOptions>;
};

export type DeveloperProjectEdge = {
  __typename?: 'DeveloperProjectEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<DeveloperProject>;
};

export type DeveloperProjectEnquiriesConnection = {
  __typename?: 'DeveloperProjectEnquiriesConnection';
  edges?: Maybe<Array<Maybe<DeveloperProjectEnquiryEdge>>>;
  nodes?: Maybe<Array<Maybe<DeveloperProjectEnquiry>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type DeveloperProjectEnquiriesConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdDateRange?: InputMaybe<DateRangeInput>;
  developerProjectId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DeveloperProjectEnquiry = {
  __typename?: 'DeveloperProjectEnquiry';
  contactNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  developer?: Maybe<Developer>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  pageUrl?: Maybe<Scalars['String']['output']>;
  project?: Maybe<DeveloperProject>;
  referrer?: Maybe<Scalars['String']['output']>;
  source?: Maybe<DeveloperProjectEnquirySource>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  uuid: Scalars['ID']['output'];
};

export type DeveloperProjectEnquiryEdge = {
  __typename?: 'DeveloperProjectEnquiryEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<DeveloperProjectEnquiry>;
};

export enum DeveloperProjectEnquirySource {
  Developer = 'DEVELOPER',
  Project = 'PROJECT',
}

export type DeveloperProjectObject = {
  __typename?: 'DeveloperProjectObject';
  id: Scalars['ID']['output'];
  isMain?: Maybe<Scalars['Boolean']['output']>;
  s3Key?: Maybe<Scalars['String']['output']>;
  type?: Maybe<DeveloperProjectObjectType>;
  url?: Maybe<Scalars['String']['output']>;
};

export enum DeveloperProjectObjectType {
  FloorPlan = 'FLOOR_PLAN',
  Image = 'IMAGE',
  Video = 'VIDEO',
}

export enum DeveloperProjectPackage {
  Free = 'FREE',
  Level_1 = 'LEVEL_1',
  Level_2 = 'LEVEL_2',
  Level_3 = 'LEVEL_3',
}

export type DeveloperProjectPropertiesConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdDateRange?: InputMaybe<DateRangeInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DeveloperProjectSearchOptions = {
  bathroom?: InputMaybe<NumberRangeInput>;
  bed?: InputMaybe<NumberRangeInput>;
  floorArea?: InputMaybe<NumberRangeInput>;
  isIncludeSurrounding?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  mapLocation?: InputMaybe<MapLocationFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  parking?: InputMaybe<NumberRangeInput>;
  price?: InputMaybe<NumberRangeInput>;
  sorting?: InputMaybe<DeveloperProjectSearchOptionsSorting>;
  stage?: InputMaybe<Array<DeveloperProjectStage>>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export enum DeveloperProjectSearchOptionsSorting {
  Newest = 'NEWEST',
  Oldest = 'OLDEST',
}

export type DeveloperProjectSearchResult = {
  __typename?: 'DeveloperProjectSearchResult';
  edges?: Maybe<Array<Maybe<DeveloperProjectEdge>>>;
  nodes?: Maybe<Array<Maybe<DeveloperProject>>>;
  pageInfo?: Maybe<SearchResultPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export enum DeveloperProjectStage {
  Completed = 'COMPLETED',
  OffPlan = 'OFF_PLAN',
  /** @deprecated No longer supported */
  Ongoing = 'ONGOING',
  UnderConstruction = 'UNDER_CONSTRUCTION',
}

export type DeveloperProjectStatistics = {
  __typename?: 'DeveloperProjectStatistics';
  audienceByDevice?: Maybe<DeveloperProjectStatisticsAudienceByDevice>;
  dailySearchViews?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyViews?: Maybe<Array<Maybe<DateCountMap>>>;
  developerProjectNumberCall?: Maybe<Array<Maybe<DateCountMap>>>;
  engagements?: Maybe<DeveloperProjectStatisticsEngagements>;
  enquiries?: Maybe<Array<Maybe<DateCountMap>>>;
  id?: Maybe<Scalars['ID']['output']>;
  totalAdBudget?: Maybe<Scalars['Float']['output']>;
  views?: Maybe<DeveloperProjectStatisticsViews>;
};

export type DeveloperProjectStatisticsAudienceByDeviceArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperProjectStatisticsDailySearchViewsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperProjectStatisticsDailyViewsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperProjectStatisticsDeveloperProjectNumberCallArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperProjectStatisticsEngagementsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperProjectStatisticsEnquiriesArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperProjectStatisticsViewsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperProjectStatisticsAudienceByDevice = {
  __typename?: 'DeveloperProjectStatisticsAudienceByDevice';
  desktop?: Maybe<Scalars['Int']['output']>;
  desktopPercent?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  mobile?: Maybe<Scalars['Int']['output']>;
  mobilePercent?: Maybe<Scalars['Float']['output']>;
  tablet?: Maybe<Scalars['Int']['output']>;
  tabletPercent?: Maybe<Scalars['Float']['output']>;
};

export type DeveloperProjectStatisticsEngagements = {
  __typename?: 'DeveloperProjectStatisticsEngagements';
  id: Scalars['ID']['output'];
  projectPageFloorplanViews?: Maybe<Scalars['Int']['output']>;
  projectPageImageViews?: Maybe<Scalars['Int']['output']>;
  projectPageMapViews?: Maybe<Scalars['Int']['output']>;
  projectPageVideoViews?: Maybe<Scalars['Int']['output']>;
  searchPageFloorplanViews?: Maybe<Scalars['Int']['output']>;
  searchPageImageViews?: Maybe<Scalars['Int']['output']>;
  searchPageVideoViews?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type DeveloperProjectStatisticsViews = {
  __typename?: 'DeveloperProjectStatisticsViews';
  id: Scalars['ID']['output'];
  pageViews?: Maybe<Scalars['Int']['output']>;
  searchViews?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type DeveloperProjectSubscription = {
  __typename?: 'DeveloperProjectSubscription';
  couponCode?: Maybe<Scalars['String']['output']>;
  developer?: Maybe<Developer>;
  developerProject?: Maybe<DeveloperProject>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  package?: Maybe<DeveloperProjectPackage>;
  startDate?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['ID']['output'];
};

export type DeveloperProjectVideo = {
  __typename?: 'DeveloperProjectVideo';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};

export type DeveloperProjectsConnection = {
  __typename?: 'DeveloperProjectsConnection';
  edges?: Maybe<Array<Maybe<DeveloperProjectEdge>>>;
  nodes?: Maybe<Array<Maybe<DeveloperProject>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type DeveloperProjectsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  projectStage?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<PropertyStates>;
};

export type DeveloperStatistics = {
  __typename?: 'DeveloperStatistics';
  audienceByDevice?: Maybe<DeveloperStatisticsAudienceByDevice>;
  completedProjectsCount?: Maybe<Scalars['Int']['output']>;
  dailyEngagements?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyEnquiries?: Maybe<Array<Maybe<DateCountMap>>>;
  dailySearchViews?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyViews?: Maybe<Array<Maybe<DateCountMap>>>;
  id?: Maybe<Scalars['ID']['output']>;
  offPlanProjectsCount?: Maybe<Scalars['Int']['output']>;
  totalProjectsCount?: Maybe<Scalars['Int']['output']>;
  underConstructionProjectsCount?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<DeveloperStatisticsViews>;
};

export type DeveloperStatisticsAudienceByDeviceArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperStatisticsDailyEngagementsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperStatisticsDailyEnquiriesArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperStatisticsDailySearchViewsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperStatisticsDailyViewsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperStatisticsViewsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type DeveloperStatisticsAudienceByDevice = {
  __typename?: 'DeveloperStatisticsAudienceByDevice';
  desktop?: Maybe<Scalars['Int']['output']>;
  desktopPercent?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  mobile?: Maybe<Scalars['Int']['output']>;
  mobilePercent?: Maybe<Scalars['Float']['output']>;
  tablet?: Maybe<Scalars['Int']['output']>;
  tabletPercent?: Maybe<Scalars['Float']['output']>;
};

export type DeveloperStatisticsViews = {
  __typename?: 'DeveloperStatisticsViews';
  id: Scalars['ID']['output'];
  pageViews?: Maybe<Scalars['Int']['output']>;
  searchViews?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Dimensions = {
  __typename?: 'Dimensions';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export enum DistanceUnit {
  Kilometer = 'KILOMETER',
  Mile = 'MILE',
}

export type EmailLog = {
  __typename?: 'EmailLog';
  agencyId?: Maybe<Scalars['ID']['output']>;
  agentId?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<EmailLogType>;
};

export enum EmailLogType {
  Agency = 'AGENCY',
  Agent = 'AGENT',
  Consumer = 'CONSUMER',
}

export type Engagements = {
  __typename?: 'Engagements';
  comments?: Maybe<Scalars['Int']['output']>;
  linkClicks?: Maybe<Scalars['Int']['output']>;
  otherClicks?: Maybe<Scalars['Int']['output']>;
  userReactions?: Maybe<Scalars['Int']['output']>;
};

export type EnquireTracker = {
  __typename?: 'EnquireTracker';
  address?: Maybe<Scalars['String']['output']>;
  agent?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  realEstateAgentId?: Maybe<Scalars['Int']['output']>;
  triggeredAs?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type EnquiriesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  showType?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type EnquiryEmail = {
  __typename?: 'EnquiryEmail';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isRentalOnly?: Maybe<Scalars['Boolean']['output']>;
};

export type Event = {
  __typename?: 'Event';
  agency?: Maybe<Agency>;
  agent?: Maybe<Agent>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isEventLikedByConsumer?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  post?: Maybe<ConsumerPost>;
  property?: Maybe<Property>;
  singlePost?: Maybe<ConsumerPost>;
  totalLikes?: Maybe<Scalars['Int']['output']>;
  totalShares?: Maybe<Scalars['Int']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type EventPostArgs = {
  consumerPageId?: InputMaybe<Scalars['ID']['input']>;
};

export type EventSinglePostArgs = {
  singlePostId?: InputMaybe<Scalars['ID']['input']>;
};

export type EventTotalSharesArgs = {
  platform?: InputMaybe<Scalars['String']['input']>;
};

export type EventConsumerLike = {
  __typename?: 'EventConsumerLike';
  eventId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  propertyId?: Maybe<Scalars['String']['output']>;
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Event>;
};

export type EventsConnection = {
  __typename?: 'EventsConnection';
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  nodes?: Maybe<Array<Maybe<Event>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type EventsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ExtendCampaignPromotionInput = {
  currency: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  endDate: Scalars['Date']['input'];
  isPackagePrice?: InputMaybe<Scalars['Boolean']['input']>;
  package: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  promotionId: Scalars['String']['input'];
  propertyId?: InputMaybe<Scalars['String']['input']>;
  reportEmail?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['Date']['input'];
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripeToken?: InputMaybe<Scalars['String']['input']>;
  targetingSpec: Scalars['JSON']['input'];
  title: Scalars['String']['input'];
};

export type FacebookAdAccountStatistics = {
  __typename?: 'FacebookAdAccountStatistics';
  linkClicks?: Maybe<Scalars['Int']['output']>;
  reach?: Maybe<Scalars['Int']['output']>;
};

export type FacebookAdCampaignStatistics = {
  __typename?: 'FacebookAdCampaignStatistics';
  accountName?: Maybe<Scalars['String']['output']>;
  adPlacement?: Maybe<Array<Maybe<FacebookAdPlacementDetails>>>;
  budgetSpent?: Maybe<Scalars['Float']['output']>;
  clicksPerDay?: Maybe<Array<Maybe<ClicksPerDayDetails>>>;
  comment?: Maybe<Scalars['Int']['output']>;
  costPerClick?: Maybe<Scalars['Float']['output']>;
  costPerEngagement?: Maybe<Scalars['Float']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  desktopByPercentage?: Maybe<Scalars['Float']['output']>;
  desktopClicks?: Maybe<Scalars['Int']['output']>;
  engagements?: Maybe<Array<Maybe<FacebookAdEngagement>>>;
  enquiriesCount?: Maybe<Scalars['Int']['output']>;
  femaleByPercentage?: Maybe<Scalars['Float']['output']>;
  genderDetails?: Maybe<Array<Maybe<GenderDetails>>>;
  id?: Maybe<Scalars['ID']['output']>;
  impressionDevice?: Maybe<Array<Maybe<FacebookAdCampaignStatisticsImpressionByDevice>>>;
  linkClicks?: Maybe<Scalars['Int']['output']>;
  locations?: Maybe<Array<Maybe<FacebookAdLocationDetails>>>;
  maleByPercentage?: Maybe<Scalars['Float']['output']>;
  percentageBudgetSpent?: Maybe<Scalars['Float']['output']>;
  phoneByPercentage?: Maybe<Scalars['Float']['output']>;
  phoneClicks?: Maybe<Scalars['Int']['output']>;
  photoView?: Maybe<Scalars['Int']['output']>;
  postEngagement?: Maybe<Scalars['Int']['output']>;
  reach?: Maybe<Scalars['Int']['output']>;
  responsiveAudience?: Maybe<Scalars['String']['output']>;
  share?: Maybe<Scalars['Int']['output']>;
  tabletByPercentage?: Maybe<Scalars['Float']['output']>;
  tabletClicks?: Maybe<Scalars['Int']['output']>;
};

export type FacebookAdCampaignStatisticsImpressionByDevice = {
  __typename?: 'FacebookAdCampaignStatisticsImpressionByDevice';
  clicks?: Maybe<Scalars['Float']['output']>;
  device?: Maybe<Scalars['String']['output']>;
  impressions?: Maybe<Scalars['Int']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

export type FacebookAdEngagement = {
  __typename?: 'FacebookAdEngagement';
  action?: Maybe<Scalars['String']['output']>;
  reach?: Maybe<Scalars['Int']['output']>;
};

export type FacebookAdGeneratePreviewInput = {
  ad_format: Scalars['String']['input'];
  creative: Scalars['JSON']['input'];
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type FacebookAdLocationDetails = {
  __typename?: 'FacebookAdLocationDetails';
  location?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
  reach?: Maybe<Scalars['Int']['output']>;
};

export type FacebookAdPlacementDetails = {
  __typename?: 'FacebookAdPlacementDetails';
  percentage?: Maybe<Scalars['Float']['output']>;
  placement?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type FacebookAdPreview = {
  __typename?: 'FacebookAdPreview';
  data: Array<FacebookAdPreviewResult>;
};

export type FacebookAdPreviewResult = {
  __typename?: 'FacebookAdPreviewResult';
  body: Scalars['String']['output'];
};

export type FacebookLinkPostConfig = {
  __typename?: 'FacebookLinkPostConfig';
  agencyFacebookPage?: Maybe<FacebookLinkPostConfigAgencyFacebookPage>;
  description?: Maybe<Scalars['String']['output']>;
  facebookPage?: Maybe<FacebookPage>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  postFormat?: Maybe<FacebookLinkPostConfigPostFormat>;
  property?: Maybe<Property>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type FacebookLinkPostConfigAgencyFacebookPage = {
  __typename?: 'FacebookLinkPostConfigAgencyFacebookPage';
  id?: Maybe<Scalars['ID']['output']>;
  pageId?: Maybe<Scalars['ID']['output']>;
  pageName?: Maybe<Scalars['String']['output']>;
  pageProfileImage?: Maybe<FacebookProfilePicture>;
};

export type FacebookLinkPostConfigInput = {
  postFormat: FacebookLinkPostConfigPostFormat;
  propertyId: Scalars['ID']['input'];
};

export enum FacebookLinkPostConfigPostFormat {
  AgencyBranded = 'AGENCY_BRANDED',
  AgentAgencyBranded = 'AGENT_AGENCY_BRANDED',
  AgentBranded = 'AGENT_BRANDED',
  Unbranded = 'UNBRANDED',
}

export type FacebookPage = {
  __typename?: 'FacebookPage';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  likes?: Maybe<Scalars['Int']['output']>;
  locationsConnection?: Maybe<LocationsConnection>;
  mainLocation?: Maybe<Location>;
  pageId: Scalars['ID']['output'];
  pageName?: Maybe<Scalars['String']['output']>;
  pageProfileImage?: Maybe<FacebookProfilePicture>;
  statistics?: Maybe<FacebookPageStatistic>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type FacebookPageLocationsConnectionArgs = {
  filter?: InputMaybe<LocationsConnectionFilter>;
};

export type FacebookPagePageProfileImageArgs = {
  options?: InputMaybe<FacebookPageProfilePictureInput>;
};

export type FacebookPageEdge = {
  __typename?: 'FacebookPageEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<FacebookPage>;
};

export type FacebookPageGroup = {
  __typename?: 'FacebookPageGroup';
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  facebookPagesConnection?: Maybe<FacebookPagesConnection>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type FacebookPageGroupFacebookPagesConnectionArgs = {
  filter?: InputMaybe<FacebookPagesConnectionFilter>;
};

export type FacebookPageGroupEdge = {
  __typename?: 'FacebookPageGroupEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<FacebookPageGroup>;
};

export type FacebookPageGroupsConnection = {
  __typename?: 'FacebookPageGroupsConnection';
  edges?: Maybe<Array<Maybe<FacebookPageGroupEdge>>>;
  nodes?: Maybe<Array<Maybe<FacebookPageGroup>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type FacebookPageGroupsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  facebookPageGroupId?: InputMaybe<Scalars['ID']['input']>;
  facebookPagesId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type FacebookPageLike = {
  __typename?: 'FacebookPageLike';
  count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  pageId?: Maybe<Scalars['ID']['output']>;
  totalLikes?: Maybe<Scalars['Float']['output']>;
};

export type FacebookPagePortal = {
  __typename?: 'FacebookPagePortal';
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  pageId?: Maybe<Scalars['String']['output']>;
  pageName?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type FacebookPagePortalEdge = {
  __typename?: 'FacebookPagePortalEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<FacebookPagePortal>;
};

export type FacebookPagePortalsConnection = {
  __typename?: 'FacebookPagePortalsConnection';
  edges?: Maybe<Array<Maybe<FacebookPagePortalEdge>>>;
  nodes?: Maybe<Array<Maybe<FacebookPagePortal>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type FacebookPagePortalsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type FacebookPageProfilePictureInput = {
  type?: InputMaybe<FacebookProfilePictureSourceType>;
};

export type FacebookPageStatistic = {
  __typename?: 'FacebookPageStatistic';
  engagementsPeriod28Days?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  impressionsPeriod28Days?: Maybe<Scalars['Int']['output']>;
};

export type FacebookPageSuggestionFilter = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export type FacebookPagesConnection = {
  __typename?: 'FacebookPagesConnection';
  edges?: Maybe<Array<Maybe<FacebookPageEdge>>>;
  nodes?: Maybe<Array<Maybe<FacebookPage>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type FacebookPagesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  facebookGroupId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  like?: InputMaybe<NumberRangeInput>;
  locationCountries?: InputMaybe<Array<InputMaybe<LocationCountry>>>;
  locationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sorting?: InputMaybe<Scalars['String']['input']>;
};

export type FacebookPagesNearbyConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
  radius: Scalars['Float']['input'];
};

export type FacebookPagesStatistics = {
  __typename?: 'FacebookPagesStatistics';
  /** @deprecated Use `pageCount`. */
  facebookPageCount?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use `likesCount`. */
  fbLikesCount?: Maybe<Scalars['Int']['output']>;
  likesCount?: Maybe<Scalars['Int']['output']>;
  mappedSuburbsCount?: Maybe<Scalars['Int']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
};

export type FacebookPostsPropertyStatistics = {
  __typename?: 'FacebookPostsPropertyStatistics';
  amountSpent?: Maybe<Scalars['Float']['output']>;
  campaignDuration?: Maybe<Scalars['Int']['output']>;
  engagedUsers?: Maybe<Scalars['Int']['output']>;
  engagement?: Maybe<Scalars['Int']['output']>;
  enquiriesCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  reach?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type FacebookProfilePicture = {
  __typename?: 'FacebookProfilePicture';
  height?: Maybe<Scalars['Int']['output']>;
  isSilhouette?: Maybe<Scalars['Boolean']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export enum FacebookProfilePictureSourceType {
  Album = 'album',
  Large = 'large',
  Normal = 'normal',
  Small = 'small',
  Square = 'square',
}

export type FacebookTargeting = {
  __typename?: 'FacebookTargeting';
  age?: Maybe<MinMaxInt>;
  cities?: Maybe<Array<Maybe<FacebookTargetingCity>>>;
  locations?: Maybe<Array<Maybe<FacebookTargetingLocation>>>;
};

export type FacebookTargetingCity = {
  __typename?: 'FacebookTargetingCity';
  country?: Maybe<Scalars['String']['output']>;
  distanceUnit?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  latlng?: Maybe<FacebookTargetingLatLng>;
  name?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['Int']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  regionId?: Maybe<Scalars['Int']['output']>;
};

export type FacebookTargetingLatLng = {
  __typename?: 'FacebookTargetingLatLng';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type FacebookTargetingLocation = {
  __typename?: 'FacebookTargetingLocation';
  address?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  distanceUnit?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  primaryCityId?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['Int']['output']>;
  regionId?: Maybe<Scalars['Int']['output']>;
};

export enum FailedAdType {
  Agency = 'AGENCY',
  Agent = 'AGENT',
}

export enum FeaturedAgentByLocationType {
  Agent = 'AGENT',
  Dual = 'DUAL',
  Pm = 'PM',
}

export type FeaturedAgentResult = {
  __typename?: 'FeaturedAgentResult';
  agent?: Maybe<Agent>;
  location?: Maybe<Location>;
};

export type FeaturedAgentsOptions = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
};

export type FeaturedBrokerResult = {
  __typename?: 'FeaturedBrokerResult';
  broker?: Maybe<Broker>;
  location?: Maybe<Location>;
};

export type FeaturedDeveloperProjectFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturedDeveloperProjectResult = {
  __typename?: 'FeaturedDeveloperProjectResult';
  count?: Maybe<Scalars['Int']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
};

export type FeaturedPropertyFbPostFilterInput = {
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type FeaturedPropertyShowsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  mapLocation?: InputMaybe<MapLocationFilter>;
};

export type FeaturedTier = {
  __typename?: 'FeaturedTier';
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  startDate?: Maybe<Scalars['Date']['output']>;
};

export type FindAgenciesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeOnlyRealAgents?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  suburbCode?: InputMaybe<Scalars['String']['input']>;
};

export type FindAgentSearchSuggestionFilter = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  type: FindAgentSearchSuggestionType;
};

export type FindAgentSearchSuggestionResult = Agency | Agent | Location;

export enum FindAgentSearchSuggestionType {
  AgencyByLocation = 'AGENCY_BY_LOCATION',
  AgencyByName = 'AGENCY_BY_NAME',
  AgentByEmail = 'AGENT_BY_EMAIL',
  AgentByLocation = 'AGENT_BY_LOCATION',
  AgentByMobileNumber = 'AGENT_BY_MOBILE_NUMBER',
  AgentByName = 'AGENT_BY_NAME',
  AgentByNameEmailAndNumber = 'AGENT_BY_NAME_EMAIL_AND_NUMBER',
}

export type FindAgentsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeOnlyRealAgents?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  suburbCode?: InputMaybe<Scalars['String']['input']>;
};

export type FindBrokerSearchSuggestionFilter = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
};

export type FindBrokerSearchSuggestionResult = Broker | Location;

export enum FindBrokerSearchSuggestionType {
  BrokerByLocation = 'BROKER_BY_LOCATION',
  BrokerByName = 'BROKER_BY_NAME',
}

export type FindBuyerAgentsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  areaOfSpecializationLocationType?: InputMaybe<AreaOfSpecializationLocationType>;
  areaOfSpecializations?: InputMaybe<Array<InputMaybe<AreaOfSpecialization>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isIncludeTestAgency?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  packageType?: InputMaybe<Array<InputMaybe<AgentSubscriptionPackage>>>;
  services?: InputMaybe<Array<InputMaybe<AgentService>>>;
  sorting?: InputMaybe<BuyerAgentSorting>;
  states?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type FindHomeownerSuggestedLocationsOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  maxPrice?: InputMaybe<Scalars['Int']['input']>;
  rcsCapitalGrowth?: InputMaybe<Scalars['Int']['input']>;
  rcsCashflow?: InputMaybe<Scalars['Int']['input']>;
  rcsLowerRisk?: InputMaybe<Scalars['Int']['input']>;
  regions?: InputMaybe<Array<Scalars['ID']['input']>>;
  states?: InputMaybe<Array<Scalars['String']['input']>>;
  strategyType: HomeownerFinancialStrategyType;
  yield?: InputMaybe<Scalars['Int']['input']>;
};

export type ForRentCountOptions = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  excludePropertyIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ForSaleCountOptions = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  excludePropertyIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export enum FrequencyType {
  Fortnightly = 'FORTNIGHTLY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
}

export type GenderDetails = {
  __typename?: 'GenderDetails';
  age?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  impressions?: Maybe<Scalars['Int']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

export type GenerateAgenciesCsvReportOptions = {
  crmId?: InputMaybe<Scalars['String']['input']>;
  crmStatus?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  isBap?: InputMaybe<Scalars['Boolean']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  isFromSignUp?: InputMaybe<Scalars['Boolean']['input']>;
  isReip?: InputMaybe<Scalars['Boolean']['input']>;
  isTrial?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  state?: InputMaybe<PropertyStates>;
  subscriptionPlan?: InputMaybe<Scalars['String']['input']>;
};

export type GenerateAgentsCsvReportOptions = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  crmIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  subscription?: InputMaybe<Scalars['String']['input']>;
};

export type GeoLocation = {
  __typename?: 'GeoLocation';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type GoogleAnalytics = {
  __typename?: 'GoogleAnalytics';
  timeSeries?: Maybe<Array<Maybe<DateValueCountMap>>>;
  totalCount?: Maybe<Scalars['Float']['output']>;
};

export type GoogleDriveFileListResult = {
  __typename?: 'GoogleDriveFileListResult';
  id: Scalars['ID']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  thumbnailLink?: Maybe<Scalars['String']['output']>;
  webViewLink?: Maybe<Scalars['String']['output']>;
};

export type GoogleDriveFolder = {
  __typename?: 'GoogleDriveFolder';
  id: Scalars['ID']['output'];
  isEmpty?: Maybe<Scalars['Boolean']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type HeartedPropertiesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<PropertyGroup>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Hero = {
  __typename?: 'Hero';
  articleLink?: Maybe<Scalars['String']['output']>;
  episode?: Maybe<Scalars['Int']['output']>;
  externalLink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isHero?: Maybe<Scalars['Boolean']['output']>;
  publicLink?: Maybe<Scalars['String']['output']>;
  scheduledDate?: Maybe<Scalars['Date']['output']>;
  show?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type HeroPropertiesConnection = {
  __typename?: 'HeroPropertiesConnection';
  nodes?: Maybe<Array<Maybe<Property>>>;
};

export type HomeLoansApplicationInput = {
  address: Scalars['String']['input'];
  downPayment: Scalars['Float']['input'];
  frequency: FrequencyType;
  interestRate: Scalars['Float']['input'];
  loanTerm: Scalars['Int']['input'];
  loanerContactNumber: Scalars['String']['input'];
  loanerEmail: Scalars['String']['input'];
  loanerMessage: Scalars['String']['input'];
  loanerName: Scalars['String']['input'];
  mortgagePayment: Scalars['Float']['input'];
  payPrice: Scalars['Float']['input'];
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type HomeLoansCalculator = {
  __typename?: 'HomeLoansCalculator';
  id: Scalars['ID']['output'];
  loanerContactNumber?: Maybe<Scalars['String']['output']>;
  loanerEmail?: Maybe<Scalars['String']['output']>;
  loanerMessage?: Maybe<Scalars['String']['output']>;
  loanerName?: Maybe<Scalars['String']['output']>;
};

export type HomeLoansCalculatorInput = {
  loanerContactNumber: Scalars['String']['input'];
  loanerEmail: Scalars['String']['input'];
  loanerMessage: Scalars['String']['input'];
  loanerName: Scalars['String']['input'];
};

export enum HomeOwnerAppDownloadSource {
  AppStore = 'APP_STORE',
  PlayStore = 'PLAY_STORE',
  Web = 'WEB',
}

export enum HomeownerFinancialStrategyType {
  CapitalGrowth = 'CAPITAL_GROWTH',
  CashFlow = 'CASH_FLOW',
}

export enum HomeownerHelpWith {
  BuyingExpert = 'BUYING_EXPERT',
  InvestmentStrategy = 'INVESTMENT_STRATEGY',
  SmartAlerts = 'SMART_ALERTS',
}

export enum InAppPurchaseSource {
  RealtyLiveInAppPurchaseAndroid = 'REALTY_LIVE_IN_APP_PURCHASE_ANDROID',
  RealtyLiveInAppPurchaseIos = 'REALTY_LIVE_IN_APP_PURCHASE_IOS',
}

export type InstagramMedia = {
  __typename?: 'InstagramMedia';
  caption?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mediaType: InstagramMediaType;
  mediaUrl: Scalars['String']['output'];
  timestamp: Scalars['Date']['output'];
};

export enum InstagramMediaType {
  CarouselAlbum = 'CAROUSEL_ALBUM',
  Image = 'IMAGE',
  Video = 'VIDEO',
}

export type Integration = {
  __typename?: 'Integration';
  accessToken?: Maybe<Scalars['String']['output']>;
  agency?: Maybe<Agency>;
  agencyId?: Maybe<Scalars['ID']['output']>;
  agent?: Maybe<Agent>;
  agentId?: Maybe<Scalars['ID']['output']>;
  config?: Maybe<IntegrationRmaConfig>;
  fbUserId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAutoPost?: Maybe<Scalars['Boolean']['output']>;
  isAutoUpdate?: Maybe<Scalars['Boolean']['output']>;
  isAutoUpload?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pageId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<IntegrationType>;
};

export type IntegrationRmaConfig = {
  __typename?: 'IntegrationRMAConfig';
  id: Scalars['Int']['output'];
  integrationId: Scalars['Int']['output'];
  rmaAgentId: Scalars['String']['output'];
  rmaAgentReviewUrl: Scalars['String']['output'];
};

export enum IntegrationType {
  AgentRma = 'AGENT_RMA',
  BuyerInstagram = 'BUYER_INSTAGRAM',
  Domain = 'DOMAIN',
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  Rea = 'REA',
}

export type InventorMetrics = {
  __typename?: 'InventorMetrics';
  annualGrowthLast12Months?: Maybe<Scalars['Float']['output']>;
  medianPrice?: Maybe<Scalars['Int']['output']>;
  medianPrice12monthsAgo?: Maybe<Scalars['Int']['output']>;
};

export type Investor = {
  __typename?: 'Investor';
  address?: Maybe<Scalars['String']['output']>;
  agencyName?: Maybe<Scalars['String']['output']>;
  docusignEnvelopeId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAgreedTerms?: Maybe<Scalars['Boolean']['output']>;
  isSophisticated?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type InviteAgencyCrmEmail = {
  email: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InviteAgencyEnquiryEmails = {
  email: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isRentalOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InviteAgencyInput = {
  adminEmail?: InputMaybe<Scalars['String']['input']>;
  adminFirstName?: InputMaybe<Scalars['String']['input']>;
  adminLastName?: InputMaybe<Scalars['String']['input']>;
  adminMobile?: InputMaybe<Scalars['String']['input']>;
  championEmail?: InputMaybe<Scalars['String']['input']>;
  championFirstName?: InputMaybe<Scalars['String']['input']>;
  championLastName?: InputMaybe<Scalars['String']['input']>;
  championMobile?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  crmEmail?: InputMaybe<Scalars['String']['input']>;
  crmEmails?: InputMaybe<Array<InviteAgencyCrmEmail>>;
  crmIntegrations?: InputMaybe<Array<InviteAgencyInputCrmIdCode>>;
  email: Scalars['String']['input'];
  enquiryEmails?: InputMaybe<Array<InviteAgencyEnquiryEmails>>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  firstName: Scalars['String']['input'];
  inviteEmail?: InputMaybe<Scalars['Boolean']['input']>;
  isBap?: InputMaybe<Scalars['Boolean']['input']>;
  isReip?: InputMaybe<Scalars['Boolean']['input']>;
  landlineNumber?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  marketingContactEmail?: InputMaybe<Scalars['String']['input']>;
  marketingContactFirstName?: InputMaybe<Scalars['String']['input']>;
  marketingContactLastName?: InputMaybe<Scalars['String']['input']>;
  marketingContactMobile?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  officeEmail?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['Int']['input']>;
  rentalEnquiryEmail?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type InviteAgencyInputCrmIdCode = {
  crmId?: InputMaybe<Scalars['ID']['input']>;
  integrationCode?: InputMaybe<Scalars['String']['input']>;
};

export type InviteBrokerMemberInput = {
  brokerId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  mobileNumber: Scalars['String']['input'];
  mobileNumberCountryCode: Scalars['Int']['input'];
  stripeCustomerId?: InputMaybe<Scalars['ID']['input']>;
  stripeSubscriptionId?: InputMaybe<Scalars['ID']['input']>;
};

export enum InviteStatus {
  Accepted = 'ACCEPTED',
  Invited = 'INVITED',
}

export type IpInfo = {
  __typename?: 'IpInfo';
  as?: Maybe<Scalars['String']['output']>;
  asname?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  continent?: Maybe<Scalars['String']['output']>;
  continentCode?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  isp?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
  mobile?: Maybe<Scalars['Boolean']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  org?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  regionName?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type IpInfoCitySuggestionsFilter = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export type IpInfoCountrySuggestionsFilter = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export type IpInfoInput = {
  as?: InputMaybe<Scalars['String']['input']>;
  asname?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  continent?: InputMaybe<Scalars['String']['input']>;
  continentCode?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  district?: InputMaybe<Scalars['String']['input']>;
  hosting?: InputMaybe<Scalars['Boolean']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  isp?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lon?: InputMaybe<Scalars['Float']['input']>;
  mobile?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  org?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  regionName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type LatLng = {
  __typename?: 'LatLng';
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type LatLngInput = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type LeadUpdatesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentLeadId: Scalars['ID']['input'];
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkedPropertiesConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group: LinkedPropertiesGroup;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isPropertyPrePortal?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum LinkedPropertiesGroup {
  Enquiries = 'ENQUIRIES',
  Offers = 'OFFERS',
  Shortlist = 'SHORTLIST',
}

export type Links = {
  __typename?: 'Links';
  self?: Maybe<SelfHref>;
};

export type LiveStream = {
  __typename?: 'LiveStream';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  muxLiveStreamId?: Maybe<Scalars['String']['output']>;
  muxPlaybackId?: Maybe<Scalars['String']['output']>;
  muxPlaybackUrl?: Maybe<Scalars['String']['output']>;
  muxRecentAssetPlaybackId?: Maybe<Scalars['String']['output']>;
  rtmpsUrl?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  streamKey?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['ID']['output'];
};

export type Location = {
  __typename?: 'Location';
  agentDirectoryStatus?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  count?: Maybe<Scalars['Int']['output']>;
  countFull?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<LocationCountry>;
  decodedPolyline?: Maybe<Array<Maybe<GeoLocation>>>;
  encodedPolyline?: Maybe<Scalars['String']['output']>;
  facebookPages?: Maybe<Array<Maybe<FacebookPage>>>;
  full?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  info?: Maybe<LocationInfo>;
  isElevateByAgent?: Maybe<Scalars['Boolean']['output']>;
  isFeaturedByAgent?: Maybe<Scalars['Boolean']['output']>;
  isFeaturedByBroker?: Maybe<Scalars['Boolean']['output']>;
  isReserved?: Maybe<Scalars['Boolean']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  postalCode?: Maybe<Scalars['Int']['output']>;
  propertiesConnection?: Maybe<PropertiesConnection>;
  propertyImageUrl?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stateFull?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<LocationStatistics>;
  subLocationsConnection?: Maybe<LocationsConnection>;
  suburb?: Maybe<Scalars['String']['output']>;
  suburbCode?: Maybe<Scalars['String']['output']>;
  type?: Maybe<LocationType>;
};

export type LocationPropertiesConnectionArgs = {
  filter?: InputMaybe<LocationPropertiesConnectionFilter>;
};

export type LocationSubLocationsConnectionArgs = {
  filter?: InputMaybe<LocationsConnectionFilter>;
};

export enum LocationCountry {
  Australia = 'AUSTRALIA',
  India = 'INDIA',
  NewZealand = 'NEW_ZEALAND',
  Singapore = 'SINGAPORE',
  Spain = 'SPAIN',
  Uae = 'UAE',
  UnitedKingdom = 'UNITED_KINGDOM',
  Usa = 'USA',
}

export type LocationEdge = {
  __typename?: 'LocationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Location>;
};

export type LocationFacebookPages = {
  __typename?: 'LocationFacebookPages';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  locationId?: Maybe<Scalars['Int']['output']>;
  pageId?: Maybe<Scalars['String']['output']>;
  pageName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type LocationInfo = {
  __typename?: 'LocationInfo';
  areaSqKm?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  elevation?: Maybe<Scalars['Int']['output']>;
  featuredAgent?: Maybe<Agent>;
  featuredBroker?: Maybe<Broker>;
  id: Scalars['ID']['output'];
  localGovernmentArea?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  locationId?: Maybe<Scalars['Int']['output']>;
  medianIncome?: Maybe<Scalars['Int']['output']>;
  population?: Maybe<Scalars['Int']['output']>;
  propertiesCount?: Maybe<LocationPropertiesCount>;
  recentRent?: Maybe<Property>;
  recentSold?: Maybe<RecentSold>;
  timeZone?: Maybe<Scalars['String']['output']>;
  totalSchools?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type LocationInfoStatistics = {
  __typename?: 'LocationInfoStatistics';
  hortAvgForSalePrices?: Maybe<Scalars['JSON']['output']>;
  hortAvgRentalPrices?: Maybe<Scalars['JSON']['output']>;
  vertAvgForSalePrices?: Maybe<Scalars['JSON']['output']>;
  vertAvgRentalPrices?: Maybe<Scalars['JSON']['output']>;
};

export type LocationPropertiesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludePropertyIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<PropertyGroup>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
};

export type LocationPropertiesCount = {
  __typename?: 'LocationPropertiesCount';
  forRentCount?: Maybe<Scalars['Int']['output']>;
  forSaleCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  offMarketCount?: Maybe<Scalars['Int']['output']>;
  soldCount?: Maybe<Scalars['Int']['output']>;
};

export type LocationSearchSuggestionsFilter = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type LocationStatistics = {
  __typename?: 'LocationStatistics';
  forRentCount?: Maybe<Scalars['Int']['output']>;
  forSaleCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  monthlyAverageForRentPrice?: Maybe<Array<Maybe<MonthPriceMap>>>;
  monthlyAverageForSalePrice?: Maybe<Array<Maybe<MonthPriceMap>>>;
  offMarketCount?: Maybe<Scalars['Int']['output']>;
  propertiesTotalCount?: Maybe<Scalars['Int']['output']>;
  soldCount?: Maybe<Scalars['Int']['output']>;
};

export type LocationStatisticsMonthlyAverageForRentPriceArgs = {
  year: Scalars['Int']['input'];
};

export type LocationStatisticsMonthlyAverageForSalePriceArgs = {
  year: Scalars['Int']['input'];
};

export type LocationSuggestionResult = {
  __typename?: 'LocationSuggestionResult';
  full?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type LocationSuggestionsFilter = {
  country?: InputMaybe<LocationCountry>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Array<InputMaybe<LocationType>>>;
};

export type LocationTag = {
  __typename?: 'LocationTag';
  count?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  locationId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum LocationType {
  Area = 'AREA',
  Region = 'REGION',
  Suburb = 'SUBURB',
}

export type LocationsConnection = {
  __typename?: 'LocationsConnection';
  edges?: Maybe<Array<Maybe<LocationEdge>>>;
  nodes?: Maybe<Array<Maybe<Location>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type LocationsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<LocationCountry>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<LocationType>;
};

export type LocationsNearbyConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasPage?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
  radius: Scalars['Float']['input'];
  type?: InputMaybe<LocationType>;
};

export enum LoginType {
  Mobile = 'MOBILE',
  Username = 'USERNAME',
}

export type MailboxTotalPropertyFbPostStatistics = {
  __typename?: 'MailboxTotalPropertyFbPostStatistics';
  amountSpent?: Maybe<Scalars['Float']['output']>;
  engagedUsers?: Maybe<Scalars['Int']['output']>;
  engagement?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  reach?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type MailgunEvent = {
  __typename?: 'MailgunEvent';
  agency?: Maybe<Agency>;
  agent?: Maybe<Agent>;
  clientDeviceType?: Maybe<Scalars['String']['output']>;
  clientName?: Maybe<Scalars['String']['output']>;
  clientOs?: Maybe<Scalars['String']['output']>;
  clientType?: Maybe<Scalars['String']['output']>;
  clientUserAgent?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  deliveryStatusCode?: Maybe<Scalars['String']['output']>;
  deliveryStatusDescription?: Maybe<Scalars['String']['output']>;
  deliveryStatusMessage?: Maybe<Scalars['String']['output']>;
  eventId?: Maybe<Scalars['ID']['output']>;
  geolocationCity?: Maybe<Scalars['String']['output']>;
  geolocationCountry?: Maybe<Scalars['String']['output']>;
  geolocationRegion?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  logLevel?: Maybe<Scalars['String']['output']>;
  messageAttachments?: Maybe<Scalars['JSON']['output']>;
  messageHeaderFrom?: Maybe<Scalars['String']['output']>;
  messageHeaderId?: Maybe<Scalars['String']['output']>;
  messageHeaderSubject?: Maybe<Scalars['String']['output']>;
  messageHeaderTo?: Maybe<Scalars['String']['output']>;
  messageRecipients?: Maybe<Scalars['JSON']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  recipient?: Maybe<Scalars['String']['output']>;
  recipientDomain?: Maybe<Scalars['String']['output']>;
  recipientId?: Maybe<Scalars['String']['output']>;
  recipientRole?: Maybe<Scalars['String']['output']>;
  severity?: Maybe<Scalars['String']['output']>;
  tag1?: Maybe<Scalars['String']['output']>;
  tag2?: Maybe<Scalars['String']['output']>;
  tag3?: Maybe<Scalars['String']['output']>;
  tag4?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type MailgunEventEdge = {
  __typename?: 'MailgunEventEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Location>;
};

export enum MailgunEventType {
  Accepted = 'ACCEPTED',
  Clicked = 'CLICKED',
  Complained = 'COMPLAINED',
  Delivered = 'DELIVERED',
  Failed = 'FAILED',
  Opened = 'OPENED',
  Rejected = 'REJECTED',
  Unsubscribed = 'UNSUBSCRIBED',
}

export type MailgunEventsConnection = {
  __typename?: 'MailgunEventsConnection';
  edges?: Maybe<Array<Maybe<MailgunEventEdge>>>;
  nodes?: Maybe<Array<Maybe<MailgunEvent>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MailgunEventsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MailgunEventType>;
};

export type MailgunTag = {
  __typename?: 'MailgunTag';
  createdAt?: Maybe<Scalars['Date']['output']>;
  delivered?: Maybe<PercentValue>;
  id: Scalars['ID']['output'];
  processed?: Maybe<Scalars['Int']['output']>;
  uniqueClicks?: Maybe<PercentValue>;
  uniqueOpens?: Maybe<PercentValue>;
};

export type MailgunTagEdge = {
  __typename?: 'MailgunTagEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<MailgunTag>;
};

export type MailgunTagsConnection = {
  __typename?: 'MailgunTagsConnection';
  edges?: Maybe<Array<Maybe<MailgunTagEdge>>>;
  nodes?: Maybe<Array<Maybe<MailgunTag>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type MailgunTagsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type MapLocationFilter = {
  lat: Scalars['Float']['input'];
  limitByRadius?: InputMaybe<Scalars['Boolean']['input']>;
  lng: Scalars['Float']['input'];
  /** in kilometer radius */
  radius?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaUrlsInput = {
  coverPhotoUrl?: InputMaybe<Scalars['String']['input']>;
  realtyCdnVideoUrl?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
  videoUrls?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MinMaxInt = {
  __typename?: 'MinMaxInt';
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
};

export type MonthCountMap = {
  __typename?: 'MonthCountMap';
  count?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['String']['output']>;
};

export type MonthPriceMap = {
  __typename?: 'MonthPriceMap';
  month?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptAgentContactInvite?: Maybe<AgentContact>;
  acceptAgentOffer?: Maybe<AgentOffer>;
  acceptConsumerFriendRequest?: Maybe<Consumer>;
  addAgenciesToGroup?: Maybe<AgencyGroup>;
  addAgentConversationContact?: Maybe<AgentConversation>;
  addAgentLocation?: Maybe<Array<Maybe<Location>>>;
  addDeveloperProjectObject?: Maybe<Array<Maybe<DeveloperProjectObject>>>;
  addFacebookPageToGroup?: Maybe<FacebookPageGroup>;
  addLocationToFacebookPage?: Maybe<FacebookPage>;
  addLocationsToGroup?: Maybe<Array<Maybe<Location>>>;
  addPropertyToCollection?: Maybe<PropertyCollectionResult>;
  addPropertyToConsumerCollection?: Maybe<Scalars['Boolean']['output']>;
  addRecordToGoogleSheet?: Maybe<Scalars['Boolean']['output']>;
  addSuburbToExistingCharge?: Maybe<BrokerCharge>;
  addSuburbToExistingSubscription?: Maybe<AgentDirectorySubscription>;
  addTopicMember?: Maybe<Topic>;
  addTopicMessageReaction?: Maybe<TopicMessage>;
  agencyDevelopersSignUpRequest?: Maybe<Scalars['Boolean']['output']>;
  agencyForgotPassword?: Maybe<Scalars['Boolean']['output']>;
  agencyPreSignUp?: Maybe<Scalars['Boolean']['output']>;
  agentApplyCoupon?: Maybe<Scalars['Boolean']['output']>;
  agentForgotPassword?: Maybe<Scalars['Boolean']['output']>;
  agentInviteColleague?: Maybe<Agent>;
  agentMobileNumberVerify?: Maybe<Scalars['Boolean']['output']>;
  agentUsernameVerify?: Maybe<VerifyAgentWithCode>;
  approve?: Maybe<ConsumerTypeRequest>;
  brokerApplyCoupon?: Maybe<Scalars['Boolean']['output']>;
  brokerForgotPassword?: Maybe<Scalars['Boolean']['output']>;
  brokerInviteHomeownerBuyer?: Maybe<Array<Maybe<BrokerBuyerInvite>>>;
  brokerResetPassword?: Maybe<Scalars['Boolean']['output']>;
  cancelAgentBuyerSubscription?: Maybe<AgentSubscription>;
  cancelConsumerFriendRequest?: Maybe<Consumer>;
  cancelUserFriendRequest?: Maybe<Consumer>;
  changeAgencyCrmPropertiesPublishStatus?: Maybe<AgencyCrm>;
  changeAgencyGroupActiveStatus?: Maybe<AgencyGroup>;
  changeAgentBriefIsActiveStatus?: Maybe<AgentBrief>;
  changeAgentBriefPropertyIsActiveStatus?: Maybe<AgentBriefProperty>;
  changeAgentBuyerSubscription?: Maybe<AgentSubscription>;
  changeAgentInstagramIntegrationIsActiveStatus?: Maybe<Integration>;
  changeAgentOfferIsActiveStatus?: Maybe<AgentOffer>;
  changeAgentPasswordByForgotPasswordCode?: Maybe<Scalars['Boolean']['output']>;
  changeBrokerPassword?: Maybe<Scalars['Boolean']['output']>;
  changePassword?: Maybe<Scalars['Boolean']['output']>;
  changePasswordMobile?: Maybe<Scalars['Boolean']['output']>;
  changePlatformAgentPassword?: Maybe<Scalars['Boolean']['output']>;
  changePropertyLiveStreamPublishStatus?: Maybe<PropertyLiveStream>;
  claimAgentPage?: Maybe<Scalars['Boolean']['output']>;
  consumerFollowAgency?: Maybe<Scalars['Boolean']['output']>;
  consumerFollowAgent?: Maybe<Scalars['Boolean']['output']>;
  consumerFollowConsumer?: Maybe<Consumer>;
  consumerFollowPage?: Maybe<ConsumerPage>;
  consumerFollowProperty?: Maybe<Scalars['Boolean']['output']>;
  consumerFollowSuburb?: Maybe<Scalars['Boolean']['output']>;
  consumerForgotPassword?: Maybe<Scalars['Boolean']['output']>;
  consumerPropertyUnClaim?: Maybe<Scalars['Boolean']['output']>;
  consumerResetPassword?: Maybe<Scalars['Boolean']['output']>;
  consumerSendEmail?: Maybe<Scalars['Boolean']['output']>;
  consumerUnfollowAgency?: Maybe<Scalars['Boolean']['output']>;
  consumerUnfollowAgent?: Maybe<Scalars['Boolean']['output']>;
  consumerUnfollowConsumer?: Maybe<Scalars['Boolean']['output']>;
  consumerUnfollowPage?: Maybe<ConsumerPage>;
  consumerUnfollowProperty?: Maybe<Scalars['Boolean']['output']>;
  consumerUnfollowSuburb?: Maybe<Scalars['Boolean']['output']>;
  contactLead?: Maybe<AgentLead>;
  contributorUploadImage?: Maybe<Scalars['String']['output']>;
  counterAgentOffer?: Maybe<AgentOffer>;
  createAdSalesAgreement?: Maybe<AdSalesAgreement>;
  createAdminToken?: Maybe<AccessToken>;
  createAdminTokenUsingGoogleLogin?: Maybe<AccessToken>;
  createAdminUser?: Maybe<AdminUser>;
  createAgency?: Maybe<Agency>;
  createAgencyCommercialSubscription?: Maybe<Scalars['Boolean']['output']>;
  createAgencyContactTracker?: Maybe<AgencyContactTracker>;
  createAgencyCrm?: Maybe<AgencyCrm>;
  createAgencyDevelopersSubscription?: Maybe<Agency>;
  createAgencyEnquiry?: Maybe<PropertyEnquiry>;
  createAgencyFbSubscription?: Maybe<Scalars['Boolean']['output']>;
  createAgencyFromSubscription?: Maybe<Agency>;
  createAgencyGroup?: Maybe<AgencyGroup>;
  createAgencyGroupMember?: Maybe<AgencyGroupMember>;
  createAgencyGroupToken?: Maybe<AccessToken>;
  createAgencyInstagramIntegration?: Maybe<Integration>;
  createAgencyMailboxSubscription?: Maybe<AgencySubscription>;
  createAgencyMarketingPdf?: Maybe<Scalars['String']['output']>;
  createAgencySitemap?: Maybe<AgencySitemap>;
  createAgencyToken?: Maybe<AccessToken>;
  createAgencyTokenById?: Maybe<AccessToken>;
  createAgencyTokenFromAdmin?: Maybe<AccessToken>;
  createAgent?: Maybe<Agent>;
  createAgentAccelerateOneDollarPromo?: Maybe<Scalars['Boolean']['output']>;
  createAgentAccessTokenFromLoginOTP?: Maybe<AccessToken>;
  createAgentBillingCard?: Maybe<Scalars['Boolean']['output']>;
  createAgentBrief?: Maybe<AgentBrief>;
  createAgentBriefFromClient?: Maybe<AgentBrief>;
  createAgentBriefFromHomeownerSignUp?: Maybe<AgentBrief>;
  createAgentBriefFromLink?: Maybe<AgentBrief>;
  createAgentBuyerAddOn?: Maybe<AgentSubscription>;
  createAgentBuyerHomeownerRealtySubscription?: Maybe<AgentSubscription>;
  createAgentBuyerTransaction?: Maybe<AgentBuyerTransaction>;
  createAgentChatTopic?: Maybe<Topic>;
  createAgentContact?: Maybe<AgentContact>;
  createAgentContactTracker?: Maybe<AgentContactTracker>;
  createAgentContent?: Maybe<AgentContent>;
  createAgentConversation?: Maybe<AgentConversation>;
  createAgentDevice?: Maybe<AgentDevice>;
  createAgentEnquiry?: Maybe<PropertyEnquiry>;
  createAgentFbIntegration?: Maybe<Integration>;
  createAgentForgotPassword?: Maybe<Agent>;
  createAgentFoundationPayment?: Maybe<Scalars['Boolean']['output']>;
  createAgentFromListingUploader?: Maybe<Agent>;
  createAgentFromPrePortalSignUp?: Maybe<Agent>;
  createAgentFromSignUp?: Maybe<Agent>;
  createAgentFromSignUpMobile?: Maybe<Agent>;
  createAgentInstagramIntegration?: Maybe<Integration>;
  createAgentLead?: Maybe<Scalars['Boolean']['output']>;
  createAgentLeadMessage?: Maybe<AgentLeadMessage>;
  createAgentMailboxSubscription?: Maybe<AgentSubscription>;
  createAgentMarketingPdf?: Maybe<Scalars['String']['output']>;
  createAgentNewPassword?: Maybe<Scalars['Boolean']['output']>;
  createAgentOffer?: Maybe<AgentOffer>;
  createAgentPayment?: Maybe<Scalars['Boolean']['output']>;
  createAgentPaymentFromSignUp?: Maybe<Scalars['Boolean']['output']>;
  createAgentPlatformSubscription?: Maybe<Scalars['Boolean']['output']>;
  createAgentPlusSubscription?: Maybe<AgentSubscription>;
  createAgentPropertyInspection: AgentPropertyInspection;
  createAgentPropertyInspectionVideo?: Maybe<AgentPropertyInspectionVideo>;
  createAgentPropertyInspectionVideoComment?: Maybe<AgentPropertyInspectionVideoComment>;
  createAgentPropertyRequest?: Maybe<AgentPropertyRequest>;
  createAgentPropertyShortlist?: Maybe<Array<Maybe<AgentPropertyShortlist>>>;
  createAgentRegion?: Maybe<Array<Maybe<Location>>>;
  createAgentReview?: Maybe<AgentReview>;
  createAgentRmaIntegration?: Maybe<Integration>;
  createAgentState?: Maybe<AgentLocation>;
  createAgentToken?: Maybe<AccessToken>;
  createAgentTokenFromAdmin?: Maybe<AccessToken>;
  createAppVersion?: Maybe<AppVersion>;
  createBillingCard?: Maybe<Scalars['Boolean']['output']>;
  createBroker?: Maybe<Broker>;
  createBrokerAccessTokenFromLoginOTP?: Maybe<AccessToken>;
  createBrokerAward?: Maybe<BrokerAward>;
  createBrokerCertificate?: Maybe<BrokerCertification>;
  createBrokerCompany?: Maybe<BrokerCompany>;
  createBrokerContactTracker?: Maybe<Scalars['Boolean']['output']>;
  createBrokerEnquiry?: Maybe<BrokerEnquiry>;
  createBrokerPayment?: Maybe<Scalars['Boolean']['output']>;
  createBrokerSignUp?: Maybe<Broker>;
  createBrokerToken?: Maybe<AccessToken>;
  createBrokerTokenFromAdmin?: Maybe<AccessToken>;
  createBuyerAgentEnquiry?: Maybe<PropertyEnquiry>;
  createChannel?: Maybe<Channel>;
  createConsumer?: Maybe<Consumer>;
  createConsumerAbout?: Maybe<Consumer>;
  createConsumerAlert?: Maybe<ConsumerAlert>;
  createConsumerAlertWithConsumerSignup?: Maybe<ConsumerAlert>;
  createConsumerAlertWithExistingConsumer?: Maybe<ConsumerAlert>;
  createConsumerAppleSignUpInput?: Maybe<Consumer>;
  createConsumerChangeTypeRequest?: Maybe<Consumer>;
  createConsumerCollection?: Maybe<ConsumerCollection>;
  createConsumerDeviceToken?: Maybe<ConsumerDeviceToken>;
  createConsumerOffMarketSubWithConsumerSignup?: Maybe<Scalars['Boolean']['output']>;
  createConsumerOffMarketSubWithExistingConsumer?: Maybe<Scalars['Boolean']['output']>;
  createConsumerOffMarketSubscription?: Maybe<ConsumerSubscription>;
  createConsumerPage?: Maybe<ConsumerPage>;
  createConsumerPagePost?: Maybe<Event>;
  createConsumerPost?: Maybe<Event>;
  createConsumerPropertyClaim?: Maybe<Scalars['Boolean']['output']>;
  createConsumerToken?: Maybe<AccessToken>;
  createConsumerTokenForExistingAccountUsingFB?: Maybe<AccessToken>;
  createConsumerTokenForExistingAccountUsingGoogle?: Maybe<AccessToken>;
  createConsumerTokenFromAdmin?: Maybe<AccessToken>;
  createConsumerTokenUsingAppleId?: Maybe<AccessToken>;
  createConsumerTokenUsingFbLogin?: Maybe<AccessToken>;
  createConsumerTokenUsingGoogleLogin?: Maybe<AccessToken>;
  createConsumerTokenUsingSocialLogin?: Maybe<AccessToken>;
  createCrm?: Maybe<Crm>;
  createCustomAgentPropertyShortlist?: Maybe<Array<Maybe<AgentPropertyShortlist>>>;
  createDeveloperFromSignUp?: Maybe<Developer>;
  createDeveloperProject?: Maybe<DeveloperProject>;
  createDeveloperProjectEnquiry?: Maybe<DeveloperProjectEnquiry>;
  createDeveloperProjectProperty?: Maybe<Property>;
  createDeveloperToken?: Maybe<AccessToken>;
  createDomainIntegration?: Maybe<Integration>;
  createDomainOffMarket?: Maybe<Property>;
  createExistingPostPromotion: PropertyPromotion;
  createFacebookGroupPage?: Maybe<FacebookPageGroup>;
  createFacebookPage?: Maybe<FacebookPage>;
  createFacebookPagePortal?: Maybe<FacebookPagePortal>;
  createFbIntegration?: Maybe<Integration>;
  createFoundationPayment?: Maybe<Scalars['Boolean']['output']>;
  createHero?: Maybe<Hero>;
  createHomeownerAgentContacts?: Maybe<Array<Maybe<AgentContact>>>;
  createHomeownerAgentSubscriptionPackage?: Maybe<Array<Maybe<AgentSubscription>>>;
  createInvestor?: Maybe<Investor>;
  createLocation?: Maybe<Location>;
  createOrUpdateAgentFromHomeownerSignup?: Maybe<Agent>;
  createPageSession?: Maybe<PageSession>;
  createPlatformAgentAppraisalEnquiry?: Maybe<PlatformAgentEnquiry>;
  createPlatformAgentBillingCard?: Maybe<Scalars['Boolean']['output']>;
  createPlatformAgentBySheetData?: Maybe<PlatformAgent>;
  createPlatformAgentContent?: Maybe<PlatformAgentContent>;
  createPlatformAgentEnquiry?: Maybe<PlatformAgentEnquiry>;
  createPlatformAgentFacebook?: Maybe<PlatformAgentFacebook>;
  createPlatformAgentMainSuburb?: Maybe<PlatformAgentSuburb>;
  createPlatformAgentPropensityAppraisalEnquiry?: Maybe<PlatformAgentEnquiry>;
  createPlatformAgentSuburb?: Maybe<PlatformAgentSuburb>;
  createPlatformAgentToken?: Maybe<AccessToken>;
  createPlatformAgentTokenFromAdmin?: Maybe<AccessToken>;
  createPlatformAgentTokenFromOtp?: Maybe<AccessToken>;
  createPrePortalPropertyEnquiry?: Maybe<Array<Maybe<PropertyEnquiry>>>;
  createPromotion: PropertyPromotion;
  createProperty?: Maybe<Property>;
  createPropertyAppraisalEnquiry?: Maybe<PropertyAppraisalEnquiry>;
  createPropertyCoupon?: Maybe<PropertyCoupon>;
  createPropertyEnquiry?: Maybe<PropertyEnquiry>;
  createPropertyEnquiryAgency?: Maybe<PropertyEnquiry>;
  createPropertyInspection?: Maybe<PropertyInspection>;
  createPropertyLiveStream?: Maybe<PropertyLiveStream>;
  createPropertyObject?: Maybe<PropertyObject>;
  createPropertyShow?: Maybe<PropertyShow>;
  createPropertyToConsumerCollection?: Maybe<ConsumerCollection>;
  createReviewRequest?: Maybe<Array<Maybe<AgentReviewRequest>>>;
  createS3ObjectFromUrl?: Maybe<S3Object>;
  createSitemap?: Maybe<Sitemap>;
  createSuburbSuggestionEmail?: Maybe<Scalars['Boolean']['output']>;
  createTalentForm?: Maybe<TalentForm>;
  createTopic?: Maybe<Topic>;
  createTopicMessage?: Maybe<TopicMessage>;
  createUpgradeAgencyReachSubscription?: Maybe<AgencySubscription>;
  createUpgradeFbPost?: Maybe<Scalars['Boolean']['output']>;
  createVendorPromotion: PropertyPromotion;
  createVendorPromotionGroup: PropertyPromotionGroup;
  decline?: Maybe<ConsumerTypeRequest>;
  deleteAdminUser?: Maybe<Scalars['Boolean']['output']>;
  deleteAgency?: Maybe<Scalars['Boolean']['output']>;
  deleteAgencyCrm?: Maybe<Scalars['Boolean']['output']>;
  deleteAgencyGroup?: Maybe<Scalars['Boolean']['output']>;
  deleteAgencyGroupMember?: Maybe<Scalars['Boolean']['output']>;
  deleteAgentBillingCard?: Maybe<Scalars['Boolean']['output']>;
  deleteAgentContact?: Maybe<Scalars['Boolean']['output']>;
  deleteAgentContacts?: Maybe<Scalars['Boolean']['output']>;
  deleteAgentPropertyInspection: Scalars['Boolean']['output'];
  deleteAgentPropertyInspectionVideo?: Maybe<Scalars['Boolean']['output']>;
  deleteAgentPropertyInspectionVideoComment?: Maybe<Scalars['Boolean']['output']>;
  deleteAgentPropertyShortlist?: Maybe<Array<Maybe<AgentPropertyShortlist>>>;
  deleteBillingCard?: Maybe<Scalars['Boolean']['output']>;
  deleteBrokerConfig?: Maybe<Broker>;
  deleteBrokerEnquiry?: Maybe<Scalars['Boolean']['output']>;
  deleteChannel?: Maybe<Scalars['Boolean']['output']>;
  deleteConsumerAlert?: Maybe<Scalars['Boolean']['output']>;
  deleteConsumerCollection?: Maybe<Array<Maybe<Property>>>;
  deleteDeveloperProjectEnquiry?: Maybe<Scalars['Boolean']['output']>;
  deleteFacebookGroupPage?: Maybe<Scalars['Boolean']['output']>;
  deleteFacebookPage?: Maybe<Scalars['Boolean']['output']>;
  deleteFacebookPagePortal?: Maybe<Scalars['Boolean']['output']>;
  deleteHero?: Maybe<Scalars['Boolean']['output']>;
  deleteLocation?: Maybe<Scalars['Boolean']['output']>;
  deleteMessage?: Maybe<Scalars['Boolean']['output']>;
  deleteMessageReaction?: Maybe<Scalars['Boolean']['output']>;
  deletePlatformAgent?: Maybe<Scalars['Boolean']['output']>;
  deletePlatformAgentBillingCard?: Maybe<Scalars['Boolean']['output']>;
  deletePlatformAgentSuburb?: Maybe<PlatformAgentSuburb>;
  deletePostEvent?: Maybe<Scalars['Boolean']['output']>;
  deletePostPropertyFromFb?: Maybe<Scalars['Boolean']['output']>;
  deleteProperty?: Maybe<Scalars['Boolean']['output']>;
  deletePropertyAudio?: Maybe<Scalars['Boolean']['output']>;
  deletePropertyDocument?: Maybe<Scalars['Boolean']['output']>;
  deletePropertyEnquiry?: Maybe<Scalars['Boolean']['output']>;
  deletePropertyObject?: Maybe<Scalars['Boolean']['output']>;
  deletePropertyShow?: Maybe<Scalars['Boolean']['output']>;
  deleteTopic?: Maybe<Scalars['Boolean']['output']>;
  deleteTopicMember?: Maybe<Scalars['Boolean']['output']>;
  deletingByFiler?: Maybe<Scalars['Boolean']['output']>;
  disableAgentFbIntegrationStatus?: Maybe<AgentFacebookPage>;
  disableIntegrationStatus?: Maybe<Integration>;
  disableScraped?: Maybe<Scalars['Boolean']['output']>;
  enableAgentFbIntegrationStatus?: Maybe<AgentFacebookPage>;
  enableIntegrationStatus?: Maybe<Integration>;
  enablingAlgoliaGeosearch?: Maybe<Scalars['Boolean']['output']>;
  exportingAlgoliaIndex?: Maybe<Scalars['Boolean']['output']>;
  extendCampaignPromotion: PropertyPromotion;
  followConsumer?: Maybe<Scalars['Boolean']['output']>;
  generateAgenciesCsvReport?: Maybe<Scalars['String']['output']>;
  generateAgentsCsvReport?: Maybe<Scalars['String']['output']>;
  heartPropertyToConsumer?: Maybe<Property>;
  hideProperty?: Maybe<Property>;
  initializeRedis?: Maybe<Scalars['Boolean']['output']>;
  invalidateRefreshToken?: Maybe<Scalars['String']['output']>;
  inviteAgency?: Maybe<Agency>;
  inviteBrokerMember?: Maybe<Scalars['Boolean']['output']>;
  inviteConsumer?: Maybe<Scalars['Boolean']['output']>;
  likeEvent?: Maybe<Event>;
  memberRequest?: Maybe<Scalars['Boolean']['output']>;
  migratePropertyImagePropertyToObjects?: Maybe<Scalars['Int']['output']>;
  moveGoogleDriveFileToTrash?: Maybe<Scalars['Boolean']['output']>;
  muteOrUnmuteTopic?: Maybe<Topic>;
  postPropertyToFb?: Maybe<PropertyFbPost>;
  postToFacebookPage?: Maybe<Scalars['Boolean']['output']>;
  postToFacebookPageGroup?: Maybe<Scalars['Boolean']['output']>;
  processPropertyFromCsv?: Maybe<Property>;
  processXmlByAgencyCode?: Maybe<Scalars['Int']['output']>;
  promoteProperty?: Maybe<Property>;
  propertyshowTransaction?: Maybe<PropertyshowTransaction>;
  publishPropertyFbPostByPagePostId?: Maybe<PropertyFbPost>;
  reProcessFailedAutomatedAd?: Maybe<Scalars['Boolean']['output']>;
  refreshAlgoliaAgentIndex?: Maybe<Scalars['Boolean']['output']>;
  refreshAlgoliaPropertyDiscoverIndex?: Maybe<Scalars['Boolean']['output']>;
  refreshAlgoliaPropertyIndex?: Maybe<Scalars['Boolean']['output']>;
  refreshToken?: Maybe<AccessToken>;
  rejectAgentOffer?: Maybe<AgentOffer>;
  removeAgencyCoverPhoto?: Maybe<Scalars['Boolean']['output']>;
  removeAgentConversationContact?: Maybe<AgentConversation>;
  removeAward?: Maybe<Scalars['Boolean']['output']>;
  removeBrokerMember?: Maybe<Scalars['Boolean']['output']>;
  removeCertificate?: Maybe<Scalars['Boolean']['output']>;
  removeChatImage?: Maybe<Scalars['String']['output']>;
  removeConsumerFriend?: Maybe<Consumer>;
  removeDeveloperProjectObject?: Maybe<Scalars['Boolean']['output']>;
  removeFacebookPageFromGroup?: Maybe<FacebookPageGroup>;
  removeFile?: Maybe<Scalars['String']['output']>;
  removeImage?: Maybe<Scalars['String']['output']>;
  removeLocationFromFacebookPage?: Maybe<FacebookPage>;
  removeLocationFromGroup?: Maybe<Scalars['Boolean']['output']>;
  removePendingBuyerInvitee?: Maybe<Scalars['Boolean']['output']>;
  removePostImage?: Maybe<Scalars['String']['output']>;
  removePropertyFromCollection?: Maybe<PropertyCollectionResult>;
  removePropertyFromConsumerCollection?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated No longer supported */
  removeVideo?: Maybe<Scalars['String']['output']>;
  requestScrapeAgency?: Maybe<Scalars['Boolean']['output']>;
  resendAgencyCrmEmail?: Maybe<Scalars['Boolean']['output']>;
  resendCrmAuthorizationEmail?: Maybe<AgencyCrm>;
  resendEmailVerification?: Maybe<Scalars['Boolean']['output']>;
  resendInviteToAgency?: Maybe<Scalars['Boolean']['output']>;
  resendXmlFileProcess?: Maybe<XmlLog>;
  resetPassword?: Maybe<Scalars['Boolean']['output']>;
  saveAgencyAccountManager?: Maybe<AgencyAccountManager>;
  saveAgencyAutomatedAdSetting?: Maybe<AgencyAutomatedAdSetting>;
  saveAgencyCrmEagleConfig?: Maybe<AgencyCrmEagleConfig>;
  saveAgencyCrmLockedonConfig?: Maybe<AgencyCrmLockedonConfig>;
  saveAgencyCrmZenuConfig?: Maybe<AgencyCrmZenuConfig>;
  saveAgencyEnquiryWebhook?: Maybe<AgencyEnquiryWebhook>;
  saveAgencySetting?: Maybe<AgencySetting>;
  saveAgentAutomatedAdSetting?: Maybe<AgentAutomatedAdSetting>;
  saveAgentChecklist?: Maybe<AgentChecklist>;
  saveAgentInstagramFromCode?: Maybe<AgentInstagram>;
  saveAgentSetting?: Maybe<AgentSetting>;
  saveBrokerConfig?: Maybe<Broker>;
  saveBrokerSetting?: Maybe<BrokerSetting>;
  saveDeveloperProjectVideo?: Maybe<DeveloperProjectVideo>;
  savePlatformAgentInstagramFromCode?: Maybe<PlatformAgentInstagram>;
  savePlatformAgentTheme?: Maybe<PlatformAgentTheme>;
  savePropertyLocation?: Maybe<PropertyLocation>;
  savePropertyOverlay?: Maybe<PropertyOverlay>;
  saveWhitelabelSetting?: Maybe<Scalars['Boolean']['output']>;
  sendActivateAgencyCrm?: Maybe<AgencyCrm>;
  sendActivationEmailToAgency?: Maybe<Scalars['Boolean']['output']>;
  sendAgencyOnboardingEmail?: Maybe<EmailLog>;
  sendAgentForgotPasswordCodeByEmail?: Maybe<SendAgentForgotPasswordEmailCodeResult>;
  sendAgentFromSignUpEmail?: Maybe<Agent>;
  sendAgentPropertyInspectionUrl: Scalars['Boolean']['output'];
  sendAgentRequestAccountRemoveData?: Maybe<Scalars['Boolean']['output']>;
  sendBrokerInvite?: Maybe<Agent>;
  sendBuyerInviteeReminder?: Maybe<Scalars['Boolean']['output']>;
  sendConsumerFriendRequest?: Maybe<Consumer>;
  sendCrmAuthorizationEmail?: Maybe<AgencyCrm>;
  sendDeveloperForgotPassword?: Maybe<Scalars['Boolean']['output']>;
  sendEmail?: Maybe<Scalars['Boolean']['output']>;
  sendEmailFromPrePortalPreRegister?: Maybe<Scalars['Boolean']['output']>;
  sendEmailShortlistToBuyer?: Maybe<Scalars['Boolean']['output']>;
  sendEmailSupport?: Maybe<Scalars['Boolean']['output']>;
  sendHomeLoansApplication?: Maybe<Scalars['Boolean']['output']>;
  sendHomeLoansCalculator?: Maybe<Scalars['Boolean']['output']>;
  sendHomeOwnerAgentLoginOTPBySMS: Scalars['String']['output'];
  sendHomeOwnerBrokerLoginOTPByEmail: Scalars['String']['output'];
  sendHomeOwnerBrokerLoginOTPBySMS: Scalars['String']['output'];
  sendHomeOwnerMobileNumberOtp: Scalars['String']['output'];
  sendPlatformAgentOtp?: Maybe<Scalars['Boolean']['output']>;
  sendRealtyLiveAgentForgotPasswordCodeByEmail?: Maybe<SendAgentForgotPasswordEmailCodeResult>;
  sendRealtyLiveAgentLoginOTPBySMS: Scalars['String']['output'];
  sendRealtyLiveInviteAgentEmail?: Maybe<Scalars['Boolean']['output']>;
  sendRealtyLiveWelcomeEmail?: Maybe<Scalars['Boolean']['output']>;
  sendRealtyMobileNumberOtp: Scalars['String']['output'];
  sendUpdatedPropertyNotification?: Maybe<Scalars['Boolean']['output']>;
  sendVerifyDeveloperEmail?: Maybe<Scalars['Boolean']['output']>;
  sendWebinarBuildBrandDetails?: Maybe<Scalars['Boolean']['output']>;
  setHero?: Maybe<Hero>;
  setOfficial?: Maybe<ConsumerPage>;
  setUnOfficial?: Maybe<ConsumerPage>;
  shareEvent?: Maybe<Event>;
  softDeleteAgent?: Maybe<Scalars['Boolean']['output']>;
  softDeleteBroker?: Maybe<Scalars['Boolean']['output']>;
  startPropertyLiveStream?: Maybe<PropertyLiveStream>;
  stopPropertyLiveStream?: Maybe<PropertyLiveStream>;
  trackEvent?: Maybe<Scalars['Boolean']['output']>;
  trackPageView?: Maybe<Scalars['Boolean']['output']>;
  typing?: Maybe<SubscriptionResult>;
  unFollowConsumer?: Maybe<Scalars['Boolean']['output']>;
  undoDeleteAgency?: Maybe<Scalars['Boolean']['output']>;
  undoDeletePlatformAgent?: Maybe<Scalars['Boolean']['output']>;
  undoSoftDeleteAgent?: Maybe<Scalars['Boolean']['output']>;
  unheartPropertyFromConsumer?: Maybe<Property>;
  unhideProperty?: Maybe<Property>;
  unlikeEvent?: Maybe<Event>;
  unlockAgentBriefProperty?: Maybe<AgentBriefProperty>;
  unlockAgentBriefPropertyByInAppPurchase?: Maybe<AgentBriefProperty>;
  unlockAllAgentBriefByInAppPurchase?: Maybe<AgentBrief>;
  unlockAllAgentBriefProperty?: Maybe<AgentBrief>;
  updateAdminUser?: Maybe<AdminUser>;
  updateAdminUserStatus?: Maybe<AdminUser>;
  updateAgency?: Maybe<Agency>;
  updateAgencyAboutMe?: Maybe<Agency>;
  updateAgencyAssets?: Maybe<Agency>;
  updateAgencyCrm?: Maybe<AgencyCrm>;
  updateAgencyCrmActiveStatus?: Maybe<AgencyCrm>;
  updateAgencyEmail?: Maybe<Agency>;
  updateAgencyGroup?: Maybe<AgencyGroup>;
  updateAgencyGroupPassword?: Maybe<AgencyGroup>;
  updateAgencySitemap?: Maybe<AgencySitemap>;
  updateAgencyTheme?: Maybe<Agency>;
  updateAgent?: Maybe<Agent>;
  updateAgentBillingCard?: Maybe<Scalars['Boolean']['output']>;
  updateAgentBrief?: Maybe<AgentBrief>;
  updateAgentBriefProgressBoard?: Maybe<AgentBrief>;
  updateAgentBriefPropertyAlertToReadStatus?: Maybe<AgentBriefProperty>;
  updateAgentBriefStatus?: Maybe<AgentBrief>;
  updateAgentBuyerTransactionStatus?: Maybe<AgentBuyerTransaction>;
  updateAgentContact?: Maybe<AgentContact>;
  updateAgentContent?: Maybe<AgentContent>;
  updateAgentFbIntegration?: Maybe<AgentFacebookPage>;
  updateAgentFromSignUp?: Maybe<Agent>;
  updateAgentInstagramActiveStatus?: Maybe<AgentInstagram>;
  updateAgentMobile?: Maybe<Agent>;
  updateAgentOfferOrder?: Maybe<Scalars['Boolean']['output']>;
  updateAgentOfferProgress?: Maybe<AgentOffer>;
  updateAgentOfferReadStatus?: Maybe<AgentOffer>;
  updateAgentOrder?: Maybe<Scalars['Boolean']['output']>;
  updateAgentPlusSubscription?: Maybe<AgentSubscription>;
  updateAgentPropertyInspection: AgentPropertyInspection;
  updateAgentPropertyShortlistProgress?: Maybe<AgentPropertyShortlist>;
  updateAgentRmaIntegration?: Maybe<Integration>;
  updateAgentTheme?: Maybe<Agent>;
  updateAlgoliaAgentIndex?: Maybe<Scalars['Boolean']['output']>;
  updateAlgoliaPropertyDiscoverIndex?: Maybe<Scalars['Boolean']['output']>;
  updateAlgoliaPropertyIndex?: Maybe<Scalars['Boolean']['output']>;
  updateAllAgentBriefPropertyToReadStatus?: Maybe<Array<Maybe<AgentBriefProperty>>>;
  updateAppVersionByName?: Maybe<AppVersion>;
  updateAutoPost?: Maybe<Scalars['Boolean']['output']>;
  updateBillingCard?: Maybe<Scalars['Boolean']['output']>;
  updateBroker?: Maybe<Broker>;
  updateBrokerAward?: Maybe<BrokerAward>;
  updateBrokerCertificate?: Maybe<BrokerCertification>;
  updateBrokerHeaderColor?: Maybe<Broker>;
  updateBrokerLogo?: Maybe<Broker>;
  updateChannel?: Maybe<Channel>;
  updateCollectionName?: Maybe<ConsumerCollection>;
  updateConsumer?: Maybe<Consumer>;
  updateConsumerAlert?: Maybe<ConsumerAlert>;
  updateConsumerPage?: Maybe<ConsumerPage>;
  updateCounterAlgoliaPropertyDiscoverIndex?: Maybe<Scalars['Boolean']['output']>;
  updateCrm?: Maybe<Crm>;
  updateCrmStatus?: Maybe<Crm>;
  updateCustomerStripeInfo?: Maybe<StripeCustomerBillingInfo>;
  updateDeveloper?: Maybe<Developer>;
  updateDeveloperIsPublishedStatus?: Maybe<DeveloperProject>;
  updateDeveloperProject?: Maybe<DeveloperProject>;
  updateDeveloperProjectAboutSuburb?: Maybe<DeveloperProject>;
  updateDeveloperProjectLogo?: Maybe<DeveloperProject>;
  updateDeveloperProjectObjectAsMain?: Maybe<Array<Maybe<DeveloperProjectObject>>>;
  updateDeveloperProjectProperty?: Maybe<Property>;
  updateDomainIntegrationConfiguration?: Maybe<Scalars['Boolean']['output']>;
  updateFacebookGroupPage?: Maybe<FacebookPageGroup>;
  updateFacebookPage?: Maybe<FacebookPage>;
  updateFacebookPagePortal?: Maybe<FacebookPagePortal>;
  updateFbIntegration?: Maybe<Integration>;
  updateForgottenDeveloperPassword?: Maybe<Scalars['Boolean']['output']>;
  updateHero?: Maybe<Hero>;
  updateHoAgentBrief?: Maybe<AgentBrief>;
  updateLocation?: Maybe<Location>;
  updateOfiTime?: Maybe<Scalars['Boolean']['output']>;
  updatePlatformAgent?: Maybe<PlatformAgent>;
  updatePlatformAgentBillingCard?: Maybe<Scalars['Boolean']['output']>;
  updatePlatformAgentContent?: Maybe<PlatformAgentContent>;
  updatePlatformAgentEnquiryToReadStatus?: Maybe<PlatformAgentEnquiry>;
  updatePlatformAgentFacebookActiveStatus?: Maybe<PlatformAgentFacebook>;
  updatePlatformAgentFavIcon?: Maybe<Scalars['Boolean']['output']>;
  updatePlatformAgentInstagramActiveStatus?: Maybe<PlatformAgentInstagram>;
  updatePlatformAgentIsLoginUsingMobile?: Maybe<PlatformAgent>;
  updatePlatformAgentLogo?: Maybe<PlatformAgent>;
  updatePlatformAgentNexuSuburbSlug?: Maybe<PlatformAgent>;
  updatePlatformAgentReviewsUrl?: Maybe<Scalars['String']['output']>;
  updatePlatformAgentSeoImage?: Maybe<Scalars['Boolean']['output']>;
  updatePlatformAgentSubscription?: Maybe<PlatformAgentSubscription>;
  updatePlatformAgentSuburb?: Maybe<PlatformAgentSuburb>;
  updatePostEvent?: Maybe<ConsumerPost>;
  updateProperty?: Maybe<Property>;
  updatePropertyActiveStatus?: Maybe<Property>;
  updatePropertyEnquiryReadStatus?: Maybe<PropertyEnquiry>;
  updatePropertyFeatures?: Maybe<Property>;
  updatePropertyLinks?: Maybe<Property>;
  updatePropertyLiveStream?: Maybe<PropertyLiveStream>;
  updatePropertyPromotionGroupActiveStatus?: Maybe<PropertyPromotionGroup>;
  updatePropertyShow?: Maybe<PropertyShow>;
  updateSitemap?: Maybe<Sitemap>;
  updateSocialPost?: Maybe<DeveloperProject>;
  updateTopicMemberStatus?: Maybe<Consumer>;
  updateTopicMessageStatus?: Maybe<TopicMessage>;
  updateUpgradeAgencyReachSubscription?: Maybe<AgencySubscription>;
  upgradeAgencyAccount?: Maybe<Agency>;
  upgradeAgencyPackageWithAgencyUpdate?: Maybe<Agency>;
  upgradeAgentPackageWithSuburb?: Maybe<Agent>;
  upgradeBrokerRealtimeAlerts?: Maybe<Broker>;
  upgradeDeveloperProjectSubscription?: Maybe<DeveloperProject>;
  upgradeHomeownerBroker?: Maybe<Scalars['Boolean']['output']>;
  upgradePlatformAgentSubscription?: Maybe<PlatformAgentSubscription>;
  upgradeProperty?: Maybe<Property>;
  uploadAgencyLogo?: Maybe<Agency>;
  uploadChatImage?: Maybe<Scalars['String']['output']>;
  uploadFile?: Maybe<UploadFile>;
  /** Uploads image in S3 tmp folder and will return the s3 key */
  uploadImage?: Maybe<Scalars['String']['output']>;
  uploadListingToDomain?: Maybe<Property>;
  uploadPlatformAgentContentImage?: Maybe<Scalars['String']['output']>;
  uploadPostImage?: Maybe<Scalars['String']['output']>;
  uploadPropertyAudio?: Maybe<PropertyAudio>;
  uploadPropertyDocument?: Maybe<Array<Maybe<PropertyDocument>>>;
  uploadPropertyObject?: Maybe<PropertyObject>;
  /** @deprecated No longer supported */
  uploadVideo?: Maybe<Scalars['String']['output']>;
  verifyAgency?: Maybe<Agency>;
  verifyAgencyNewPassword?: Maybe<Scalars['Boolean']['output']>;
  verifyAgentForgotPasswordCode?: Maybe<Scalars['Boolean']['output']>;
  verifyAgentNewPassword?: Maybe<Scalars['Boolean']['output']>;
  verifyBroker?: Maybe<Scalars['Boolean']['output']>;
  verifyBrokerNewPassword?: Maybe<Scalars['Boolean']['output']>;
  verifyConsumer?: Maybe<Scalars['Boolean']['output']>;
  verifyConsumerNewPassword?: Maybe<Scalars['Boolean']['output']>;
  verifyDeveloperEmail?: Maybe<Scalars['Boolean']['output']>;
  verifyFbIntegration?: Maybe<Integration>;
  verifyMobileNumberOtp: Scalars['Boolean']['output'];
  verifyPlatformAgentOtp?: Maybe<Scalars['Boolean']['output']>;
  version: Scalars['Int']['output'];
};

export type MutationAcceptAgentContactInviteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationAcceptAgentOfferArgs = {
  input?: InputMaybe<AcceptOrRejectAgentOfferInput>;
};

export type MutationAcceptConsumerFriendRequestArgs = {
  friendId: Scalars['ID']['input'];
};

export type MutationAddAgenciesToGroupArgs = {
  agencyIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
};

export type MutationAddAgentConversationContactArgs = {
  input: AddAgentConversationContactInput;
};

export type MutationAddAgentLocationArgs = {
  locationIds: Array<Scalars['ID']['input']>;
};

export type MutationAddDeveloperProjectObjectArgs = {
  input: AddDeveloperProjectObjectInput;
};

export type MutationAddFacebookPageToGroupArgs = {
  facebookPagesId?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
};

export type MutationAddLocationToFacebookPageArgs = {
  id: Scalars['ID']['input'];
  locationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type MutationAddLocationsToGroupArgs = {
  locationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  locationParentId: Scalars['ID']['input'];
};

export type MutationAddPropertyToCollectionArgs = {
  collectionId: Scalars['ID']['input'];
  propertyId: Scalars['ID']['input'];
};

export type MutationAddPropertyToConsumerCollectionArgs = {
  collectionId: Scalars['ID']['input'];
  propertyId: Scalars['ID']['input'];
};

export type MutationAddRecordToGoogleSheetArgs = {
  input: AddRecordToGoogleSheetInput;
};

export type MutationAddSuburbToExistingChargeArgs = {
  input?: InputMaybe<CreateSuburbToExistingChargeInput>;
};

export type MutationAddSuburbToExistingSubscriptionArgs = {
  input?: InputMaybe<CreateSuburbToExistingSubscriptionInput>;
};

export type MutationAddTopicMemberArgs = {
  members?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationAddTopicMessageReactionArgs = {
  reaction: Scalars['String']['input'];
  topicMessageId: Scalars['ID']['input'];
};

export type MutationAgencyDevelopersSignUpRequestArgs = {
  input: AgencyDevelopersSignUpRequestInput;
};

export type MutationAgencyForgotPasswordArgs = {
  id: Scalars['ID']['input'];
};

export type MutationAgencyPreSignUpArgs = {
  email: Scalars['String']['input'];
};

export type MutationAgentApplyCouponArgs = {
  coupon?: InputMaybe<Scalars['String']['input']>;
};

export type MutationAgentForgotPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationAgentInviteColleagueArgs = {
  input?: InputMaybe<AgentInviteColleagueInput>;
};

export type MutationAgentMobileNumberVerifyArgs = {
  mobileNumber: Scalars['String']['input'];
};

export type MutationAgentUsernameVerifyArgs = {
  userName: Scalars['String']['input'];
};

export type MutationApproveArgs = {
  id: Scalars['ID']['input'];
};

export type MutationBrokerApplyCouponArgs = {
  coupon?: InputMaybe<Scalars['String']['input']>;
};

export type MutationBrokerForgotPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationBrokerInviteHomeownerBuyerArgs = {
  input: BrokerInviteHomeownerBuyerInput;
};

export type MutationBrokerResetPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type MutationCancelAgentBuyerSubscriptionArgs = {
  input: CreateAgentAddOnInput;
};

export type MutationCancelConsumerFriendRequestArgs = {
  consumerId: Scalars['ID']['input'];
};

export type MutationCancelUserFriendRequestArgs = {
  consumerId: Scalars['ID']['input'];
};

export type MutationChangeAgencyCrmPropertiesPublishStatusArgs = {
  agencyCrmId: Scalars['ID']['input'];
  isPublished: Scalars['Boolean']['input'];
};

export type MutationChangeAgencyGroupActiveStatusArgs = {
  id: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
};

export type MutationChangeAgentBriefIsActiveStatusArgs = {
  id: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
};

export type MutationChangeAgentBriefPropertyIsActiveStatusArgs = {
  id: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
};

export type MutationChangeAgentBuyerSubscriptionArgs = {
  input: ChangeAgentBuyerSubscription;
};

export type MutationChangeAgentInstagramIntegrationIsActiveStatusArgs = {
  isActive: Scalars['Boolean']['input'];
};

export type MutationChangeAgentOfferIsActiveStatusArgs = {
  id: Scalars['ID']['input'];
};

export type MutationChangeAgentPasswordByForgotPasswordCodeArgs = {
  input: ChangeAgentPasswordByForgotPasswordCodeInput;
};

export type MutationChangeBrokerPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type MutationChangePasswordMobileArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type MutationChangePlatformAgentPasswordArgs = {
  input: ChangePlatformAgentPasswordInput;
};

export type MutationChangePropertyLiveStreamPublishStatusArgs = {
  isPublished: Scalars['Boolean']['input'];
  propertyLiveStreamUuid: Scalars['ID']['input'];
};

export type MutationClaimAgentPageArgs = {
  consumerPageId: Scalars['ID']['input'];
};

export type MutationConsumerFollowAgencyArgs = {
  agencyId: Scalars['ID']['input'];
};

export type MutationConsumerFollowAgentArgs = {
  agentId: Scalars['ID']['input'];
};

export type MutationConsumerFollowConsumerArgs = {
  followeeId: Scalars['ID']['input'];
};

export type MutationConsumerFollowPageArgs = {
  consumerPageId: Scalars['ID']['input'];
};

export type MutationConsumerFollowPropertyArgs = {
  propertyId: Scalars['ID']['input'];
};

export type MutationConsumerFollowSuburbArgs = {
  suburbId: Scalars['ID']['input'];
};

export type MutationConsumerForgotPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationConsumerPropertyUnClaimArgs = {
  propertyId: Scalars['ID']['input'];
};

export type MutationConsumerResetPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type MutationConsumerSendEmailArgs = {
  input?: InputMaybe<ConsumerSendEmailInput>;
};

export type MutationConsumerUnfollowAgencyArgs = {
  agencyId: Scalars['ID']['input'];
};

export type MutationConsumerUnfollowAgentArgs = {
  agentId: Scalars['ID']['input'];
};

export type MutationConsumerUnfollowConsumerArgs = {
  followeeId: Scalars['ID']['input'];
};

export type MutationConsumerUnfollowPageArgs = {
  consumerPageId: Scalars['ID']['input'];
};

export type MutationConsumerUnfollowPropertyArgs = {
  propertyId: Scalars['ID']['input'];
};

export type MutationConsumerUnfollowSuburbArgs = {
  suburbId: Scalars['ID']['input'];
};

export type MutationContactLeadArgs = {
  agentLeadId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationContributorUploadImageArgs = {
  file: Scalars['Upload']['input'];
  id: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCounterAgentOfferArgs = {
  input: CounterAgentOfferInput;
};

export type MutationCreateAdSalesAgreementArgs = {
  input?: InputMaybe<CreateAdSalesAgreementInput>;
};

export type MutationCreateAdminTokenArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationCreateAdminTokenUsingGoogleLoginArgs = {
  email: Scalars['String']['input'];
  googleId?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
};

export type MutationCreateAdminUserArgs = {
  input: CreateAdminUserInput;
};

export type MutationCreateAgencyArgs = {
  input: CreateAgencyInput;
};

export type MutationCreateAgencyCommercialSubscriptionArgs = {
  input: CreateAgencyCommercialSubscriptionInput;
};

export type MutationCreateAgencyContactTrackerArgs = {
  input: CreateAgencyContactTrackerInput;
};

export type MutationCreateAgencyCrmArgs = {
  input: CreateAgencyCrmInput;
};

export type MutationCreateAgencyDevelopersSubscriptionArgs = {
  input?: InputMaybe<UpgradeDevelopersAgencyInput>;
};

export type MutationCreateAgencyEnquiryArgs = {
  input: CreateAgencyEnquiryInput;
};

export type MutationCreateAgencyFbSubscriptionArgs = {
  input: CreateAgencyFbSubscriptionInput;
};

export type MutationCreateAgencyFromSubscriptionArgs = {
  input: CreateAgencyFromSubscriptionInput;
};

export type MutationCreateAgencyGroupArgs = {
  input: CreateAgencyGroupInput;
};

export type MutationCreateAgencyGroupMemberArgs = {
  input: CreateAgencyGroupMember;
};

export type MutationCreateAgencyGroupTokenArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationCreateAgencyInstagramIntegrationArgs = {
  input: CreateAgencyInstagramInput;
};

export type MutationCreateAgencyMailboxSubscriptionArgs = {
  agencyId: Scalars['ID']['input'];
  stripeTokenId: Scalars['String']['input'];
};

export type MutationCreateAgencyMarketingPdfArgs = {
  agencyId: Scalars['ID']['input'];
};

export type MutationCreateAgencySitemapArgs = {
  input: CreateAgencySitemapInput;
};

export type MutationCreateAgencyTokenArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationCreateAgencyTokenByIdArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};

export type MutationCreateAgencyTokenFromAdminArgs = {
  agencyId: Scalars['ID']['input'];
};

export type MutationCreateAgentArgs = {
  input: CreateAgentInput;
};

export type MutationCreateAgentAccelerateOneDollarPromoArgs = {
  input: CreateAgentAccelerateOneDollarPromoInput;
};

export type MutationCreateAgentAccessTokenFromLoginOtpArgs = {
  input: CreateAgentAccessTokenFromLoginOtp;
};

export type MutationCreateAgentBillingCardArgs = {
  input: AgentBillingCardInput;
};

export type MutationCreateAgentBriefArgs = {
  input: CreateAgentBriefInput;
};

export type MutationCreateAgentBriefFromClientArgs = {
  input: CreateAgentBriefFromClientInput;
};

export type MutationCreateAgentBriefFromHomeownerSignUpArgs = {
  buyerAgentId: Scalars['ID']['input'];
  input: CreateAgentBriefInput;
};

export type MutationCreateAgentBriefFromLinkArgs = {
  input: CreateAgentBriefFromLinkInput;
};

export type MutationCreateAgentBuyerAddOnArgs = {
  input: CreateAgentAddOnInput;
};

export type MutationCreateAgentBuyerHomeownerRealtySubscriptionArgs = {
  input: CreateAgentBuyerHomeownerRealtySubscriptionInput;
};

export type MutationCreateAgentBuyerTransactionArgs = {
  input?: InputMaybe<CreateAgentTransactionInput>;
};

export type MutationCreateAgentChatTopicArgs = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationCreateAgentContactArgs = {
  input: CreateAgentContactInput;
};

export type MutationCreateAgentContactTrackerArgs = {
  input: CreateAgentContactTrackerInput;
};

export type MutationCreateAgentContentArgs = {
  input: AgentContentInput;
};

export type MutationCreateAgentConversationArgs = {
  input: CreateAgentConversationInput;
};

export type MutationCreateAgentDeviceArgs = {
  input: CreateAgentDeviceInput;
};

export type MutationCreateAgentEnquiryArgs = {
  input: CreateAgentEnquiryInput;
};

export type MutationCreateAgentFbIntegrationArgs = {
  input: CreateAgentFbIntegrationInput;
};

export type MutationCreateAgentForgotPasswordArgs = {
  input: CreateAgentForgotPasswordInput;
};

export type MutationCreateAgentFoundationPaymentArgs = {
  input: CreateFoundationPaymentInput;
};

export type MutationCreateAgentFromListingUploaderArgs = {
  input: CreateAgentFromListingUploaderInput;
};

export type MutationCreateAgentFromPrePortalSignUpArgs = {
  input: CreateAgentFromPrePortalSignUpInput;
};

export type MutationCreateAgentFromSignUpArgs = {
  input: CreateAgentFromSignUpInput;
};

export type MutationCreateAgentFromSignUpMobileArgs = {
  input: CreateAgentFromSignUpMobileInput;
};

export type MutationCreateAgentInstagramIntegrationArgs = {
  accessToken: Scalars['String']['input'];
  fbUserId: Scalars['String']['input'];
};

export type MutationCreateAgentLeadArgs = {
  input?: InputMaybe<CreateAgentLead>;
};

export type MutationCreateAgentLeadMessageArgs = {
  agentLeadId?: InputMaybe<Scalars['ID']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCreateAgentMailboxSubscriptionArgs = {
  agentId: Scalars['ID']['input'];
  contactEmail: Scalars['String']['input'];
  stripeTokenId: Scalars['String']['input'];
};

export type MutationCreateAgentMarketingPdfArgs = {
  agentId: Scalars['ID']['input'];
};

export type MutationCreateAgentNewPasswordArgs = {
  input: CreateAgentNewPasswordInput;
};

export type MutationCreateAgentOfferArgs = {
  input: CreateAgentOfferInput;
};

export type MutationCreateAgentPaymentArgs = {
  input: CreateAgentPaymentInput;
};

export type MutationCreateAgentPaymentFromSignUpArgs = {
  input: CreateAgentPaymentFromSignupInput;
};

export type MutationCreateAgentPlatformSubscriptionArgs = {
  input: CreateAgentPlatformSubscriptionInput;
};

export type MutationCreateAgentPlusSubscriptionArgs = {
  input: CreateAgentPlusSubscriptionInput;
};

export type MutationCreateAgentPropertyInspectionArgs = {
  input: CreateAgentPropertyInspectionInput;
};

export type MutationCreateAgentPropertyInspectionVideoArgs = {
  input: CreateAgentPropertyInspectionVideoInput;
};

export type MutationCreateAgentPropertyInspectionVideoCommentArgs = {
  input: CreateAgentPropertyInspectionVideoCommentInput;
};

export type MutationCreateAgentPropertyRequestArgs = {
  input: CreateAgentPropertyRequestInput;
};

export type MutationCreateAgentPropertyShortlistArgs = {
  briefUuids: Array<Scalars['ID']['input']>;
  propertyId: Scalars['ID']['input'];
};

export type MutationCreateAgentRegionArgs = {
  locationIds: Array<Scalars['ID']['input']>;
};

export type MutationCreateAgentReviewArgs = {
  input?: InputMaybe<CreateAgentReviewInput>;
};

export type MutationCreateAgentRmaIntegrationArgs = {
  input: CreateRmaAgentIntegrationInput;
};

export type MutationCreateAgentStateArgs = {
  states: Array<Scalars['String']['input']>;
};

export type MutationCreateAgentTokenArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationCreateAgentTokenFromAdminArgs = {
  agentId: Scalars['ID']['input'];
};

export type MutationCreateAppVersionArgs = {
  name: Scalars['String']['input'];
  version: Scalars['String']['input'];
};

export type MutationCreateBillingCardArgs = {
  input: AgencyBillingCardInput;
};

export type MutationCreateBrokerArgs = {
  input: CreateBrokerInput;
};

export type MutationCreateBrokerAccessTokenFromLoginOtpArgs = {
  input: CreateAgentAccessTokenFromLoginOtp;
};

export type MutationCreateBrokerAwardArgs = {
  input: CreateBrokerAwardInput;
};

export type MutationCreateBrokerCertificateArgs = {
  input: CreateBrokerCertificateInput;
};

export type MutationCreateBrokerCompanyArgs = {
  input: CreateBrokerCompanyInput;
};

export type MutationCreateBrokerContactTrackerArgs = {
  brokerId: Scalars['ID']['input'];
};

export type MutationCreateBrokerEnquiryArgs = {
  input: CreateBrokerEnquiryInput;
};

export type MutationCreateBrokerPaymentArgs = {
  input: CreateBrokerPaymentInput;
};

export type MutationCreateBrokerSignUpArgs = {
  input: CreateBrokerSignUpInput;
};

export type MutationCreateBrokerTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationCreateBrokerTokenFromAdminArgs = {
  brokerId: Scalars['ID']['input'];
};

export type MutationCreateBuyerAgentEnquiryArgs = {
  input: CreateAgentEnquiryInput;
};

export type MutationCreateChannelArgs = {
  input: CreateChannelInput;
};

export type MutationCreateConsumerArgs = {
  input: CreateConsumerInput;
};

export type MutationCreateConsumerAboutArgs = {
  about?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCreateConsumerAlertArgs = {
  input: CreateConsumerAlertInput;
};

export type MutationCreateConsumerAlertWithConsumerSignupArgs = {
  input: CreateConsumerAlertWithConsumerSignupInput;
};

export type MutationCreateConsumerAlertWithExistingConsumerArgs = {
  input: CreateConsumerAlertWithExistingConsumerInput;
};

export type MutationCreateConsumerAppleSignUpInputArgs = {
  input: CreateConsumerAppleSignUpInput;
};

export type MutationCreateConsumerChangeTypeRequestArgs = {
  category: Scalars['String']['input'];
  type: ConsumerType;
};

export type MutationCreateConsumerCollectionArgs = {
  collectionName: Scalars['String']['input'];
};

export type MutationCreateConsumerDeviceTokenArgs = {
  consumerId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};

export type MutationCreateConsumerOffMarketSubWithConsumerSignupArgs = {
  input: CreateConsumerOffMarketSubWithConsumerSignupInput;
};

export type MutationCreateConsumerOffMarketSubWithExistingConsumerArgs = {
  input: CreateConsumerOffMarketSubWithExistingConsumerInput;
};

export type MutationCreateConsumerOffMarketSubscriptionArgs = {
  input: CreateConsumerOffMarketSubscriptionInput;
};

export type MutationCreateConsumerPageArgs = {
  input: CreateConsumerPageInput;
};

export type MutationCreateConsumerPagePostArgs = {
  input?: InputMaybe<CreateConsumerPagePostInput>;
};

export type MutationCreateConsumerPostArgs = {
  input?: InputMaybe<CreateConsumerPostInput>;
};

export type MutationCreateConsumerPropertyClaimArgs = {
  propertyId: Scalars['ID']['input'];
};

export type MutationCreateConsumerTokenArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationCreateConsumerTokenForExistingAccountUsingFbArgs = {
  fbId: Scalars['String']['input'];
};

export type MutationCreateConsumerTokenForExistingAccountUsingGoogleArgs = {
  googleId: Scalars['String']['input'];
};

export type MutationCreateConsumerTokenFromAdminArgs = {
  consumerId: Scalars['ID']['input'];
};

export type MutationCreateConsumerTokenUsingAppleIdArgs = {
  appleUserId: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCreateConsumerTokenUsingFbLoginArgs = {
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agencyName?: InputMaybe<Scalars['String']['input']>;
  agencySuburb?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fbId?: InputMaybe<Scalars['String']['input']>;
  fbProfileUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCreateConsumerTokenUsingGoogleLoginArgs = {
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agencyName?: InputMaybe<Scalars['String']['input']>;
  agencySuburb?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  googleId?: InputMaybe<Scalars['String']['input']>;
  googleProfileUrl?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCreateConsumerTokenUsingSocialLoginArgs = {
  input: CreateConsumerTokenUsingSocialLoginInput;
};

export type MutationCreateCrmArgs = {
  input: CreateCrmInput;
};

export type MutationCreateCustomAgentPropertyShortlistArgs = {
  input: CreateCustomAgentPropertyShortlistInput;
};

export type MutationCreateDeveloperFromSignUpArgs = {
  input: CreateDeveloperFromSignUpInput;
};

export type MutationCreateDeveloperProjectArgs = {
  input: CreateDeveloperProjectInput;
};

export type MutationCreateDeveloperProjectEnquiryArgs = {
  input: CreateDeveloperProjectEnquiryInput;
};

export type MutationCreateDeveloperProjectPropertyArgs = {
  input: CreateDeveloperPropertyInput;
};

export type MutationCreateDeveloperTokenArgs = {
  input: CreateDeveloperTokenInput;
};

export type MutationCreateDomainIntegrationArgs = {
  input?: InputMaybe<CreateDomainIntegrationInput>;
};

export type MutationCreateDomainOffMarketArgs = {
  input?: InputMaybe<CreateDomainOffMarketInput>;
};

export type MutationCreateExistingPostPromotionArgs = {
  input: CreateExistingPostPromotionInput;
};

export type MutationCreateFacebookGroupPageArgs = {
  input: CreateFacebookGroupPageInput;
};

export type MutationCreateFacebookPageArgs = {
  input: CreateFacebookPageInput;
};

export type MutationCreateFacebookPagePortalArgs = {
  input: CreateFacebookPagePortalInput;
};

export type MutationCreateFbIntegrationArgs = {
  input?: InputMaybe<CreateAgencyFbIntegrationInput>;
};

export type MutationCreateFoundationPaymentArgs = {
  input: CreateFoundationPaymentInput;
};

export type MutationCreateHeroArgs = {
  input: CreateHeroInput;
};

export type MutationCreateHomeownerAgentContactsArgs = {
  input: CreateHomeownerAgentContactsInput;
};

export type MutationCreateHomeownerAgentSubscriptionPackageArgs = {
  input: CreateHomeownerAgentSubscriptionPackage;
};

export type MutationCreateInvestorArgs = {
  input: CreateInvestorInput;
};

export type MutationCreateLocationArgs = {
  input: CreateLocationInput;
};

export type MutationCreateOrUpdateAgentFromHomeownerSignupArgs = {
  input: CreateUpdateAgentFromHomeownerSignUpInput;
};

export type MutationCreatePageSessionArgs = {
  input: CreatePagSessionInput;
};

export type MutationCreatePlatformAgentAppraisalEnquiryArgs = {
  input: CreatePlatformAgentAppraisalEnquiryInput;
};

export type MutationCreatePlatformAgentBillingCardArgs = {
  input: PlatformAgentBillingCardInput;
};

export type MutationCreatePlatformAgentBySheetDataArgs = {
  agentId: Scalars['ID']['input'];
};

export type MutationCreatePlatformAgentContentArgs = {
  input: CreatePlatformAgentContentInput;
};

export type MutationCreatePlatformAgentEnquiryArgs = {
  input: CreatePlatformAgentEnquiryInput;
};

export type MutationCreatePlatformAgentFacebookArgs = {
  input: CreateAgentFbIntegrationInput;
};

export type MutationCreatePlatformAgentMainSuburbArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCreatePlatformAgentPropensityAppraisalEnquiryArgs = {
  input: CreatePlatformAgentPropensityAppraisalEnquiryInput;
};

export type MutationCreatePlatformAgentSuburbArgs = {
  input: CreatePlatformAgentSuburbInput;
};

export type MutationCreatePlatformAgentTokenArgs = {
  input: CreatePlatformAgentTokenInput;
};

export type MutationCreatePlatformAgentTokenFromAdminArgs = {
  platformAgentId: Scalars['ID']['input'];
};

export type MutationCreatePlatformAgentTokenFromOtpArgs = {
  input: VerifyPlatformAgentOtpInput;
};

export type MutationCreatePrePortalPropertyEnquiryArgs = {
  input: CreatePropertyEnquiryInput;
};

export type MutationCreatePromotionArgs = {
  input: CreatePromotionInput;
};

export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput;
};

export type MutationCreatePropertyAppraisalEnquiryArgs = {
  input?: InputMaybe<CreatePropertyAppraisalEnquiryInput>;
};

export type MutationCreatePropertyCouponArgs = {
  input: CreatePropertyCouponInput;
};

export type MutationCreatePropertyEnquiryArgs = {
  input: CreatePropertyEnquiryInput;
};

export type MutationCreatePropertyEnquiryAgencyArgs = {
  input: CreatePropertyEnquiryAgencyInput;
};

export type MutationCreatePropertyInspectionArgs = {
  input?: InputMaybe<CreatePropertyInspectionInput>;
};

export type MutationCreatePropertyLiveStreamArgs = {
  input: CreatePropertyLiveStreamInput;
};

export type MutationCreatePropertyObjectArgs = {
  input: CreatePropertyObjectInput;
};

export type MutationCreatePropertyShowArgs = {
  input: CreatePropertyShowInput;
};

export type MutationCreatePropertyToConsumerCollectionArgs = {
  collectionName: Scalars['String']['input'];
  propertyId: Scalars['ID']['input'];
};

export type MutationCreateReviewRequestArgs = {
  input?: InputMaybe<CreateReviewRequestInput>;
};

export type MutationCreateS3ObjectFromUrlArgs = {
  input: CreateS3ObjectFromUrlInput;
};

export type MutationCreateSitemapArgs = {
  input: CreateSitemapInput;
};

export type MutationCreateSuburbSuggestionEmailArgs = {
  email: Scalars['String']['input'];
  locationId: Scalars['ID']['input'];
};

export type MutationCreateTalentFormArgs = {
  input: CreateTalentFormInput;
};

export type MutationCreateTopicArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  members?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationCreateTopicMessageArgs = {
  input?: InputMaybe<CreateTopicMessageInput>;
};

export type MutationCreateUpgradeAgencyReachSubscriptionArgs = {
  input: CreateUpgradeAgencyReachSubscriptionInput;
};

export type MutationCreateUpgradeFbPostArgs = {
  input: CreateUpgradeFbPostInput;
};

export type MutationCreateVendorPromotionArgs = {
  input: CreateVendorPromotionInput;
};

export type MutationCreateVendorPromotionGroupArgs = {
  input: CreateVendorPromotionGroupInput;
};

export type MutationDeclineArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteAdminUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteAgencyArgs = {
  agencyId: Scalars['ID']['input'];
};

export type MutationDeleteAgencyCrmArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteAgencyGroupArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteAgencyGroupMemberArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteAgentBillingCardArgs = {
  input: AgentBillingCardInput;
};

export type MutationDeleteAgentContactArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteAgentContactsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type MutationDeleteAgentPropertyInspectionArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteAgentPropertyInspectionVideoArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteAgentPropertyInspectionVideoCommentArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteAgentPropertyShortlistArgs = {
  briefUuids: Array<Scalars['ID']['input']>;
  propertyId: Scalars['ID']['input'];
};

export type MutationDeleteBillingCardArgs = {
  input: AgencyBillingCardInput;
};

export type MutationDeleteBrokerConfigArgs = {
  key: Scalars['String']['input'];
};

export type MutationDeleteBrokerEnquiryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationDeleteChannelArgs = {
  channelId: Scalars['ID']['input'];
};

export type MutationDeleteConsumerAlertArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteConsumerCollectionArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteDeveloperProjectEnquiryArgs = {
  uuid: Scalars['ID']['input'];
};

export type MutationDeleteFacebookGroupPageArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteFacebookPageArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteFacebookPagePortalArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteHeroArgs = {
  heroId: Scalars['ID']['input'];
};

export type MutationDeleteLocationArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteMessageArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteMessageReactionArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeletePlatformAgentArgs = {
  platformAgentId: Scalars['ID']['input'];
};

export type MutationDeletePlatformAgentBillingCardArgs = {
  input: PlatformAgentBillingCardInput;
};

export type MutationDeletePlatformAgentSuburbArgs = {
  input: DeletePlatformAgentSuburbInput;
};

export type MutationDeletePostEventArgs = {
  eventId?: InputMaybe<Scalars['ID']['input']>;
  postId: Scalars['ID']['input'];
};

export type MutationDeletePostPropertyFromFbArgs = {
  pageId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
  propertyFbPostId: Scalars['ID']['input'];
};

export type MutationDeletePropertyArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeletePropertyAudioArgs = {
  propertyAudioId: Scalars['ID']['input'];
};

export type MutationDeletePropertyDocumentArgs = {
  propertyDocumentId: Scalars['ID']['input'];
};

export type MutationDeletePropertyEnquiryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationDeletePropertyObjectArgs = {
  propertyObjectId: Scalars['ID']['input'];
};

export type MutationDeletePropertyShowArgs = {
  propertyShowId: Scalars['ID']['input'];
};

export type MutationDeleteTopicArgs = {
  topicId: Scalars['ID']['input'];
};

export type MutationDeleteTopicMemberArgs = {
  memberId?: InputMaybe<Scalars['ID']['input']>;
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationDisableAgentFbIntegrationStatusArgs = {
  integrationId: Scalars['ID']['input'];
};

export type MutationDisableIntegrationStatusArgs = {
  integrationId: Scalars['ID']['input'];
};

export type MutationDisableScrapedArgs = {
  agencyId: Scalars['ID']['input'];
};

export type MutationEnableAgentFbIntegrationStatusArgs = {
  integrationId: Scalars['ID']['input'];
};

export type MutationEnableIntegrationStatusArgs = {
  integrationId: Scalars['ID']['input'];
};

export type MutationExtendCampaignPromotionArgs = {
  input: ExtendCampaignPromotionInput;
};

export type MutationFollowConsumerArgs = {
  consumerId: Scalars['ID']['input'];
};

export type MutationGenerateAgenciesCsvReportArgs = {
  options?: InputMaybe<GenerateAgenciesCsvReportOptions>;
};

export type MutationGenerateAgentsCsvReportArgs = {
  options?: InputMaybe<GenerateAgentsCsvReportOptions>;
};

export type MutationHeartPropertyToConsumerArgs = {
  propertyId: Scalars['ID']['input'];
};

export type MutationHidePropertyArgs = {
  consumerId?: InputMaybe<Scalars['ID']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationInvalidateRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};

export type MutationInviteAgencyArgs = {
  input: InviteAgencyInput;
};

export type MutationInviteBrokerMemberArgs = {
  input?: InputMaybe<Array<InviteBrokerMemberInput>>;
};

export type MutationInviteConsumerArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLikeEventArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationMemberRequestArgs = {
  topicId: Scalars['ID']['input'];
  uniqueId?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMoveGoogleDriveFileToTrashArgs = {
  fileId: Scalars['ID']['input'];
};

export type MutationMuteOrUnmuteTopicArgs = {
  isMuted?: InputMaybe<Scalars['Boolean']['input']>;
  topicId: Scalars['ID']['input'];
};

export type MutationPostPropertyToFbArgs = {
  propertyId: Scalars['ID']['input'];
};

export type MutationPostToFacebookPageArgs = {
  input: PostToFacebookPageInput;
};

export type MutationPostToFacebookPageGroupArgs = {
  input: PostToFacebookPageGroupInput;
};

export type MutationProcessPropertyFromCsvArgs = {
  input: ProcessPropertyFromCsvInput;
};

export type MutationProcessXmlByAgencyCodeArgs = {
  agencyCodes: Array<Scalars['String']['input']>;
};

export type MutationPromotePropertyArgs = {
  input: PromotePropertyInput;
};

export type MutationPropertyshowTransactionArgs = {
  input?: InputMaybe<PropertyshowTransactionInput>;
};

export type MutationPublishPropertyFbPostByPagePostIdArgs = {
  id: Scalars['ID']['input'];
};

export type MutationReProcessFailedAutomatedAdArgs = {
  automatedAdLogId: Scalars['ID']['input'];
};

export type MutationRefreshTokenArgs = {
  accessToken: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};

export type MutationRejectAgentOfferArgs = {
  input?: InputMaybe<AcceptOrRejectAgentOfferInput>;
};

export type MutationRemoveAgencyCoverPhotoArgs = {
  id: Scalars['ID']['input'];
};

export type MutationRemoveAgentConversationContactArgs = {
  input: RemoveAgentConversationContactInput;
};

export type MutationRemoveAwardArgs = {
  id: Scalars['ID']['input'];
};

export type MutationRemoveBrokerMemberArgs = {
  brokerId: Scalars['ID']['input'];
};

export type MutationRemoveCertificateArgs = {
  id: Scalars['ID']['input'];
};

export type MutationRemoveChatImageArgs = {
  key: Scalars['String']['input'];
};

export type MutationRemoveConsumerFriendArgs = {
  friendId: Scalars['ID']['input'];
};

export type MutationRemoveDeveloperProjectObjectArgs = {
  id: Scalars['ID']['input'];
};

export type MutationRemoveFacebookPageFromGroupArgs = {
  facebookPageId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};

export type MutationRemoveFileArgs = {
  key: Scalars['String']['input'];
};

export type MutationRemoveImageArgs = {
  key: Scalars['String']['input'];
};

export type MutationRemoveLocationFromFacebookPageArgs = {
  id: Scalars['ID']['input'];
  locationId: Scalars['ID']['input'];
};

export type MutationRemoveLocationFromGroupArgs = {
  locationId: Scalars['ID']['input'];
  locationParentId: Scalars['ID']['input'];
};

export type MutationRemovePendingBuyerInviteeArgs = {
  buyerInviteeId: Scalars['ID']['input'];
};

export type MutationRemovePostImageArgs = {
  key: Scalars['String']['input'];
};

export type MutationRemovePropertyFromCollectionArgs = {
  collectionId: Scalars['ID']['input'];
  propertyId: Scalars['ID']['input'];
};

export type MutationRemovePropertyFromConsumerCollectionArgs = {
  collectionId: Scalars['ID']['input'];
  propertyId: Scalars['ID']['input'];
};

export type MutationRemoveVideoArgs = {
  key: Scalars['String']['input'];
};

export type MutationRequestScrapeAgencyArgs = {
  agencyId: Scalars['ID']['input'];
  types: Array<RequestScrapeAgencyType>;
};

export type MutationResendAgencyCrmEmailArgs = {
  agencyCrmId: Scalars['ID']['input'];
};

export type MutationResendCrmAuthorizationEmailArgs = {
  agencyCrmId: Scalars['ID']['input'];
};

export type MutationResendInviteToAgencyArgs = {
  agencyId: Scalars['ID']['input'];
};

export type MutationResendXmlFileProcessArgs = {
  xmlLogId: Scalars['ID']['input'];
};

export type MutationResetPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type MutationSaveAgencyAccountManagerArgs = {
  adminUserId: Scalars['ID']['input'];
  agencyId: Scalars['ID']['input'];
};

export type MutationSaveAgencyAutomatedAdSettingArgs = {
  input: SaveAgencyAutomatedAdSettingInput;
};

export type MutationSaveAgencyCrmEagleConfigArgs = {
  input: SaveAgencyCrmEagleConfigInput;
};

export type MutationSaveAgencyCrmLockedonConfigArgs = {
  input: SaveAgencyCrmLockedonConfigInput;
};

export type MutationSaveAgencyCrmZenuConfigArgs = {
  input: SaveAgencyCrmZenuConfigInput;
};

export type MutationSaveAgencyEnquiryWebhookArgs = {
  input: SaveAgencyEnquiryWebhookInput;
};

export type MutationSaveAgencySettingArgs = {
  input: SaveAgencySettingInput;
};

export type MutationSaveAgentAutomatedAdSettingArgs = {
  input: SaveAgentAutomatedAdSettingInput;
};

export type MutationSaveAgentChecklistArgs = {
  input: SaveAgentChecklistInput;
};

export type MutationSaveAgentInstagramFromCodeArgs = {
  input: SaveAgentInstagramFromCodeInput;
};

export type MutationSaveAgentSettingArgs = {
  input: SaveAgentSettingInput;
};

export type MutationSaveBrokerConfigArgs = {
  input: Array<SaveBrokerConfigInput>;
};

export type MutationSaveBrokerSettingArgs = {
  input: SaveBrokerSettingInput;
};

export type MutationSaveDeveloperProjectVideoArgs = {
  input: SaveDeveloperProjectInput;
};

export type MutationSavePlatformAgentInstagramFromCodeArgs = {
  input: SavePlatformAgentInstagramFromCodeInput;
};

export type MutationSavePlatformAgentThemeArgs = {
  input: SavePlatformAgentThemeInput;
};

export type MutationSavePropertyLocationArgs = {
  input?: InputMaybe<SavePropertyLocationInput>;
};

export type MutationSavePropertyOverlayArgs = {
  input: SavePropertyOverlayInput;
};

export type MutationSaveWhitelabelSettingArgs = {
  input: SaveWhitelabelSettingInput;
};

export type MutationSendActivateAgencyCrmArgs = {
  input: SendActivateAgencyCrmInput;
};

export type MutationSendActivationEmailToAgencyArgs = {
  agencyId: Scalars['ID']['input'];
};

export type MutationSendAgencyOnboardingEmailArgs = {
  agencyId: Scalars['ID']['input'];
  code: Scalars['String']['input'];
};

export type MutationSendAgentForgotPasswordCodeByEmailArgs = {
  agentId: Scalars['ID']['input'];
};

export type MutationSendAgentFromSignUpEmailArgs = {
  input: SendAgentFromSignUpEmailInput;
};

export type MutationSendAgentPropertyInspectionUrlArgs = {
  input: SendAgentPropertyInspectionUrlInput;
};

export type MutationSendBrokerInviteArgs = {
  input: SendBrokerInviteInput;
};

export type MutationSendBuyerInviteeReminderArgs = {
  buyerInviteeId: Scalars['ID']['input'];
};

export type MutationSendConsumerFriendRequestArgs = {
  consumerId: Scalars['ID']['input'];
};

export type MutationSendCrmAuthorizationEmailArgs = {
  agencyCrmId: Scalars['ID']['input'];
};

export type MutationSendDeveloperForgotPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationSendEmailArgs = {
  input: SendEmailInput;
};

export type MutationSendEmailFromPrePortalPreRegisterArgs = {
  input: SendEmailFromPrePortalPreRegisterInput;
};

export type MutationSendEmailShortlistToBuyerArgs = {
  input: SendEmailShortlistToBuyerInput;
};

export type MutationSendEmailSupportArgs = {
  message: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type MutationSendHomeLoansApplicationArgs = {
  input: HomeLoansApplicationInput;
};

export type MutationSendHomeLoansCalculatorArgs = {
  input: HomeLoansCalculatorInput;
};

export type MutationSendHomeOwnerAgentLoginOtpBySmsArgs = {
  agentUuid: Scalars['ID']['input'];
};

export type MutationSendHomeOwnerBrokerLoginOtpByEmailArgs = {
  brokerUuid: Scalars['ID']['input'];
};

export type MutationSendHomeOwnerBrokerLoginOtpBySmsArgs = {
  brokerUuid: Scalars['ID']['input'];
};

export type MutationSendHomeOwnerMobileNumberOtpArgs = {
  mobileNumber: Scalars['String']['input'];
  mobileNumberCountryCode: Scalars['Int']['input'];
};

export type MutationSendPlatformAgentOtpArgs = {
  input: SendPlatformAgentOtpInput;
};

export type MutationSendRealtyLiveAgentForgotPasswordCodeByEmailArgs = {
  agentId: Scalars['ID']['input'];
};

export type MutationSendRealtyLiveAgentLoginOtpBySmsArgs = {
  agentUuid: Scalars['ID']['input'];
};

export type MutationSendRealtyLiveInviteAgentEmailArgs = {
  input: SendRealtyLiveInviteAgentEmailInput;
};

export type MutationSendRealtyLiveWelcomeEmailArgs = {
  agentId: Scalars['ID']['input'];
};

export type MutationSendRealtyMobileNumberOtpArgs = {
  mobileNumber: Scalars['String']['input'];
  mobileNumberCountryCode: Scalars['Int']['input'];
};

export type MutationSendUpdatedPropertyNotificationArgs = {
  input: UpdatedPropertyNotificationInput;
};

export type MutationSendVerifyDeveloperEmailArgs = {
  developerId: Scalars['ID']['input'];
};

export type MutationSendWebinarBuildBrandDetailsArgs = {
  input: SendWebinarBuildBrandDetailsInput;
};

export type MutationSetHeroArgs = {
  id: Scalars['ID']['input'];
  isHero?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationSetOfficialArgs = {
  consumerPageId: Scalars['ID']['input'];
};

export type MutationSetUnOfficialArgs = {
  consumerPageId: Scalars['ID']['input'];
};

export type MutationShareEventArgs = {
  input?: InputMaybe<CreateEventConsumerShareInput>;
};

export type MutationSoftDeleteAgentArgs = {
  agentId: Scalars['ID']['input'];
};

export type MutationSoftDeleteBrokerArgs = {
  brokerId: Scalars['ID']['input'];
};

export type MutationStartPropertyLiveStreamArgs = {
  uuid: Scalars['ID']['input'];
};

export type MutationStopPropertyLiveStreamArgs = {
  uuid: Scalars['ID']['input'];
};

export type MutationTrackEventArgs = {
  input: TrackEventInput;
};

export type MutationTrackPageViewArgs = {
  input: TrackPageViewInput;
};

export type MutationTypingArgs = {
  senderId: Scalars['ID']['input'];
  uniqueId: Scalars['ID']['input'];
};

export type MutationUnFollowConsumerArgs = {
  consumerId: Scalars['ID']['input'];
};

export type MutationUndoDeleteAgencyArgs = {
  agencyId: Scalars['ID']['input'];
};

export type MutationUndoDeletePlatformAgentArgs = {
  platformAgentId: Scalars['ID']['input'];
};

export type MutationUndoSoftDeleteAgentArgs = {
  agentId: Scalars['ID']['input'];
};

export type MutationUnheartPropertyFromConsumerArgs = {
  propertyId: Scalars['ID']['input'];
};

export type MutationUnhidePropertyArgs = {
  consumerId?: InputMaybe<Scalars['ID']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationUnlikeEventArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationUnlockAgentBriefPropertyArgs = {
  input: UnlockAgentBriefProperty;
};

export type MutationUnlockAgentBriefPropertyByInAppPurchaseArgs = {
  input: UnlockAgentBriefPropertyByInAppPurchase;
};

export type MutationUnlockAllAgentBriefByInAppPurchaseArgs = {
  input: UnlockAgentBriefByInAppPurchase;
};

export type MutationUnlockAllAgentBriefPropertyArgs = {
  input: UnlockAgentBrief;
};

export type MutationUpdateAdminUserArgs = {
  input: UpdateAdminUserInput;
};

export type MutationUpdateAdminUserStatusArgs = {
  id: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationUpdateAgencyArgs = {
  input: UpdateAgencyInput;
};

export type MutationUpdateAgencyAboutMeArgs = {
  aboutUs?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateAgencyAssetsArgs = {
  input: UpdateAgencyAssetsInput;
};

export type MutationUpdateAgencyCrmArgs = {
  input: UpdateAgencyCrmInput;
};

export type MutationUpdateAgencyCrmActiveStatusArgs = {
  agencyCrmId: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
};

export type MutationUpdateAgencyEmailArgs = {
  agencyId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};

export type MutationUpdateAgencyGroupArgs = {
  input: UpdateAgencyGroupInput;
};

export type MutationUpdateAgencyGroupPasswordArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};

export type MutationUpdateAgencySitemapArgs = {
  input: CreateAgencySitemapInput;
};

export type MutationUpdateAgencyThemeArgs = {
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateAgentArgs = {
  input: UpdateAgentInput;
};

export type MutationUpdateAgentBillingCardArgs = {
  input: AgentBillingCardInput;
};

export type MutationUpdateAgentBriefArgs = {
  input: CreateAgentBriefInput;
};

export type MutationUpdateAgentBriefProgressBoardArgs = {
  input: UpdateAgentBriefProgressBoardInput;
};

export type MutationUpdateAgentBriefPropertyAlertToReadStatusArgs = {
  agentBriefPropertyUuid: Scalars['ID']['input'];
};

export type MutationUpdateAgentBriefStatusArgs = {
  id: Scalars['ID']['input'];
  status: BriefStatus;
};

export type MutationUpdateAgentBuyerTransactionStatusArgs = {
  id: Scalars['ID']['input'];
  status: TransactionStatus;
};

export type MutationUpdateAgentContactArgs = {
  input: UpdateAgentContactInput;
};

export type MutationUpdateAgentContentArgs = {
  input: AgentContentInput;
};

export type MutationUpdateAgentFbIntegrationArgs = {
  input?: InputMaybe<UpdateAgentFbIntegrationInput>;
};

export type MutationUpdateAgentFromSignUpArgs = {
  input: UpdateAgentFromSignUpInput;
};

export type MutationUpdateAgentInstagramActiveStatusArgs = {
  input: UpdateAgentInstagramActiveStatus;
};

export type MutationUpdateAgentMobileArgs = {
  input: UpdateAgentMobileInput;
};

export type MutationUpdateAgentOfferOrderArgs = {
  id: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
};

export type MutationUpdateAgentOfferProgressArgs = {
  id: Scalars['ID']['input'];
  status: AgentOfferProgressStatus;
};

export type MutationUpdateAgentOfferReadStatusArgs = {
  agentOfferUuid: Scalars['ID']['input'];
  hasRead: Scalars['Boolean']['input'];
};

export type MutationUpdateAgentOrderArgs = {
  agencyId: Scalars['ID']['input'];
  agents: Array<Scalars['ID']['input']>;
};

export type MutationUpdateAgentPlusSubscriptionArgs = {
  input: UpdateAgentPlusSubscriptionInput;
};

export type MutationUpdateAgentPropertyInspectionArgs = {
  input: UpdateAgentPropertyInspectionInput;
};

export type MutationUpdateAgentPropertyShortlistProgressArgs = {
  input: UpdateAgentPropertyShortlistProgressInput;
};

export type MutationUpdateAgentRmaIntegrationArgs = {
  input: UpdateRmaAgentIntegrationInput;
};

export type MutationUpdateAgentThemeArgs = {
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateAlgoliaAgentIndexArgs = {
  hours?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationUpdateAlgoliaPropertyDiscoverIndexArgs = {
  hours?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationUpdateAlgoliaPropertyIndexArgs = {
  hours?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationUpdateAllAgentBriefPropertyToReadStatusArgs = {
  agentBriefUuid: Scalars['ID']['input'];
};

export type MutationUpdateAppVersionByNameArgs = {
  name: Scalars['String']['input'];
  version: Scalars['String']['input'];
};

export type MutationUpdateAutoPostArgs = {
  integrationId: Scalars['ID']['input'];
  isAutoPost: Scalars['Boolean']['input'];
};

export type MutationUpdateBillingCardArgs = {
  input: AgencyBillingCardInput;
};

export type MutationUpdateBrokerArgs = {
  input: UpdateBrokerInput;
};

export type MutationUpdateBrokerAwardArgs = {
  input: UpdateBrokerAwardInput;
};

export type MutationUpdateBrokerCertificateArgs = {
  input: UpdateBrokerCertificateInput;
};

export type MutationUpdateBrokerHeaderColorArgs = {
  brokerId: Scalars['String']['input'];
  headerColor: Scalars['String']['input'];
};

export type MutationUpdateBrokerLogoArgs = {
  input: UpdateBrokerLogoInput;
};

export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput;
};

export type MutationUpdateCollectionNameArgs = {
  input?: InputMaybe<UpdateCollectionNameInput>;
};

export type MutationUpdateConsumerArgs = {
  input: UpdateConsumerInput;
};

export type MutationUpdateConsumerAlertArgs = {
  input: UpdateConsumerAlertInput;
};

export type MutationUpdateConsumerPageArgs = {
  input: UpdateConsumerPageInput;
};

export type MutationUpdateCounterAlgoliaPropertyDiscoverIndexArgs = {
  hours?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationUpdateCrmArgs = {
  input: UpdateCrmInput;
};

export type MutationUpdateCrmStatusArgs = {
  input: UpdateCrmStatusInput;
};

export type MutationUpdateCustomerStripeInfoArgs = {
  input: AgentStripeCustomerInput;
};

export type MutationUpdateDeveloperArgs = {
  input: UpdateDeveloperInput;
};

export type MutationUpdateDeveloperIsPublishedStatusArgs = {
  isPublished: Scalars['Boolean']['input'];
  uuid: Scalars['ID']['input'];
};

export type MutationUpdateDeveloperProjectArgs = {
  input: UpdateDeveloperProjectInput;
};

export type MutationUpdateDeveloperProjectAboutSuburbArgs = {
  input: UpdateDeveloperProjectAboutSuburb;
};

export type MutationUpdateDeveloperProjectLogoArgs = {
  logoUrl: Scalars['String']['input'];
  uuid: Scalars['ID']['input'];
};

export type MutationUpdateDeveloperProjectObjectAsMainArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUpdateDeveloperProjectPropertyArgs = {
  input: UpdateDeveloperPropertyInput;
};

export type MutationUpdateDomainIntegrationConfigurationArgs = {
  input?: InputMaybe<UpdateDomainIntegrationConfigurationInput>;
};

export type MutationUpdateFacebookGroupPageArgs = {
  input: UpdateFacebookGroupPageInput;
};

export type MutationUpdateFacebookPageArgs = {
  input: UpdateFacebookPageInput;
};

export type MutationUpdateFacebookPagePortalArgs = {
  input: UpdateFacebookPagePortalInput;
};

export type MutationUpdateFbIntegrationArgs = {
  input?: InputMaybe<UpdateAgencyFbIntegrationInput>;
};

export type MutationUpdateForgottenDeveloperPasswordArgs = {
  code: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type MutationUpdateHeroArgs = {
  input: UpdateHeroInput;
};

export type MutationUpdateHoAgentBriefArgs = {
  agentBriefId: Scalars['ID']['input'];
  suburbsOfInterest: Array<Scalars['ID']['input']>;
};

export type MutationUpdateLocationArgs = {
  input: UpdateLocationInput;
};

export type MutationUpdateOfiTimeArgs = {
  ofiTimes?: InputMaybe<Array<InputMaybe<OfiTimes>>>;
  propertyId: Scalars['ID']['input'];
};

export type MutationUpdatePlatformAgentArgs = {
  input: UpdatePlatformAgentInput;
};

export type MutationUpdatePlatformAgentBillingCardArgs = {
  input: PlatformAgentBillingCardInput;
};

export type MutationUpdatePlatformAgentContentArgs = {
  input: UpdatePlatformAgentContentInput;
};

export type MutationUpdatePlatformAgentEnquiryToReadStatusArgs = {
  platformAgentEnquiryId: Scalars['ID']['input'];
};

export type MutationUpdatePlatformAgentFacebookActiveStatusArgs = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  platformAgentFacebookId: Scalars['ID']['input'];
};

export type MutationUpdatePlatformAgentFavIconArgs = {
  input: UpdatePlatformAgentFavIconInput;
};

export type MutationUpdatePlatformAgentInstagramActiveStatusArgs = {
  input: UpdatePlatformAgentInstagramActiveStatusInput;
};

export type MutationUpdatePlatformAgentIsLoginUsingMobileArgs = {
  input: UpdatePlatformAgentIsLoginUsingMobileInput;
};

export type MutationUpdatePlatformAgentLogoArgs = {
  input: UpdatePlatformAgentLogoInput;
};

export type MutationUpdatePlatformAgentNexuSuburbSlugArgs = {
  input: UpdatePlatformAgentNexuSuburbSlug;
};

export type MutationUpdatePlatformAgentReviewsUrlArgs = {
  input: UpdatePlatformAgentReviewsUrlInput;
};

export type MutationUpdatePlatformAgentSeoImageArgs = {
  input: UpdatePlatformAgentSeoImageInput;
};

export type MutationUpdatePlatformAgentSubscriptionArgs = {
  input: UpdatePlatformAgentSubscriptionInput;
};

export type MutationUpdatePlatformAgentSuburbArgs = {
  input: UpdatePlatformAgentSuburbInput;
};

export type MutationUpdatePostEventArgs = {
  input: UpdatePostEventInput;
};

export type MutationUpdatePropertyArgs = {
  input: UpdatePropertyInput;
};

export type MutationUpdatePropertyActiveStatusArgs = {
  isActive: Scalars['Boolean']['input'];
  propertyId: Scalars['ID']['input'];
};

export type MutationUpdatePropertyEnquiryReadStatusArgs = {
  hasRead: Scalars['Boolean']['input'];
  propertyEnquiryId: Scalars['ID']['input'];
};

export type MutationUpdatePropertyFeaturesArgs = {
  input: UpdatePropertyFeaturesInput;
};

export type MutationUpdatePropertyLinksArgs = {
  input: UpdatePropertyLinksInput;
};

export type MutationUpdatePropertyLiveStreamArgs = {
  input: UpdatePropertyLiveStreamInput;
};

export type MutationUpdatePropertyPromotionGroupActiveStatusArgs = {
  id: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
};

export type MutationUpdatePropertyShowArgs = {
  input: UpdatePropertyShowInput;
};

export type MutationUpdateSitemapArgs = {
  input: UpdateSitemapInput;
};

export type MutationUpdateSocialPostArgs = {
  input: UpdateSocialPostInput;
};

export type MutationUpdateTopicMemberStatusArgs = {
  memberId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationUpdateTopicMessageStatusArgs = {
  topicId: Scalars['ID']['input'];
  topicMessageId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationUpdateUpgradeAgencyReachSubscriptionArgs = {
  input: UpdateUpgradeAgencyReachSubscriptionInput;
};

export type MutationUpgradeAgencyAccountArgs = {
  input: UpgradeAgencyInput;
};

export type MutationUpgradeAgencyPackageWithAgencyUpdateArgs = {
  input: UpgradeAgencyPackageWithAgencyUpdateInput;
};

export type MutationUpgradeAgentPackageWithSuburbArgs = {
  input: UpgradeAgentPackageWithSuburbInput;
};

export type MutationUpgradeBrokerRealtimeAlertsArgs = {
  input: UpgradeBrokerRealtimeAlertsInput;
};

export type MutationUpgradeDeveloperProjectSubscriptionArgs = {
  input: UpgradeDeveloperProjectSubscriptionInput;
};

export type MutationUpgradeHomeownerBrokerArgs = {
  input: UpgradeHomeownerBrokerInput;
};

export type MutationUpgradePlatformAgentSubscriptionArgs = {
  input: UpgradePlatformAgentSubscriptionInput;
};

export type MutationUpgradePropertyArgs = {
  input: UpgradePropertyInput;
};

export type MutationUploadAgencyLogoArgs = {
  agencyId: Scalars['ID']['input'];
  file: Scalars['Upload']['input'];
};

export type MutationUploadChatImageArgs = {
  file: Scalars['Upload']['input'];
};

export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
  filePath?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUploadImageArgs = {
  file: Scalars['Upload']['input'];
};

export type MutationUploadListingToDomainArgs = {
  propertyId: Scalars['ID']['input'];
};

export type MutationUploadPlatformAgentContentImageArgs = {
  input: UploadPlatformAgentContentImageInput;
};

export type MutationUploadPostImageArgs = {
  file: Scalars['Upload']['input'];
};

export type MutationUploadPropertyAudioArgs = {
  file: Scalars['Upload']['input'];
  propertyId: Scalars['ID']['input'];
};

export type MutationUploadPropertyDocumentArgs = {
  input: UploadPropertyDocumentsInput;
};

export type MutationUploadPropertyObjectArgs = {
  file: Scalars['Upload']['input'];
  objectKey?: InputMaybe<Scalars['String']['input']>;
  objectType?: InputMaybe<PropertyObjectType>;
  propertyId: Scalars['ID']['input'];
};

export type MutationUploadVideoArgs = {
  file: Scalars['Upload']['input'];
};

export type MutationVerifyAgencyArgs = {
  input: CreateAgencyVerificationInput;
};

export type MutationVerifyAgencyNewPasswordArgs = {
  newPassword: Scalars['String']['input'];
  verificationKey: Scalars['String']['input'];
};

export type MutationVerifyAgentForgotPasswordCodeArgs = {
  code: Scalars['String']['input'];
  hashedCode: Scalars['String']['input'];
};

export type MutationVerifyAgentNewPasswordArgs = {
  newPassword: Scalars['String']['input'];
  verificationKey: Scalars['String']['input'];
};

export type MutationVerifyBrokerArgs = {
  verificationKey: Scalars['String']['input'];
};

export type MutationVerifyBrokerNewPasswordArgs = {
  newPassword: Scalars['String']['input'];
  verificationKey: Scalars['String']['input'];
};

export type MutationVerifyConsumerArgs = {
  verificationKey: Scalars['String']['input'];
};

export type MutationVerifyConsumerNewPasswordArgs = {
  newPassword: Scalars['String']['input'];
  verificationKey: Scalars['String']['input'];
};

export type MutationVerifyDeveloperEmailArgs = {
  key: Scalars['String']['input'];
};

export type MutationVerifyFbIntegrationArgs = {
  integrationId: Scalars['ID']['input'];
};

export type MutationVerifyMobileNumberOtpArgs = {
  hashedCode: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type MutationVerifyPlatformAgentOtpArgs = {
  input: VerifyPlatformAgentOtpInput;
};

export type NameCountPercentageMap = {
  __typename?: 'NameCountPercentageMap';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type NearbySchoolsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mapLocation: MapLocationFilter;
  type?: InputMaybe<SchoolType>;
};

export type NearestPropertiesConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<PropertyGroup>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mapLocation: MapLocationFilter;
};

export type NearestPropertyShowConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<PropertyGroup>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mapLocation: MapLocationFilter;
};

export type NexuAggregateMetrics = {
  __typename?: 'NexuAggregateMetrics';
  count?: Maybe<Scalars['Int']['output']>;
  disclaimer?: Maybe<Scalars['String']['output']>;
  discountMedian?: Maybe<Scalars['Float']['output']>;
  domMedian?: Maybe<Scalars['Int']['output']>;
  iqr?: Maybe<Scalars['Int']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  mean?: Maybe<Scalars['Int']['output']>;
  median?: Maybe<Scalars['Int']['output']>;
  medianGrowth?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  pageViewsMedian?: Maybe<Scalars['Int']['output']>;
  q1?: Maybe<Scalars['Int']['output']>;
  q3?: Maybe<Scalars['Int']['output']>;
};

export type NexuData = {
  __typename?: 'NexuData';
  marketEventSales?: Maybe<Array<Maybe<NexuMarketEventSearchResult>>>;
  propertiesSuggest?: Maybe<NexuPropertiesSuggestResult>;
  property?: Maybe<NexuProperty>;
  suburb?: Maybe<NexuSuburb>;
  suburbsSuggest?: Maybe<NexuSuburbsSuggestResult>;
};

export type NexuDataMarketEventSalesArgs = {
  params: NexuMarketEventSearchParams;
};

export type NexuDataPropertiesSuggestArgs = {
  params?: InputMaybe<NexuPropertiesSuggestParams>;
};

export type NexuDataPropertyArgs = {
  id: Scalars['ID']['input'];
};

export type NexuDataSuburbArgs = {
  slug: Scalars['ID']['input'];
};

export type NexuDataSuburbsSuggestArgs = {
  params: NexuSuburbsSuggestParams;
};

export type NexuHazards = {
  __typename?: 'NexuHazards';
  biodiversityRisk?: Maybe<Scalars['Int']['output']>;
  bushfire?: Maybe<Scalars['String']['output']>;
  bushfireRisk?: Maybe<Scalars['Int']['output']>;
  flooding?: Maybe<Scalars['String']['output']>;
  floodingRisk?: Maybe<Scalars['Int']['output']>;
  heritageRisk?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  landslide?: Maybe<Scalars['String']['output']>;
  landslideRisk?: Maybe<Scalars['Int']['output']>;
};

export type NexuHeritage = {
  __typename?: 'NexuHeritage';
  heritage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type NexuInvestmentMetrics = {
  __typename?: 'NexuInvestmentMetrics';
  auctionClearanceRate?: Maybe<Scalars['Float']['output']>;
  marketAbsorptionRate?: Maybe<Scalars['Float']['output']>;
  newListings?: Maybe<Scalars['Int']['output']>;
  newRentals?: Maybe<Scalars['Int']['output']>;
  stockOnMarket?: Maybe<Scalars['Float']['output']>;
  vacancyRate?: Maybe<Scalars['Float']['output']>;
  yieldMean?: Maybe<Scalars['Float']['output']>;
  yieldMedian?: Maybe<Scalars['Float']['output']>;
};

export type NexuLandDetails = {
  __typename?: 'NexuLandDetails';
  area?: Maybe<NexuMeasurementFloat>;
  frontage?: Maybe<NexuMeasurementFloat>;
  lotCount?: Maybe<Scalars['Int']['output']>;
};

export type NexuLotSize = {
  __typename?: 'NexuLotSize';
  heritage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type NexuMarketEventSearchParams = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type NexuMarketEventSearchResult = {
  __typename?: 'NexuMarketEventSearchResult';
  address?: Maybe<Scalars['String']['output']>;
  bathrooms?: Maybe<Scalars['Int']['output']>;
  bedrooms?: Maybe<Scalars['Int']['output']>;
  garages?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  mainImage?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
};

export type NexuMatchProperty = {
  __typename?: 'NexuMatchProperty';
  property: NexuProperty;
  score: Scalars['Float']['output'];
};

export type NexuMatchSuburb = {
  __typename?: 'NexuMatchSuburb';
  score: Scalars['Float']['output'];
  suburb: NexuSuburb;
};

export type NexuMeasurementFloat = {
  __typename?: 'NexuMeasurementFloat';
  display?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type NexuPropertiesSuggestParams = {
  address: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  propertyType?: InputMaybe<Scalars['String']['input']>;
};

export type NexuPropertiesSuggestResult = {
  __typename?: 'NexuPropertiesSuggestResult';
  results: Array<Maybe<NexuMatchProperty>>;
  totalCount: Scalars['Int']['output'];
};

export type NexuProperty = {
  __typename?: 'NexuProperty';
  address?: Maybe<NexuPropertyAddress>;
  bathrooms?: Maybe<Scalars['Int']['output']>;
  bedrooms?: Maybe<Scalars['Int']['output']>;
  garages?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<NexuPropertyImage>>>;
  landDetails?: Maybe<NexuLandDetails>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  planningInfo?: Maybe<NexuPropertyPlanningInfo>;
  propertyCategory?: Maybe<Scalars['String']['output']>;
  propertyType?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<NexuSuburb>;
};

export type NexuPropertyAddress = {
  __typename?: 'NexuPropertyAddress';
  full?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  locality?: Maybe<Scalars['String']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
};

export type NexuPropertyImage = {
  __typename?: 'NexuPropertyImage';
  format?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type NexuPropertyPlanningInfo = {
  __typename?: 'NexuPropertyPlanningInfo';
  hazards?: Maybe<NexuHazards>;
  heritage?: Maybe<NexuHeritage>;
  id: Scalars['ID']['output'];
  lga?: Maybe<Scalars['String']['output']>;
};

export type NexuSuburb = {
  __typename?: 'NexuSuburb';
  demographics?: Maybe<NexuSuburbDemographics>;
  id: Scalars['ID']['output'];
  location?: Maybe<LatLng>;
  pid?: Maybe<Scalars['ID']['output']>;
  postcode?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<NexuSuburbStatistics>;
  suburb?: Maybe<Scalars['String']['output']>;
  timeSeriesListingCountStatistics?: Maybe<Array<Maybe<NexuSuburbTimeSeriesStatistics>>>;
};

export type NexuSuburbTimeSeriesListingCountStatisticsArgs = {
  options?: InputMaybe<TimeSeriesListingCountOptions>;
};

export type NexuSuburbByBedroomsStatistics = {
  __typename?: 'NexuSuburbByBedroomsStatistics';
  b1?: Maybe<NexuSuburbPropertyTypeStatistics>;
  b2?: Maybe<NexuSuburbPropertyTypeStatistics>;
  b3?: Maybe<NexuSuburbPropertyTypeStatistics>;
  b4?: Maybe<NexuSuburbPropertyTypeStatistics>;
  b5?: Maybe<NexuSuburbPropertyTypeStatistics>;
};

export type NexuSuburbDemographics = {
  __typename?: 'NexuSuburbDemographics';
  disclaimer?: Maybe<Scalars['String']['output']>;
  housing?: Maybe<NexuSuburbHousing>;
  id: Scalars['ID']['output'];
  month?: Maybe<Scalars['String']['output']>;
  population?: Maybe<NexuSuburbPopulation>;
};

export type NexuSuburbHousing = {
  __typename?: 'NexuSuburbHousing';
  house?: Maybe<NexuSuburbPropertyType>;
  totalPrivateDwellings?: Maybe<Scalars['Int']['output']>;
  unit?: Maybe<NexuSuburbPropertyType>;
};

export type NexuSuburbPopulation = {
  __typename?: 'NexuSuburbPopulation';
  age0to4Years?: Maybe<Scalars['Int']['output']>;
  age5to19Years?: Maybe<Scalars['Int']['output']>;
  age20to24Years?: Maybe<Scalars['Int']['output']>;
  age25to34Years?: Maybe<Scalars['Int']['output']>;
  age35to44Years?: Maybe<Scalars['Int']['output']>;
  age45to64Years?: Maybe<Scalars['Int']['output']>;
  age65OrOverYears?: Maybe<Scalars['Int']['output']>;
  medianHouseholdIncomeWeekly?: Maybe<Scalars['Int']['output']>;
  medianMortgageRepayMonthly?: Maybe<Scalars['Int']['output']>;
  medianRentWeekly?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type NexuSuburbPropertyType = {
  __typename?: 'NexuSuburbPropertyType';
  count?: Maybe<Scalars['Int']['output']>;
  ownedRatio?: Maybe<Scalars['Float']['output']>;
  rentedRatio?: Maybe<Scalars['Float']['output']>;
};

export type NexuSuburbPropertyTypeStatistics = {
  __typename?: 'NexuSuburbPropertyTypeStatistics';
  forRent?: Maybe<NexuAggregateMetrics>;
  forSale?: Maybe<NexuAggregateMetrics>;
  investment?: Maybe<NexuInvestmentMetrics>;
  leased?: Maybe<NexuAggregateMetrics>;
  propertyType?: Maybe<Scalars['String']['output']>;
  sold?: Maybe<NexuAggregateMetrics>;
};

export type NexuSuburbStatistics = {
  __typename?: 'NexuSuburbStatistics';
  bedrooms?: Maybe<NexuSuburbStatisticsBedrooms>;
  highestSoldListingInLast30Days?: Maybe<SoldListingPriceAddressInfo>;
  house?: Maybe<NexuSuburbPropertyTypeStatistics>;
  lowestSoldListingInLast30Days?: Maybe<SoldListingPriceAddressInfo>;
  newListingCountInLast30Days?: Maybe<Scalars['Int']['output']>;
  soldCountInLast30Days?: Maybe<Scalars['Int']['output']>;
  unit?: Maybe<NexuSuburbPropertyTypeStatistics>;
};

export type NexuSuburbStatisticsBedrooms = {
  __typename?: 'NexuSuburbStatisticsBedrooms';
  house?: Maybe<NexuSuburbByBedroomsStatistics>;
  unit?: Maybe<NexuSuburbByBedroomsStatistics>;
};

export type NexuSuburbTimeSeriesStatistics = {
  __typename?: 'NexuSuburbTimeSeriesStatistics';
  dataSeries?: Maybe<Array<Maybe<DataSeries>>>;
  label?: Maybe<Scalars['String']['output']>;
  periods?: Maybe<Periods>;
  type?: Maybe<Scalars['String']['output']>;
};

export type NexuSuburbs = {
  __typename?: 'NexuSuburbs';
  match?: Maybe<NexuSuburb>;
  score?: Maybe<Scalars['Float']['output']>;
};

export type NexuSuburbsSuggestParams = {
  latLng?: InputMaybe<LatLngInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};

export type NexuSuburbsSuggestResult = {
  __typename?: 'NexuSuburbsSuggestResult';
  results: Array<Maybe<NexuMatchSuburb>>;
  totalCount: Scalars['Int']['output'];
};

export type NumberRange = {
  __typename?: 'NumberRange';
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type NumberRangeInput = {
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
};

export type OfiTime = {
  __typename?: 'OfiTime';
  datesFrom?: Maybe<Scalars['NonUtcDate']['output']>;
  datesTo?: Maybe<Scalars['NonUtcDate']['output']>;
  icsData?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type OfiTimes = {
  end?: InputMaybe<Scalars['Date']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
};

export enum OtpSource {
  Login = 'LOGIN',
  Settings = 'SETTINGS',
}

export enum PackageType {
  Post = 'POST',
  Profile = 'PROFILE',
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageSession = {
  __typename?: 'PageSession';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['ID']['output'];
};

export type PercentValue = {
  __typename?: 'PercentValue';
  percent?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type PerformanceStatisticsFilter = {
  currentEndDate?: InputMaybe<Scalars['Date']['input']>;
  currentStartDate?: InputMaybe<Scalars['Date']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  selectedPostalCode?: InputMaybe<Scalars['String']['input']>;
};

export type Periods = {
  __typename?: 'Periods';
  labels?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  summary?: Maybe<Summary>;
  values?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['output']>>>>>;
};

export type PlatformAgent = {
  __typename?: 'PlatformAgent';
  address?: Maybe<Scalars['String']['output']>;
  billingCards?: Maybe<PlatformAgentStripeCustomerInfo>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  contactNumberCountryCode?: Maybe<Scalars['Int']['output']>;
  contents?: Maybe<Array<Maybe<PlatformAgentContent>>>;
  contentsByPage?: Maybe<Array<Maybe<PlatformAgentContent>>>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  enquiriesConnection?: Maybe<PlatformAgentEnquiriesConnection>;
  facebookUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  instagram?: Maybe<PlatformAgentInstagram>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isLoginUsingMobile?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latestAgent?: Maybe<Agent>;
  linkedinUrl?: Maybe<Scalars['String']['output']>;
  linkedinUsername?: Maybe<Scalars['String']['output']>;
  localFacebookPages?: Maybe<Array<Maybe<FacebookPage>>>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  mainSuburb?: Maybe<NexuSuburb>;
  nexuSuburbSlug?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  platformAgentFacebook?: Maybe<PlatformAgentFacebook>;
  platformAgentSuburbs?: Maybe<Array<Maybe<PlatformAgentSuburb>>>;
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  propertiesConnection?: Maybe<PropertiesConnection>;
  propertyByShortId?: Maybe<Property>;
  propertyFbPostsConnection?: Maybe<PropertyFbPostsConnection>;
  propertyLocations?: Maybe<Array<Maybe<Location>>>;
  propertyPromotionGroupsConnection?: Maybe<PropertyPromotionGroupsConnection>;
  redirectDate?: Maybe<Scalars['Date']['output']>;
  reviewsUrl?: Maybe<Scalars['String']['output']>;
  siteRootUrl?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<PlatformAgentStatistics>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  subscription?: Maybe<PlatformAgentSubscription>;
  suburbs?: Maybe<Array<Maybe<NexuSuburb>>>;
  tempPassword?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<PlatformAgentTheme>;
  tiktokUrl?: Maybe<Scalars['String']['output']>;
  tiktokUsername?: Maybe<Scalars['String']['output']>;
  twitterUrl?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type PlatformAgentContentsArgs = {
  names: Array<Scalars['String']['input']>;
};

export type PlatformAgentContentsByPageArgs = {
  options: ContentByPageOptionsInput;
};

export type PlatformAgentEnquiriesConnectionArgs = {
  filter?: InputMaybe<PlatformAgentEnquiriesConnectionFilter>;
};

export type PlatformAgentPropertiesConnectionArgs = {
  filter?: InputMaybe<PropertiesConnectionFilter>;
};

export type PlatformAgentPropertyByShortIdArgs = {
  shortId: Scalars['ID']['input'];
};

export type PlatformAgentPropertyFbPostsConnectionArgs = {
  filter?: InputMaybe<AgentFbPostsConnectionFilter>;
};

export type PlatformAgentPropertyLocationsArgs = {
  group?: InputMaybe<PropertyGroup>;
};

export type PlatformAgentPropertyPromotionGroupsConnectionArgs = {
  options?: InputMaybe<PropertyPromotionGroupsConnectionOptions>;
};

export type PlatformAgentSubscriptionArgs = {
  isCheckValid?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PlatformAgentAdInput = {
  adMessage?: InputMaybe<Scalars['String']['input']>;
  additionalAdSpend?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  isMonthlySpend?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PlatformAgentBillingCardInput = {
  billingCardId?: InputMaybe<Scalars['String']['input']>;
  cardholderName?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  expiredMonth?: InputMaybe<Scalars['Int']['input']>;
  expiredYear?: InputMaybe<Scalars['Int']['input']>;
  newDefaultCardId?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  streetLineTwo?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
  zipPostal?: InputMaybe<Scalars['String']['input']>;
};

export type PlatformAgentContent = {
  __typename?: 'PlatformAgentContent';
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  page: Scalars['String']['output'];
};

export type PlatformAgentDomain = {
  __typename?: 'PlatformAgentDomain';
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isPrimary: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  redirectUrl?: Maybe<Scalars['String']['output']>;
};

export type PlatformAgentEdge = {
  __typename?: 'PlatformAgentEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PlatformAgent>;
};

export type PlatformAgentEnquiriesConnection = {
  __typename?: 'PlatformAgentEnquiriesConnection';
  edges?: Maybe<Array<Maybe<PlatformAgentEnquiryEdge>>>;
  nodes?: Maybe<Array<Maybe<PlatformAgentEnquiry>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PlatformAgentEnquiriesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<PlatformAgentEnquiryGroup>;
  keyword?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  platformAgentUuid: Scalars['ID']['input'];
  type?: InputMaybe<PlatformAgentEnquiryType>;
};

export type PlatformAgentEnquiry = {
  __typename?: 'PlatformAgentEnquiry';
  appraisalNexuPropertyId?: Maybe<Scalars['ID']['output']>;
  callTimeMessage?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  contactNumberCountryCode?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  hasRead: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isAddedPropertyValue?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  nexuPropertyMainImage?: Maybe<Scalars['String']['output']>;
  platformAgent?: Maybe<PlatformAgent>;
  property?: Maybe<Property>;
  propertyAddress?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PlatformAgentEnquiryType>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type PlatformAgentEnquiryEdge = {
  __typename?: 'PlatformAgentEnquiryEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PlatformAgentEnquiry>;
};

export enum PlatformAgentEnquiryGroup {
  Appraisal = 'APPRAISAL',
  General = 'GENERAL',
  Property = 'PROPERTY',
}

export enum PlatformAgentEnquiryType {
  Appraisal = 'APPRAISAL',
  AppraisalPropensity = 'APPRAISAL_PROPENSITY',
  GeneralEnquiry = 'GENERAL_ENQUIRY',
  PropertyInformation = 'PROPERTY_INFORMATION',
  PropertyManagement = 'PROPERTY_MANAGEMENT',
  SellingProperty = 'SELLING_PROPERTY',
}

export type PlatformAgentFacebook = {
  __typename?: 'PlatformAgentFacebook';
  accessToken?: Maybe<Scalars['String']['output']>;
  accessTokenExpiryDate?: Maybe<Scalars['Date']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pageId?: Maybe<Scalars['String']['output']>;
  platformAgent?: Maybe<PlatformAgent>;
  status?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['ID']['output']>;
};

export type PlatformAgentInstagram = {
  __typename?: 'PlatformAgentInstagram';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  instagramUrl?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isIntegrated?: Maybe<Scalars['Boolean']['output']>;
  media?: Maybe<Array<Maybe<InstagramMedia>>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type PlatformAgentInstagramMediaArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type PlatformAgentStatistics = {
  __typename?: 'PlatformAgentStatistics';
  dailyEnquiriesCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyNumberCallCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyNumberRevealCount?: Maybe<Array<Maybe<DateCountMap>>>;
  forRentCount?: Maybe<Scalars['Int']['output']>;
  forSaleCount?: Maybe<Scalars['Int']['output']>;
  googleBounceRate?: Maybe<GoogleAnalytics>;
  googleEngagementRate?: Maybe<GoogleAnalytics>;
  googlePageEvents?: Maybe<GoogleAnalytics>;
  googlePageImpressions?: Maybe<GoogleAnalytics>;
  googleScreenPageViews?: Maybe<GoogleAnalytics>;
  googleScreenPageViewsPerUser?: Maybe<GoogleAnalytics>;
  googleWebsiteBounceRateTraffic?: Maybe<WebsitePageViewsTraffic>;
  googleWebsiteEngagementRateTraffic?: Maybe<WebsitePageViewsTraffic>;
  googleWebsitePageViewsTraffic?: Maybe<WebsitePageViewsTraffic>;
  googleWebsiteUniquePageViewsTraffic?: Maybe<WebsitePageViewsTraffic>;
  id: Scalars['ID']['output'];
  listingCount?: Maybe<Scalars['Int']['output']>;
  listingCountByDateRange?: Maybe<Scalars['Int']['output']>;
  soldCount?: Maybe<Scalars['Int']['output']>;
  soldCountByCategory?: Maybe<Array<Maybe<CategoryCountMap>>>;
};

export type PlatformAgentStatisticsDailyEnquiriesCountArgs = {
  input: DateRangeInput;
};

export type PlatformAgentStatisticsDailyNumberCallCountArgs = {
  input: DateRangeInput;
};

export type PlatformAgentStatisticsDailyNumberRevealCountArgs = {
  input: DateRangeInput;
};

export type PlatformAgentStatisticsForRentCountArgs = {
  numberOfMonths?: InputMaybe<Scalars['Int']['input']>;
};

export type PlatformAgentStatisticsForSaleCountArgs = {
  numberOfMonths?: InputMaybe<Scalars['Int']['input']>;
};

export type PlatformAgentStatisticsGoogleBounceRateArgs = {
  filter: DateRangeInput;
};

export type PlatformAgentStatisticsGoogleEngagementRateArgs = {
  filter: DateRangeInput;
};

export type PlatformAgentStatisticsGooglePageEventsArgs = {
  filter: DateRangeInput;
};

export type PlatformAgentStatisticsGooglePageImpressionsArgs = {
  filter: DateRangeInput;
};

export type PlatformAgentStatisticsGoogleScreenPageViewsArgs = {
  filter: DateRangeInput;
};

export type PlatformAgentStatisticsGoogleScreenPageViewsPerUserArgs = {
  filter: DateRangeInput;
};

export type PlatformAgentStatisticsGoogleWebsiteBounceRateTrafficArgs = {
  filter: DateRangeInput;
};

export type PlatformAgentStatisticsGoogleWebsiteEngagementRateTrafficArgs = {
  filter: DateRangeInput;
};

export type PlatformAgentStatisticsGoogleWebsitePageViewsTrafficArgs = {
  filter: DateRangeInput;
};

export type PlatformAgentStatisticsGoogleWebsiteUniquePageViewsTrafficArgs = {
  filter: DateRangeInput;
};

export type PlatformAgentStatisticsListingCountArgs = {
  numberOfMonths?: InputMaybe<Scalars['Int']['input']>;
};

export type PlatformAgentStatisticsListingCountByDateRangeArgs = {
  input: DateRangeInput;
};

export type PlatformAgentStatisticsSoldCountArgs = {
  numberOfMonths?: InputMaybe<Scalars['Int']['input']>;
};

export type PlatformAgentStatisticsSoldCountByCategoryArgs = {
  numberOfMonths?: InputMaybe<Scalars['Int']['input']>;
};

export type PlatformAgentStripeCustomerInfo = {
  __typename?: 'PlatformAgentStripeCustomerInfo';
  cardList?: Maybe<Array<Maybe<StripeCustomerCard>>>;
  defaultCard?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type PlatformAgentSubscription = {
  __typename?: 'PlatformAgentSubscription';
  amount?: Maybe<Scalars['Float']['output']>;
  couponCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isTrial?: Maybe<Scalars['Boolean']['output']>;
  package?: Maybe<PlatformAgentSubscriptionPackage>;
  platformAgent?: Maybe<PlatformAgent>;
  referralCode?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<PlatformAgentSubscriptionStatus>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  subscriptionPeriod?: Maybe<PlatformAgentSubscriptionPeriod>;
  suburbDataAdditionalSpend?: Maybe<Scalars['Int']['output']>;
  suburbDataAdditionalSpendIsMonthly?: Maybe<Scalars['Boolean']['output']>;
  suburbDataAdditionalSpendMonth?: Maybe<Scalars['String']['output']>;
  suburbDataImageUrl?: Maybe<Scalars['String']['output']>;
  suburbDataMessage?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export enum PlatformAgentSubscriptionPackage {
  Lite = 'LITE',
  Pro = 'PRO',
}

export enum PlatformAgentSubscriptionPeriod {
  Annual = 'ANNUAL',
  Monthly = 'MONTHLY',
}

export enum PlatformAgentSubscriptionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
}

export type PlatformAgentSuburb = {
  __typename?: 'PlatformAgentSuburb';
  id: Scalars['ID']['output'];
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Location>;
  nexuSuburbSlug?: Maybe<Scalars['String']['output']>;
  platformAgentId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stripeSubscriptionId?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type PlatformAgentSuburbsOptions = {
  platformAgentSuburbId?: InputMaybe<Scalars['String']['input']>;
};

export type PlatformAgentTheme = {
  __typename?: 'PlatformAgentTheme';
  createdAt?: Maybe<Scalars['Date']['output']>;
  fontFamily?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  primaryColor?: Maybe<Scalars['String']['output']>;
  secondaryColor?: Maybe<Scalars['String']['output']>;
  template: PlatformAgentThemeTemplate;
  textColor?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export enum PlatformAgentThemeTemplate {
  Buyer = 'BUYER',
  Noah = 'NOAH',
  Rush = 'RUSH',
}

export type PlatformAgentsConnection = {
  __typename?: 'PlatformAgentsConnection';
  edges?: Maybe<Array<Maybe<PlatformAgentEdge>>>;
  nodes?: Maybe<Array<Maybe<PlatformAgent>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PlatformAgentsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PostImage = {
  __typename?: 'PostImage';
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type PostToFacebookPageGroupInput = {
  articleLink: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['Upload']['input']>;
};

export type PostToFacebookPageInput = {
  articleLink: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['Upload']['input']>;
};

export enum PrePortalGroup {
  Curated = 'CURATED',
  Stock = 'STOCK',
}

export type ProcessAgentNameFromCsvObjectInput = {
  agent_name?: InputMaybe<Scalars['String']['input']>;
};

export type ProcessPropertyFromCsvFeatureInput = {
  airConditioning?: InputMaybe<Scalars['Boolean']['input']>;
  alarmSystem?: InputMaybe<Scalars['Boolean']['input']>;
  balcony?: InputMaybe<Scalars['Boolean']['input']>;
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  broadband?: InputMaybe<Scalars['Boolean']['input']>;
  builtInRobes?: InputMaybe<Scalars['Boolean']['input']>;
  carports?: InputMaybe<Scalars['Int']['input']>;
  courtyard?: InputMaybe<Scalars['Boolean']['input']>;
  deck?: InputMaybe<Scalars['Boolean']['input']>;
  dishwasher?: InputMaybe<Scalars['Boolean']['input']>;
  ductedCooling?: InputMaybe<Scalars['Boolean']['input']>;
  ductedHeating?: InputMaybe<Scalars['Boolean']['input']>;
  ensuite?: InputMaybe<Scalars['Int']['input']>;
  evaporativeCooling?: InputMaybe<Scalars['Boolean']['input']>;
  floorboards?: InputMaybe<Scalars['Boolean']['input']>;
  fullyFenced?: InputMaybe<Scalars['Boolean']['input']>;
  garages?: InputMaybe<Scalars['Int']['input']>;
  gasHeating?: InputMaybe<Scalars['Boolean']['input']>;
  greyWaterSystem?: InputMaybe<Scalars['Boolean']['input']>;
  gym?: InputMaybe<Scalars['Boolean']['input']>;
  hotWaterService?: InputMaybe<Scalars['Boolean']['input']>;
  hydronicHeating?: InputMaybe<Scalars['Boolean']['input']>;
  insideSpa?: InputMaybe<Scalars['Boolean']['input']>;
  intercom?: InputMaybe<Scalars['Boolean']['input']>;
  livingArea?: InputMaybe<Scalars['Int']['input']>;
  openFirePlace?: InputMaybe<Scalars['Boolean']['input']>;
  openSpaces?: InputMaybe<Scalars['Int']['input']>;
  otherFeatures?: InputMaybe<Scalars['String']['input']>;
  outdoorEnt?: InputMaybe<Scalars['Boolean']['input']>;
  outsideSpa?: InputMaybe<Scalars['Boolean']['input']>;
  payTv?: InputMaybe<Scalars['Boolean']['input']>;
  poolAboveGround?: InputMaybe<Scalars['Boolean']['input']>;
  poolInGround?: InputMaybe<Scalars['Boolean']['input']>;
  remoteGarage?: InputMaybe<Scalars['Boolean']['input']>;
  reverseCycleAircon?: InputMaybe<Scalars['Boolean']['input']>;
  rumpusRoom?: InputMaybe<Scalars['Boolean']['input']>;
  secureParking?: InputMaybe<Scalars['Boolean']['input']>;
  shed?: InputMaybe<Scalars['Boolean']['input']>;
  solarHotWater?: InputMaybe<Scalars['Boolean']['input']>;
  solarPanels?: InputMaybe<Scalars['Boolean']['input']>;
  splitsystemAircon?: InputMaybe<Scalars['Boolean']['input']>;
  splitsystemHeating?: InputMaybe<Scalars['Boolean']['input']>;
  study?: InputMaybe<Scalars['Boolean']['input']>;
  tennisCourt?: InputMaybe<Scalars['Boolean']['input']>;
  toilet?: InputMaybe<Scalars['Int']['input']>;
  vacuumSystem?: InputMaybe<Scalars['Boolean']['input']>;
  waterTank?: InputMaybe<Scalars['Boolean']['input']>;
  workshop?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProcessPropertyFromCsvInput = {
  address: Scalars['String']['input'];
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agentName?: InputMaybe<Array<InputMaybe<ProcessAgentNameFromCsvObjectInput>>>;
  category?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<ProcessPropertyFromCsvFeatureInput>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isUpdate?: InputMaybe<Scalars['Boolean']['input']>;
  landArea?: InputMaybe<Scalars['Int']['input']>;
  landAreaUnit?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  objects?: InputMaybe<Array<InputMaybe<ProcessPropertyFromCsvObjectInput>>>;
  ofiTimes?: InputMaybe<Array<InputMaybe<ProcessPropertyFromCsvOfiTimeInput>>>;
  postalCode?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  priceView?: InputMaybe<Scalars['String']['input']>;
  rentBond?: InputMaybe<Scalars['Float']['input']>;
  rentDateAvailable?: InputMaybe<Scalars['Date']['input']>;
  rentPriceMonthly?: InputMaybe<Scalars['Float']['input']>;
  rentPriceWeekly?: InputMaybe<Scalars['Float']['input']>;
  sellingPrice?: InputMaybe<Scalars['Double']['input']>;
  soldDate?: InputMaybe<Scalars['Date']['input']>;
  soldPrice?: InputMaybe<Scalars['Float']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  streetNumber?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
  videoLink?: InputMaybe<Scalars['String']['input']>;
};

export type ProcessPropertyFromCsvObjectInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PropertyObjectType>;
  url: Scalars['String']['input'];
};

export type ProcessPropertyFromCsvOfiTimeInput = {
  datesFrom?: InputMaybe<Scalars['Date']['input']>;
  datesTo?: InputMaybe<Scalars['Date']['input']>;
};

export type PromotePropertiesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fromProperty?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PromotePropertyInput = {
  couponAmount?: InputMaybe<Scalars['Float']['input']>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  finalAmount?: InputMaybe<Scalars['Float']['input']>;
  propertyId: Scalars['ID']['input'];
  startDate?: InputMaybe<Scalars['Date']['input']>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
  tier?: InputMaybe<PromotePropertyTier>;
};

export type PromotePropertyResult = {
  __typename?: 'PromotePropertyResult';
  availableTiers?: Maybe<Array<Maybe<PropertyAvailableTiers>>>;
  currentPromotion?: Maybe<PropertyTier>;
  deductions?: Maybe<Array<Maybe<PropertyTierDeductions>>>;
  errors?: Maybe<Array<Maybe<PropertyTierErrors>>>;
  item?: Maybe<PropertyTier>;
  total?: Maybe<Scalars['Float']['output']>;
};

export enum PromotePropertyTier {
  Featured_69 = 'FEATURED_69',
  Featured_99 = 'FEATURED_99',
  Highlight_199 = 'HIGHLIGHT_199',
  Premiere_499 = 'PREMIERE_499',
}

export type PromotionGroupConnection = {
  __typename?: 'PromotionGroupConnection';
  edges?: Maybe<Array<Maybe<PromotionGroupConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<PropertyPromotionGroup>>>;
  pageInfo?: Maybe<PromotionGroupConnectionPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PromotionGroupConnectionEdge = {
  __typename?: 'PromotionGroupConnectionEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PropertyPromotionGroup>;
};

export type PromotionGroupConnectionPageInfo = {
  __typename?: 'PromotionGroupConnectionPageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  numberOfPages?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
};

export type PropertiesAlertConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertiesByRegionConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mapLocation?: InputMaybe<MapLocationFilter>;
  regionId?: InputMaybe<Scalars['ID']['input']>;
};

export type PropertiesCollectionConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertiesConnection = {
  __typename?: 'PropertiesConnection';
  edges?: Maybe<Array<Maybe<PropertyEdge>>>;
  nodes?: Maybe<Array<Maybe<Property>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type PropertiesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  bathroom?: InputMaybe<NumberRangeInput>;
  bed?: InputMaybe<NumberRangeInput>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  country?: InputMaybe<LocationCountry>;
  crmIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  excludePropertyIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  fbPageId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  features?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  garage?: InputMaybe<NumberRangeInput>;
  group?: InputMaybe<PropertyGroup>;
  has3D?: InputMaybe<Scalars['Boolean']['input']>;
  hasVideo?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isBoosted?: InputMaybe<Scalars['Boolean']['input']>;
  isDuplicate?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeOffMarket?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeSurrounding?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeTestAgency?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeViewListing?: InputMaybe<Scalars['Boolean']['input']>;
  isNewConstruction?: InputMaybe<Scalars['Boolean']['input']>;
  isPrePortal?: InputMaybe<Scalars['Boolean']['input']>;
  isShortlist?: InputMaybe<Scalars['Boolean']['input']>;
  isShortlistActive?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPrePortalAndOnMarket?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  km?: InputMaybe<Scalars['Float']['input']>;
  landArea?: InputMaybe<NumberRangeInput>;
  last?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mapLocation?: InputMaybe<MapLocationFilter>;
  ofiTime?: InputMaybe<Scalars['Date']['input']>;
  ofiTimeDateRange?: InputMaybe<DateRangeInput>;
  prePortalGroup?: InputMaybe<PrePortalGroup>;
  prePortalSource?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<NumberRangeInput>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  propertyShortIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  regionId?: InputMaybe<Scalars['ID']['input']>;
  soldEndDate?: InputMaybe<Scalars['Date']['input']>;
  soldStartDate?: InputMaybe<Scalars['Date']['input']>;
  sorting?: InputMaybe<PropertiesConnectionFilterSorting>;
  source?: InputMaybe<PropertySource>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  state?: InputMaybe<PropertyStates>;
  status?: InputMaybe<Array<PropertyStatus>>;
  suburb?: InputMaybe<Scalars['String']['input']>;
  tier?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Array<PropertyType>>;
};

export enum PropertiesConnectionFilterSorting {
  DaysHighLow = 'DAYS_HIGH_LOW',
  DaysLowHigh = 'DAYS_LOW_HIGH',
  Featured = 'FEATURED',
  Newest = 'NEWEST',
  NewestByDateCreated = 'NEWEST_BY_DATE_CREATED',
  NewestByLastUpdated = 'NEWEST_BY_LAST_UPDATED',
  NewestByListingDate = 'NEWEST_BY_LISTING_DATE',
  Oldest = 'OLDEST',
  OldestByDateCreated = 'OLDEST_BY_DATE_CREATED',
  OldestById = 'OLDEST_BY_ID',
  PriceHighLow = 'PRICE_HIGH_LOW',
  PriceLowHigh = 'PRICE_LOW_HIGH',
  SalesDate = 'SALES_DATE',
}

export type PropertiesCountByCrmInput = {
  numberOfDays?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type PropertiesFbPostEdge = {
  __typename?: 'PropertiesFbPostEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PropertyFbPost>;
};

export type Property = {
  __typename?: 'Property';
  address?: Maybe<Scalars['String']['output']>;
  agency?: Maybe<Agency>;
  agencyCrm?: Maybe<AgencyCrm>;
  agentBriefsConnection?: Maybe<AgentBriefsConnection>;
  agentId?: Maybe<Scalars['String']['output']>;
  agentInspectionsConnections?: Maybe<AgentPropertyInspectionsConnection>;
  agentPropertyRequestsConnection?: Maybe<AgentPropertyRequestsConnection>;
  agents?: Maybe<Array<Maybe<Agent>>>;
  auction?: Maybe<PropertyAuction>;
  audio?: Maybe<PropertyAudio>;
  avgSuburbRentalPrice?: Maybe<Scalars['Int']['output']>;
  buildingDetailsArea?: Maybe<Scalars['Float']['output']>;
  buildingDetailsAreaUnit?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  commercialListingType?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  createdBy?: Maybe<AdminUser>;
  description?: Maybe<Scalars['String']['output']>;
  developerProject?: Maybe<DeveloperProject>;
  externalLink1?: Maybe<Scalars['String']['output']>;
  externalLink2?: Maybe<Scalars['String']['output']>;
  facebookPostsPropertyStatistics?: Maybe<FacebookPostsPropertyStatistics>;
  featured?: Maybe<PropertyFeaturedConnection>;
  featuredBroker?: Maybe<Broker>;
  featuredTier?: Maybe<PropertyFeaturedAdType>;
  features?: Maybe<PropertyFeature>;
  forRentCountInSuburb?: Maybe<Scalars['Int']['output']>;
  forSaleCountInSuburb?: Maybe<Scalars['Int']['output']>;
  has3D?: Maybe<Scalars['Boolean']['output']>;
  hasVideo?: Maybe<Scalars['Boolean']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAddedToShortlist?: Maybe<Scalars['Boolean']['output']>;
  isClaimed?: Maybe<Scalars['Boolean']['output']>;
  isDomainListed?: Maybe<Scalars['Boolean']['output']>;
  isDuplicate?: Maybe<Scalars['Boolean']['output']>;
  isFollowedByConsumer?: Maybe<Scalars['Boolean']['output']>;
  isLovedByConsumer?: Maybe<Scalars['Boolean']['output']>;
  isManual?: Maybe<Scalars['Boolean']['output']>;
  isNewConstruction?: Maybe<Scalars['Boolean']['output']>;
  isPrePortal?: Maybe<Scalars['Boolean']['output']>;
  isShowAddress?: Maybe<Scalars['Boolean']['output']>;
  isShowPrice?: Maybe<Scalars['Boolean']['output']>;
  isShowRentPriceMonthly?: Maybe<Scalars['Boolean']['output']>;
  isShowRentPriceWeekly?: Maybe<Scalars['Boolean']['output']>;
  isShowSoldPrice?: Maybe<Scalars['Boolean']['output']>;
  isUnderOffer?: Maybe<Scalars['Boolean']['output']>;
  isUpdate?: Maybe<Scalars['Boolean']['output']>;
  landArea?: Maybe<Scalars['Float']['output']>;
  landAreaUnit?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  listingDate?: Maybe<Scalars['Date']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  location?: Maybe<Location>;
  mainAgent?: Maybe<Agent>;
  mainObject?: Maybe<PropertyObject>;
  nearbySchools?: Maybe<Array<Maybe<School>>>;
  nexuProperty?: Maybe<NexuProperty>;
  objects?: Maybe<Array<Maybe<PropertyObject>>>;
  ofiTimes?: Maybe<Array<Maybe<OfiTime>>>;
  overlay?: Maybe<PropertyOverlay>;
  postalCode?: Maybe<Scalars['String']['output']>;
  prePortalGroup?: Maybe<PrePortalGroup>;
  price?: Maybe<Scalars['String']['output']>;
  priceView?: Maybe<Scalars['String']['output']>;
  promotionGroupsConnection?: Maybe<PromotionGroupConnection>;
  promotions?: Maybe<Array<Maybe<PropertyPromotionGroup>>>;
  propertyEnquiries?: Maybe<Array<Maybe<PropertyEnquiry>>>;
  propertyFbPost?: Maybe<PropertyFbPost>;
  propertyFbPosts?: Maybe<Array<Maybe<PropertyFbPost>>>;
  propertyInfo?: Maybe<PropertyInfo>;
  propertyLiveStreamsConnection?: Maybe<PropertyLiveStreamConnection>;
  propertyShow?: Maybe<PropertyShow>;
  published?: Maybe<Scalars['Boolean']['output']>;
  reaId?: Maybe<Scalars['String']['output']>;
  rentBond?: Maybe<Scalars['Float']['output']>;
  rentCountInSuburbByBed?: Maybe<Scalars['Int']['output']>;
  rentDateAvailable?: Maybe<Scalars['Date']['output']>;
  rentPriceMonthly?: Maybe<Scalars['Float']['output']>;
  rentPriceWeekly?: Maybe<Scalars['Float']['output']>;
  sellingPrice?: Maybe<Scalars['Double']['output']>;
  shortId?: Maybe<Scalars['ID']['output']>;
  slugUrl?: Maybe<Scalars['String']['output']>;
  slugUrlByShortId?: Maybe<Scalars['String']['output']>;
  slugUrlPrefix?: Maybe<Scalars['String']['output']>;
  soldCountInSuburbByBed?: Maybe<Scalars['Int']['output']>;
  soldDate?: Maybe<Scalars['Date']['output']>;
  soldPrice?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<PropertySource>;
  state?: Maybe<Scalars['String']['output']>;
  stateAddress?: Maybe<Scalars['String']['output']>;
  statementOfInformation?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<PropertyStatistics>;
  status?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  streetNumber?: Maybe<Scalars['String']['output']>;
  subNumber?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
  tier?: Maybe<FeaturedTier>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PropertyType>;
  uniqueId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['ID']['output'];
  videoLink?: Maybe<Scalars['String']['output']>;
};

export type PropertyAgentBriefsConnectionArgs = {
  options?: InputMaybe<AgentBriefsConnectionOptions>;
};

export type PropertyAgentInspectionsConnectionsArgs = {
  options?: InputMaybe<PropertyAgentPropertyInspectionsConnectionOptions>;
};

export type PropertyAgentPropertyRequestsConnectionArgs = {
  options?: InputMaybe<AgentPropertyRequestsConnectionOptions>;
};

export type PropertyFeaturedArgs = {
  filterFeatured?: InputMaybe<PropertyFeaturedConnectionFilter>;
};

export type PropertyNearbySchoolsArgs = {
  type?: InputMaybe<SchoolType>;
};

export type PropertyObjectsArgs = {
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<PropertyObjectType>;
};

export type PropertyOfiTimesArgs = {
  datesFrom?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyPromotionGroupsConnectionArgs = {
  options?: InputMaybe<PropertyPromotionGroupsConnectionOptions>;
};

export type PropertyPropertyLiveStreamsConnectionArgs = {
  options?: InputMaybe<PropertyLiveStreamsConnectionOptions>;
};

export type PropertyAddressSuggestionFilter = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export type PropertyAgentPropertyInspectionsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentBriefId?: InputMaybe<Scalars['ID']['input']>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertyAnalytics = {
  __typename?: 'PropertyAnalytics';
  address?: Maybe<Scalars['String']['output']>;
  agentClickProfileCount?: Maybe<Scalars['Int']['output']>;
  attemptAgentEnquiryCount?: Maybe<Scalars['Int']['output']>;
  propertyPageFloorplanCount?: Maybe<Scalars['Int']['output']>;
  propertyPageImageCount?: Maybe<Scalars['Int']['output']>;
  propertyPageVideoCount?: Maybe<Scalars['Int']['output']>;
  propertyPageViewCount?: Maybe<Scalars['Int']['output']>;
  searchResultPageFloorplanCount?: Maybe<Scalars['Int']['output']>;
  searchResultPageImageCount?: Maybe<Scalars['Int']['output']>;
  searchResultPageVideoCount?: Maybe<Scalars['Int']['output']>;
  searchResultsPageViewCount?: Maybe<Scalars['Int']['output']>;
};

export type PropertyAppraisalEnquiry = {
  __typename?: 'PropertyAppraisalEnquiry';
  address?: Maybe<Scalars['String']['output']>;
  agentId?: Maybe<Scalars['ID']['output']>;
  appraisal?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  contactVia?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  priceMax?: Maybe<Scalars['Float']['output']>;
  priceMin?: Maybe<Scalars['Float']['output']>;
  propertyId?: Maybe<Scalars['ID']['output']>;
  sellingTimeframe?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PropertyAppraisalEnquiryEdge = {
  __typename?: 'PropertyAppraisalEnquiryEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PropertyAppraisalEnquiry>;
};

export type PropertyAuction = {
  __typename?: 'PropertyAuction';
  auction?: Maybe<Scalars['Date']['output']>;
  auctionDate?: Maybe<Scalars['Date']['output']>;
  auctionMaxBid?: Maybe<Scalars['Float']['output']>;
  auctionResult?: Maybe<Scalars['String']['output']>;
  icsData?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type PropertyAudio = {
  __typename?: 'PropertyAudio';
  id: Scalars['ID']['output'];
  s3Key?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PropertyAvailableTiers = {
  __typename?: 'PropertyAvailableTiers';
  amount?: Maybe<Scalars['Float']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum PropertyCategory {
  Acreage = 'ACREAGE',
  AcreageSemiRural = 'ACREAGE_SEMI_RURAL',
  Alpine = 'ALPINE',
  Apartment = 'APARTMENT',
  BlockOfUnits = 'BLOCK_OF_UNITS',
  DevelopmentOpportunity = 'DEVELOPMENT_OPPORTUNITY',
  Duplex = 'DUPLEX',
  DuplexSemiDetached = 'DUPLEX_SEMI_DETACHED',
  Farm = 'FARM',
  Flat = 'FLAT',
  Holiday = 'HOLIDAY',
  House = 'HOUSE',
  HouseAndLand = 'HOUSE_AND_LAND',
  Land = 'LAND',
  LandDevelopment = 'LAND_DEVELOPMENT',
  Lifestyle = 'LIFESTYLE',
  Offices = 'OFFICES',
  Others = 'OTHERS',
  Retail = 'RETAIL',
  Retirement = 'RETIREMENT',
  Rural = 'RURAL',
  SemiDetached = 'SEMI_DETACHED',
  Studio = 'STUDIO',
  Terrace = 'TERRACE',
  TownHouse = 'TOWN_HOUSE',
  Unit = 'UNIT',
  Villa = 'VILLA',
  Warehouse = 'WAREHOUSE',
}

export type PropertyCollectionResult = {
  __typename?: 'PropertyCollectionResult';
  collection?: Maybe<ConsumerCollection>;
  property?: Maybe<Property>;
};

export type PropertyCoupon = {
  __typename?: 'PropertyCoupon';
  amountOff?: Maybe<Scalars['Float']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  discountOff?: Maybe<Scalars['Int']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  expiresAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isValid?: Maybe<Scalars['Boolean']['output']>;
  maxRedemptions?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  redemptionUsed?: Maybe<Scalars['String']['output']>;
};

export type PropertyCouponEdge = {
  __typename?: 'PropertyCouponEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PropertyCoupon>;
};

export type PropertyCouponsConnection = {
  __typename?: 'PropertyCouponsConnection';
  edges?: Maybe<Array<Maybe<PropertyCouponEdge>>>;
  nodes?: Maybe<Array<Maybe<PropertyCoupon>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type PropertyCouponsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyDocument = {
  __typename?: 'PropertyDocument';
  agentPropertyShortlist?: Maybe<AgentPropertyShortlist>;
  id: Scalars['ID']['output'];
  type?: Maybe<PropertyDocumentType>;
  url?: Maybe<Scalars['String']['output']>;
};

export enum PropertyDocumentType {
  BiddingStrategy = 'BIDDING_STRATEGY',
  Contract = 'CONTRACT',
  Inspection = 'INSPECTION',
  PestAndBuilding = 'PEST_AND_BUILDING',
}

export type PropertyDomainListing = {
  __typename?: 'PropertyDomainListing';
  id: Scalars['ID']['output'];
  listingId: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type PropertyEdge = {
  __typename?: 'PropertyEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Property>;
};

export type PropertyEnquiriesByReferrerCount = {
  __typename?: 'PropertyEnquiriesByReferrerCount';
  bing?: Maybe<Scalars['Int']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  duckduckgo?: Maybe<Scalars['Int']['output']>;
  ecoasia?: Maybe<Scalars['Int']['output']>;
  facebook?: Maybe<Scalars['Int']['output']>;
  facebookAds?: Maybe<Scalars['Int']['output']>;
  findAds?: Maybe<Scalars['Int']['output']>;
  google?: Maybe<Scalars['Int']['output']>;
  googleAds?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  others?: Maybe<Scalars['Int']['output']>;
  realty?: Maybe<Scalars['Int']['output']>;
  thribee?: Maybe<Scalars['Int']['output']>;
  trovit?: Maybe<Scalars['Int']['output']>;
  unknown?: Maybe<Scalars['Int']['output']>;
  yahoo?: Maybe<Scalars['Int']['output']>;
};

export type PropertyEnquiriesConnection = {
  __typename?: 'PropertyEnquiriesConnection';
  edges?: Maybe<Array<Maybe<PropertyEnquiryEdge>>>;
  nodes?: Maybe<Array<Maybe<PropertyEnquiry>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type PropertyEnquiriesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  buyerCity?: InputMaybe<Scalars['String']['input']>;
  buyerCountry?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  hasRead?: InputMaybe<Scalars['Boolean']['input']>;
  isSeller?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyEnquiriesConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasRead?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type PropertyEnquiry = {
  __typename?: 'PropertyEnquiry';
  agency?: Maybe<Agency>;
  agent?: Maybe<Agent>;
  agentBrief?: Maybe<AgentBrief>;
  agentBuyerTransaction?: Maybe<AgentBuyerTransaction>;
  allocatedAmount?: Maybe<Scalars['Int']['output']>;
  budget?: Maybe<Scalars['Int']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  enquiries?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  firstName?: Maybe<Scalars['String']['output']>;
  hasRead?: Maybe<Scalars['Boolean']['output']>;
  householdIncome?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ipInfo?: Maybe<IpInfo>;
  isGetBroker?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Location>;
  message?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `firstName & lastName`. */
  name?: Maybe<Scalars['String']['output']>;
  pageUrl?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  propertyAddress?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Scalars['String']['output']>;
  source?: Maybe<PropertyEnquirySource>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type PropertyEnquiryByStateCount = {
  __typename?: 'PropertyEnquiryByStateCount';
  count?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type PropertyEnquiryEdge = {
  __typename?: 'PropertyEnquiryEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PropertyEnquiry>;
};

export enum PropertyEnquiryEnquiries {
  AppraiseProperty = 'APPRAISE_PROPERTY',
  ContractSale = 'CONTRACT_SALE',
  Inspection = 'INSPECTION',
  Ofi = 'OFI',
  PriceGuide = 'PRICE_GUIDE',
  PropertySize = 'PROPERTY_SIZE',
  RentalApplication = 'RENTAL_APPLICATION',
  RentalAppraisal = 'RENTAL_APPRAISAL',
  SaleRent = 'SALE_RENT',
  SimilarProperties = 'SIMILAR_PROPERTIES',
  Tenanted = 'TENANTED',
  VideoPicture = 'VIDEO_PICTURE',
  WhenAvailable = 'WHEN_AVAILABLE',
}

export enum PropertyEnquiryEnquiriesAgency {
  ContractSale = 'CONTRACT_SALE',
  Ofi = 'OFI',
  PriceGuide = 'PRICE_GUIDE',
  PropertySize = 'PROPERTY_SIZE',
  RentalApplication = 'RENTAL_APPLICATION',
  SaleRent = 'SALE_RENT',
  SimilarProperties = 'SIMILAR_PROPERTIES',
  WhenAvailable = 'WHEN_AVAILABLE',
}

export enum PropertyEnquiryGroup {
  AgencyAppraisal = 'AGENCY_APPRAISAL',
  AgentAppraisal = 'AGENT_APPRAISAL',
  Appraisal = 'APPRAISAL',
  Rental = 'RENTAL',
  Sale = 'SALE',
  SaleAndRental = 'SALE_AND_RENTAL',
}

export enum PropertyEnquirySource {
  Agency = 'AGENCY',
  Agent = 'AGENT',
  BuyerAgent = 'BUYER_AGENT',
  Property = 'PROPERTY',
}

export enum PropertyEnquiryType {
  Land = 'LAND',
  Rental = 'RENTAL',
  Residential = 'RESIDENTIAL',
  Rural = 'RURAL',
}

export type PropertyFbPost = {
  __typename?: 'PropertyFbPost';
  createdAt?: Maybe<Scalars['Date']['output']>;
  facebookPage?: Maybe<FacebookPage>;
  id: Scalars['ID']['output'];
  isAgentPlus?: Maybe<Scalars['Boolean']['output']>;
  pageId?: Maybe<Scalars['String']['output']>;
  pageName?: Maybe<Scalars['String']['output']>;
  postId?: Maybe<Scalars['ID']['output']>;
  postUrl?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  statistics?: Maybe<PropertyFbPostStatistics>;
};

export type PropertyFbPostStatistics = {
  __typename?: 'PropertyFbPostStatistics';
  amountSpent?: Maybe<Scalars['Float']['output']>;
  campaignDuration?: Maybe<Scalars['Int']['output']>;
  engagedUsers?: Maybe<Scalars['Int']['output']>;
  engagement?: Maybe<Scalars['Int']['output']>;
  engagements?: Maybe<Engagements>;
  id: Scalars['ID']['output'];
  reach?: Maybe<Scalars['Int']['output']>;
  shares?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type PropertyFbPostsConnection = {
  __typename?: 'PropertyFbPostsConnection';
  edges?: Maybe<Array<Maybe<PropertiesFbPostEdge>>>;
  nodes?: Maybe<Array<Maybe<PropertyFbPost>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type PropertyFbPostsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertyFeature = {
  __typename?: 'PropertyFeature';
  airConditioning?: Maybe<Scalars['Boolean']['output']>;
  alarmSystem?: Maybe<Scalars['Boolean']['output']>;
  balcony?: Maybe<Scalars['Boolean']['output']>;
  bathrooms?: Maybe<Scalars['Int']['output']>;
  bedrooms?: Maybe<Scalars['Int']['output']>;
  broadband?: Maybe<Scalars['Boolean']['output']>;
  builtInRobes?: Maybe<Scalars['Boolean']['output']>;
  carports?: Maybe<Scalars['Int']['output']>;
  courtyard?: Maybe<Scalars['Boolean']['output']>;
  deck?: Maybe<Scalars['Boolean']['output']>;
  dishwasher?: Maybe<Scalars['Boolean']['output']>;
  ductedCooling?: Maybe<Scalars['Boolean']['output']>;
  ductedHeating?: Maybe<Scalars['Boolean']['output']>;
  ensuite?: Maybe<Scalars['Int']['output']>;
  evaporativeCooling?: Maybe<Scalars['Boolean']['output']>;
  floorboards?: Maybe<Scalars['Boolean']['output']>;
  fullyFenced?: Maybe<Scalars['Boolean']['output']>;
  garages?: Maybe<Scalars['Int']['output']>;
  gasHeating?: Maybe<Scalars['Boolean']['output']>;
  greyWaterSystem?: Maybe<Scalars['Boolean']['output']>;
  gym?: Maybe<Scalars['Boolean']['output']>;
  hotWaterService?: Maybe<Scalars['Boolean']['output']>;
  hydronicHeating?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  insideSpa?: Maybe<Scalars['Boolean']['output']>;
  intercom?: Maybe<Scalars['Boolean']['output']>;
  livingArea?: Maybe<Scalars['Int']['output']>;
  openFirePlace?: Maybe<Scalars['Boolean']['output']>;
  openSpaces?: Maybe<Scalars['Int']['output']>;
  otherFeatures?: Maybe<Scalars['String']['output']>;
  outdoorEnt?: Maybe<Scalars['Boolean']['output']>;
  outsideSpa?: Maybe<Scalars['Boolean']['output']>;
  payTv?: Maybe<Scalars['Boolean']['output']>;
  poolAboveGround?: Maybe<Scalars['Boolean']['output']>;
  poolInGround?: Maybe<Scalars['Boolean']['output']>;
  remoteGarage?: Maybe<Scalars['Boolean']['output']>;
  reverseCycleAircon?: Maybe<Scalars['Boolean']['output']>;
  rumpusRoom?: Maybe<Scalars['Boolean']['output']>;
  secureParking?: Maybe<Scalars['Boolean']['output']>;
  shed?: Maybe<Scalars['Boolean']['output']>;
  solarHotWater?: Maybe<Scalars['Boolean']['output']>;
  solarPanels?: Maybe<Scalars['Boolean']['output']>;
  splitsystemAircon?: Maybe<Scalars['Boolean']['output']>;
  splitsystemHeating?: Maybe<Scalars['Boolean']['output']>;
  study?: Maybe<Scalars['Boolean']['output']>;
  tennisCourt?: Maybe<Scalars['Boolean']['output']>;
  toilet?: Maybe<Scalars['Int']['output']>;
  totalParking?: Maybe<Scalars['Int']['output']>;
  vacuumSystem?: Maybe<Scalars['Boolean']['output']>;
  waterTank?: Maybe<Scalars['Boolean']['output']>;
  workshop?: Maybe<Scalars['Boolean']['output']>;
};

export type PropertyFeatured = {
  __typename?: 'PropertyFeatured';
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  tier?: Maybe<Scalars['String']['output']>;
};

export enum PropertyFeaturedAdType {
  Featured_69 = 'FEATURED_69',
  Featured_99 = 'FEATURED_99',
  Highlight_199 = 'HIGHLIGHT_199',
  Premiere_499 = 'PREMIERE_499',
  Premiere_699 = 'PREMIERE_699',
  Premiere_899 = 'PREMIERE_899',
  Standard = 'STANDARD',
}

export type PropertyFeaturedConnection = {
  __typename?: 'PropertyFeaturedConnection';
  edges?: Maybe<Array<Maybe<PropertyFeaturedEdge>>>;
  nodes?: Maybe<Array<Maybe<PropertyFeatured>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type PropertyFeaturedConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertyFeaturedEdge = {
  __typename?: 'PropertyFeaturedEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PropertyCoupon>;
};

export type PropertyFeaturedOptions = {
  group?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
};

export type PropertyFeatures = {
  airConditioning?: InputMaybe<Scalars['Boolean']['input']>;
  alarmSystem?: InputMaybe<Scalars['Boolean']['input']>;
  balcony?: InputMaybe<Scalars['Boolean']['input']>;
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  broadband?: InputMaybe<Scalars['Boolean']['input']>;
  builtInRobes?: InputMaybe<Scalars['Boolean']['input']>;
  carports?: InputMaybe<Scalars['Int']['input']>;
  courtyard?: InputMaybe<Scalars['Boolean']['input']>;
  deck?: InputMaybe<Scalars['Boolean']['input']>;
  dishwasher?: InputMaybe<Scalars['Boolean']['input']>;
  ductedCooling?: InputMaybe<Scalars['Boolean']['input']>;
  ductedHeating?: InputMaybe<Scalars['Boolean']['input']>;
  ensuite?: InputMaybe<Scalars['Int']['input']>;
  evaporativeCooling?: InputMaybe<Scalars['Boolean']['input']>;
  floorboards?: InputMaybe<Scalars['Boolean']['input']>;
  fullyFenced?: InputMaybe<Scalars['Boolean']['input']>;
  garages?: InputMaybe<Scalars['Int']['input']>;
  gasHeating?: InputMaybe<Scalars['Boolean']['input']>;
  greyWaterSystem?: InputMaybe<Scalars['Boolean']['input']>;
  gym?: InputMaybe<Scalars['Boolean']['input']>;
  hotWaterService?: InputMaybe<Scalars['Boolean']['input']>;
  hydronicHeating?: InputMaybe<Scalars['Boolean']['input']>;
  insideSpa?: InputMaybe<Scalars['Boolean']['input']>;
  intercom?: InputMaybe<Scalars['Boolean']['input']>;
  livingArea?: InputMaybe<Scalars['Int']['input']>;
  openFirePlace?: InputMaybe<Scalars['Boolean']['input']>;
  openSpaces?: InputMaybe<Scalars['Int']['input']>;
  otherFeatures?: InputMaybe<Scalars['String']['input']>;
  outdoorEnt?: InputMaybe<Scalars['Boolean']['input']>;
  outsideSpa?: InputMaybe<Scalars['Boolean']['input']>;
  payTv?: InputMaybe<Scalars['Boolean']['input']>;
  poolAboveGround?: InputMaybe<Scalars['Boolean']['input']>;
  poolInGround?: InputMaybe<Scalars['Boolean']['input']>;
  remoteGarage?: InputMaybe<Scalars['Boolean']['input']>;
  reverseCycleAircon?: InputMaybe<Scalars['Boolean']['input']>;
  rumpusRoom?: InputMaybe<Scalars['Boolean']['input']>;
  secureParking?: InputMaybe<Scalars['Boolean']['input']>;
  shed?: InputMaybe<Scalars['Boolean']['input']>;
  solarHotWater?: InputMaybe<Scalars['Boolean']['input']>;
  solarPanels?: InputMaybe<Scalars['Boolean']['input']>;
  splitsystemAircon?: InputMaybe<Scalars['Boolean']['input']>;
  splitsystemHeating?: InputMaybe<Scalars['Boolean']['input']>;
  study?: InputMaybe<Scalars['Boolean']['input']>;
  tennisCourt?: InputMaybe<Scalars['Boolean']['input']>;
  toilet?: InputMaybe<Scalars['Int']['input']>;
  vacuumSystem?: InputMaybe<Scalars['Boolean']['input']>;
  waterTank?: InputMaybe<Scalars['Boolean']['input']>;
  workshop?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PropertyGroup {
  Buy = 'BUY',
  BuyRent = 'BUY_RENT',
  BuySold = 'BUY_SOLD',
  Offmarket = 'OFFMARKET',
  Rent = 'RENT',
  Sold = 'SOLD',
}

export type PropertyInfo = {
  __typename?: 'PropertyInfo';
  estimatedOnMarketDate?: Maybe<Scalars['Date']['output']>;
  googleDriveFolder?: Maybe<GoogleDriveFolder>;
  id: Scalars['ID']['output'];
  prePortalSource?: Maybe<Scalars['String']['output']>;
  propertyId: Scalars['ID']['output'];
};

export type PropertyInspection = {
  __typename?: 'PropertyInspection';
  consumerId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isPublish?: Maybe<Scalars['Boolean']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  propertyId?: Maybe<Scalars['ID']['output']>;
  propertyInspectionObject?: Maybe<Array<Maybe<PropertyInspectionObject>>>;
  rating?: Maybe<Scalars['Float']['output']>;
};

export type PropertyInspectionObject = {
  __typename?: 'PropertyInspectionObject';
  id: Scalars['ID']['output'];
  propertyInspectionId?: Maybe<Scalars['ID']['output']>;
  s3Key?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PropertyInspectionObjectType>;
};

export enum PropertyInspectionObjectType {
  Audio = 'AUDIO',
  Image = 'IMAGE',
  Video = 'VIDEO',
}

export type PropertyInspectionObjects = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type PropertyListingByStateCount = {
  __typename?: 'PropertyListingByStateCount';
  count?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type PropertyLiveStream = {
  __typename?: 'PropertyLiveStream';
  agent?: Maybe<Agent>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  dateEnded?: Maybe<Scalars['NonUtcDate']['output']>;
  dateScheduled?: Maybe<Scalars['NonUtcDate']['output']>;
  dateScheduledTimezone?: Maybe<Scalars['Timezone']['output']>;
  dateStarted?: Maybe<Scalars['NonUtcDate']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Scalars['Boolean']['output']>;
  isPublished?: Maybe<Scalars['Boolean']['output']>;
  liveStream?: Maybe<LiveStream>;
  property?: Maybe<Property>;
  statistics?: Maybe<PropertyLiveStreamStatistics>;
  uuid: Scalars['ID']['output'];
};

export type PropertyLiveStreamConnection = {
  __typename?: 'PropertyLiveStreamConnection';
  edges?: Maybe<Array<Maybe<PropertyLiveStreamEdge>>>;
  nodes?: Maybe<Array<Maybe<PropertyLiveStream>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type PropertyLiveStreamEdge = {
  __typename?: 'PropertyLiveStreamEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PropertyLiveStream>;
};

export type PropertyLiveStreamOptions = {
  createdDateRange?: InputMaybe<DateRangeInput>;
  dateEndedDateRange?: InputMaybe<DateRangeInput>;
  isEnded?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  locationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  scheduledDateRange?: InputMaybe<DateRangeInput>;
  sorting?: InputMaybe<PropertyLiveStreamsSorting>;
};

export type PropertyLiveStreamStatistics = {
  __typename?: 'PropertyLiveStreamStatistics';
  id: Scalars['ID']['output'];
  viewsCount?: Maybe<Scalars['Int']['output']>;
};

export type PropertyLiveStreamsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdDateRange?: InputMaybe<DateRangeInput>;
  dateEndedDateRange?: InputMaybe<DateRangeInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isEnded?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  scheduledDateRange?: InputMaybe<DateRangeInput>;
  sorting?: InputMaybe<PropertyLiveStreamsConnectionOptionsSorting>;
};

export enum PropertyLiveStreamsConnectionOptionsSorting {
  Newest = 'NEWEST',
  ScheduledDate = 'SCHEDULED_DATE',
}

export type PropertyLiveStreamsPageInfo = {
  __typename?: 'PropertyLiveStreamsPageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  numberOfPages?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
};

export type PropertyLiveStreamsResult = {
  __typename?: 'PropertyLiveStreamsResult';
  edges?: Maybe<Array<Maybe<PropertyLiveStreamEdge>>>;
  nodes?: Maybe<Array<Maybe<PropertyLiveStream>>>;
  pageInfo?: Maybe<PropertyLiveStreamsPageInfo>;
  totalCount: Scalars['Int']['output'];
};

export enum PropertyLiveStreamsSorting {
  Newest = 'NEWEST',
  ScheduledDate = 'SCHEDULED_DATE',
}

export type PropertyLocation = {
  __typename?: 'PropertyLocation';
  id: Scalars['ID']['output'];
  locationId: Scalars['ID']['output'];
  propertyId: Scalars['ID']['output'];
};

export type PropertyNearby = {
  __typename?: 'PropertyNearby';
  createdAt?: Maybe<Scalars['Date']['output']>;
  distanceMeters?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  type?: Maybe<PropertyNearbyType>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type PropertyNearbyByType = {
  __typename?: 'PropertyNearbyByType';
  bus?: Maybe<PropertyNearby>;
  education?: Maybe<PropertyNearby>;
  id: Scalars['ID']['output'];
  roundabout?: Maybe<PropertyNearby>;
  shopping?: Maybe<PropertyNearby>;
  train?: Maybe<PropertyNearby>;
};

export enum PropertyNearbyType {
  Bus = 'BUS',
  Education = 'EDUCATION',
  Roundabout = 'ROUNDABOUT',
  Shopping = 'SHOPPING',
  Train = 'TRAIN',
}

export type PropertyObject = {
  __typename?: 'PropertyObject';
  format?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isMain?: Maybe<Scalars['Boolean']['output']>;
  modTime?: Maybe<Scalars['Date']['output']>;
  s3Key?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PropertyObjectType>;
  url?: Maybe<Scalars['String']['output']>;
};

export enum PropertyObjectType {
  Floorplan = 'FLOORPLAN',
  Img = 'IMG',
  VideoWalkthrough = 'VIDEO_WALKTHROUGH',
}

export type PropertyObjects = {
  floorPlanImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mainImage?: InputMaybe<Scalars['String']['input']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PropertyOverlay = {
  __typename?: 'PropertyOverlay';
  createdAt?: Maybe<Scalars['Date']['output']>;
  developmentUpside?: Maybe<Scalars['String']['output']>;
  dwellingSizeSqm?: Maybe<Scalars['Float']['output']>;
  fireRiskFactor?: Maybe<Scalars['Int']['output']>;
  fireRiskText?: Maybe<Scalars['String']['output']>;
  floodRiskFactor?: Maybe<Scalars['Int']['output']>;
  floodRiskText?: Maybe<Scalars['String']['output']>;
  frontageSizeSqm?: Maybe<Scalars['Float']['output']>;
  heritageRiskFactor?: Maybe<Scalars['Int']['output']>;
  heritageText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isEasementIdentified?: Maybe<PropertyOverlayOption>;
  isHeritage?: Maybe<PropertyOverlayOption>;
  isMainRoadOrRoundAbout?: Maybe<PropertyOverlayOption>;
  isTenanted?: Maybe<PropertyOverlayOption>;
  isTrainStation?: Maybe<PropertyOverlayOption>;
  leaseEndDate?: Maybe<Scalars['Date']['output']>;
  nearbyByType?: Maybe<PropertyNearbyByType>;
  property?: Maybe<Property>;
  rentalAppraisal?: Maybe<Scalars['Float']['output']>;
  socialHousingPercent?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  yieldPercent?: Maybe<Scalars['Float']['output']>;
  zoning?: Maybe<Scalars['String']['output']>;
};

export enum PropertyOverlayOption {
  Clarify = 'CLARIFY',
  No = 'NO',
  Yes = 'YES',
}

export type PropertyProfile = {
  __typename?: 'PropertyProfile';
  address?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  landArea?: Maybe<Scalars['Float']['output']>;
  landAreaUnit?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  location?: Maybe<Location>;
  objects?: Maybe<Array<Maybe<PropertyObject>>>;
  postalCode?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<PropertyProfilePropertiesCount>;
  property?: Maybe<Property>;
  propertySellingPriceStatBySuburb?: Maybe<PropertySellingPriceStatBySuburb>;
  slug?: Maybe<Scalars['String']['output']>;
  slugUrl?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  streetNumber?: Maybe<Scalars['String']['output']>;
  subNumber?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
};

export type PropertyProfileObjectsArgs = {
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<PropertyObjectType>;
};

export type PropertyProfilePropertiesCount = {
  __typename?: 'PropertyProfilePropertiesCount';
  forRentCount?: Maybe<Scalars['Int']['output']>;
  forSaleCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  offMarketCount?: Maybe<Scalars['Int']['output']>;
  soldCount?: Maybe<Scalars['Int']['output']>;
};

export type PropertyProfilePropertiesFilter = {
  group?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
};

export type PropertyProfileSearchSuggestionsFilter = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export type PropertyPromotion = {
  __typename?: 'PropertyPromotion';
  campaignEndDate: Scalars['Date']['output'];
  campaignStartDate: Scalars['Date']['output'];
  customer?: Maybe<Customer>;
  facebookCampaignId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  package: Scalars['String']['output'];
  propertyId: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type PropertyPromotionGroup = {
  __typename?: 'PropertyPromotionGroup';
  budget?: Maybe<Scalars['Float']['output']>;
  campaigns?: Maybe<Array<Maybe<PropertyPromotionGroupCampaign>>>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAutoAd?: Maybe<Scalars['Boolean']['output']>;
  isDailyReport?: Maybe<Scalars['Boolean']['output']>;
  isPackage?: Maybe<Scalars['Boolean']['output']>;
  property?: Maybe<Property>;
  propertyId: Scalars['Int']['output'];
  propertyStatus?: Maybe<Scalars['String']['output']>;
  reportEmail?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  sourceId?: Maybe<Scalars['String']['output']>;
  spent?: Maybe<Scalars['Float']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  stripeReceiptInfo?: Maybe<StripeReceiptInfo>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  uuid: Scalars['ID']['output'];
};

export type PropertyPromotionGroupCampaign = {
  __typename?: 'PropertyPromotionGroupCampaign';
  budget?: Maybe<Scalars['Float']['output']>;
  campaignId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  endDate?: Maybe<Scalars['Date']['output']>;
  facebook?: Maybe<PropertyPromotionGroupCampaignFacebook>;
  id: Scalars['ID']['output'];
  promotionId?: Maybe<Scalars['ID']['output']>;
  property?: Maybe<Property>;
  propertyPromotionGroup?: Maybe<PropertyPromotionGroup>;
  propertyPromotionGroupId: Scalars['ID']['output'];
  reportUrl?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  type?: Maybe<PropertyPromotionGroupCampaignType>;
  updatedAt: Scalars['Date']['output'];
  uuid: Scalars['ID']['output'];
};

export type PropertyPromotionGroupCampaignFacebook = {
  __typename?: 'PropertyPromotionGroupCampaignFacebook';
  adPicture?: Maybe<Scalars['String']['output']>;
  facebookPageId?: Maybe<Scalars['String']['output']>;
  facebookPostId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  statistics?: Maybe<FacebookAdCampaignStatistics>;
  targeting?: Maybe<FacebookTargeting>;
};

export enum PropertyPromotionGroupCampaignType {
  Fb = 'FB',
  Google = 'GOOGLE',
}

export type PropertyPromotionGroupsConnection = {
  __typename?: 'PropertyPromotionGroupsConnection';
  edges?: Maybe<Array<Maybe<PropertyPromotionGroupsEdge>>>;
  nodes?: Maybe<Array<Maybe<PropertyPromotionGroup>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type PropertyPromotionGroupsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  campaignEndDateRange?: InputMaybe<DateRangeInput>;
  campaignStartDateRange?: InputMaybe<DateRangeInput>;
  createdDateRange?: InputMaybe<DateRangeInput>;
  crmId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  platformAgentId?: InputMaybe<Scalars['ID']['input']>;
  propertyGroup?: InputMaybe<PropertyGroup>;
  source?: InputMaybe<SourceType>;
  withStripeReceipts?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PropertyPromotionGroupsEdge = {
  __typename?: 'PropertyPromotionGroupsEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PropertyPromotionGroup>;
};

export type PropertySearchCriteria = {
  __typename?: 'PropertySearchCriteria';
  bathroomRange?: Maybe<NumberRange>;
  bedRange?: Maybe<NumberRange>;
  categories?: Maybe<Array<Maybe<Property>>>;
  landAreaRange?: Maybe<NumberRange>;
  parkingRange?: Maybe<NumberRange>;
  priceRange?: Maybe<NumberRange>;
};

export type PropertySearchOptions = {
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  bathroom?: InputMaybe<NumberRangeInput>;
  bed?: InputMaybe<NumberRangeInput>;
  category?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  consumerId?: InputMaybe<Scalars['ID']['input']>;
  features?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  garage?: InputMaybe<NumberRangeInput>;
  group?: InputMaybe<PropertyGroup>;
  isIncludeOffMarket?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeSurrounding?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeTestAgency?: InputMaybe<Scalars['Boolean']['input']>;
  isNewConstruction?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  landArea?: InputMaybe<NumberRangeInput>;
  location?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mapLocation?: InputMaybe<MapLocationFilter>;
  ofiTime?: InputMaybe<Scalars['Date']['input']>;
  ofiTimeDateRange?: InputMaybe<DateRangeInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<NumberRangeInput>;
  regionId?: InputMaybe<Scalars['ID']['input']>;
  sorting?: InputMaybe<PropertySearchOptionsSorting>;
  status?: InputMaybe<Array<PropertyStatus>>;
  suburb?: InputMaybe<Scalars['String']['input']>;
  tier?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Array<PropertyType>>;
};

export enum PropertySearchOptionsSorting {
  Featured = 'FEATURED',
  Newest = 'NEWEST',
  Oldest = 'OLDEST',
  PriceHighLow = 'PRICE_HIGH_LOW',
  PriceLowHigh = 'PRICE_LOW_HIGH',
  SalesDate = 'SALES_DATE',
}

export type PropertySearchResult = {
  __typename?: 'PropertySearchResult';
  edges?: Maybe<Array<Maybe<PropertyEdge>>>;
  nodes?: Maybe<Array<Maybe<Property>>>;
  pageInfo?: Maybe<SearchResultPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PropertySearchToBoostFilter = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export type PropertySellingPriceStatBySuburb = {
  __typename?: 'PropertySellingPriceStatBySuburb';
  max?: Maybe<Scalars['Float']['output']>;
  mid?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type PropertyShow = {
  __typename?: 'PropertyShow';
  articleLink?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  episode?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  propertyId?: Maybe<Scalars['Int']['output']>;
  propertyIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  propertyShowProperties?: Maybe<Array<Maybe<Property>>>;
  publishedAt?: Maybe<Scalars['Date']['output']>;
  scheduledDate?: Maybe<Scalars['Date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type PropertyShowConnection = {
  __typename?: 'PropertyShowConnection';
  edges?: Maybe<Array<Maybe<PropertyShowEdge>>>;
  nodes?: Maybe<Array<Maybe<PropertyShow>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type PropertyShowEdge = {
  __typename?: 'PropertyShowEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PropertyShow>;
};

export type PropertyShowsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum PropertySource {
  Manual = 'MANUAL',
  Shortlist = 'SHORTLIST',
  Xml = 'XML',
  XmlScrape = 'XML_SCRAPE',
  XmlView = 'XML_VIEW',
  XmlViewPremium = 'XML_VIEW_PREMIUM',
}

export enum PropertyStates {
  Act = 'ACT',
  Nsw = 'NSW',
  Nt = 'NT',
  Qld = 'QLD',
  Sa = 'SA',
  Tas = 'TAS',
  Vic = 'VIC',
  Wa = 'WA',
}

export type PropertyStatistics = {
  __typename?: 'PropertyStatistics';
  agentNumberCallCount?: Maybe<Scalars['Int']['output']>;
  agentNumberRevealCount?: Maybe<Scalars['Int']['output']>;
  audienceByDevice?: Maybe<PropertyStatisticsAudienceByDevice>;
  briefsCount?: Maybe<Scalars['Int']['output']>;
  dailyAgentNumberCallCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyAgentNumberRevealCount?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyEnquiries?: Maybe<Array<Maybe<DateCountMap>>>;
  dailySearchViews?: Maybe<Array<Maybe<DateCountMap>>>;
  dailyViews?: Maybe<Array<Maybe<DateCountMap>>>;
  engagements?: Maybe<PropertyStatisticsEngagements>;
  enquiriesCount?: Maybe<Scalars['Int']['output']>;
  facebookPostCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mailbox?: Maybe<MailboxTotalPropertyFbPostStatistics>;
  offersCount?: Maybe<Scalars['Int']['output']>;
  propertySavedInspectionTimesCount?: Maybe<Scalars['Int']['output']>;
  savedPropertiesCount?: Maybe<Scalars['Int']['output']>;
  totalAdBudget?: Maybe<Scalars['Float']['output']>;
  uniquePeopleEngagedCount?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<PropertyStatisticsViews>;
};

export type PropertyStatisticsAgentNumberCallCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsAgentNumberRevealCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsAudienceByDeviceArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsBriefsCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsDailyAgentNumberCallCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsDailyAgentNumberRevealCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsDailyEnquiriesArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsDailySearchViewsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsDailyViewsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsEngagementsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsEnquiriesCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsFacebookPostCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsOffersCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsPropertySavedInspectionTimesCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsSavedPropertiesCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsUniquePeopleEngagedCountArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsViewsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type PropertyStatisticsAudienceByDevice = {
  __typename?: 'PropertyStatisticsAudienceByDevice';
  desktop?: Maybe<Scalars['Int']['output']>;
  desktopPercent?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  mobile?: Maybe<Scalars['Int']['output']>;
  mobilePercent?: Maybe<Scalars['Float']['output']>;
  tablet?: Maybe<Scalars['Int']['output']>;
  tabletPercent?: Maybe<Scalars['Float']['output']>;
};

export type PropertyStatisticsEngagements = {
  __typename?: 'PropertyStatisticsEngagements';
  id: Scalars['ID']['output'];
  propertyPageFloorplanViews?: Maybe<Scalars['Int']['output']>;
  propertyPageImageViews?: Maybe<Scalars['Int']['output']>;
  propertyPageVideoViews?: Maybe<Scalars['Int']['output']>;
  searchPageFloorplanViews?: Maybe<Scalars['Int']['output']>;
  searchPageImageViews?: Maybe<Scalars['Int']['output']>;
  searchPageVideoViews?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PropertyStatisticsFilter = {
  currentEndDate?: InputMaybe<Scalars['Date']['input']>;
  currentStartDate?: InputMaybe<Scalars['Date']['input']>;
  includeDetails?: InputMaybe<Scalars['Boolean']['input']>;
  propertyId?: InputMaybe<Scalars['String']['input']>;
};

export type PropertyStatisticsViews = {
  __typename?: 'PropertyStatisticsViews';
  id: Scalars['ID']['output'];
  pageViews?: Maybe<Scalars['Int']['output']>;
  searchViews?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum PropertyStatus {
  Current = 'CURRENT',
  Leased = 'LEASED',
  Offmarket = 'OFFMARKET',
  Sold = 'SOLD',
  Withdrawn = 'WITHDRAWN',
}

export type PropertySuggestionsFilter = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type PropertyTier = {
  __typename?: 'PropertyTier';
  amount?: Maybe<Scalars['Float']['output']>;
  code?: Maybe<PromotePropertyTier>;
  description?: Maybe<Scalars['String']['output']>;
};

export type PropertyTierDeductions = {
  __typename?: 'PropertyTierDeductions';
  amount?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type PropertyTierErrors = {
  __typename?: 'PropertyTierErrors';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export enum PropertyType {
  Commercial = 'COMMERCIAL',
  Land = 'LAND',
  Rental = 'RENTAL',
  Residential = 'RESIDENTIAL',
  Rural = 'RURAL',
}

export type PropertyValue = {
  __typename?: 'PropertyValue';
  address?: Maybe<PropertyValueAddress>;
  attributes?: Maybe<PropertyValueAttributes>;
  coordinates?: Maybe<Coordinates>;
  featureList?: Maybe<Array<Maybe<PropertyValueFeature>>>;
  id: Scalars['ID']['output'];
  propertyPhotoList?: Maybe<Array<Maybe<PropertyValuePhoto>>>;
  propertyType?: Maybe<Scalars['String']['output']>;
  saleHistory?: Maybe<PropertyValueSaleHistory>;
  statistics?: Maybe<PropertyValueStatistics>;
  timeline?: Maybe<Array<Maybe<PropertyValueEvent>>>;
  valuations?: Maybe<PropertyValueValuations>;
};

export type PropertyValueTimelineArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PropertyValueAddress = {
  __typename?: 'PropertyValueAddress';
  full?: Maybe<Scalars['String']['output']>;
  localityId?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
};

export type PropertyValueAttributes = {
  __typename?: 'PropertyValueAttributes';
  bathrooms?: Maybe<Scalars['Int']['output']>;
  bedrooms?: Maybe<Scalars['Int']['output']>;
  carSpaces?: Maybe<Scalars['Int']['output']>;
  floorArea?: Maybe<Scalars['Float']['output']>;
  landArea?: Maybe<Scalars['Float']['output']>;
  yearBuilt?: Maybe<Scalars['String']['output']>;
};

export type PropertyValueEstimatedRange = {
  __typename?: 'PropertyValueEstimatedRange';
  faresValueHigh?: Maybe<Scalars['String']['output']>;
  faresValueLow?: Maybe<Scalars['String']['output']>;
};

export type PropertyValueEvent = {
  __typename?: 'PropertyValueEvent';
  data?: Maybe<Array<Maybe<PropertyValueEventData>>>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type PropertyValueEventData = {
  __typename?: 'PropertyValueEventData';
  agency?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PropertyValueFeature = {
  __typename?: 'PropertyValueFeature';
  abbreviation?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type PropertyValueMedian = {
  __typename?: 'PropertyValueMedian';
  count?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type PropertyValuePhoto = {
  __typename?: 'PropertyValuePhoto';
  digitalAssetType?: Maybe<Scalars['String']['output']>;
  isDefaultPhoto?: Maybe<Scalars['Boolean']['output']>;
  largePhotoUrl?: Maybe<Scalars['String']['output']>;
  mediumPhotoUrl?: Maybe<Scalars['String']['output']>;
  thumbnailPhotoUrl?: Maybe<Scalars['String']['output']>;
};

export type PropertyValueSaleHistory = {
  __typename?: 'PropertyValueSaleHistory';
  dateSold?: Maybe<Scalars['Date']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type PropertyValueStatistics = {
  __typename?: 'PropertyValueStatistics';
  annualGrowth?: Maybe<PropertyValueMedian>;
  medianRental?: Maybe<PropertyValueMedian>;
  medianSale?: Maybe<PropertyValueMedian>;
  medianSold?: Maybe<PropertyValueMedian>;
  rental?: Maybe<PropertyValueStatisticsResponse>;
  sale?: Maybe<PropertyValueStatisticsResponse>;
  sold?: Maybe<PropertyValueStatisticsResponse>;
};

export type PropertyValueStatisticsRentalArgs = {
  input?: InputMaybe<PropetyValueStatisticsInput>;
};

export type PropertyValueStatisticsSaleArgs = {
  input?: InputMaybe<PropetyValueStatisticsInput>;
};

export type PropertyValueStatisticsSoldArgs = {
  input?: InputMaybe<PropetyValueStatisticsInput>;
};

export type PropertyValueStatisticsResponse = {
  __typename?: 'PropertyValueStatisticsResponse';
  localityName?: Maybe<Scalars['String']['output']>;
  locationType?: Maybe<Scalars['String']['output']>;
  metricType?: Maybe<Scalars['String']['output']>;
  metricTypeDescription?: Maybe<Scalars['String']['output']>;
  metricTypeId?: Maybe<Scalars['Int']['output']>;
  seriesDataList?: Maybe<Array<Maybe<PropertyValueMedian>>>;
};

export type PropertyValueValuations = {
  __typename?: 'PropertyValueValuations';
  estimatedRange?: Maybe<PropertyValueEstimatedRange>;
  soldProperties?: Maybe<Array<Maybe<PropertyValue>>>;
};

export type PropertyshowTransaction = {
  __typename?: 'PropertyshowTransaction';
  agency?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  videoKeys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  videoLink?: Maybe<Scalars['String']['output']>;
};

export type PropertyshowTransactionInput = {
  agency: Scalars['String']['input'];
  cardName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
  videoKeys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  videoLink?: InputMaybe<Scalars['String']['input']>;
};

export type PropetyValueStatisticsInput = {
  interval?: InputMaybe<PropetyValueStatisticsInterval>;
  metricType: PropetyValueStatisticsMetricType;
  period?: InputMaybe<DatePeriod>;
};

export enum PropetyValueStatisticsInterval {
  Bimonthly = 'BIMONTHLY',
  Halfyearly = 'HALFYEARLY',
  Monthly = 'MONTHLY',
  Twoyears = 'TWOYEARS',
  Yearly = 'YEARLY',
}

export enum PropetyValueStatisticsMetricType {
  MedianAskingRent_12Mos = 'MEDIAN_ASKING_RENT_12_MOS',
  MedianSalePrice_12Mos = 'MEDIAN_SALE_PRICE_12_MOS',
  NumberSold_12Mos = 'NUMBER_SOLD_12_MOS',
}

export type Purchase = {
  __typename?: 'Purchase';
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inAppPurchaseProductId?: Maybe<Scalars['ID']['output']>;
  inAppPurchaseTransactionId?: Maybe<Scalars['ID']['output']>;
  product: PurchaseProduct;
  source: PurchaseSource;
  stripeChargeId?: Maybe<Scalars['ID']['output']>;
};

export enum PurchaseProduct {
  BriefUnlockAllPropertyAlert = 'BRIEF_UNLOCK_ALL_PROPERTY_ALERT',
  BriefUnlockPropertyAlert = 'BRIEF_UNLOCK_PROPERTY_ALERT',
}

export enum PurchaseSource {
  RealtyLiveInAppPurchaseAndroid = 'REALTY_LIVE_IN_APP_PURCHASE_ANDROID',
  RealtyLiveInAppPurchaseIos = 'REALTY_LIVE_IN_APP_PURCHASE_IOS',
  RealtyStripe = 'REALTY_STRIPE',
}

export type Query = {
  __typename?: 'Query';
  activitiesConnection?: Maybe<ActivityConnection>;
  adSalesAgreementById?: Maybe<AdSalesAgreement>;
  adminAgentsConnection?: Maybe<AgentsConnection>;
  adminPropertiesConnection?: Maybe<PropertiesConnection>;
  adminPropertyStatistics?: Maybe<AdminPropertyStatistics>;
  adminUser?: Maybe<AdminUser>;
  adminUsersConnection?: Maybe<AdminUsersConnection>;
  agenciesByEmail?: Maybe<Array<Maybe<Agency>>>;
  agenciesConnection?: Maybe<AgencyConnection>;
  agenciesConnectionByEnquiriesCount?: Maybe<AgencyConnection>;
  agency?: Maybe<Agency>;
  agencyBillingCards?: Maybe<StripeCustomerInfo>;
  agencyByUuid?: Maybe<Agency>;
  agencyCrmByAgencyId?: Maybe<AgencyCrm>;
  agencyCrmByUuid?: Maybe<AgencyCrm>;
  agencyCrmEagleConfigByAgencyCrmId?: Maybe<AgencyCrmEagleConfig>;
  agencyCrmEmail?: Maybe<AgencyCrmEmail>;
  agencyCrmLockedonConfigByAgencyCrmId?: Maybe<AgencyCrmLockedonConfig>;
  agencyCrmZenuConfigByAgencyCrmId?: Maybe<AgencyCrmZenuConfig>;
  agencyEnquiryWebhookByAgencyId?: Maybe<AgencyEnquiryWebhook>;
  agencyGroup?: Maybe<AgencyGroup>;
  agencyGroupByUuid?: Maybe<AgencyGroup>;
  agencyGroupMember?: Maybe<AgencyGroupMember>;
  agencyGroupsConnection?: Maybe<AgencyGroupsConnection>;
  agencyPropertiesCount?: Maybe<Scalars['Int']['output']>;
  agencySitemap?: Maybe<AgencySitemap>;
  agencySubscriptionCoupon?: Maybe<AgencySubscriptionCoupon>;
  agencySuggestions?: Maybe<Array<Maybe<Agency>>>;
  agent?: Maybe<Agent>;
  agentBillingCards?: Maybe<StripeCustomerInfo>;
  agentBoxListingById?: Maybe<AgentBoxListing>;
  agentBrief?: Maybe<AgentBrief>;
  /** @deprecated No longer supported */
  agentBriefByUuid?: Maybe<AgentBrief>;
  agentBriefsConnection?: Maybe<AgentBriefsConnection>;
  agentByUserName?: Maybe<Agent>;
  agentByUuid?: Maybe<Agent>;
  agentContact?: Maybe<AgentContact>;
  agentContactsConnection?: Maybe<AgentContactsConnection>;
  agentConversation?: Maybe<AgentConversation>;
  agentDirectoryStatus?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  agentDirectorySubscriptionById?: Maybe<AgentDirectorySubscription>;
  agentFindAccount?: Maybe<Array<Agent>>;
  agentLeadById?: Maybe<AgentLead>;
  agentLeadsConnection?: Maybe<AgentLeadsConnection>;
  agentProfileConnection?: Maybe<ConsumerPageConnection>;
  agentPropertyInspection?: Maybe<AgentPropertyInspection>;
  agentPropertyInspectionVideo?: Maybe<AgentPropertyInspectionVideo>;
  agentPropertyInspectionVideoComment?: Maybe<AgentPropertyInspectionVideoComment>;
  agentReview?: Maybe<AgentReview>;
  agentReviewsConnection?: Maybe<ReviewsConnection>;
  agentSubDomain?: Maybe<BrokerSetting>;
  agentSubscriptionCoupon?: Maybe<AgentSubscriptionCoupon>;
  agents?: Maybe<Array<Maybe<Agent>>>;
  agentsByEmail?: Maybe<Array<Maybe<Agent>>>;
  agentsConnection?: Maybe<AgentsConnection>;
  agentsConnectionByEnquiriesCount?: Maybe<AgentsConnection>;
  agentsCount?: Maybe<Scalars['Int']['output']>;
  agentsCountByPropertySearch?: Maybe<Agent>;
  appVersionByName?: Maybe<AppVersion>;
  applyPropertyCouponCode?: Maybe<ApplyPropertyCouponResult>;
  automatedAdLogGroupsConnection?: Maybe<AutomatedAdLogConnection>;
  automatedAdLogsConnection?: Maybe<AutomatedAdLogConnection>;
  broker?: Maybe<Broker>;
  brokerAward?: Maybe<BrokerAward>;
  brokerBuyerAndSubBrokerSearch: BrokerBuyerAndSubBrokerSearchSearchResult;
  brokerBuyerInvite?: Maybe<BrokerBuyerInvite>;
  brokerCertification?: Maybe<BrokerCertification>;
  brokerCharge?: Maybe<BrokerCharge>;
  brokerCharges?: Maybe<Array<Maybe<BrokerCharge>>>;
  brokerCompanies?: Maybe<Array<Maybe<BrokerCompany>>>;
  brokerCompaniesConnection?: Maybe<BrokerCompaniesConnection>;
  brokerCompany?: Maybe<BrokerCompany>;
  brokerEnquiriesConnection?: Maybe<BrokerEnquiriesConnection>;
  brokerEnquiry?: Maybe<BrokerEnquiry>;
  brokerFindAccount?: Maybe<Array<Broker>>;
  brokerLocationsConnection?: Maybe<BrokerLocationsConnection>;
  brokersConnection?: Maybe<BrokersConnection>;
  brokersConnectionByEnquiriesCount?: Maybe<BrokersConnection>;
  businessPagesConnection?: Maybe<ConsumerPageConnection>;
  calculatePropertyPromote?: Maybe<PromotePropertyResult>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  checkAgencyProperty?: Maybe<Scalars['Boolean']['output']>;
  checkCouponValidation?: Maybe<Scalars['Boolean']['output']>;
  consumer?: Maybe<Consumer>;
  consumerAlert?: Maybe<ConsumerAlert>;
  consumerAlertsConnection?: Maybe<ConsumerAlertsConnection>;
  consumerByAgentId?: Maybe<Consumer>;
  consumerClaimedPropertiesConnection?: Maybe<ConsumerPropertyClaimConnection>;
  consumerCollection?: Maybe<ConsumerCollection>;
  consumerCollectionsConnection?: Maybe<ConsumerCollectionsConnection>;
  consumerEvent?: Maybe<ConsumerEvent>;
  consumerEventTotalLikes?: Maybe<Scalars['Int']['output']>;
  consumerFollowAgencyById?: Maybe<ConsumerFollowAgency>;
  consumerFollowAgentById?: Maybe<ConsumerFollowAgent>;
  consumerFollowConsumer?: Maybe<ConsumerFollowConsumer>;
  consumerFollowPage?: Maybe<ConsumerFollowPage>;
  consumerFollowPropertyById?: Maybe<ConsumerFollowProperty>;
  consumerFollowSuburbById?: Maybe<ConsumerFollowSuburb>;
  consumerPage?: Maybe<ConsumerPage>;
  consumerPageByAgentId?: Maybe<ConsumerPage>;
  consumerPageById?: Maybe<ConsumerPage>;
  consumerPageConnection?: Maybe<ConsumerPageConnection>;
  consumerPost?: Maybe<ConsumerPost>;
  consumerPropertyClaim?: Maybe<ConsumerPropertyClaim>;
  consumerSearchSuggestion?: Maybe<ConsumerSearchSuggestionResult>;
  consumersConnection?: Maybe<ConsumersConnection>;
  consumersRequestConnection?: Maybe<ConsumerTypeRequestConnection>;
  contactAgentsConnection?: Maybe<AgentsConnection>;
  contributorsConnection?: Maybe<ConsumersConnection>;
  conversation?: Maybe<Conversation>;
  crm?: Maybe<Crm>;
  crmById?: Maybe<Crm>;
  crmUser?: Maybe<CrmUser>;
  crms?: Maybe<Array<Maybe<Crm>>>;
  crmsConnection?: Maybe<CrmsConnection>;
  currentHero?: Maybe<Hero>;
  developer?: Maybe<Developer>;
  developerBySlug?: Maybe<Developer>;
  developerProject?: Maybe<DeveloperProject>;
  developerProjectBySlug?: Maybe<DeveloperProject>;
  developerProjectEnquiriesConnection?: Maybe<DeveloperProjectEnquiriesConnection>;
  developerProjectEnquiry?: Maybe<DeveloperProjectEnquiry>;
  developerProjectSearch?: Maybe<DeveloperProjectSearchResult>;
  developerProjectsConnection?: Maybe<DeveloperProjectsConnection>;
  emailLog?: Maybe<EmailLog>;
  enquireTracker?: Maybe<EnquireTracker>;
  event?: Maybe<Event>;
  eventConsumerLike?: Maybe<EventConsumerLike>;
  eventQuery?: Maybe<Event>;
  eventsConnection?: Maybe<EventsConnection>;
  eventsConnectionForDiscover?: Maybe<EventsConnection>;
  facebookAdAccountStatistics?: Maybe<FacebookAdAccountStatistics>;
  facebookLinkPostConfig?: Maybe<FacebookLinkPostConfig>;
  facebookPage?: Maybe<FacebookPage>;
  facebookPageByPropertyId?: Maybe<FacebookPage>;
  facebookPageGroup?: Maybe<FacebookPageGroup>;
  facebookPageGroupsConnection?: Maybe<FacebookPageGroupsConnection>;
  facebookPagePortal?: Maybe<FacebookPagePortal>;
  facebookPagePortalByPageId?: Maybe<FacebookPagePortal>;
  facebookPagePortalsConnection?: Maybe<FacebookPagePortalsConnection>;
  facebookPageSuggestions?: Maybe<Array<Maybe<FacebookPage>>>;
  facebookPagesConnection?: Maybe<FacebookPagesConnection>;
  facebookPagesList?: Maybe<Array<Maybe<FacebookPage>>>;
  facebookPagesNearbyConnection?: Maybe<FacebookPagesConnection>;
  facebookPagesStatistics?: Maybe<FacebookPagesStatistics>;
  facebookPostsPropertyStatistics?: Maybe<FacebookPostsPropertyStatistics>;
  fbPageLikesCountById?: Maybe<Array<Maybe<FacebookPageLike>>>;
  featuredAgentByLocation?: Maybe<FeaturedAgentResult>;
  featuredAgents?: Maybe<Array<Maybe<Agent>>>;
  featuredAgentsUnderLocation?: Maybe<Array<Maybe<Agent>>>;
  featuredBrokerByLocation?: Maybe<FeaturedBrokerResult>;
  featuredBrokerUnderLocation?: Maybe<Broker>;
  featuredDeveloperProject?: Maybe<Array<Maybe<FeaturedDeveloperProjectResult>>>;
  featuredLocationsConnection?: Maybe<LocationsConnection>;
  featuredPropertyFbPost?: Maybe<Array<Maybe<PropertyFbPost>>>;
  featuredPropertyLiveStream?: Maybe<PropertyLiveStream>;
  featuredPropertyShows?: Maybe<Array<Maybe<PropertyShow>>>;
  fetchAllFacebookPages?: Maybe<Array<Maybe<FacebookPage>>>;
  findAgenciesConnection?: Maybe<AgencyConnection>;
  findAgentAgencySearchSuggestion?: Maybe<Array<Maybe<Agency>>>;
  findAgentSearchSuggestion?: Maybe<Array<Maybe<FindAgentSearchSuggestionResult>>>;
  findAgentsConnection?: Maybe<AgentsConnection>;
  findBrokerSearchSuggestion?: Maybe<Array<Maybe<FindBrokerSearchSuggestionResult>>>;
  findBuyerAgentsConnection?: Maybe<AgentsConnection>;
  findHomeownerSuggestedLocations?: Maybe<Array<Maybe<Location>>>;
  generateSuburbCode?: Maybe<Scalars['Boolean']['output']>;
  getAgentClaimPages?: Maybe<AgentFacebookPage>;
  getClaimPages?: Maybe<Integration>;
  googleDriveFiles?: Maybe<Array<Maybe<GoogleDriveFileListResult>>>;
  hero?: Maybe<Hero>;
  heroProperties?: Maybe<Array<Maybe<Property>>>;
  hidePropertiesList?: Maybe<Array<Maybe<Property>>>;
  /** @deprecated No longer supported */
  integrationByType?: Maybe<Integration>;
  ipInfoCitySuggestions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ipInfoCountrySuggestions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  isAgencyEmailExist?: Maybe<Scalars['Boolean']['output']>;
  isAgencyEmailExistReturnData?: Maybe<Agency>;
  isAgentEmailExist?: Maybe<Scalars['Boolean']['output']>;
  isAgentForgotPasswordVerificationExist?: Maybe<Scalars['Boolean']['output']>;
  isAgentMobileNumberExist?: Maybe<Scalars['Boolean']['output']>;
  isAgentReviewCodeExist?: Maybe<AgentReviewRequest>;
  isAgentReviewRequestCodeExist?: Maybe<AgentReviewRequestVerify>;
  isAgentUsernameExist?: Maybe<Scalars['Boolean']['output']>;
  isAlreadyFeatured?: Maybe<Scalars['Boolean']['output']>;
  isBrokerForgotPasswordVerificationExist?: Maybe<Scalars['Boolean']['output']>;
  isConsumerForgotPasswordVerificationExist?: Maybe<Scalars['Boolean']['output']>;
  isDeveloperForgotPasswordCodeExist?: Maybe<Scalars['Boolean']['output']>;
  isExistBroker?: Maybe<Broker>;
  isExistConsumer?: Maybe<Scalars['Boolean']['output']>;
  isForgotPasswordVerificationExist?: Maybe<Scalars['Boolean']['output']>;
  isVerificationExist?: Maybe<Scalars['Boolean']['output']>;
  latestAgentOfferByBriefIdAndPropertyId?: Maybe<AgentOffer>;
  latestChannelByName?: Maybe<Channel>;
  leadMessagesConnection?: Maybe<AgentLeadMessagesConnection>;
  listOfChannels?: Maybe<Array<Maybe<Channel>>>;
  listOfHeros?: Maybe<Array<Maybe<Hero>>>;
  listOfHideProperties?: Maybe<Array<Maybe<ConsumerHideProperty>>>;
  listOfPropertyShows?: Maybe<Array<Maybe<PropertyShow>>>;
  liveStream?: Maybe<LiveStream>;
  location?: Maybe<Location>;
  locationBySuburbCode?: Maybe<Location>;
  locationFacebookPages?: Maybe<Array<Maybe<LocationFacebookPages>>>;
  locationInfo?: Maybe<LocationInfo>;
  locationPropertiesCount?: Maybe<LocationPropertiesCount>;
  locationStatistics?: Maybe<LocationInfoStatistics>;
  locationSuggestions?: Maybe<Array<Maybe<Location>>>;
  locationSuggestionsSearch?: Maybe<Array<Maybe<Location>>>;
  locationTags?: Maybe<Array<Maybe<LocationTag>>>;
  locationsByFull?: Maybe<Array<Maybe<Location>>>;
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
  locationsBySuburbCode?: Maybe<Array<Maybe<Location>>>;
  locationsConnection?: Maybe<LocationsConnection>;
  locationsNearbyConnection?: Maybe<LocationsConnection>;
  locationsWithPriceConnection?: Maybe<LocationsConnection>;
  mailgunEvent?: Maybe<MailgunEvent>;
  mailgunEventsConnection?: Maybe<MailgunEventsConnection>;
  mailgunTag?: Maybe<MailgunTag>;
  mailgunTagsConnection?: Maybe<MailgunTagsConnection>;
  monthlyTopTenFacebookPagesByPosts?: Maybe<Array<Maybe<FacebookPage>>>;
  nearbySchoolsConnection?: Maybe<SchoolsConnection>;
  nearestFacebookPageByPropertyUniqueId?: Maybe<FacebookPage>;
  nearestPropertiesConnection?: Maybe<PropertiesConnection>;
  nearestPropertyShowConnection?: Maybe<Array<Maybe<PropertyShow>>>;
  nexuData?: Maybe<NexuData>;
  ofiTime?: Maybe<OfiTime>;
  pageSessionByUuid?: Maybe<PageSession>;
  platformAgent?: Maybe<PlatformAgent>;
  platformAgentByDomainName?: Maybe<PlatformAgent>;
  platformAgentDomainByDomainName?: Maybe<PlatformAgentDomain>;
  platformAgentInstagram?: Maybe<PlatformAgentInstagram>;
  platformAgentsConnection?: Maybe<PlatformAgentsConnection>;
  previewFeaturedAgentByLocation?: Maybe<FeaturedAgentResult>;
  projectByUuid?: Maybe<Developer>;
  promotePropertiesConnection?: Maybe<PropertiesConnection>;
  propertiesByRegion?: Maybe<PropertiesConnection>;
  propertiesConnection?: Maybe<PropertiesConnection>;
  propertiesUnderLocation?: Maybe<PropertiesConnection>;
  property?: Maybe<Property>;
  propertyAddressSuggestions?: Maybe<PropertyAppraisalEnquiry>;
  propertyAppraisalEnquiry?: Maybe<PropertyAppraisalEnquiry>;
  propertyAuction?: Maybe<PropertyAuction>;
  propertyByFbPost?: Maybe<Property>;
  propertyByShortId?: Maybe<Property>;
  propertyByUuid?: Maybe<Property>;
  propertyByXmlAgentIdAndUniqueId?: Maybe<Property>;
  propertyCouponsConnection?: Maybe<PropertyCouponsConnection>;
  propertyEnquiriesConnection?: Maybe<PropertyEnquiriesConnection>;
  propertyEnquiry?: Maybe<PropertyEnquiry>;
  propertyFbPost?: Maybe<PropertyFbPost>;
  propertyFbPostByPostId?: Maybe<PropertyFbPost>;
  propertyFeature?: Maybe<PropertyFeature>;
  propertyFeatured?: Maybe<Property>;
  propertyFeaturedConnection?: Maybe<PropertyFeaturedConnection>;
  propertyLiveStream?: Maybe<PropertyLiveStream>;
  propertyLiveStreams?: Maybe<PropertyLiveStreamsResult>;
  propertyLiveStreamsConnection?: Maybe<PropertyLiveStreamConnection>;
  propertyLocation?: Maybe<PropertyLocation>;
  propertyObject?: Maybe<PropertyObject>;
  propertyOverlay?: Maybe<PropertyOverlay>;
  propertyProfile?: Maybe<PropertyProfile>;
  propertyProfileByIds?: Maybe<Array<Maybe<PropertyProfile>>>;
  propertyProfileBySlug?: Maybe<PropertyProfile>;
  propertyProfileCount?: Maybe<Scalars['Int']['output']>;
  propertyProfileProperties?: Maybe<PropertySearchResult>;
  propertyProfilePropertiesCount?: Maybe<PropertyProfilePropertiesCount>;
  propertyProfilePropertyById?: Maybe<Property>;
  propertyProfileSearchSuggestion?: Maybe<Array<Maybe<PropertyProfile>>>;
  propertyPromotionGroupByProperty?: Maybe<PropertyPromotionGroup>;
  propertyPromotionGroupCampaign?: Maybe<PropertyPromotionGroupCampaign>;
  propertyPromotionGroupCampaignByPromotionId?: Maybe<PropertyPromotionGroupCampaign>;
  propertyPromotionGroupsConnection?: Maybe<PropertyPromotionGroupsConnection>;
  propertySearch?: Maybe<PropertySearchResult>;
  propertySearchCriteriaQuery?: Maybe<PropertySearchCriteria>;
  propertySearchToBoostSuggestions?: Maybe<Array<Maybe<Property>>>;
  propertyShow?: Maybe<PropertyShow>;
  propertyShowsConnection?: Maybe<PropertyShowConnection>;
  propertySuggestions?: Maybe<Array<Maybe<Property>>>;
  propertyValue?: Maybe<PropertyValue>;
  propertyValueSuggestions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  randomAgentByLocation?: Maybe<FeaturedAgentResult>;
  readUrlMetaTag?: Maybe<UrlMetaTag>;
  recentSoldPropertiesBySuburb?: Maybe<PropertiesConnection>;
  reservedLocationsConnection?: Maybe<LocationsConnection>;
  schoolsConnection?: Maybe<SchoolsConnection>;
  scrapeAgentReaUrl?: Maybe<AgentScrape>;
  searchSuburbSuggestionsByAgentProperties?: Maybe<Array<Maybe<Location>>>;
  searchSuggestion?: Maybe<SearchSuggestionResult>;
  siteMeta?: Maybe<SiteMeta>;
  sitemap?: Maybe<Sitemap>;
  sitemapJob?: Maybe<SitemapJob>;
  sitemapJobsConnection?: Maybe<SitemapJobsConnection>;
  sitemapsConnection?: Maybe<SitemapsConnection>;
  soldCountCategories?: Maybe<Array<Maybe<SoldCountCategory>>>;
  soldCountSuburbs?: Maybe<Array<Maybe<Location>>>;
  stripeInvoiceList?: Maybe<StripeInvoiceList>;
  suggestedSuburbsByAgentProperties?: Maybe<Array<Maybe<Location>>>;
  topTenFacebookPagesWithNewLikes?: Maybe<Array<Maybe<FacebookPage>>>;
  topic?: Maybe<Topic>;
  topicByUniqueId?: Maybe<Topic>;
  topicMessage?: Maybe<TopicMessage>;
  topicMessagesConnection?: Maybe<TopicMessageConnection>;
  topicsConnection?: Maybe<TopicsConnection>;
  unreadPlatformAgentEnquiryCounts?: Maybe<UnreadPlatformAgentEnquiryCount>;
  user?: Maybe<User>;
  userProperty?: Maybe<UserProperty>;
  verifyToken?: Maybe<AccessToken>;
  version: Scalars['Int']['output'];
  viewer?: Maybe<ViewerUser>;
  walkScore?: Maybe<WalkScore>;
  xmlLog?: Maybe<XmlLog>;
  xmlLogGroupsConnection?: Maybe<XmlLogGroupsConnection>;
  xmlLogSearchFilters?: Maybe<XmlLogSearchFilters>;
  xmlLogsConnection?: Maybe<XmlLogsConnection>;
  zenuListingById?: Maybe<ZenuListing>;
};

export type QueryActivitiesConnectionArgs = {
  options?: InputMaybe<ActivitiesConnectionOptions>;
};

export type QueryAdSalesAgreementByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAdminAgentsConnectionArgs = {
  filter?: InputMaybe<AdminAgentsConnectionFilter>;
};

export type QueryAdminPropertiesConnectionArgs = {
  filter?: InputMaybe<PropertiesConnectionFilter>;
};

export type QueryAdminUserArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAdminUsersConnectionArgs = {
  filter?: InputMaybe<AdminUsersConnectionFilter>;
};

export type QueryAgenciesByEmailArgs = {
  email: Scalars['String']['input'];
};

export type QueryAgenciesConnectionArgs = {
  filter?: InputMaybe<AgenciesConnectionOptions>;
};

export type QueryAgenciesConnectionByEnquiriesCountArgs = {
  filter?: InputMaybe<AgenciesConnectionByEnquiriesCountOptions>;
};

export type QueryAgencyArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgencyBillingCardsArgs = {
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryAgencyByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryAgencyCrmByAgencyIdArgs = {
  agencyId: Scalars['ID']['input'];
  crmId: Scalars['ID']['input'];
};

export type QueryAgencyCrmByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryAgencyCrmEagleConfigByAgencyCrmIdArgs = {
  agencyCrmId: Scalars['ID']['input'];
};

export type QueryAgencyCrmEmailArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgencyCrmLockedonConfigByAgencyCrmIdArgs = {
  agencyCrmId: Scalars['ID']['input'];
};

export type QueryAgencyCrmZenuConfigByAgencyCrmIdArgs = {
  agencyCrmId: Scalars['ID']['input'];
};

export type QueryAgencyEnquiryWebhookByAgencyIdArgs = {
  agencyId: Scalars['ID']['input'];
};

export type QueryAgencyGroupArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgencyGroupByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryAgencyGroupMemberArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgencyGroupsConnectionArgs = {
  options?: InputMaybe<AgencyGroupsConnectionOptions>;
};

export type QueryAgencyPropertiesCountArgs = {
  agencyId: Scalars['ID']['input'];
};

export type QueryAgencySitemapArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgencySubscriptionCouponArgs = {
  coupon: Scalars['String']['input'];
};

export type QueryAgencySuggestionsArgs = {
  filter?: InputMaybe<AgencySuggestionsFilter>;
};

export type QueryAgentArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgentBillingCardsArgs = {
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryAgentBoxListingByIdArgs = {
  listingId: Scalars['ID']['input'];
};

export type QueryAgentBriefArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgentBriefByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryAgentBriefsConnectionArgs = {
  options?: InputMaybe<AgentBriefsConnectionOptions>;
};

export type QueryAgentByUserNameArgs = {
  userName: Scalars['String']['input'];
};

export type QueryAgentByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryAgentContactArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgentContactsConnectionArgs = {
  options?: InputMaybe<AgentContactsConnectionOptions>;
};

export type QueryAgentConversationArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgentDirectoryStatusArgs = {
  locationId: Scalars['ID']['input'];
};

export type QueryAgentDirectorySubscriptionByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgentFindAccountArgs = {
  options: AgentFindAccountInput;
};

export type QueryAgentLeadByIdArgs = {
  agentId: Scalars['ID']['input'];
};

export type QueryAgentLeadsConnectionArgs = {
  filter?: InputMaybe<AgentLeadsConnectionFilter>;
};

export type QueryAgentProfileConnectionArgs = {
  filter?: InputMaybe<ConsumerPageConnectionFilter>;
};

export type QueryAgentPropertyInspectionArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgentPropertyInspectionVideoArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgentPropertyInspectionVideoCommentArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgentReviewArgs = {
  id: Scalars['ID']['input'];
};

export type QueryAgentReviewsConnectionArgs = {
  filter: AgentReviewConnectionFilter;
};

export type QueryAgentSubDomainArgs = {
  subDomain: Scalars['String']['input'];
};

export type QueryAgentSubscriptionCouponArgs = {
  coupon: Scalars['String']['input'];
};

export type QueryAgentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type QueryAgentsByEmailArgs = {
  email: Scalars['String']['input'];
};

export type QueryAgentsConnectionArgs = {
  filter: AgentsConnectionFilter;
};

export type QueryAgentsConnectionByEnquiriesCountArgs = {
  filter?: InputMaybe<AgentsConnectionByEnquiriesCountOptions>;
};

export type QueryAgentsCountByPropertySearchArgs = {
  filter?: InputMaybe<AgentsCountByPropertySearchFilter>;
};

export type QueryAppVersionByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryApplyPropertyCouponCodeArgs = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  tier: PromotePropertyTier;
};

export type QueryAutomatedAdLogGroupsConnectionArgs = {
  options?: InputMaybe<AutomatedAdLogConnectionOptions>;
};

export type QueryAutomatedAdLogsConnectionArgs = {
  options?: InputMaybe<AutomatedAdLogConnectionOptions>;
};

export type QueryBrokerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryBrokerAwardArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryBrokerBuyerAndSubBrokerSearchArgs = {
  input: BrokerBuyerAndSubBrokerSearchInput;
};

export type QueryBrokerBuyerInviteArgs = {
  id: Scalars['ID']['input'];
};

export type QueryBrokerCertificationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryBrokerChargeArgs = {
  id: Scalars['ID']['input'];
};

export type QueryBrokerCompaniesConnectionArgs = {
  filter?: InputMaybe<BrokerCompaniesConnectionFilter>;
};

export type QueryBrokerCompanyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryBrokerEnquiriesConnectionArgs = {
  filter?: InputMaybe<BrokerEnquiriesConnectionFilter>;
};

export type QueryBrokerEnquiryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryBrokerFindAccountArgs = {
  options: BrokerFindAccountInput;
};

export type QueryBrokerLocationsConnectionArgs = {
  filter?: InputMaybe<BrokerLocationsConnectionFilter>;
};

export type QueryBrokersConnectionArgs = {
  filter?: InputMaybe<BrokersConnectionOptions>;
};

export type QueryBrokersConnectionByEnquiriesCountArgs = {
  filter?: InputMaybe<BrokersConnectionOptions>;
};

export type QueryBusinessPagesConnectionArgs = {
  filter?: InputMaybe<ConsumerPageConnectionFilter>;
};

export type QueryCalculatePropertyPromoteArgs = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  propertyId: Scalars['ID']['input'];
  tier?: InputMaybe<PromotePropertyTier>;
};

export type QueryChannelArgs = {
  id: Scalars['ID']['input'];
};

export type QueryCheckAgencyPropertyArgs = {
  propertyId: Scalars['ID']['input'];
};

export type QueryCheckCouponValidationArgs = {
  couponCode: Scalars['String']['input'];
};

export type QueryConsumerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryConsumerAlertArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryConsumerAlertsConnectionArgs = {
  filter?: InputMaybe<ConsumerAlertsConnectionFilter>;
};

export type QueryConsumerByAgentIdArgs = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryConsumerClaimedPropertiesConnectionArgs = {
  filter?: InputMaybe<ConsumerClaimedPropertiesConnectionFilter>;
};

export type QueryConsumerCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryConsumerCollectionsConnectionArgs = {
  filter?: InputMaybe<ConsumerCollectionsConnectionFilter>;
};

export type QueryConsumerEventArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryConsumerEventTotalLikesArgs = {
  id: Scalars['ID']['input'];
};

export type QueryConsumerFollowAgencyByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryConsumerFollowAgentByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryConsumerFollowConsumerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryConsumerFollowPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryConsumerFollowPropertyByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryConsumerFollowSuburbByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryConsumerPageArgs = {
  pageId: Scalars['ID']['input'];
};

export type QueryConsumerPageByAgentIdArgs = {
  agentId: Scalars['ID']['input'];
};

export type QueryConsumerPageByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryConsumerPageConnectionArgs = {
  filter?: InputMaybe<ConsumerPageConnectionFilter>;
};

export type QueryConsumerPostArgs = {
  id: Scalars['ID']['input'];
};

export type QueryConsumerPropertyClaimArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryConsumerSearchSuggestionArgs = {
  filter?: InputMaybe<ConsumerSearchSuggestionFilter>;
};

export type QueryConsumersConnectionArgs = {
  filter?: InputMaybe<ConsumersConnectionFilter>;
};

export type QueryConsumersRequestConnectionArgs = {
  filter?: InputMaybe<ConsumerTypeRequestConnectionFilter>;
};

export type QueryContactAgentsConnectionArgs = {
  filter?: InputMaybe<ContactAgentsConnectionFilter>;
};

export type QueryContributorsConnectionArgs = {
  filter?: InputMaybe<ContributorsConnectionFilter>;
};

export type QueryConversationArgs = {
  id: Scalars['ID']['input'];
};

export type QueryCrmArgs = {
  id: Scalars['ID']['input'];
};

export type QueryCrmByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCrmUserArgs = {
  id: Scalars['ID']['input'];
};

export type QueryCrmsArgs = {
  showSystem?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryCrmsConnectionArgs = {
  filter?: InputMaybe<CrmsConnectionFilter>;
};

export type QueryDeveloperArgs = {
  id: Scalars['ID']['input'];
};

export type QueryDeveloperBySlugArgs = {
  slug: Scalars['String']['input'];
};

export type QueryDeveloperProjectArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryDeveloperProjectBySlugArgs = {
  slug: Scalars['String']['input'];
};

export type QueryDeveloperProjectEnquiriesConnectionArgs = {
  options?: InputMaybe<DeveloperProjectEnquiriesConnectionOptions>;
};

export type QueryDeveloperProjectEnquiryArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryDeveloperProjectSearchArgs = {
  options?: InputMaybe<DeveloperProjectSearchOptions>;
};

export type QueryDeveloperProjectsConnectionArgs = {
  options?: InputMaybe<DeveloperProjectsConnectionOptions>;
};

export type QueryEmailLogArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  type: EmailLogType;
};

export type QueryEnquireTrackerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryEventArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryEventConsumerLikeArgs = {
  id: Scalars['ID']['input'];
};

export type QueryEventQueryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryEventsConnectionArgs = {
  filter?: InputMaybe<EventsConnectionFilter>;
};

export type QueryEventsConnectionForDiscoverArgs = {
  filter?: InputMaybe<EventsConnectionFilter>;
};

export type QueryFacebookLinkPostConfigArgs = {
  input: FacebookLinkPostConfigInput;
};

export type QueryFacebookPageArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFacebookPageByPropertyIdArgs = {
  propertyId: Scalars['ID']['input'];
};

export type QueryFacebookPageGroupArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFacebookPageGroupsConnectionArgs = {
  filter?: InputMaybe<FacebookPageGroupsConnectionFilter>;
};

export type QueryFacebookPagePortalArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFacebookPagePortalByPageIdArgs = {
  pageId: Scalars['ID']['input'];
};

export type QueryFacebookPagePortalsConnectionArgs = {
  options?: InputMaybe<FacebookPagePortalsConnectionOptions>;
};

export type QueryFacebookPageSuggestionsArgs = {
  filter?: InputMaybe<FacebookPageSuggestionFilter>;
};

export type QueryFacebookPagesConnectionArgs = {
  filter?: InputMaybe<FacebookPagesConnectionFilter>;
};

export type QueryFacebookPagesListArgs = {
  filter?: InputMaybe<FacebookPagesConnectionFilter>;
};

export type QueryFacebookPagesNearbyConnectionArgs = {
  filter: FacebookPagesNearbyConnectionFilter;
};

export type QueryFacebookPostsPropertyStatisticsArgs = {
  propertyId: Scalars['ID']['input'];
};

export type QueryFeaturedAgentByLocationArgs = {
  locationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<FeaturedAgentByLocationType>;
};

export type QueryFeaturedAgentsArgs = {
  options?: InputMaybe<FeaturedAgentsOptions>;
};

export type QueryFeaturedAgentsUnderLocationArgs = {
  locationId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryFeaturedBrokerByLocationArgs = {
  locationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type QueryFeaturedBrokerUnderLocationArgs = {
  locationId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryFeaturedDeveloperProjectArgs = {
  filter?: InputMaybe<FeaturedDeveloperProjectFilterInput>;
};

export type QueryFeaturedLocationsConnectionArgs = {
  filter?: InputMaybe<LocationsConnectionFilter>;
};

export type QueryFeaturedPropertyFbPostArgs = {
  filter?: InputMaybe<FeaturedPropertyFbPostFilterInput>;
};

export type QueryFeaturedPropertyShowsArgs = {
  options?: InputMaybe<FeaturedPropertyShowsOptions>;
};

export type QueryFetchAllFacebookPagesArgs = {
  filter?: InputMaybe<FacebookPagesConnectionFilter>;
};

export type QueryFindAgenciesConnectionArgs = {
  filter?: InputMaybe<FindAgenciesConnectionFilter>;
};

export type QueryFindAgentAgencySearchSuggestionArgs = {
  filter?: InputMaybe<AgenciesConnectionOptions>;
};

export type QueryFindAgentSearchSuggestionArgs = {
  filter: FindAgentSearchSuggestionFilter;
};

export type QueryFindAgentsConnectionArgs = {
  filter?: InputMaybe<FindAgentsConnectionFilter>;
};

export type QueryFindBrokerSearchSuggestionArgs = {
  filter: FindBrokerSearchSuggestionFilter;
};

export type QueryFindBuyerAgentsConnectionArgs = {
  options?: InputMaybe<FindBuyerAgentsConnectionOptions>;
};

export type QueryFindHomeownerSuggestedLocationsArgs = {
  options: FindHomeownerSuggestedLocationsOptions;
};

export type QueryGetAgentClaimPagesArgs = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
  integrationId?: InputMaybe<Scalars['ID']['input']>;
  pageId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryGetClaimPagesArgs = {
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agentId?: InputMaybe<Scalars['ID']['input']>;
  integrationId?: InputMaybe<Scalars['ID']['input']>;
  pageId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryGoogleDriveFilesArgs = {
  googleDriveFolderId: Scalars['ID']['input'];
};

export type QueryHeroArgs = {
  id: Scalars['ID']['input'];
};

export type QueryHeroPropertiesArgs = {
  filter?: InputMaybe<PropertiesConnectionFilter>;
};

export type QueryHidePropertiesListArgs = {
  consumerId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryIntegrationByTypeArgs = {
  type?: InputMaybe<IntegrationType>;
};

export type QueryIpInfoCitySuggestionsArgs = {
  filter?: InputMaybe<IpInfoCitySuggestionsFilter>;
};

export type QueryIpInfoCountrySuggestionsArgs = {
  filter?: InputMaybe<IpInfoCountrySuggestionsFilter>;
};

export type QueryIsAgencyEmailExistArgs = {
  email: Scalars['String']['input'];
};

export type QueryIsAgencyEmailExistReturnDataArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  packageType?: InputMaybe<AgencySubscriptionPackage>;
};

export type QueryIsAgentEmailExistArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type QueryIsAgentForgotPasswordVerificationExistArgs = {
  verificationKey?: InputMaybe<Scalars['String']['input']>;
};

export type QueryIsAgentMobileNumberExistArgs = {
  mobileNumber: Scalars['String']['input'];
};

export type QueryIsAgentReviewCodeExistArgs = {
  reviewCode: Scalars['String']['input'];
};

export type QueryIsAgentReviewRequestCodeExistArgs = {
  code: Scalars['String']['input'];
};

export type QueryIsAgentUsernameExistArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type QueryIsAlreadyFeaturedArgs = {
  locationId: Scalars['ID']['input'];
};

export type QueryIsBrokerForgotPasswordVerificationExistArgs = {
  verificationKey?: InputMaybe<Scalars['String']['input']>;
};

export type QueryIsConsumerForgotPasswordVerificationExistArgs = {
  verificationKey?: InputMaybe<Scalars['String']['input']>;
};

export type QueryIsDeveloperForgotPasswordCodeExistArgs = {
  code: Scalars['String']['input'];
};

export type QueryIsExistBrokerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryIsExistConsumerArgs = {
  email: Scalars['String']['input'];
};

export type QueryIsForgotPasswordVerificationExistArgs = {
  verificationKey?: InputMaybe<Scalars['String']['input']>;
};

export type QueryIsVerificationExistArgs = {
  verificationKey?: InputMaybe<Scalars['String']['input']>;
};

export type QueryLatestAgentOfferByBriefIdAndPropertyIdArgs = {
  agentBriefId: Scalars['ID']['input'];
  propertyId: Scalars['ID']['input'];
};

export type QueryLatestChannelByNameArgs = {
  name: ChannelName;
};

export type QueryLeadMessagesConnectionArgs = {
  filter?: InputMaybe<LeadUpdatesConnectionFilter>;
};

export type QueryLiveStreamArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryLocationArgs = {
  full?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  suburbCode?: InputMaybe<Scalars['String']['input']>;
};

export type QueryLocationBySuburbCodeArgs = {
  suburbCode?: InputMaybe<Scalars['String']['input']>;
};

export type QueryLocationFacebookPagesArgs = {
  locationId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryLocationInfoArgs = {
  locationId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryLocationPropertiesCountArgs = {
  locationId?: InputMaybe<Scalars['ID']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
};

export type QueryLocationStatisticsArgs = {
  locationId?: InputMaybe<Scalars['ID']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type QueryLocationSuggestionsArgs = {
  filter?: InputMaybe<LocationSuggestionsFilter>;
};

export type QueryLocationSuggestionsSearchArgs = {
  filter?: InputMaybe<LocationSuggestionsFilter>;
};

export type QueryLocationTagsArgs = {
  locationId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryLocationsByFullArgs = {
  locations: Array<Scalars['String']['input']>;
};

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type QueryLocationsBySuburbCodeArgs = {
  suburbCodes: Array<Scalars['String']['input']>;
};

export type QueryLocationsConnectionArgs = {
  filter?: InputMaybe<LocationsConnectionFilter>;
};

export type QueryLocationsNearbyConnectionArgs = {
  filter: LocationsNearbyConnectionFilter;
};

export type QueryLocationsWithPriceConnectionArgs = {
  filter?: InputMaybe<LocationsConnectionFilter>;
};

export type QueryMailgunEventArgs = {
  id: Scalars['ID']['input'];
};

export type QueryMailgunEventsConnectionArgs = {
  options?: InputMaybe<MailgunEventsConnectionOptions>;
};

export type QueryMailgunTagArgs = {
  id: Scalars['ID']['input'];
};

export type QueryMailgunTagsConnectionArgs = {
  options?: InputMaybe<MailgunTagsConnectionOptions>;
};

export type QueryNearbySchoolsConnectionArgs = {
  filter: NearbySchoolsConnectionFilter;
};

export type QueryNearestFacebookPageByPropertyUniqueIdArgs = {
  uniqueId: Scalars['ID']['input'];
};

export type QueryNearestPropertiesConnectionArgs = {
  options?: InputMaybe<NearestPropertiesConnectionOptions>;
};

export type QueryNearestPropertyShowConnectionArgs = {
  options?: InputMaybe<NearestPropertyShowConnectionOptions>;
};

export type QueryOfiTimeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPageSessionByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryPlatformAgentArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryPlatformAgentByDomainNameArgs = {
  domainName: Scalars['String']['input'];
};

export type QueryPlatformAgentDomainByDomainNameArgs = {
  domainName: Scalars['String']['input'];
};

export type QueryPlatformAgentInstagramArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryPlatformAgentsConnectionArgs = {
  options?: InputMaybe<PlatformAgentsConnectionOptions>;
};

export type QueryPreviewFeaturedAgentByLocationArgs = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
  locationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type QueryProjectByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryPromotePropertiesConnectionArgs = {
  filter?: InputMaybe<PromotePropertiesConnectionFilter>;
};

export type QueryPropertiesByRegionArgs = {
  filter?: InputMaybe<PropertiesByRegionConnectionFilter>;
};

export type QueryPropertiesConnectionArgs = {
  filter?: InputMaybe<PropertiesConnectionFilter>;
};

export type QueryPropertiesUnderLocationArgs = {
  filter?: InputMaybe<LocationPropertiesConnectionFilter>;
};

export type QueryPropertyArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPropertyAddressSuggestionsArgs = {
  filter?: InputMaybe<PropertyAddressSuggestionFilter>;
};

export type QueryPropertyAppraisalEnquiryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPropertyAuctionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPropertyByFbPostArgs = {
  postId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPropertyByShortIdArgs = {
  shortId: Scalars['ID']['input'];
};

export type QueryPropertyByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryPropertyByXmlAgentIdAndUniqueIdArgs = {
  agentId: Scalars['ID']['input'];
  uniqueId: Scalars['ID']['input'];
};

export type QueryPropertyCouponsConnectionArgs = {
  filter: PropertyCouponsConnectionFilter;
};

export type QueryPropertyEnquiriesConnectionArgs = {
  filter?: InputMaybe<PropertyEnquiriesConnectionFilter>;
};

export type QueryPropertyEnquiryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPropertyFbPostArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPropertyFbPostByPostIdArgs = {
  postId: Scalars['ID']['input'];
};

export type QueryPropertyFeatureArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPropertyFeaturedArgs = {
  options?: InputMaybe<PropertyFeaturedOptions>;
};

export type QueryPropertyFeaturedConnectionArgs = {
  filter: PropertyFeaturedConnectionFilter;
};

export type QueryPropertyLiveStreamArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryPropertyLiveStreamsArgs = {
  options?: InputMaybe<PropertyLiveStreamOptions>;
};

export type QueryPropertyLiveStreamsConnectionArgs = {
  options?: InputMaybe<PropertyLiveStreamsConnectionOptions>;
};

export type QueryPropertyLocationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPropertyObjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPropertyOverlayArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPropertyProfileArgs = {
  slug: Scalars['ID']['input'];
};

export type QueryPropertyProfileByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type QueryPropertyProfileBySlugArgs = {
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPropertyProfilePropertiesArgs = {
  filter?: InputMaybe<PropertyProfilePropertiesFilter>;
};

export type QueryPropertyProfilePropertiesCountArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPropertyProfilePropertyByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryPropertyProfileSearchSuggestionArgs = {
  filter?: InputMaybe<PropertyProfileSearchSuggestionsFilter>;
};

export type QueryPropertyPromotionGroupByPropertyArgs = {
  propertyId: Scalars['ID']['input'];
};

export type QueryPropertyPromotionGroupCampaignArgs = {
  uuid: Scalars['ID']['input'];
};

export type QueryPropertyPromotionGroupCampaignByPromotionIdArgs = {
  promotionId: Scalars['ID']['input'];
};

export type QueryPropertyPromotionGroupsConnectionArgs = {
  options?: InputMaybe<PropertyPromotionGroupsConnectionOptions>;
};

export type QueryPropertySearchArgs = {
  options?: InputMaybe<PropertySearchOptions>;
};

export type QueryPropertySearchToBoostSuggestionsArgs = {
  filter?: InputMaybe<PropertySearchToBoostFilter>;
};

export type QueryPropertyShowArgs = {
  id: Scalars['ID']['input'];
};

export type QueryPropertyShowsConnectionArgs = {
  options?: InputMaybe<PropertyShowsConnectionOptions>;
};

export type QueryPropertySuggestionsArgs = {
  filter?: InputMaybe<PropertySuggestionsFilter>;
};

export type QueryPropertyValueArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
};

export type QueryPropertyValueSuggestionsArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
};

export type QueryRandomAgentByLocationArgs = {
  options?: InputMaybe<RandomAgentByLocationOptions>;
};

export type QueryReadUrlMetaTagArgs = {
  url: Scalars['String']['input'];
};

export type QueryRecentSoldPropertiesBySuburbArgs = {
  filter: PropertiesConnectionFilter;
};

export type QueryReservedLocationsConnectionArgs = {
  filter?: InputMaybe<LocationsConnectionFilter>;
};

export type QuerySchoolsConnectionArgs = {
  filter?: InputMaybe<SchoolsConnectionFilter>;
};

export type QueryScrapeAgentReaUrlArgs = {
  url: Scalars['String']['input'];
};

export type QuerySearchSuburbSuggestionsByAgentPropertiesArgs = {
  filter?: InputMaybe<LocationSearchSuggestionsFilter>;
};

export type QuerySearchSuggestionArgs = {
  filter?: InputMaybe<SearchSuggestionFilter>;
};

export type QuerySiteMetaArgs = {
  url: Scalars['String']['input'];
};

export type QuerySitemapArgs = {
  id: Scalars['ID']['input'];
};

export type QuerySitemapJobArgs = {
  id: Scalars['ID']['input'];
};

export type QuerySitemapJobsConnectionArgs = {
  options?: InputMaybe<SitemapJobsConnectionOptions>;
};

export type QuerySitemapsConnectionArgs = {
  filter?: InputMaybe<SitemapsConnectionFilter>;
};

export type QuerySoldCountCategoriesArgs = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
};

export type QuerySoldCountSuburbsArgs = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryStripeInvoiceListArgs = {
  options: StripeInvoiceListOptions;
};

export type QuerySuggestedSuburbsByAgentPropertiesArgs = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryTopicArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  uniqueId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryTopicByUniqueIdArgs = {
  uniqueId: Scalars['ID']['input'];
};

export type QueryTopicMessageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryTopicMessagesConnectionArgs = {
  filter?: InputMaybe<TopicMessagesConnectionFilter>;
};

export type QueryTopicsConnectionArgs = {
  filter?: InputMaybe<TopicsConnectionFilter>;
};

export type QueryUnreadPlatformAgentEnquiryCountsArgs = {
  platformAgentUuid: Scalars['ID']['input'];
};

export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUserPropertyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryVerifyTokenArgs = {
  accessToken: Scalars['String']['input'];
};

export type QueryWalkScoreArgs = {
  address: Scalars['String']['input'];
  latLng: LatLngInput;
};

export type QueryXmlLogArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryXmlLogGroupsConnectionArgs = {
  filter?: InputMaybe<XmlLogGroupsConnectionFilter>;
};

export type QueryXmlLogsConnectionArgs = {
  filter?: InputMaybe<XmlLogsConnectionFilter>;
};

export type QueryZenuListingByIdArgs = {
  listingId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};

export type RandomAgentByLocationOptions = {
  locationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<FeaturedAgentByLocationType>;
};

export enum RealTimeAlertsOptions {
  Activation = 'ACTIVATION',
  Alerts = 'ALERTS',
  Conveyancing = 'CONVEYANCING',
  Evaluation = 'EVALUATION',
  Inactivity = 'INACTIVITY',
  InspectBAndP = 'INSPECT_B_AND_P',
  InspectPhysical = 'INSPECT_PHYSICAL',
  Negotiation = 'NEGOTIATION',
  Offer = 'OFFER',
  Shortlist = 'SHORTLIST',
  Strategy = 'STRATEGY',
  Unconditional = 'UNCONDITIONAL',
}

export type RecentSold = {
  __typename?: 'RecentSold';
  address?: Maybe<Scalars['String']['output']>;
  agencyName?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  isShowPrice?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  soldPrice?: Maybe<Scalars['String']['output']>;
};

export type RemoveAgentConversationContactInput = {
  agentContactIds: Array<Scalars['ID']['input']>;
  agentConversationId: Scalars['ID']['input'];
};

export type RemoveBrokerMemberInput = {
  brokerId: Scalars['ID']['input'];
  endDate?: InputMaybe<Scalars['Date']['input']>;
  isCancelSubscription?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RentalSaleDateCountMap = {
  __typename?: 'RentalSaleDateCountMap';
  date?: Maybe<Scalars['Date']['output']>;
  rentalCount?: Maybe<Scalars['Int']['output']>;
  saleCount?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ReportingPeriod = {
  __typename?: 'ReportingPeriod';
  duration?: Maybe<Scalars['Int']['output']>;
  timeUnit?: Maybe<Scalars['String']['output']>;
};

export enum RequestScrapeAgencyType {
  AgencyRent = 'AGENCY_RENT',
  AgencySale = 'AGENCY_SALE',
  AgencySold = 'AGENCY_SOLD',
}

export type ReviewRating = {
  __typename?: 'ReviewRating';
  averageReview?: Maybe<Scalars['Float']['output']>;
  numberOfReviews?: Maybe<Scalars['Int']['output']>;
};

export type ReviewsConnection = {
  __typename?: 'ReviewsConnection';
  edges?: Maybe<Array<Maybe<AgentReviewEdge>>>;
  nodes?: Maybe<Array<Maybe<AgentReview>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type ReviewsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum RiskTolerance {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
}

export type S3Object = {
  __typename?: 'S3Object';
  fileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  s3Key?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SaveAgencyAutomatedAdSettingInput = {
  agencyId: Scalars['ID']['input'];
  campaignRentalBudget?: InputMaybe<Scalars['Float']['input']>;
  campaignRentalDays?: InputMaybe<Scalars['Int']['input']>;
  campaignRentalIsPackage?: InputMaybe<Scalars['Boolean']['input']>;
  campaignSaleBudget?: InputMaybe<Scalars['Float']['input']>;
  campaignSaleDays?: InputMaybe<Scalars['Int']['input']>;
  campaignSaleIsPackage?: InputMaybe<Scalars['Boolean']['input']>;
  campaignSoldBudget?: InputMaybe<Scalars['Float']['input']>;
  campaignSoldDays?: InputMaybe<Scalars['Int']['input']>;
  campaignSoldIsPackage?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isBoostForRent?: InputMaybe<Scalars['Boolean']['input']>;
  isBoostForSale?: InputMaybe<Scalars['Boolean']['input']>;
  isBoostSold?: InputMaybe<Scalars['Boolean']['input']>;
  isSendReport?: InputMaybe<Scalars['Boolean']['input']>;
  reportEmail?: InputMaybe<Scalars['String']['input']>;
};

export type SaveAgencyCrmEagleConfigInput = {
  agencyCrmId: Scalars['ID']['input'];
  agencyId: Scalars['ID']['input'];
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  isSendEnquiries?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SaveAgencyCrmLockedonConfigInput = {
  agencyCrmId: Scalars['ID']['input'];
  agencyId: Scalars['ID']['input'];
  officeId?: InputMaybe<Scalars['String']['input']>;
};

export type SaveAgencyCrmZenuConfigInput = {
  agencyCrmId: Scalars['ID']['input'];
  agencyId: Scalars['ID']['input'];
  authorisationId?: InputMaybe<Scalars['String']['input']>;
  authorisationToken?: InputMaybe<Scalars['String']['input']>;
};

export type SaveAgencyEnquiryWebhookInput = {
  agencyId: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  officeId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AgencyEnquiryWebhookType>;
  url: Scalars['String']['input'];
};

export type SaveAgencySettingInput = {
  agencyId: Scalars['ID']['input'];
  isAdvertiseFindAds?: InputMaybe<Scalars['Boolean']['input']>;
  isAdvertiseThribee?: InputMaybe<Scalars['Boolean']['input']>;
  isPostRental?: InputMaybe<Scalars['Boolean']['input']>;
  isPostSale?: InputMaybe<Scalars['Boolean']['input']>;
  isPostSold?: InputMaybe<Scalars['Boolean']['input']>;
  isSendBuyerEnquiries?: InputMaybe<Scalars['Boolean']['input']>;
  isSendGeneralNews?: InputMaybe<Scalars['Boolean']['input']>;
  isSendMarketingInitiatives?: InputMaybe<Scalars['Boolean']['input']>;
  isSendNewListingNotification?: InputMaybe<Scalars['Boolean']['input']>;
  isSendTpsNotification?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['Timezone']['input']>;
  timezoneOffset?: InputMaybe<Scalars['Int']['input']>;
};

export type SaveAgentAutomatedAdSettingInput = {
  agentId: Scalars['ID']['input'];
  campaignRentalBudget?: InputMaybe<Scalars['Float']['input']>;
  campaignRentalDays?: InputMaybe<Scalars['Int']['input']>;
  campaignSaleBudget?: InputMaybe<Scalars['Float']['input']>;
  campaignSaleDays?: InputMaybe<Scalars['Int']['input']>;
  campaignSoldBudget?: InputMaybe<Scalars['Float']['input']>;
  campaignSoldDays?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isBoostForRent?: InputMaybe<Scalars['Boolean']['input']>;
  isBoostForSale?: InputMaybe<Scalars['Boolean']['input']>;
  isBoostSold?: InputMaybe<Scalars['Boolean']['input']>;
  isSendReport?: InputMaybe<Scalars['Boolean']['input']>;
  reportEmail?: InputMaybe<Scalars['String']['input']>;
};

export type SaveAgentChecklistInput = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
  hasArrangedInsurance?: InputMaybe<Scalars['Boolean']['input']>;
  hasAttendedAuction?: InputMaybe<Scalars['Boolean']['input']>;
  hasAttendedSettlement?: InputMaybe<Scalars['Boolean']['input']>;
  hasBookedAdditionalInspection?: InputMaybe<Scalars['Boolean']['input']>;
  hasCheckedComparableSales?: InputMaybe<Scalars['Boolean']['input']>;
  hasChosenSuburbsAndPropertyType?: InputMaybe<Scalars['Boolean']['input']>;
  hasCollectedKeys?: InputMaybe<Scalars['Boolean']['input']>;
  hasCompletedAdvancedBriefWithAi?: InputMaybe<Scalars['Boolean']['input']>;
  hasConfirmedContractTerms?: InputMaybe<Scalars['Boolean']['input']>;
  hasDecidedNonNegotiablesAndWishListFeatures?: InputMaybe<Scalars['Boolean']['input']>;
  hasDefinedPurchaseGoal?: InputMaybe<Scalars['Boolean']['input']>;
  hasDonePreSettlementInspection?: InputMaybe<Scalars['Boolean']['input']>;
  hasDownloadedHomeownerApp?: InputMaybe<Scalars['Boolean']['input']>;
  hasEngagedAuction?: InputMaybe<Scalars['Boolean']['input']>;
  hasEngagedPrivateTreaty?: InputMaybe<Scalars['Boolean']['input']>;
  hasEnsuredFunds?: InputMaybe<Scalars['Boolean']['input']>;
  hasFinanceApproved?: InputMaybe<Scalars['Boolean']['input']>;
  hasFoundSelectedBroker?: InputMaybe<Scalars['Boolean']['input']>;
  hasInspectedProperties?: InputMaybe<Scalars['Boolean']['input']>;
  hasInvitedTeamMember?: InputMaybe<Scalars['Boolean']['input']>;
  hasLookedInMarketplace?: InputMaybe<Scalars['Boolean']['input']>;
  hasOrderedBuildingAndPestInspectionReport?: InputMaybe<Scalars['Boolean']['input']>;
  hasOrderedPreOfferInspection?: InputMaybe<Scalars['Boolean']['input']>;
  hasOrderedPropertyValuation?: InputMaybe<Scalars['Boolean']['input']>;
  hasOrganisedListUtilitiesServices?: InputMaybe<Scalars['Boolean']['input']>;
  hasPaidDeposit?: InputMaybe<Scalars['Boolean']['input']>;
  hasProvidedContractToLenderAndConveyancer?: InputMaybe<Scalars['Boolean']['input']>;
  hasRequestedContractOfSale?: InputMaybe<Scalars['Boolean']['input']>;
  hasResearchedOverlays?: InputMaybe<Scalars['Boolean']['input']>;
  hasResearchedRecentSales?: InputMaybe<Scalars['Boolean']['input']>;
  hasReviewedBasicAlertsAndShortlist?: InputMaybe<Scalars['Boolean']['input']>;
  hasReviewedSmartAlertsAndShortlist?: InputMaybe<Scalars['Boolean']['input']>;
  hasSecuredProperty?: InputMaybe<Scalars['Boolean']['input']>;
  hasSentContract?: InputMaybe<Scalars['Boolean']['input']>;
  hasSetMaximumBudget?: InputMaybe<Scalars['Boolean']['input']>;
  hasSetWalkAwayPrice?: InputMaybe<Scalars['Boolean']['input']>;
  hasSharedInformationWithTeam?: InputMaybe<Scalars['Boolean']['input']>;
  hasStrategy?: InputMaybe<Scalars['Boolean']['input']>;
  hasSubmittedOffer?: InputMaybe<Scalars['Boolean']['input']>;
  hasUpdatedAddress?: InputMaybe<Scalars['Boolean']['input']>;
  hasUpgradedBuyerAssist?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SaveAgentInstagramFromCodeInput = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
  uuid: Scalars['ID']['input'];
};

export type SaveAgentSettingInput = {
  agentId: Scalars['ID']['input'];
  alertFrequency?: InputMaybe<AlertFrequencyOptions>;
  alertNotification?: InputMaybe<AlertNotificationOptions>;
  alertPropertyGroup?: InputMaybe<AlertPropertyGroupOptions>;
  isPostRental?: InputMaybe<Scalars['Boolean']['input']>;
  isPostSale?: InputMaybe<Scalars['Boolean']['input']>;
  isPostSold?: InputMaybe<Scalars['Boolean']['input']>;
  isSendEmailNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  isSendMobileNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  isSendNegotiationEmail?: InputMaybe<Scalars['Boolean']['input']>;
  isSendNegotiationSms?: InputMaybe<Scalars['Boolean']['input']>;
  preferredTimeZone?: InputMaybe<Scalars['Timezone']['input']>;
  saveStreamToGallery?: InputMaybe<SaveStreamToGalleryOptions>;
  timezone?: InputMaybe<Scalars['Timezone']['input']>;
  timezoneOffset?: InputMaybe<Scalars['Int']['input']>;
};

export type SaveBrokerConfigInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type SaveBrokerSettingInput = {
  isSendBuyerActivation?: InputMaybe<Scalars['Boolean']['input']>;
  isSendBuyerAlerts?: InputMaybe<Scalars['Boolean']['input']>;
  isSendBuyerConveyancing?: InputMaybe<Scalars['Boolean']['input']>;
  isSendBuyerEvaluation?: InputMaybe<Scalars['Boolean']['input']>;
  isSendBuyerInactivity?: InputMaybe<Scalars['Boolean']['input']>;
  isSendBuyerInspectBAndP?: InputMaybe<Scalars['Boolean']['input']>;
  isSendBuyerInspectPhysical?: InputMaybe<Scalars['Boolean']['input']>;
  isSendBuyerNegotiation?: InputMaybe<Scalars['Boolean']['input']>;
  isSendBuyerOffer?: InputMaybe<Scalars['Boolean']['input']>;
  isSendBuyerShortlist?: InputMaybe<Scalars['Boolean']['input']>;
  isSendBuyerStrategy?: InputMaybe<Scalars['Boolean']['input']>;
  isSendBuyerUnconditional?: InputMaybe<Scalars['Boolean']['input']>;
  sendAlertsVia?: InputMaybe<SendAlertsType>;
};

export type SaveDeveloperProjectInput = {
  description: Scalars['String']['input'];
  developerProjectUuid: Scalars['ID']['input'];
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  videoUrl: Scalars['String']['input'];
};

export type SavePlatformAgentInstagramFromCodeInput = {
  code: Scalars['String']['input'];
  platformAgentUuid: Scalars['ID']['input'];
  redirectUri: Scalars['String']['input'];
};

export type SavePlatformAgentThemeInput = {
  fontFamily?: InputMaybe<Scalars['String']['input']>;
  platformAgentId: Scalars['ID']['input'];
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
  template: PlatformAgentThemeTemplate;
  textColor?: InputMaybe<Scalars['String']['input']>;
};

export type SavePropertyLocationInput = {
  locationId: Scalars['ID']['input'];
  propertyId: Scalars['ID']['input'];
};

export type SavePropertyOverlayInput = {
  developmentUpside?: InputMaybe<Scalars['String']['input']>;
  dwellingSizeSqm?: InputMaybe<Scalars['Float']['input']>;
  fireRiskFactor?: InputMaybe<Scalars['Int']['input']>;
  fireRiskText?: InputMaybe<Scalars['String']['input']>;
  floodRiskFactor?: InputMaybe<Scalars['Int']['input']>;
  floodRiskText?: InputMaybe<Scalars['String']['input']>;
  frontageSizeSqm?: InputMaybe<Scalars['Float']['input']>;
  heritageRiskFactor?: InputMaybe<Scalars['Int']['input']>;
  heritageText?: InputMaybe<Scalars['String']['input']>;
  isEasementIdentified?: InputMaybe<PropertyOverlayOption>;
  isHeritage?: InputMaybe<PropertyOverlayOption>;
  isMainRoadOrRoundAbout?: InputMaybe<PropertyOverlayOption>;
  isPrePortal?: InputMaybe<Scalars['Boolean']['input']>;
  isPropertyActive?: InputMaybe<Scalars['Boolean']['input']>;
  isTenanted?: InputMaybe<PropertyOverlayOption>;
  isTrainStation?: InputMaybe<PropertyOverlayOption>;
  leaseEndDate?: InputMaybe<Scalars['Date']['input']>;
  prePortalGroup?: InputMaybe<PrePortalGroup>;
  propertyId: Scalars['ID']['input'];
  rentalAppraisal?: InputMaybe<Scalars['Float']['input']>;
  socialHousingPercent?: InputMaybe<Scalars['Float']['input']>;
  yieldPercent?: InputMaybe<Scalars['Float']['input']>;
};

export enum SaveStreamToGalleryOptions {
  Always = 'ALWAYS',
  Ask = 'ASK',
  Never = 'NEVER',
}

export type SaveWhitelabelSettingInput = {
  businessName?: InputMaybe<Scalars['String']['input']>;
  subDomain?: InputMaybe<Scalars['String']['input']>;
  tempUrl?: InputMaybe<Scalars['String']['input']>;
  themeColor?: InputMaybe<Scalars['String']['input']>;
};

export type School = {
  __typename?: 'School';
  city?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  distance?: Maybe<Scalars['Float']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postCode?: Maybe<Scalars['String']['output']>;
  sector?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `types`. */
  type?: Maybe<Array<Maybe<SchoolType>>>;
  types?: Maybe<Array<Maybe<SchoolType>>>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SchoolEdge = {
  __typename?: 'SchoolEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<School>;
};

export enum SchoolType {
  ActivityCentre = 'ActivityCentre',
  All = 'All',
  Composite = 'Composite',
  CompositeYearOneToTen = 'CompositeYearOneToTen',
  Contributing = 'Contributing',
  CorrespondenceSchool = 'CorrespondenceSchool',
  FullPrimary = 'FullPrimary',
  Intermediate = 'Intermediate',
  Primary = 'Primary',
  RestrictedCompositeYearSevenToTen = 'RestrictedCompositeYearSevenToTen',
  Secondary = 'Secondary',
  SecondaryYearElevenToFifteen = 'SecondaryYearElevenToFifteen',
  SecondaryYearNineToFifteen = 'SecondaryYearNineToFifteen',
  SecondaryYearSevenToFifteen = 'SecondaryYearSevenToFifteen',
  SecondaryYearSevenToTen = 'SecondaryYearSevenToTen',
  Special = 'Special',
  SpecialSchool = 'SpecialSchool',
  TeenParentUnit = 'TeenParentUnit',
}

export type SchoolsConnection = {
  __typename?: 'SchoolsConnection';
  edges?: Maybe<Array<Maybe<SchoolEdge>>>;
  nodes?: Maybe<Array<Maybe<School>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type SchoolsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<SchoolType>;
};

export type SearchResultPageInfo = {
  __typename?: 'SearchResultPageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  numberOfPages?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
};

export type SearchSuggestionFilter = {
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export type SearchSuggestionResult = {
  __typename?: 'SearchSuggestionResult';
  properties?: Maybe<Array<Maybe<Property>>>;
  result?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SelfHref = {
  __typename?: 'SelfHref';
  href?: Maybe<Scalars['String']['output']>;
};

export enum SellingPrice {
  Range_1MTo_2M = 'RANGE_1M_TO_2M',
  Range_2MOrMore = 'RANGE_2M_OR_MORE',
  Range_5KTo_10K = 'RANGE_5K_TO_10K',
  Range_10KTo_15K = 'RANGE_10K_TO_15K',
  Range_15KOrMore = 'RANGE_15K_OR_MORE',
  Range_500KTo_1M = 'RANGE_500K_TO_1M',
  RangeLessThan_5K = 'RANGE_LESS_THAN_5K',
  RangeLessThan_500K = 'RANGE_LESS_THAN_500K',
}

export type SendActivateAgencyCrmInput = {
  agencyId: Scalars['ID']['input'];
  agencyName: Scalars['String']['input'];
  crmEmail: Scalars['String']['input'];
  crmId: Scalars['ID']['input'];
  firstName: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
};

export type SendAgentForgotPasswordEmailCodeResult = {
  __typename?: 'SendAgentForgotPasswordEmailCodeResult';
  email: Scalars['String']['output'];
  hashedCode: Scalars['String']['output'];
};

export type SendAgentFromSignUpEmailInput = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
};

export type SendAgentPropertyInspectionUrlInput = {
  buyerName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  mobileNumber: Scalars['String']['input'];
  mobileNumberCountryCode: Scalars['Int']['input'];
};

export enum SendAlertsType {
  Email = 'EMAIL',
  Sms = 'SMS',
  SmsEmail = 'SMS_EMAIL',
}

export type SendBrokerInviteInput = {
  business?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  mobileNumber: Scalars['String']['input'];
  mobileNumberCountryCode: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type SendEmailFromPrePortalPreRegisterInput = {
  contactNumber: Scalars['String']['input'];
  contactNumberCountryCode: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  message: Scalars['String']['input'];
  packageName: Scalars['String']['input'];
};

export type SendEmailInput = {
  attachmentFromUrl?: InputMaybe<Scalars['String']['input']>;
  bodyText: Scalars['String']['input'];
  recipients: Array<InputMaybe<Scalars['String']['input']>>;
  subject: Scalars['String']['input'];
};

export type SendEmailShortlistToBuyerInput = {
  clientEmail: Scalars['String']['input'];
  clientName: Scalars['String']['input'];
  propertyId: Scalars['ID']['input'];
};

export type SendPlatformAgentOtpInput = {
  contactNumber: Scalars['String']['input'];
  contactNumberCountryCode: Scalars['Int']['input'];
  platformAgentUuid: Scalars['ID']['input'];
  source: OtpSource;
};

export type SendRealtyLiveInviteAgentEmailInput = {
  agentId: Scalars['ID']['input'];
  agentType: SendRealtyLiveInviteAgentEmailType;
  email: Scalars['String']['input'];
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export enum SendRealtyLiveInviteAgentEmailType {
  Buyer = 'BUYER',
  Seller = 'SELLER',
}

export type SendWebinarBuildBrandDetailsInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  office: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type SiteMeta = {
  __typename?: 'SiteMeta';
  description?: Maybe<Scalars['String']['output']>;
  host: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['ID']['output'];
};

export type Sitemap = {
  __typename?: 'Sitemap';
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sitemap?: Maybe<Scalars['JSON']['output']>;
};

export type SitemapEdge = {
  __typename?: 'SitemapEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Sitemap>;
};

export type SitemapJob = {
  __typename?: 'SitemapJob';
  agencyId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  jobId?: Maybe<Scalars['Int']['output']>;
  sitemapId?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<SitemapJobType>;
};

export type SitemapJobEdge = {
  __typename?: 'SitemapJobEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Agency>;
};

export enum SitemapJobType {
  AgencyRent = 'AGENCY_RENT',
  AgencySale = 'AGENCY_SALE',
  AgencySold = 'AGENCY_SOLD',
  PropertyRent = 'PROPERTY_RENT',
  PropertySale = 'PROPERTY_SALE',
  PropertySold = 'PROPERTY_SOLD',
}

export type SitemapJobsConnection = {
  __typename?: 'SitemapJobsConnection';
  edges?: Maybe<Array<Maybe<SitemapJobEdge>>>;
  nodes?: Maybe<Array<Maybe<SitemapJob>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type SitemapJobsConnectionOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type SitemapsConnection = {
  __typename?: 'SitemapsConnection';
  edges?: Maybe<Array<Maybe<SitemapEdge>>>;
  nodes?: Maybe<Array<Maybe<Sitemap>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type SitemapsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type SoldCountCategory = {
  __typename?: 'SoldCountCategory';
  category?: Maybe<Scalars['String']['output']>;
  countCategory?: Maybe<Scalars['Int']['output']>;
};

export type SoldCountOptions = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  excludePropertyIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type SoldListingPriceAddressInfo = {
  __typename?: 'SoldListingPriceAddressInfo';
  address?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['Float']['output']>;
};

export enum SourceType {
  Agency = 'AGENCY',
  AgencyAgent = 'AGENCY_AGENT',
  Agent = 'AGENT',
}

export type StatisticsCount = {
  __typename?: 'StatisticsCount';
  count?: Maybe<Scalars['Int']['output']>;
};

export type StatusCountMap = {
  __typename?: 'StatusCountMap';
  count?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export enum StripeAccount {
  AgentAds = 'AGENT_ADS',
  Homeowner = 'HOMEOWNER',
  Realty = 'REALTY',
}

export type StripeCustomerAddress = {
  __typename?: 'StripeCustomerAddress';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type StripeCustomerBillingInfo = {
  __typename?: 'StripeCustomerBillingInfo';
  address?: Maybe<StripeCustomerAddress>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type StripeCustomerCard = {
  __typename?: 'StripeCustomerCard';
  addressCity?: Maybe<Scalars['String']['output']>;
  addressCountry?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressState?: Maybe<Scalars['String']['output']>;
  addressZip?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  funding?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last4?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StripeCustomerInfo = {
  __typename?: 'StripeCustomerInfo';
  cardList?: Maybe<Scalars['JSON']['output']>;
  defaultCard?: Maybe<Scalars['String']['output']>;
};

export type StripeCustomerSources = {
  __typename?: 'StripeCustomerSources';
  data?: Maybe<Array<Maybe<StripeSource>>>;
  has_more?: Maybe<Scalars['Boolean']['output']>;
  object?: Maybe<Scalars['String']['output']>;
  total_count?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type StripeInvoice = {
  __typename?: 'StripeInvoice';
  accountCountry?: Maybe<Scalars['String']['output']>;
  accountName?: Maybe<Scalars['String']['output']>;
  amountDue?: Maybe<Scalars['Int']['output']>;
  amountPaid?: Maybe<Scalars['Int']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Scalars['String']['output']>;
  customerAddress?: Maybe<StripeCustomerAddress>;
  customerEmail?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  customerPhone?: Maybe<Scalars['String']['output']>;
  hostedInvoiceUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invoicePdf?: Maybe<Scalars['String']['output']>;
  lines?: Maybe<Array<Maybe<StripeInvoiceLineItem>>>;
  nickname?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Scalars['String']['output']>;
  periodEnd?: Maybe<Scalars['String']['output']>;
  periodStart?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type StripeInvoiceLineItem = {
  __typename?: 'StripeInvoiceLineItem';
  amount?: Maybe<Scalars['Int']['output']>;
  amountExcludingTax?: Maybe<Scalars['Int']['output']>;
  currency?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invoiceItem?: Maybe<Scalars['String']['output']>;
  period?: Maybe<StripeInvoiceLineItemPeriod>;
};

export type StripeInvoiceLineItemPeriod = {
  __typename?: 'StripeInvoiceLineItemPeriod';
  end?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
};

export type StripeInvoiceList = {
  __typename?: 'StripeInvoiceList';
  data?: Maybe<Array<Maybe<StripeInvoice>>>;
  hasMore?: Maybe<Scalars['Boolean']['output']>;
  object?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type StripeInvoiceListOptions = {
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  stripeCustomerId: Scalars['String']['input'];
};

export type StripeReceiptInfo = {
  __typename?: 'StripeReceiptInfo';
  amount?: Maybe<Scalars['Float']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type StripeSource = {
  __typename?: 'StripeSource';
  address_city?: Maybe<Scalars['String']['output']>;
  address_country?: Maybe<Scalars['String']['output']>;
  address_line1?: Maybe<Scalars['String']['output']>;
  address_line1_check?: Maybe<Scalars['String']['output']>;
  address_line2?: Maybe<Scalars['String']['output']>;
  address_state?: Maybe<Scalars['String']['output']>;
  address_zip?: Maybe<Scalars['String']['output']>;
  address_zip_check?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Scalars['String']['output']>;
  cvc_check?: Maybe<Scalars['String']['output']>;
  dynamic_last4?: Maybe<Scalars['String']['output']>;
  exp_month?: Maybe<Scalars['Int']['output']>;
  exp_year?: Maybe<Scalars['Int']['output']>;
  fingerprint?: Maybe<Scalars['String']['output']>;
  funding?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  last4?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Scalars['String']['output']>;
  tokenization_method?: Maybe<Scalars['String']['output']>;
};

export type StripeSubscription = {
  __typename?: 'StripeSubscription';
  cancelAtPeriodEnd?: Maybe<Scalars['Boolean']['output']>;
  canceledAt?: Maybe<Scalars['Date']['output']>;
  currentPeriodEnd?: Maybe<Scalars['Date']['output']>;
  endedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  status: StripeSubscriptionStatus;
  trialEnd?: Maybe<Scalars['Date']['output']>;
  trialStart?: Maybe<Scalars['Date']['output']>;
};

export enum StripeSubscriptionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Incomplete = 'INCOMPLETE',
  IncompleteExpired = 'INCOMPLETE_EXPIRED',
  PastDue = 'PAST_DUE',
  Paused = 'PAUSED',
  Trialing = 'TRIALING',
  Unpaid = 'UNPAID',
}

export type Subscription = {
  __typename?: 'Subscription';
  liveStreamActivated?: Maybe<LiveStream>;
  liveStreamActivatedByUuid?: Maybe<LiveStream>;
  liveStreamConnectedByUuid?: Maybe<LiveStream>;
  liveStreamDisconnectedByUuid?: Maybe<LiveStream>;
  liveStreamIdled?: Maybe<LiveStream>;
  liveStreamIdledByUuid?: Maybe<LiveStream>;
  liveStreamIsRecording?: Maybe<LiveStream>;
  liveStreamIsRecordingByUuid?: Maybe<LiveStream>;
  propertyLiveStreamEndedByUuid?: Maybe<PropertyLiveStream>;
  topicMessageAddedByConsumerId?: Maybe<TopicMessage>;
  topicMessageAddedByUniqueId?: Maybe<TopicMessage>;
  topicMessageTypingByConsumer?: Maybe<SubscriptionResult>;
  unreadAgentBriefPropertiesCount?: Maybe<UnreadBriefPropertiesCountSubscriptionResult>;
  unreadAgentBriefPropertyByAgentId?: Maybe<UnreadBriefPropertyAlertSubscriptionResult>;
  unreadPlatformAgentEnquiryCounts?: Maybe<UnreadPlatformAgentEnquiryCount>;
  unreadTopicsCountByConsumerId?: Maybe<TopicMessage>;
  version: Scalars['Int']['output'];
};

export type SubscriptionLiveStreamActivatedByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type SubscriptionLiveStreamConnectedByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type SubscriptionLiveStreamDisconnectedByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type SubscriptionLiveStreamIdledByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type SubscriptionLiveStreamIsRecordingByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type SubscriptionPropertyLiveStreamEndedByUuidArgs = {
  uuid: Scalars['ID']['input'];
};

export type SubscriptionTopicMessageAddedByConsumerIdArgs = {
  consumerId: Scalars['ID']['input'];
};

export type SubscriptionTopicMessageAddedByUniqueIdArgs = {
  uniqueId: Scalars['ID']['input'];
};

export type SubscriptionTopicMessageTypingByConsumerArgs = {
  uniqueId: Scalars['ID']['input'];
};

export type SubscriptionUnreadAgentBriefPropertiesCountArgs = {
  agentBriefId: Scalars['ID']['input'];
};

export type SubscriptionUnreadAgentBriefPropertyByAgentIdArgs = {
  agentId: Scalars['ID']['input'];
};

export type SubscriptionUnreadPlatformAgentEnquiryCountsArgs = {
  platformAgentUuid: Scalars['ID']['input'];
};

export type SubscriptionUnreadTopicsCountByConsumerIdArgs = {
  consumerId: Scalars['ID']['input'];
};

export type SubscriptionResult = {
  __typename?: 'SubscriptionResult';
  senderId: Scalars['ID']['output'];
  senderName?: Maybe<Scalars['String']['output']>;
  shortId?: Maybe<Scalars['String']['output']>;
  uniqueId: Scalars['ID']['output'];
};

export enum SubscriptionType {
  Annual = 'ANNUAL',
  BiAnnual = 'BI_ANNUAL',
  Monthly = 'MONTHLY',
  OneOff = 'ONE_OFF',
}

export type SuburbDemographicsHref = {
  __typename?: 'SuburbDemographicsHref';
  href?: Maybe<Scalars['String']['output']>;
};

export type SuburbLinks = {
  __typename?: 'SuburbLinks';
  self?: Maybe<SelfHref>;
  suburbDemographics?: Maybe<SuburbDemographicsHref>;
  suburbStatistics?: Maybe<SuburbStatisticsHref>;
};

export type SuburbStatisticsHref = {
  __typename?: 'SuburbStatisticsHref';
  href?: Maybe<Scalars['String']['output']>;
};

export type SuburbsOfInterest = {
  id: Scalars['ID']['input'];
  maxDistanceFromSuburb?: InputMaybe<Scalars['Int']['input']>;
};

export type Summary = {
  __typename?: 'Summary';
  _display?: Maybe<Scalars['String']['output']>;
  aggregationPeriod?: Maybe<AggregationPeriod>;
  dateRange?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  periodType?: Maybe<Scalars['String']['output']>;
  reportingPeriod?: Maybe<ReportingPeriod>;
};

export type TalentForm = {
  __typename?: 'TalentForm';
  additionalTagsAccount?: Maybe<Scalars['String']['output']>;
  backupContact?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  companyWebsite?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  pinterest?: Maybe<Scalars['String']['output']>;
  professionalPhotoKey?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['Date']['output']>;
  signatureKey?: Maybe<Scalars['String']['output']>;
  skypeName?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
};

export type TimeSeriesListingCountOptions = {
  aggregationPeriod?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  metrics?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  periodType?: InputMaybe<Scalars['String']['input']>;
  propertyType?: InputMaybe<Scalars['String']['input']>;
  reportingPeriod?: InputMaybe<Scalars['Int']['input']>;
  whereSuburbSlug?: InputMaybe<Scalars['String']['input']>;
  whereType?: InputMaybe<Scalars['String']['input']>;
};

export type Topic = {
  __typename?: 'Topic';
  createdAt?: Maybe<Scalars['Date']['output']>;
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isMember?: Maybe<Scalars['Boolean']['output']>;
  isModerator?: Maybe<Scalars['Boolean']['output']>;
  isMuted?: Maybe<Scalars['Boolean']['output']>;
  latestMessage?: Maybe<TopicMessage>;
  membersConnection?: Maybe<ConsumersConnection>;
  moderator?: Maybe<Consumer>;
  name?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  propertyId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  topicMessagesConnection?: Maybe<TopicMessageConnection>;
  uniqueId?: Maybe<Scalars['String']['output']>;
};

export type TopicMembersConnectionArgs = {
  filter?: InputMaybe<ConsumersConnectionFilter>;
};

export type TopicTopicMessagesConnectionArgs = {
  filter?: InputMaybe<TopicMessagesConnectionFilter>;
};

export type TopicEdge = {
  __typename?: 'TopicEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Topic>;
};

export type TopicMessage = {
  __typename?: 'TopicMessage';
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  isLastMessageSeenByReceiver?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaHost?: Maybe<Scalars['String']['output']>;
  metaImage?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaUrl?: Maybe<Scalars['String']['output']>;
  reactions?: Maybe<Array<Maybe<TopicMessageReaction>>>;
  recipients?: Maybe<Array<Maybe<Consumer>>>;
  sender?: Maybe<Consumer>;
  status?: Maybe<TopicMessageStatus>;
  topic?: Maybe<Topic>;
  topicUniqueId?: Maybe<Scalars['ID']['output']>;
};

export type TopicMessageConnection = {
  __typename?: 'TopicMessageConnection';
  edges?: Maybe<Array<Maybe<TopicMessageEdge>>>;
  nodes?: Maybe<Array<Maybe<TopicMessage>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type TopicMessageEdge = {
  __typename?: 'TopicMessageEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<TopicMessage>;
};

export type TopicMessageImage = {
  __typename?: 'TopicMessageImage';
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  s3Key?: Maybe<Scalars['String']['output']>;
  topicMessageId?: Maybe<Scalars['ID']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type TopicMessageReaction = {
  __typename?: 'TopicMessageReaction';
  consumer?: Maybe<Consumer>;
  consumerId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  reaction?: Maybe<Scalars['String']['output']>;
  topicMessageId?: Maybe<Scalars['ID']['output']>;
};

export enum TopicMessageStatus {
  Read = 'READ',
  Unread = 'UNREAD',
}

export type TopicMessagesConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  topicId?: InputMaybe<Scalars['String']['input']>;
  uniqueId?: InputMaybe<Scalars['String']['input']>;
};

export enum TopicRole {
  AgentChat = 'AGENT_CHAT',
  Member = 'MEMBER',
  Owner = 'OWNER',
}

export type TopicsConnection = {
  __typename?: 'TopicsConnection';
  edges?: Maybe<Array<Maybe<TopicEdge>>>;
  nodes?: Maybe<Array<Maybe<Topic>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type TopicsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<TopicRole>;
  uniqueId?: InputMaybe<Scalars['ID']['input']>;
};

export type TrackEventInput = {
  anonymousId?: InputMaybe<Scalars['String']['input']>;
  dimension_1?: InputMaybe<Scalars['Int']['input']>;
  dimension_2?: InputMaybe<Scalars['Int']['input']>;
  dimension_3?: InputMaybe<Scalars['String']['input']>;
  dimension_4?: InputMaybe<Scalars['String']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pageId?: InputMaybe<Scalars['Int']['input']>;
  pageType?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type TrackPageViewInput = {
  anonymousId?: InputMaybe<Scalars['String']['input']>;
  dimension_1?: InputMaybe<Scalars['Int']['input']>;
  dimension_2?: InputMaybe<Scalars['Int']['input']>;
  dimension_3?: InputMaybe<Scalars['String']['input']>;
  dimension_4?: InputMaybe<Scalars['String']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pageId?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type TrafficByReferrerDomainCount = {
  __typename?: 'TrafficByReferrerDomainCount';
  bing?: Maybe<Scalars['Int']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  duckduckgo?: Maybe<Scalars['Int']['output']>;
  ecoasia?: Maybe<Scalars['Int']['output']>;
  facebook?: Maybe<Scalars['Int']['output']>;
  facebookAds?: Maybe<Scalars['Int']['output']>;
  findAds?: Maybe<Scalars['Int']['output']>;
  google?: Maybe<Scalars['Int']['output']>;
  googleAds?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  others?: Maybe<Scalars['Int']['output']>;
  realty?: Maybe<Scalars['Int']['output']>;
  thribee?: Maybe<Scalars['Int']['output']>;
  trovit?: Maybe<Scalars['Int']['output']>;
  unknown?: Maybe<Scalars['Int']['output']>;
  yahoo?: Maybe<Scalars['Int']['output']>;
};

export enum TransactionAction {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
}

export enum TransactionSource {
  Enquiry = 'ENQUIRY',
  Offer = 'OFFER',
}

export enum TransactionStatus {
  NoTransaction = 'NO_TRANSACTION',
  Transacted = 'TRANSACTED',
  UnderReview = 'UNDER_REVIEW',
}

export enum TransactionType {
  Insert = 'INSERT',
  Update = 'UPDATE',
}

export type TrendData = {
  __typename?: 'TrendData';
  investedPerformance?: Maybe<Scalars['JSON']['output']>;
  investorMetrics?: Maybe<Scalars['JSON']['output']>;
  trendList?: Maybe<Scalars['JSON']['output']>;
};

export type TrendYearsData = {
  __typename?: 'TrendYearsData';
  oneYear?: Maybe<TrendData>;
  tenYears?: Maybe<TrendData>;
  type?: Maybe<Scalars['String']['output']>;
};

export type TypeCountMap = {
  __typename?: 'TypeCountMap';
  count?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type TypeId = {
  id?: InputMaybe<Scalars['ID']['input']>;
  uuid?: InputMaybe<Scalars['ID']['input']>;
};

export type UnlockAgentBrief = {
  id: Scalars['ID']['input'];
  stripeCardId?: InputMaybe<Scalars['ID']['input']>;
  stripeTokenId?: InputMaybe<Scalars['ID']['input']>;
};

export type UnlockAgentBriefByInAppPurchase = {
  agentBriefId: Scalars['ID']['input'];
  amount: Scalars['Float']['input'];
  currency: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  source: InAppPurchaseSource;
  transactionId: Scalars['String']['input'];
};

export type UnlockAgentBriefProperty = {
  id: Scalars['ID']['input'];
  stripeCardId?: InputMaybe<Scalars['ID']['input']>;
  stripeTokenId?: InputMaybe<Scalars['ID']['input']>;
};

export type UnlockAgentBriefPropertyByInAppPurchase = {
  agentBriefPropertyId: Scalars['ID']['input'];
  amount: Scalars['Float']['input'];
  currency: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  source: InAppPurchaseSource;
  transactionId: Scalars['String']['input'];
};

export type UnreadBriefPropertiesCountSubscriptionResult = {
  __typename?: 'UnreadBriefPropertiesCountSubscriptionResult';
  count?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
};

export type UnreadBriefPropertyAlertSubscriptionResult = {
  __typename?: 'UnreadBriefPropertyAlertSubscriptionResult';
  agentId: Scalars['ID']['output'];
  count?: Maybe<Scalars['Int']['output']>;
};

export type UnreadPlatformAgentEnquiryCount = {
  __typename?: 'UnreadPlatformAgentEnquiryCount';
  appraisal?: Maybe<Scalars['Int']['output']>;
  general?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  property?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type UpdateAdminUserInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAgencyAssetsInput = {
  bannerColor?: InputMaybe<Scalars['String']['input']>;
  coverPhoto?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['ID']['input'];
  miniLogo?: InputMaybe<Scalars['Upload']['input']>;
};

export type UpdateAgencyCrmEagleConfigInput = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  isSendEnquiries?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateAgencyCrmEmail = {
  email: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateAgencyCrmInput = {
  agencyCrmId: Scalars['ID']['input'];
  agencyId: Scalars['ID']['input'];
  crmId: Scalars['ID']['input'];
  eagleConfig?: InputMaybe<UpdateAgencyCrmEagleConfigInput>;
  integrationCode?: InputMaybe<Scalars['String']['input']>;
  lockedonConfig?: InputMaybe<UpdateAgencyCrmLockedonConfigInput>;
  zenuConfig?: InputMaybe<UpdateAgencyCrmZenuConfigInput>;
};

export type UpdateAgencyCrmIntegrationsInput = {
  crmIntegrations?: InputMaybe<Array<InviteAgencyInputCrmIdCode>>;
  id: Scalars['ID']['input'];
};

export type UpdateAgencyCrmLockedonConfigInput = {
  officeId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAgencyCrmZenuConfigInput = {
  authorisationId?: InputMaybe<Scalars['String']['input']>;
  authorisationToken?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAgencyFbIntegrationInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  fbUserId?: InputMaybe<Scalars['ID']['input']>;
  integrationId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pageId?: InputMaybe<Scalars['String']['input']>;
  type: IntegrationType;
};

export type UpdateAgencyGroupInput = {
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAgencyInput = {
  adminEmail?: InputMaybe<Scalars['String']['input']>;
  adminFirstName?: InputMaybe<Scalars['String']['input']>;
  adminLastName?: InputMaybe<Scalars['String']['input']>;
  adminMobile?: InputMaybe<Scalars['String']['input']>;
  championEmail?: InputMaybe<Scalars['String']['input']>;
  championFirstName?: InputMaybe<Scalars['String']['input']>;
  championLastName?: InputMaybe<Scalars['String']['input']>;
  championMobile?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  crmEmail?: InputMaybe<Scalars['String']['input']>;
  crmEmails?: InputMaybe<Array<UpdateAgencyCrmEmail>>;
  crmIntegrations?: InputMaybe<Array<InputMaybe<CrmIntegration>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  enquiryEmails?: InputMaybe<Array<InputMaybe<UpdateEnquiryEmail>>>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isBap?: InputMaybe<Scalars['Boolean']['input']>;
  isReip?: InputMaybe<Scalars['Boolean']['input']>;
  landlineNumber?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  marketingContactEmail?: InputMaybe<Scalars['String']['input']>;
  marketingContactFirstName?: InputMaybe<Scalars['String']['input']>;
  marketingContactLastName?: InputMaybe<Scalars['String']['input']>;
  marketingContactMobile?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  officeEmail?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['Int']['input']>;
  profileVideo?: InputMaybe<Scalars['String']['input']>;
  rentalEnquiryEmail?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAgentBriefProgressBoardInput = {
  agentBriefId: Scalars['ID']['input'];
  newOrder?: InputMaybe<Scalars['Int']['input']>;
  newStatus?: InputMaybe<AgentBriefProgressStatus>;
};

export type UpdateAgentContactEmailInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  type: AgentContactEmailType;
};

export type UpdateAgentContactInput = {
  address?: InputMaybe<AgentContactAddressInput>;
  agentContactId: Scalars['ID']['input'];
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  birthDate?: InputMaybe<Scalars['Date']['input']>;
  emails?: InputMaybe<Array<InputMaybe<UpdateAgentContactEmailInput>>>;
  firstName: Scalars['String']['input'];
  hasBuyPotential?: InputMaybe<Scalars['Boolean']['input']>;
  hasSellPotential?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  nickName?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  phoneNumbers?: InputMaybe<Array<InputMaybe<UpdateAgentContactPhoneInput>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AgentContactType>;
};

export type UpdateAgentContactPhoneInput = {
  countryCode: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  number: Scalars['String']['input'];
  type: AgentContactPhoneType;
};

export type UpdateAgentFbIntegrationInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  fbUserId?: InputMaybe<Scalars['ID']['input']>;
  integrationId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pageId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAgentFromSignUpInput = {
  agencyId: Scalars['ID']['input'];
  agencyName?: InputMaybe<Scalars['String']['input']>;
  agentId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  mobileNumber: Scalars['String']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  reaUrl?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
};

export type UpdateAgentInput = {
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  agencyLogoFile?: InputMaybe<Scalars['Upload']['input']>;
  agencyName?: InputMaybe<Scalars['String']['input']>;
  agentId: Scalars['ID']['input'];
  agentType?: InputMaybe<Scalars['String']['input']>;
  areaOfSpecializationLocationType?: InputMaybe<AreaOfSpecializationLocationType>;
  areaOfSpecializations?: InputMaybe<Array<InputMaybe<AreaOfSpecialization>>>;
  businessNumber?: InputMaybe<Scalars['String']['input']>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  crmLeadEmails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email: Scalars['String']['input'];
  enquiryEmails?: InputMaybe<Array<InputMaybe<UpdateEnquiryEmail>>>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  instagramUsername?: InputMaybe<Scalars['String']['input']>;
  isContactEmailForInquiry?: InputMaybe<Scalars['Boolean']['input']>;
  isDisplayInDirectory?: InputMaybe<Scalars['Boolean']['input']>;
  landlineNumber?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  marketVideo?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  mobileNumberCountryCode?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  profileVideo?: InputMaybe<Scalars['String']['input']>;
  rentalInquiryEmail?: InputMaybe<Scalars['String']['input']>;
  reportEmails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sellLine?: InputMaybe<Scalars['String']['input']>;
  services?: InputMaybe<Array<InputMaybe<AgentService>>>;
  soldVideo?: InputMaybe<Scalars['String']['input']>;
  states?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
  vendorLeads?: InputMaybe<Scalars['String']['input']>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAgentInstagramActiveStatus = {
  isActive: Scalars['Boolean']['input'];
  uuid: Scalars['ID']['input'];
};

export type UpdateAgentMobileInput = {
  agentId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  mobileNumberCountryCode?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAgentPlusSubscriptionInput = {
  id: Scalars['ID']['input'];
  suburbAdditionalSpend?: InputMaybe<Scalars['Int']['input']>;
  suburbAdditionalSpendIsMonthly?: InputMaybe<Scalars['Boolean']['input']>;
  suburbImageUrl?: InputMaybe<Scalars['String']['input']>;
  suburbMessage?: InputMaybe<Scalars['String']['input']>;
  suburbTextOverlay?: InputMaybe<Scalars['String']['input']>;
  suburbTextOverlayFont?: InputMaybe<Scalars['String']['input']>;
  suburbTextOverlayFontColor?: InputMaybe<Scalars['String']['input']>;
  suburbTextOverlayFontSize?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAgentPropertyInspectionInput = {
  agentBriefId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateAgentPropertyShortlistProgressInput = {
  agentPropertyShortlistId: Scalars['ID']['input'];
  newOrder: Scalars['Int']['input'];
  newStatus: AgentPropertyShortlistStatus;
};

export type UpdateBrokerAwardInput = {
  file?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBrokerCertificateInput = {
  file?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBrokerInput = {
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  brokerId: Scalars['ID']['input'];
  businessName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBrokerLogoInput = {
  brokerId: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  logoShape?: InputMaybe<Scalars['String']['input']>;
  rectLogo?: InputMaybe<Scalars['Upload']['input']>;
};

export type UpdateChannelInput = {
  articleLink?: InputMaybe<Scalars['String']['input']>;
  channelId: Scalars['ID']['input'];
  externalLink?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  name?: InputMaybe<ChannelName>;
  privateLink?: InputMaybe<Scalars['String']['input']>;
  scheduledDate?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCollectionNameInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConsumerAlertInput = {
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  cars?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  isIncludeOffMarket?: InputMaybe<Scalars['Boolean']['input']>;
  locations?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConsumerInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  agencyName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<ConsumerGender>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['Int']['input']>;
  pageId?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profilePageId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConsumerPageInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contact?: InputMaybe<Scalars['String']['input']>;
  contributorId: Scalars['ID']['input'];
  coverImage?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  instagram?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isOfficial?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  pageId: Scalars['String']['input'];
  phoneNo?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCrmInput = {
  crmId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  initials?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCrmStatusInput = {
  crmId: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
};

export type UpdateDeveloperInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  brandColor?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  enquiryEmail: Scalars['String']['input'];
  facebookUrl?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  instagramUrl?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  miniLogoFile?: InputMaybe<Scalars['Upload']['input']>;
  organizationLogoFile?: InputMaybe<Scalars['Upload']['input']>;
  organizationName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDeveloperProjectAboutSuburb = {
  description: Scalars['String']['input'];
  developerProjectUuid: Scalars['ID']['input'];
  imageUrl: Scalars['String']['input'];
};

export type UpdateDeveloperProjectInput = {
  builderName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  floors: Scalars['Int']['input'];
  headline?: InputMaybe<Scalars['String']['input']>;
  inspectionText?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  percentCompleted: Scalars['Float']['input'];
  postalCode: Scalars['Int']['input'];
  priceText?: InputMaybe<Scalars['String']['input']>;
  stage: DeveloperProjectStage;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  state: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  street: Scalars['String']['input'];
  streetNumber?: InputMaybe<Scalars['String']['input']>;
  suburb: Scalars['String']['input'];
  totalUnits?: InputMaybe<Scalars['Int']['input']>;
  unitType?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['ID']['input'];
};

export type UpdateDeveloperPropertyImageUrlInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  url: Scalars['String']['input'];
};

export type UpdateDeveloperPropertyInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  externalLink1?: InputMaybe<Scalars['String']['input']>;
  externalLink2?: InputMaybe<Scalars['String']['input']>;
  externalLink3?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<PropertyFeatures>;
  floorPlanUrls?: InputMaybe<Array<InputMaybe<UpdateDeveloperPropertyImageUrlInput>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  imageUrls?: InputMaybe<Array<InputMaybe<UpdateDeveloperPropertyImageUrlInput>>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  landArea?: InputMaybe<Scalars['Int']['input']>;
  landAreaUnit?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  postalCode: Scalars['Int']['input'];
  priceView?: InputMaybe<Scalars['String']['input']>;
  propertyId: Scalars['ID']['input'];
  sellingPrice?: InputMaybe<Scalars['Float']['input']>;
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
  streetNumber: Scalars['String']['input'];
  subNumber: Scalars['String']['input'];
  suburb: Scalars['String']['input'];
  videoLink?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDomainIntegrationConfigurationInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isAutoUpdate?: InputMaybe<Scalars['Boolean']['input']>;
  isAutoUpload?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateEnquiryEmail = {
  email: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isRentalOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateFacebookGroupPageInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  facebookPagesId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFacebookPageInput = {
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  locationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  pageId?: InputMaybe<Scalars['String']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFacebookPagePortalInput = {
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  pageId: Scalars['ID']['input'];
  pageName: Scalars['ID']['input'];
  url: Scalars['ID']['input'];
};

export type UpdateHeroInput = {
  episode?: InputMaybe<Scalars['Int']['input']>;
  externalLink?: InputMaybe<Scalars['String']['input']>;
  heroId?: InputMaybe<Scalars['ID']['input']>;
  publicLink?: InputMaybe<Scalars['String']['input']>;
  scheduledDate?: InputMaybe<Scalars['String']['input']>;
  show?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLocationInput = {
  country?: InputMaybe<LocationCountry>;
  full: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  locationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  postalCode?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  stateFull?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LocationType>;
};

export type UpdatePlatformAgentContentInput = {
  changes?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePlatformAgentFavIconInput = {
  file: Scalars['Upload']['input'];
  uuid: Scalars['String']['input'];
};

export type UpdatePlatformAgentInput = {
  contactNumber: Scalars['String']['input'];
  contactNumberCountryCode: Scalars['Int']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  facebookUrl?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  instagramUsername?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  linkedInUsername?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['Upload']['input']>;
  reviewsUrl?: InputMaybe<Scalars['String']['input']>;
  tiktokUsername?: InputMaybe<Scalars['String']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['String']['input'];
};

export type UpdatePlatformAgentInstagramActiveStatusInput = {
  isActive: Scalars['Boolean']['input'];
  uuid: Scalars['ID']['input'];
};

export type UpdatePlatformAgentIsLoginUsingMobileInput = {
  isActive: Scalars['Boolean']['input'];
  platformAgentUuid: Scalars['ID']['input'];
};

export type UpdatePlatformAgentLogoInput = {
  file: Scalars['Upload']['input'];
  uuid: Scalars['String']['input'];
};

export type UpdatePlatformAgentMainSuburbInput = {
  mainId: Scalars['ID']['input'];
  mainLocationId?: InputMaybe<Scalars['Int']['input']>;
  subId: Scalars['ID']['input'];
  subLocationId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePlatformAgentNexuSuburbSlug = {
  nexuSuburbSlugs: Array<Scalars['String']['input']>;
  uuid: Scalars['ID']['input'];
};

export type UpdatePlatformAgentReviewsUrlInput = {
  reviewsUrl: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};

export type UpdatePlatformAgentSeoImageInput = {
  file: Scalars['Upload']['input'];
  uuid: Scalars['String']['input'];
};

export type UpdatePlatformAgentSubscriptionInput = {
  id: Scalars['ID']['input'];
  suburbDataAdditionalSpend?: InputMaybe<Scalars['Int']['input']>;
  suburbDataAdditionalSpendIsMonthly?: InputMaybe<Scalars['Boolean']['input']>;
  suburbDataImageUrl?: InputMaybe<Scalars['String']['input']>;
  suburbDataMessage?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePlatformAgentSuburbInput = {
  id: Scalars['ID']['input'];
  latLng?: InputMaybe<LatLngInput>;
  locationId?: InputMaybe<Scalars['Int']['input']>;
  previousSuburbId: Scalars['ID']['input'];
  suburbName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostEventInput = {
  checkIn?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaHost?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaUrl?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePropertyFeaturesInput = {
  features?: InputMaybe<PropertyFeatures>;
  id: Scalars['ID']['input'];
};

export type UpdatePropertyInput = {
  address: Scalars['String']['input'];
  agencyId?: InputMaybe<Scalars['ID']['input']>;
  agentIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  category?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isPrePortal?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  isShowAddress?: InputMaybe<Scalars['Boolean']['input']>;
  isShowPrice?: InputMaybe<Scalars['Boolean']['input']>;
  isShowRentPriceMonthly?: InputMaybe<Scalars['Boolean']['input']>;
  isShowRentPriceWeekly?: InputMaybe<Scalars['Boolean']['input']>;
  isShowSoldPrice?: InputMaybe<Scalars['Boolean']['input']>;
  isUnderOffer?: InputMaybe<Scalars['Boolean']['input']>;
  landArea?: InputMaybe<Scalars['Float']['input']>;
  landAreaUnit?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  locationId?: InputMaybe<Scalars['ID']['input']>;
  postalCode?: InputMaybe<Scalars['Int']['input']>;
  prePortalSource?: InputMaybe<Scalars['String']['input']>;
  priceView?: InputMaybe<Scalars['String']['input']>;
  reaId?: InputMaybe<Scalars['String']['input']>;
  rentBond?: InputMaybe<Scalars['Float']['input']>;
  rentDateAvailable?: InputMaybe<Scalars['Date']['input']>;
  rentPriceMonthly?: InputMaybe<Scalars['Float']['input']>;
  rentPriceWeekly?: InputMaybe<Scalars['Float']['input']>;
  sellingPrice?: InputMaybe<Scalars['Float']['input']>;
  soldDate?: InputMaybe<Scalars['Date']['input']>;
  soldPrice?: InputMaybe<Scalars['Float']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  streetNumber?: InputMaybe<Scalars['String']['input']>;
  subNumber?: InputMaybe<Scalars['String']['input']>;
  suburb?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePropertyLinksInput = {
  externalLink1?: InputMaybe<Scalars['String']['input']>;
  externalLink2?: InputMaybe<Scalars['String']['input']>;
  externalLink3?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  videoLink?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePropertyLiveStreamInput = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
  dateEnded?: InputMaybe<Scalars['Date']['input']>;
  dateScheduled?: InputMaybe<Scalars['Date']['input']>;
  dateScheduledTimezone?: InputMaybe<Scalars['Timezone']['input']>;
  dateStarted?: InputMaybe<Scalars['Date']['input']>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  propertyLiveStreamUuid: Scalars['ID']['input'];
};

export type UpdatePropertyShowInput = {
  articleLink?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  propertyIds?: InputMaybe<Scalars['JSON']['input']>;
  propertyShowId?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['Date']['input']>;
  scheduledDate?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRmaAgentIntegrationInput = {
  agentId: Scalars['String']['input'];
  integrationId: Scalars['ID']['input'];
  isActive: Scalars['Boolean']['input'];
  rmaAgentId: Scalars['String']['input'];
  rmaAgentReviewUrl: Scalars['String']['input'];
};

export type UpdateSitemapInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  sitemap?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSocialPostInput = {
  headline?: InputMaybe<Scalars['String']['input']>;
  inspectionText?: InputMaybe<Scalars['String']['input']>;
  priceText?: InputMaybe<Scalars['String']['input']>;
  socialPostImage?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  uuid: Scalars['ID']['input'];
};

export type UpdateUpgradeAgencyReachSubscriptionInput = {
  agencyId: Scalars['ID']['input'];
  endDate: Scalars['Date']['input'];
  isTrial?: InputMaybe<Scalars['Boolean']['input']>;
  package: Scalars['String']['input'];
  startDate: Scalars['Date']['input'];
  status: Scalars['String']['input'];
  subscriptionId: Scalars['ID']['input'];
};

export type UpdatedPropertyNotificationInput = {
  externalLink?: InputMaybe<Scalars['String']['input']>;
  isTenanted: Scalars['String']['input'];
  leaseEndDate?: InputMaybe<Scalars['Date']['input']>;
  propertyId: Scalars['ID']['input'];
  rentPriceWeekly?: InputMaybe<Scalars['Int']['input']>;
};

export type UpgradeAgencyInput = {
  agencyId: Scalars['String']['input'];
  couponCode?: InputMaybe<Scalars['String']['input']>;
  packageType: UpgradeAgencyPackageInputPackage;
  stripeCustomerId?: InputMaybe<Scalars['String']['input']>;
  stripeSource?: InputMaybe<Scalars['String']['input']>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
};

export enum UpgradeAgencyPackageInputPackage {
  ReachHighlight = 'REACH_HIGHLIGHT',
  ReachPremier = 'REACH_PREMIER',
}

export type UpgradeAgencyPackageWithAgencyUpdateInput = {
  agencyId: Scalars['ID']['input'];
  couponCode?: InputMaybe<Scalars['String']['input']>;
  crmId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  packageType: UpgradeAgencyPackageInputPackage;
  postalCode?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  stripeTokenId: Scalars['String']['input'];
  suburb?: InputMaybe<Scalars['String']['input']>;
};

export enum UpgradeAgentPackageInputPackage {
  FeaturedAccelerate = 'FEATURED_ACCELERATE',
  FeaturedElevate = 'FEATURED_ELEVATE',
}

export type UpgradeAgentPackageWithSuburbInput = {
  agentId: Scalars['ID']['input'];
  stripeTokenId: Scalars['String']['input'];
  suburbs: Array<UpgradeAgentPackageWithSuburbListInput>;
};

export type UpgradeAgentPackageWithSuburbListInput = {
  locationId: Scalars['ID']['input'];
  packageName: UpgradeAgentPackageInputPackage;
};

export type UpgradeBrokerRealtimeAlertsInput = {
  amount: Scalars['Int']['input'];
  customerId: Scalars['ID']['input'];
  finalAmount: Scalars['Float']['input'];
  subscriptionId: Scalars['ID']['input'];
};

export enum UpgradeDeveloperProjectSubscriptionDeveloperProjectPackage {
  Free = 'FREE',
  Level_1 = 'LEVEL_1',
  Level_2 = 'LEVEL_2',
  Level_3 = 'LEVEL_3',
}

export type UpgradeDeveloperProjectSubscriptionInput = {
  cardEmail?: InputMaybe<Scalars['String']['input']>;
  cardFirstName?: InputMaybe<Scalars['String']['input']>;
  cardLastName?: InputMaybe<Scalars['String']['input']>;
  developerProjectUuid: Scalars['ID']['input'];
  package: DeveloperProjectPackage;
  stripeSourceId?: InputMaybe<Scalars['String']['input']>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
};

export type UpgradeDevelopersAgencyInput = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  packageType?: InputMaybe<Scalars['String']['input']>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
  subscriptionType?: InputMaybe<Scalars['String']['input']>;
};

export type UpgradeHomeownerBrokerInput = {
  amount: Scalars['Int']['input'];
  brokerSeatCount?: InputMaybe<Scalars['Int']['input']>;
  brokerSeatUnitAmount?: InputMaybe<Scalars['Int']['input']>;
  customerId: Scalars['ID']['input'];
  finalAmount: Scalars['Float']['input'];
  subscriptionId: Scalars['ID']['input'];
  upgradeType?: InputMaybe<BrokerChargeName>;
};

export type UpgradePlatformAgentSubscriptionInput = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  isSaveBillingInfo?: InputMaybe<Scalars['Boolean']['input']>;
  isTrial: Scalars['Boolean']['input'];
  package: PlatformAgentSubscriptionPackage;
  platformAgentId: Scalars['ID']['input'];
  referralCode?: InputMaybe<Scalars['String']['input']>;
  stripeCustomerId?: InputMaybe<Scalars['ID']['input']>;
  stripeTokenId?: InputMaybe<Scalars['ID']['input']>;
  subscriptionPeriod: PlatformAgentSubscriptionPeriod;
};

export type UpgradePropertyInput = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  propertyId: Scalars['ID']['input'];
  startDate?: InputMaybe<Scalars['Date']['input']>;
  stripeTokenId?: InputMaybe<Scalars['String']['input']>;
  tier?: InputMaybe<UpgradePropertyTier>;
};

export enum UpgradePropertyTier {
  Premium_199 = 'PREMIUM_199',
  SellIt_99 = 'SELL_IT_99',
  Standard_69 = 'STANDARD_69',
}

export enum UpgradeSubscription {
  Accelerate = 'ACCELERATE',
  Livead = 'LIVEAD',
  MailboxAgency = 'MAILBOX_AGENCY',
  MailboxAgent = 'MAILBOX_AGENT',
}

export type UploadFile = {
  __typename?: 'UploadFile';
  filePath?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type UploadPlatformAgentContentImageInput = {
  file: Scalars['Upload']['input'];
  platformAgentId: Scalars['ID']['input'];
};

export type UploadPlatformContentInput = {
  file: Scalars['Upload']['input'];
  id: Scalars['ID']['input'];
};

export type UploadPropertyDocumentsInput = {
  agentPropertyShortlistId: Scalars['ID']['input'];
  tempFiles: Array<UploadedTempFileInput>;
};

export type UploadedTempFileInput = {
  type: PropertyDocumentType;
  urls: Array<Scalars['String']['input']>;
};

export type UrlMetaTag = {
  __typename?: 'UrlMetaTag';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Array<Maybe<UrlMetaTagImage>>>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type UrlMetaTagImage = {
  __typename?: 'UrlMetaTagImage';
  url: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  aboutHtml?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  agency?: Maybe<Agency>;
  agencyLogo?: Maybe<Scalars['String']['output']>;
  agencyName?: Maybe<Scalars['String']['output']>;
  agencySlugUrl?: Maybe<Scalars['String']['output']>;
  contactNo?: Maybe<Scalars['String']['output']>;
  crm?: Maybe<Scalars['String']['output']>;
  crmCode?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  fbLink?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  locations?: Maybe<Array<Maybe<Location>>>;
  medianSoldPrice?: Maybe<Scalars['Float']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<Array<Maybe<Property>>>;
  propertiesConnection?: Maybe<PropertiesConnection>;
  propertyListings?: Maybe<Scalars['Int']['output']>;
  propertySales?: Maybe<Scalars['Int']['output']>;
  slugUrl?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type UserPropertiesConnectionArgs = {
  filter: PropertiesConnectionFilter;
};

export type UserProperty = {
  __typename?: 'UserProperty';
  id: Scalars['ID']['output'];
  propertyId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export enum UserType {
  Admin = 'ADMIN',
  Agency = 'AGENCY',
  AgencyGroup = 'AGENCY_GROUP',
  Agent = 'AGENT',
  Broker = 'BROKER',
  Consumer = 'CONSUMER',
  PlatformAgent = 'PLATFORM_AGENT',
  User = 'USER',
}

export type Values = {
  __typename?: 'Values';
  label?: Maybe<Scalars['String']['output']>;
  statistics?: Maybe<StatisticsCount>;
  unit?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type VerifyAgentWithCode = {
  __typename?: 'VerifyAgentWithCode';
  code?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
};

export type VerifyPlatformAgentOtpInput = {
  otp: Scalars['Int']['input'];
  platformAgentUuid: Scalars['ID']['input'];
};

export type ViewerUser =
  | Admin
  | AdminUser
  | Agency
  | AgencyGroup
  | Agent
  | Broker
  | Consumer
  | Developer
  | PlatformAgent;

export type WalkScore = {
  __typename?: 'WalkScore';
  address?: Maybe<Scalars['String']['output']>;
  bike?: Maybe<WalkScoreData>;
  date?: Maybe<Scalars['Date']['output']>;
  helpLink?: Maybe<Scalars['String']['output']>;
  latLng?: Maybe<LatLng>;
  transit?: Maybe<WalkScoreData>;
  walk?: Maybe<WalkScoreData>;
  wsLink?: Maybe<Scalars['String']['output']>;
};

export type WalkScoreData = {
  __typename?: 'WalkScoreData';
  description?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
};

export type WebsitePageViewsTraffic = {
  __typename?: 'WebsitePageViewsTraffic';
  aboutPage?: Maybe<GoogleAnalytics>;
  appraisalPage?: Maybe<GoogleAnalytics>;
  contactPage?: Maybe<GoogleAnalytics>;
  homePage?: Maybe<GoogleAnalytics>;
  individualPropertyPage?: Maybe<GoogleAnalytics>;
  propertySearchPage?: Maybe<GoogleAnalytics>;
  reviewsPage?: Maybe<GoogleAnalytics>;
  suburbPage?: Maybe<GoogleAnalytics>;
};

export type XmlLog = {
  __typename?: 'XmlLog';
  agencyCode?: Maybe<Scalars['String']['output']>;
  agents?: Maybe<Scalars['JSON']['output']>;
  bucketKey?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  crmUser?: Maybe<Scalars['String']['output']>;
  errorCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isReprocessed?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  property?: Maybe<Property>;
  propertyStatus?: Maybe<Scalars['String']['output']>;
  propertyType?: Maybe<PropertyType>;
  reprocessDate?: Maybe<Scalars['Date']['output']>;
  transactionType?: Maybe<TransactionType>;
  uniqueId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  xmlModTime?: Maybe<Scalars['NonUtcDate']['output']>;
  xmlUrl?: Maybe<Scalars['String']['output']>;
};

export type XmlLogEdge = {
  __typename?: 'XmlLogEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<XmlLog>;
};

export type XmlLogGroup = {
  __typename?: 'XmlLogGroup';
  agencyCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  crmUser?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  latestLog?: Maybe<XmlLog>;
  property?: Maybe<Property>;
  uniqueId?: Maybe<Scalars['String']['output']>;
  xmlModTime?: Maybe<Scalars['NonUtcDate']['output']>;
};

export type XmlLogGroupEdge = {
  __typename?: 'XmlLogGroupEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<XmlLogGroup>;
};

export type XmlLogGroupsConnection = {
  __typename?: 'XmlLogGroupsConnection';
  edges?: Maybe<Array<Maybe<XmlLogGroupEdge>>>;
  nodes?: Maybe<Array<Maybe<XmlLogGroup>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type XmlLogGroupsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  agencyCode?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  crmUser?: InputMaybe<Scalars['String']['input']>;
  errorCode?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  propertyStatus?: InputMaybe<Scalars['String']['input']>;
  uniqueId?: InputMaybe<Scalars['String']['input']>;
};

export type XmlLogSearchFilters = {
  __typename?: 'XmlLogSearchFilters';
  agencyCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  crmUsers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  errorCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  propertyStatusList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  uniqueIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type XmlLogsConnection = {
  __typename?: 'XmlLogsConnection';
  edges?: Maybe<Array<Maybe<XmlLogEdge>>>;
  nodes?: Maybe<Array<Maybe<XmlLog>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int']['output'];
};

export type XmlLogsConnectionFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  agencyCode?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdDateRange?: InputMaybe<DateRangeInput>;
  crmUser?: InputMaybe<Scalars['String']['input']>;
  errorCode?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  propertyStatus?: InputMaybe<Scalars['String']['input']>;
  uniqueId?: InputMaybe<Scalars['String']['input']>;
};

export enum YesNoValue {
  No = 'NO',
  Yes = 'YES',
}

export type ZenuExternalAgent = {
  __typename?: 'ZenuExternalAgent';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
};

export type ZenuListing = {
  __typename?: 'ZenuListing';
  address?: Maybe<Scalars['String']['output']>;
  bath?: Maybe<Scalars['Int']['output']>;
  bed?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  externalAgent?: Maybe<ZenuExternalAgent>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  latitude?: Maybe<Scalars['Float']['output']>;
  listingUrl?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  mainHeadline?: Maybe<Scalars['String']['output']>;
  mainImage?: Maybe<Scalars['String']['output']>;
  officeId?: Maybe<Scalars['String']['output']>;
  officeName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalParking?: Maybe<Scalars['Int']['output']>;
};
