let dy = new Date().getDay();
let day_name ="";
switch (dy) {
  case 0:
      day_name = "sunday"
      break;
  case 1:
      day_name = "monday"
      break;
  case 2:
      day_name = "tuesday"
      break;
  case 3:
      day_name = "wednesday"
      break;
  case 4:
      day_name = "thursday"
      break;    
  case 5:
      day_name = "friday"
      break;      
  default:"saturday"
      break;
}
 document.write("today is ="+day_name +'<br>');