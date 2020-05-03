import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import withAuthorization from '../../components/hoc/withAuthorization';
import LogItem from '../../components/logs/LogItem';

import { fetchUserLogs } from '../../app/Redux/actions/index';

const MyLogs = (props) => {
	const {
		auth: { user },
		fetchUserLogs,
	} = props;
	const { logs } = user;

	useEffect(() => {
		fetchUserLogs(user.uid);
	}, [user.uid, fetchUserLogs]);

	const renderServices = (logs) => {
		return logs.map((log) => {
			return <LogItem key={log.id} log={log} />;
		});
	};

	return (
		<Fragment>
			<h1 className='mt-2' style={{ textAlign: 'center' }}>
				Your Logs
			</h1>
			<div className='home-page'>{renderServices(logs)}</div>
		</Fragment>
	);
};

export default withAuthorization(connect(null, { fetchUserLogs })(MyLogs));
