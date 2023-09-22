import Forms from "./Components/Forms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fillers from "./Components/Fillers";
import CoverPage from "./Components/CoverPage";
import UploadPic from "./Components/UploadPic";
export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Forms/>}/>
          <Route path="/fillers" element={<Fillers/>}/>
          <Route path="/UploadPic" element={<UploadPic/>}/>
          <Route path="/CoverPage" element={<CoverPage/>}/>
        </Routes>
      </BrowserRouter>
        
    </>
    )
    
}
