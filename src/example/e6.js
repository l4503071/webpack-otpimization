export default class page {
  constructor(name) {
    this.name = name;
  }
  setName(name) {
    this.name = name;
  }
  static staticA() {
    console.log('staticA');
  }
  static staticB() {
    console.log('staticB');
  }
  
}