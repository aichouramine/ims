import React, {Component} from 'react';
import classes from './Pagination.module.css';

class Pagination extends Component{
    constructor(props){
        super(props)

        this.state = {
            per_page: 10,
            current_page: 1
        }
    }

    componentDidMount(){
        this.getPageNumber();
    }

    handlePageClick = (p) => {
        this.props.loadItems(p-1, this.state.per_page)

        this.setState({current_page: p})

        const url = this.setPageNumber({ query: p });
        this.props.updateUrl(url)
    }

    // handleNextPage = () =>{
    //     this.props.loadItems(this.state.current_page + 1, this.state.per_page)
    // }


    setPageNumber = ({query = "1"}) => {
        const searchParams = new URLSearchParams();
        searchParams.set("page", query);
        return searchParams.toString();
    }

    getPageNumber = () => {
        if(this.props.history.location.search){
            const searchParams = new URLSearchParams(this.props.history.location.search);

            this.setState({
                current_page: +searchParams.get('page')
            })
        }

    }

    render(){

        let numberOfPages = [];
        let renderPages = [];

        if (this.props.totalNumber!==null) {
            for (let i = 1; i <= Math.ceil(this.props.totalNumber / this.state.per_page); i++) {
                numberOfPages.push(i);
            }


            renderPages = numberOfPages.map((p) => {
                let attached_classes = this.state.current_page === p ? classes.active_page_link : '';

                if (p === 1 || p === this.props.totalNumber || (p >= this.state.current_page - 2 && p <= this.state.current_page + 2)) {
                    return (
                        <li className={` ${classes.active_page} page-item`} key={`${p}`} onClick={() => this.handlePageClick(p)}>
                            <div className={`${classes.Page_link} ${attached_classes} page-link`} >{p}</div>
                        </li>
                    )
                }

                return null;

            })
        }

        let firstStateClass = this.state.current_page === 1 ? 'disabled' : '';
        let lastStateClass = this.state.current_page === (numberOfPages.length) ? 'disabled' : '';

        return(
            <nav aria-label="Pagination" className={classes.Pagination}>
                <ul className="pagination">
                    <li className={`page-item ${firstStateClass}`} onClick={() => this.handlePageClick(1)}>
                        <div className={`${classes.Page_link} page-link`}  tabIndex="-1" aria-disabled="true">&laquo;</div>
                    </li>
                    {renderPages}
                    <li className={`page-item ${lastStateClass}`} onClick={() => this.handlePageClick(numberOfPages.length)}>
                        <div className={`${classes.Page_link} page-link`} >&raquo;</div>
                    </li>
                </ul>
            </nav>
        )

    }

};

export default Pagination;