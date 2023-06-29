(function() {
  emailjs.init('oK85VoKDTZDAS1Xa3');
})();


function sendMail() {
    var params = {
      email: document.getElementById("email").value,
      testo: document.getElementById("testo").value,
    };
  
    const serviceID = "service_bgtedk6";
    const templateID = "template_lssn2hd";

    
  if(params.email && params.testo){
    emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("email").value = "";
          document.getElementById("testo").value = "";
          console.log(res);
          alert("Il tuo messaggio è stato inviato!!")
  
      })
    } else {
    alert("Inserire i campi obbligatori!!")
    }
  }
