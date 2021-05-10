
Aa = new Promise(r=> {
    setTimeout(()=>{
        console.log("Aaaa")
    }, 2000)
    r("aa")
}).then(console.log)


Bb = new Promise(r=> {
    setTimeout(()=>{
        console.log("Bbbb")
    }, 500)
    r("bb")
})


Cc = new Promise(r=> {
    setTimeout(()=>{
        console.log("Cccccc")
    }, 2500)
    r("cc")
})


Dd = new Promise(r=> {
    setTimeout(()=>{
        console.log("Ddddddd")
    }, 1500)
    r("dd")
})



console.log("Ddddddd")
console.log("Ddddddd")
