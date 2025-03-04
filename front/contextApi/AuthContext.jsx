import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // const [token,setToken] = useState('')   nevern do this ,as refresh se problem hoga ,can check it **
   const [token, setToken] = useState(localStorage.getItem('token'))    // now no problem with refresh
   const authToken = `Bearer ${token}`     //token automatic get's changed so no problem ??check it


    const storeTokenInLS = (serverToken) => {
      setToken(serverToken)
      return localStorage.setItem("token", serverToken);
    };
  
    let isLoggedIn = !!token ;

    const logOutUser = () =>{
      setToken('')
      return localStorage.removeItem('token')
    }
    
    const [user,setUser] = useState('')
    const [isLoading ,setLoading] = useState(true)
    const userAuthentication = async () =>{
      const response = await fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
          "Authorization":authToken
        }
      })

      if(response.ok) {
        const userData = await response.json()
        setUser(userData)
        setLoading(false)        // set after setting data in user
      }else{
        setLoading(false)          //set for error if happens
      }
    }

    useEffect( () =>{
      userAuthentication()
    },[])           // this is imp then only contact form will get filled automatic without refresh

    const [services , setServices] = useState("")
    const fetchService = async () =>{    
        try {
            const response = await fetch('http://localhost:5000/service',{
              method:'GET'
            })

            if(response.ok){
              const data = await response.json()
              //console.log('data is',data)
             setServices(data)
             
            }
        } catch (error) {
          console.log(`error during service data ${error}`)
        }
    }
    
    useEffect( () =>{
     
      fetchService() 
    },[])

    return (
      <AuthContext.Provider value={{ storeTokenInLS ,logOutUser , isLoggedIn , user ,services ,authToken ,isLoading}}>
        {children}
      </AuthContext.Provider>
    );   //                                  
  };


  export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
      throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
  };
