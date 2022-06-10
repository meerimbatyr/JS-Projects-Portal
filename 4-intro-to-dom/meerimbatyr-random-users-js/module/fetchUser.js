const url = "https://randomuser.me/api/";

//fetch API
const getRandomUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  const person = data.results[0];
  //   console.log(person);
  const { large: image } = person.picture;
  const { first, last } = person.name;
  const { email, phone } = person;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  const { password } = person.login;
  return {
    image,
    email,
    phone,
    age,
    password,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getRandomUser;
