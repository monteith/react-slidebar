import React from 'react';

function MenuItem({ item, handleClick }) {
  return (
    <div className="menuItem" data-uuid={item.uuid}>
      <button className="-link" onClick={handleClick}>
        {item.name}
      </button>
    </div>
  );
}

export default MenuItem;
