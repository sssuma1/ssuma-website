// language field

function addNewLANGField() {
  let newNode = document.createElement("div");
  newNode.classList.add("input-group", "mt-2");

  let inputNode = document.createElement("input");
  inputNode.classList.add( "langField"); 
  inputNode.setAttribute("placeholder", "Enter language");
  newNode.appendChild(inputNode);

  let buttonNode = document.createElement("button");
  buttonNode.classList.add("btn", "deleteBtn");
  buttonNode.textContent = "❌";
  newNode.appendChild(buttonNode);

  return newNode;
}


  
  // skill field
  function addNewSkillField() {
    let newNode = document.createElement("div");
    newNode.classList.add("input-group", "mt-2");
  
    let inputNode = document.createElement("input");
    inputNode.classList.add("skillField");
    inputNode.setAttribute("placeholder", "Enter skill");
    newNode.appendChild(inputNode);
  
    let selectNode = document.createElement("select");
    selectNode.classList.add( "proficiencyField");
    let proficiencyOptions = ["Beginner", "Intermediate", "Advanced"];
    proficiencyOptions.forEach(function(proficiency) {
      let optionNode = document.createElement("option");
      optionNode.setAttribute("value", proficiency);
      optionNode.textContent = proficiency;
      selectNode.appendChild(optionNode);
    });
    newNode.appendChild(selectNode);
  
    let buttonNode = document.createElement("button");
    buttonNode.classList.add("btn", "btn-danger", "deleteBtn");
    buttonNode.textContent = "Delete";
    newNode.appendChild(buttonNode);
  
    return newNode;
  }
  
  // Add new work experience field
  function addNewWorkExpField() {
    let newNode = document.createElement("div");
    newNode.classList.add("work-exp", "mt-2");
  
    let inputNode1 = document.createElement("input");
    inputNode1.classList.add("companyField");
    inputNode1.setAttribute("placeholder", "Company");
    newNode.appendChild(inputNode1);
  
    let inputNode2 = document.createElement("input");
    inputNode2.classList.add("positionField");
    inputNode2.setAttribute("placeholder", "Position");
    newNode.appendChild(inputNode2);

    let inputNode3 = document.createElement("input");
    inputNode3.classList.add("startField");
    inputNode3.setAttribute("type", "date");
    inputNode3.setAttribute("placeholder", "Start Date");
    newNode.appendChild(inputNode3);
    
    let inputNode4 = document.createElement("input");
    inputNode4.classList.add("endField");
    inputNode4.setAttribute("type", "date");
    inputNode4.setAttribute("placeholder", "End Date");
    newNode.appendChild(inputNode4);
    
    
    let textareaNode = document.createElement("textarea");
    textareaNode.classList.add("rolesField");
    textareaNode.setAttribute("placeholder", "Roles and Responsibilities");
    newNode.appendChild(document.createElement('br'));
    newNode.appendChild(textareaNode);
   
  
    let buttonNode = document.createElement("button");
    buttonNode.classList.add("btn", "btn-danger", "deleteBtn");
    buttonNode.textContent = "Delete";
    newNode.appendChild(buttonNode);
  
    return newNode;
  }


  
  // Add event listeners for adding and deleting fields
  document.getElementById("addLangBtn").addEventListener("click", function() {
    let langContainer = document.getElementById("langContainer");
    langContainer.appendChild(addNewLANGField());
  });
  
  document.getElementById("addSkillBtn").addEventListener("click", function() {
    let skillsContainer = document.getElementById("skillsContainer");
    skillsContainer.appendChild(addNewSkillField());
  });
  
  document.getElementById("addWorkExpBtn").addEventListener("click", function() {
    let workExpContainer = document.getElementById("workExpContainer");
    workExpContainer.appendChild(addNewWorkExpField());
  });
  
  document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();





//  career objective
  let candidateInfo2 = document.getElementById("career");
  let careerObjField = document.getElementById("careerObjField").value;
  candidateInfo2.innerHTML += careerObjField;


