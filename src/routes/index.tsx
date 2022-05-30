import {
    Route, Routes,
  } from "react-router-dom";
import CardWrapper from "../components/card/card.wrapper";
import MovieForm from "../components/Form";


const SiteRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<><MovieForm/><CardWrapper/></>} />
            <Route path='/cards' element={<CardWrapper/>} />
        </Routes>
    )
}

export default SiteRoutes;