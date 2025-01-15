import Script, { ScriptProps } from "next/script";
import { FC } from "react";

export type CookiebotProps = ScriptProps & {
  settingsId?: string;
  active?: boolean;
};

export const Cookiebot: FC<CookiebotProps> = ({
  settingsId,
  active = true,
  ...rest
}: CookiebotProps) => {
  if (!settingsId || !active) return null;

  return (
    <Script
      id="usercentrics-cmp"
      src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
      data-settings-id={settingsId}
      strategy="afterInteractive"
      {...rest}
    />
  );
};
