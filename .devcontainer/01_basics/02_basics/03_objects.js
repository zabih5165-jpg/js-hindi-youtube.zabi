// singleton

// object literals
// object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Zabi",
    "full name": "Zabi Jhourd",
    [mySym]: "myKey1",
    age: 18,
    location: "bahawalnagar",
    email: "zabih5165@google.com",
    isoLggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Zabih@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Zabih@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
