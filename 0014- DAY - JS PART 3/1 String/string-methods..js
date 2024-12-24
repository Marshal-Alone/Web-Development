// Practice Qs



// Qs. For the Give String :
// let msg = "help!" ;
// Trim it & convert it to uppercase.
let msg = "  help  ";
let newmsg = msg.trim().toUpperCase();
console.log(msg)
console.log(newmsg);;
console.log('\n');
    


// Qs. For the String -> let name : "ApnaCollege", predict the output for following :
let nme = "ApnaCollege";
console.log(nme.slice(4, 9));               //Colle
console.log(nme.indexOf("na"));             //2
console.log(nme.replace("Apna", "our"));      //ourCollege
console.log('\n');



// Qs. Separate the "College" part in above string & replace 'l' with 't' in it.
let newStr = nme.slice(nme.indexOf("College")).replaceAll ("l", "t")
console.log(newStr);