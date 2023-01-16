for(let i = 1; i <=105; i++) {
    let message = "";
    if(i%3 === 0)(message = "fizz")
    if(i%5 === 0)(message += "buzz")
    if(i%7 === 0)(message += "bang")
    if(i%11 === 0)(message += "boom")

    if (message === "") {
        console.log(i);
    } else {
        console.log(message)
    }
}