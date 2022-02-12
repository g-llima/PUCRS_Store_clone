import React, { useState } from "react";

import "./Styles/Alert.css";

function Alert({ text, icon }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="alert" onClick={() => setIsOpen(false)}>
          <div className="alert__content">
            <i className={`${icon} alertIcon`}></i>
            <p className="alert__content__msg">{text}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Alert;
