/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface AppSideDrawer {
    'drawerTitle': string;
    'open': boolean;
    'openSideDrawer': () => void;
  }
  interface AppSideDrawerAttributes extends StencilHTMLAttributes {
    'drawerTitle'?: string;
    'open'?: boolean;
  }

  interface AppSpinner {}
  interface AppSpinnerAttributes extends StencilHTMLAttributes {}

  interface AppStockChart {
    'stockSymbol': string;
  }
  interface AppStockChartAttributes extends StencilHTMLAttributes {
    'stockSymbol'?: string;
  }

  interface AppStockFinder {}
  interface AppStockFinderAttributes extends StencilHTMLAttributes {
    'onAppStockFinderSymbolSelected'?: (event: CustomEvent<string>) => void;
  }

  interface AppStockPrice {
    'stockSymbol': string;
  }
  interface AppStockPriceAttributes extends StencilHTMLAttributes {
    'stockSymbol'?: string;
  }

  interface AppTooltip {
    'text': string;
  }
  interface AppTooltipAttributes extends StencilHTMLAttributes {
    'text'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyComponent': Components.MyComponent;
    'AppSideDrawer': Components.AppSideDrawer;
    'AppSpinner': Components.AppSpinner;
    'AppStockChart': Components.AppStockChart;
    'AppStockFinder': Components.AppStockFinder;
    'AppStockPrice': Components.AppStockPrice;
    'AppTooltip': Components.AppTooltip;
  }

  interface StencilIntrinsicElements {
    'my-component': Components.MyComponentAttributes;
    'app-side-drawer': Components.AppSideDrawerAttributes;
    'app-spinner': Components.AppSpinnerAttributes;
    'app-stock-chart': Components.AppStockChartAttributes;
    'app-stock-finder': Components.AppStockFinderAttributes;
    'app-stock-price': Components.AppStockPriceAttributes;
    'app-tooltip': Components.AppTooltipAttributes;
  }


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLAppSideDrawerElement extends Components.AppSideDrawer, HTMLStencilElement {}
  var HTMLAppSideDrawerElement: {
    prototype: HTMLAppSideDrawerElement;
    new (): HTMLAppSideDrawerElement;
  };

  interface HTMLAppSpinnerElement extends Components.AppSpinner, HTMLStencilElement {}
  var HTMLAppSpinnerElement: {
    prototype: HTMLAppSpinnerElement;
    new (): HTMLAppSpinnerElement;
  };

  interface HTMLAppStockChartElement extends Components.AppStockChart, HTMLStencilElement {}
  var HTMLAppStockChartElement: {
    prototype: HTMLAppStockChartElement;
    new (): HTMLAppStockChartElement;
  };

  interface HTMLAppStockFinderElement extends Components.AppStockFinder, HTMLStencilElement {}
  var HTMLAppStockFinderElement: {
    prototype: HTMLAppStockFinderElement;
    new (): HTMLAppStockFinderElement;
  };

  interface HTMLAppStockPriceElement extends Components.AppStockPrice, HTMLStencilElement {}
  var HTMLAppStockPriceElement: {
    prototype: HTMLAppStockPriceElement;
    new (): HTMLAppStockPriceElement;
  };

  interface HTMLAppTooltipElement extends Components.AppTooltip, HTMLStencilElement {}
  var HTMLAppTooltipElement: {
    prototype: HTMLAppTooltipElement;
    new (): HTMLAppTooltipElement;
  };

  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement
    'app-side-drawer': HTMLAppSideDrawerElement
    'app-spinner': HTMLAppSpinnerElement
    'app-stock-chart': HTMLAppStockChartElement
    'app-stock-finder': HTMLAppStockFinderElement
    'app-stock-price': HTMLAppStockPriceElement
    'app-tooltip': HTMLAppTooltipElement
  }

  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'app-side-drawer': HTMLAppSideDrawerElement;
    'app-spinner': HTMLAppSpinnerElement;
    'app-stock-chart': HTMLAppStockChartElement;
    'app-stock-finder': HTMLAppStockFinderElement;
    'app-stock-price': HTMLAppStockPriceElement;
    'app-tooltip': HTMLAppTooltipElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
