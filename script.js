//obtendo dados
const submit = document.querySelector(".button");
const day = document.querySelector("#dia");
const month = document.querySelector("#mes");
const year = document.querySelector("#ano");
const errorDay = document.querySelector("#errorDay")
const errorMonth = document.querySelector("#errorMonth")
const errorYear = document.querySelector("#errorYear")
const line_1 = document.querySelector(".years")
const line_2 = document.querySelector(".years_2")
const line_3 = document.querySelector(".years_3")
const dayLabel = document.querySelector("#day");
const monthLabel = document.querySelector("#month");
const yearLabel = document.querySelector("#year");


//funções
const data = () =>{
    const dia = parseInt(day.value);
    const mes = parseInt(month.value);
    const ano = parseInt(year.value);
    
    const date = new Date();

    const diaAtual = date.getDate();
    const mesAtual = date.getMonth()+1 ;
    const anoAtual = date.getFullYear();

    let idadeAno = anoAtual - ano;
    let idadeMes = ((mesAtual-1) - mes);
    let idadeDia = diaAtual - dia;

    if(mesAtual < mes || mesAtual === mes && diaAtual < dia){
        idadeAno--;
        idadeMes+=12;
    }else{
        idadeAno = anoAtual - ano;
    }

    validate();
    if(dia>0 && mes<=12 && ano<=anoAtual){
      replace(idadeAno, line_1);
      replace(idadeMes, line_2);
      replace(idadeDia, line_3);
    }else{
      alert('valor invalido');
    }
    
}
const validate = () => {
    
    const dayRegex = /^(0?[1-9]|[12][0-9]|3[01])$/;
    const mesRegex = /^(0?[1-9]|1[0-2])$/;
    const anoRegex = /^\d{4}$/;
    
    if (dayRegex.test(day.value) && mesRegex.test(month.value) && anoRegex.test(year.value)) {
        day.style.borderColor="";
      } else {
        day.style.borderColor="#ff5757";
        errorDay.innerHTML = "Must be valid day"
        month.style.borderColor="#ff5757";
        errorMonth.innerHTML = "Must be valid month"
        year.style.borderColor="#ff5757";
        errorYear.innerHTML = "Must be in the past"
        dayLabel.style.color="#ff5757";
        monthLabel.style.color="#ff5757";
        yearLabel.style.color="#ff5757";
          
      }
}
const replace = (age,select) =>{

  if(!isNaN(age)){

    const div = document.createElement("div");
    const text = document.createTextNode(age);
    div.classList = "contain";
    const pai = select.parentNode;
    
    div.appendChild(text);
    pai.replaceChild(div, select);
    
    console.log(div);
  }else{
    console.log('numero invalido');
  }
}
//eventos
submit.addEventListener("click", data);