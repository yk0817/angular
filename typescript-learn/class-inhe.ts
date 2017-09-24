class User {
  constructor(protected _name: string){
    
  }
  public sayHi(): void {
    console.log("hi! i am" + this._name);
  }
}

class AdminUser extends User {
  private _age: number;
  constructor(_name: string,_age: number){
    super(_name);
    this._age = _age;
  }
  public sayHi(): void{
    console.log("my age:" + this._age);
    console.log("my jake:" + this._name);
    super.sayHi();
  }
}

var bob = new AdminUser("Bob",23);
bob.sayHi();