import { z } from 'zod';
import {
  BuyerType,
  LocationCountry,
  LocationType,
  PropertyCategory,
  SendRealtyLiveInviteAgentEmailType,
} from '@/__generated__/types';
import { isValidPhoneNumber } from '@/util/Common';

export const SignInSchema = z.object({
  agentType: z.string().min(1, { message: 'Agent Type is required' }),
  username: z.string().min(1, { message: 'Username is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export const MobileSignInSchema = z.object({
  agentType: z.string().min(1, { message: 'Agent Type is required' }),
  countryCode: z.number(),
  mobileNumber: z.string().nullable(),
});

export const SignUpSchema = z
  .object({
    email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid Email' }),
    fullName: z.string().min(1, { message: 'Full Name is required' }),
    mobileNumber: z.string().nullable(),
    password: z.string().min(1, { message: 'Password is required' }),
    retypePassword: z.string(),
  })
  .refine(
    (data: { password: string; retypePassword: string }) => data.password === data.retypePassword,
    {
      message: "Passwords don't match",
      path: ['retypePassword'],
    },
  );

export const ForgotPasswordSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid Email' }),
});

export const NewPasswordSchema = z
  .object({
    password: z.string().min(1, { message: 'Password is required' }),
    confirmPassword: z.string(),
  })
  .refine(
    (data: { password: string; confirmPassword: string }) => data.password === data.confirmPassword,
    {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    },
  );

export const MyAccountSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid Email' }),
  userName: z.string().min(4, { message: 'Username is required' }),
  firstName: z.string(),
  lastName: z.string(),
  mobileNumber: z.string(),
  mobileNumberCountryCode: z.number(),
});

export const PropertyFeaturesSchema = z.object({
  bedrooms: z.number().optional().nullable(),
  bathrooms: z.number().optional().nullable(),
  garages: z.number().optional().nullable(),
});

export const PropertyFormSchema = z.object({
  id: z.string().optional(),
  sellingPrice: z.number().min(1, { message: 'Price is required' }).optional(),
  priceView: z.string().min(1, { message: 'Display Price is required' }).optional(),
  address: z.string().min(1, { message: 'Street is required' }),
  country: z.string().optional().nullable(),
  suburbObj: z
    .object({
      id: z.string().min(1, { message: 'Suburb is required' }),
      full: z.string().optional().nullable(),
      suburb: z.string().optional().nullable(),
      state: z.string().optional().nullable(),
      postalCode: z.number().optional().nullable(),
      country: z.nativeEnum(LocationCountry).nullable().optional(),
    })
    .nullable(),
  // .optional(),
  suburb: z.string().optional().nullable(),
  state: z.string().optional(),
  postalCode: z.number().optional(),
  features: PropertyFeaturesSchema,
  description: z.string().optional(),
  category: z.string().min(1, { message: 'Please choose a category' }),
  isTenanted: z.boolean().optional(),
  leaseEndDate: z.date().nullable(),
  rentPriceWeekly: z.number().min(1, { message: 'Current Rent is required' }).nullable().optional(),
  rentalAppraisal: z
    .number()
    .min(1, { message: 'Rent Estimate is required' })
    .nullable()
    .optional(),
  landArea: z.number().optional().nullable(),
});

export const ResetPasswordSchema = z
  .object({
    oldPassword: z.string().min(1, { message: 'Old password is required' }),
    newPassword: z.string(),
    confirmPassword: z.string(),
  })
  .refine(
    (data: { newPassword: string; confirmPassword: string }) =>
      data.newPassword === data.confirmPassword,
    {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    },
  );

export const EmailSupportSchema = z.object({
  subject: z.string().nullable(),
  message: z.string().nullable(),
});

export const InviteAgentSchema = z
  .object({
    email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid Email' }),
    name: z.string().min(1, { message: 'Name is required' }),
    dialCode: z.number().optional(),
    mobileNumber: z.string().nullable(),
    type: z.nativeEnum(SendRealtyLiveInviteAgentEmailType, {
      errorMap: () => ({ message: 'Please choose an agent type' }),
    }),
  })
  .superRefine(({ dialCode, mobileNumber }, refineContext) => {
    if (dialCode && mobileNumber && !isValidPhoneNumber(dialCode, mobileNumber)) {
      refineContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid Phone Number',
        path: ['mobileNumber'],
      });
    }
  });

export const SendPropertyInspectionSchema = z
  .object({
    dialCode: z.number().optional(),
    mobileNumber: z.string().nullable(),
    briefs: z.array(z.string()).min(1, 'Please select at least one brief'),
    buyerName: z.string().nullable(),
  })
  .superRefine(({ dialCode, mobileNumber }, refineContext) => {
    if (dialCode && mobileNumber && !isValidPhoneNumber(dialCode, mobileNumber)) {
      refineContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid Phone Number',
        path: ['mobileNumber'],
      });
    }
  });

