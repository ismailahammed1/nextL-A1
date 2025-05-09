// problem 11111111111111111
function formatString(input: string, toUpper?: boolean): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}


formatString("Hello");    // Output: "HELLO"
formatString("Hello", true);   // Output: "HELLO"
formatString("Hello", false);  // Output: "hello"


// Problem 2:
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item=>item.rating>4)??[]
   
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }]
filterByRating(books)

// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]


///problem 33333333333333
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((ac,currentVelu)=>ac.concat(currentVelu));
}

concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]

// problem 4444444444444
class vihicle {
  private _make:string;
  private _year:number;
  constructor(make:string,year:number){
    this._make=make;
    this._year=year;
  }
   getInfo(){
    return `Make:${this._make}, Year:${this._year}`
  }
}
class car extends vihicle {
  private _model:string;
  constructor(make:string,year:number, model:string){
    super(make,year);
    this._model=model;
  }
  getModel(){
  return `Model:${this._model}`
  }
}
const myCar = new car("Toyota", 2020, "Corolla");
myCar.getInfo();

myCar.getModel()


// problem---------5555
function processValue(value: string | number): number {
  if (typeof value==="string") {
    return value.length
    
  }else{
    return value*2
    
  }
}

processValue("hello"); // Output: 5
processValue(10) // Output: 20

// / problem---------666666

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
    if (products.length===0) {
      return null
    }
    return products.reduce((prv,current)=> prv.price>current.price?prv:current
  )
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

getMostExpensiveProduct(products); 
// problem---------7777
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
if (day===Day.Monday || day===Day.Sunday) {
  return "weekday"
  
}
return 'weekend'
}
console.log(getDayType(Day.Monday));   // Output: "Weekday"
console.log(getDayType(Day.Sunday));   // Output: "Weekend"
// problem---------888888888888888888888
async function squareAsync(n: number): Promise<number>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n<0) {
        return resolve;
      }
      return reject
    }, 1000);
  })}
  squareAsync(4).then(console.log);        // Output after 1s: 16
  squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed