function Add_and_Append(elementId, heading, content, type) {
    if (!type) {
        type = "div";
    }
    if (!elementId) {
        elementId = "new_element";
    }
    let newElement = document.createElement(type);
    if (heading) {
        newElement.innerHTML = "<b>" + heading + "</b> : " + content + " <br><br>";
    } else {
        newElement.innerHTML = content;
    }
    newElement.id = elementId;
    document.body.appendChild(newElement);
    console.log(newElement.innerText);
}

//                  Q1
//Write a JavaScript function that returns array elements larger than a number.
{
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function larger_ele(arr, n) {
        // let newArr = [];
        // arr.forEach((num) => {
        //     if (num > n) {
        //         newArr.push(num);
        //     }
        // });
        // return newArr;

        let newArr = arr.filter(num => num > n);
        return newArr;
    }
    console.log(larger_ele(arr, 5));
    Add_and_Append("q1", `Q1 : Num less than 5`, larger_ele(arr, 5));
    Add_and_Append("-", `-`, "----------------------------------");
}






//                  Q2
// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = "abcdabcdefgggh"
// ans = "abcdefgh"

{
    str = "abcdabcdefgggh";
    function extract(str) {
        let newStr = "";
        for (ch of str) {
            if (!(newStr.includes(ch))) {
                newStr += ch;
            }
        }
        console.log(newStr);
        return newStr;
    }

    Add_and_Append("q2", `Q2 : Non repeated`, extract(str));
}





//                   Q3
//Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

{
    countries = ["Australia", "Germany", "United States of America"];
    function largest_name(countries) {
        return countries.reduce((prev, curr) => {
            return prev.length > curr ? prev.length : curr;
        }, "")

        // let largest = '';
        // countries.forEach((country) => {
        //     if (country.length > largest.length) {
        //         largest = country;
        //     }
        // })
        // return largest;

        // let largest = countries.reduce((prev, curr) => {
        //     if (prev.length > curr.length) {
        //         return prev;
        //     } else {
        //         return curr;
        //     }
        // }, "")
        // return largest;
    }

    Add_and_Append("q3", `Q3 : Largest Country Name`, largest_name(countries));
}





//                  Q4
//Qs4. Write a JavaScript function to count the number of vowels in a String argument.

{
    let str2 = "a00e00i00o00u";

    function Count_Vowels(str2) {
        let count = 0;
        for (let ch of str2) {
            if ("aeiou".includes(ch)) {
                count++;
            }
        }
        return count;
    }

    Add_and_Append("elementId", `Q4 : a00e00i00o00u contains vowels`, Count_Vowels(str2));
}




//                  Q5
//Qs5. Write a JavaScript function to generate a random number within a range (start,end).

{
    function Gen_Random_Num(start, end) {
        result = Math.floor(Math.random() * (end - start)) + start;
        return result;
    }

    Add_and_Append("q5", `Q5 : Random no (10,15)`, Gen_Random_Num(10, 15));
}


