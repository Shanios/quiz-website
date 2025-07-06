
let questions =""
async function quiz()
{ try{
    const res = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
    const data = await res.json();
    const questiondata = data.results[0]
    questions = questiondata
    console.log(questiondata);
     
    function questiondecoding(amv)
    {
       let txt = document.createElement("textarea")
       txt.innerHTML = amv
       return txt.value
    }
        q = questiondecoding( amv = questiondata.question)

    const itemss = document.getElementsByClassName("box")[0]
    const item1 = document.getElementById("item1")
    const item2 = document.getElementById("item2")
    const item3 = document.getElementById("item3")
    const item4 = document.getElementById("item4")
    const arr = [...questiondata.incorrect_answers,questiondata.correct_answer]
     arrsorted = arr.sort(() => Math.random() - 0.5)
    console.log(arrsorted);
    decodedarray = arrsorted.map((env1) => { 
       let txt = document.createElement("textarea")
       txt.innerHTML = env1
       return txt.value
    })
    item1.querySelector("#button1").textContent = decodedarray[0]
    item2.querySelector("#button2").textContent = decodedarray[1]
    item3.querySelector("#button3").textContent = decodedarray[2]
    item4.querySelector("#button4").textContent = decodedarray[3]
    
    const p = document.getElementById("p")
  itemss.style.textAlign = "center";
  p.style.paddingTop = "0%";
  p.style.marginTop = "-5px";
  p.style.fontSize = "25px";
  console.log("\n");
   
    itemss.textContent= q
   for (let i = 1; i <= 4; i++) {
  const btn = document.getElementById(`button${i}`);
  btn.style.backgroundColor = "";     // reset color
  btn.disabled = false;               // re-enable if you disabled before
}
}catch(err){
    alert(`something went off ${err}`)
    
} 

    
    
}
 function correctanswer(selected) {
  const buttons = document.querySelectorAll(".items button");

  buttons.forEach((btn) => {
    if (btn.textContent === questions.correct_answer) {
      btn.style.backgroundColor = "green"; // ✅ correct one
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "red"; // ❌ wrong selected
    } else {
      btn.style.backgroundColor = "white"; // reset others
    }
  });
}
window.onload = function() {
  quiz()
};