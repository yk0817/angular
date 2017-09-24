class User {
  constructor(private _name: string){
    
  }
  public sayHi(): void {
    console.log("hi i am " + this._name);
  }
  get name() {
    return this._name;
  }
  set name(nameValue: string){
    this._name = nameValue;
  }
}

var tom = new User("Tom");
console.log(tom.name);
tom.name = "TOM";
console.log(tom.name);
tom.sayHi();