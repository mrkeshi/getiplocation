import React from "react";
import SearchBox from "./searchBox";
import Ip from "./ip";
import Details from "./details";
import { Dna } from 'react-loader-spinner'
export default class IpLocation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ip: null,
            isloader: true,
            info: null
        }
    }
    async getIp() {
        const response = (await fetch('https://api.ipify.org?format=json'))
        let isip = (await response.json()).ip
        this.setState((state) => ({
            ...state,
            ip: isip
        }));
        return isip
    }

    async getInfo(ip) {
        const response = await fetch(`http://ipwhois.app/json/${ip}`)
        return await response.json();
    }
    async changeIp(ip) {
        this.setState((state) => {
            return {
                ...state,
                isloader: true,
                ip: ip
            }
        })
        const data = await this.getInfo(ip);
        this.setState((state) => ({
            ...state,
            isloader: false,
            info: data
        }));
    }
    changeIp = this.changeIp.bind(this)

    async componentDidMount() {
        try {
            const ip = await this.getIp();
            const data = await this.getInfo(ip);
            this.setState((state) => ({
                ...state,
                isloader: false,
                info: data
            }));
        } catch (error) {
            console.error("Error fetching IP and/or info:", error);
        }
    }
    render() {
        return <>
            <div className="container">
                {this.state.isloader && <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />}
                {!this.state.isloader && <div>
                    <SearchBox Changer={this.changeIp} />
                    <Ip ip={this.state.ip} />
                    <Details info={this.state.info} />
                </div>
                }
            </div>
        </>
    }
}