// Languages
    let langFields = document.querySelectorAll(".langField");
    let langList = document.getElementById("langList");
    langList.innerHTML = "";
    langFields.forEach(function(field) {
      if (field.value !== "") {
        let langItem = document.createElement("p");
        langItem.textContent = field.value;
        langList.appendChild(langItem);
      }
    });
 



  // Skills
    let skillFields = document.querySelectorAll(".skillField");
    let proficiencyFields = document.querySelectorAll(".proficiencyField");
    let skillsList = document.getElementById("skillsList");
    skillsList.innerHTML = "";
    for (let i = 0; i < skillFields.length; i++) {
      if (skillFields[i].value !== "" && proficiencyFields[i].value !== "") {
        let skillItem = document.createElement("p");
        skillItem.textContent = skillFields[i].value + " - " + proficiencyFields[i].value;
        skillsList.appendChild(skillItem);
      }
    }


  // Work Exp
    let workExpItems = document.querySelectorAll(".work-exp");
    let workExpList = document.getElementById("workExpList");
    workExpList.innerHTML = "";
    workExpItems.forEach(function(item) {
      let company = item.querySelector("input:nth-child(1)").value;
      let position = item.querySelector("input:nth-child(2)").value;
      // let duration = item.querySelector("input:nth-child(3)").value;

      let startDate = item.querySelector("input:nth-child(3)").value;
      let endDate = item.querySelector("input:nth-child(4)").value;

      let responsibilities = item.querySelector("textarea").value;
  
      // if (company !== "" && position !== "" && duration !== "" && responsibilities !== "") {
      if (company !== "" && position !== "" && startDate !== ""  && endDate !== "" && responsibilities !== "") {


        let workExpItem = document.createElement("div");
        workExpItem.classList.add("work-exp-item");
  
        let companyNode = document.createElement("h4");
        companyNode.textContent = "🏢"+ company;
        workExpItem.appendChild(companyNode);
  
        // let positionNode = document.createElement("p");
        // // positionNode.textContent = position + " | " + duration;
        // // positionNode.textContent = position ;
        // workExpItem.appendChild(positionNode);


        let startEnd = document.createElement("p");
        startEnd.textContent = "👩‍💻  "+position+  "  │     🗓️ " + startDate + " - " + endDate;
        workExpItem.appendChild(startEnd);

        let responsibilitiesNode = document.createElement("p");
        responsibilitiesNode.textContent = responsibilities;
        workExpItem.appendChild(responsibilitiesNode);
  
        workExpList.appendChild(workExpItem);
      }
    });
  
    let candidateInfo = document.getElementById("candidateInfo");
    candidateInfo.innerHTML = "";
    candidateInfo.innerHTML += "<p>" + document.getElementById("imgField").value + "</p>";
    candidateInfo.innerHTML += "<h2>" + document.getElementById("nameField").value + "</h2>";
    candidateInfo.innerHTML += "<p><strong>  📞 - &nbsp  </strong>" + document.getElementById("contactField").value + "</p>";
    candidateInfo.innerHTML += "<p> <strong> ✉️- &nbsp </strong>"  +"<a href='#'> "+ document.getElementById("emailField").value + "</a>"+" </p>";

//code for setting image

      let fileInput = document.getElementById("imgField");
      let file = fileInput.files[0];
      console.log(file);

      let reader = new FileReader();

      reader.onload = function (event) {
        document.getElementById("imgTemplate").src = event.target.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }



// profile Summ
    var profileSummary = document.getElementById("summaryField").value;

    candidateInfo.innerHTML += `
      <div class="card mt-2">
        <div class="card-header background">
          <h4>Profile Summary</h4>
        </div>
        <div class="card-body">
          <p>${profileSummary}</p>
        </div>
      </div>
    `;

    candidateInfo.innerHTML += "<p class='mt-4'> <strong> LinkedIn - &nbsp  </strong>" +"<a href='#'> " + document.getElementById("linkedField").value + "</a>" + "</p>";
    candidateInfo.innerHTML += "<p> <strong> DOB -&nbsp  </strong>"  + document.getElementById("dobField").value + "</p>";
    candidateInfo.innerHTML += "<p> <strong> 🛂 Passport No - &nbsp  </strong>"  + document.getElementById("passportField").value + "</p>";


// adddress
    var address = document.getElementById("addressField").value;

    candidateInfo.innerHTML += `
      <div class="card mt-4">
        <div class="card-header background">
          <h4>Address</h4>
        </div>
        <div class="card-body">
          <p>${address}</p>
        </div>
      </div>
    `;


    let resumeTemplate = document.getElementById("resumeTemplate");
    resumeTemplate.classList.remove("hidden");

  });
  
  // Delete field
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteBtn")) {
      event.target.parentNode.remove();
    }
  });






// send mail
// document.getElementById('emailButton').addEventListener('click', function() {
//   var emailId = 's.s.suma.15@gmail.com'; 
//   var subject = 'Hello, I am interested in this Job'; 
  
//   var mailtoUrl = 'mailto:' + emailId + '?subject=' + encodeURIComponent(subject);
//   window.location.href = mailtoUrl;
// });

// function saveResume() {
//   // Save resume as PDF
//   var element = document.getElementById('resumeTemplate');
//   var filename = 'resume.pdf';

//   html2pdf()
//     .set({
//       margin: 15,
//       filename: filename,
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { dpi: 192, letterRendering: true },
//       jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
//     })
//     .from(element)
//     .save();

//   // Send email
//   sendEmail();
// }

function saveResume() {
  // Save resume as PDF
  var element = document.getElementById('resumeTemplate');

  html2pdf()
    .set({
      margin: [15, 15],
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    })
    .from(element)
    .outputPdf('datauristring')
    .then(function (pdfString) {
      var blob = dataURItoBlob(pdfString);
      var filename = 'Resume.pdf';
      saveAs(blob, filename); // Use FileSaver.js to save the PDF with custom filename
    })
    .catch(function (error) {
      console.error('Error saving resume as PDF:', error);
    });

  // Send email
  sendEmail();
}

function dataURItoBlob(dataURI) {
  var byteString = atob(dataURI.split(',')[1]);
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
}



function sendEmail() {
  // Define email details
  var emailId = 's.s.suma.15@gmail.com';
  var subject = 'Hello, I am interested in this Job';
  var body = 'Please find attached my resume for your review.';

  // Compose the mailto URL with attachment
  var attachmentUrl = 'http://example.com/path/to/resume.pdf'; // Replace with the actual URL of the attachment
  var mailtoUrl = 'mailto:' + emailId + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body) + '&attachment=' + encodeURIComponent(attachmentUrl);

  // Open the mailto URL
  window.open(mailtoUrl);
}


