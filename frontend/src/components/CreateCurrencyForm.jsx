import { useState } from 'react';
import {TextField, Button} from '@mui/material';
import AppService from '../services/AppServices'
 import {toast} from 'react-toastify'


const CreateCurrencyForm = ({handleModalClose}) => {
    const [formData, setFormData] = useState({
        currency_name: "",
        author_email: "",
        content: ""
    })

    const handleFormData = (e) => {
         setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const {data, status} = await AppService.createCurrency(formData)
            console.log("data is: ",data)
            handleModalClose()

            if(status === 201) {
                return toast.success("ارز شما با موفقیت ساخته شد")
            }
        }
        catch (err) {
            handleModalClose()
            toast.error(`ارز با نام ${formData.currency_name} در پایگاه داده موجود است! `)
        }
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
                name="author_email"
                label="ایمیل"
                type="email"
                id="author_email"
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