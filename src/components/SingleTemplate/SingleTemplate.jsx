import React from "react";
import "./SingleTemplate.css";

function SingleTemplate({ template }) {
  return (
    <div
      className={`single-template-container ${
        template.active === true ? "single-template-active" : ""
      }`}
      style={{ background: `url('${template.url}')` }}
    >
      <h1 className="single-template-name">TemplateName</h1>

      {template.active ? (
        ""
      ) : (
        <button className="single-template-apply">Apply</button>
      )}
    </div>
  );
}

export default SingleTemplate;
