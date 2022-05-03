import "./SingleBirthday.css";

function SingleBirthday({ birthday }) {
  return (
    <div className="single-birthdaypage-upcoming">
      <div className="single-birthdaypage-upcoming-name">
        {birthday.name}
        <span className="single-birthdaypage-upcoming-relation">
          {birthday.relation}
        </span>
      </div>
      <div className="single-birthdaypage-upcoming-date">{birthday.date}</div>
      <div className="single-birthdaypage-upcoming-message">
        {birthday.message}
      </div>
    </div>
  );
}

export default SingleBirthday;
