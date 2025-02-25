function generateCode() {
  const Code = () => Math.floor(100000 + Math.random() * 900000).toString();
  return Code();
}
module.exports = generateCode;
