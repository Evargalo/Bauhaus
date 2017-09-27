import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { dictionary } from 'js/utils/dictionary';
import 'css/pagination.css';

class Pagination extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: 1,
		};
		this.handleClick = event => {
			this.setState({
				currentPage: Number(event.target.id),
			});
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			currentPage: 1,
		});
	}

	render() {
		const { currentPage } = this.state;
		const { itemEls, itemsPerPage } = this.props;

		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const currentItems = itemEls.slice(indexOfFirstItem, indexOfLastItem);

		// Logic for displaying page numbers
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(itemEls.length / itemsPerPage); i++) {
			pageNumbers.push(i);
		}

		function activePage(page) {
			if (page === currentPage) return 'active';
		}

		const renderPageNumbers = pageNumbers.map(number => {
			if (number - 3 < currentPage && number + 3 > currentPage) {
				return (
					<li
						key={number}
						id={number}
						onClick={this.handleClick}
						className={activePage(number)}
					>
						{number}
					</li>
				);
			} else return null;
		});

		return (
			<div>
				<ul className="list-group">
					{currentItems}
				</ul>
				{pageNumbers.length > 1 &&
					<ul className="pagination pagination-rmes">
						<li key="-1" id="1" onClick={this.handleClick}>
							{dictionary.pagination.first}
						</li>
						{renderPageNumbers}
						<li
							key="100000"
							id={pageNumbers[pageNumbers.length - 1]}
							onClick={this.handleClick}
						>
							{dictionary.pagination.last} ({pageNumbers[pageNumbers.length - 1]})
						</li>
					</ul>}
			</div>
		);
	}
}

Pagination.propTypes = {
	itemEls: PropTypes.arrayOf(PropTypes.element).isRequired,
};
export default Pagination;
