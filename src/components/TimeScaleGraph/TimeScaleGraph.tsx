import React, {Component, useEffect, useState} from "react";
import "./styles.scss";
import {Line, Serie} from '@nivo/line'
import useNivoTheme from '../../hooks/useNivoTheme/useNivoTheme';
import {TokenMetricField} from '../../models/TokenMetricModel/TokenMetricModel';
import last from 'lodash/last'
import {timeFormat} from 'd3-time-format'
import * as time from 'd3-time'

type ContainerProps = {
    activeButton: TokenMetricField;
    data: Serie[];
};

const commonProperties = {
    width: 900,
    height: 400,
    margin: {top: 20, right: 20, bottom: 60, left: 80},
    animate: true,
    enableSlices: 'x',
}

const TimeScaleGraph = (props: ContainerProps) => {

    const {theme} = useNivoTheme()
    const formatTime = timeFormat('%Y %b %d')

    const CustomTooltip = (slice: any) => {
        //Needs to be within the graph in order to get access to theme
        return (
            <div
                style={{
                    background: theme.tooltip.container.background,
                    color: theme.tooltip.container.textEmphasisColor,
                    padding: '9px 12px',
                    border: '1px solid #ccc',
                }}
            >
                <strong>{slice.point.serieId}</strong> {slice.point.data.yFormatted} <br/>
                {slice.point.data.xFormatted}
            </div>
        )
    }
    return (
        <Line
            {...commonProperties}
            margin={{top: 30, right: 50, bottom: 60, left: 50}}
            data={props.data}
            xScale={{type: 'time', format: 'native'}}
            yScale={{type: 'linear'}}
            axisTop={{
                format: '%H:%M',
                tickValues: 'every 24 hours',
                //@ts-ignore
                legend: `${formatTime(props.data[0].data[0].x)} - ${formatTime(last(props.data).data[0].x)}`,
                legendPosition: 'middle',
                legendOffset: 0,
            }}
            axisBottom={{
                format: '%H:%M',
                tickValues: 'every 1 hours',
            }}
            axisRight={{}}
            enablePoints={false}
            enableGridX={true}
            curve="monotoneX"
            animate={false}
            motionStiffness={120}
            motionDamping={50}
            isInteractive={true}
            enableSlices={false}
            useMesh={true}
            theme={theme}
            tooltip={CustomTooltip}
        />
    )
}


export default TimeScaleGraph;
