function tellFortune(jobTitle, geoLocation, partner, numKids) {
  const future = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partner} with ${numKids} kids.`;
  console.log(future);
}

tellFortune("Developer", "USA", "Rabih", 2);
tellFortune("Engineer", "Canada", "Brad Pitt", 6);
tellFortune("Celebrity", "Australia", "Obama", 4);
