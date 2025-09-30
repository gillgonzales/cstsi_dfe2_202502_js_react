/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState, useRef  } from "react"
import "./filterBar.css"

const FilterBar = ({filterFunction, disabled}) => {

//useState
const [searchInputState, setSearchInputState] = useState('')

//useRef
//  const searchInputRef = useRef(null)

 useEffect(() => {
    !disabled && filterFunction('')
 } , [disabled])

//useState
 useEffect(() => { 
    filterFunction(searchInputState)
 }, [searchInputState])

 console.log('renderiza FilterBar')

 //useState
 console.log(searchInputState)

 //useRef
//  console.log(searchInputRef.current?.value)

  return (
    <div className="search_bar">
        <input 
            type="search" 
            placeholder="Pesquisar produtos"
            disabled={disabled}
            
            //useRef
            // ref={searchInputRef}
            // onChange={()=>{
            //      console.log(searchInputRef.current.value)
            //     // Descomentando essa linha forçaremos o re-render mesmo com useRef,
            //     //  pois iremos atualizar o estado da listProducts do componente Home 
            //     //  gerando também o re-render do serachBar
            //      filterFunction(searchInputRef.current.value)
            // }}
            
            //useState
            value={searchInputState}
            onChange={(e)=>setSearchInputState(e.target.value)}
            />
        <button
            onClick={() => {
                //useRef
                // filterFunction(searchInputRef.current.value)

                //useState
                filterFunction(searchInputState)

            }}
        > Filtrar</button>
    </div>
  )
}

export default FilterBar