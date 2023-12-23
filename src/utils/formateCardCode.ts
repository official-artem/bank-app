export const formatCode = (code: string) => {
  if (!code) {
    throw new Error("Code of the card cannot be less than 12 numbers");
  }

  let formattedCode = "";

  for (let i = 0; i < code.length; ++i) {
    if (i % 4 === 0) {
      formattedCode += ` ${code[i]}`;
    } else {
      formattedCode += code[i];
    }
  }

  return formattedCode;
};
