import React from 'react';
import classes from './Pagination.module.css';

const pagination = () => (
    <nav aria-label="Pagination" className={classes.Pagination}>
        <ul className="pagination">
            <li className="page-item disabled">
                <a className={`${classes.Page_link} page-link`} href="#" tabIndex="-1" aria-disabled="true">Previous</a>
            </li>
            <li className="page-item active" aria-current="page">
                <a className={`${classes.Page_link} page-link`} href="#">1 <span className="sr-only">(current)</span></a></li>
            <li className="page-item ">
                <a className={`${classes.Page_link} page-link`} href="#">2</a>
            </li>
            <li className="page-item"><a className={`${classes.Page_link} page-link`} href="#">3</a></li>
            <li className="page-item">
                <a className={`${classes.Page_link} page-link`} href="#">Next</a>
            </li>
        </ul>
    </nav>
);

export default pagination;