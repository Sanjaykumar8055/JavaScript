let tr= "<option>---select student----</option>"
const addData =()=>{
    let localdata = JSON.parse(localStorage.getItem("studentData"));
    localdata.map((i)=>{
     tr += `<option  value="${i.id}">${i.Name}</option>`
    })
    document.getElementById("studata").innerHTML = tr
}
addData()

let arr = []
const addtolocal = ()=>{
    let localdata = JSON.parse(localStorage.getItem("studentResult"));
    let len = (localdata != null) ? localdata.length+1 : 1;
    let age = document.getElementById("age").value;
    let clas= document.getElementById("class").value;
    let mark = document.getElementById("mark").value;
    let gred = document.getElementById("gred").value;
    let result = document.getElementById("result").value;
    let hidevalue =document.getElementById("hide").value;
    let selectName = document.getElementById('studata').value; 
    let img = localStorage.getItem('studentImg')
    if (hidevalue!= "") {
     let editData =  localdata.map((i)=>{
            if (i.id==hidevalue) {
                i.name= selectName
                i.img= (img!=null) ? img : i.img;
                i.age =age;
                i.clss= clas;
                i.mark = mark;
                i.gred = gred;
                i.result=result;
            }
            return i;
        })
        arr = editData;
    }else{
        let obj = {
            id : len,
            name:selectName,
            img:img,
            age: age,
            clss:clas,
            mark:mark,
            gred:gred,
            result:result,
        }
        arr.push(obj)
    }
    localStorage.setItem("studentResult",JSON.stringify(arr))
    document.getElementById("age").value =""
    document.getElementById("class").value =""
    document.getElementById("mark").value =""
    document.getElementById("gred").value =""
    document.getElementById("result").value =""
    document.getElementById('studata').value=""
    document.getElementById("showimg").src=""

    localStorage.removeItem('studentImg')
    dispData()
}

const dispData = ()=>{
    let localdata = JSON.parse(localStorage.getItem("studentResult"))
    let lenId = JSON.parse(localStorage.getItem("studentData"));
     let pr = ""
    localdata.map((t)=>{
        lenId.map((j)=>{
         if (t.name==j.id) {
            t.sname=j.Name
         }
        })
    })
   
    localdata.map((t)=>{
        pr+=`<tr>
        <td>${t.id}</td>
        <td>${t.sname}</td>
        <td><img src="${t.img}" id="dispImg" height="50px"></td>
        <td>${t.age}</td>
        <td>${t.clss}</td>
        <td>${t.mark}</td>
        <td>${t.gred}</td>
        <td>${t.result}</td>
        <td><button onclick="remove(${t.id})">Remov</button> <button onclick="edit(${t.id})">edit</button></td>
        </tr>
        `
    })
    document.getElementById("adddata").innerHTML = pr
}
dispData()
const remove = (id)=>{
    let localdata = JSON.parse(localStorage.getItem("studentResult"))
   let newData = localdata.filter((i)=>{
      return i.id !=id
    })
    localStorage.setItem("studentResult",JSON.stringify(newData))
    dispData()
    let t = 1
    let arengId = newData.map((i)=>{
        i.id = t++
        return i;
    })
    localStorage.setItem("studentResult",JSON.stringify(arengId))
    dispData()
}

const edit = (id)=>{
    let localdata = JSON.parse(localStorage.getItem("studentResult"))
  let editData =  localdata.find((i)=>{
       return i.id ==id
    })
    document.getElementById("hide").value = id; 
    document.getElementById("age").value = editData.age;
    document.getElementById("class").value = editData.clss;
    document.getElementById("mark").value = editData.mark;
    document.getElementById("gred").value = editData.gred;
    document.getElementById("result").value=editData.result;
    document.getElementById('studata').value=editData.name
    document.getElementById("showimg").src= editData.img;
}


const saveimg =(event)=>{
    var reader = new FileReader();
    reader.onload= ()=>{
        var output = document.getElementById('showimg');
        output.src = reader.result;
        localStorage.setItem('studentImg',reader.result)
    }
    reader.readAsDataURL(event.target.files[0]);
}
dispData()