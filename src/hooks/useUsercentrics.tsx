import { useEffect, useMemo, useState } from "react";
import {
  UCUICMPEventType,
  UCUICMPEvent,
  UsercentricsConsentCategories,
  UsercentricsEvent,
} from "@/types/UC_UI";

type Options = {
  debug?: boolean;
};

type UseUsercentrics = {
  initialized: boolean;
  interacted: boolean;

  open: boolean;
  save: boolean;

  acceptAll: boolean;
  denyAll: boolean;

  imprintLink: boolean;
  moreInformationLink: boolean;
  privacyPolicyLink: boolean;
};

/**
 * Custom hook `useUsercentrics` to manage and interact with the Usercentrics Consent Management Platform (CMP).
 *
 * This hook consolidates and manages state related to Usercentrics events and allows integration with the CMP
 * to handle user interactions, event triggers, and various state indicators like consent acceptance or denial.
 *
 * Parameters:
 * @param {Function} [callback] - Optional callback function to handle CMP events. It receives the event name and event object.
 *                                The callback will be invoked for each Usercentrics event type provided.
 * @param {Object} [options] - Configuration options for the hook.
 * @param {boolean} [options.debug=false] - Enables or disables debug logging. When enabled, specific event and state
 *                                          transitions are logged to the console.
 *
 * Returns:
 * @returns {Object} An object containing various state values and indicators related to the Usercentrics CMP:
 * - `initialized`: Boolean indicating whether the Usercentrics CMP has been initialized.
 * - `interacted`: Boolean indicating whether the user has interacted with the CMP.
 * - `open`: Boolean indicating whether the CMP dialog is currently open.
 * - `save`: Boolean indicating whether a save action has been triggered.
 * - `acceptAll`: Boolean indicating whether the "Accept All" option was selected.
 * - `denyAll`: Boolean indicating whether the "Deny All" option was selected.
 * - `imprintLink`: Boolean indicating whether the imprint link was clicked.
 * - `moreInformationLink`: Boolean indicating whether the "More Information" link was clicked.
 * - `privacyPolicyLink`: Boolean indicating whether the "Privacy Policy" link was clicked.
 */
export const useUsercentrics = (
  callback?: (name: UCUICMPEventType, event: UCUICMPEvent) => void,
  { debug = false }: Options = {},
): UseUsercentrics => {
  const [initialized, setInitialized] = useState(false);
  const [interacted, setInteracted] = useState(false);

  const [open, setOpen] = useState(false);
  const [save, setSave] = useState(false);

  const [acceptAll, setAcceptAll] = useState(false);
  const [denyAll, setDenyAll] = useState(false);

  const [imprintLink, setImprintLink] = useState(false);
  const [moreInformationLink, setMoreInformationLink] = useState(false);
  const [privacyPolicyLink, setPrivacyPolicyLink] = useState(false);

  const [consent, setConsent] = useState<
    Record<UsercentricsConsentCategories, boolean>
  >({});

  useEffect(() => {
    // const root = document.getElementById("usercentrics-root");
    // const dialog = root?.shadowRoot?.querySelector('[role="dialog"]');

    setInitialized(window.UC_UI?.isInitialized?.() ?? false);
    setInteracted(localStorage?.getItem("uc_user_interaction") === "true");
    // setOpen(!!dialog);

    const handles = (event: UCUICMPEvent) => {
      const { source, type } = event.detail;

      switch (type) {
        case UCUICMPEventType.ACCEPT_ALL:
          if (debug) console.log("ACCEPT_ALL", source);
          setAcceptAll(true);
          setOpen(false);
          setInteracted(true);
          break;
        case UCUICMPEventType.CMP_SHOWN:
          if (debug) console.log("CMP_SHOWN", source);
          setOpen(true);
          break;
        case UCUICMPEventType.DENY_ALL:
          if (debug) console.log("DENY_ALL", source);
          setDenyAll(true);
          setOpen(false);
          setInteracted(true);
          break;
        case UCUICMPEventType.IMPRINT_LINK:
          if (debug) console.log("IMPRINT_LINK", source);
          setImprintLink(true);
          break;
        case UCUICMPEventType.MORE_INFORMATION_LINK:
          if (debug) console.log("MORE_INFORMATION_LINK", source);
          setMoreInformationLink(true);
          break;
        case UCUICMPEventType.PRIVACY_POLICY_LINK:
          if (debug) console.log("PRIVACY_POLICY_LINK", source);
          setPrivacyPolicyLink(true);
          break;
        case UCUICMPEventType.SAVE:
          if (debug) console.log("SAVE", source);
          setSave(false);
          setOpen(false);
          setInteracted(true);
          break;
        default:
          break;
      }

      if (type) {
        callback?.(type, event);
      }
    };

    const handleUsercentricsEvent = (event: Event) => {
      const newConsent: Partial<
        Record<UsercentricsConsentCategories, boolean>
      > = (event as UsercentricsEvent)?.detail?.ucCategory ?? {};

      setConsent({
        ...newConsent,
        essential: newConsent.essential ?? false,
        marketing: newConsent.marketing ?? false,
        functional: newConsent.functional ?? false,
        statistics: newConsent.statistics ?? false,
      });
    };

    const handleUC_UI_CMP_EVENT = (event: Event) => {
      if (debug) console.log("UC_UI_CMP_EVENT", event);

      handles(event as UCUICMPEvent);
    };

    const handleUC_UI_INITIALIZED = (event: Event) => {
      if (debug) console.log("UC_UI_INITIALIZED", event);

      setInitialized(true);
      setInteracted(localStorage?.getItem("uc_user_interaction") === "true");
      setAcceptAll(window.UC_UI?.areAllConsentsAccepted?.() ?? false);
    };

    const events = Object.values(UCUICMPEventType).reduce(
      (accumulator, name) => {
        accumulator[name] = (event: Event) => {
          if (debug) console.log(name, event);

          handles(event as UCUICMPEvent);
        };

        return accumulator;
      },
      {} as Record<UCUICMPEventType, (event: Event) => void>,
    );

    window.addEventListener("ucEvent", handleUsercentricsEvent);
    window.addEventListener("UC_UI_CMP_EVENT", handleUC_UI_CMP_EVENT);
    window.addEventListener("UC_UI_INITIALIZED", handleUC_UI_INITIALIZED);

    Object.values(UCUICMPEventType).forEach((name) => {
      window.addEventListener(name, events[name]);
    });

    return () => {
      window.removeEventListener("ucEvent", handleUsercentricsEvent);
      window.removeEventListener("UC_UI_CMP_EVENT", handleUC_UI_CMP_EVENT);
      window.removeEventListener("UC_UI_INITIALIZED", handleUC_UI_INITIALIZED);

      Object.values(UCUICMPEventType).forEach((name) => {
        window.removeEventListener(name, events[name]);
      });
    };
  }, [callback, debug]);

  return useMemo(() => {
    return {
      initialized,
      interacted,

      open,
      save,

      acceptAll,
      denyAll,

      imprintLink,
      moreInformationLink,
      privacyPolicyLink,

      consent,
    };
  }, [
    initialized,
    interacted,

    open,
    save,

    acceptAll,
    denyAll,

    imprintLink,
    moreInformationLink,
    privacyPolicyLink,

    consent,
  ]);
};
