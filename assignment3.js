s = "my mom will meet my madam at noon "
  s1 = ""
  s2 = ""
  for(k of s){
  
    if(k != " "){
      s1 = s1 + k 
      s2 = k + s2
    }
    else{
      if(s1 == s2){
        console.log(s1)
      }
    s1 = ""
    s2 = ""
    }
  }
