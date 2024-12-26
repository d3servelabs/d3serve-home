import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  ReactNode,
} from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { PhoneIcon } from "lucide-react";
import SvgDiscord from "@/components/icons/socials/Discord";
import SvgTwitter from "@/components/icons/socials/Twitter";
import SvgGithub from "@/components/icons/socials/Github";
import SvgTelegram from "@/components/icons/socials/Telegram";
import SvgLinkedin from "@/components/icons/socials/Linkedin";
import SvgMail from "@/components/icons/icons/Mail";

export type SocialProps = HTMLAttributes<HTMLDivElement> & {
  discord?: string;
  twitter?: string;
  github?: string;
  telegram?: string;
  linkedin?: string;
  email?: string;
  phone?: string;
  before?: ReactNode;
  after?: ReactNode;
  ref?: ForwardedRef<HTMLDivElement>;
};

export const Social: ForwardRefExoticComponent<SocialProps> = forwardRef<
  HTMLDivElement,
  SocialProps
>(function Social(
  {
    discord,
    twitter,
    github,
    telegram,
    linkedin,
    email,
    phone,
    before,
    after,
    className,
    ...rest
  }: SocialProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={cn("flex gap-1 items-center", className)}
      {...rest}
    >
      {before}
      {discord && (
        <Link href={discord} target="_blank" className="">
          <SvgDiscord className="size-6" />
          <span className="sr-only">Discord</span>
        </Link>
      )}
      {twitter && (
        <Link href={twitter} target="_blank" className="">
          <SvgTwitter className="size-6" />
          <span className="sr-only">Twitter</span>
        </Link>
      )}
      {github && (
        <Link href={github} target="_blank" className="">
          <SvgGithub className="size-6" />
          <span className="sr-only">Github</span>
        </Link>
      )}
      {telegram && (
        <Link href={telegram} target="_blank" className="">
          <SvgTelegram className="size-6" />
          <span className="sr-only">Telegram</span>
        </Link>
      )}
      {linkedin && (
        <Link href={linkedin} target="_blank" className="">
          <SvgLinkedin className="size-6" />
          <span className="sr-only">Linked In</span>
        </Link>
      )}
      {email && (
        <Link href={`mailto:${email}`} target="_blank" className="">
          <SvgMail className="size-6" />
          <span className="sr-only">Email: {email}</span>
        </Link>
      )}
      {phone && (
        <Link href={`tel:${email}`} target="_blank" className="">
          <PhoneIcon className="size-6" />
          <span className="sr-only">Phone: {phone}</span>
        </Link>
      )}
      {after}
    </div>
  );
});

Social.displayName = "Social";
