function temParam(param){
    return process.argv.indexOf(param) != -1

    //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    //
}

if(temParam('--producao')){
    console.log('Atenção Total')
}else{
    console.log('tranquilo')
}