import React, { Component } from 'react';
import QueueBuyButtonMenu from '../queueSubs/queueBuyButtonMenu';
import DownArrowIcon from '../../../icons/downArrowIcon';
import style from '../../../styles/buyButtonQueue.scss';

class BuyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      inCart: false,
      loading: false
    };
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    let menuOpen = !this.state.menuOpen;
    this.setState({ menuOpen });
  }

  render() {
    return (
      <div className={style.buyButtonContainerQueue}>
        <div id="buy-button">
          <button className={style.buyButton}>
            <span>${this.props.price}</span>
          </button>
          <button className={style.launchMenu} onClick={this.openMenu}>
            {this.state.loading && (
              <div id="loading-menu-icon">
                <img src="" />
                {/* use svg here for animation */}
              </div>
            )}
            {!this.state.loading && (
              <div id="launch-menu-icon">
                <DownArrowIcon />
              </div>
            )}
          </button>
          {this.state.menuOpen && <QueueBuyButtonMenu />}
        </div>
      </div>
    );
  }
}

export default BuyButton;
