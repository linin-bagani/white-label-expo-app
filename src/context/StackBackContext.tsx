import { createContext, FC, ReactNode, useContext, useState } from 'react';

type StackBackContextType = {
  back: boolean;
  setBack: (loading: boolean) => void;
};

const StackBackContext = createContext<StackBackContextType | undefined>(undefined);

export const useStackBack = () => {
  const context = useContext(StackBackContext);
  if (!context) {
    throw new Error('useStackBack must be used within a StackBackProvider');
  }
  return context;
};

export const StackBackProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [back, setBack] = useState<boolean>(false);

  return (
    <StackBackContext.Provider value={{ back, setBack }}>{children}</StackBackContext.Provider>
  );
};
