import classnames from 'classnames';
import { MouseEventHandler, ReactNode } from 'react';

export default function Button({
  children,
  btnClassName,
  titleClassName,
  title,
  prefixIcon,
  suffixIcon,
  block,
  onClick,
  type = 'button',
  disabled,
  size = 'md',
  outlined,
}: {
  children?: ReactNode;
  btnClassName?: string;
  titleClassName?: string;
  title?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  block?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  outlined?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={classnames(
        btnClassName,
        block && 'w-full',
        'duration-500 rounded-md py-1 px-2',
        disabled && 'bg-slate-400 hover:bg-slate-400 cursor-not-allowed',
        outlined
          ? 'border border-secondary text-secondary hover:bg-secondary hover:text-white'
          : 'bg-secondary text-white border border-secondary hover:bg-white hover:text-secondary'
      )}
    >
      {children ?? (
        <div className={classnames('flex justify-center items-center')}>
          {prefixIcon}
          <div
            className={classnames(
              'font-bold text-xs',
              titleClassName,
              !!suffixIcon && 'mr-2'
            )}
          >
            {title}
          </div>
          {suffixIcon}
        </div>
      )}
    </button>
  );
}
