var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.sayHello = function () {
        console.log("Hello" + name);
    };
    return Greeter;
}());
function sortByName(a) {
    var result = a.slice(0);
    result.sort(function (x, y) {
        return x.fullName.localeCompare(y.fullName);
    });
    return result;
}
sortByName([{ fullName: "Joe", age: 42 }]);
