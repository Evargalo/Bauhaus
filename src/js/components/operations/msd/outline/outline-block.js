import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { toggleOpen, isOpen } from 'js/components/operations/msd/utils';
import PropTypes from 'prop-types';

class OutlineBlock extends Component {
	static propTypes = {
		secondary: PropTypes.bool,
		parent: PropTypes.string,
		baseUrl: PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
			children: Object.keys(this.props.children).reduce((acc, childId) => {
				return {
					...acc,
					[childId]: {
						...this.props.children[childId],
						opened: isOpen(childId),
					},
				};
			}, {}),
		};
	}

	expandOrCollapseItem(id) {
		toggleOpen(id);
		this.setState(previousState => ({
			children: {
				...this.state.children,
				[id]: {
					...this.state.children[id],
					opened: !this.state.children[id].opened,
				},
			},
		}));
	}
	render() {
		const {
			secondary,
			parent,
			baseUrl = '/operations/help/',
			disableSectionAnchor = false,
		} = this.props;
		const { children } = this.state;
		if (Object.keys(children).length <= 0) return null;
		return (
			<ul className={secondary ? 'secondary sommaire-item' : 'sommaire-item'}>
				{Object.values(children).map(child => {
					return (
						<li key={child.idMas} className="help-item">
							{Object.keys(child.children).length > 0 && (
								<button
									className="white"
									title="expand/collapse"
									onClick={() => this.expandOrCollapseItem(child.idMas)}
								>
									<span
										className={`glyphicon glyphicon-chevron-${
											child.opened ? 'up' : 'down'
										}`}
									/>
								</button>
							)}
							<Link
								smooth
								to={`${baseUrl}${disableSectionAnchor ? '' : parent}#${
									child.idMas
								}`}
							>
								{child.idMas} - {child.masLabelLg1}
							</Link>
							{child.opened && (
								<OutlineBlock
									children={child.children}
									secondary
									parent={parent}
									baseUrl={baseUrl}
									disableSectionAnchor={disableSectionAnchor}
								/>
							)}
						</li>
					);
				})}
			</ul>
		);
	}
}

export default OutlineBlock;
