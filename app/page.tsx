import SwiperSlider from "./components/firstSectionSwiper/swiper";

import PishnahadShegeftAngiz from "@/app/components/pishnahadShegeftAngiz/pishnahadShegeftAngiz";
import JadidTarinHa from "./components/jadidTarinHa/jadidTarinHa";
import PorforoushtarinHa from "./components/porforoushtarinHa/porforoushtarinHa";


const Home = () => {
  return (
    <>
      <SwiperSlider/>
      <PishnahadShegeftAngiz />
      <JadidTarinHa/>
      <PorforoushtarinHa/>
    </>
  )
}

export default Home
