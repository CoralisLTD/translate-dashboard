export const stripHtml = (html) => {
  // Create a temporary element
  var temp = document.createElement("div");
  // Set the HTML content
  temp.innerHTML = html;
  // Get the text content
  var text = temp.textContent || temp.innerText || "";
  // Remove the temporary element
  temp.remove();

  return text;
};

export const stripHtmlAndSpecialChars = (text) => {
  if (!text) return;

  // Remove HTML tags
  const strippedText = text.replace(/<[^>]*>/g, "");

  // Remove special characters
  //   const cleanText = strippedText.replace(/[^\w\s]/gi, "");

  return strippedText;
};

export const reverseText = (text) => {
  if (!text) return;
  // Split the text into an array of characters
  var characters = text.split("");
  // Reverse the array
  var reversedCharacters = characters.reverse();
  // Join the array back into a string
  var reversedText = reversedCharacters.join("");

  return reversedText;
};

export const getCleanText = (description) => {
  var descriptionWithNoStyle = description?.replace(/<style.*?<\/style>/g, "");
  var descriptionWithNoHtml = descriptionWithNoStyle?.replace(
    /(<([^>]+)>)/gi,
    ""
  );
  const nbspRegEx = /((&nbsp;))*/gim;
  const noNbsp = descriptionWithNoHtml?.replace(nbspRegEx, "");

  return noNbsp || "";
};