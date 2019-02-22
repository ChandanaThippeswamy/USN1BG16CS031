var b1,b2,b3,tbill=[];
b1=124;
b2=48;
b3=268;

function tipcalc(B){
    if(B<50)
    {
        tbill=((20/100)*B)+B;
        return tbill;
    }
    else if(B>50 && B<200){
        tbill=((15/100)*B)+B;
        return tbill;
    }
    else{
        tbill=((10/100)*B)+B;
        return tbill;
    }
}

//array
console.log(tipcalc(124));
console.log(tipcalc(48));
console.log(tipcalc(268));
tbill.push("128");
tbill.push("48");
tbill.push("268");
console.log(tbill);
   