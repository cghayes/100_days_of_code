class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer style="font-size: 12pt; text-align: center; color: #666;">
        <p>100 Days of Code challenge: https://jsbeginners.com/javascript-projects-for-beginners/</p>
      </footer>
    `
  }
}

customElements.define('main-footer', Footer);
