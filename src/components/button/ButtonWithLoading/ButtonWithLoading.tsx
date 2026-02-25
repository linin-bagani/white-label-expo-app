import { Button } from '~/components/ui/button-2';
import type { ButtonProps } from '~/components/ui/button-2';
import { ActivityIndicator } from 'react-native';
import React from 'react';
import { cn } from '~/lib/utils';

export type Props = ButtonProps & {
  loading?: boolean;
};

const ButtonWithLoading = (props: Props) => {
  const { loading, children } = props;

  const newChildren = loading ? (
    <>
      {loading ? <ActivityIndicator /> : null}
      {children}
    </>
  ) : (
    children
  );

  return (
    <Button
      disabled={loading || props.disabled}
      {...props}
      className={cn(
        {
          'flex-row gap-2': loading,
        },
        props.className,
      )}
      children={newChildren}
    />
  );
};

export default ButtonWithLoading;
