const questions = document.querySelectorAll(".question");

      Array.from(questions).forEach((question, id) => {  

          question.addEventListener("click", (e) => {  
            const active = document.getElementsByClassName("active");       
            if(question.classList.value == "question active"){
              Array.from(active).forEach((element)=>{
              element.classList.remove("active");
              });
            }else{
              Array.from(active).forEach((element)=>{
              if(element) element.classList.remove("active");
              })
              document.querySelector("#question"+ id).classList.add("active");
              document.querySelector("#answer"+ id).classList.add("active");
              document.querySelector("#arrow"+ id).classList.add("active");

          }
      });

    })