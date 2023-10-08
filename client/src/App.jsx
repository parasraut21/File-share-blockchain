import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import Home from './page/Home.jsx'
import Access from "./components/Access.jsx";
import { createContext } from "react";
import './App.css'
import { getAccount } from "./utils/wallet";
import Main from "./components/Main.jsx";
const context=createContext({});

const App = () => {

  const [account, setAccount] = useState(null);
  const [loading,setLoading] = useState(false);
  const [selectImg,setSelectImg] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);


  


   const hlo= async () => {
      const account = await getAccount();
      setAccount(account);

    }
    useEffect(()=>{
      hlo();
    })

  return (
    <>
    <BrowserRouter>
      <context.Provider value={{account,setAccount,hlo,loading,setLoading,modalOpen,setModalOpen,selectImg,setSelectImg}}>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/access" element={<Access />} />
      </Routes>
      </context.Provider>
    </BrowserRouter>
  
    </>
  )
}

export default App
export {context}
