const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};




//Takes in 3 arguments: a employee Object, a key, and a value
//Should not mutate the employee, it should return a new Object
//that has an updated value for the key passed in
function updateEmployeeWithKeyAndValue(employee, key, value){
      return Object.assign({}, employee, { [key]: value});
}
//same as previous but should mutate the employee Object passed in
function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value){
    obj[key] = value; 
    return obj;
};
//should take in a employee Object, and a key
//should delete the property w/ that 
//from the employee Object
//Should not mutate original employee Object. Should return a 
//a new Object that doesn't include the identified key-value pair
function deleteFromEmployeeByKey(obj, key, value){
    const newObj ={ ...obj};
    newObj [key] = value;
    return newObj;
};
//should work the same as previous but should mutate the employee object
function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    obj [key] = value;
    return obj;
}

