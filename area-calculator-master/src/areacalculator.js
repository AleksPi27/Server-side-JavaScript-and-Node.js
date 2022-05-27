const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    switch(choice){
        case 'square':
            if (!side) area = -1;
            else area = side**2;
            break;
        case 'rectangle':
            if (!length || !breadth) area = -1;
            else area = length * breadth;
            break;
        case 'circle':
            if (!radius) area = -1;
            else area = pi* radius**2;
            break;        
        default: 
            area = -1;
        break;
    }
    return area
}
module.exports = {calculateArea}
