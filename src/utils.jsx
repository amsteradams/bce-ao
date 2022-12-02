export function currencyFormat(num){
    //return num + '€'
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '€';
}

export function numberFormat(num){
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function numberFormatWithoutToFixed(num){
    return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function percentageFormat(num){
    return num.toFixed(2) + '%';
}

export function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}