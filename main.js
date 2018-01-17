module.exports = {
  removeElement(array, discarder) {
    return array.filter(x => x !== discarder);
  },

  getElementsGreaterThan10AtProperty(obj, key) {
    // your code here
    const arr = obj[key];
    if (Array.isArray(arr)) {
      return arr.filter(x => x > 10);
    }
    return [];
  },

  countAllCharacters(str) {
    const arr = str.split('');
    return arr.reduce((p, c) => {
      if (!p[c]) {
        p[c] = 0;
      }
      p[c]++;
      return p;
    }, {});
  },

  getFirstElementOfProperty(obj, key) {
    const arr = obj[key];
    if (Array.isArray(arr)) {
      return arr[0] || undefined;
    }
    return undefined;
  },

  getNthElementOfProperty(obj, key, n) {
    const arr = obj[key];
    if (Array.isArray(arr)) {
      return arr[n];
    }
    return undefined;
  }
};