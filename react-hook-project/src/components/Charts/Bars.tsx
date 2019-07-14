/**
 * @fileoverview Bars chart component
 */
import React, { FC } from "react";
import { scaleLinear, scaleBand, scaleTime } from "d3-scale";
import { extent } from "d3-array"
import { select, Selection } from "d3-selection";
import { axisLeft, axisBottom } from "d3-axis";
import { timeYear } from "d3-time";
import { randomId } from "../random";
import Styles from "./Bars.module.css";

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
  data: { key: Date, value: number }[],
  showXaxis: boolean,
  showYaxis: boolean,
  timeYearInterval?: number,
}
const Bars: FC<Props> = (props) => {

  const height = props.height - props.margin.top - props.margin.bottom;
  const width = props.width - props.margin.left - props.margin.right;
  const x = scaleBand<string>();
  const y = scaleLinear<number>();
  const [minDate, maxDate] = extent(props.data, d => d.key);
  const [minValue, maxValue] = extent(props.data, d => d.value);

  const xBandScale = () => {
    const holder: number[] = [];
    const t = holder.concat(props.data.map(d => d.key.getFullYear()));
    t.sort((a, b) => a - b);
    return x.domain(t.map(d => String(d)))
      .range([0, width]).paddingInner(0.01);
  }

  const yNumberScale = () => {
    if (minValue && maxValue) {
      return y.domain([Math.min(0, minValue), maxValue])
        .range([height, 0]).nice();
    }
  }

  const customYaxis = (
    svg: Selection<SVGSVGElement, {}, null, undefined>) => {
    const yAxis = axisLeft(y).ticks(height / 50, ".2f");
    svg.call(yAxis);
  }

  const customXaxis = (
    svg: Selection<SVGSVGElement, {}, null, undefined>) => {
    if (minDate && maxDate) {
      const xtime = scaleTime().domain([minDate, maxDate]).range([0, width]).nice();
      const xAxis = axisBottom<Date>(xtime).ticks(
        timeYear.every(props.timeYearInterval ? props.timeYearInterval : 1));
      svg.call(xAxis)
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', "-0.8em")
        .attr('dy', '0.15em')
        .attr('transform', 'rotate(-65)');
    }
  }

  const createRects = () => {
    const xd = xBandScale();
    const yd = yNumberScale();
    if (xd && yd) {
      return props.data.map(d =>
        <rect
          key={randomId()}
          className={d.value < 0 ? Styles.barNegative : Styles.barPositive}
          x={xd(String(d.key.getFullYear()))}
          y={yd(d.value <= 0 ? 0 : d.value)}
          width={xd.bandwidth()}
          height={Math.abs(yd(d.value) - yd(0))}></rect>);
    }
  }

  const bars = createRects();

  return (
    <React.Fragment>
      {bars ?
        <div className={Styles.barChart}>
          <div className={Styles.title}>{props.title}</div>
          <svg xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={props.width}
            height={props.height}>
            <g transform={`translate(${props.margin.left}, ${props.margin.top})`}>
              {props.showXaxis ?
                <g className={Styles.axisX} transform={`translate(0, ${height + 1})`}
                  ref={(el: SVGSVGElement) =>
                    select(el).call(customXaxis)}></g> : null}
              {props.showYaxis ?
                <g className={Styles.axisY} ref={(el: SVGSVGElement) =>
                  select(el).call(customYaxis)}></g> : null}
              {bars}
            </g>
          </svg>
        </div> : <div>No Data</div>}
    </React.Fragment>
  );
};

export default Bars;
