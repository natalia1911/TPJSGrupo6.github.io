function valorEntrada(){
    let nombre=document.getElementById('nombre').value;
    let apellido=document.getElementById('apellido').value;
    let correo=document.getElementById('correo').value;
    let categoria = document.getElementById('categoria').value;
    let cantEntradas = document.getElementById('cantidad').value;
    console.log(categoria  + cantEntradas);
    const valEntrada=200;
    let precio = valEntrada * parseInt(cantEntradas)
    let pagoFinal=0;

    if (nombre==='') {
        alert('el campo Nombre debe Estar completo')
    }else{
        if(apellido===''){
            alert('el campo Apellido debe estar completo')
        }else{
            if(correo===''){
                alert('el campo correo debe estar completo')
            }else{
                if (categoria==='1'){
                    pagoFinal= precio * 0.20;
                }
                else{
                    if (categoria==='2') {
                        pagoFinal= precio * 0.50;
                    }
                    else{
                        pagoFinal= precio * 0.85;
                    }
                }
        
                document.getElementById('resultado').value= 'Total a pagar: $'+ pagoFinal.toString();
            }
        }
    }
}

function limpiar(){
    document.getElementById('categoria').value='1';
    document.getElementById('cantidad').value=1;
    document.getElementById('resultado').value= 'Total a pagar: $';
    document.getElementById('nombre').value='';
    document.getElementById('apellido').value='';
    document.getElementById('correo').value='';
}