import Script, { ScriptProps } from "next/script";
import { FC } from "react";
export type CookiebotProps = ScriptProps & {
  settingsId?: string;
};
export const Cookiebot: FC<CookiebotProps> = ({
  settingsId,
  ...rest
}: CookiebotProps) => {
  if (!settingsId) return null;
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
