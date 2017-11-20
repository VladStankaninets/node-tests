module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

module.exports.setName = (userObject, fullName) => {
    var namesArray = fullName.split(' ');
    userObject.firstName = namesArray[0];
    userObject.lastName = namesArray[1];
    return userObject;
};
