import React from 'react';
import { connect } from 'react-redux';

const ClassList = ({ assets }) => {
  let hash = {};
  let classListArr = assets.map((asset) => asset.classList).flat(1);
  assets.forEach((asset) => {
    asset.classList.forEach((classListItem) => {
      if (hash[classListItem.name]) {
        hash[classListItem.name] = [...hash[classListItem.name], asset.name];
      }
      else {
        hash[classListItem.name] = [asset.name];
      }
    });
  });

  return (
    <ul>
      {
        Object.entries(hash).map(([hashKey, values]) => (
          <span key={hashKey}>
            <li>{hashKey}</li>
            <ul>
            {
              values.map((value) => (
                <li key={value}>{value}</li>
              ))
            }
            </ul>
          </span>
        ))
      }
    </ul>
  );
}

const mapStateToProps = (state) => ({
  assets: state.root.data.assets,
});

export default connect(mapStateToProps)(ClassList);
