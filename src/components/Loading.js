import React, { Component } from 'react'

export class Loading extends Component {
    render() {
        return (
            <>
                <div className='text-center'>
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" ></span>
                    Loading...
                </button>
                </div>
            </>
        )
    }
}



export default Loading