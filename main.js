    alert(`¡Bienvenid@ a Apple World!\n\nSomos el presente creando el futuro. Presiona aceptar para tener acceso a todo lo nuevo y lo que está por venir.`);
    
    const nombre = prompt("Ingrese su nombre.");
    
    if (nombre !== "") {
        alert(`Hola ${nombre}, estamos felices de que estés aquí con nosotros.`);
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
    
    alert("Te invitamos a nuestra tienda para elegir lo último en tecnología.");
    
    let categoria = "";
    
    while (categoria !== "1" && categoria !== "2") {
        categoria = prompt("Ingrese '1' para ver los MacBook o '2' para ver los iPhones").toLowerCase();
    
        if (categoria === "1") {
            elegirMacBook();
        } else if (categoria === "2") {
            elegiriPhone();
        } else {
            alert("Por favor, ingrese una opción válida ('1' o '2').");
        }
    }
    
    for (let turno = 1; turno <= 5; turno++) {
        let nombreTurno = prompt("Vuelva a ingresar su nombre y se le asignará un turno.");
        alert(`${nombreTurno}, su turno es el N° ${turno}.`);
    }



    

    function elegirMacBook() {
        let macbookElegido = "";
    
        while (macbookElegido !== "macbookair" && macbookElegido !== "macbookpro" && macbookElegido !== "macbookpro16") {
            macbookElegido = prompt("Seleccione su MacBook: 'macbookair', 'macbookpro' o 'macbookpro16'").toLowerCase();
    
            if (macbookElegido === "macbookair") {
                alert("Ha elegido MacBook Air. Explore nuestras opciones disponibles.");
            } else if (macbookElegido === "macbookpro") {
                alert("Ha elegido MacBook Pro. Descubra nuestras variedades.");
            } else if (macbookElegido === "macbookpro16") {
                alert("Ha elegido MacBook Pro 16 pulgadas. Vea nuestras características destacadas.");
            } else {
                alert("Por favor, seleccione una opción válida ('macbookair', 'macbookpro' o 'macbookpro16').");
            }
        }
    }
    
    function elegiriPhone() {
        let iphoneElegido = "";
    
        while (iphoneElegido !== "iphone12" && iphoneElegido !== "iphone12pro" && iphoneElegido !== "iphone12promax") {
            iphoneElegido = prompt("Seleccione su iPhone: 'iphone12', 'iphone12pro' o 'iphone12promax'").toLowerCase();
    
            if (iphoneElegido === "iphone12") {
                alert("Ha elegido iPhone 12. Descubra sus características.");
            } else if (iphoneElegido === "iphone12pro") {
                alert("Ha elegido iPhone 12 Pro. Explore sus funciones avanzadas.");
            } else if (iphoneElegido === "iphone12promax") {
                alert("Ha elegido iPhone 12 Pro Max. Descubra su rendimiento excepcional.");
            } else {
                alert("Por favor, seleccione una opción válida ('iphone12', 'iphone12pro' o 'iphone12promax').");
            }
        }
    }