// クラス
// public,protected,private
var User = /** @class */ (function () {
    // public name: string;
    // constructor(name: string){
    //   this.name = name;
    // }
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHi = function () {
        console.log("hi! i am" + this.name);
    };
    return User;
}());
var tom = new User("Tom");
console.log(tom.name);
tom.sayHi();
