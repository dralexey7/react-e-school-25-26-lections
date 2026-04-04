import type { Middleware } from "@reduxjs/toolkit";

export const loggerMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    const result = next(action);
    console.log("[redux] action", action);
    console.log("[redux] state", storeAPI.getState());
    return result;
  };

  