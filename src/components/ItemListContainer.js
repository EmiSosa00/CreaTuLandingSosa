import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {/* Aquí se mostrará el catálogo de productos en el futuro */}
    </div>
  );
};

export default ItemListContainer;