export const SearchBriefSchema = z.object({
  minimumPrice: z.number().nullable(),
  maximumPrice: z.number().nullable(),
  bed: z.number(),
  bath: z.number().optional(),
  parking: z.number().nullable(),
  landAreaMinimum: z.number().nullable(),
  landAreaMaximum: z.number().nullable(),
  suburb: z
    .object({
      id: z.string(),
      full: z.string(),
      type: z.string(),
    })
    .optional(),
});

export const BriefInfoFormSchema = z
  .object({
    title: z.string().min(1, { message: 'Required' }),
    briefTypeOfBuyer: z
      .object({
        label: z.string(),
        value: z.nativeEnum(BuyerType),
      })
      .refine(
        (data) =>
          [BuyerType.Investor, BuyerType.HolidayRental, BuyerType.OwnerOccupier].includes(
            data.value,
          ),
        {
          message: 'Please select a valid type of buyer',
        },
      ),
    minBudget: z.number().nullable(),
    maxBudget: z.number().nullable(),
    bed: z.number().min(1, { message: 'Required' }).nullable(),
    bath: z.number().min(1, { message: 'Required' }).nullable(),
    car: z.number().optional().nullable(),
    categories: z
      .array(z.nativeEnum(PropertyCategory))
      .refine((categories) => categories.length > 0, {
        message: 'Required',
      }),
    yield: z.number().max(100, { message: 'Invalid percent value' }).nullable(),
    interestAreasType: z.enum(['Region', 'Suburb'], {
      required_error: 'Areas of Interest is required',
    }),
    interestAreas: z.array(
      z.object({
        suburb: z
          .object({
            id: z.string(),
            full: z.string().nullable().optional(),
            suburb: z.string().nullable().optional(),
            state: z.string().nullable().optional(),
            postalCode: z.number().nullable().optional(),
            type: z.nativeEnum(LocationType).nullable().optional(),
          })
          .refine((data) => data.id, { message: 'Select a suburb/region' }),
        radius: z.number().min(0, { message: 'Radius must be at least 0' }),
      }),
    ),
    powerSearch: z.string().nullable(),
    prePortal: z.boolean(),
    onMarket: z.boolean(),
  })
  .superRefine(
    (
      { minBudget, maxBudget, interestAreasType, interestAreas, prePortal, onMarket },
      refineContext,
    ) => {
      if (!minBudget && !maxBudget) {
        refineContext.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Fill at least min or max',
          path: ['minBudget'],
        });
      }
      if (minBudget && minBudget < 100000) {
        refineContext.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Must be > 100,000',
          path: ['minBudget'],
        });
      }
      if (maxBudget && maxBudget < 100000) {
        refineContext.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Must be > 100,000',
          path: ['maxBudget'],
        });
      }
      if (minBudget && maxBudget && minBudget > maxBudget) {
        refineContext.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Min price cannot be greater than max price',
          path: ['minBudget'],
        });
        refineContext.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Max price cannot be lower than min price',
          path: ['maxBudget'],
        });
      }
      if (interestAreasType && !interestAreas.length) {
        refineContext.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'At least 1 selected suburb or region',
          path: ['interestAreasType'],
        });
      }
      if (interestAreas.length) {
        const interestAreaIds = new Set(interestAreas.map((item) => item.suburb.id));
        if (interestAreaIds.size !== interestAreas.length) {
          refineContext.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Duplicate entries found',
            path: ['interestAreasType'],
          });
        }
      }

      if (!prePortal && !onMarket) {
        refineContext.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Check at least Pre-Portal or On-Market',
          path: ['prePortal'],
        });
      }
    },
  );

export const AdvanceBriefInfoFormSchema = z
  .object({
    deadline: z.date().nullable(),
    ownerOcc: z.number().max(100, { message: 'Invalid percent value' }).nullable(),
    dom: z.number().nullable(),
    socialHousing: z.number().max(100, { message: 'Invalid percent value' }).nullable(),
    vacancyRate: z.number().max(100, { message: 'Invalid percent value' }).nullable(),
    distanceTransport: z.number().nullable(),
    easement: z.boolean().optional().nullable(),
    flood: z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .nullable(),
    fire: z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .nullable(),
    landAreaMin: z.number().nullable(),
    landAreaMax: z.number().nullable(),
    buyerName: z.string().optional(),
    buyerEmail: z.string().email('Invalid email format').optional().nullable(),
    mobileNumber: z.string().optional().nullable(),
    mobileNumberCountryCode: z.number().optional().nullable(),
    postalAddress: z.string().nonempty('Postal address is required').optional().nullable(),
    purchasingEntity: z.string().nonempty('Purchasing entity is required').optional().nullable(),
    clients: z.array(
      z.object({
        clientName: z.string().optional().nullable(),
        email: z.string().email('Invalid email format').optional().nullable(),
        mobileNumber: z.string().optional().nullable(),
        mobileNumberCountryCode: z.number().optional().nullable(),
      }),
    ),
    bankLender: z.string().nullable(),
    conveyancer: z.string().nullable(),
    conveyancerDetails: z.string().nullable(),
  })
  .superRefine(({ landAreaMin, landAreaMax }, refineContext) => {
    if (landAreaMin && landAreaMax && landAreaMin > landAreaMax) {
      refineContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Min area should not be greater than max area',
        path: ['landAreaMax'],
      });
    }
  });

