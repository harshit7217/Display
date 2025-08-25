import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default layout