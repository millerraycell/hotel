module.exports = app => {
    function existsOrError(value, msg){
        if(!value) throw msg;
        if(Array.isArray(value) && value.length === 0) throw msg;
        if(typeof value === 'string' && !value.trim()) throw msg; 
    };
    
    function notExistsOrError(value, msg){
        try{
            existsOrError(value,msg)
        }catch(msg){
            return
        }
        throw msg
    };
    
    function equalsOrError(valueA, valueB, msg){
        if(valueA !== valueB) throw msg;
    };
    
    function validaCPF(strCPF) {
        let Soma;
        let Resto;
        Soma = 0;
        
        if (strCPF == "00000000000") return false;
         
        for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
       
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
       
        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
       
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    };

    return {existsOrError, notExistsOrError, equalsOrError, validaCPF}

}