import React from 'react';
import '../../public/css/common.pcss';
import '../../public/css/index.pcss';

class Index extends React.Component {
    render() {
        return (
            <div className="cont">
                <div className="top">
                    <div>这是头部</div>
                    <div>
                        <i className="logo"/>
                    </div>
                    <div className="nav">
                        <a href="/index.html">首页</a> <a href="/shop.html">商城</a>
                    </div>
                </div>
                <div className="index">
                    这是首页
                </div>
                <div className="bottom">
                    这是底部
                </div>
            </div>
        );
    }
}

export default Index;