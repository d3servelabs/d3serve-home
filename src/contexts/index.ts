import { combineProviders } from "react-combine-providers";

import { AmplitudesProvider } from "./amplitudes";
import { ConstantsProvider } from "./constants";
import { TrackersProvider } from "./trackers";

const provider = combineProviders();

for (const contentProvider of [
  AmplitudesProvider,
  ConstantsProvider,
  TrackersProvider,
]) {
  provider.push(contentProvider);
}

// Master provider is used to provide the context to all components
export const Contexts = provider.master();

export { useAmplitudes } from "./amplitudes";
export { useConstants } from "./constants";
