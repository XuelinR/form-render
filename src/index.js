import React, { useState } from "react";
import ReactDOM from "react-dom";
import FormRender from "form-render/lib/antd";
import SCHEMA from "./schema.json";

function Demo() {
  const [formData, set] = useState({});

  const onValidate = valid => {
    console.log("没有通过校验的:", valid);
  };

  const onSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div style={{ padding: 60 }}>
      <FormRender
        {...SCHEMA}
        formData={formData}
        onChange={set}
        onValidate={onValidate}
      />
      <button onClick={onSubmit}>提交</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Demo />, rootElement);
