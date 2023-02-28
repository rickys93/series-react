import React from 'react'


function LoadSeries({ load }) {
  return (
    <p>
        It looks like the series did not load :/ <br />
        <button
            onClick={load}
        >
            Load Series
        </button>
    </p>
  )
}

export default LoadSeries