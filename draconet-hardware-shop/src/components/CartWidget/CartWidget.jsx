import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"


const CartWidget = () => {
  return (
    <Badge
      badgeContent={10}
      color="success"
      sx={{
        marginTop: '10px', // Margen arriba
        marginLeft: '20px', // Margen a la izquierda
        marginRight: '20px', // Margen a la derecha
      }}
    >
      <AddShoppingCartIcon color="action" sx={{ fontSize: 40, cursor: 'pointer' }} />
    </Badge>
  );
}

export default CartWidget