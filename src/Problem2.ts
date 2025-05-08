// problem 11111111111111111
function formatString(input: string, toUpper?: boolean): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}


console.log(formatString("Hello"));    // Output: "HELLO"
console.log(formatString("Hello", true));   // Output: "HELLO"
console.log(formatString("Hello", false));  // Output: "hello"


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
  make:string;
  year:number;
  constructor(make:string,year:number){
    this.make=make;
    this.year=year;
  }
  getInfo(){
    return `Make:${this.make}, Year:${this.year}`
  }
}
class car extends vihicle {
  model:string;
  constructor(make:string,year:number, model:string){
    super(make,year);
    this.model=model;
  }
  getModel(){
  return `Model:${this.model}`
  }
}
const myCar = new car("Toyota", 2020, "Corolla");
myCar.getInfo()
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

/
// problem---------5555
// problem---------5555
// problem---------5555
// problem---------5555