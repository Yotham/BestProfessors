import React from 'react'
import './Pagination.css'

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className='pagination'>
                {
                    pageNumbers && pageNumbers.map( number => {
                        return (
                            <li key={number}>
                                <a id='page-num' onClick={paginate(number)} href='/classhome'>
                                    {number}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
