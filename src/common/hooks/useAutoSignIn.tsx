import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";

import { DEV_ADMIN_TOKEN, ADMIN_TOKEN } from "@common/constants/constants";
import { authAtom } from "@common/store/atoms/authAtom";

export function useAutoSignIn() {
  const tokenKey =
    process.env.NODE_ENV === "development" ? DEV_ADMIN_TOKEN : ADMIN_TOKEN;

  const [loading, setLoading] = useState(true);
  const setAuthState = useSetAtom(authAtom);

  useEffect(() => {
    const storedToken = localStorage.getItem(tokenKey);

    /**
     * @TODO
     * auto sign in route로
     * 토큰 검증
     *
     * 검증 성공 -> setAuthState(true)
     * 검증 실패 -> 토큰 삭제 후 setAuthState(false)
     */

    if (storedToken) {
      setLoading(false);
      setAuthState(true);
    } else {
      setLoading(false);
      setAuthState(false);
    }
  }, [setAuthState, tokenKey]);

  return [loading];
}
