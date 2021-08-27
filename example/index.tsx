import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useClock, ClockDate, usePoller} from '../.';
import {useEffect} from "react";

const App = () => {
	const clock: ClockDate = useClock();
	const [time, startPoller, stopPoller] = usePoller({delay: 1200});
	const [asyncTime, startAsyncPoller, stopAsyncPoller] = usePoller({
		delay: 1200,
		asyncCallBack: async (params) => {
			if (params.time > 10000) {
				stopAsyncPoller();
				return;
			}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(`我是参数: ${Date.now()}`)
				}, 2000)
			});
		}
	});
	useEffect(() => {
		setTimeout(() => {
			stopPoller();
			setTimeout(() => {
				startPoller();
			}, 2000)
		}, 10009);
	}, []);
	return (
		<div>
			<p>useClock</p>
			{
				clock.ymd + clock.hms + clock.week
			}
			<p>usePoller</p>
			{
				time
			}
			<p>异步usePoller</p>
			{
				asyncTime
			}
		</div>
	);
};

ReactDOM.render(<App/>, document.getElementById('root'));
