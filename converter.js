function convertToRoman(num){

    const numStr = num.toString();

    console.log(num);

    switch(num){
        case 1000:
            return 'M';
            break;
        case 900:
            return 'CM';
            break;
        case 500:
            return 'D';
            break;
        case 400:
            return 'CD';
            break;
        case 90:
            return 'XC';
        case 50:
            return 'L';
            break;
        case 40:
            return 'XL';
            break;
        case 10:
            return 'X';
            break;
        case 9:
            return 'IX';
            break;
        case 5:
            return 'V';
            break;
        case 4:
            return 'IV';
            break;
        case 1:
            return 'I';
            break;
        default:
            return 'Invalid numeral.';      
    }
}

convertToRoman(1000);