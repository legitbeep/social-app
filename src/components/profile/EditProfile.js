import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Grid, Typography } from '@mui/material';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      
    <div >
        <div >
      <Button variant="outlined"  onClick={handleClickOpen}>
        Edit Profile
      </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
        <form>
        <Grid container direction="row" alignItems="center" >
          <Grid item container xs={12} md={6} justifyContent="center" alignItems="center"  >
          <label htmlFor="icon-button-file">
            
            <input style={{display:'none'}} accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span">
            <Typography> Profile Image </Typography>
              < PhotoCamera />
            </IconButton>
          </label>
          </Grid>
          <Grid item container xs={12} md={6} justifyContent="center" alignItems="center"  >
          <label htmlFor="icon-button-file">
          
            <input style={{display:'none'}} accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span">
            <Typography> Background Image </Typography>
              < PhotoCamera />
            </IconButton>
          </label>
          </Grid>
          </Grid>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Display Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Bio"
            multiline
            rows={4}
            type="text"
            fullWidth
            variant="outlined"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Location"
            type="text"
            fullWidth
            variant="outlined"
          />
           <DialogActions>
           <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
          </DialogActions>
      
          </form>

        </DialogContent>
       
      </Dialog>
    </div>
  );
}
