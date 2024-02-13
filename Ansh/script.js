window.onload = function(){
    
    displayFunctionTwo_Column2();
};

const iconsDIV = document.querySelector(".icons");
const jobInput = document.querySelector(".job");
const emailInput = document.querySelector(".Inputemail");
const phoneInput = document.querySelector(".Inputphone");
const cityInput = document.querySelector(".Inputcity");
const professionalSummaryInput = document.querySelector(".ProfessionalSummary");
const startdateInput = document.querySelector(".startdate");
const enddateInput = document.querySelector(".enddate");

const skillsInput = document.querySelector(".InputSkills");
const InputName = document.querySelector(".Inputname");
const twoColumnSelect = document.querySelector(".two-column");
const minimalistSelect = document.querySelector(".minimalist");
const Type = document.querySelector("#type");
const Main = document.querySelector("main");
const displayInfo = document.querySelector(".display-info");
const displayInfo2 = document.querySelector(".display-info2");
const colorDiv = document.querySelector(".color");
const inputColor = document.querySelector(".colortype");
const displayRight = document.querySelector(".display-left");
const displayLeft = document.querySelector(".display-right");
const minimalistMain = document.querySelector(".Minimalist-main");
const mailDIV = document.querySelector(".mailDiv");
const phoneDIV = document.querySelector(".phoneDiv");
const cityDIV = document.querySelector(".locationDiv");

const summaryDIV = document.querySelector(".summary");
const summaryDIV2 = document.querySelector(".summary2");


const  projectDiv = document.querySelector(".projectDIV");
const  educateDiv = document.querySelector(".educatediv");
const  addeducationDiv = document.querySelector(".addeducationdiv");


const skillsDIV = document.querySelector(".skills");
const textColor = document.querySelector(".textcolor");
const employmentBTN = document.querySelector(".employment");
const projectBTN = document.querySelector(".project");
const educationBTN = document.querySelector(".education");


const projectDIV = document.querySelector(".projectdiv");
const educationDIV = document.querySelector(".educationdiv");

const jobtitleInput = document.querySelector(".jobtitle");
const jobtitlePara = document.querySelector(".jobtitlepara");
const employerPara = document.querySelector(".employerpara");
const descriptionPara = document.querySelector(".descriptionpara");

const employerInput = document.querySelector(".employer");
const descriptionInput = document.querySelector(".description");


const projectStartDateInput  = document.querySelector("#startdate");
const projectEndDateInput  = document.querySelector("#enddate");

const addprojectsDIV = document.querySelector(".addprojectsdiv");
const projecttitlepara = document.querySelector(".projecttitlepara");
const projecttitledescpara = document.querySelector(".addprojectsdiv");
const projecttitleInput = document.querySelector(".projecttitle");
const projectdescriptionInput = document.querySelector(".projectdescription");
const projecttitledescPara = document.querySelector(".projecttitledescpara");


const  educationstartDATEINPUT= document.querySelector(".educationstartdate");
const  educationendDATEINPUT = document.querySelector(".educationenddate");
const  addeducationDIV = document.querySelector(".addeducationdiv");

const  qualificationPARA = document.querySelector(".qualificationpara");
const  schoolpara = document.querySelector(".schoolpara");
const  edudescparaPARA = document.querySelector(".edudescpara");

const  qualificationInput = document.querySelector(".qualification");
const  collegeInput = document.querySelector(".college");
const  edudescriptionInput = document.querySelector(".edudescription");

const headerTextColorInput = document.querySelector(".textcolortype");

const expDate = document.querySelector(".expdate");
const projectDate = document.querySelector(".projectdate");
const educatDate = document.querySelector(".educatdate");

const empContainer  = document.querySelector(".empcontainer");
const projectContainer  = document.querySelector(".projectcontainer");
const eduContainer  = document.querySelector(".educontainer");

const profExp = document.querySelector(".profexp");
const profExp2 = document.querySelector(".profexp2");
const projectDisp = document.querySelector(".projectdisp");
const projectDisp2 = document.querySelector(".projectdisp2");
const eduDisp = document.querySelector(".edudisp");
const eduDisp2 = document.querySelector(".edudisp2");

