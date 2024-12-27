"use client";

import {
  FormHTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  useCallback,
} from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2Icon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/utils/cn";
import { Input } from "@/components/Input";
import SvgArrowRight from "@/components/icons/icons/ArrowRight";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type Schema = z.infer<typeof schema>;

export type SubscriberProps = FormHTMLAttributes<HTMLFormElement> & {
  ref?: ForwardedRef<HTMLFormElement>;
};

export const Subscriber: ForwardRefExoticComponent<SubscriberProps> =
  forwardRef<HTMLFormElement, SubscriberProps>(function Subscriber(
    { className, ...rest }: SubscriberProps,
    ref: ForwardedRef<HTMLFormElement>,
  ) {
    const { register, handleSubmit, formState } = useForm<Schema>({
      resolver: zodResolver(schema),
      mode: "all",
    });

    console.log("formState", formState);

    const onSubmit = useCallback((data: Schema) => {
      console.log("Form submitted with data:", data);
    }, []);

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={ref}
        className={cn(
          "flex w-full p-2 gap-2 h-14 bg-white/10 rounded-full",
          className,
        )}
        {...rest}
      >
        <Input
          placeholder="Enter your email"
          className="placeholder:text-white/30 autofill:!bg-transparent tracking-widest w-full h-full bg-transparent outline-0 rounded-full px-8"
          {...register("email")}
        />
        <button
          disabled={!formState.isValid}
          type="submit"
          className="px-8 h-full text-lg duration-150 transition-all disabled:opacity-90 disabled:cursor-not-allowed hover:scale-[101%] active:scale-[99%] text-black bg-white/65 rounded-full flex text-nowrap whitespace-nowrap hover:bg-white justify-center items-center text-center disabled:hover:scale-100 disabled:active:scale-100 disabled:hover:bg-white/65"
        >
          <span className="mr-2">Get Started</span>
          {formState.isSubmitting ? (
            <Loader2Icon className="size-5 animate-spin" />
          ) : (
            <SvgArrowRight className="inline-flex size-5" />
          )}
        </button>
      </form>
    );
  });

Subscriber.displayName = "Subscriber";
