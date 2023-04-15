import React from 'react'

const CompletedResults = ({ list }) => {
    return (
        <div>
            {list.map((item) => {
                if (item.status === true) {
                    return <div>{item.title}</div>
                }
            })}
        </div>
    )
}

export default CompletedResults