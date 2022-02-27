//fuctions
function show() {
    //print
    console.log("Button Clicked");
}

function sum() {
    // variable decalration
    var a = 5;
    var b = 6;
    sum = a + b;

    //use let for duplication initization error
    // let a = 5;
    // let a = 6;
    // sum = a + a;

    //use const not change const value 
    // const a = 5;
    // a = 6;
    // sum = a + a;

    console.log("sum :" + sum)
}


function sampleIf() {
    var a = 9;
    if (a % 2 == 0) {
        console.log("Number is Even")
    }
    else {
        console.log("Number is Odd")
    }
}

function sampleForLoop() {

    //Sample Call Function of Fuctions
    hey()
    //
    for (var i = 0; i < 10; i++) {
        console.log(i)
    }
}

function sampleArray() {
    var array = ["one", "two", 4, 9, "hello"]
    console.log(array)
    //Print one value of array
    console.log(array[3])
}

function sampleObject() {
    var person = {
        Name: "Saranjith p",
        Age: 19,
        Place: "Kannur",
        Address: "Palakkandy (h), Vilamana, Iritty, Kannur, Kearala, India, PO 670703",
        Ph: 9526925448,
    }
    console.log(person)
    //Print one value of Object
    console.log("hi :" + person.Name)
}

function sampleArrayObject() {
    var peoples = [{
        Name: "Saranjith p",
        Age: 19,
        Place: "Kannur",
        Address: "Palakkandy (h), Vilamana, Iritty, Kannur, Kearala, India, PO 670703",
        Ph: 9526925448,
    },
    {
        Name: "Jithu",
        age: 18,
        skill: "coding",
        ph: 9447219148
    }
    ]
    console.log(peoples)
    //Print value of specified Object
    console.log("hi : " + peoples[1].Name)
}

function hey() {
    console.log("Hello")
}

function sampleParams() {
    //decare and assin 
    var a = 5;
    var b = 8;
    // call function and Pass params
    res = sampleReturnvalue(a, b)

    console.log("Sum:" + res)
}

//declare function and capture params
function sampleReturnvalue(c, h) {
    result = c + h
    //pass return value
    return (result)
}