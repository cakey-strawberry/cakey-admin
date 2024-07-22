import { atom } from "jotai";

type SnackbarAtomProps = {
  message: string;
  open: boolean;
  severity: "success" | "error" | "info" | "warning";
};

export const snackbarAtom = atom<SnackbarAtomProps>({
  message: "",
  open: false,
  severity: "success",
});
