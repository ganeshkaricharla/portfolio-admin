import { useState } from "react";
import "./BirthdayInvite.css";
import BirthdayInviteName from "../BirthdayInviteName/BirthdayInviteName";
import BirthdayInviteShare from "../BirthdayInviteShare/BirthdayInviteShare";

function BirthdayInvite() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");

  return (
    <div className="birthdayinvite-container">
      {step === 1 && (
        <BirthdayInviteName name={name} setName={setName} setStep={setStep} />
      )}
      {step === 2 && <BirthdayInviteShare setStep={setStep} name={name} />}
      <span className="birthdayinvite-step">{step}/2</span>
    </div>
  );
}

export default BirthdayInvite;
