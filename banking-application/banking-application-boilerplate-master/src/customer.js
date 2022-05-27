var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      let customer = customerList.find((cust) => cust.CustomerId === CustomerId);

  if (!customer) {
    customerList.push({
      CustomerId,
      CustomerName,
      CustomerAge,
      CustomerAddress,
      CustomerContactNumber,
      Category,
    });
  }
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      let customer = customerList.find((cust) => cust.CustomerId === CustomerId);

      if (customer) {
        customer.CustomerName = CustomerName;
        customer.CustomerAge = CustomerAge;
        customer.CustomerAddress = CustomerAddress;
        customer.CustomerContactNumber = CustomerContactNumber;
        customer.Category = Category;
      } else {
        customerList.push({
          CustomerId,
          CustomerName,
          CustomerAge,
          CustomerAddress,
          CustomerContactNumber,
          Category,
        });
      }
}

const getAllCustomers = function getAllCustomers() {return customerList};


module.exports={addCustomer,updateCustomer,getAllCustomers}