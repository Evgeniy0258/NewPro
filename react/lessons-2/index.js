
const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true

    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]
function userName() {
    const filterName = users.map((item, index, array) => {
        return item.name
    }).join(', ')
    console.log(filterName);
}
userName()

function getCarsCount() {
    let sumCount = 0;
    users.forEach((item, index, array) => {
        if (item.cars) {
            sumCount += item.cars.length
        }
    })
    console.log(sumCount)
}
getCarsCount()

function filterEducation(arr) {
    const filterHasEducation = arr.filter((item, index, array) => {
        if (item.hasEducation) {
            return true
        } else {
            return false
        }
    })

    const arrUserName = filterHasEducation.map((item) => {
        return item.name
    }).join('; ')
    console.log(arrUserName)
}
filterEducation(users)


function filterAnimals(arr) {
    const filterUserAnimal = arr.filter((item) => {
        if (item.animals) {
            return true
        } else {
            return false
        }
    })


    const arrUserAnimal = filterUserAnimal.map((item) => {
        console.log(`${item.name} have: ${item.animals}`)
    }).join(',')
}
filterAnimals(users)


function getCars(arr) {
    let RESULT_ARR = [];

    const filteredArr = arr.filter((item) => item.cars);

    const getModelCars = filteredArr.map((item) => {

        RESULT_ARR = RESULT_ARR.concat(item.cars);
    });
    console.log(RESULT_ARR.join(", "));
}
getCars(users);





