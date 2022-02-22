import { Card, TextField } from "@shopify/polaris";
import React from "react";

export function DiscountName() {
  return (
    <Card title="discount name" sectioned>
      <TextField placeholder="discount title" />
    </Card>
  );
}

// props {onChange, value, error}
export function DiscountName2(props) {
  return (
    <Card title="discount name" sectioned>
      <TextField {...props} />
    </Card>
  );
}

function withDiscountWrapper(Component, type) {
  const { onChange, value, error } = useDiscountContext(type);

  return <Component onChange={onChange} value={value} errors={errors} />;
}

export default withDiscountWrapper(DiscountName2, "DiscountName2");

// fake use-field approach
// by default, register myself with value/setvalue/errors
// dirty can come from the state (not from a form)
// when errors come back from the mutation, somehow need to map them to the individual fields (that's the hard part)
// is that the hard part? wouldn't users have to provide this mapping on their own anyway?
// what about the default fields? could we provide a default error mapper?
