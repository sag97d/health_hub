import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const calculateAge = (dob)=>{
        const today = new Date()
        const birthDate = new Date(dob)

        const age = today.getFullYear() - birthDate.getFullYear()
        return age
    }

    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]


    const slotDateFormat = (slotDate) => {
      const dateArray = slotDate.split('_')
      return dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2]
    }

    const currency = '\u20B9'

    const value = {
        calculateAge, slotDateFormat, currency
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider