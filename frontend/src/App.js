import './App.css';
import {useState} from "react";
import MainLayout from "./layouts/MainLayout";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import TabPanel from "./components/tabs/TabPanel";

import CurrencyTable from "./components/CurrencyTable";
import CurrencyModal from "./components/CurrencyModal";

import {ToastContainer} from "react-toastify";

function App() {
    const [value, setValue] = useState(0)
    const [open, setOpen] = useState(false)
    const [currencies, setCurrencies] = useState([])
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => {
        setOpen(false);
        setValue(0)
    }

    const handleChangePage = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <MainLayout>
            <ToastContainer rtl={true} position="bottom-right" theme="colored" />
            <Sidebar value={value} handleChange={handleChangePage}/>
            <ContentContainer>
                <TabPanel value={value} index={0} >
                    <CurrencyTable currencies={currencies} setCurrencies={setCurrencies}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CurrencyModal open={open} handleModalOpen={handleModalOpen} handleModalClose={handleModalClose}/>
                </TabPanel>
            </ContentContainer>
        </MainLayout>

    );
}

export default App;
