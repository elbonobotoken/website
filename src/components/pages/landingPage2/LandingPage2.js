import React, { useRef, useState, useEffect, useCallback } from "react"
import "./LandingPage.scss"
import {SocialIcon} from "react-social-icons"
import { useSpring, animated } from 'react-spring'
// import { Parallax, ParallaxLayer} from 'react-spring/parallax'

import el1 from "./img/el-bonobo-1.png"
import el2 from "./img/el-bonobo-2.png"
import leafimg1 from "./img/leaf1.svg"
import leafimg2 from "./img/leaf2.svg"
import sunimg from "./img/sun.svg"
import bonobo from "./img/bonobo.png"
import core_v1 from "./img/core_v1.svg"
import core_v2 from "./img/core_v2.svg"
import core_v3 from "./img/core_v3.svg"
import scamometer from "./img/scamometer.svg"
import monkeypair from "./img/monkeypair.svg"
import coins from "./img/coins.svg"
import bonobo_monkey_png from "./img/monkey.png"
import bonobo_face_png from "./img/bonobo_face.png"
import coin_svg from "./img/coin2.svg"
import footerlogo from "./img/footerlogo.svg"
import s12_1 from "./img/s12-1.svg"
import scamscan from "./img/scamscan.png"
import heart from "./img/heart.png"
import calendar_png from "./img/calendar.svg"
import next_png from "./img/next.svg"
import prev_png from "./img/prev.svg"
import logo from "./img/logo.svg"
import team1 from "./img/team1.png"
import team2 from "./img/team2.png"
import team3 from "./img/team3.png"
import team4 from "./img/team4.png"
import { Link } from 'react-scroll'

