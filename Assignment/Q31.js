let dat = new Date()
let day = ""
switch (dat.getDate()) {
    case 0:
        day = "sunday" 
        break;
     case 1:
        day = "monday"
        break;

    case 2:
        day="tuesday"
        break;

     case 3:
        day="wednesday"
        break;

    case 4:
        day= "thursday"
        break;

    default: 
        day = "saturday"
        break;
}
    let ans = `todat is:- ${day} ,current time is:- ${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}`
    document.write(ans);
