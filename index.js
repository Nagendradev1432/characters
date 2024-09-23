let rows=+prompt("enter nuber of rows :")
alpha=65,position=1
for(i=1;i<=rows;i++){
    res=""
    
    for(j=1;j<=i;j++){
        if(position%2==0){
        res=res+String.fromCharCode(alpha).toLowerCase()+" "
        }
        else{
            res=res+String.fromCharCode(alpha)+" "
        }
       alpha++
      position++
    }
    console.log(res)
}

OUTPUT:
A 
b C 
d E f 
G h I j 
K l M n O 



let rows=prompt("enter a number of rows :")
a=0,b=1
for(i=1;i<=rows;i++){
    res="",fib=0
    while(i!=fib){
        res=res+a+" "
        fib++
        c=a+b
        a=b
        b=c
    }
    console.log(res)
}

0 
1 1 
2 3 5 
8 13 21 34 
55 89 144 233 377 



let rows=prompt("enter number of rows :")
alpha=65
for(i=1;i<=rows;i++){
 res="",res1=""
 for(k=1;k<=rows-i;k++){
     res=res+"  "
 }
 for(j=1;j<=i;j++){
     res1=String.fromCharCode(alpha)+" "+res1
     alpha++
     
 }
 res=res+res1
//  console.log(res1)
 console.log(res)
 
}

A 
C B 
F E D 
J I H G 