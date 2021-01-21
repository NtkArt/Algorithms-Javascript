function factorial (n) {
  let i=0;
  if(n <= 1){
    return n;
  }else{
    i++;
    factorial(n*(n-i))
  }
}



console.log(factorial(3))
