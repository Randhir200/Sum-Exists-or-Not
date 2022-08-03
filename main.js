function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let k = +input[2];
    let newArr = []
    let flag = false;
    subset(newArr)
    flag?console.log('yes'):console.log('no')
    function subset(newArr, index=0){
        if(newArr.length!==0){
            let sum = 0;
            for(let i=0;i<newArr.length;i++){
                sum += newArr[i];
            }
            if(sum===k){
                flag = true;
            }
        }
        
        if(index === n){
            return
        }
        for(let i=index;i<n;i++){
            newArr.push(arr[i]);
            subset(newArr,i+1);
            newArr.pop()
        }
    }
 }
 if (process.env.USER === "") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }
 
 