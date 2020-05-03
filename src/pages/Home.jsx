import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import withAuthorization from '../components/hoc/withAuthorization';
import LogItem from '../components/logs/LogItem';
import { fetchLogs } from '../app/Redux/actions/index';

const Home = ({ logs, fetchLogs }) => {
	useEffect(() => {
		fetchLogs();
	}, [fetchLogs]);

	const renderServices = (logs) => {
		return logs.map((log) => {
			return <LogItem key={log.id} log={log} />;
		});
	};

	return (
		<Fragment>
			<h1 className='mt-2' style={{ textAlign: 'center' }}>
				Everybodys Logs
			</h1>
			<div className='home-page'>{renderServices(logs)}</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	logs: state.logs.items,
	authUser: state.auth.user,
});

export default withAuthorization(connect(mapStateToProps, { fetchLogs })(Home));
