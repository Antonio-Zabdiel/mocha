class validar{
    suma(a,b){
        return a+b;
    }

    validarCorreo(email){
        var em=/\S+@\S+\.\S+/;
        return em.test(email);
    }
}

module.exports = new validar();