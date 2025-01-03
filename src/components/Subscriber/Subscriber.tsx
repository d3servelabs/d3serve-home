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
import { useTrackers } from "@/contexts/trackers";
import { EVENTS } from "@/constants";

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

    const { trackers } = useTrackers();

    const { register, handleSubmit, reset, formState } = useForm<Schema>({
      resolver: zodResolver(schema),
      defaultValues: {
        email: "",
      },
    });

    const onSubmit = useCallback(
      async (data: Schema) => {
        const response = await fetchWithRetry("/api/subscribe", {
          method: "POST",
          body: JSON.stringify(data),
        });

        setSuccess(response.ok);

        await trackers(
          response.ok ? EVENTS.SUBSCRIBE_SUCCESS : EVENTS.SUBSCRIBE_ERROR,
          {
            response: `${response.statusText} (${response.status})`,
          },
        );
      },
      [trackers],
    );

    const handleSubscribe = useCallback(async () => {
      await trackers(EVENTS.SUBSCRIBE_CLICK);
    }, [trackers]);

    const handleResubscribe = useCallback(async () => {
      setSuccess(false);

      reset(
        {
          email: "",
        },
        {
          keepErrors: true,
        },
      );

      await trackers(EVENTS.RESUBSCRIBE_CLICK);
    }, [reset, trackers]);

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
          "flex relative font-roboto-mono w-full p-2 gap-2 h-14 bg-white/5 transition-all duration-150 rounded-full",
          formState.errors.email && "bg-red-600/10",
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
            disabled={formState.isSubmitting}
            placeholder="Enter your email"
            className="size-full rounded-full bg-transparent px-8 outline-0 placeholder:text-white/30 autofill:!bg-transparent"
            {...register("email")}
          />
        )}

        {success && (
          <button
            onClick={handleResubscribe}
            className="flex h-full items-center justify-center whitespace-nowrap text-nowrap rounded-full bg-white px-8 text-center text-lg font-semibold text-black transition-all duration-150 hover:scale-[101%] hover:bg-white active:scale-[99%] disabled:cursor-not-allowed disabled:opacity-90 disabled:hover:scale-100 disabled:hover:bg-white disabled:active:scale-100"
          >
            <span className="mr-2">Re-subscribe</span>
            <RefreshCwIcon className="inline-flex size-5" />
          </button>
        )}
        {!success && (
          <button
            onClick={handleSubscribe}
            type="submit"
            disabled={formState.isSubmitting}
            className={cn(
              "flex h-full items-center font-semibold justify-center whitespace-nowrap text-nowrap rounded-full px-8 text-center text-lg text-black transition-all duration-150 hover:scale-[101%] active:scale-[99%] disabled:cursor-not-allowed disabled:opacity-90 disabled:hover:scale-100 disabled:active:scale-100",
              " bg-transparent hover:bg-white hover:text-black disabled:hover:text-white/30 disabled:hover:bg-transparent",
              formState.isValid && !formState.errors.email
                ? "text-white"
                : "text-white/30",
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
