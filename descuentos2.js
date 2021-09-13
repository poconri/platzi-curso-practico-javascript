    const coupons = [
        {
            name: 'JuanDC_es_Batman',
            discount: 15,
        },
        {
            name: 'pero_no_le_digas_a_nadie',
            discount: 30,
        },
        {
            name: 'es_un_secreto',
            discount: 25,
        },
        {
            name: 'moncho',
            discount: 50,
        }
    ];

    function calcularPrecioConDescuento(precio, descuento) {
        const porcentajePrecioConDescuento = 100 - descuento;
        const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
        return precioConDescuento;
    }

    function onClickButtonPriceDiscount() {
        const inputPrice = document.getElementById("InputPrice").value;
        
        const inputDiscount = document.getElementById("InputDiscount").value;
        
        const descuento = coupons.find(Element => Element.name === inputDiscount);
    if(descuento === undefined){
    
    (alert("Este cupon no es valido."));
    }else {    
        const precioConDescuento = calcularPrecioConDescuento(inputPrice, descuento.discount);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
    }