const capitalizeFirstLetter = (sentence: string): string => {
  const sentenceArray = sentence.split(' ');

  const capitalizedSentenceArray = sentenceArray.map(word => {
    if (word !== '')
      return word.trim()[0].toUpperCase() + word.trim().substring(1);
  });

  const capitalizedSentenceWithoutSpaces = capitalizedSentenceArray.filter(
    word => word !== undefined
  );

  const capitalizedSentence = capitalizedSentenceWithoutSpaces.join(' ');

  return capitalizedSentence;
};

export default capitalizeFirstLetter;
