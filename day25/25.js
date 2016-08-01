//解析URL，返回其中的协议名、域名或IP地址、端口号、资源名、查询字符串
//URL完整形式：协议名://用户名:密码@域名或IP地址:端口号/资源路径/资源名?查询字符串#锚点
function parseURL(url){   
	var result = [];    
//函数返回值    
//从url开头到第一个:
//所在的位置即为协议名    
result['协议名'] = url.substring(0, url.indexOf('://') );        
//为了获取“域名或IP地址”的值，若存在协议名、用户名可以先去除掉，然后再求子串中存在的域名或IP地址   
//起点为：新子串的0；   
//终点为：若存在:则到此位置；否则若存在/则到此位置；否则若存在?则到此位置；否则若存在#则到此位置；否则直到末尾    
var trimProtocol = url.indexOf('://')>-1 ? url.substring(url.indexOf('://')+3) : url;    
//去除可能存在的协议名和:
//    var trimUser = trimProtocol.indexOf('@')>-1 ? trimProtocol.substring(trimProtocol.indexOf('@')+1) : trimProtocol;
//去除可能存在的用户名密码和@    
var hostStart = 0;   
var hostEnd = trimUser.indexOf(':')>-1 ? trimUser.indexOf(':') : (
	                 trimUser.indexOf('/')>-1 ? trimUser.indexOf('/') :(
	                           trimUser.indexOf('?')>-1 ? trimUser.indexOf('?') :(
	                                    trimUser.indexOf('#')>-1 ? trimUser.indexOf('#') : trimUser.length
	                                                                             )
	                                                                   )
	                                                             );  
result['域名或IP地址'] = trimUser.substring(hostStart, hostEnd);    
//为了获取端口号，先把主机名前的部分全部去除   
//若不存在:,则不存在端口号  
//若存在:,则端口号终止位置为：  若存在/则到此位置；否则若存在?则到此位置；否则若存在#则到此位置；否则直到末尾    
var trimHost = trimUser.substring(hostEnd);   
//去除域名前的部分  
var port = '';    var portEnd = 0;  
//端口号终止位置  
if(trimHost.indexOf(":")>-1){
	portEnd = trimHost.indexOf('/')>-1 ? trimHost.indexOf('/') : (       
		                 trimHost.indexOf('?')>-1 ? trimHost.indexOf('?') : (                  
		                        trimHost.indexOf('#')>-1 ? trimHost.index('#') : trimHost.length 
		                                                                     )
		                                                         ); 
    port = trimHost.substring(1, portEnd);  
}   
    result['端口号'] = port;     
//为了获取资源名，可以先把端口号部分去除   
//若不存在/，则不存在资源名    
//若存在/，则资源名的起点为最后一个/的下标；终点为：若存在?则到此位置；否则若存在#则到此位置；否则直到末尾   
var trimPort = trimHost.substring(portEnd); 
var resourceName = '';  
var resourceStart = 0;  
//资源名的起点    
var resourceEnd = 0;   
//资源名的终点  
if(trimPort.indexOf('/')>-1){        
	resourceStart = trimPort.lastIndexOf('/');      
	resourceEnd = trimPort.indexOf('?')>-1 ? trimPort.indexOf('?') : (                        
		            trimPort.indexOf('#')>-1 ? trimPort.indexOf('#') : trimPort.length                    
		                                                            ); 
	resourceName = trimPort.substring(resourceStart+1, resourceEnd);  
}   
 result['资源自称'] = resourceName;        
 //为了获取查询字符串，可以先把资源名称前的部分去除    
 //若不存在?，则不存在查询字符串   
 //若存在?，则查询字符串起点为1。终点为：若存在#则到此位置；否则直到末尾    
 var trimResource = trimPort.substring(resourceEnd);  
 var queryString = '';   
 var queryStart = 1;  
 //查询字符串起点    
 var queryEnd = 0;   
 //查询字符串终点    
if(trimResource.indexOf('?')>-1){
	 queryEnd = trimResource.indexOf('#')>-1 ? trimResource.indexOf('#') : trimReource.length;        
	 queryString = trimResource.substring(queryStart, queryEnd);    
}   
result['查询字符串'] = queryString;       
return result;}