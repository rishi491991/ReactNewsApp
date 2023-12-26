import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItems extends Component {
    render() {
        return (
            <>
                 <div className="card" style={{ height: "22rem", color:this.props.mode==='light'?'black':'white', backgroundColor:this.props.mode==='light'?'white':'grey',border:this.props.mode==='dark'?'3px solid black':''}}>
                    <img src={this.props.imgUrl} className="card-img-top" alt="Image of Business news" style={{height:"10rem"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <a href={this.props.url} target='_blank' className="btn btn-primary position-absolute bottom-0 mb-3">Read more</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItems