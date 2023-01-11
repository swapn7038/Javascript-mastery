// validation script here

const inputs = document.querySelectorAll("input");

const patterns = {
  // telephone:/[0-9]/
  //   telephone: /[\d[11]]/,
  //
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  //   password: /^$[a-z\d]/,
  password: /^[\w@-]{8-20}$/,
  slug: /^[a-z\d]{8-20}$/,
  email: /^([a-z\d\-]+)@([a-z\d-]+)\.([a-z]{2,8})(\[a-z]{2,8})$/,
};

// validation function
function validation(field, regex) {
  //   console.log(regex.test(field.value));

  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

// we cannot add event listener to group of all
// elements, like in the case of inputs.

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    //
    // console.log(e.target.attributes.name.value);
    // validation(e.target, patterns["telephone"]);
    validation(e.target, patterns[e.target.attributes.name.value]);
  });
});

// var reg = /[a-z]/;

// var reg2 = new RegExp[/[a-z]/'ig'];
// we can also write as mentioned above but it's not working.

/*
Swapnil Shelke
Learning RegEx 
From The Net Ninjas
Time : 23:30
*/

/*

three things not working 
1. email
2. password
3. slug

*/
