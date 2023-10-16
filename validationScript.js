    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

function f1()

{

  document.getElementById("btnSubmit").addEventListener("click", f2)
}

function f2()

{
  let theInput = ""
  theInput = document.getElementById("inputField").value

  let regExTest = /^[a-zA-Z0-9]*$/
  let regBool = regExTest.test(theInput)

  if(regBool == false)

  {

    window.alert("it was false, the  form will not be submitted")
  }

  else
  {

    window.alert("the form was submitted")
  }
}

f1()