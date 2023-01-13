
function loguear ()
{
   
    let user= document.getElementById ("usuario").value
    let pass= document.getElementById ("clave").value
    if(user="Juan" && pass== "1234")
    {
        window.location="convertidor.html";
    }
    else
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        
    }

}


