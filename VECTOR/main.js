let vector=[];
for(i=0;i<=9;i++){
    num=parseInt(Math.random()*10);
    vector[i]=num;
    document.write(vector[i]+" ");
}
let mayor=vector[0];
let menor=vector[0];
for(i=1;i<=9;i++){
    if(vector[i]>mayor){
        mayor=vector[i];
    }
    if(vector[i]<menor){
        menor=vector[i];
    }
}
document.writeln("numero mayor: "+mayor+" "+"numero menor: "+menor);