import { NativeModules } from 'react-native';
const umengClient = NativeModules.UmengShare;
var resolveAssetSource = require('../react-native/Libraries/Image/resolveAssetSource');

export default class UmengShare{

     static setAppKey(value){
         //umengClient.setAppKey(value);//android无需代码设置
     }

    static setWXAppId(appId,appSecret){
        umengClient.setWXAppId(appId,appSecret);
    }

    static setQQWithAppId(appId,appSecret){
      umengClient.setQQZone(appId,appSecret);
    }

    static setSinaWeibo(appKey,secret){
        umengClient.setSinaWeibo(appKey,secret);
    }

    static openShareAction(content,title,url,imageSource){
        console.log(resolveAssetSource(imageSource))
        umengClient.openShareAction(content,title,url,resolveAssetSource(imageSource));
    }

    static showShareMenuView(title, content, url, imageSource){
        umengClient.openShareAction(content, title, url, resolveAssetSource(imageSource));
    }
}
