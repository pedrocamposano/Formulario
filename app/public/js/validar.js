function validar() {
    
    var resp = formulario.resp.value;
 
      if (resp == "") {
        alert('Preencha o campo');
          formulario.resp.focus();
          return false;
       }
    }