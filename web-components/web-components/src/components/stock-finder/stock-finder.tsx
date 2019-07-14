/**
 * @fileoverview Stock finder web component
 */
import { Component, State, Event, EventEmitter } from "@stencil/core";

import { searchApiUrl } from '../global/global';

@Component({
  tag: 'app-stock-finder',
  styleUrl: './stock-finder.css',
  shadow: true,
})
export class StockFinderComponent {

  stockNameInput: HTMLInputElement;

  @State() searchResults: { symbol: string, name: string }[] = [];
  @State() loading = false;

  @Event({ bubbles: true, composed: true })
  appStockFinderSymbolSelected: EventEmitter<string>;

  onFindStock(event: Event) {
    event.preventDefault();
    const stockName = this.stockNameInput.value;
    this.loading = true;
    fetch(searchApiUrl(stockName))
      .then(res => res.json())
      .then(parsedRes => {
        if (parsedRes['bestMatches']) {
          this.searchResults =
            parsedRes['bestMatches']
              .map(d => ({ symbol: d['1. symbol'], name: d['2. name'] }));
        }
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.loading = false;
      });
  }

  onSelectSymbol(symbol: string) {
    this.appStockFinderSymbolSelected.emit(symbol);
  }

  render() {
    let content = (
      <ul id="search-result">
        {this.searchResults.map(d => (
          <li onClick={this.onSelectSymbol.bind(this, d.symbol)}><strong>{d.symbol}</strong> - {d.name}</li>
        ))}
      </ul>
    );
    if (this.loading) {
      content = <app-spinner />;
    }
    return (
      [
        <form onSubmit={this.onFindStock.bind(this)}>
          <input id="stock-symbol" ref={el => this.stockNameInput = el} />
          <button type="submit">Search</button>
        </form>,
        content
      ]
    );
  }
}