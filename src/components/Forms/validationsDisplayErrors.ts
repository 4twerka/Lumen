export const validationsDisplayErrors = [
    {
      validate: passWordLength,
      error: "* 8 символів!",
    },
    {
      validate: passwordHasUpperLetter,
      error: "* 1 велика літера!",
    },
    {
      validate: passwordHasNumber,
      error: "* 1 цифри!",
    },
  ];

  function passWordLength (value: string):boolean {
    return value?.length >= 8;
  };

  function passwordHasUpperLetter (value: string): boolean {
    return value?.split("").some((letter) => letter === letter.toUpperCase() && letter !== letter.toLowerCase());
  };

  function passwordHasNumber (value: string):boolean {
    return value?.split("").some((letter) => !isNaN(Number(letter)));
  };