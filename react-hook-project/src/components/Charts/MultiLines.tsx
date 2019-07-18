/**
 * @fileoverview Multi line component
 */
import React, { FC } from "react";
import { select, Selection } from "d3-selection";
import {
  ScaleLinear,
  scaleLinear,
  ScaleTime,
  scaleTime,
  scaleOrdinal
} from "d3-scale";
import { extent } from "d3-array"
import { line, Line } from "d3-shape";
import { format } from "d3-format";
import { axisBottom, axisLeft } from "d3-axis";
import { timeYear } from "d3-time";
import { nest, schemeCategory10 } from "d3";
import { randomId } from "../random";
import Styles from './MultiLines.module.css';

type Data = { indicator: string, key: Date, value: number }
type Props = {
  title: string,
  width: number,
  height: number,
  margin: {
    top: number,
    right: number,
    bottom: number,
    left: number,
  },
  data: Data[],
  showXaxis: boolean,
  showYaxis: boolean,
  timeYearInterval?: number,
}
const MultiLines: FC<Props> = (props) => {

  const height = props.height - props.margin.top - props.margin.bottom;
  const width = props.width - props.margin.left - props.margin.right;
  const x: ScaleTime<number, number> = scaleTime<number>();
  const y: ScaleLinear<number, number> = scaleLinear<number>();
  const AMOUNT_TO_TRIGGER_FORMAT = 1000;
  const [minDate, maxDate] = extent(props.data, d => d.key);
  const [minY, maxY] = extent(props.data, d => d.value);
  const dataNest = nest<Data>().key(d => d.indicator).entries(props.data);
  const color = scaleOrdinal(schemeCategory10);

  const xTimeScale = () => {
    if (minDate && maxDate) {
      return x.domain([minDate, maxDate]).range([0, width]).nice();
    }
  }

  const yNumberScale = () => {
    if (minY && maxY) {
      return y.domain([minY < 0 ? minY : 0, maxY]).range([height, 0]).nice();
    }
  }

  const customYaxis = (
    svg: Selection<SVGSVGElement, {}, null, undefined>) => {
    const yValueFormat: string =
      ((maxY ? maxY : 0) < AMOUNT_TO_TRIGGER_FORMAT) ? ',.2f' : '~s';
    const yAxis =
      axisLeft(y).ticks(height / 50).tickSize(-width).tickFormat(format(yValueFormat));
    svg.call(yAxis);
  }

  const customXaxis = (
    svg: Selection<SVGSVGElement, {}, null, undefined>) => {
    //tickFormat(timeFormat("%Y"));
    let xAxis = axisBottom<Date>(x).ticks(
      timeYear.every(props.timeYearInterval ? props.timeYearInterval : 1));
    svg.call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', "-0.8em")
      .attr('dy', '0.15em')
      .attr('transform', 'rotate(-65)');
  }

  const createTimeseriesPath = ():
    Line<{ key: Date, value: number }> | undefined => {
    const xd = xTimeScale();
    const yd = yNumberScale();
    if (xd && yd) {
      return line<{ key: Date, value: number }>().x(d => xd(d.key)).y(d => yd(d.value));
    }
  }

  const createDataPoints = () => {
    const xd = xTimeScale();
    const yd = yNumberScale();
    if (xd && yd) {
      return props.data.map(d =>
        <circle
          key={randomId()}
          className={Styles.dots}
          cx={xd(d.key)}
          cy={yd(d.value)}
          r={2.5} />);
    }
  }

  const pathLine = createTimeseriesPath();
  const dataPoints = createDataPoints();
  const lines: { key: string, line: string }[] = [];
  if (pathLine) {
    dataNest.forEach(line => {
      let l = pathLine(line.values);
      if (l) {
        lines.push({ key: line.key, line: l });
      }
    });
  }

  return (
    <React.Fragment>
      {lines.length > 0 ?
        <div className={Styles.lineChart}>
          <div className={Styles.title}>{props.title}</div>
          <svg xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={'100%'}
            height={props.height}>
            <g transform={`translate(${props.margin.left}, ${props.margin.top})`}>
              {props.showXaxis ?
                <g className={Styles.axisX} transform={`translate(0, ${height + 1})`}
                  ref={(el: SVGSVGElement) =>
                    select(el).call(customXaxis)}></g> : null}
              {props.showYaxis ?
                <g className={Styles.axisY} ref={(el: SVGSVGElement) =>
                  select(el).call(customYaxis)}></g> : null}
              {lines.map(l => <path key={randomId()} d={l.line}
                className={Styles.line} stroke={color(l.key)}></path>)}
              {dataPoints ? dataPoints : null}
            </g>
          </svg>
        </div> : <div>No Data</div>}
    </React.Fragment>
  );
};

export default MultiLines;
