const pxtorem = require("px2rem-loader");//npm下载包
const path = require("path");
ModuleKind.exports={
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    pxtorem({
                        remUnit:37.5,
                        propList:["*"],
                    })
                ]
            }
        }
    }
}