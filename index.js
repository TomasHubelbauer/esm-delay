export default function delay(/** @type {number} */ ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
