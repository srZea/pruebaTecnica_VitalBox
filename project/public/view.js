
//en este archivo se hace una conexión a la base de datos con el metodo GET y la API REST
fetch("http://localhost:4000/data")
    .then(data => (data.json()))
    .then(data => {
        const bodyTable = document.querySelector("#dataResp")
        data.map((element) => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${element.name}</td>
                <td>${element.last_name}</td>
                <td>${element.document_type}</td>
                <td>${element.document_number}</td>
                <td>${element.birthdate}</td>
                <td>${element.age}</td>
                <td>${element.size}</td>
                <td>${element.weight}</td>
                <td>${element.imc}</td>
                `

            bodyTable.appendChild(row);

        })
    })
  