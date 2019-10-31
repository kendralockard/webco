// Map
const squares = [4, 9, 16, 25]
const square_roots = squares.map(Math.sqrt)
//console.log(square_roots)

function minusOne(num) {
  return num - 1;
}

const new_nums = square_roots.map(minusOne)
//console.log(new_nums)

const add = (a, b) => a + b

//console.log(add(1, 2))

// Class definition
class Turtle {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print_age() {
    console.log(`${this.name} is ${this.age} years old`)
  }
}

// Instantiate new instance
const turtle1 = new Turtle("harold", 225)
const turtle2 = new Turtle("kumar", 2)
//console.log(turtle1.name, turtle1.age)
//console.log(turtle2.name, turtle2.age)

// Method call
turtle1.print_age()
turtle2.print_age()

// Subclass definition
class AlligatorSnappingTurtle extends Turtle {
  constructor(name, age, likelihood_of_snapping) {
    super(name, age)
    this.likelihood_of_snapping = likelihood_of_snapping
  }
  print_age() {
    console.log(`${this.name} is ${this.age} years young`)
  }
  print_likelihood_of_snapping() {
    console.log(`${this.name} has a ${this.likelihood_of_snapping} chance of snapping`)
  }
}

// Instantiate new instance
const turtle3 = new AlligatorSnappingTurtle("hank", 105, "high")


// Method call
turtle3.print_age()
turtle3.print_likelihood_of_snapping()


// Improper method call
turtle1.print_likelihood_of_snapping()
