import React from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from "@material-ui/core";




export default function Addcar(props) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '',
        model: '',
        color:'',
        fuel:'',
        year:'',
        price:''        
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const inputChanged = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const addCar = () => {
        props.saveCar(car)
        handleClose()
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add new car
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New car</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        defaultValue={car.brand}
                        onChange={e => inputChanged(e)}
                        label="Brand"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="model"
                        defaultValue={car.model}
                        label="Model"
                        onChange={e => inputChanged(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="color"
                        defaultValue={car.color}
                        label="Color"
                        onChange={e => inputChanged(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="year"
                        defaultValue={car.year}
                        label="Year"
                        onChange={e => inputChanged(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="fuel"
                        defaultValue={car.fuel}
                        label="Fuel"
                        onChange={e => inputChanged(e)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="price"
                        defaultValue={car.price}
                        label="Price"
                        onChange={e => inputChanged(e)}
                        fullWidth
                    />
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addCar}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}