let gabe = {
    name: 'Gabe',
    height: 70,
    hairColor: 'black',
    eyeColor: 'brown'
}

class Dog {

    static totalDogs = 0

    constructor(name, age) {
        this.name = name
        this.age = age
        Dog.totalDogs++
    }
    
    barkHello() {
        console.log(`Bork! I am called ${this.name} and I am ${this.age} human-years old!`)
    }

    addAge(number) {
        this.age += number
    }

}

let shasta = new Dog('Shasta', 11)
// console.log(Dog.totalDogs)
let annie = new Dog('Annie', 6)
// console.log(Dog.totalDogs)
let sammie = new Dog('Sammie', 3)
// console.log(Dog.totalDogs)

sammie.addAge(3)
console.log(sammie.age)

class Retriever extends Dog {
    constructor(name, age) {
        super(name, age)
    }

    fetch() {
        console.log(`Bork! Here is the  ball you just threw.`)
    }

    barkHello() {
        console.log(`Retrievers only, loser!`)
    }
}

let biscuit = new Retriever('Biscuit', 5)

// biscuit.barkHello()
// biscuit.fetch()

