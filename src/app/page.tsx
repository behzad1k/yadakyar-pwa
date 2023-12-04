import { fetchData } from '@/app/builder';
import Home from '@/app/home/page';
import HomeHeader from '@/components/header/HomeHeader';
import Nav from "@/components/layout/Nav";
import Splash from '@/components/layout/Splash';

const App = () => {

  return (
    <>
      <HomeHeader />
      <Home />
      <Nav/>
    </>
  )
};

export default App;