colorContainer = document.querySelector(".colorcontainer");
colorContainer2 = document.querySelector(".colorcontainer2");

 const mail2 = document.querySelector(".mail-2");
 const phone2 = document.querySelector(".phone-2");
 const location2 = document.querySelector(".location-2");



let expdata;
let expdata2;
let projectdata;
let projectdata2;
let edudat;
let edudat2;

let flag = false;
let flagMinimal = false;
Type.addEventListener("click", (e) => {
  let Value = e.target.value;
  

  if (Value == "Two Column" && flag == false) {  
   
    displayInfo2.style.display = "none";
    displayInfo.style.display = "block";

    displayFunctionTwo_Column2();
    

  } 
  
  else if(Value == "Minimalist"  && flagMinimal == false) {

    // console.log("hi");

    displayInfo.style.display = "none";
    displayInfo2.style.display = "block";

    displayFunctionMinimalist()

    
    
  }
});



function displayFunctionTwo_Column2(){

// console.log("hi");

    colorContainer.innerHTML = "";
    // console.log("hi")

    let colorDIV = document.createElement("div");
  
    let summaryDiv = document.createElement("div");



    colorDIV.setAttribute("class", "color");




    summaryDiv.innerHTML = `
    <p class="summarypara"></p>`

    colorDIV.innerHTML = `
    <p class="inputName"></p>
    <p class="jobClass"></p>
    `
    colorContainer.appendChild(colorDIV);


    let name = document.querySelector(".inputName");
    let job = document.querySelector(".jobClass");
    let Mail = document.querySelector(".mail");
    let Phone = document.querySelector(".phone");
    let City = document.querySelector(".location");
    let summary = document.querySelector(".summarypara");
    let skill = document.querySelector(".skillpara");

    inputColor.addEventListener("input", (e) => {
        let colorChange = e.target.value;
  
        colorDIV.style.backgroundColor = colorChange;
      });
  

    // colorDIV.style.backgroundColor ="red";
    InputName.addEventListener("input",(e)=>{
        name.innerHTML =e.target.value;
        // console.log("bye");
     });

     jobInput.addEventListener("input",(e)=>{
        job.innerHTML =e.target.value;
    });

    emailInput.addEventListener("input",(e)=>{
        Mail.innerHTML =e.target.value;
    
    });
    phoneInput.addEventListener("input",(e)=>{
        Phone.innerHTML =e.target.value;
    });
    cityInput.addEventListener("input",(e)=>{
        City.innerHTML =e.target.value;
    });

    professionalSummaryInput.addEventListener("input",(e)=>{
        summaryDIV.setAttribute("class","summaryDivClass");
        summary.innerHTML =e.target.value;
    });


    skillsInput.addEventListener("input",(e)=>{
        skill.innerHTML =e.target.value;
    });

    headerTextColorInput.addEventListener("input", (e) => {
        let colorChange = e.target.value;
  
        name.style.color = colorChange;
        job.style.color = colorChange;
  
      });

   
}
function displayFunctionMinimalist(){


    // colorContainer2.innerHTML = "";
    // console.log("bye");

    let colorDIV = document.createElement("div");
  
    let summaryDiv = document.createElement("div");



    colorDIV.setAttribute("class", "color");


    summaryDiv.innerHTML = `
    <p class="summarypara"></p>`

    colorDIV.innerHTML = `
    <p class="inputName2"></p>
    <p class="jobClass2"></p>
    `
    colorContainer2.appendChild(colorDIV);

    


    // let name = document.querySelector(".inputName");
    let inputName2 = document.querySelector(".inputName2");
    // let job = document.querySelector(".jobClass");
    let job2 = document.querySelector(".jobClass2");
    // let Mail = document.querySelector(".mail");
    // let Phone = document.querySelector(".phone");
    // let City = document.querySelector(".location");
    let summaryPara2 = document.querySelector(".summarypara2");
    let skillPara2 = document.querySelector(".skillpara2");

    inputColor.addEventListener("input", (e) => {
        let colorChange = e.target.value;
  
        colorContainer2.style.backgroundColor = colorChange;
      });
  

    // colorDIV.style.backgroundColor ="red";

    // console.log(colorDIV);

    InputName.addEventListener("input",(e)=>{
        inputName2.innerHTML =e.target.value;
     });

     jobInput.addEventListener("input",(e)=>{
        job2.innerHTML =e.target.value;
    });

    emailInput.addEventListener("input",(e)=>{
        mail2.innerHTML =e.target.value;
    
    });
    phoneInput.addEventListener("input",(e)=>{
        phone2.innerHTML =e.target.value;
    });
    cityInput.addEventListener("input",(e)=>{
        location2.innerHTML =e.target.value;
    });

    professionalSummaryInput.addEventListener("input",(e)=>{
        summaryDIV2.setAttribute("class","summaryDivClass");
        summaryPara2.innerHTML =e.target.value;
    });


    skillsInput.addEventListener("input",(e)=>{
        skillPara2.innerHTML =e.target.value;
    });

    headerTextColorInput.addEventListener("input", (e) => {
        let colorChange = e.target.value;
  
        inputName2.style.color = colorChange;
        job2.style.color = colorChange;
        phone2.style.color = colorChange;
        location2.style.color = colorChange;
        mail2.style.color = colorChange;
  
      });
   
}


