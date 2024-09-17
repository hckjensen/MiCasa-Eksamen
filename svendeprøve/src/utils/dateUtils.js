const calcuateDaysAgo = (created_at) => {
    const createdDate = new Date(created_at);
    const currentDate = new Date();
    const differenceInDays = Math.floor((currentDate - createdDate) / (1000 * 60 * 60 * 24));
    return differenceInDays;
}

export default calcuateDaysAgo;