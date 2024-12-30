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
import { fetchWithRetry } from "@/utils/fetchWithRetry";

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
    });

    const onSubmit = useCallback(async (data: Schema) => {
      console.log("Form submitted with data:", data);

      const response = await fetchWithRetry("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Successfully subscribed");
      }
    }, []);

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={ref}
        className={cn(
          "flex w-full p-2 gap-2 h-14 bg-white/10 transition-all duration-150 rounded-full",
          formState.errors.email && "bg-red-600/10",
          className,
        )}
        {...rest}
      >
        <Input
          placeholder="Enter your email"
          className="size-full rounded-full bg-transparent px-8 tracking-widest outline-0 placeholder:text-white/30 autofill:!bg-transparent"
          {...register("email")}
        />
        <button
          type="submit"
          className="flex h-full items-center justify-center whitespace-nowrap text-nowrap rounded-full bg-white/65 px-8 text-center text-lg text-black transition-all duration-150 hover:scale-[101%] hover:bg-white active:scale-[99%] disabled:cursor-not-allowed disabled:opacity-90 disabled:hover:scale-100 disabled:hover:bg-white/65 disabled:active:scale-100"
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
