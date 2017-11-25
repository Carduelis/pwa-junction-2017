export default class {
  constructor(baseClass) {
    this.checkForString(baseClass, 'BaseClass');
    this.baseClass = baseClass;
    this.result = this.baseClass;
  }
  dashedConcat(text) {
    return `${this.baseClass}-${text}`;
  }
  checkForString(string, name) {
    if (typeof string !== 'string') {
      const errorMessage = `${name} should be a string, given ${typeof string} instead`;
      throw new Error(errorMessage, this);
    }
  }
  push(text) {
    this.checkForString(text, 'Class');
    this.result += ` ${this.dashedConcat(text)}`;
  }
  remove(text) {
    this.checkForString(text, 'Class');
    this.result = this.result.replace(` ${this.dashedConcat(text)}`, '');
  }

  getClass() {
    return this.result;
  }
}
