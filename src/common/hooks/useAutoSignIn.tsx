import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";

import { api } from "@common/service/api/api";
import { authAtom } from "@common/store/atoms/authAtom";

export function useAutoSignIn() {
  const [loading, setLoading] = useState(true);
  const setAuthState = useSetAtom(authAtom);

  useEffect(() => {
    const storedToken = api.getAdminToken();

    if (storedToken) {
      setLoading(false);
      setAuthState(true);
    } else {
      setLoading(false);
      setAuthState(false);
    }
  }, [setAuthState]);

  return [loading];
}
