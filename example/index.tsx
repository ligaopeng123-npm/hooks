import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useEffect} from "react";
import {ClockDate, useClock, usePoller, useEasing} from "../src";

const App = () => {
	const clock: ClockDate = useClock();
	const [time, startPoller, stopPoller] = usePoller({delay: 1200});
	const [asyncTime, startAsyncPoller, stopAsyncPoller] = usePoller({
		delay: 1200,
		immediate: false,
		asyncCallBack: async (params) => {
			console.log('params', params);
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
	
	const [useCurrentData, startEasing, stopEasing] = useEasing({
		duration: 60000,
		immediate: false,
		easingType: "cubicOut",
		intervals: 1000
	});
	
	useEffect(() => {
		setTimeout(() => {
			startAsyncPoller();
			startEasing();
		}, 2000);
		
		setTimeout(() => {
			stopPoller();
			stopEasing();
			setTimeout(() => {
				startPoller();
			}, 2000)
		}, 10009);
	}, []);
	
	return (
		<div>
			<h3>useClock</h3>
			{
				`${clock.ymd} ${clock.hms} ${clock.week}`
			}
			<h3>usePoller</h3>
			{
				time
			}
			<h3>异步usePoller</h3>
			{
				asyncTime
			}
			
			<h3>useEasing 缓动函数</h3>
			{
				useCurrentData
			}
		</div>
	);
};

ReactDOM.render(<App/>, document.getElementById('root'));
