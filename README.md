# projectzerorn-umeng-analysis

详细文档 参考 http://dev.umeng.com/analytics/h5/react-native%E9%9B%86%E6%88%90%E6%96%87%E6%A1%A3
友盟应用统计- react-native

安装 ` npm install --save projectzerorn-umeng-analysis@https://github.com//projectzerorn/projectzerorn-umeng-analysis.git`

##### **iOS项目引入本库(手动引入xcode)**

1.  **导入SDK**

   将文件夹中的 `UMNative.h`、`UMNative.m` 和 `UMMobClick.framework` 添加到 目标iOS 工程中。

   请在你的工程目录结构中，添加友盟统计框架，在选项TARGETS--> Build Phases-->Link Binary With Libraries-->Add Other，选择文件UMMobClick.framework文件并选择确认；添加系统依赖框架(Framework)和编译器选项 TARGETS-->Build Phases-->Link Binary With Libraries--> + -->CoreTelephony.framework libz.tbd libsqlite.tbd

2. ###  配置 *AppDelegate.m (*代表你的工程名字)

   导入头文件#import "UMMobClick/MobClick.h"

   *AppDelegate.m 的配置主要包括填写Appkey，设置发送策略和填写渠道id三部分，代码示例如下：

   ```
   #import "UMMobClick/MobClick.h"
    ... - (BOOL))application:(UIApplication) *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
   UMConfigInstance.appKey = @"xxxxxxxxxxxxxx...";
   UMConfigInstance.ChannelId = @"App Store";
   UMConfigInstance.eSType = E_UM_GAME; //仅适用于游戏场景，应用统计不用设置        …       
   [MobClick startWithConfigure:UMConfigInstance];//配置以上参数后调用此方法初始化SDK！
    } 

   ```

   UMConfigInstance为SDK参数配置的实例类，只需要将其成员中标注为required的参数赋值，optional的为可选项。

   appKey为开发者在友盟后台申请的应用Appkey（Appkey可在统计后台的 “统计分析->设置->应用信息” 页面查看）； ChannelId的值为应用的渠道标识。默认为 @"App Store"

   ##### **js代码引用**

   ReactNative项目中的js代码中，需要进行统计的页面引用,**BasePage**

   `import Analysis from 'projectzerorn-umeng-analysis';`

   其中this.getPageName()得到的是当前page的名字

   ```
   componentWillMount() {
       Analysis.onPageBegin(this.getPageName());
   }
   componentWillUnmount() {
       Analysis.onPageEnd(this.getPageName());
   }
   ```