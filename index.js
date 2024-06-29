// Write your solution in this file!
const employee = {
  name: "Zakayo",
  streetAddress: "11th Street",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  const newObj = { ...obj };

  const deleted = delete newObj[key];

  return deleted;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];

  return obj;
}
