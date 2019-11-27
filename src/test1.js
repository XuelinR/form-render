import React from "react";
import ReactDOM from "react-dom";
import FormRender from "form-render/lib/antd";

//import "@alid/next/dist/next.min.css";
//import FormRender from "form-render/lib/fusion";

const propSchema = {
  type: "object",
  properties: {
    dateDemo: {
      title: "时间",
      type: "string"
    }
  }
};

const uiSchema = {
  dateDemo: {
    "ui:widget": "date"
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {}
    };
  }
  onChange = value => {
    this.setState({
      formData: value
    });
  };

  onValidate = list => {
    console.log(list);
  };
  render() {
    const { formData } = this.state;
    return (
      <FormRender
        propSchema={propSchema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={this.onChange}
        onValidate={this.onValidate}
      />
    );
  }
}

const rootElement = document.getElementById("mytest");
ReactDOM.render(<App />, rootElement);
