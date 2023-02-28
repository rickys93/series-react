import React, { useEffect, useState } from 'react'

import { SearchForm, ShowList, ShowSorter } from '../../components'
// import { compareRating, compareSortValue } from '../../helpers'
function compareRating(a, b) {
    if (a.rating.average > b.rating.average) {
        return -1;
    }
    if (a.rating.average < b.rating.average) {
        return 1;
    }
    return 0;
}

function comparePremiered(a, b) {
    if (a.premiered > b.premiered) {
        return -1;
    }
    if (a.premiered < b.premiered) {
        return 1;
    }
    return 0;
}

function compareId(a, b) {
    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }
    return 0;
}

export default function Search() {
    const [search, setSearch] = useState('');
    const [showData, setShowData] = useState([]);
    const [sortValue, setSortValue] = useState('none');
  
    useEffect(() => {
      async function searchShow() {
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${search}`
        );
        const rawData = await response.json();
        const data = rawData.map((show) => show.show);
        setShowData(data);
      }
      searchShow();
    }, [search]);
  
    function sortShowData(data, sortValue) {
        if (sortValue === 'rating') {
            return data.sort(compareRating);
        } else if (sortValue == 'premiered') {
            return data.sort(comparePremiered);
        } else {
            return data.sort(compareId);
        }
    }
  
    useEffect(() => {
        console.log('sortValue', sortValue)
        const sortedData = sortShowData(showData, sortValue);
        console.log(sortedData)
        setShowData(showData => sortShowData(showData, sortValue));
    }, [sortValue]);
  
    return (
        <>
            <SearchForm getSeries={setSearch} />
            <ShowSorter setSortValue={setSortValue} />
            <ShowList showData={showData} />
        </>
    );
  }
