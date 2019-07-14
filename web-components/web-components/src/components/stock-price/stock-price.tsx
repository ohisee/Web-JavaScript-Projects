/**
 * @fileoverview Stock price web component.
 */
import {Component, State, Element, Prop, Watch, Listen} from "@stencil/core";

import {apiUrl} from '../global/global';

@Component({
  tag: 'app-stock-price',
  styleUrl: './stock-price.css',
  shadow: true
})
export class StockPriceComponent {

  @Element() el: HTMLElement;

  @State() fetchedPrice: number;
  @State() stockUserInput: string;
  @State() stockInputValid = false;
  @State() error: string;
  @State() loading = false;

  @Prop({reflectToAttr: true, mutable: true}) stockSymbol: string;

  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.stockUserInput = newValue;
      this.stockInputValid = true;
      this.fetchStockPrice(newValue);
    }
  }

  stockInput: HTMLInputElement;
  // initialStockSymbol: string;

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    // const symbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
    // const symbol = this.stockInput.value;
    // this.fetchStockPrice(symbol);

    // if there are any changes on this.stockSymbol,
    // it will trigger @Watch('stockSymbol') stockSymbolChanged
    this.stockSymbol = this.stockInput.value;
  }

  /**
   * Two ways binding
   * Called on every key stroke
   */
  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    if (this.stockUserInput.trim() !== '') {
      this.stockInputValid = true;
    } else {
      this.stockInputValid = false;
    }
  }

  componentWillLoad() {
    console.log('component will load before render');
    console.log(this.stockSymbol);
  }

  componentDidLoad() {
    console.log('component did load');
    if (this.stockSymbol) {
      console.log('this stock symbol', this.stockSymbol);
      // this.initialStockSymbol = this.stockSymbol;
      this.stockUserInput = this.stockSymbol;
      this.stockInputValid = true;
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  componentWillUpdate() {
    console.log('component will update');
  }

  componentDidUpdate() {
    console.log('component did update');
    // if (this.stockSymbol !== this.initialStockSymbol) {
    //   this.initialStockSymbol = this.stockSymbol;
    //   this.fetchStockPrice(this.stockSymbol);
    // }
  }

  componentDidUnload() {
    console.log('component did unload');
  }

  @Listen('body:appStockFinderSymbolSelected')
  onStockSymbolSelected(event: CustomEvent) {
    console.log('Stock symbol selected ', event.detail);
    if (event.detail && event.detail !== this.stockSymbol) {
      this.stockSymbol = event.detail;
    }
  }

  private fetchStockPrice(symbol: string) {
    this.loading = true;
    fetch(apiUrl(symbol))
      .then(res => res.json())
      .then(parseRes => {
        if (!parseRes['Global Quote']['05. price']) {
          this.fetchedPrice = null;
          throw new Error('Invalid symbol');
        }
        this.fetchedPrice = +parseRes['Global Quote']['05. price'];
        this.error = null;
        this.loading = false;
      })
      .catch(err => {
        this.error = err.message;
        this.fetchedPrice = null;
        this.loading = false;
        this.stockInputValid = false;
      });
  }

  /**
   * Special reserved function
   */
  hostData() {
    return {
      class: this.error ? 'error' : null
    }
  }

  render() {
    let priceContent = <p>Please enter a symbol.</p>;
    if (this.error) {
      priceContent = <p>{this.error}</p>;
    }
    if (this.fetchedPrice) {
      priceContent = <p>Price: ${this.fetchedPrice}</p>;
    }
    if (this.loading) {
      priceContent = <app-spinner />;
    }
    return (
      [
        <form onSubmit={this.onFetchStockPrice.bind(this)}>
          <input id="stock-symbol"
            ref={element => this.stockInput = element}
            value={this.stockUserInput}
            onInput={this.onUserInput.bind(this)} />
          <button type="submit" disabled={!this.stockInputValid || this.loading}>Get Price</button>
        </form>,
        <div>
          {priceContent}
        </div>
      ]
    );
  }
}
