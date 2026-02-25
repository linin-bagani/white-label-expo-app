import {
  Property,
  PropertiesConnectionFilterSorting,
  PropertyGroup,
  PropertiesConnectionFilter,
  PropertyCategory,
} from '@/__generated__/types';
import { ModalProps } from './CommonTypes';
import { TCarouselProps } from 'react-native-reanimated-carousel/lib/typescript/types';

export type PropertySuccessPayload = {
  propertyId?: string;
  propertyStreetAddress?: string;
  propertyStateAddress?: string;
};

export type PropertiesListProps = {
  data: Property[];
  propertyGroup: PropertyGroup | undefined | null;
  sort: PropertiesConnectionFilterSorting | undefined | null;
  onSort: (sort: PropertiesConnectionFilterSorting) => void;
  onDelete: (details: Property) => void;
  onEdit: (id: Property['id']) => void;
};

export type PropertyShareModalProps = {
  id: Property['id'];
  streetAddress: Property['streetAddress'];
  stateAddress: Property['stateAddress'];
  objectUrl: string;
  slugUrl?: Property['slugUrl'];
  videoLink?: Property['videoLink'];
  slugUrlPrefix?: Property['slugUrlPrefix'];
  onClose: () => void;
  onShare: () => void;
};

export type PropertyDetailsCardProps = {
  details: Property;
  selectedPropertyGroup?: PropertyGroup | undefined | null;
  onShareVideo?: (details: Property) => void;
  onDelete?: (details: Property) => void;
  onEdit?: (id: Property['id']) => void;
  onPress?: () => void;
};

export type PropertyVideoPlayerProps = {
  videoUrl: string;
  recordedDate?: string;
};

export type PropertyImageCarouselProps = {
  objectUrls: string[];
  autoPlay?: boolean;
  onRemove?: (index: number, uri: string) => void;
  itemsCount?: number;
  renderItem?: TCarouselProps['renderItem'];
  loop?: TCarouselProps['loop'];
};

export type EditPropertyModalProps = ModalProps & {
  propertyId: string;
  onSuccess: (details: PropertySuccessPayload) => void;
};

export type AddPropertyCategoryModalProps = ModalProps & {
  onSelectCategory: (category: string) => void;
  value?: string;
};

export type AddPropertyModalProps = ModalProps & {
  queryFilter: PropertiesConnectionFilter;
  onSuccess: (details: PropertySuccessPayload) => void;
};

export interface MultiSelectCategoryProps {
  visible: boolean;
  onClose: () => void;
  defaultValue?: PropertyCategory[];
  onSelectCategory: (selectedCategories: PropertyCategory[]) => void;
}

export type UploadPropertyObject = {
  id?: string | null;
  uri: string;
  type: string;
  name: string;
  tmpUrl: string;
};

export type PropertyCategorySelect = {
  label: string;
  value: string;
};

export type PropertyShareModalSucccessProps = ModalProps & {
  message?: string;
};

export type DeletePropertyModalProps = ModalProps & {
  propertyDetails: Property;
  onSuccess: () => void;
};

export type PropertySuccessModalProps = ModalProps &
  PropertySuccessPayload & {
    message: string;
  };

export type PropertySuccessState = {
  success: boolean;
  type: 'NONE' | 'ADD' | 'EDIT' | 'DELETE';
};
