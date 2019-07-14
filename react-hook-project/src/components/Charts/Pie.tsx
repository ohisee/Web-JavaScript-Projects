/**
 * @fileoverview Pie chart component
 */
import React, { FC } from "react";
import { pie, arc, PieArcDatum } from "d3";
import { format } from "d3-format";
import { randomId } from "../random";
import Styles from './Pie.module.css';

type Data = {
  key: Date, value: number
}
type Props = {
  title: string,
  width: number,
  height: number,
  data: Data[],
}
const Pie: FC<Props> = (props) => {

  const height = props.height;
  const width = props.width;
  const radius = Math.min(width, height) / 3;
  const pieGen = pie<Data>().sort(null).value(d => d.value);
  const arcGen = arc<PieArcDatum<Data>>().innerRadius(0).outerRadius(radius);
  const outerArcGen =
    arc<PieArcDatum<Data>>().innerRadius(radius * 0.8).outerRadius(radius * 0.9);
  const [blue, red] = ['#3f51b5', '#f48fb1'];

  const midAngle = (d: PieArcDatum<Data>) => {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }

  const createArcs = () => {
    if (props.data.length > 0) {
      const [target] = pieGen(props.data);
      const [p, other] = pieGen(props.data).map(d => arcGen(d));
      const posZero = radius * 0.95 * (midAngle(target) < Math.PI ? 1 : -1);
      const labelAnchor = midAngle(target) < Math.PI ? 'start' : 'end';
      const els = [];
      if (p && other) {
        let pos = outerArcGen.centroid(target);
        pos[0] = posZero;
        let pts = [
          arcGen.centroid(target),
          outerArcGen.centroid(target),
          pos,
        ];
        els.push(<path key={randomId()} d={p} fill={red}></path>);
        els.push(<path key={randomId()} d={other} fill={blue}></path>);
        els.push(
          <g key={randomId()} className={Styles.polylines}>
            <polyline points={pts.map(points => points.join(',')).join(',')}></polyline>
          </g>);
        els.push(
          <g key={randomId()} className={Styles.labelText}>
            <text
              dy={'0.36em'}
              dx={'0.36em'}
              transform={`translate(${pos})`}
              style={{ textAnchor: labelAnchor }}>{`${format(".2f")(target.data.value)}%`}</text>
          </g>);
        return els;
      }
    }
  }

  const arcs = createArcs();

  return (
    <React.Fragment>
      {arcs ?
        <div className={Styles.pieChart}>
          <div className={Styles.title}><span></span>{props.title}</div>
          <svg xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={props.width}
            height={props.height}>
            <g transform={`translate(${width / 2}, ${height / 2})`}>
              {arcs}
            </g>
          </svg>
        </div> : <div>No Data</div>}
    </React.Fragment>
  )
};

export default Pie;
