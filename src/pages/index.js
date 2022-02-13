import { Link } from "gatsby";
import * as React from "react";
import Header from "../components/header";
import './index.css';
import { Configuration, OpenAIApi } from "openai";


  const IndexPage = () => {
   
   {/*} const runOpenAi = async() => {
      const { Configuration, OpenAIApi } = require("openai");
      const configuration = new Configuration({
        organization: process.env.KEY,
        apiKey:  process.env.KEY,
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.listEngines();
      console.log(response)
    }
    
  runOpenAi()*/}
  
  return (
   <>
    <Header></Header>
    <div className="index-template-wrap">
      <div className='index-content-wrap'>
          <h1>Choose a Template to Get Started</h1>
          <div className="index-link-wrap">
            <Link to='/Singletemplateinput'><h3>single</h3></Link>
            <Link  to='/Multitemplateinput'><h3>multi</h3></Link>
          </div>
      </div>
    </div>
   </>
  )
}

export default IndexPage
