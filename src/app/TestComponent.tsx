"use client";

import { SbbButton } from "@sbb-esta/lyne-components-react/button";
import {
  SbbToggle,
  SbbToggleOption,
} from "@sbb-esta/lyne-components-react/toggle";
import { SbbToggleElement } from "@sbb-esta/lyne-components/toggle.js";
import { useState } from "react";

export default function TestComponent() {
  const [value, setValue] = useState("a");
  return (
    <div>
      <SbbToggle
        value={value}
        onDidChange={(event) =>
          setValue((event.target as SbbToggleElement).value)
        }
      >
        <SbbToggleOption value="a">Option A</SbbToggleOption>
        <SbbToggleOption value="b">Option B</SbbToggleOption>
      </SbbToggle>
      <div>Value: {value}</div>
      <SbbButton>Submit</SbbButton>
    </div>
  );
}
