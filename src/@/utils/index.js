export const upperFirst = (arg) => {
    return arg ? arg.charAt(0).toUpperCase() + arg.slice(1) : "";
  };
  
  export function sliceWords(sentence, numberOfWords) {
    return sentence.split(" ").slice(0, numberOfWords).join(" ");
  }