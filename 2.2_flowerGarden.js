function flowerGardenComposer(flowerNames, separator) {
  // Write code here
  const colors = ["red", "yellow", "pink", "blue", "purple"];
  let result = "";
  for (i = 0 ; i<flowerNames.length; i++){
      result += colors[i] + " " + flowerNames[i] ;
      if(i < flowerNames.length-1){
          result += separator;
      }

  }
  console.log(result);
}


flowerGardenComposer(["rose", "tulip", "daisy"], ", ");