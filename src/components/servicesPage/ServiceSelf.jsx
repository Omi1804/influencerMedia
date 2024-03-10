import React from "react";
import { Link } from "react-router-dom";
import "./serviceSelf.css";
import {
  servicePoster,
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  service7,
  service8,
  service9,
} from "../../export";

const ServiceSelf = () => {
  return (
    <div className="servicePage">
      <div className="service_HeroHeading">
        <h1 className="heroHeadingText">Services</h1>
        <h1 className="alternateHeroHeading">Services</h1>
        <div className="service_ball"></div>
        <img src={servicePoster} alt="" />
      </div>

      <div className="services_service">
        <div className="service service-1">
          <div className="service-heading">
            <h1>SOCIAL MEDIA HANDLING</h1>
            <div className="line"></div>
          </div>
          <div className="service_content">
            <img src={service1} alt="" />
            <p>
              We at SNACK MEDIA have the know-how and resources to improve the
              social media accounts' metrics. We provide effectively and in
              accordance with your detailed brand voice and the pain points of
              your intended audience.We're the social media maestros who know
              how to create posts that make your followers drool. From
              mouthwatering visuals to engaging captions, we'll craft a social
              media presence that makes your brand the talk of the town. It's
              like having a personal chef for your online presence – except we
              serve up likes, comments, and shares instead of actual food.
            </p>
          </div>
        </div>
        <div className="service service-2">
          <div className="service-heading">
            <h1>PR GIFTING AND BRANDING</h1>
            <span className="line"></span>
          </div>
          <div className="service_content">
            <p>
              We've mastered the art of the perfect gift – a carefully curated
              package that makes influencers and media go "wow!" We'll help you
              create an irresistible brand identity that stands out in a sea of
              competitors. It's like giving your brand a makeover that turns
              heads and leaves a lasting impression.From personalized packages
              to tailored experiences, we craft memorable moments that leave a
              lasting impression and establish your brand as a go-to among
              influencers, journalists, and key industry figures.
            </p>
            <img src={service2} alt="" />
          </div>
        </div>
        <div className="service service-3">
          <div className="service-heading">
            <h1>INFLUENCER CAMPAIGN</h1>
            <span className="line"></span>
          </div>
          <div className="service_content">
            <img src={service3} alt="" />
            <p>
              We at SNACK MEDIA have the know-how and resources to improve the
              social media accounts' metrics. We provide effectively and in
              accordance with your detailed brand voice and the pain points of
              your intended audience.We're the social media maestros who know
              how to create posts that make your followers drool. From
              mouthwatering visuals to engaging captions, we'll craft a social
              media presence that makes your brand the talk of the town. It's
              like having a personal chef for your online presence – except we
              serve up likes, comments, and shares instead of actual food.
            </p>
          </div>
        </div>
        <div className="service service-4">
          <div className="service-heading">
            <h1>INFLUENCER MANAGEMENT</h1>
            <span className="line"></span>
          </div>
          <div className="service_content">
            <p>
              We go beyond connecting influencers with brands. As their ultimate
              backstage managers, we work closely with handpicked influencers to
              cultivate their personal brand and elevate their success. With a
              personalized roadmap, we guide them towards stardom through
              strategic collaborations and brand partnerships. Our fairy
              godmother touch secures exciting deals that make their followers
              go wild. We open doors to exclusive opportunities and turn
              influencers into sought-after stars. Our service goes beyond the
              ordinary. We nurture talent, provide mentorship, and create a
              platform for influencers to shine like bright stars in the social
              media galaxy. Together, we'll embark on a thrilling journey filled
              with fame, recognition, and a sprinkle of stardust. At SNACK
              MEDIA, we're not just influencers' best friends – we're their
              partners in conquering the influencer universe. Let's make their
              dreams come true, one brand collaboration at a time!
            </p>
            <img src={service4} alt="" />
          </div>
        </div>
        <div className="service service-5">
          <div className="service-heading">
            <h1>REVIEWS AND RATINGS</h1>
            <span className="line"></span>
          </div>
          <div className="service_content">
            <img src={service5} alt="" />
            <p>
              Looking to turn browsers into buyers with ecommerce reviews and
              ratings that pack a punch? We work our influencer wizardry to
              boost your ecommerce presence and turn skeptics into loyal
              customers.We can relieve you of the burden of worrying about
              accurate and in-depth reviews on sites like Amazon, Flipkart,
              Nykaa, Myntra, and many more by selecting the appropriate
              influencers and customers to review a product.
            </p>
          </div>
        </div>
        <div className="service service-6">
          <div className="service-heading">
            <h1>CELEB ENDORSEMENT & PRODUCTION SHOOT</h1>
            <span className="line"></span>
          </div>
          <div className="service_content">
            <p>
              When discussing celeb endorsements, the phrase "resonating" has
              the strongest emphasis. We will handle ideation and scripting to
              make sure your message is well-heard and resonates with the
              audience since we have a crew of juggernauts that will go above
              and beyond to truly grasp your brand idea.But wait, there's more!
              We're not just about virtual delights—we're masters of bringing
              dreams to life through our state-of-the-art video production
              studio.
            </p>
            <img src={service6} alt="" />
          </div>
        </div>
        <div className="service service-7">
          <div className="service-heading">
            <h1>EVENTS AND LAUNCHES</h1>
            <span className="line"></span>
          </div>
          <div className="service_content">
            <img src={service7} alt="" />
            <p>
              Unleash the full potential of your events and launches with the
              expertise of influencer marketing. We understand the crucial role
              that strategic planning and influencer collaborations play in
              creating unforgettable experiences. From concept to execution, we
              specialise in crafting immersive events that captivate your
              audience and generate significant buzz. Leveraging our extensive
              network of influencers, we strategically align your brand with
              industry tastemakers, amplifying your reach and enhancing your
              brand's reputation. With meticulous attention to detail and a keen
              eye for creating memorable moments, our agency ensures that your
              events and launches leave a lasting impression, driving
              engagement, and setting the stage for continued success.
            </p>
          </div>
        </div>
        <div className="service service-8">
          <div className="service-heading">
            <h1>CONTENT AMPLIFICATION</h1>
            <span className="line"></span>
          </div>
          <div className="service_content">
            <p>
              Hungry for content amplification that sets social media on fire?
              We've got you covered. Our team of social savants knows how to
              whip up a storm of engagement, turning heads and capturing hearts
              with each scroll. Whether it is an existing piece of content that
              needs to be enhanced or brand-new content that has to be created
              from scratch. We amplify your brand's voice, ensuring it reaches
              the right audience and resonates like the crunch of a perfectly
              timed snack.
            </p>
            <img src={service8} alt="" />
          </div>
        </div>
        <div className="service service-9">
          <div className="service-heading">
            <h1>CAMPAIGN STRATEGY </h1>
            <span className="line"></span>
          </div>
          <div className="service_content">
            <img src={service9} alt="" />
            <p>
              Collaboration is our secret sauce. We're not just your agency;
              we're your partners in success. We listen to your goals, blend in
              our expertise, and together, we create a mouthwatering strategy
              that will make your brand the talk of the town.. Our expertise
              spans across various domains, from social media management to
              influencer marketing and beyond. We understand the vital role of a
              well-thought-out strategy in achieving your marketing objectives.
              With us, you're not just a client—you're an integral ingredient in
              our recipe for greatness.Whether you're a startup with limited
              resources or an established brand looking for an extensive
              influencer marketing campaign, we've got you covered. Our
              dedicated team of experts crafts customised strategies that align
              with your budget, ensuring maximum impact and value.
            </p>
          </div>
        </div>
      </div>

      <div className="servicePage_buttons">
        <Link to="/">
          <button className="Service_button">Back</button>
        </Link>
        <Link to="/form">
          <button className="Service_button">Connect Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceSelf;
