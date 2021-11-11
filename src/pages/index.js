import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="min-h-screen min-w-full">
    <Seo title="Frontend Mentor | Sunnyside agency landing page"/>
    
    <section className="flex h-96 justify-end w-full">
      
      <StaticImage
        className="object-cover h-full absolute"
        src="../images/image-header.jpg"
        alt="Hero"
      />

      <StaticImage
        className="m-8 left-0 top-0 absolute"
        src="../images/logo.svg"
        alt="Hero"
      />
      <div className="absolute flex items-center">
        <div className="md:flex-row hidden md:block mt-8 top-0 right-0 w-full">
          <a href="#" className="px-4 text-white hover:text-gray-700">About</a>
          <a href="#" className="px-4 text-white hover:text-gray-700">Services</a>
          <a href="#" className="px-4 text-white hover:text-gray-700">Projects</a>
          <a href="#" className="p-4 m-4 rounded-3xl bg-white text-gray-700 uppercase hover:bg-gray-700 hover:text-white">Contact</a>
        </div>
      </div>


      <div className="absolute h-96 left-0 bottom-0">

      <h1 className="mx-96 uppercase justify-center text-white"> 
      &emsp;  We are Creatives
      </h1>


      <svg className="absolute ml-16 animate-bounce  uppercase justify-center" width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>

      </div>

    
    </section>

    

    <section id="brand"  class="container h-96 p-10 md:py-20 px-0 md:p-10 md:px-0">
      
      <div>
        Transform your brand

        We are a full-service creative agency specializing in helping brands grow fast. 
        Engage your clients through compelling visuals that do most of the marketing for you.

        Learn more
      </div>
      
    </section>


    <section section id="audience"  class="container h-96 mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      Stand out to the right audience

      Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 

      Learn more
    </section>
    
    <section section id="design"  class="container h-96 mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      Graphic design
      Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.

      Photography
      Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
    </section>

    <section section id="photography"  class="container h-96 mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      Client testimonials

      We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
      Emily R.
      Marketing Director
      
      Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
      Thomas S.
      Chief Operating Officer
      
      Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
      Jennie F.
      Business Owner
    </section>
    
    <section section id="skills"  class="container h-96 mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">6</section>
    
    <section section id="skills"  class="container h-96  mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      About
      Services
      Projects
      Contact
    </section>

    <div class="text-center">
      Challenge by <a className="text-purple-800" href="https://www.frontendmentor.io?ref=challenge" >Frontend Mentor</a>. 
      Coded by <a className="text-purple-800" href="https://moalusiportfolio.gtsb.io">Kamogelo Moalusi</a>.
    </div>
  </div>
)

export default IndexPage
