import React from 'react';
import classes from './Pagination.module.css';

const pagination = props => {
    let state = {
        pageIndex: 1
    }

    let numberOfPages = null;
    let pageButtons = (
        <li className="page-item active"><a className={`${classes.Page_link} page-link`} href="#">3</a></li>
    )

    if(props.itemsNumber % 10 === 0){
        numberOfPages = props.itemsNumber / 10;
    } else {
        numberOfPages = Math.floor(props.itemsNumber/10) + 1
    }

    function handlePageClick(e) {
        e.preventDefault();

        let page = e.target.name
        props.getList(page-1, 10)

        state.pageIndex = page;

    }

    function returnPages() {
        let pages = [];
        for (let i=0; i < numberOfPages; i++) {
            pages.push(i+1);
        }

        pageButtons = pages.map((p) => {
            if(state.pageIndex===p){
                return(
                    <li className="page-item active" key={`${p}`}>
                        <a className={`${classes.Page_link} page-link`} name={p} onClick={handlePageClick} href="#">{p}</a>
                    </li>
                )
            } else {
                return (
                    <li className="page-item" key={`${p}`}>
                        <a className={`${classes.Page_link} page-link`} name={p} onClick={handlePageClick} href="#">{p}</a>
                    </li>
                )
            }

        })

        return pageButtons;
    }

     return(
        <nav aria-label="Pagination" className={classes.Pagination}>
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className={`${classes.Page_link} page-link`} href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                {/*<li className="page-item active" aria-current="page">*/}
                    {/*<a className={`${classes.Page_link} page-link`} href="#">1 <span*/}
                        {/*className="sr-only">(current)</span></a></li>*/}
                {/*<li className="page-item ">*/}
                    {/*<a className={`${classes.Page_link} page-link`} href="#">2</a>*/}
                {/*</li>*/}
                {/*<li className="page-item"><a className={`${classes.Page_link} page-link`} href="#">3</a></li>*/}
                {/*{pages}*/}
                {returnPages()}
                <li className="page-item">
                    <a className={`${classes.Page_link} page-link`} href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
};

export default pagination;