// Sample data rows
const dataRows = [
    {
      number: "INV001",
      name:"Manno",
      order:"Daal Chawal",
      charges: "Rs.1200.00"
    },
    {
      number: "RCPT001",
      name:"Riya",
      order:"Roti Sabji",
      charges: "Rs.1500.00"
    },
  {
    number: "RWPT001",
    name:"Khushi",
    order:"Combo", 
    charges: "Rs.1750.00"
  }
    // Add more data rows here...
  ];

  // Get the table body element
  const tableBody = document.querySelector("#tbOrderHistory tbody");

  // Loop through the data rows and create table row elements
  dataRows.forEach(rowData => {
    const row = document.createElement("tr");



    const numberCell = document.createElement("td");
    numberCell.textContent = rowData.number;
    row.appendChild(numberCell);

    const createdCell = document.createElement("td");
    createdCell.textContent = rowData.name;
    row.appendChild(createdCell);

    const expirationCell = document.createElement("td");
    expirationCell.textContent = rowData.order;
    row.appendChild(expirationCell);


    const customerCell = document.createElement("td");
    customerCell.textContent = rowData.charges;
    row.appendChild(customerCell);    

    tableBody.appendChild(row);
});