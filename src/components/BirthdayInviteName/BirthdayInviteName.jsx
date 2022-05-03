import React from "react";

function BirthdayInviteName({ name, setName, setStep }) {
  return (
    <>
      <h2 className="birthdayinvite-heading">Invite someone</h2>
      <div className="birthdayinvite-form">
        <input
          className="birthdayinvite-form-input"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          type="submit"
          className="birthdayinvite-form-submit"
          disabled={!name}
          onClick={() => {
            setStep(2);
          }}
        >
          Invite
        </button>
      </div>
    </>
  );
}

export default BirthdayInviteName;
