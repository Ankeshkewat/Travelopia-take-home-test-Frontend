
window.onload = () => {
    getData()
}

async function getData() {
    try {
        let res = await fetch('https://repulsive-pea-coat-eel.cyclic.app/api/get')
        let data = await res.json();
        console.log(data)
        if (data.msg == 'successfull') {
            data.data.forEach((el) => {
                let div = document.createElement('div');
                div.className="card"

                let name = document.createElement('p')
                name.innerText ='Name : '+ el.name
                name.className = 'name'

                let des = document.createElement('p')
                des.innerText = "Destination : "+ el.destination;

                let email = document.createElement('p');
                email.innerText ="Email : "+ el.email;

                let noOfTravellers = document.createElement('p');
                noOfTravellers.innerText = 'No of travellers : '+el.noOfTravellers

                let budget = document.createElement('p');
                budget.innerText ="Price per person : " +el.budget +"$";

                let total = document.createElement('p')
                total.innerText ="Total : " +el.noOfTravellers * (+el.budget)+"$";
                
                div.append(name,email,des,noOfTravellers,budget,total);
                document.querySelector('main').append(div)
            })
        }
    }
    catch (err) {
        console.error(err)
    }
}