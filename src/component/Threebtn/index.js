import React from "react";
import Button from "../Button";

const Threebtn = () => {
  return (
    <>
    <div className="twobtn">
      <div className="firstbtn">
        <Button
          logo="../Images/btnlogo/message_icon.png"
          text="VIA SUPPORT CHAT"
        />
      </div>
      <div className="secondbtn" >
        <Button logo="../Images/btnlogo/phone_icon.png" text="VIA CALL" />
      </div>
      </div>
      <div className="singlebtn">
        <Button logo="../Images/btnlogo/Vector.png" text="VIA EMAIL FORM" />
      </div>
    </>
  );
};

export default Threebtn;