export const CombinedBriefFormSchema = z.union([BriefInfoFormSchema, AdvanceBriefInfoFormSchema]);

export const NewBriefBuyerClientFormSchema = z.object({
  name: z.string().min(1, { message: 'Client Name is required' }),
  email: z.string().email({ message: 'Invalid Email' }).optional(),
  dialCode: z.number().optional(),
  mobileNumber: z.string().optional(),
});

export const NewBriefBuyerFormSchema = z.object({
  name: z.string().min(1, { message: 'Buyer Name is required' }),
  type: z.string().min(1, { message: 'Please choose a buyer type' }),
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid Email' }),
  dialCode: z.number().optional(),
  mobileNumber: z.string().min(1, { message: 'Phone number is required' }),
  postalAddress: z.string().optional(),
  purchasingEntity: z.string().optional(),
  clients: NewBriefBuyerClientFormSchema.array(),
});

export const NewBriefLegalFormSchema = z.object({
  bankLender: z.string().optional(),
  conveyancer: z.string().optional(),
  conveyancerContact: z.string().optional(),
});

export const NewBriefAdvanceSettingsFormSchema = z.object({
  deadline: z.date().optional(),
  ownerOccPercent: z.number().min(1, { message: 'Owner Occ/Renter % is required' }).nullable(),
  dom: z.number().min(1, { message: 'DOM is required' }).nullable(),
  socHousingPercent: z.number().min(1, { message: 'Social Housing % is required' }).nullable(),
  vacancyRate: z.number().min(1, { message: 'Vacancy Rate is required' }).nullable(),
  publicTransportDistance: z
    .number()
    .min(1, { message: 'Distance from transport is required' })
    .nullable(),
  easement: z.string().min(1, { message: 'Please choose from options' }),
  flood: z.string().min(1, { message: 'Please choose from options' }),
  fire: z.string().min(1, { message: 'Please choose from options' }),
  landAreaMinimum: z.number().min(1, { message: 'Land Area (Min) is required' }).nullable(),
  landAreaMaximum: z.number().min(1, { message: 'Land Area (Max) is required' }).nullable(),
  buyerInfo: NewBriefBuyerFormSchema,
  legalInfo: NewBriefLegalFormSchema,
});

type SignInSchemaType = z.infer<typeof SignInSchema>;
type MobileSignInSchemaType = z.infer<typeof MobileSignInSchema>;
type SignUpSchemaType = z.infer<typeof SignUpSchema>;
type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
type NewPasswordSchemaType = z.infer<typeof NewPasswordSchema>;
type MyAccountSchemaType = z.infer<typeof MyAccountSchema>;
type PropertyFormSchemaType = z.infer<typeof PropertyFormSchema>;
type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;
type EmailSupportSchemaType = z.infer<typeof EmailSupportSchema>;
type InviteAgentSchemaType = z.infer<typeof InviteAgentSchema>;
type SearchBriefSchemaType = z.infer<typeof SearchBriefSchema>;
type NewBriefFormType = z.infer<typeof BriefInfoFormSchema>;
type AdvanceNewBriefFormType = z.infer<typeof AdvanceBriefInfoFormSchema>;
type CombinedBriefFormType = z.infer<typeof CombinedBriefFormSchema>;
type NewBriefBuyerClientFormType = z.infer<typeof NewBriefBuyerClientFormSchema>;
type NewBriefBuyerFormType = z.infer<typeof NewBriefBuyerFormSchema>;
type NewBriefLegalFormType = z.infer<typeof NewBriefLegalFormSchema>;
type NewBriefAdvanceSettingsFormType = z.infer<typeof NewBriefAdvanceSettingsFormSchema>;
type SendPropertyInspectionFormType = z.infer<typeof SendPropertyInspectionSchema>;

export {
  SignInSchemaType,
  MobileSignInSchemaType,
  SignUpSchemaType,
  ForgotPasswordSchemaType,
  NewPasswordSchemaType,
  MyAccountSchemaType,
  PropertyFormSchemaType,
  ResetPasswordSchemaType,
  EmailSupportSchemaType,
  InviteAgentSchemaType,
  SearchBriefSchemaType,
  NewBriefFormType,
  AdvanceNewBriefFormType,
  CombinedBriefFormType,
  NewBriefBuyerClientFormType,
  NewBriefBuyerFormType,
  NewBriefLegalFormType,
  NewBriefAdvanceSettingsFormType,
  SendPropertyInspectionFormType,
};
