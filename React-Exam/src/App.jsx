import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddEmp from "./Page/Add"
import ViewEmp from "./Page/View"
import EditEmp from "./Page/Edit"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddEmp />} />
        <Route path="view" element={<ViewEmp />} />
        <Route path="Edit" element={<EditEmp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App