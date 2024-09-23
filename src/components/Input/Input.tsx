import classnames from 'classnames';
import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  LegacyRef,
  ReactNode,
} from 'react';

export default function Input({
  ref,
  onChange,
  onBlur,
  value,
  inputClassName,
  wrapperClassName,
  labelClassName,
  placeholder,
  block,
  type = 'text',
  label,
  errorMessage,
  password,
  name,
  prefixIcon,
  ...props
}: {
  ref?: LegacyRef<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  value?: string | number;
  inputClassName?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  placeholder?: string;
  block?: boolean;
  type?: HTMLInputTypeAttribute;
  label?: string;
  errorMessage?: string;
  password?: boolean;
  name?: string;
  prefixIcon?: ReactNode;
}) {
  return (
    <div className={classnames('mb-3 sm:mb-5', wrapperClassName)}>
      {label && (
        <div
          className={classnames(
            'mb-1 font-semibold text-xs sm:text-sm',
            labelClassName
          )}
        >
          {label}
        </div>
      )}
      <div className="relative mb-1">
        <input
          {...props}
          ref={ref}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className={classnames(
            inputClassName,
            block && 'w-full',
            'pl-10 p-1.5 text-[8px] sm:text-base border border-slate-300 outline-none text-slate-600'
          )}
          onBlur={onBlur}
        />

        {prefixIcon && (
          <div className="absolute left-3 top-1.5 text-gray-400">
            {prefixIcon}
          </div>
        )}
      </div>
      {errorMessage && (
        <div className="mt-1 text-app-red-main text-xs">{errorMessage}</div>
      )}
    </div>
  );
}
