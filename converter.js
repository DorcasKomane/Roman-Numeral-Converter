function convertToRoman(num){

    const numStr = num.toString();
    console.log(numStr);

    const strLength = numStr.length;
    console.log(strLength);



    switch(strLength){
        case 4:
            return 'M';
            break;
        case 3:
            return 'CM';
            break;
        case 2:
            return 'D';
            break;
        case 1:
            switch(numStr){
                case '1':
                    console.log('I');
                    break;
                case '2':
                    console.log('II');
                    break;
                case '3':
                    console.log('III');
                    break;
                case '4':
                    console.log('IV');
                    break;
                case '5':
                    console.log('V');
                    break;
                case '6':
                    console.log('VI');
                    break;
                case '7':
                    console.log('VII');
                    break;
                case '8':
                    console.log('VIII');
                    break;
                case '9':
                    console.log('IX');
                    break;
                default:
                    console.log('Invalid character.');
            }
            break;
        default:
            return 'Empty String.';      
    }
}

convertToRoman(10);