let flagemp = false;

// let count  = 1001;

employmentBTN.addEventListener('click',(e)=>{

    

    let newDiv= document.createElement("div");

    newDiv.setAttribute("class","employ");

    // console.log("hi", empContainer);

newDiv.innerHTML = `  <label for="">Start</label>
<input type="date" value="" class="startdate" oninput="getStartdate(this)">
<label for="">End</label>
<input type="date" value="" class="enddate" oninput="getEnddate(this)">
<input type="text" name="" id="" class="jobtitle" placeholder="Job Title" oninput="jobtitle(this)">
<input type="text" name="" id="" class="employer" placeholder="Employer" oninput="employer(this)">
<input type="text" name="" id="" class="description" placeholder="Description" oninput="descp(this)">`
empContainer.appendChild(newDiv);

newDiv.setAttribute("class","employDivClass");

    e.preventDefault();

    let displayDiv = document.createElement('div');

    displayDiv.setAttribute("class","experience");
    // displayDiv.setAttribute("id", count);

    displayDiv.innerHTML = `
    <div class="expdate">

    </div>
    <p class="startdatepara"></p>
    <p class="enddatepara"></p>
    <p class="jobtitlepara"></p>
    <p class="employerpara"></p>
    <p class="descriptionpara"></p>
    `

    profExp.appendChild(displayDiv);

    expdata = displayDiv;

// ********************************************************************2
    let displayDiv2 = document.createElement('div');

    displayDiv2.setAttribute("class","experience");
    // displayDiv.setAttribute("id", count);

    displayDiv2.innerHTML = `
    <div class="profexp2">

    </div>
    <p class="startdatepara2"></p>
    <p class="enddatepara2"></p>
    <p class="jobtitlepara2"></p>
    <p class="employerpara2"></p>
    <p class="descriptionpara2"></p>
    `

    profExp2.appendChild(displayDiv2);

    expdata2 = displayDiv2;

});

projectBTN.addEventListener('click',(e)=>{
    let newDiv= document.createElement("div");

    newDiv.setAttribute("class","projectdiv");

newDiv.innerHTML = `  <label for="">Start</label>
<input type="date" value="" class="" id="startdate" oninput="projectgetStartdate(this)">
<label for="">End</label>
<input type="date" value="" class="" id="enddate"  oninput="projectgetEnddate(this)">
<input type="text" name="" id="" class="projecttitle" placeholder="Project Title" oninput="projecttitle(this)">
<input type="text" name="" id="" class="projectdescription" placeholder="Description" oninput="projectDesc(this)">`
projectContainer.appendChild(newDiv);

newDiv.setAttribute("class","employDivClass");

    e.preventDefault();

    let displayDiv = document.createElement('div');

    displayDiv.setAttribute("class","projectDIV");

    displayDiv.innerHTML = `
    <p class="projectstartdatepara"></p>
    <p class="projectenddatepara"></p>
    <p class="projectitle"></p>
    <p class="projecttitledescpara"></p>
    `

    projectDisp.appendChild(displayDiv);

    projectdata = displayDiv;


    // **********************************************************



    let displayDiv2 = document.createElement('div');

    displayDiv2.setAttribute("class","projectDIV");

    displayDiv2.innerHTML = `
    <p class="projectstartdatepara2"></p>
    <p class="projectenddatepara2"></p>
    <p class="projectitle2"></p>
    <p class="projecttitledescpara2"></p>
    `

    projectDisp2.appendChild(displayDiv2);

    projectdata2 = displayDiv2;
    
});

