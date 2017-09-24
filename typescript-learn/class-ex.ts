// クラス
// public,protected,private

class User {
  // public name: string;
  // constructor(name: string){
  //   this.name = name;
  // }
  constructor(public name: string){
    
  }
  public sayHi(): void {
    console.log("hi! i am" + this.name);
  }
}

var tom = new User("Tom")
console.log(tom.name);
tom.sayHi();