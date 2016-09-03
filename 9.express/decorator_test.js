function coffee() {
    console.log('喝咖啡');
}
function sweetCoffee() {
    coffee()
    console.log('给你一包糖');
}
function sweetMilkCoffee() {
    sweetCoffee()
    console.log('加奶');
}
sweetCoffee()