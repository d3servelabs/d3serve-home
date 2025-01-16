import { UC_UI } from "@/types/UC_UI";

declare global {
  interface Window {
    UC_UI: UC_UI;
  }
}
