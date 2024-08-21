//Goes through a string replaces whitespace with underscore
function makeURLfriendly(inputString: string): string {
  // Use a regular expression to match whitespace (spaces, tabs, newlines) and replace them with underscores
  return inputString.replace(/\s+/g, "_");
}

export { makeURLfriendly };
