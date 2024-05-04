import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
        {/* navbar */}
<h1>this main</h1>
        {/* outlet */}
      <Outlet></Outlet>
      {/* footer */}
      
    </div>
  )
}
