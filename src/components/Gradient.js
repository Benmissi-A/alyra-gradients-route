import GradientTitle from "./GradientTitle"
import GradientPill from "./GradientPill"
import GradientCode from "./GradientCode"
import GradientTags from "./GradientTags"
import {Link,Route} from "react-router-dom"
import GradientFullScreen from "./GradientFullScreen"

const Gradient = ({ colorStart, colorEnd, name, tags }) => {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTags tags={tags} />
          <Link to="/Gradient">
            <a className="btn btn-outline-dark w-100" href="/gradient/5">Plein écran</a>
          </Link>
          <Route path="/gradient">
            <GradientFullScreen />
          </Route>

        
      </div>
    </li>
  )
}

export default Gradient
