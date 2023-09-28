import { useState } from 'react';
import {TextField, Button} from '@mui/material';

const CreateCurrencyForm = () => {
    const [formData, setFormData] = useState({
        currency_name: "",
        creator_email: "",
        content: ""
    })

    const handleFormData = (e) => {
         setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                onChange={handleFormData}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="currency_name"
                label="نام ارز"
                name="currency_name"
                autoFocus
            />
            <TextField
                onChange={handleFormData}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="creator_email"
                label="ایمیل"
                type="email"
                id="creator_email"
            />
            <TextField
                onChange={handleFormData}
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="content"
                label="محتوا"
                type="text"
                id="content"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                ثبت
            </Button>
        </form>
    );
};

export default CreateCurrencyForm;