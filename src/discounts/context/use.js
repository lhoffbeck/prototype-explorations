import { useContext } from "react";
import { DiscountContext } from "./DiscountContext";

export function useDiscountProvider() {
  const context = useContext(DiscountContext);

  // TODO naming
  const reduceFormValues = () => {
    // for each valuefull context key,
  };

  return [context, reduceFormValues];
}

export function useDiscountFields() {
  return useContext(DiscountContext);
}
