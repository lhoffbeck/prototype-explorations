import React, { useState } from "react";

import "./styles.css";
import { Card, Layout, TextField } from "@shopify/polaris";

import { DiscountForm } from "./discounts";

export default function App() {
  return (
    <div className="App">
      <Layout sectioned>
        <h1>my custom discount type</h1>

        <DiscountForm>
          <MyCustomComponent />
        </DiscountForm>
      </Layout>
    </div>
  );
}

function MyCustomComponent() {
  // TODO
  const [state, setState] = useState();

  return (
    <Card sectioned title="config card">
      <TextField
        value={state}
        onChange={setState}
        placeholder="some config value"
      />
    </Card>
  );
}
