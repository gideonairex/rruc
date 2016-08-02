import React from 'react';
// Debugging tools
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import SliderMonitor from 'redux-slider-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
	<DockMonitor
		defaultIsVisible={true}
		toggleVisibilityKey='ctrl-w'
		changePositionKey='ctrl-q'
		changeMonitorKey='ctrl-m'>
		<LogMonitor />
		<SliderMonitor />
	</DockMonitor>
);
