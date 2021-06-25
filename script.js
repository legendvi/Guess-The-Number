/*console.log('Hi')

console.log(age1(1990))

function age1(birth) {
    return birth - 2000
}


age2 = function (birth) {
    return birth - 1990
}
dif = age2(1900)

console.log(dif)

age3 = function (birth, dif) {
    a = birth - 2037
    b = a - dif
    return 1000
}

dif1 = age3(1900, 200)
console.log(dif1)
*/


const sec_num = Math.trunc(Math.random() * 20) + 1
console.log(sec_num)
document.querySelector('.sec-num').textContent = '?'
score = 5
hscore = 0
T = 1
document.querySelector('.score').textContent = score
gus = document.querySelector('.start').textContent
s = document.querySelector('.number').value = ''




btn = document.querySelector('.btn')

btn.addEventListener('click', function () {
    a = (document.querySelector('.number').value)
    s = Number(a)
    console.log(s, typeof (s))
    console.log(String(0))

    if (s == sec_num || T == 0) {
        document.querySelector('.start').textContent = 'Hurray!! you won the Game :).click play again to play again'
        document.querySelector('body').style.backgroundImage = 'linear-gradient(green, rgb(115, 167, 115))';
        document.querySelector('.sec-num').textContent = sec_num
        T = 0
        if (score > hscore) {
            hscore = score
            document.querySelector('.hscore').textContent = hscore
        }
    }

    else if (String(a) == '') {
        gus = 'No Number Given'
        console.log(gus)
        document.querySelector('.start').textContent = 'No Number Entered'
    }
    else if (score == 0) {
        document.querySelector('.start').textContent = 'you lost the Game. Try Again🙂'
        document.querySelector('body').style.backgroundImage = 'linear-gradient(crimson,red)';
        document.querySelector('.sec-num').textContent = sec_num

    }

    else if (s < 1 || s > 20) {
        document.querySelector('.start').textContent = 'Number not in right Range🙂'

    }

    else if (s < 21 && s > sec_num) {
        document.querySelector('.start').textContent = 'Too High'
        score -= 1
        document.querySelector('.score').textContent = score
    }
    else if (s < sec_num && s > 0) {
        document.querySelector('.start').textContent = "Too Low"
        score -= 1
        document.querySelector('.score').textContent = score
    }

}

)

document.querySelector('.play').addEventListener('click', function () {
    const sec_num = Math.trunc(Math.random() * 20) + 1
    console.log(sec_num)
    document.querySelector('.sec-num').textContent = '?'
    score = 5
    T = 1
    document.querySelector('.score').textContent = score
    gus = document.querySelector('.start').textContent

    document.querySelector('.start').textContent = 'Start Guessing...'
    s = document.querySelector('.number').value = ''
    document.querySelector('body').style.backgroundImage = 'linear-gradient(rgb(22, 157, 219), rgb(25, 34, 165))';
})
