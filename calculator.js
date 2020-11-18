
var buttons = document.getElementsByClassName('input-button');
var display = document.getElementById('display')
var operand1=0;
var operand2=null;
var operator=null;

    for(i=0; i<buttons.length;i++){
        buttons[i].addEventListener('click',function(){
            var value = this.getAttribute('data-value');
            if( value == '+'){
                if(display.innerText == ''){
                    display.innerText ='Please enter something to add';
                }
                else{
                operand1 = parseFloat(display.textContent);
                display.innerText = '';
                operator = '+';
                }
            }

            else if(value == '-'){
                if(display.innerText == ''){
                    display.innerText+= value;
                }
                else{
                operand1 = parseFloat(display.textContent);
                display.innerText = '';
                operator = '-';
                }
            }

            else if(value == '*'){
                if(display.innerText == ''){
                    display.innerText ='Please enter something to multiply';
                }
                else{
                operand1 = parseFloat(display.textContent);
                display.innerText = '';
                operator = '*';
                }
            }

            else if(value == '/'){
                if(display.innerText == ''){
                    display.innerText ='Please enter something to divide';
                }
                else{
                operand1 = parseFloat(display.textContent);
                display.innerText = '';
                operator = '/';
                }
            }
            else if(value == '%'){
                if(display.innerText == ''){
                    display.innerText ='Please enter something to multiply';
                }
                else{
                operand1 = parseFloat(display.textContent);
                display.innerText = operand1/100;    
                }
            }

            else if(value == 'backspc'){
                var a = display.innerText;
                display.innerText = a.substr(0,a.length-1);
            }

            else if(value == 'Sin'){
                var o1 = display.innerText;
                display.innerText = Math.sin(o1* Math.PI / 180);
            }

            else if(value == 'Cos'){
                var o1 = display.innerText;
                display.innerText = Math.cos(o1* Math.PI / 180);
            }

            else if(value == 'tan'){
                var o1 = display.innerText;
                display.innerText = Math.tan(o1* Math.PI / 180);
            }

            else if(value == 'square'){
                var o1 = parseFloat(display.innerText);
                var result = Math.pow(o1,2);
                display.innerText = result;
            }

            else if(value == 'cube'){
                var o1 = parseFloat(display.innerText);
                var result = Math.pow(o1,3);
                display.innerText = result;
            }

            else if(value == 'root'){
                var o1 = parseFloat(display.innerText);
                var result = Math.pow(o1,1/2);
                display.innerText = result;
            }

            else if(value == 'cuberoot'){
                var o1 = parseFloat(display.innerText);
                var result = Math.pow(o1,1/3);
                display.innerText = result;
            }
            else if(value == 'C'){
                display.innerText = '';
            }
            else if(value == '='){
                if(display.innerText == ''){
                    display.innerText ='Please enter something';
                }
                else{
                operand2 = parseFloat(display.textContent);
                var result = eval(operand1 + ' ' + operator + ' ' + operand2) 
                display.innerText = result;
                }
            }
            else{
                display.innerText+= value;
            }
        });
    }