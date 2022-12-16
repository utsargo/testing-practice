const stringLength = (string) => {
  let strLen = string.replace(/\s/g, "").length;
  if (strLen === 0) {
    return "Invalid string";
  } else if (strLen > 10) {
    return "It's too long";
  } else {
    return strLen;
  }
};
export default stringLength;
