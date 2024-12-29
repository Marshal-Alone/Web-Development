//                  Q1
{
    //Qsl . Write an arrow function named arrayAverage that accepts an array of numbers
    // and returns the average of those numbers.
    arr = [1, 2, 3, 4, 5];
    const avg = (arr) => {
        let sum = arr.reduce((prev, curr) => prev += curr);
        let length = arr.length;

        // console.log(`Array =${arr}`);
        // console.log(`sum =${sum}`);
        // console.log(`length =${length}`);

        return sum / length;
    }
    console.log(avg(arr));

    const avg2 = (arr) => {
        let sum = 0;
        let length = arr.length;
        arr.forEach(num => {
            sum += num;
        });

        // console.log(`Array =${arr}`);
        // console.log(`sum =${sum}`);
        // console.log(`length =${length}`);

        return sum / length;

    }
    console.log(avg2(arr));
}


//                  Q2
{
    //Qs2. Write an arrow function named isEven() that takes a single number as argument
    // and returns if it is even or not.

    // const isEven = (n) => {
    //     if (n % 2 == 0) {
    //         return "Even";
    //     } else {
    //         return "odd";
    //     }
    // }
    // console.log(isEven(2));

    const isEven = (n) => (n % 2 == 0);
    console.log(isEven(4));
}


//                  Q3
{
    //Qs3. What is the output of the following code
    let object = {
        message: 'Hello, World!',
        logMessage: function () {
            // console.log(this);
            console.log(this.message);              //Hello World
            setTimeout(object.logMessage, 1000);    //undefined , parent=>window
        }
    };

    // object.logMessage();

    //Hello World
    //after 1 sec
    //undefined countinuously
}



//                  Q4
// {
//Qs4. What is the output of the following code
let length = 4;

function callback() {
    // console.log(this.length);
    let length = 4;
    console.log(this);
    return this.length
}

const object = {
    length: 5,
    method(callback) {
        console.log(this);              // object
        console.log(this.length);       // 5
        callback();                     //this,parent -> window ,
    }
};

console.log("callback() : ", callback());   //this=>window and default len of window=0
console.log("object.method(callback): ", object.method(callback));     //
