import "./BirthdayInviteShare.css";
import { WhatsappShareButton, EmailShareButton } from "react-share";
import { birthdayInviteShare } from "./birthdayShareData";

function BirthdayInviteShare({ name, setStep }) {
  return (
    <>
      <i
        className="birthdayinvite-backbutton fa-regular fa-hand-point-left"
        onClick={() => {
          setStep(1);
        }}
      >
        {"  back"}
      </i>
      <h2 className="birthdayinvite-heading">Share</h2>
      <div className="birthdayinvite-form">
        <input
          type="text"
          value={birthdayInviteShare.shareLink + name}
          className="birthdayinvite-form-input birthdayinvite-copylink"
        />
        <button
          type="submit"
          className="birthdayinvite-form-submit "
          onClick={() => {
            navigator.clipboard.writeText(birthdayInviteShare.shareLink + name);
          }}
        >
          Copy
        </button>
      </div>

      <span className="birthdayinvite-divider">or share using</span>
      <div className="birthdayinvite-social">
        <EmailShareButton
          subject={birthdayInviteShare.email.subject}
          body={birthdayInviteShare.email.body}
          url={birthdayInviteShare.shareLink + name}
        >
          <i className="birthdayinvite-social-icon fa-regular fa-envelope"></i>
        </EmailShareButton>
        <WhatsappShareButton
          title={birthdayInviteShare.whatsapp.title}
          url={birthdayInviteShare.shareLink + name}
        >
          <i className="birthdayinvite-social-icon fa-brands fa-whatsapp"></i>
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default BirthdayInviteShare;
