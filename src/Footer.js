import React from "react";

export function Footer(props) {
  return (
    <div className="panel-footer panel-primary panel-footer">
      <p />
      <ul>
        {props.footer.map((footer, i) => (
          <li key={i}>{footer}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
