let student = {
    name: "Andrey",
    lastname: "Gunkin",
    age: 26,
    job: "engineer"
    }
    
    function haveProp(str, obj) {
        if (str in obj){
            return true;
        } else {
          return false;
      }
    }
    
    console.log (haveProp("age", student));
    console.log (haveProp("university", student));