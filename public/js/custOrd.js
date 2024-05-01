// Sample data rows
const dataRows = [
    {
      number: "INV001",
      created: "2023-05-23",
      expiration: "2023-06-23",

      customer: "Ma ki Rasoi",
      total: "Rs.1700.00",
      status: "Previous"
    },
    {
      number: "RCPT001",
      created: "2023-07-20",
      expiration: "2023-09-20",

      customer: "Ghar ki rasaoi",
      total: "Rs.1600.00",
      status: "Previous"
    },
  {
    number: "RWPT001",
    created: "2023-11-01",
    expiration: "-",

    customer: "Tasty Grips",
    total: "Rs.1500.00",
    status: "Current"
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
    createdCell.textContent = rowData.created;
    row.appendChild(createdCell);

    const expirationCell = document.createElement("td");
    expirationCell.textContent = rowData.expiration;
    row.appendChild(expirationCell);


    const customerCell = document.createElement("td");
    customerCell.textContent = rowData.customer;
    row.appendChild(customerCell);

    const totalCell = document.createElement("td");
    totalCell.textContent = rowData.total;
    row.appendChild(totalCell);

    const statusCell = document.createElement("td");
    statusCell.textContent = rowData.status;
    row.appendChild(statusCell);

    tableBody.appendChild(row);
  });