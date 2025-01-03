"use client";

import {
  HTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  ForwardedRef,
  ReactNode,
  useCallback,
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
import { CONTACTS, SOCIALS } from "@/types";

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
  item?: HTMLAttributes<HTMLElement>;
  icon?: HTMLAttributes<SVGSVGElement>;
  onItemClick?: (item: SOCIALS | CONTACTS) => void;
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
    item,
    icon,
    onItemClick,
    className,
    ...rest
  }: SocialProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const handleItemClick = useCallback(
    (item: SOCIALS | CONTACTS) => () => {
      onItemClick?.(item);
    },
    [onItemClick],
  );

  return (
    <div ref={ref} className={cn("flex items-center", className)} {...rest}>
      {before}
      {discord && (
        <Link
          {...item}
          href={discord}
          target="_blank"
          className={cn("", item?.className)}
          onClick={handleItemClick(SOCIALS.DISCORD)}
        >
          <SvgDiscord {...icon} />
          <span className="sr-only">Discord</span>
        </Link>
      )}
      {twitter && (
        <Link
          {...item}
          href={twitter}
          target="_blank"
          className={cn("", item?.className)}
          onClick={handleItemClick(SOCIALS.TWITTER)}
        >
          <SvgTwitter {...icon} />
          <span className="sr-only">Twitter</span>
        </Link>
      )}
      {github && (
        <Link
          {...item}
          href={github}
          target="_blank"
          className={cn("", item?.className)}
          onClick={handleItemClick(SOCIALS.GITHUB)}
        >
          <SvgGithub {...icon} />
          <span className="sr-only">Github</span>
        </Link>
      )}
      {telegram && (
        <Link
          {...item}
          href={telegram}
          target="_blank"
          className={cn("", item?.className)}
          onClick={handleItemClick(SOCIALS.TELEGRAM)}
        >
          <SvgTelegram {...icon} />
          <span className="sr-only">Telegram</span>
        </Link>
      )}
      {linkedin && (
        <Link
          {...item}
          href={linkedin}
          target="_blank"
          className={cn("", item?.className)}
          onClick={handleItemClick(SOCIALS.LINKEDIN)}
        >
          <SvgLinkedin {...icon} />
          <span className="sr-only">Linked In</span>
        </Link>
      )}
      {email && (
        <Link
          {...item}
          href={`mailto:${email}`}
          target="_blank"
          className={cn("", item?.className)}
          onClick={handleItemClick(CONTACTS.EMAIL)}
        >
          <SvgMail {...icon} />
          <span className="sr-only">Email: {email}</span>
        </Link>
      )}
      {phone && (
        <Link
          {...item}
          href={`tel:${email}`}
          target="_blank"
          className={cn("", item?.className)}
          onClick={handleItemClick(CONTACTS.PHONE)}
        >
          <PhoneIcon {...icon} />
          <span className="sr-only">Phone: {phone}</span>
        </Link>
      )}
      {after}
    </div>
  );
});

Social.displayName = "Social";
