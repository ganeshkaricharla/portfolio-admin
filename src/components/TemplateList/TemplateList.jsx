import React from "react";
import SingleTemplate from "../SingleTemplate/SingleTemplate";
import "./TemplateList.css";

function TemplateList() {
  const template = {
    templatename: "TemplateName",
    url: "https://unsplash.it/200/300",
    active: true,
  };
  const template2 = {
    templatename: "TemplateName",
    url: "https://unsplash.it/200/300",
    active: false,
  };
  return (
    <div className="templatelist-container">
      <SingleTemplate template={template} />
      <SingleTemplate template={template2} />
    </div>
  );
}

export default TemplateList;
