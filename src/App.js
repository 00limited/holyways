import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./router/Home";
import DetailDonates from "./router/DetailDonates";
import ViewFunds from "./router/ViewFunds";
import FormFunds from "./router/FormFunds";
import RaiseFunds from "./router/RaiseFunds";
import Profiles from "./router/Profiles";
import ModalRegister from "./modals/auth/ModalLogin";
import ModalLogin from "./modals/auth/ModalRegister";
import ModalPayment from "./modals/transaction/ModalPayment";
import ApprovePayment from "./modals/transaction/ApprovePayment";
import NavbarUser from "./components/NavbarUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/raisefund" element={<RaiseFunds />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/detailDonate" element={<DetailDonates />} />
          <Route path="/formFund" element={<FormFunds />} />
          <Route path="/viewfund" element={<ViewFunds />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
