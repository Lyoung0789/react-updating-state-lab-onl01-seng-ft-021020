import React, { Component } from 'react'

export default class YouTubeDebugger extends Component{


    constructor(){
        super()
        this.state = {
            errors: [], 
            user: null, 
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitRate = () => {

        this.setState(previousState => {
            return {
                settings: {
                    ...this.state.settings,
                    bitrate: 12
                }
            }
        },
        () => console.log(this.state.settings.bitrate)
        )
    }

    handleResolution = () => {
        this.setState(previousState => {
            return{
                settings: {
                    ...this.state.settings, 
                    video: {
                        resolution: '720p'
                    }

                }
            }
        }, 
        () => console.log(this.state.settings.video))
    }

    render(){

        return(
            <div>
                <button className="bitrate" onClick = {this.handleBitRate}>Bitrate</button>
    
                <button className="resolution" onClick={this.handleResolution}>Resolution</button>
            </div>
        )
    }
}