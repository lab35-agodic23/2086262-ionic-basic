let Monto = document.getElementById('Monto');
let Gasto = document.getElementById('Gasto');
let GastoArreglo=[];

function agregarArreglo(){
    let newgasto = `${Gasto.value} $ ${Monto.value}`;

    GastoArreglo.push(newgasto);
    console.log(GastoArreglo);

    Gasto.value="";
    Monto.Value="";
}