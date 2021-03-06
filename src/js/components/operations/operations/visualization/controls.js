import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'js/components/shared/button';
import PlaceHolder from 'js/components/shared/placeholder/placeholder';
import { goBack } from 'js/utils/redirection';
import D from 'js/i18n';

function OperationsControls(props) {
	const { openModal } = props;
	const cancel = [goBack(props, `/operations/series`), D.btnReturn];

	const exportVarBook = [openModal, D.btnExport];

	const btns = [cancel, null, null, null, null, exportVarBook];
	return (
		<div className="row btn-line">
			{btns.map((btn, i) => {
				if (!btn) return <PlaceHolder key={i} />;
				const [action, label] = btn;
				return btn && <Button key={label} action={action} label={label} />;
			})}
		</div>
	);
}

export default withRouter(OperationsControls);
