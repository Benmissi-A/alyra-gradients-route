import { useEffect, useState } from "react"
//import { gradients as list } from "../gradients"
import { ReactComponent as SvgToggle } from "bootstrap-icons/icons/arrow-clockwise.svg"
import { ReactComponent as Next } from "bootstrap-icons/icons/arrow-right.svg"
import { ReactComponent as Prev } from "bootstrap-icons/icons/arrow-left.svg"
import { useGradients } from "../context/GratientsContext"

const GradientsHeader = (props) => {
  const { children } = props
  const {gradients: list} = useGradients()
  const length = list.length

  const chooseGradient = () => Math.floor(Math.random() * length)

  const [randomGradient, setRandomGradient] = useState(chooseGradient)
  const handleReloadClick = () => {
    setRandomGradient(chooseGradient)
  }
  const handleNextClick = () => {
    setRandomGradient(randomGradient === length - 1 ? 0 : randomGradient + 1)
  }
  const handlePrevClick = () => {
    setRandomGradient(randomGradient === 0 ? length - 1 : randomGradient - 1)
  }

  const style = {
    backgroundImage: `linear-gradient(to right, ${list[randomGradient]?.start}, ${list[randomGradient]?.end})`
  }

  // loading true = background-color: black / loading false =
  const {loading} = useGradients()
  

  //console.log(uniqueTags)

  useEffect(() => {
    if(loading === false) {
      console.log(list)
    }
  }, [loading, list])

  return (
    <header className="text-center bg-dark text-white py-5 mb-5" style={list.length > 0 ? style : {backgroundColor: 'black'}}>
      {children}
      <button
        aria-label="Clicker pour afficher le dégradé précédant"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handlePrevClick}
      >
        <Prev />
      </button>
      <button
        aria-label="Clicker pour changer le dégradé"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handleReloadClick}
      >
        <SvgToggle />
      </button>
      <button
        aria-label="Clicker pour afficher le dégradé suivant"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handleNextClick}
      >
        <Next />
      </button>
    </header>
  )
}

export default GradientsHeader
