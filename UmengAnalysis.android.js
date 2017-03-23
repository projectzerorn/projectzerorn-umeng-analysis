import { NativeModules } from 'react-native';
const UMNative = NativeModules.UmengNativeModule;
export default class UmengAnalysis{


  static onEvent(eventId){
       UMNative.onEvent(eventId);//自定义事件
  }
   static onCCEvent(evenArray, evenValue, eventLabel){
       UMNative.onCCEvent(evenArray, evenValue, eventLabel);// 结构化自定义事件
  }
   static onEventWithLabel(eventId, eventLabel){
      UMNative.onEventWithLabel(eventId, eventLabel);// 自定义事件
  }
   static onEventWithParameters(eventId, eventData){
       UMNative.onEventWithParameters(eventId, eventData);//自定义事件
  }
   static onEventWithCounter(eventId, eventData, eventNum){
      UMNative.onEventWithCounter(eventId, eventData, eventNum);//自定义事件
  }
   static onPageBegin(pageName){
       UMNative.onPageBegin(pageName) ;//页面开始的时候调用此方法
  }
   static onPageEnd(pageName){
       UMNative.onPageEnd(pageName) ;//页面结束的时候调用此方法
  }
   static profileSignInWithPUID(puid){
      UMNative.profileSignInWithPUID(puid);// 统计帐号登录接口
  }

  static profileSignInWithPUIDWithProvider(puid, provider){
      UMNative.profileSignInWithPUIDWithProvider(puid, provider); //统计帐号登录接口
  }
  static profileSignOff(){
      UMNative.profileSignOff();// 帐号统计退出接口
  }


}
