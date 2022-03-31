var btn = document.getElementById('start');
btn.addEventListener('click' , setUp);
if(localStorage.getItem('score') == null){
  var score = 0;
}else{
   var score = localStorage.getItem('score')
   score = parseInt(score)
}

function setUp(){
    var fmin = prompt('1st Number Minimum(Include dash for negative)');
    var fmax = prompt('1st Number Maximum(Include dash for negative)');
    var smin = prompt('2nd Number Minimum(Include dash for negative)');
    var smax = prompt('2nd Number Maximum(Include dash for negative)');
    var rep = prompt('Do you want these numbers the whole time or do you want to keep entering them?(y or n)')

    var f = chance.integer({min: parseInt(fmin), max: parseInt(fmax)});
    var s = chance.integer({min: parseInt(smin), max: parseInt(smax)});
    var op = chance.integer({min: 0, max: 3});
    var po;
    if(parseInt(op) === 0){
        op='+'
        po=parseInt('+')
    }else if(parseInt(op) === 1){
        op='-'
        po=parseInt('-')
    }else if(parseInt(op) === 2){
        op='x'
        po=parseInt('*')

    }else if(parseInt(op) === 3){
        op='/'
        po=parseInt('/')
    }
        if(rep === 'y'){
            btn.removeEventListener('click', setUp)
            btn.addEventListener('click', game)
            var nset = 1;
            game()
        }else if(rep === 'n'){
            game()
        }else{
            alert('invalid')
            game()
        
    }
    function game(){
        document.getElementById('start').innerText = 'Play Again'
        if(nset === 1){
            var op = chance.integer({min: 0, max: 3});
            if(parseInt(op) === 0){
                op='+'
                po=parseInt('+')
            }else if(parseInt(op) === 1){
                op='-'
                po=parseInt('-')
            }else if(parseInt(op) === 2){
                op='x'
                po=parseInt('*')
        
            }else if(parseInt(op) === 3){
                op='/'
                po=parseInt('/')
            }
        }
        Swal. fire({
        title: "Math",
        text: `${f}${op}${s}:`,
        input: 'text',
        showCancelButton: true,
        })
        .then((result) => {
            if(op==='+'){
            if (parseInt(result.value) === f+s) {
            score++
            localStorage.setItem('score', score)
            Swal.fire({
                title: "Correct",
                icon: 'success',
                text: `Your Score Is ${score}`
            });
        }else{
            score = score - 1;
            localStorage.setItem('score', score)
            Swal.fire({
                title:'Wrong',
                icon: 'error',
                text:`The Answer was ${f+s} and your score is ${score}`
            });

        }
    }else{
        if(op==='-'){
          if (parseInt(result.value) === f-s) {
              score++
              localStorage.setItem('score', score)

              Swal.fire({
                    title:"Correct",
                    icon: 'success',
                    text: `Your Score is ${score}`
                });

          }else{
              score = score - 1;

              localStorage.setItem('score', score)

            Swal.fire({
                title:'Wrong',
                icon: 'error',
                text:`The Answer was ${f-s} and your score is ${score}`

            })
            }
        }else{
            if(op==='x'){

                if (parseInt(result.value) === f*s){
                score++
                localStorage.setItem('score', score)
                    Swal.fire({
                        title:"Correct",
                        icon: 'success',
                        text: `Your Score is ${score}`
                    });

                }else{
                    score = score - 1;
                    localStorage.setItem('score', score)

                    Swal.fire({
                        title:'Wrong',
                        icon: 'error',
                        text:`The Answer was ${f*s} and your score is ${score}`

                    })
                }
            }else{
                if (op==='/'){
                    if (parseInt(result.value) === f/s){
                        score++
                        localStorage.setItem('score', score)

                        Swal.fire({
                            title:"Correct",
                            icon: 'success',
                            text: `Your Score is ${score}`
                        });
                    }else{
                        score = score - 1;
                        localStorage.setItem('score', score)

                        Swal.fire({
                            title:'Wrong',
                            icon: 'error',
                            text:`The Answer was ${f/s} and your score is ${score}`

                        })
                    }
                }
            }
        }
    }
})
}
}