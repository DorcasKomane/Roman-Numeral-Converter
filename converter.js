function convertToRoman(num){

    const ones = {
        0: '',
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX'
    };

    const tens = {
        10: 'X',
        11: 'XI',
        12: 'XII',
        13: 'XIII',
        14: 'XIV',
        15: 'XV',
        16: 'XVI',
        17: 'XVII',
        18: 'XVIII',
        19: 'XIX'
    };

    const prefixes = {
        2: 'XX',
        3: 'XXX',
        4: 'XL',
        5: 'L',
        6: 'LX',
        7: 'LXX',
        8: 'LXXX',
        9: 'XC'
    };

    const hundreds = {
        1: 'C',
        2: 'CC',
        3: 'CCC',
        4: 'CD',
        5: 'D',
        6: 'DC',
        7: 'DCC',
        8: 'DCCC',
        9: 'CM'
    };

    const thousands = {
        1: 'M',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
    };

    let romanNum = '';

    if(num in ones){
        romanNum = ones[num];
    }
    else if(num in tens){
        romanNum = tens[num];
    }
    else if(num > 19 && num < 100){
        //convert num into a string, then
        //split string into individual elements and store in array
        let numArr = num.toString().split('');

        console.log(numArr);

        for(let i = 0; i < numArr.length; i++){
            if(numArr[1] == '0'){
                romanNum = prefixes[numArr[0]];
            }
            else romanNum = (prefixes[numArr[0]] + ones[numArr[1]]);
        }

    }
    else if(num > 99 && num < 1000){
         //convert num into a string, then
        //split string into individual elements and store in array
        let numArr = num.toString().split('');

        console.log(numArr);

        for(let i = 0; i < numArr.length; i++){
            if(numArr[1] == '0' && numArr[2] == '0'){
                romanNum = hundreds[numArr[0]];
            }
          
            else romanNum = (hundreds[numArr[0]] + prefixes[numArr[1]] + ones[numArr[2]]);
        }

    }

    else if(num > 999 && num < 10000){
        //convert num into a string, then
       //split string into individual elements and store in array
       let numArr = num.toString().split('');

       console.log(numArr);

       for(let i = 0; i < numArr.length; i++){
           if(numArr[1] == '0' && numArr[2] == '0' && numArr[3] == '0'){
               romanNum = thousands[numArr[0]];
           }
           else if(numArr[1] == '0' && numArr[2] != '0' && numArr[3] != '0'){
                    if(numArr[2] == '1'){
                        romanNum = thousands[numArr[0]] + tens[numArr[2]] + ones[numArr[3]];
                    }
                    else romanNum = thousands[numArr[0]] + prefixes[numArr[2]] + ones[numArr[3]];
           }
           else if(numArr[1] != '0' && numArr[2] == '0' && numArr[3] == '0'){
                romanNum = thousands[numArr[0]] + hundreds[numArr[1]];
           }
           else if(numArr[1] == '0' && numArr[2] == '0' && numArr[3] != '0'){
            romanNum = thousands[numArr[0]] + ones[numArr[3]];
       }
         
           else romanNum = (thousands[numArr[0]] + hundreds[numArr[1]] + prefixes[numArr[2]] + ones[numArr[3]]);
       }

   }

    //return romanNum;
    console.log(romanNum);
}

convertToRoman(1104);