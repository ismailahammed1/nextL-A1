# nextL-A1
## What is TypeScript?
*TypeScript is a high-level programming language developed by Microsoft. It adds static typing to JavaScript and is considered a superset of JavaScript. When programmers create large-scale projects with JavaScript, it can be difficult to understand what type of data is being passed, since JavaScript is a loosely typed language. This is why TypeScript has become popular.*

*When a programmer writes code in TypeScript, the compiler shows an error if the wrong type is used. It helps catch type-related errors during development, improving productivity and reducing bugs, making it easier to build more reliable and maintainable projects.*




## What are some differences between interfaces and types in TypeScript?
*In TypeScript, a type is used to define the kind of data a variable can hold.*
*When programmers write code like*

`let name: string = 'ismail';     // string
let value: number = 111;         // number
let isAdmin: boolean = true;     // boolean
`
*BUT TYPESCRIPT IS NOT THE RIGHT WAY TO WRITE CODE.*
`
let names:string='ismail'///string
let value:number=111;// number
let isAdmin:boolean= true||false;// boolean
`
*but it's not reusable. If you need the same structure in multiple places, you can define a custom type:*
`
type UserDetails = {
  name: string;
  age: number;
};
*Now we can access and reuse this code. type user*
 *interface and type are same syntax interface assign with assing oparetor and type use assing oparetor*
let userInfo: UserDetails = {
  name: "ismail",
  age: 29
};

*`Difference Between Type and Interface*
`

*// Using type*
type User = {
  name: string;
  age: number;
};

*// Using interface*
interface User2 {
  name: string;
  age: number;
}
*An interface extending person*
interface Person {
  name: string;
}
interface Employee extends Person {
  salary: number;
}
`

*type cannot be sthe ame  interface as mage  same*
*type use union, primitive, and tuple, but interface only object*
## What is the use of the keyof keyword in TypeScript? Provide an example.
*keyof keyword in TypeScript is used to get a union of all the keys of a type or interface as string (or symbol) literal types.*
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

type UserKeys = keyof User; it means keyof woring like name| age| IsAdmin



## Explain the difference between any, unknown, and never types in TypeScript.
**any:** *I don't care what the type is.Disables type checking for that variable.*
 *Use it sparingly, because it bypasses TypeScript’s safety. Not type-safe — behaves like JavaScript* 
**let value: any = "hello";*
**value = 11;*
**value.toFixed()*
**unknown**: *I don’t know the type, but I want type safety.You must check the *type before using it.Safer alternative to any. Type-safe — forces you to narrow the type before usage.*
**let input: unknown = "hello";*
if (typeof input === "string") {
  console.log(input.toUpperCase());
}
**never** when Functions that never return always throw errors 


## What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Replace magic values with human-readable names.Document intent by making the possible values explicit.Improve type safety by restricting to predefined values.
enum Status {
    Pending ,
    InProgress ,
    Completed 
}

alternetive use type as

enum Status {
    Pending ,
    InProgress ,
    Completed 
} as const
type Status =typeof Status[keyOf typeof Status]

## What is type inference in TypeScript? Why is it helpful?
 Less code, code reuseable, improve productivity and quality,
## How does TypeScript help in improving code quality and project maintainability?
when write a  code catch error and we are soliveing debuging. then complete project error free and create production level poject.
TypeScript given Type Safety and advance Type Features,  Reduces debugging time, reduce mistike, we are aboiding unexpected behavior. Clearly defines code function,Better Developer Experience,  faster and Easier maintenance

## Provide an example of using union and intersection types in TypeScript. -->
*Union Types*
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(`ID is a string: ${id.toUpperCase()}`);
    } else {
        console.log(`ID is a number: ${id * 10}`);
    }
}
*interface*
type User = {
    name: string;
    email: string;
};

type Admin = {
    adminLevel: number;
};
type AdminUser = User & Admin;

const admin: AdminUser = {
    name: "Md. Ismail Ahammed Roman",
    email: "ismailahmmedroma@gmail.com",
    adminLevel: 5
};

github:https://github.com/ismailahammed1
