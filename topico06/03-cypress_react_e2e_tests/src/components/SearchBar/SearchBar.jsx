import { useEffect, useRef } from "react"
import "./searchBar.css"

export const SearchBar = ({ filterFunction, disabled }) => {

    //useState
    // const [searchInputState, setsearchInputState] = useState('')

    //useRef
    const searchInputRef = useRef(null)

    useEffect(() => {
        !disabled && filterFunction('')
    }, [disabled])

    //useState
    //  useEffect(() => { 
    //     filterFunction(searchInputState)
    //  }, [searchInputState])

    console.log('renderiza searchBar')

    //useState
    //  console.log(searchInputState)

    //useRef
    console.log(searchInputRef.current?.value)

    return (
        <form >
            <div className="search-bar p-[10px] search_bar flex justify-center items-center my-auto mx-0 m-[0_auto]">
                <input className="w-full m-0 max-w-[400px] p-[10px]  rounded-[5px] text-base  border-secondary-highlight  border-2 border-solid disabled:border-red focus:outline-0 focus:p-[9px] focus:border-[3px] focus:border-secondary"
                    type="search"
                    placeholder="Pesquisar produtos"
                    disabled={ !searchInputRef.current?.value && disabled}

                    //useRef
                    ref={searchInputRef}
                    onChange={() => {
                        console.log(searchInputRef.current.value)
                        // Descomentando essa linha forçaremos o re-render mesmo com useRef,
                        //  pois iremos atualizar o estado da listProducts do componente Home 
                        //  gerando também o re-render do serachBar
                        // filterFunction(searchInputRef.current.value)
                    }}

                    //useState
                    // value={searchInputState}
                    // onChange={(e)=>setsearchInputState(e.target.value)}
                    onBlur={() => filterFunction(searchInputRef.current.value)}
                />


                <button
                    className="bg-secondary text-white cursor-pointer text-base ml-2.5 px-5 py-3 rounded-[5px] border-0 hover:bg-primary hover:text-secondary hover:box-border hover:font-bold hover:ml-1.5 active:bg-primary active:scale-95;"
                    onClick={(e) => {
                        e.preventDefault()
                        //useRef
                        filterFunction(searchInputRef.current.value)

                        //useState
                        // filterFunction(searchInputState)

                    }}
                > Pesquisar</button>
            </div>
        </form>
    )
}
