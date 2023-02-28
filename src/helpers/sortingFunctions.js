function compareRating(a, b) {
    if (a.rating.average > b.rating.average) {
        return -1;
    }
    if (a.rating.average < b.rating.average) {
        return 1;
    }
    return 0;
}

function compareSortValue(a, b) {
    if (a[sortValue] > b[sortValue]) {
        return -1;
    }
    if (a[sortValue] < b[sortValue]) {
        return 1;
    }
    return 0;
}

export default { compareRating, compareSortValue };
