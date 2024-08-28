export function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}

export function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();


    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

    return formattedDate;
}
