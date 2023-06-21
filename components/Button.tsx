import { PropsWithChildren, ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          "diabled:cursor-not-allowed w-full rounded-full border border-transparent bg-green-500 px-3 py-3 font-bold text-black transition hover:opacity-75 disabled:opacity-50",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
