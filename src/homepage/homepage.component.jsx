import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Автоматы</h1>
            <span className="subtitle">Купить</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Диф защита</h1>
            <span className="subtitle">Купить</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Контакторы</h1>
            <span className="subtitle">Купить</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Щиты</h1>
            <span className="subtitle">Купить</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Инструмент</h1>
            <span className="subtitle">Купить</span>
          </div>
        </div>
      </div>
    </div>
)

export default HomePage;