import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./HomePage.css";
import { FormatUnderlined } from "@material-ui/icons";
class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <header className="p">
          <h1>MakeFolio</h1>
          <p>Build your PortFolio for free</p>
        </header>
        <main>
          <section>
            <h2>Start building your PortFolio</h2>
            <p>
              With MakeFolio, you can create a beautiful and professional PortFolio
              without any coding experience. Just choose a template, add your
              content, and start publishing.
            </p>
            <button>Get started</button>
          </section>
          <section>
            <h2>See what you can create</h2>
            <ul>
              <li>⚫Business PortFolio</li>
              <li>⚫Personal Portfolio</li>
              <li>⚫Ecommerce PortFolio</li>
              <li>⚫IT PortFolio</li>
              <li>⚫Portfolios</li>
            </ul>
          </section>
          <section>
            <h2>Try it for free</h2>
            <p>
              You can try PortFolio for free for 14 days. No credit card required.
            </p>
            <button>Sign up for free</button>
          </section>
        </main>
        <footer>
        <p>&copy; {new Date().getFullYear()} Makefolio. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<HomePage />, document.getElementById("root"));

export default HomePage;