let dat = new Date()
let date = dat.getDate()
let month = dat.getMonth()
let year = dat.getFullYear()

let mm_dd_yy = `  ${month}-${date}-${year} ` + ","+` ${month}/${date}/${year}` +"<br>"
let dd_mm_yy = `  ${date}-${month}-${year} ` +" ," +` ${date}/${month}/${year}`
 document.write("mm_dd_yy = "+ mm_dd_yy + "<br>" +'dd_mm_yy = ' + dd_mm_yy);