function LandingPage2() {
  const [menuLeft, setMenu] = useState(-1 * document.body.clientWidth)

  const [numLeft, setNum] = useState(0)
  const [winWidth, setWidth] = useState(document.body.clientWidth)
  const [moveleft, setLeft] = useState(0)

  const moveLeft = () => {
    if (numLeft === 3) {
      return
    }
    var unitLeft =
      winWidth > 767 ? ((14.27 + 2.03) / 100) * winWidth : 0.9 * winWidth
    var val = moveleft - unitLeft
    setLeft(val)
    setNum(numLeft + 1)
  }
  const moveRight = () => {
    if (numLeft === 0) {
      return
    }
    var unitLeft =
      winWidth > 767 ? ((14.27 + 2.03) / 100) * winWidth : 0.9 * winWidth
    var val = moveleft + unitLeft
    setLeft(val)
    setNum(numLeft - 1)
  }

  useEffect(() => {
    function handle() {
      setWidth(document.body.clientWidth)
    }
    window.addEventListener("resize", handle)
  }, [])

  const closeMenu = () => {
    setMenu(-1 * document.body.clientWidth)
  }
  const openMenu = () => {
    setMenu(0)
  }
  const monkeytop = useSpring({ 
    to: { opacity: 1, marginTop: 0 }, 
    from: { opacity: 0, marginTop: -500 },
    config: {duration: 1000}
  })
  const rotate10 = useSpring({ 
    from: { transform: 'rotate(-10deg)'},
    to: { transform: 'rotate(10deg)'},
    delay: 1000,
    loop: {reverse: true},
    config: {duration: 1500}
  })
  const leaf1 = useSpring({
    from: { transform: 'translateY(-50px)'},
    to: { transform: 'translateY(25px)'},
    loop: {reverse: true},
    config: {duration: 2500}
  })
  const leaf2 = useSpring({
    from: { transform: 'translateX(3%)'},
    to: { transform: 'translateX(11%)'},
    loop: {reverse: true},
    config: {duration: 4500}
  })
  const sun = useSpring({
    from: { top: '150%'},
    to: { top: '50%'},
    delay: 3000,
    config: {duration: 3500}
  })
  const coins_ani = useSpring({
    from: { right: '0%'},
    to: { right: '10%'},
    loop:{reverse:true},
    config: {duration: 3500}
  })

  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }))
  const onScroll = useCallback(e => void set({ scroll: e.target.scrollTop / (window.innerHeight) }), [])


  return (
    <div className="main-block">
      <section id="head">
        <div className="menu">
          <img className="logo" src={logo} alt="logo" />
          <span className="menuButton open" onClick={openMenu}>
            ☰
          </span>
          <ul className="menutab">
            <li className="main_tab_pointer">
              <Link
              activeClass="active"
              to="join_el_bonobo"
              spy={true}
              smooth={true}
            >Whitepaper</Link>
            </li>
            <li className="main_tab_pointer"><Link
              activeClass="active"
              to="Roadmap"
              spy={true}
              smooth={true}
            >Roadmap</Link></li>
            <li className="main_tab_pointer"><Link
              activeClass="active"
              to="marketing"
              spy={true}
              smooth={true}
            >Marketing</Link></li>
            <li className="main_tab_pointer"><Link
              activeClass="active"
              to="scamscan"
              spy={true}
              smooth={true}
            >Audit Service</Link></li>
            <li className="main_tab_pointer"><Link
              activeClass="active"
              to="charity"
              spy={true}
              smooth={true}
            >Charity</Link></li>
            <li className="main_tab_pointer"><Link
              activeClass="active"
              to="Tokenomics"
              spy={true}
              smooth={true}
            >Voting</Link></li>
            <li className="main_tab_pointer connect_btn"><Link
              activeClass="active"
              to="team_donation"
              spy={true}
              smooth={true}
            >Connect</Link></li>
            {/* <li className="main_tab_pointer"><div className="dropdown">
              <span className="dropbtn">Swing To</span>

              <div className="dropdown-content">
                <span className="drop_down_links">Rewards</span>
                <span className="drop_down_links">Cross Token Platform</span>
                <span className="drop_down_links">ScamScan</span>
                <span className="drop_down_links">Proof of Marketing</span>
                <span className="drop_down_links"><Link
                  activeClass="active"
                  to="Charity"
                  spy={true}
                  smooth={true}
                >Charity</Link></span>
                <span className="drop_down_links"><Link
                  activeClass="active"
                  to="Dashboard"
                  spy={true}
                  smooth={true}
                >Dashboard</Link></span>
                <span className="drop_down_links">Anti-Whale</span>
                <span className="drop_down_links"><Link
                  activeClass="active"
                  to="NFT"
                  spy={true}
                  smooth={true}
                >Comic NFT</Link></span>
                <span className="drop_down_links"><Link
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                >Team</Link></span>
                <span className="drop_down_links">DAO</span>
              </div>

            </div></li> */}
          </ul>
          <ul className="mobilemenu" style={{ left: menuLeft + "px" }}>
            <li>
              <span className="menuButton" onClick={closeMenu}>
                ✖
              </span>
            </li>
            <li className="main_tab_pointer">
              <Link
              activeClass="active"
              to="join_el_bonobo"
              spy={true}
              smooth={true}
            >Whitepaper</Link>
            </li>
            <li className="main_tab_pointer"><Link
              activeClass="active"
              to="Roadmap"
              spy={true}
              smooth={true}
            >Roadmap</Link></li>
            <li className="main_tab_pointer"><Link
              activeClass="active"
              to="marketing"
              spy={true}
              smooth={true}
            >Marketing</Link></li>
            <li className="main_tab_pointer"><Link
              activeClass="active"
              to="scamscan"
              spy={true}
              smooth={true}
            >Audit Service</Link></li>
            <li className="main_tab_pointer"><Link
              activeClass="active"
              to="charity"
              spy={true}
              smooth={true}
            >Charity</Link></li>
            <li className="main_tab_pointer"><Link
              activeClass="active"
              to="Tokenomics"
              spy={true}
              smooth={true}
            >Voting</Link></li>
            <li className="main_tab_pointer"><Link
              activeClass="active"
              to="team_donation"
              spy={true}
              smooth={true}
            >Connect</Link></li>
          </ul>
        </div>
      </section>
      <section id="crypto_jungle">
        <div className="content">
          <div className="bonobo-content-card d-flex align-items-center">
            <div className="col-md-9 float-left">
              <div className="bonobo-heading" id="BONOBO">
                <h1 className="linear_gradient_font_color">Welcome To the <span className="linear_gradient_font_color2">Crypto</span> Jungle</h1>
              </div>
              <div className="bonobo-content">
                <h5>The world's <span>1st</span> community driven <span>Marketing Launchpad</span> and Decentralized Auditing</h5>
                <br></br>
                <SocialIcon url="https://twitter.com/ElBonoboCoin" network="twitter" bgColor="#015f4d" fgColor="#fff"/>
                <SocialIcon url="#" network="reddit" bgColor="#015f4d" fgColor="#fff"/>
                <SocialIcon url="https://t.me/elbonobo_directory" network="telegram" bgColor="#015f4d" fgColor="#fff"/>
                <SocialIcon url="#" network="medium" bgColor="#015f4d" fgColor="#fff"/>
                <SocialIcon url="https://discord.gg/cpyHNheF4Y" network="discord" bgColor="#015f4d" fgColor="#fff"/>
                <SocialIcon url="#" network="facebook" bgColor="#015f4d" fgColor="#fff"/>
                <SocialIcon url="https://instagram.com/ElBonoboCoin" network="instagram" bgColor="#015f4d" fgColor="#fff"/>
                <SocialIcon url="#" network="youtube" bgColor="#015f4d" fgColor="#fff"/>
                <SocialIcon url="#" network="tiktok" bgColor="#015f4d" fgColor="#fff"/>
                <SocialIcon url="#" network="github" bgColor="#015f4d" fgColor="#fff"/>
              </div>
              <div className="bonobo-button" >
                <button className="green-btn">ScamScan <span><img src={scamscan}></img></span></button>
                <img className="coins" src={coins} alt="coins" />
                <button className="yellow-btn">Ape</button>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <animated.div style={monkeytop}>
                <animated.div style={rotate10}>
                  <img className="bonobo" src={bonobo} alt="bonobo" />
                </animated.div>
              </animated.div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="join_el_bonobo">
        <div className="s2-bonobo-content-card float-left">
          <div className="content">
            <h2 className="">What is El Bonobo?</h2>
            <p>BONOBO coin is fun and bold attempt to use cryptocurrency to improve the lives of both humans and our fellow inhabitants on earth, in a decentralized manner. It is also a social experiment that will test the ability of  Distributed Anonymous Organizations (DAO) to perform  their remits more effectively than traditional organizations.</p>
            
            <h2>Join us!</h2>
            <ul>
              <li>We’re building a vibrant community that is fun and comes together to improve their lives and those of others, whilst working to raise awareness and funds for wildlife conservation.</li>
              <li>A professional and talented team committed to making this vision a reality.</li>
              <li>Transparent technology implemented using best practice. There can be no “rug-pull”.</li>
              <li>Tokenomics that make sense.</li>
            </ul>
            <p>There future of El Bonobo is full DAO. Creating an effective conservation structure is the aim.</p>
            <p>And the fun doesn’t end there. A meme maker package is available for creativity and humor. There is also a comic strip competition where the winning strips are turned into NFT for the creator to gain more rewards. Moreover, adventure and travel awaits those that want to visit conservation efforts around the world.</p>
           
          </div>
        </div>
        <div className="imgs float-left">
          <img src={el1} width="50%" alt="g6" />
          <img src={el2} width="50%" alt="g7" />
          <div className="leafsun">
            <animated.div style={leaf1} className="leaf1">
              <img src={leafimg1}/>
            </animated.div>
            <animated.div style={leaf2} className="leaf2">
              <img src={leafimg2} />
            </animated.div>
              
            <div onScroll={onScroll}>
              <animated.div style={sun} className="sun">
                <img src={sunimg}/>
              </animated.div>
            </div>
            
          </div>
        </div>
      </section>

      <div id="marketing">
        <div className="content d-flex align-items-end">
          <div className="col-md-5 float-left">
            <h2 className="heading">Be a part of our Marketing Community</h2>
            <p>Start making money and benefits from our reward system</p>
          </div>
          <div className="col-md-3 text-center">
            <button className="green-btn">Join</button>
          </div>
          <div className="col-md-4 text-center">
            <img src={s12_1} alt="" />
          </div>
        </div>
      </div>
      
      <section id="core_values">
        <div className="content">
          <div className="s3-bonobo-heading-block">
            <h2 className="">Core values</h2>
          </div>
          <div className="s3-bonobo-main-block d-flex">
            <div className="card text-center">
              <div className="card-svg">
                <img
                  src={core_v1}
                  className="heart-img"
                  alt="heart_vector"
                />
              </div>
              <div className="card-heading"><span>Distributed</span></div>
              <div className="card-content">
                <p>Earn rewards by participating in ScamScan and Distributed Marketing and more. Community building by transcending the value of the platform through positive performance. </p>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-svg">
                <img
                  className="handshake-img"
                  src={core_v2}
                  alt="handshake_vector"
                />
              </div>
              <div className="card-heading">
                <span>Democratic</span>
              </div>
              <div className="card-content">
                <p>Building towards a fully Decentralized Autonomous Organization with fair participation equity.  No owners, merit based curation and platform evolution on demand.</p>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-svg">
                <img src={core_v3} className="idea-img" alt="idea_vector" />
              </div>
              <div className="card-heading">
                <span>Transparency</span>
              </div>
              <div className="card-content">
                <p>Scalability requires transparency in all aspects of the platform. Accounting, decision making, open source code and open knowledge. This is the long term commitment towards a sustainable future.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div id="scamscan">
        <div className="content d-flex align-items-end">
          <div className="col-md-5 float-left">
            <h2 className="heading">ScamScan</h2>
            <p>A decentralized audit service</p>
            <h5>The best results of an audit service is, if you have the community involved. Swarm intelligence. Our audit service is free.</h5>
          </div>
          <div className="col-md-3 text-center">
            <button className="green-btn">Join</button>
          </div>
          <div className="col-md-4 text-center">
            <img src={scamometer} alt="" />
          </div>
        </div>
      </div>

      <section id="Tokenomics">
        <div className="content">
          <h2>Tokenomics</h2>
          <div className="s5-bonobo-content-main-block d-flex align-items-center">
            <div className="col-md-6 block-1">
              <div className="card-1">
                <div>
                  <strong>10 %</strong>
                  <span className="c">Transaction Fee (TX)</span>
                </div>
                <div>
                  <strong>3 %</strong>
                  <span className="c1">auto distributed among holders</span>
                </div>
                <div>
                  <strong>3%</strong>
                  <span className="c1">Community Reward.</span>
                </div>
                <div>
                  <strong>2 %</strong>
                  <span className="c1">Burned</span>
                </div>
                <div>
                  <strong>1 %</strong>
                  <span className="c1">Wildlife Conservation Fund.</span>
                </div>
              </div>
              <br></br>
              <div className="card-2 ">
                  <div className="card-body text-center">
                    <img src={coin_svg} alt="coin_svg" />
                    <h5>Anti-Whale Measures</h5>
                    <p>Transfers more than 0.5% (current ratio) of the total supply will be rejected. As the total supply grows, this ratio will be reduced. Deposit or withdraw tokens to the farms will not be subject to this restriction.</p>
                  </div>
                </div>
            </div>
            <div className="col-md-6 block-2">
              <div className="bonobo-head-svg-block">
                <img className="face" src={bonobo_face_png} alt="bonobo_face" />
                <img
                  className="monkey"
                  src={bonobo_monkey_png}
                  alt="bonobo_monkey"
                />
              </div>
              <div className="card-1">
                <h5>Total Supply - <span>100% <br></br>7,900,000,000</span> Token</h5>
                <h6>Airdrop - <span>20% <br></br>1,580,000,000</span> Token</h6>
                <h6>Public Sale - <span>62.56% <br></br> 4,942,240,000</span> Token</h6>
                <h6>Liquidity - <span>15.64% <br></br> 1,235,560,000</span> Token</h6>
                <h6>Unicrypt Fee - <span>1.8% <br></br> 142,200,000</span> Token</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="Bonobo">
        <div className="content">
          <h2><span>How to buy El BONOBO's</span> 
            <animated.div style={coins_ani} className="coins">
              <img src={coins} alt="coins" />
            </animated.div>
          </h2>
          <div className="bonobo-content-block">
            <div className="card step-1 col-4">
              <div className="child-card c1">
                <div className="step step-num-1">
                  <div>
                    <span>step</span>
                    <strong>1</strong>
                  </div>
                </div>
                <div className="step-heading">
                  Download MetaMask or use‍ an existing wallet‍
                </div>
                <div className="step-content">
                  Head to <a href="metamask.io">metamask.io</a> and download
                  their wallet to your phone or chrome/firefox browser.
                </div>
              </div>
            </div>
            <div className="card step-2 col-4">
              <div className="child-card c2">
                <div className="step step-num-2">
                  <div>
                    <span>step</span>
                    <strong>2</strong>
                  </div>
                </div>
                <div className="step-heading">Go to pancakeswap.finance ‍</div>
                <div className="step-content">
                  PancakeSwap is where you’ll be performing the swap of your
                  current tokens to BONOBO
                </div>
              </div>
            </div>
            <div className="card step-3 col-4">
              <div className="child-card c3">
                <div className="step step-num-3">
                  <div>
                    <span>step</span>
                    <strong>3</strong>
                  </div>
                </div>
                <div className="step-heading">
                  <span>Get to</span>
                  <br />
                  <span>the trade screen‍</span>
                </div>
                <div className="step-content">
                  Click “Connect” at the top right of the screen, and then
                  navigate to “Trade” on the left sidebar.
                </div>
              </div>
            </div>
            <div className="card step-4 col-4">
              <div className="child-card c4">
                <div className="step step-num-4">
                  <div>
                    <span>step</span>
                    <strong>4</strong>
                  </div>
                </div>
                <div className="step-heading">Select the BONOBO token‍</div>
                <div className="step-content">
                  Click on the “Select a Currency” button, and enter the BONOBO
                  token contract
                </div>
              </div>
            </div>
            <div className="card step-5 col-4">
              <div className="child-card c5">
                <div className="step step-num-5">
                  <div>
                    <span>step</span>
                    <strong>5</strong>
                  </div>
                </div>
                <div className="step-heading">Adjust your slippage to 13%</div>
                <div className="step-content">
                  Click “Settings” at the top right, and adjust your slippage to
                  13%(sometimes it may be a bit more, depending on how much
                  demand there is).
                </div>
              </div>
            </div>
            <div className="card step-6 col-4">
              <div className="child-card c6">
                <div className="step step-num-6">
                  <div>
                    <span>step</span>
                    <strong>6</strong>
                  </div>
                </div>
                <div className="step-heading">
                  Swap and swing into the community
                </div>
                <div className="step-content">
                  <p>Enter the amount you want to buy and swap away!</p>
                  <p>Remember to have enough BNB for gas fees!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="Roadmap">
        <div className="content">
          <h2>Roadmap</h2>

          <div className="content-card-blocks row">
            <div className="content-card-block-1 col-6">
              <div className="content-block-1-card-1 card">
                <div>
                  <div>Upcoming</div>
                  <ul>
                    <li>Community</li>
                    <li>Launch ScamScan Ecosystem</li>
                    <li>Setup Marketing Ecosystem</li>
                  </ul>
                </div>
              </div>
              <div className="content-block-1-card-2 card">
                <div>
                  <div>Upcoming</div>
                  <ul>
                    <li>Add El Bonobo Team members from community</li>
                    <li>Release Bonobo easy meme | comic maker Ai & PSD</li>
                    <li>Start El Bonobo’s Adventures Comic Strip competition</li>
                  </ul>
                </div>
              </div>
              <div className="content-block-1-card-3 card">
                <div>
                  <div>Upcoming</div>
                  <ul>
                    <li>Finalize DAO smart contracts with community</li>
                    <li>Semi DAO new developer participation</li>
                    <li>First ticket to meet El Bonobo’s family in the DRC</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-card-block-2 col-6">
              <div className="content-block-2-card-1 card">
                <div>
                  <div style={{backgroundColor: '#fccf00'}}>Start</div>
                  <ul>
                    <li>El Bonobo Token Launch Website and Social Media</li>
                    <li>Setup ScamScan enviroment</li>
                    <li>Setup vote.elbonobo.com Snapshot enviroment</li>
                    <li>Setup Marketing enviroment</li>
                  </ul>
                </div>
              </div>
              <div className="content-block-2-card-2 card">
                <div>
                  <div>Upcoming</div>
                  <ul>
                    <li>Introduce El Bonobo’s family</li>
                    <li>Pool Conservation Ideas from community</li>
                    <li>New listing locations</li>
                    <li>NFT El Bonobo’s Adventures Comic Strips</li>
                  </ul>
                </div>
              </div>
              <div className="content-block-2-card-3 card">
                <div>
                  <div>Upcoming</div>
                  <ul>
                    <li>Doxing. Team reveal</li>
                    <li>Define DAO smart agreements</li>
                    <li>Audit bonobo conservation and rescue missions</li>
                    <li>Enhance community and conservation engagement</li>
                  </ul>
                </div>
              </div>
              <div className="content-block-2-card-4 card">
                <div>
                  <div>Upcoming</div>
                  <ul>
                    <li>Semi DAO review | Audit</li>
                    <li>Full DAO | All power goes to community</li>
                    <li>Anoint El Bonobo as new King on our Planet of Apes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="milestones_ticker">
        <div className="content">
            <h2>Milestones Ticker</h2>
          <div className="heading text-center">
            <p>
              We implemented a concesus to visualize our Community Effort to
              push elbonobo all over the internet (mark please update)
            </p>
          </div>
          <div className="card-flow">
            <div className="card-section" style={{ left: moveleft + "px" }}>
              <div className="card">
                <div className="cards-header">
                  <div className="d-flex justify-content-start text-center">
                    <img src={calendar_png} alt="" />
                    <span>20 May, 2020</span>
                  </div>
                </div>
                <div className="cards-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus malesuada iaculis bibendum
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="cards-header">
                  <div className="d-flex justify-content-start text-center">
                    <img src={calendar_png} alt="" />
                    <span>20 May, 2020</span>
                  </div>
                </div>
                <div className="cards-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus malesuada iaculis bibendum
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="cards-header">
                  <div className="d-flex justify-content-start text-center">
                    <img src={calendar_png} alt="" />
                    <span>20 May, 2020</span>
                  </div>
                </div>
                <div className="cards-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus malesuada iaculis bibendum
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="cards-header">
                  <div className="d-flex justify-content-start text-center">
                    <img src={calendar_png} alt="" />
                    <span>20 May, 2020</span>
                  </div>
                </div>
                <div className="cards-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus malesuada iaculis bibendum
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="cards-header">
                  <div className="d-flex justify-content-start text-center">
                    <img src={calendar_png} alt="" />
                    <span>20 May, 2020</span>
                  </div>
                </div>
                <div className="cards-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus malesuada iaculis bibendum
                  </p>
                </div>
                <div className={`${numLeft === 0 ? "overlay" : ""}`}></div>
              </div>
              <div className="card">
                <div className="cards-header">
                  <div className="d-flex justify-content-start text-center">
                    <img src={calendar_png} alt="" />
                    <span>20 May, 2020</span>
                  </div>
                </div>
                <div className="cards-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus malesuada iaculis bibendum
                  </p>
                </div>
                <div className={`${numLeft === 1 ? "overlay" : ""}`}></div>
              </div>
              <div className="card">
                <div className="cards-header">
                  <div className="d-flex justify-content-start text-center">
                    <img src={calendar_png} alt="" />
                    <span>20 May, 2020</span>
                  </div>
                </div>
                <div className="cards-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus malesuada iaculis bibendum
                  </p>
                </div>
                <div className={`${numLeft === 2 ? "overlay" : ""}`}></div>
              </div>
              <div className="card">
                <div className="cards-header">
                  <div className="d-flex justify-content-start text-center">
                    <img src={calendar_png} alt="" />
                    <span>20 May, 2020</span>
                  </div>
                </div>
                <div className="cards-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus malesuada iaculis bibendum
                  </p>
                </div>
                <div className={`${numLeft === 3 ? "overlay" : ""}`}></div>
              </div>
            </div>
          </div>
          <div className="btns">
            <img
              className={`${numLeft === 0 ? "greenbtn" : "yellowbtn"}`}
              src={prev_png}
              alt=""
              onClick={moveRight}
            />
            <img
              className={`${numLeft === 3 ? "greenbtn" : "yellowbtn"}`}
              src={next_png}
              alt=""
              onClick={moveLeft}
            />
          </div>
        </div>
      </section>
      
      <div id="charity">
        <div className="content d-flex align-items-center">
          <div className="col-md-4 py-2">
            <h2 className="heading">Charity <img src={heart} style={{width: '50px'}} /></h2>
            <h5 className="py-2">1% tax fee  of every transaction will be donated to a charity you vote for.</h5>
            <button className="green-btn">Info</button>
          </div>
          <div className="col-md-4 text-center  py-2">
            <p>For Bonobo X Foundation</p>
            <img className="monkeys" src={monkeypair} alt="" />
          </div>
          <div className="col-md-4 charity_wallet py-2">
            <p>Wallet</p>
            <button className="green-btn"><b>USD</b> Received</button>
            <br></br>
            <br></br>
            <button className="green-btn"><b>USD</b> Donated</button>
          </div>
        </div>
      </div>

      <section id="team">
        <div className="content d-flex">
          <div className="col-md-4 s13-bonobo-content-card">
              <h2>Team</h2>
              <p><strong>About</strong></p>
              <p>We are a team of independent, hardworking entrepreneurs from different expertise.</p>
              <p>Who have no fear of pushing technological boundaries and transforming knowledge into reality. We are goal oriented, team centered, and non egocentric.</p>
              <p><strong>Our KODEX</strong></p>
              <ul>
                <li>Be transparent</li>
                <li>Community first</li>
                <li>Democratic thinking</li>
                <li>Open Source</li>
                <li>Open Knowledge</li>
                <li>Share and caring</li>
                <li>Education first</li>
                <li>Decentralized Thinking</li>
                <li>Distributed Mindest</li>
              </ul>
              <button className="yellow-btn">continue...</button>
          </div>
          <div className="col-md-8 s13-img-block">
            <div className="fline">
              <img src={team1} alt="" />
              <p>The Developer</p>
            </div>
            <div>
              <img src={team2} alt="" />
              <p>The Campaign Manager and Auditor</p>
            </div>
            <div className="sline">
              <img src={team3} alt="" />
              <p>The Architect and Researcher</p>
            </div>
            <div className="sline">
              <img src={team4} alt="" />
              <p>You!</p>
              <button className="yellow-btn" style={{marginLeft: '5vw'}}>Join</button>
            </div>
          </div>
        </div>
      </section>
      
      <div id="team_donation">
        <div className="content d-flex align-items-center">
          <div className="col-md-6 py-2 px-5">
            <h2 className="heading">Team Donation</h2>
            <h5 className="py-2">We welcome everyone to contribute to the El Bonobo Core Team. Public Donation means for us public transparency. We will publish any spend. (mark rewrite)</h5>
            <img src={coins} alt="" />
          </div>
          <div className="col-md-6 charity_wallet py-2 px-5">
            <button className="green-btn">Donate</button>
            <br></br>
            <br></br>
            <button className="white-btn"><b>USD</b> Received</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="content d-flex">
          <div className="col-md-6 media-block">
            <img src={footerlogo} alt="footer logo"></img>
            <p>El Bonobo is as community driven, decentralized Marketing Launchpad and ScamScan Audit Service.</p>
            <SocialIcon url="https://twitter.com/ElBonoboCoin" network="twitter" bgColor="#fff" fgColor="#000"/>
            <SocialIcon url="#" network="reddit" bgColor="#fff" fgColor="#000"/>
            <SocialIcon url="https://t.me/elbonobo_directory" network="telegram" bgColor="#fff" fgColor="#000"/>
            <SocialIcon url="#" network="medium" bgColor="#fff" fgColor="#000"/>
            <SocialIcon url="https://discord.gg/cpyHNheF4Y" network="discord" bgColor="#fff" fgColor="#000"/>
            <SocialIcon url="#" network="facebook" bgColor="#fff" fgColor="#000"/>
            <SocialIcon url="https://instagram.com/ElBonoboCoin" network="instagram" bgColor="#fff" fgColor="#000"/>
            <SocialIcon url="#" network="youtube" bgColor="#fff" fgColor="#000"/>
            <SocialIcon url="#" network="tiktok" bgColor="#fff" fgColor="#000"/>
            <SocialIcon url="#" network="github" bgColor="#fff" fgColor="#000"/>
          </div>
          <div className="col-md-6 email-block">
            <div className="row">
              <div className="col-md-4">
                <p>General</p>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <p>Resources</p>
                <ul>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Papers</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <p>Thanksto</p>
                <ul>
                  <li><a href="#">Hackmd</a></li>
                  <li><a href="#">Binance</a></li>
                  <li><a href="#">Cosmos Network</a></li>
                  <li><a href="#">Figma</a></li>
                  <li><a href="#">Webtorent</a></li>
                  <li><a href="#">Fleek</a></li>
                </ul>
                <button className="yellow-btn">more...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LandingPage2
