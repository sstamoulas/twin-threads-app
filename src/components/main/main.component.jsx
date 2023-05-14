import React, { useState } from 'react';

import ClassList from './../class-list/class-list.component';
import Search from './../search/search.component';
import Table from './../table/table.component';

import './main.styles.scss';

const Main = () => {
  const [state, setState] = useState({ activeTab: 'search' });
  const { activeTab } = state;

  const tabHandler = (value) => {
    setState({ activeTab: value });
  }

  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className={`nav-link ${activeTab == 'search' ? 'active' : ''}`} id="search-tab" data-bs-toggle="tab" data-bs-target="#search" type="button" role="tab" aria-controls="search" aria-selected="true" onClick={() => tabHandler('search')}>View Search</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className={`nav-link ${activeTab == 'class-list' ? 'active' : ''}`} id="class-list-tab" data-bs-toggle="tab" data-bs-target="#class-list" type="button" role="tab" aria-controls="class-list" aria-selected="false" onClick={() => tabHandler('class-list')}>View Class List</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className={`tab-pane fade ${activeTab == 'search' ? 'show active' : ''}`} id="search" role="tabpanel" aria-labelledby="search-tab">
          <Search />
          <Table />
        </div>
        <div className={`tab-pane fade ${activeTab == 'class-list' ? 'show active' : ''}`} id="className-list" role="tabpanel" aria-labelledby="className-list-tab">
          <ClassList />
        </div>
      </div>
    </>
  );
}

export default Main;
