let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach
{
    console.log
        ("------------For Each------------");
    arr.forEach(element => {
        let str = '';
        str += element;
        console.log(element);
    });

    let arr2 = [    //can be used on arr of objects
        {
            name: "aman",
            marks: 90
        },
        {
            name: "shraddha",
            marks: 95
        },
        {
            name: "rohan",
            marks: 100
        }
    ];
    arr2.forEach(obj => {
        console.log(obj);
        console.log(obj.name, ":", obj.marks);
    })
}




//Map
{
    console.log("------------Map------------");
    let arr2 = arr.map(el => {
        el * 2
    })
    console.log(arr2);

    let students = [    //can be used on arr of objects
        {
            name: "aman",
            marks: 90
        },
        {
            name: "shraddha",
            marks: 95
        },
        {
            name: "rohan",
            marks: 100
        }
    ];
    let gpa = students.map(student => {
        return (student.marks) / 10;
    })
    console.log(gpa);
}




//Filter
{
    console.log("------------Filter------------");
    let even = arr.filter(num => (num % 2 == 0));
    console.log(even);

    let odd = arr.filter((num) => (num % 2 != 0));
    console.log(odd);

}




//Every
{
    console.log("------------Every------------");

    let result1 = [1, 2, 3, 4].every(ele => (ele % 2 == 0));
    console.log(result1);

    let result2 = [2, 4].every(ele => (ele % 2 == 0));
    console.log(result2);
}




//Reduce
{
    console.log("------------Reduce------------");

    let sum = arr.reduce((prev, curr) => prev + curr, 0);
    // let sum = arr.reduce((prev, curr) => {
    //     console.log(prev, curr);
    //     return prev + curr;
    // }, 0)
    console.log("Sum of array :", sum);


    //Find maximum in an array
    let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];
    let max = nums.reduce((prev, curr) => {
        return prev > curr ? prev : curr;

        // if (prev > curr) {
        //     return prev;
        // } else {
        //     return curr;
        // }
    })
    console.log("max = ", max);
}







//Default Parameters
{
    console.log("------------Default Parameters------------");
    function sum(a, b = 3) {
        console.log(a + b);
        return a + b;
    }

    sum(7);
}