educationBTN.addEventListener('click',(e)=>{
    let newDiv= document.createElement("div");

    newDiv.setAttribute("class","educationdiv");


newDiv.innerHTML = `<label for="">Start</label>
<input type="date" value="" class="educationstartdate" oninput="edugetStartdate(this)">
<label for="">End</label>
<input type="date"  value="" class="educationenddate" oninput="edugetEnddate(this)">
<input type="text"   class="qualification" placeholder="Qualification" oninput="qualification(this)">
<input type="text"   class="college" placeholder="School/college" oninput="college(this)">
<input type="text"   class="edudescription" placeholder="Description" oninput="edudesc(this)">`
eduContainer.appendChild(newDiv);

newDiv.setAttribute("class","educationDIV");

    e.preventDefault();



    let displayDiv = document.createElement('div');

    displayDiv.setAttribute("class","educatediv");

    displayDiv.innerHTML = `
    <p class="edustartdatepara"></p>
    <p class="eduenddatepara"></p>
    <p class="eduqualification"></p>
    <p class="educollege"></p>
    <p class="edudesc"></p>
    `

    eduDisp.appendChild(displayDiv);

    

// educationDIV.setAttribute("class","employDivClass");


edudat = displayDiv;

// *******************************************************************


    let displayDiv2 = document.createElement('div');

    displayDiv2.setAttribute("class","educatediv");

    displayDiv2.innerHTML = `
    <p class="edustartdatepara2"></p>
    <p class="eduenddatepara2"></p>
    <p class="eduqualification2"></p>
    <p class="educollege2"></p>
    <p class="edudesc2"></p>
    `

    eduDisp2.appendChild(displayDiv2);

    

// educationDIV.setAttribute("class","employDivClass");


edudat2 = displayDiv2;
});

function getStartdate(e){

    
    
    expdata.childNodes[3].innerText = e.value;
    expdata2.childNodes[3].innerText = e.value;

    console.log(expdata.childNodes);

}
function projectgetStartdate(e){

    projectdata.childNodes[1].innerText = e.value;
    projectdata2.childNodes[1].innerText = e.value;

}


function edugetStartdate(e){

    edudat.childNodes[1].innerText = e.value;
    edudat2.childNodes[1].innerText = e.value;

}



function getEnddate(e){

    expdata.childNodes[5].innerText = e.value;
    expdata2.childNodes[5].innerText = e.value;

}
function projectgetEnddate(e){

    projectdata.childNodes[3].innerText = e.value; 
    projectdata2.childNodes[3].innerText = e.value; 

}


function edugetEnddate(e){

    edudat.childNodes[3].innerText = e.value;
    edudat2.childNodes[3].innerText = e.value;
 

}



function jobtitle(e){

    expdata.childNodes[7].innerText = e.value;
    expdata2.childNodes[7].innerText = e.value;

    // return e.value;
}
function employer(e){

    expdata.childNodes[9].innerText = e.value;
    expdata2.childNodes[9].innerText = e.value;

}
function descp(e){

    expdata.childNodes[11].innerText = e.value;
    expdata2.childNodes[11].innerText = e.value;

}
function projecttitle(e){

    projectdata.childNodes[5].innerText = e.value;
    projectdata2.childNodes[5].innerText = e.value;

}
function projectDesc(e){
   projectdata.childNodes[7].innerText = e.value;
   projectdata2.childNodes[7].innerText = e.value;

}



// *********
function qualification(e){

    edudat.childNodes[5].innerText = e.value;
    edudat2.childNodes[5].innerText = e.value;


}
function college(e){
    console.log(edudat.childNodes)

    edudat.childNodes[7].innerText = e.value;
    edudat2.childNodes[7].innerText = e.value;


}
function edudesc(e){

    edudat.childNodes[9].innerText = e.value;
    edudat2.childNodes[9].innerText = e.value;


}


// ***************************************

const printPdf = document.querySelector("#printbtn");

printPdf.addEventListener("click", ()=>{
    const element = document.querySelector('#pageDisplay');
    element.style.width="100%";
html2pdf(element, {
    margin: 10,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  });

});
