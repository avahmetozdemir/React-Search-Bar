import {useContext,createContext,useState,useEffect, useCallback} from 'react'
import axios from 'axios'
const AppContext = createContext()



const AppProvider = ({children})=> {

    const [data, setData] = useState([]);
    const [searchWord,setSearchWord] = useState('')
    const [wordEntered, setWordEntered] = useState("");
    const [showData,setShowData] = useState([])

  const fetchData = async ()=> {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
  }
  
    useEffect(()=> {
        fetchData()
    },[])

     useEffect(()=> {
         const filteredProducts = data.filter((product) => {
             return product.title.toLowerCase().includes(wordEntered.toLowerCase());
           });
      
           setShowData(filteredProducts);
     },[wordEntered,JSON.stringify(data)])

    //  const filteredProducts = useCallback(()=>data.filter((product) => {
    //      return product.title.toLowerCase().includes(wordEntered.toLowerCase());
    //    }), [searchWord])




    return (
        <AppContext.Provider value={{data, setData,wordEntered,setWordEntered,setSearchWord,showData}}>
             {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export {AppContext,AppProvider}