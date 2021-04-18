import React from "react";
import { observer } from "mobx-react";



export const PaginationWrapper = observer(function PaginationWrapper({ pagable, children, className="", showRefresh=false }) {
	return (
		<section className="paginationWrapper" role="list">
			{showRefresh ? <button href="#" className="refresh linkStyling" onClick={pagable.clear}>Refresh</button> : ''}
			{pagable.hasPrev ? <button onClick={pagable.loadPrevPage} className="btn prev">Previous</button> : ''}
			{pagable.hasNext ? <button onClick={pagable.loadNextPage} className="btn next">Next</button> : ''}
		</section>
	);
});