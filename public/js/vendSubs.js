// Sample data rows
const dataRows = [
    {
      number: "INV001",
      name:"Manno",
      charges: "Rs.1400.00"
    },
    {
      number: "RCPT001",
      name:"Riya",
      charges: "Rs.1450.00"
    },
  {
    number: "RWPT001",
    name:"Khushi", 
    charges: "Rs.1600.00"
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




    const customerCell = document.createElement("td");
    customerCell.textContent = rowData.charges;
    row.appendChild(customerCell);    

    tableBody.appendChild(row);
  });