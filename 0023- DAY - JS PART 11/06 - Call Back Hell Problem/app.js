//      Promises -> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//Code with callback hell occuring
function save_to_db(data, success, failure) {
  //success & failure are 2 callbacks
  let internet_speed = Math.floor(Math.random() * 10) + 1;
  //   console.log(`Internet speed = ${internet_speed}`); //extra

  if (internet_speed > 4) {
    success(data);
  } else {
    failure();
  }
}

//pass 2 callback function to perform in case of failure or sucess
save_to_db(
  "DATA 1",
  () => {
    console.log("SUCCESS 1 : Your data was saved"); //sucess callback for data 1
    save_to_db(
      //when 1st data is success then only save next data
      "DATA 2",
      () => {
        console.log("SUCESS 2 : Data saved"); //sucess callback for data 2

        save_to_db(
          "DATA 3",
          () => {
            console.log("SUCCESS 3 : Data was saved");
          },
          () => {
            console.log("FAILURE 3 : Data was not saved");
          }
        );
      },
      () => {
        console.log("FAILURE 2 : Data not saved"); //failure callback for 2nd data
      }
    );
  },
  () => {
    console.log("FAILURE 1 : Data was not saved"); //failure callback for 1st data
  }
);
