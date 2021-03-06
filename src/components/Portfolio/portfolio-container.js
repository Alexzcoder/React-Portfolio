import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from "./portfolio-item";





export default class PortfolioContainer extends Component {
    
    
    constructor() {

        super();
    
    
        this.handleFilter = this.handleFilter.bind(this);
        

    
        this.state = {
            pageTitle: "Welcome to my page!",
            isLoading: false,
            data: []
                };
       

        

        
      }

      handleFilter(filter){
            this.setState({
                data:this.state.data.filter(item => {
                    return item.category === filter;
                })
            })
      }
      getPortfolioItems(){
        axios.get('https://rodidealalexandru.devcamp.space/portfolio/portfolio_items')
      .then(response => {
       this.setState({
           data: response.data.portfolio_items
       })
      })
      .catch(error => {
        console.log(error);
      })
     
      }
      

      portfolioItems(){
          return this.state.data.map(item => {
              console.log("portfolio items", item)
              return <PortfolioItem  key={item.id}   title = {item.name} url = {item.url} slug = {item.id} />
          })
      }
     componentDidMount(){
        this.getPortfolioItems();
     }
    
    render (){
        if (this.state.isLoading){
            return <div>Loading . . .</div>
        }
        
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick = {() => this.handleFilter("eCommerce")}>eCommerce</button>
                <button onClick = {() => this.handleFilter("Scheduling")}>Scheduling</button>
                <button onClick = {() => this.handleFilter("Enterprise")}>Enterprise</button>

                {this.portfolioItems()}
               

           

            </div>
        );
    }
}