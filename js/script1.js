let number = Math.floor(Math.random() * 100) + 1  
console.log(number)


document.querySelector('check').onclick = function (){
    let usernum = document.getElementById('mynum').value;
    usernum = parseInt(usernum);
    let out = document.getElementById('out');
    if (usernum == number){
        out.innerHTML = 'Ура вы угадали!!!';

    }
}

