let array = []
const addtolocal = ()=>{
  let lenId = JSON.parse(localStorage.getItem("studentData"))
  let idlen = (lenId !== null)?lenId.length+1:1;
  let nam = document.getElementById("name").value;
  let datavalu = document.getElementById("datavalu").value;
  if (datavalu != "") {
   let update = lenId.map((i)=>{
    if (i.id ==datavalu) {
      i.Name = nam;
    }
    return i ;
   })
   array = update
  }else{
    let obj = {
      id:idlen,
      Name:nam,
    }
    array.push(obj);
  }
  localStorage.setItem("studentData",JSON.stringify(array))
  document.getElementById("name").value  = ""
  document.getElementById("datavalu").value = ""
  document.form1.reset()
  display_data()
}
const display_data = ()=>{
  let tr = ""

  let lenId = JSON.parse(localStorage.getItem("studentData"))
 if (lenId != null) {
  lenId.map((e)=>{
    tr +=    `
        <tr>
          <td>${e.id}</td>
          <td>${e.Name}</td>
          <td><button onclick="edit(${e.id})">Edit</button>  <button onclick="delet(${e.id})">Delet</button></td>
        </tr>
        `
})
 }
  document.getElementById("adddata").innerHTML = tr;
} 
// Delet one data from list with fixing id
const delet = (id)=>{
  let lenId = JSON.parse(localStorage.getItem("studentData"));
  let newData=lenId.filter((s)=>{
    return s.id != id;
  });
  localStorage.setItem("studentData",JSON.stringify(newData));
  display_data();
  let t=1;
  let areng = newData.map((s)=>{
    s.id = t++;
    return s;
  })
  localStorage.setItem("studentData",JSON.stringify(areng));
  display_data();
}
// Edit data
const edit = (id)=>{
  let lenId = JSON.parse(localStorage.getItem("studentData"));
  let newData=lenId.find((s)=>{
    return s.id == id;
  });
  document.getElementById("datavalu").value = id
  document.getElementById("name").value = newData.Name;
}
display_data();