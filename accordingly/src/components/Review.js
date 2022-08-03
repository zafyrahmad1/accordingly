import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    image : <img src="https://img.etsystatic.com/il/9de8f7/1322805512/il_fullxfull.1322805512_fu3y.jpg?version=0" alt="WL"width="140px"height="80px"></img>,
    name: 'Legos',
    desc: '',
    price: '$9.99',
  },
  {
    image : <img src="https://th.bing.com/th/id/OIP.sgRCWAXsdM2Lgt5KvenjHAHaGz?pid=ImgDet&rs=1" alt="WL"width="140px"height="80px"></img>,
    name: 'Video Games',
    desc: '',
    price: '$10.99',
  },
  {
  image :  <img src="https://th.bing.com/th/id/R.674da54be6be15ee54d9e17df63e353c?rik=PjesJ%2bHXtBWZYw&pid=ImgRaw&r=0" alt="WL"width="140px"height="80px"></img>,
    name: 'Headphone',
    desc: '',
    price: '$6.51',
  },
  { 
    
  image : <img src="https://th.bing.com/th/id/R.5cd2ad7dedd7917d01c20683f89be869?rik=Si4ZO2ebdyoddw&pid=ImgRaw&r=0" alt="WL"width="140px"height="90px"></img>,
    name: 'Hat',
    desc: '',
    price: '$4.11',
  },
  { name: 'Shipping', desc: '', price: '$5.00' },
];

const addresses = ['123 washington ln, Townsend Delaware, 19734'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Zafyr Ahmad' },
  { name: 'Card number', detail: '0123-4567-8910-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Items In cart
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            {product.image}
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>

          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />

          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $36.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Adress
          </Typography>
          <Typography gutterBottom>Zafyr Ahmad</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}