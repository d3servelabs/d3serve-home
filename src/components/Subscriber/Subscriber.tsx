"use client";

import {
  FormHTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2Icon, RefreshCwIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/utils/cn";
import { Input } from "@/components/Input";
import SvgArrowRight from "@/components/icons/icons/ArrowRight";
import { fetchWithRetry } from "@/utils/fetchWithRetry";

const schema = z.object({
  email: z.string().trim().email("Invalid email address"),
});

type Schema = z.infer<typeof schema>;

export type SubscriberProps = FormHTMLAttributes<HTMLFormElement> & {
  duration?: number;
  ref?: ForwardedRef<HTMLFormElement>;
};

export const Subscriber: ForwardRefExoticComponent<SubscriberProps> =
  forwardRef<HTMLFormElement, SubscriberProps>(function Subscriber(
    { duration = 30 * 1000, className, ...rest }: SubscriberProps,
    ref: ForwardedRef<HTMLFormElement>,
  ) {
    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, formState } = useForm<Schema>({
      resolver: zodResolver(schema),
    });

    const onSubmit = useCallback(async (data: Schema) => {
      console.log("Form submitted with data:", data);

      const response = await fetchWithRetry("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
      });

      setSuccess(response.ok);
    }, []);

    useEffect(() => {
      if (success) {
        const timer = setTimeout(() => {
          setSuccess(false);
        }, duration);

        return () => clearTimeout(timer);
      }
    }, [duration, success]);

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={ref}
        className={cn(
          "flex relative w-full p-2 gap-2 h-14 bg-white/10 transition-all duration-150 rounded-full",
          !formState.isValid && "bg-red-600/10",
          className,
        )}
        {...rest}
      >
        {success && (
          <div className="line-clamp-1 flex size-full items-center px-8 font-bold text-white">
            Thank you for subscribing!
          </div>
        )}
        {!success && (
          <Input
            placeholder="Enter your email"
            className="size-full rounded-full bg-transparent px-8 tracking-widest outline-0 placeholder:text-white/30 autofill:!bg-transparent"
            {...register("email")}
          />
        )}

        {success && (
          <button
            onClick={() => setSuccess(false)}
            className="flex h-full items-center justify-center whitespace-nowrap text-nowrap rounded-full bg-white px-8 text-center text-lg text-black transition-all duration-150 hover:scale-[101%] hover:bg-white active:scale-[99%] disabled:cursor-not-allowed disabled:opacity-90 disabled:hover:scale-100 disabled:hover:bg-white disabled:active:scale-100"
          >
            <span className="mr-2"> Subscribe Again</span>
            <RefreshCwIcon className="inline-flex size-5" />
          </button>
        )}
        {!success && (
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className={cn(
              "flex h-full items-center justify-center whitespace-nowrap text-nowrap rounded-full px-8 text-center text-lg text-black transition-all duration-150 hover:scale-[101%] active:scale-[99%] disabled:cursor-not-allowed disabled:opacity-90 disabled:hover:scale-100 disabled:active:scale-100",
              formState.isValid
                ? "bg-white hover:bg-white disabled:hover:bg-white"
                : "bg-white/65 hover:bg-white/85 disabled:hover:bg-white/65",
              formState.isSubmitting && "cursor-wait disabled:cursor-wait",
            )}
          >
            <span className="mr-2">Get Started</span>
            {formState.isSubmitting ? (
              <Loader2Icon className="size-5 animate-spin" />
            ) : (
              <SvgArrowRight className="inline-flex size-5" />
            )}
          </button>
        )}
      </form>
    );
  });

Subscriber.displayName = "Subscriber";
