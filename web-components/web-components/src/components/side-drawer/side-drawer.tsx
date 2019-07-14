import { Component, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'app-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawerComponent {

  @Prop({ reflectToAttr: true }) drawerTitle: string;
  @Prop({ reflectToAttr: true, mutable: true }) open: boolean;

  @State() showContactInfo = false;

  onClosedDrawer() {
    this.open = false;
  }

  onContentChange(content: string) {
    this.showContactInfo = content === 'contact';
  }

  @Method()
  openSideDrawer() {
    this.open = true;
  }

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email</p>
          <ul>
            <li>Phone: 1234567890</li>
            <li>E-Mail: email@abc.com</li>
          </ul>
        </div>
      );
    }
    return (
      [
        <div id="backdrop" onClick={this.onClosedDrawer.bind(this)}></div>,
        <aside>
          <header>
            <h2>{this.drawerTitle}</h2>
            <button onClick={this.onClosedDrawer.bind(this)}>X</button>
          </header>
          <section id="tabs">
            <button
              class={this.showContactInfo ? "" : "active"}
              onClick={this.onContentChange.bind(this, "nav")}>Navigation</button>
            <button
              class={this.showContactInfo ? "active" : ""}
              onClick={this.onContentChange.bind(this, "contact")}>Contact</button>
          </section>
          <main>
            {mainContent}
          </main>
        </aside>
      ]
    );
  }
}
