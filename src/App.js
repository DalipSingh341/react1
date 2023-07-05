
import './App.css';
import smart from './assets/svg/smart.svg';
import proof from './assets/svg/proof.svg';
import nft from './assets/svg/nft.svg';
import support from './assets/svg/support.svg';
import circle from './assets/svg/circle.svg';


function App() {
  return (
    <div className="body">
        <div className="all_box ">
          <div className="relative">
         <img className="circle_position1" src={circle} alt="circle" /> 
        <div className="box_1 box_2 ">
        <img src={smart} alt="smart"/>
        <h2 className="smart">Smart Contract </h2>
        <p className="para1">Eu faucibus libero leo, malesuada justo, tortor pellentesque quis sit. Dui viverra at odio sodales duis integer rhoncus pulvinar. Commodo massa aliquam.</p>
      </div>
      </div>
        <div className="relative">
          <img className="circle_position2" src={circle} alt="circle" />
           <div className="box_1 box_2 ">
        <img src={proof} alt="proof"/>
        <h2 className="smart">Proof </h2>
        <p className="para1">Nisl, sed morbi porta orci nunc. Curabitur vitae hendrerit justo ultricies quam vitae pellentesque tellus felis. Elementum tortor quis est morbi ullamcorper. </p>
      </div>
     </div>
        <div className="relative">
          <img className="circle_position3" src={circle} alt="circle" />
          <div className="box_1 box_2 "> 
        <img src={nft} alt="nft"/>
        <h2 className="smart">NFT solutions</h2>
        <p className="para1">Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.</p>
      </div>
       </div>
        <div className="relative">
           <img className="circle_position4" src={circle} alt="circle" />
           <div className="box_1 box_2"> 
        <img src={support} alt="support"/>
        <h2 className="smart">Support</h2>
        <p className="para1">Tellus id et fringilla auctor. Ac viverra ullamcorper nec, senectus at nulla. Metus sem egestas volutpat cras phasellus cursus augue sagittis, enim. Sit et cras.</p>
      </div>
      </div>
      
      </div>
      <div className="container">
          <div className="all_box2 row ">
        <div className="box_1 col_5 box_2 box_3">
          <div className="flex items-center justify_between">
            <h2 className="smart1 ">NFT Holders</h2>
          <h2 className="smart2">70%</h2>
          </div>
          <p className="para2">NFT Holders will earn $TNAT via p2e mechanism.</p>
        </div>
      </div>
    </div>
    </div>

  );
}

export default App;
