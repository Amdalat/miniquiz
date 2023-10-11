let sol = new Array(6,5,7,8)
let ans = new Array()
let score = 0

function getselected(name) {
    let radiobtns = document.getElementsByName(name);
    for (let i of radiobtns) {
        if (i.checked) {
            ans.push(i.value)
            return(i.value)
        }
    }
}
function check() {
    if (getselected('q1') == sol[0]) {
        score += 1
        right(0)
    } 
    else{
        wrong(0)
    }
    if (getselected('q2') == sol[1]) {
        score += 1
        right(1)
    } 
    else{
        wrong(1)
    }
    if (getselected('q3') == sol[2]) {
        score += 1
        right(2)
    } 
    else{
        wrong(2)
    }
    if (getselected('q4') == sol[3]) {
        score += 1
        right(3)
    } 
    else{
        wrong(3)
    }
}
function wrong(num) {
    let obj = document.getElementsByClassName('ques')
    obj[num].style.color = 'red'
    let rans = document.getElementsByClassName('rans')
    rans[num].style.display = 'block'
}
function right(num) {
    let obj = document.getElementsByClassName('ques')
    obj[num].style.color = 'black'
    let rans = document.getElementsByClassName('rans')
    rans[num].style.display = 'none'
}

function submit() {
    check();
    alert(score + '/4');
    console.log(ans)
    console.log(score)
    score = 0
    ans = Array()
}
