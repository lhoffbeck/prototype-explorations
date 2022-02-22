import { useState } from "react";
import { DiscountContext } from "./DiscountContext";

import { useField, notEmpty } from "@shopify/react-form";
// TODO does each component use a state? reducer?

export function DiscountProvider2({ children }) {
  return (
    <DiscountContext.Provider value={{}}>{children}</DiscountContext.Provider>
  );
}

// DOES THIS WORK? seems like there's still an issue with the provider not being initialized before the useForm call would happen
export function DiscountProvider({ children }) {
  const title = useField({
    value: "",
    validates: [notEmpty("Title is required")]
  });

  const discountFields = {
    title
  };

  return (
    <DiscountContext.Provider value={discountFields}>
      {children}
    </DiscountContext.Provider>
  );
}
