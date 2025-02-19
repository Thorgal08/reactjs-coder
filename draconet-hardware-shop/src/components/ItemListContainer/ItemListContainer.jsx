import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h1>Hola, {greeting}! Bienvenido</h1>
    </div>
  );
};

export default ItemListContainer;

