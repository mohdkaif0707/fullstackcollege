function sum(a,b){

    return a+b;
}

function sumwithmse(clbk,msg){ 
    const result = clbk(20,30); // a=20,b=30
    const fresult = "hii " + msg + " your score is " + result;

    console.log(fresult);

}

sumwithmse(sum,"abbas");