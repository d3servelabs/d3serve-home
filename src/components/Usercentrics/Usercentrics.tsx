import type { FC } from "react";
import Script, { ScriptProps } from "next/script";

export interface UsercentricsProps extends ScriptProps {
  /**
   * The language code the Usercentrics UI should load by default. If not set, it will be automatically selected.
   *
   * @example "en"
   * @see https://usercentrics.atlassian.net/wiki/spaces/SKB/pages/1183678648
   */
  language?: string;

  settingsId: string;

  /**
   * The specific version of Usercentrics UI to load instead of "latest", as a string value
   *
   * @default "latest"
   * @example "1.2.3"
   * @see https://releases.usercentrics.com/en?category=browser+ui&role=cmpv1%3Bcmpv2%3B
   */
  uiVersion?: string;

  /**
   * Whether to run Usercentrics in "production" or "preview" mode
   * @default "production"
   */
  version?: "production" | "preview";

  src?: string;
}

/**
 * The script tag that loads the Usercentrics Browser UI & API.
 *
 * @example <caption>Default production mode</caption>
 * <Usercentrics settingsId="1234" />
 *
 * @example <caption>Preview mode for development</caption>
 * <Usercentrics settingsId="1234" version="preview" />
 *
 * @example <caption>Fixed UI version instead of latest</caption>
 * <Usercentrics settingsId="1234" uiVersion="1.2.3" />
 *
 * @example <caption>Fixed language code</caption>
 * <Usercentrics settingsId="1234" language="en" />
 */
export const Usercentrics: FC<UsercentricsProps> = ({
  id = "usercentrics-cmp",
  language,
  settingsId,
  uiVersion = "latest",
  version,
  ...rest
}) => (
  <Script
    {...rest}
    async={"async" in rest ? rest.async : true}
    data-language={language}
    data-settings-id={settingsId}
    data-version={version}
    id={id}
    src={`https://app.usercentrics.eu/browser-ui/${uiVersion}/loader.js`}
  />
);
