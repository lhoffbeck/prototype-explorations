import React from "react";
import { useForm, useField } from "@shopify/react-form";

import { DiscountProvider } from "../../context";
import { useDiscountFields } from "../../context/use";

import { DiscountName } from "../DiscountName";

export function DiscountForm({ children, onSubmit }) {
  return (
    <DiscountProvider>
      <form onSubmit={onSubmit}>
        <>
          <DiscountName />
          {children}
        </>
      </form>
    </DiscountProvider>
  );
}

function DiscountForm2({ children }) {
  const discountFields = useDiscountFields();

  const {
    fields: { title },
    submit,
    submitting,
    dirty,
    reset,
    submitErrors,
    makeClean
  } = useForm({
    fields: discountFields,
    onSubmit: async (fieldValues) => {
      return { status: "fail", errors: [{ message: "bad form data" }] };
    }
  });

  return (
    <DiscountProvider>
      <form onSubmit={submit}>
        <>
          <DiscountName />
          {children}
        </>
      </form>
    </DiscountProvider>
  );
}
