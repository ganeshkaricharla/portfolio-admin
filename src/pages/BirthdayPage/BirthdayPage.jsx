import BirthdayInvite from "../../components/BirthdayInvite/BirthdayInvite";
import BirthdayList from "../../components/BirthdayList/BirthdayList";
import "./BirthdayPage.css";

function BirthdayPage() {
  return (
    <div className="birthdaypage-container">
      <h1 className="birthdaypage-heading">Slam book</h1>
      <section className="birthdaypage-content">
        <BirthdayList />
        <BirthdayInvite />
      </section>
    </div>
  );
}

export default BirthdayPage;
