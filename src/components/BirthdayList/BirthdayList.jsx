import SingleBirthday from "../SingleBirthday/SingleBirthday";
import "./BirthdayList.css";

function BirthdayList() {
  const birthday = {
    name: "John",
    date: "12/12/2020",
    relation: "Father",
    message: "Happy Birthday!",
  };

  return (
    <div className="birthdaypage-upcoming">
      <SingleBirthday birthday={birthday} />
      <SingleBirthday birthday={birthday} />
      <SingleBirthday birthday={birthday} />
      <SingleBirthday birthday={birthday} />
      <SingleBirthday birthday={birthday} />

      <SingleBirthday birthday={birthday} />
      <SingleBirthday birthday={birthday} />
      <SingleBirthday birthday={birthday} />
      <SingleBirthday birthday={birthday} />
    </div>
  );
}

export default BirthdayList;
