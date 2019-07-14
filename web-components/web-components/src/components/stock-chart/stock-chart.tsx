/**
 * @fileoverview Stock chart web component
 */
import { Component, State, Element, Listen, Prop, Watch } from "@stencil/core";
import { select, Selection } from "d3-selection";
import { line } from "d3-shape";
import { max, extent } from 'd3-array';
import { format } from "d3-format";
import { axisBottom, axisLeft } from "d3-axis";
import { scaleLinear, ScaleLinear, ScaleTime, scaleTime } from 'd3-scale';
import { weeklyAdjusted } from "../global/global";
import { timeParse, timeFormat } from "d3-time-format";
import { timeMonth } from "d3-time";

@Component({
  tag: 'app-stock-chart',
  styleUrl: './stock-chart.css',
  shadow: true
})
export class StockChartComponent {

  @Element() hostElmenet: HTMLElement;

  readonly _width = 800;
  readonly _height = 380;
  // readonly _tickPadding = 1;
  // readonly _lineWidth = 1.5;
  readonly _tickSize = 5;
  readonly _interval = 6;
  readonly _margin = { top: 20, right: 50, bottom: 50, left: 50 };
  readonly width = this._width - this._margin.left - this._margin.right;
  readonly height = this._height - this._margin.top - this._margin.bottom;
  // scaleBand<string>().range([0, this.width]).padding(this._tickPadding);
  x: ScaleTime<number, number> = scaleTime<number, number>().range([0, this.width]);
  y: ScaleLinear<number, number> = scaleLinear<number, number>().range([this.height, 0]).nice();
  parseTime = timeParse('%Y-%m-%d');

  @Prop({ mutable: true }) stockSymbol: string;

  @State() data: { date: Date, price: number }[] = [];
  @State() loading = false;

  @Watch('stockSymbol')
  stockSymbolChangedHandler(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.stockSymbol = newValue;
      this.fetchTimeSeriesData(this.stockSymbol);
    }
  }

  @Listen('body:appStockFinderSymbolSelected')
  onStockSymbolSelected(event: CustomEvent) {
    if (event.detail && event.detail !== this.stockSymbol) {
      this.stockSymbol = event.detail;
    }
  }

  componentDidLoad() { }

  componentDidUpdate() { }

  fetchTimeSeriesData(symbol: string) {
    this.loading = true;
    fetch(weeklyAdjusted(symbol))
      .then(res => res.json())
      .then(parsedRes => {
        if (parsedRes['Weekly Adjusted Time Series']) {
          let timeseries = parsedRes['Weekly Adjusted Time Series'];
          let results = Object.keys(timeseries);
          if (results.length > 0
            && results[0]
            && timeseries[results[0]]
            && timeseries[results[0]]['5. adjusted close']) {
            this.data = results.map(key => ({
              date: this.parseTime(key),
              price: +timeseries[key]['5. adjusted close']
            }));
          }
        }
        this.loading = false;
      })
      .catch(err => {
        this.loading = false;
        console.log(err);
      });
  }

  customXaxis(
    svg: Selection<SVGElement, {}, null, undefined>,
    xx: ScaleTime<number, number>,
    interval: number) {
    let xAxis = axisBottom(xx)
      .ticks(timeMonth.every(interval))
      .tickFormat(timeFormat('%b %Y'));
    svg.call(xAxis)
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', "-0.8em")
      .attr('dy', '0.15em')
      .attr('transform', 'rotate(-65)');
  }

  customYaxis(
    svg: Selection<SVGElement, {}, null, undefined>,
    yx: ScaleLinear<number, number>,
    ticks: number,
    amount: number) {
    let priceFormat: string = (amount < 1000) ? ',.3f' : '~s';
    let yAxis = axisLeft(yx).ticks(ticks).tickFormat(format(priceFormat));
    svg.call(yAxis);
  }

  createChartLine() {
    this.x.domain(extent(this.data, d => d.date));
    this.y.domain([0, max(this.data, d => d.price)]);
    return line<{ date: Date, price: number }>()
      .x(d => this.x(d.date))
      .y(d => this.y(d.price));
  }

  render() {
    let content = <div id='initial-content'>No data</div>;
    if (this.data.length > 0) {
      let pathLine = this.createChartLine();
      content = ([
        <div>Weekly Adjusted Prices and Volumes of <em>{this.stockSymbol}</em></div>,
        <svg width={this._width} height={this._height}>
          <g transform={`translate(${this._margin.left}, ${this._margin.top})`}>
            <g class='axis-x' transform={`translate(0, ${this.height})`}
              ref={(el: SVGElement) =>
                select(el).call(this.customXaxis, this.x, this._interval)}></g>
            <g class="axis-y"
              ref={(el: SVGElement) =>
                select(el).call(this.customYaxis, this.y,
                  this._tickSize, max(this.data, d => d.price))}></g>
            <path d={pathLine(this.data)} class='line'></path>
          </g>
        </svg>
      ]);
    }
    if (this.loading) {
      content = <app-spinner />;
    }
    return (
      <div id='chart'>
        {content}
      </div>
    );
  }
}
