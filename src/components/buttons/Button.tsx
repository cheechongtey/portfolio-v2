import { LucideIcon } from 'lucide-react';
import * as React from 'react';
import { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import { cn } from '@/lib/utils';

const ButtonVariant = ['primary', 'outline', 'ghost', 'light', 'dark'] as const;
const ButtonSize = ['sm', 'base'] as const;

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  leftIcon?: IconType | LucideIcon;
  rightIcon?: IconType | LucideIcon;
  classNames?: {
    leftIcon?: string;
    rightIcon?: string;
  };
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      classNames,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={cn(
          'inline-flex items-center rounded',
          'focus-visible:ring-primary-500 focus:outline-none focus-visible:ring',
          'shadow-sm',
          'transition-custom-all duration-75',
          //#region  //*=========== Size ===========
          [
            size === 'base' && ['px-4 py-3', 'text-sm md:text-base'],
            size === 'sm' && ['px-4 py-3', 'text-2xs leading-3'],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-navy text-green',
              'border-green border',
              'hover:bg-green-tint',
              'active:bg-primary-700',
              'disabled:bg-primary-700',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={cn(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {LeftIcon && (
          <div
            className={cn([
              size === 'base' && 'mr-1',
              size === 'sm' && 'mr-1.5',
            ])}
          >
            <LeftIcon
              size='1em'
              className={cn(
                [
                  size === 'base' && 'md:text-md text-md',
                  size === 'sm' && 'md:text-md text-sm',
                ],
                classNames?.leftIcon
              )}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={cn([
              size === 'base' && 'ml-1',
              size === 'sm' && 'ml-1.5',
            ])}
          >
            <RightIcon
              size='1em'
              className={cn(
                [
                  size === 'base' && 'text-md md:text-md',
                  size === 'sm' && 'md:text-md text-sm',
                ],
                classNames?.rightIcon
              )}
            />
          </div>
        )}
      </button>
    );
  }
);

export default Button;
