/*
 * Starter file 
 */
(function() {
  "use strict";
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");
    let t = document.getElementById("input-text");
    let r = document.getElementById("result")

    document.getElementById("encrypt-it").addEventListener("click", handleEncrypt);
    function handleEncrypt(){
      console.log("Button clicked!")
      //cypher algorithm
      let result = "";
      for (let i=0; i < t.value.length; i++) {
        let char = t.value.charCodeAt(i);
        if (char == 90 || char == 122){
          result += String.fromCharCode(char - 25)
        }
        else {
          result += String.fromCharCode(char + 1);
        }
      }
      r.innerText = result;
    };

    document.getElementById("reset").addEventListener("click", handleReset);
    function handleReset(){
      t.value = "";
    }
  };

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
