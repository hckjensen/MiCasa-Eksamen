export const calculateDaysAgo  = (created_at) => {
    const createdDate = new Date(created_at);
    const currentDate = new Date();
    const differenceInDays = Math.floor((currentDate - createdDate) / (1000 * 60 * 60 * 24));
    return differenceInDays;
}





export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthNames = [
        "Januar", "Februar", "Marts", "April", "Maj", "Juni",
        "Juli", "August", "September", "Oktober", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day}. ${month?.toLowerCase()} ${year}`;
};