
document.querySelector('form').addEventListener('submit',postData)

async function postData(e){
  e.preventDefault();
  let name=document.getElementById('name').value
  let email=document.getElementById('email').value
  let destination=document.getElementById('destination').value
  let noOfTravellers=document.getElementById('ofOfTravellers').value
  let budget=document.getElementById('budget').value
  
  let form={name,destination,noOfTravellers,email,budget};
  let res=await fetch('https://repulsive-pea-coat-eel.cyclic.app/api/post',{
    method:'POST',
    body:JSON.stringify(form),
    headers:{
        'Content-Type':"application/json"
    }
  })
  let data=await res.json();
  alert(data.msg)
  document.getElementById('name').value=''
  document.getElementById('email').value=''
  document.getElementById('destination').value=''
  document.getElementById('ofOfTravellers').value=''
  document.getElementById('budget').value=''
}