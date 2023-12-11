import AppDownload from './AppDownload';
import AutoSlider from './AutoSlider';
import Banner from './Banner';
import Categories from './Categories';
import Footer from './Footer';
import Howit_Works from './How-it-wroks';
import MystrieNews from './MystrieNews';
import MystryCommunity from './Mystry-community';
import Perks from './Perks';
import PersonalDeals from './PersonalDeals';
import RegisterBanner from './RegisterBanner';
import Testimonies from './Testimonies';
import TrendingSlider from './TrendingSlider';
import Trusted_by_Brands from './Trusted_by_Brands';

const Home = () => {
  return (
    <div className="home-comp h-100 d-flex mt-3 flex-column gap-3 gap-md-5">
      <Categories></Categories>
      <TrendingSlider></TrendingSlider>
      <AutoSlider></AutoSlider>
      <PersonalDeals />
      <Banner img={'/genral/person.png'}>
        <>
          <h3 className="mb-4">
            <span>Share your requirements</span> &<br /> get your Estimate within <br />
            <span>4 hrs</span>
          </h3>
          <button className="primary-button">Order Now</button>
        </>
      </Banner>
      <Howit_Works></Howit_Works>
      <Banner img={'/genral/banner-2.png'} marginRight="98px" gradient={true}>
        <>
          <h3 className="mb-4">
            <span>Refer Fellow Professionals</span> <br /> & Earn Referral Benefits <br />
          </h3>
          <button className="primary-button">Refer Now</button>
        </>
      </Banner>
      <RegisterBanner></RegisterBanner>
      <Trusted_by_Brands></Trusted_by_Brands>
      <Perks></Perks>
      <div>
        <MystryCommunity></MystryCommunity>
        <AppDownload></AppDownload>
        <Testimonies></Testimonies>
        <MystrieNews></MystrieNews>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
