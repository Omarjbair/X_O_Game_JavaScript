let turn = 'x';
let win = [];
let result = document.getElementById('winne_word');

function game(id) {
       let value = document.getElementById(id);
       if (turn != '') {
              if (turn === 'x' && value.innerHTML === '') {
                     value.innerHTML = 'X';
                     value.style.color = '#F77431'
                     turn = 'o';
              } else if (turn === 'o' && value.innerHTML === '') {
                     value.innerHTML = 'O';
                     value.style.color = '#BED753'
                     turn = 'x';
              }
              winner();
       }
}

function who_win(number1, number2, number3) {
       result.innerHTML = `the winner is ${win[number1]}`;
       re_game();
}

function re_game() {
       turn = '';
       setInterval(function () {
              result.innerHTML += ' .'
       }, 1000)
       setTimeout(function () {
              location.reload()
       }, 3200)
}

function winner() {
       for (let i = 1; i < 10; i++) {
              win[i] = document.getElementById('div' + i).innerHTML
       }
       if (win[1] === win[2] && win[2] === win[3] && win[3] != '') {
              who_win(1, 2, 3);
       } else if (win[1] === win[4] && win[4] === win[7] && win[1] != '') {
              who_win(1, 4, 7);
       } else if (win[3] === win[6] && win[6] === win[9] && win[3] != '') {
              who_win(3, 6, 9);
       } else if (win[7] === win[8] && win[8] === win[9] && win[7] != '') {
              who_win(7, 8, 9);
       } else if (win[1] === win[5] && win[5] === win[9] && win[1] != '') {
              who_win(1, 5, 9);
       } else if (win[3] === win[5] && win[5] === win[7] && win[3] != '') {
              who_win(3, 5, 7);
       } else if (win[4] === win[5] && win[5] === win[6] && win[4] != '') {
              who_win(4, 5, 6);
       } else if (win[2] === win[5] && win[5] === win[8] && win[2] != '') {
              who_win(2, 5, 8);
       } else if (win[1] != '' && win[2] != '' && win[3] != '' && win[4] != '' && win[5] != '' && win[6] != '' && win[7] != '' && win[8] != '' && win[9] != '') {
              result.innerHTML = 'Its Draw'
              re_game()
       }
}