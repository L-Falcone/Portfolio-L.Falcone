function sendMail() {
    var params = {
      email: document.getElementById("email").value,
      testo: document.getElementById("testo").value,
    };
  
    const serviceID = "service_bgtedk6";
    const templateID = "template_lssn2hd";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("email").value = "";
          document.getElementById("testo").value = "";
          console.log(res);
          alert("Il tuo messaggio è stato inviato!!")
  
      })
      .catch(err=>console.log(err));
  
  }