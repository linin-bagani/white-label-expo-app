import { HeaderOptions } from '@react-navigation/elements';

export interface StackRoute {
  name: string;
  title: string;
  headerVisible: boolean;
  headerLeft?: HeaderOptions['headerLeft'];
  isPublic?: boolean;
  isTabMenu?: boolean;
  agentType?: string;
  tabIcon?: (color: string) => any;
  children?: StackRoute[];
}
