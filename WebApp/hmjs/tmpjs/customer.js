/*
为您开设的试用帐号如下：  
　1.点击进入登录界面
　　https://x4.xtcrm.com  
　2.老板用户名和密码
　　用户：boss   公司：ansay 　密码：531066
　　在本软件中，老板/Boss用户享有最高管理权限和控制权限
*/
      window.onload=WinLoadUtil.MDTPLoad;
      var mband;
      function initWin()
      {
        mband=document.UnitItem.getBandByItemName("字典信息");
        mband.minwidth = "100px";
        mband.freecols = "名称";
        mband.gridtype = 0;
        mband.readonly = true;
        //mband.dicts="@类型=潜在客户/普通客户/VIP客户/代理商/合作伙伴/失效客户,@阶段=售前跟踪/合同执行/售后服务/合同期满";
        mband.dicts="@阶段=售前跟踪/合同执行/售后服务/合同期满";
        var Grid = new XGrid("dvMasterTab",mband,"in",null,1);
        mband.XQuery();
        mband.AfterRowChanged=function()
        {
            var owin = dwobj("1");
            if(owin){
                if(tabmenuIndex==4) changeTab(4);}
            else
                window.setTimeout(showLists,200);
        }
        $loading("none");        
      }
      function showLists()
      {
            var keytable = document.getElementsByName("dt_contact_keytable");            
            var xband = new ue_ABand("EXECUTE dbo.ContactContacts '"+mband.getFldStrValue("名称")+"'");
            for(var i=0;i<keytable.length;i++)
            {
                keytable[i].innerHTML = xband.data.selectSingleNode("table").text;
            }
      }
    function openDlg(bandid)
    {
	    var band=GridUtil.FindBand(bandid);
	    if(!band)   return;
	    switch(band.ItemName)
	    {
	        case "联系人":
                var winid = band.ID;
                var owin = dwobj(winid);
                var str='<div id='+winid+'dvbar style="text-align:right"></div>'+strcontact();
                if(!owin)
                {
                    var owin = new Object;
                    owin.id     = winid;
                    owin.width  = 700;
                    owin.height = 480;
                    owin.top    = 130;
                    owin.left   = 200;
                    owin.title  = ">><span datasrc='#字典_客户资料Tab' datafld='名称'></span>" +" - 联系人详细资料";
                    owin.text   = str;
                    owin.hovercolor = "orange";
                    owin.color = "black";
                    var a = new xWin(owin);
                    center(winid);
                }
                else
                    ShowHide(winid,"");
                var bar = new BarObj(band.ItemName,true);
                bar.onum.value = band.XmlLandData.recordset.AbsolutePosition+"/"+band.RecordCount();
                SynBandTitle(band);
                break;
	        case "客户关怀":
                var winid = band.ID;
                var owin = dwobj(winid);
                var str=tb_care(winid);
                if(!owin)
                {
                    var owin = new Object;
                    owin.id     = winid;
                    owin.width  = 700;
                    owin.height = 480;
                    owin.top    = 130;
                    owin.left   = 200;
                    owin.title  = ">><span datasrc='#字典_客户资料Tab' datafld='名称'></span>" +" - 客户关怀";
                    owin.text   = str;
                    owin.hovercolor = "orange";
                    owin.color = "black";
                    var a = new xWin(owin);
                    center(winid);
                }
                else
                    ShowHide(winid,"");
                var bar = new BarObj(band.ItemName,true);
                if(bar && bar.onum) bar.onum.value = band.XmlLandData.recordset.AbsolutePosition+"/"+band.RecordCount();
                break;
	        case "日程":
                var winid = band.ID;
                var owin = dwobj(winid);
                var str=tb_action(winid);
                if(!owin)
                {
                    var owin = new Object;
                    owin.id     = winid;
                    owin.width  = 700;
                    owin.height = 480;
                    owin.top    = 130;
                    owin.left   = 200;
                    owin.title  = ">><span datasrc='#字典_客户资料Tab' datafld='名称'></span>" +" - 日程";
                    owin.text   = str;
                    owin.hovercolor = "orange";
                    owin.color = "black";
                    var a = new xWin(owin);
                    center(winid);
                }
                else
                    ShowHide(winid,"");
                var bar = new BarObj(band.ItemName,true);
                if(bar && bar.onum) bar.onum.value = band.XmlLandData.recordset.AbsolutePosition+"/"+band.RecordCount();
                break;
	        case "待办任务":
                var winid = band.ID;
                var owin = dwobj(winid);
                var str=tb_task(winid);
                if(!owin)
                {
                    var owin = new Object;
                    owin.id     = winid;
                    owin.width  = 700;
                    owin.height = 480;
                    owin.top    = 130;
                    owin.left   = 200;
                    owin.title  = ">><span datasrc='#字典_客户资料Tab' datafld='名称'></span>" +" - 待办任务";
                    owin.text   = str;
                    owin.hovercolor = "orange";
                    owin.color = "black";
                    var a = new xWin(owin);
                    center(winid);
                }
                else
                    ShowHide(winid,"");
                var bar = new BarObj(band.ItemName,true);
                if(bar && bar.onum) bar.onum.value = band.XmlLandData.recordset.AbsolutePosition+"/"+band.RecordCount();
                break;
	        case "销售机会":
                var winid = band.ID;
                var owin = dwobj(winid);
                var str=tb_opport(winid);
                if(!owin)
                {
                    var owin = new Object;
                    owin.id     = winid;
                    owin.width  = 700;
                    owin.height = 480;
                    owin.top    = 130;
                    owin.left   = 200;
                    owin.title  = ">><span datasrc='#字典_客户资料Tab' datafld='名称'></span>" +" - 销售机会";
                    owin.text   = str;
                    owin.hovercolor = "orange";
                    owin.color = "black";
                    var a = new xWin(owin);
                    center(winid);
                }
                else
                    ShowHide(winid,"");
                ue_radioread(band,"状态");
                var bar = new BarObj(band.ItemName,true);
                if(bar && bar.onum) bar.onum.value = band.XmlLandData.recordset.AbsolutePosition+"/"+band.RecordCount();
                break;
	    }
    }
    
    
    function openPro(winid)
    {
        var inputctrl=event.srcElement;
        //设置当前行当前单元格
        var tdcol=inputctrl.parentElement;
        var trcur=tdcol.parentElement;
    
        if(inputctrl.title!="管理联系人")
            mband.setCurrentRow(trcur.rowIndex);
        if(!winid) winid="1";
        var owin = dwobj(winid);
        var str=strfind(winid,null,mband);
        if(!owin)
        {
            var owin = new Object;
            owin.id     = winid;
            owin.width  = 700;
            owin.height = 480;
            owin.top    = 130;
            owin.left   = 200;
            owin.title  = "客户详细资料－【创建日期："+"<span datasrc='#字典_客户资料Tab' datafld='创建日期_格式'></span>" +"/ 更新日期：<span datasrc='#字典_客户资料Tab' datafld='更新日期_格式'></span>】";
            owin.text   = str;
            owin.hovercolor = "orange";
            owin.color = "black";
            var a = new xWin(owin);
            center(winid);
            if(inputctrl.title=="管理联系人") changeTab(4);
            else changeTab(1);
            ue_radioread(mband,"热度");
            ue_radioread(mband,"价值评估");
            ue_radioread(mband,"信用等级");
        }
        else
        {
            //dwmsg(winid).innerHTML=str;
            ShowHide(winid,"");
            if(inputctrl.title=="管理联系人") changeTab(4);
            else changeTab(1);
        }
        
        var bar = new BarObj(mband.ItemName,false);
        bar.onum.value = mband.XmlLandData.recordset.AbsolutePosition+"/"+mband.RecordCount();
        
        //var oband=document.UnitItem.getBandByItemName("字典信息");
        //updatefields(oband);
    }
    
        //创建一个bar对象;
        function BarObj(itemname,IsChangeID)
        {
            if(!IsChangeID) var bid = "";
            else var bid = document.UnitItem.getBandByItemName(itemname).ID;
            if(this.ItemName != itemname) buildbar(itemname,bid);
            this.bar = document.getElementById(bid+"tbbar");
            if(!this.bar)  return null;                      
            this.id = this.bar.id;
            this.onum    = document.getElementById(bid+"rsnum");
            this.btnfst  = document.getElementById(bid+"navfirst");
            this.btnprev = document.getElementById(bid+"navprev");
            this.btnnext = document.getElementById(bid+"navnext");
            this.btnlast = document.getElementById(bid+"navlast");
            this.btnedit = document.getElementById(bid+"navedit");
            this.btnnew  = document.getElementById(bid+"navnew");
            this.btnsave = document.getElementById(bid+"navsave");
            this.btnprn  = document.getElementById(bid+"navprn");
            this.btndel  = document.getElementById(bid+"navdel");
            this.ItemName = itemname;
        }
        
        function buildbar(itemname,bid)
        {
            var isExchange = (bid=="")?"false":"true";
            if(document.getElementById(bid+"dvbar"))
                document.getElementById(bid+"dvbar").innerHTML = '<table id='+bid+'tbbar border="0" cellpadding="0" style="width:260px"  height="20" ><tr>'
		           +'<td width="16"><button id='+bid+'navfirst title="首记录" onclick="xnav(\''+itemname+'\',\'first\','+isExchange+');"><img src="../html/images/MoveFirstHS.gif"></button></td>'
		           +'<td width="16"><button id='+bid+'navprev title="前翻" onclick="xnav(\''+itemname+'\',-1,'+isExchange+');"><img src="../html/images/MovePrevious.gif"></button></td>'
		           +'<td><INPUT id='+bid+'rsnum type="text" readonly=true style="width:50px;text-align:center" /></td>'
		           +'<td width="16"><button id='+bid+'navnext title="后翻" onclick="xnav(\''+itemname+'\',1,'+isExchange+');"><img src="../html/images/MoveNextHS.gif"></button></td>'
		           +'<td width="16"><button id='+bid+'navlast title="最后一条" onclick="xnav(\''+itemname+'\',\'last\','+isExchange+');"><img src="../html/images/MoveLastHS.gif"></Botton></td>'
		           //+'<td width="16"><button id=navedit title="修改记录" onclick="xnav(\'edit\');"><img src="../html/images/wordpad.gif"></Botton></td>'
		           +'<td width="16"><button id='+bid+'navnew title="新建记录" onclick="xnav(\''+itemname+'\',\'new\','+isExchange+');"><img src="../html/images/NewRecordHS.gif"></Botton></td>'
		           +'<td width="16"><button id='+bid+'navdel title="删除当前记录" onclick="xnav(\''+itemname+'\',\'del\','+isExchange+');"><img src="../html/images/EditDelete1.gif" width="16" height="16"></Botton></td>'
		           +'<td width="16"><button id='+bid+'navsave title="保存" onclick="xnav(\''+itemname+'\',\'save\','+isExchange+');"><img src="../html/images/saveHS.gif"></Botton></td>'
		           +'<td width="16"><button id='+bid+'navprn title="打印" onclick="xnav(\''+itemname+'\',\'prn\','+isExchange+');"><img src="../html/images/printer.ico"></Botton></td>'
	               +'</tr></table>';
        }


    
    function area()
    {
        return '<select style="WIDTH: 100%;" size="1" datasrc="#字典_客户资料Tab" datafld="国家" class="xlandinput"><option></option>'
		+'<option value="1">AE United Arab Emirates阿联酋 亚洲</option><option value="2">AF Afghanistan阿富汗 亚洲</option>'
		+'<option value="3">AL Albania阿尔巴尼亚 亚洲</option><option value="4">AO Angola安哥拉 非洲</option>'
		+'<option value="5">AR Argentina阿根廷 南美洲</option><option value="6">AT Austria奥地利</option>'
				+'<option value="7">AU Australia澳大利亚 大洋洲</option>'
				+'<option value="8">AZ Azerbaijan阿塞拜疆 亚洲</option>'
				+'<option value="9">BD Bangladesh孟加拉 亚洲</option>'
				+'<option value="10">BE Belgium比利时 欧洲</option>'
				+'<option value="11">BG Bulgaria保加利亚 欧洲</option>'
				+'<option value="12">BH Bahrain巴林 亚洲</option>'
				+'<option value="13">BI Burundi布隆迪 非洲</option>'
				+'<option value="13">BJ Benin贝宁 非洲</option>'
				+'<option value="14">BM Bermuda百慕大 北美洲</option>'
				+'<option value="15">BN Brunei文莱 亚洲</option>'
				+'<option value="16">BO Bolivia玻利维亚 南美洲</option>'
				+'<option value="17">BR Brazil巴西 南美洲</option>'
				+'<option value="18">BS Bahamas巴哈马 北美洲</option>'
				+'<option value="19">BT Bhrtan不丹 亚洲</option>'
				+'<option value="20">BW Botswana博茨瓦纳 非洲</option>'
				+'<option value="21">CA Canada加拿大 北美洲</option>'
				+'<option value="22">CF Central Africa中非共和国 非洲</option>'
				+'<option value="23">CG Congo刚果 非洲</option>'
				+'<option value="24">CH Switherland瑞士 欧洲</option>'
				+'<option value="25">CK Cook Is.库克群岛 大洋洲</option>'
				+'<option value="26">CL Chile智利 南美洲</option>'
				+'<option value="27">CM Cameroon喀麦隆 非洲</option>'
				+'<option value="28" selected>CN China中国 亚洲</option>'
				+'<option value="29">CO Colombia哥伦比亚 南美洲</option>'
				+'<option value="30">CR Costa Rica哥斯达黎加 北美洲</option>'
				+'<option value="31">CU Cuba古巴 北美洲</option>'
				+'<option value="32">CV CApe Verde Is.佛得角群岛 非洲</option>'
				+'<option value="33">CY Cyprus塞浦路斯 亚洲</option>'
				+'<option value="34">CZ Czech捷克共和国 欧洲</option>'
				+'<option value="35">DE Germany德国 欧洲</option>'
				+'<option value="36">DK Denmark丹麦 欧洲</option>'
				+'<option value="37">DZ Algeria阿尔及利亚 非洲</option>'
				+'<option value="38">EC Ecuador厄瓜多尔 南美洲</option>'
				+'<option value="39">EE Estobia爱沙尼亚 欧洲</option>'
				+'<option value="40">EG Egypt埃及 非洲</option>'
				+'<option value="41">ES Spain西班牙 欧洲</option>'
				+'<option value="42">ET Ethiopia埃塞俄比亚 非洲</option>'
				+'<option value="43">FI Finland芬兰 欧洲</option>'
				+'<option value="44">FJ Fiji斐济 大洋洲</option>'
				+'<option value="45">FR France法国 欧洲</option>'
				+'<option value="46">GA Gabon加蓬 非洲</option>'
				+'<option value="47">GB Great Britain英国 欧洲</option>'
				+'<option value="48">GD Grenada格林纳达 北美洲</option>'
				+'<option value="49">GH Ghana加纳 非洲</option>'
				+'<option value="50">GM Zambia赞比亚 非洲</option>'
				+'<option value="51">GN Guinea-Bissau几内亚 非洲</option>'
				+'<option value="52">GQ Equatoria Guinea赤道几内亚 非洲</option>'
				+'<option value="53">GR Greece希腊 欧洲</option>'
				+'<option value="54">GT Guatemala危地马拉 北美洲</option>'
				+'<option value="55">GU Guam关岛 大洋洲</option>'
				+'<option value="56">GY Guyana圭亚那 南美洲</option>'
				+'<option value="57">HK Hong kong香港 亚洲</option>'
				+'<option value="58">HN Honduras洪都拉斯 北美洲</option>'
				+'<option value="59">HR Groatia克罗地亚 欧洲</option>'
				+'<option value="60">HT Haiti海地 北美洲</option>'
				+'<option value="61">HU Hungary匈牙利 欧洲</option>'
				+'<option value="62">ID Indonesia印度尼西亚 亚洲</option>'
				+'<option value="63">IE Ireland爱尔兰 欧洲</option>'
				+'<option value="64">IL Isreal以色列 亚洲</option>'
				+'<option value="65">IN India印度 亚洲</option>'
				+'<option value="66">IQ Iraq伊拉克 亚洲</option>'
				+'<option value="67">IR Iran伊朗 亚洲</option>'
				+'<option value="68">IS Iceland冰岛 欧洲</option>'
				+'<option value="69">IT Italy意大利 欧洲</option>'
				+'<option value="70">JM Jamaica牙买加 北美洲</option>'
				+'<option value="71">JO Jordan约旦 亚洲</option>'
				+'<option value="72">JP Japan日本 亚洲</option>'
				+'<option value="73">KE Kenya肯尼亚 非洲</option>'
				+'<option value="74">KH Cambodia柬埔寨 亚洲</option>'
				+'<option value="75">KP R.O.Korea韩国 亚洲</option>'
				+'<option value="76">KR D.P.R.Korea北朝鲜 亚洲</option>'
				+'<option value="77">KW Kuwait科威特 亚洲</option>'
				+'<option value="78">KZ Kazakhstan哈萨克斯坦 亚洲</option>'
				+'<option value="79">LA Laos老挝 亚洲</option>'
				+'<option value="80">LB Lebanon黎巴嫩 亚洲</option>'
				+'<option value="81">LT Lithuania立陶宛 欧洲</option>'
				+'<option value="82">LU Luxembourg卢森堡 亚洲</option>'
				+'<option value="83">LV Latvoia拉托维亚 欧洲</option>'
				+'<option value="84">LY Libya利比亚 非洲</option>'
				+'<option value="85">MA Morocco 摩洛哥 非洲</option>'
				+'<option value="86">MC Monaco摩纳哥 欧洲</option>'
				+'<option value="87">MD Moldova摩尔多瓦 欧洲</option>'
				+'<option value="88">MG Madagascar马达加斯加 非洲</option>'
				+'<option value="89">ML Mali马里 非洲</option>'
				+'<option value="90">MN Mongolia蒙古 亚洲</option>'
				+'<option value="91">MO Macao澳门 亚洲</option>'
				+'<option value="92">MR Mauritania毛里塔尼亚 非洲</option>'
				+'<option value="93">MT Malta马耳他 欧洲</option>'
				+'<option value="94">MU Mauritius毛里求斯 非洲</option>'
				+'<option value="95">MV Maldives马尔代夫 亚洲</option>'
				+'<option value="96">MX Mexico墨西哥 北美洲</option>'
				+'<option value="97">MY Malaysia马来西亚 亚洲</option>'
				+'<option value="98">MZ Mozambique莫桑比亚 非洲</option>'
				+'<option value="99">NA Namibia纳米比亚 非洲</option>'
				+'<option value="100">NE Niger尼日尔 非洲</option>'
				+'<option value="101">NG Nigeria尼日利亚 非洲</option>'
				+'<option value="102">NI Nicaragual尼加拉瓜 北美洲</option>'
				+'<option value="103">NL Netherlands荷兰 欧洲</option>'
				+'<option value="104">NO Norway挪威 欧洲</option>'
				+'<option value="105">NP Nepal尼泊尔 亚洲</option>'
				+'<option value="106">NZ New Zealand新西兰 大洋洲</option>'
				+'<option value="107">OM Oman阿曼 亚洲</option>'
				+'<option value="108">PH Philipines菲律宾 亚洲</option>'
				+'<option value="109">PK Parkistan巴基斯坦亚洲</option>'
				+'<option value="110">PL Poland波兰 欧洲</option>'
				+'<option value="111">PT Portugal葡萄牙 欧洲</option>'
				+'<option value="112">PY Paraguay巴拉圭 南美洲</option>'
				+'<option value="113">QA Qatar卡塔尔 亚洲</option>'
				+'<option value="114">RO Romania罗马尼亚 欧洲</option>'
				+'<option value="115">RU Russia俄罗斯 欧洲</option>'
				+'<option value="116">RW Rwanda卢旺达 非洲</option>'
				+'<option value="117">SA Sardi Arabia沙特阿拉伯 亚洲</option>'
				+'<option value="118">SD Sodan苏丹 非洲</option>'
				+'<option value="119">SE Sweden瑞典 欧洲</option>'
				+'<option value="120">SG Singapore新加坡 亚洲</option>'
				+'<option value="121">SK Slovakia斯洛伐克 欧洲</option>'
				+'<option value="122">SM San Marino圣马力诺 欧洲</option>'
				+'<option value="123">SN Senegal塞内加尔 非洲</option>'
				+'<option value="124">SO Somalia索马里 非洲</option>'
				+'<option value="125">SY Syria叙利亚 亚洲</option>'
				+'<option value="126">TH Thailand泰国 亚洲</option>'
				+'<option value="127">PA Panama巴拿马 北美洲</option>'
				+'<option value="128">PE Peru秘鲁 南美洲</option>'
				+'<option value="129">PG Papua New Grinea巴布亚新几内亚</option>'
				+'<option value="130">FJ Tadzhikistan塔吉克斯坦 亚洲</option>'
				+'<option value="131">TM Turkmenistan土库曼斯坦 亚洲</option>'
				+'<option value="132">TN Tunisia突尼斯 非洲</option>'
				+'<option value="133">TO Tonga汤加 大洋洲</option>'
				+'<option value="134">TW Taiwan台湾 亚洲</option>'
				+'<option value="135">TZ Tanzania坦桑尼亚 非洲</option>'
				+'<option value="136">UA Ukranie乌克兰 欧洲</option>'
				+'<option value="137">UG Uganda乌干达 非洲</option>'
				+'<option value="138">UK United Kingdom英国 欧洲</option>'
				+'<option value="139">US United Stated美国 北美洲</option>'
				+'<option value="140">UY Uruguay乌拉圭 南美洲</option>'
				+'<option value="141">UZ Uzbekistan乌兹别克斯坦 亚洲</option>'
				+'<option value="142">VA Vatican City梵蒂冈 欧洲</option>'
				+'<option value="143">VE Venezuela委内瑞拉 北美洲</option>'
				+'<option value="144">VN Vietnam越南 亚洲</option>'
				+'<option value="145">YE Yemen也门 亚洲</option>'
				+'<option value="146">YU Yugoslavia南斯拉夫 欧洲</option>'
				+'<option value="147">ZA South Africa南非 非洲</option>'
				+'<option value="148">ZM Zambia赞比亚 非洲</option>'
				+'<option value="149">ZR Zaire扎伊尔 非洲</option>'
				+'<option value="150">ZW Zimbabwe津巴布韦 非洲</option>'
				+'<option value="151">BLR 白俄罗斯 欧洲</option>'
				+'<option value="152">TR 土耳其 欧洲</option>'
				+'<option value="153">KG 吉尔吉斯 亚洲</option></select>'
    }
    function c_state()
    {
        return '<select style="WIDTH: 50%;" datasrc="#字典_客户资料Tab" datafld="省" class="xlandinput">'
									+'<option></option>'
									+'<option value="1">安徽</option>'
									+'<option value="2" selected>北京</option>'
									+'<option value="3">重庆</option>'
									+'<option value="4">福建</option>'
									+'<option value="5">甘肃</option>'
									+'<option value="6">广东</option>'
									+'<option value="7">广西</option>'
									+'<option value="8">贵州</option>'
									+'<option value="9">海南</option>'
									+'<option value="10">河北</option>'
									+'<option value="11">河南</option>'
									+'<option value="12">黑龙江</option>'
									+'<option value="13">湖北</option>'
									+'<option value="14">湖南</option>'
									+'<option value="15">吉林</option>'
									+'<option value="16">江苏</option>'
									+'<option value="17">江西</option>'
									+'<option value="18">辽宁</option>'
									+'<option value="19">内蒙古</option>'
									+'<option value="20">宁夏</option>'
									+'<option value="21">青海</option>'
									+'<option value="22">山东</option>'
									+'<option value="23">山西</option>'
									+'<option value="24">陕西</option>'
									+'<option value="25">上海</option>'
									+'<option value="26">四川</option>'
									+'<option value="27">天津</option>'
									+'<option value="28">西藏</option>'
									+'<option value="29">新疆</option>'
									+'<option value="30">云南</option>'
									+'<option value="31">浙江</option>'
									+'<option value="32">香港</option>'
									+'<option value="33">澳门</option>'
									+'<option value="34">台湾</option>'
									+'<option value="35">其它</option></select>'
    }
function msInitGridOps()
{
}

var tabmenuIndex = 0; //用于全程跟踪当前的mdiv索引，其tag用于判定是否为只读
function changeTab(index)
{
    if(tabmenuIndex==4 && document.UnitItem.getBandByItemName("联系人").IsModify()){alert("正在编辑联系人，请确认！");return;};
    for (var i=1;i<=4;i++)
    {
        document.getElementById ("li"+i).className ="normal";
        document.getElementById ("li"+index).className ="selected";
        document.getElementById ("mdiv"+i).style.display  ="none";
    }
    document.getElementById ("mdiv"+index).style.display  ="block";
    tabmenuIndex = index;
    var oband;
    switch(index)
    {
        case 4:                    
            oband=document.UnitItem.getBandByItemName("联系人");
            //if(!oband.active) oband.XQuery();
            oband.XQuery();
            SynBandTitle(oband);
            break;
        default:
            oband = mband;
            break;
    }
    var bar = new BarObj(oband.ItemName,false);
    if(oband.XmlLandData.recordset.AbsolutePosition==-1) bar.onum.value=0;
    else bar.onum.value = oband.XmlLandData.recordset.AbsolutePosition+"/"+oband.RecordCount();
    bar.btnfst.disabled=(oband.count==0)?true:false;
    bar.btnprev.disabled=(oband.count==0)?true:false;
    bar.btnnext.disabled=(oband.count==0)?true:false;
    bar.btnlast.disabled=(oband.count==0)?true:false;
    //bar.btnedit.disabled=(oband.count==0)?true:false;
    bar.btnnew.disabled=false;
    bar.btnsave.disabled=(oband.count==0)?true:false;
    bar.btnprn.disabled=(oband.count==0)?true:false;
    bar.btndel.disabled=(oband.count==0)?true:false;
}

//改变输入方式0,1,2为主表内容，按一个规则.3为联系人分表
function exinputtype(objname,isreadonly)
{
    if(!document.getElementById(objname)) return;
    var pobjs = document.getElementById(objname).getElementsByTagName("INPUT")
    for(var i=0;i<pobjs.length;i++)
    {
        //pobjs[i].readOnly=isreadonly;
        pobjs[i].disabled=isreadonly;
        if("checkbox"==pobjs[i].type || "radio"==pobjs[i].type)
            pobjs[i].disabled=isreadonly;
    }
    var pobjs = document.getElementById(objname).getElementsByTagName("SELECT")
    for(var i=0;i<pobjs.length;i++)
        pobjs[i].disabled=isreadonly;
    var pobjs = document.getElementById(objname).getElementsByTagName("TEXTAREA")
    for(var i=0;i<pobjs.length;i++)
        pobjs[i].disabled=isreadonly;
    document.getElementById(objname).tag=isreadonly;
}
function secBoard(n) {
    if(mband.RecordCount()==0){alert("请先录入客户资料！");return};
    if(n>=mainTable.tBodies.length) return;
    for(i=0;i<mainTable.tBodies.length;i++)
      mainTable.tBodies[i].style.display="none";
    mainTable.tBodies[n].style.display="block";
    
    var oCusttitle = document.getElementsByName("customsign")
    for(var i=0;i<oCusttitle.length;i++)
        oCusttitle[i].innerText = mband.getFldStrValue("名称");    
    switch(n)
    {
        case 1:
            var oband=document.UnitItem.getBandByItemName("联系人");
            oband.minwidth = "80px";
            oband.freecols = "姓名";
            oband.title = "客户联系人";
            oband.dicts="@性别=男/女,@阶段=售前跟踪/合同执行/售后服务/合同期满";
            oband.gridtype = 8;
            if(!oband.Grid) var Grid = new XGrid("dvcontact",oband,"in");
            oband.XQuery();
            //SynBandTitle(oband);
            
            var oband=document.UnitItem.getBandByItemName("客户关怀");
            oband.title = "客户关怀";
            oband.minwidth = "80px";
            oband.freecols = "主题";
            oband.gridtype = 8;
            if(!oband.Grid) var Grid = new XGrid("dvcare",oband,"in");
            oband.XQuery();
            break;
        case 2:
            var oband=document.UnitItem.getBandByItemName("日程");
            if(oband.active) break;
            oband.title = "日程安排";
            oband.minwidth = "80px";
            oband.freecols = "主题";
            oband.dicts="@类型=电话/上门/来访接待/会议/培训/商务餐饮/外出活动/其他";
            oband.gridtype = 8;
            var Grid = new XGrid("dvaction",oband,"in");
            oband.XQuery();
            var oband=document.UnitItem.getBandByItemName("待办任务");
            if(oband.active) break;
            oband.title = "待办任务";
            oband.minwidth = "80px";
            oband.freecols = "主题";
            oband.dicts="@类型=电话/上门/来访接待/会议/培训/商务餐饮/外出活动/其他,@状态=未结束/结束/取消,@优先级=高/中/低";
            oband.gridtype = 8;
            var Grid = new XGrid("dvtask",oband,"in");
            oband.XQuery();
            break;
        case 3:
            var oband=$band("销售机会");
            if(oband.active) break;
            oband.title = "销售机会";
            oband.minwidth = "80px";
            oband.freecols = "主题";
            //@状态=跟踪/成功/失败/搁置/失效,
            oband.dicts="@状态=未结束/结束/取消,@阶段=初期沟通/立项评估/需求分析/方案制定/招投标或竞争/商务谈判/合同签约";
            oband.gridtype = 8;
            var Grid = new XGrid("dvopport",oband,"in",null,1);
            oband.XQuery();
            var oband=$band("客户报价");
            if(oband.active) break;
            oband.title = "历史报价";
            oband.minwidth = "80px";
            oband.freecols = "主题";
            oband.gridtype = 8;
            var Grid = new XGrid("dvprice",oband,"in",null,1);
            oband.XQuery();
//            SynBandTitle(oband);
            break;        
        case 5:
            var oband=document.UnitItem.getBandByItemName("客户服务");
            oband.title = "客户服务";
            oband.minwidth = "80px";
            oband.freecols = "主题";
            oband.dicts="@类型=答疑/故障排除/培训/升级/其他,@状态=未结束/结束/取消,@方式=电话/传真/邮寄/上门/其他,@状态=无需处理/未处理/处理中/处理完成";
            oband.gridtype = 8;
            var Grid = new XGrid("dvserivce",oband,"in");
            oband.XQuery();
            var oband=document.UnitItem.getBandByItemName("客户投诉");
            oband.title = "投诉管理";
            oband.minwidth = "80px";
            oband.freecols = "主题";
            oband.dicts="@分类=产品投诉/服务投诉/客户意见/其他,@紧急程度=紧急/急/普通,@处理结果=未处理/处理中/完成";
            oband.gridtype = 8;
            var Grid = new XGrid("dvlodge",oband,"in");
            oband.XQuery();
            break;        
        case 6:
            var oband=document.UnitItem.getBandByItemName("客户费用");
            oband.title = "相关费用";
            oband.minwidth = "80px";
            oband.freecols = "用途";
            oband.dicts="@类别=餐饮/交通/通讯/礼品/办公/活动/其它";
            oband.gridtype = 8;
            var Grid = new XGrid("dvcostlist",oband,"in");
            oband.XQuery();
            break;        
    }
}	          
           
    function strfind(winid,gridname,bandname)
    {
        if(!bandname) bandname="";
        var s= '<fieldset style="padding: 5px;;width:98%"><legend>主要信息：</legend>'
        +'<table border="0" width="99%" cellpadding="0" style="border-collapse: collapse" align=center ><tr>'
        +'        <td width="60" align="right">名称：</td><td width="150">'
        +'        <input datasrc="#字典_客户资料Tab" datafld="名称" class=\"xlandinput\" style=\"WIDTH: 90%;\" /><font face="Wingdings" color="#ff0000">v</font></td>'
        +'        <td width="50" align="right">编码：</td><td width="50">'
        +'        <input datasrc="#字典_客户资料Tab" datafld="编码" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'        <td width="70" align="right">热点客户：</td><td width="30">'
        +'        <input datasrc="#字典_客户资料Tab" datafld="热点" class="xlandradio" type="checkbox" /></td>'
        +'        <td width="40" align="right">热度：</td><td width="150">'
        +'        <input type="radio" id="hotlevel_0" CHECKED value="低" name="热度" onclick="ue_radiowrite(mband)"/><label for="hotlevel_0">低</label><input type="radio" id="hotlevel_1" value="中" name="热度" onclick="ue_radiowrite(mband)"/><label for="hotlevel_1">中</label><input type="radio" '
        +' id="hotlevel_2" value="高" name="热度" onclick="ue_radiowrite(mband)" /><label for="hotlevel_2">高</label></b> </td>'
        +'        <td width="50" align="center">【<a href="#" onclick="_btnOK()">关闭</a>】</td>'   
        +'    </tr></table></fieldset>';
        var s1 = '<table border="0" width="99%" cellpadding="0" style="border-collapse: collapse" align=center ><tr><td>'
          +'<DIV id=header align="left" style="width:98%"><UL><LI onclick="changeTab(1)"><A href="#" id="li1"  class="selected">基本信息</A></LI>'
          +'<LI onclick="changeTab(2)" ><A href="#" id="li2"  class="normal">联系方式及财务信息</A></LI>'
          +'<LI onclick="changeTab(3)"><A href="#"  id="li3"  class="normal">业务状况</A></LI>'
          +'<LI onclick="changeTab(4)"><A href="#"  id="li4" class="normal">联系人</A></LI></UL></DIV></td><td>'
          +'<div id="dvbar"></div></td></tr></table>'
          +'<DIV id=content align=center><div id="mdiv1" style ="display:block">'+s01()+'</div>'
          +'<div  id="mdiv2" style ="display:none" >'+s02()+s03()+'</div>'
          +'<div  id="mdiv3" style ="display:none" >'+s04()+'</div>'
          +'<div id="mdiv4" style ="display:none" >'+strcontact()+'</div></DIV>';
        //'<select id="deptbox" size="13" onblur="this.style.display=\'none\'" name="D1" datasource="execute dbo.boxorginaze" datatextfield="title" datavaluefield="name" style="width:420;height:300; position:absolute; left:132; top:128;display:none"  ondblclick="boxcheckin(this)" ></select>';
        return s+s1;
    }
    function s01()
    {
        return '<fieldset style="padding: 5px;height:99%;width:98%"><legend>详细资料：</legend>'
        +'<b>价值评估:<input id="valuing0" type="radio" value="高" name="价值评估" onclick="ue_radiowrite(mband)"><label for="valuing0">高</label><input id="valuing1" type="radio" value="中" name="价值评估" onclick="ue_radiowrite(mband)"><label for="valuing1">中</label><input id="valuing2" type="radio" onclick="ue_radiowrite(mband)" value="低" name="价值评估" checked><label for="valuing2">低</label>'
        +'　　　信用等级:<input id="credit0" type="radio" value="高" name="信用等级"  onclick="ue_radiowrite(mband)" /><label for="credit0">高</label><input id="credit1" type="radio" value="中" name="信用等级"  onclick="ue_radiowrite(mband)" /><label for="credit1">中</label><input id="credit2" type="radio" value="低" name="信用等级"  onclick="ue_radiowrite(mband)"/><label for="credit2">低</label></b>'                    
        +'<br /><br />'
        +'<table border="0" width="90%" cellpadding="1" style="border-collapse: collapse" align=center >'
        +'<tr><td width="90">类　　型：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="类型" class="xlandinput" style="width:100%;" type="text" size="11"  />'
        +'<input title="要选择吗，点我一下..." class="txtbtn" type=button value="..."  style="margin-left:-24px;margin-top:2px;width:22px;height:16; position:absolute" onclick="Xcbo(字典_客户资料Tab)"/></td>'
        +'    <td width="90"  align=center>行　　业：</td>'
        +'    <td><select style="WIDTH: 100%;" size="1" datasrc="#字典_客户资料Tab" datafld="行业" class="xlandinput">'
		+'<option></option><option value="1" selected>工业</option><option value="2">服务业</option><option value="35">信息产业IT业</option>'
		+'<option value="3">邮电</option><option value="4">通信</option><option value="5">社区服务</option>'
		+'<option value="6">商业流通</option><option value="7">批发零售</option><option value="8">交通运输</option>'
		+'<option value="9">建筑及安装业</option><option value="10">医疗卫生</option><option value="11">城市建设</option>'
		+'<option value="12">旅游</option><option value="13">宾馆</option><option value="14">餐饮业</option>'
		+'<option value="15">房地产</option><option value="16">科研设计</option><option value="17">文化艺术</option>'
		+'<option value="18">财政</option><option value="19">金融</option><option value="20">保险</option>'
		+'<option value="21">新闻</option><option value="22">出版</option><option value="23">媒体</option>'
		+'<option value="24">公用服务事业</option><option value="25">社会团体</option><option value="26">工艺美术</option>'
		+'<option value="27">礼品业</option><option value="28">物资经营</option><option value="29">回收</option>'
		+'<option value="30">公共福利</option><option value="31">教育事业</option><option value="32">学校</option>'
		+'<option value="33">商业</option><option value="34">集团综合</option><option value="37">农业</option>'
		+'<option value="36">其他行业</option></select></td>'
        +'</tr><tr><td width="90">关系等级：</td>'
        +'    <td><select style="WIDTH: 100%;" size="1" datasrc="#字典_客户资料Tab" datafld="关系等级" class="xlandinput">'
		+'<option></option><option value="密切" selected>密切</option><option value="较好">较好</option>'
		+'<option value="一般">一般</option><option value="较差">较差</option></select></td>'
        +'    <td width="90" align=center>人员规模：</td>'
        +'    <td><select style="WIDTH: 100%;" size="1" datasrc="#字典_客户资料Tab" datafld="规模" class="xlandinput"><option></option>'
		+'<option value="1" selected>10人以内</option><option value="2">10-20人</option>'
		+'<option value="3">20-50人</option><option value="4">50-200人</option><option value="5">200人以上</option></select></td>'
        +'</tr><tr><td width="140">来　　源：</td>'
        +'    <td><select style="WIDTH: 100%;" size="1" datasrc="#字典_客户资料Tab" datafld="来源" class="xlandinput"><option></option>'
		+'<option value="电话来访" selected>电话来访</option><option value="客户介绍">客户介绍</option><option value="独立开发">独立开发</option>'
		+'<option value="媒体宣传">媒体宣传</option><option value="促销活动">促销活动</option><option value="老客户">老客户</option>'
		+'<option value="代理商">代理商</option><option value="合作伙伴">合作伙伴</option><option value="公开招标">公开招标</option>'
		+'<option value="其他">其他</option><option value="互联网">互联网</option></select></td>'
        +'    <td width="90" align=center>阶　　段：</td>'
        +'    <td><select style="WIDTH: 100%;" datasrc="#字典_客户资料Tab" datafld="阶段" class="xlandinput" size="1" name="dt_customer_cu_status"><option></option>'
		+'<option value="售前跟踪" selected>1.售前跟踪</option><option value="合同执行">2.合同执行</option>'
		+'<option value="售后服务">3.售后服务</option><option value="合同期满">4.合同期满</option></select></td>'
        +'</tr><tr><td width="90">信用天数：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="信用天数" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    <td width="90" align=center>信用金额：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="信用金额_格式" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr><tr><td width="90">最大库存：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="最大库存" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    <td width="90" align=center>最小库存：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="最小库存" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr><tr><td width="90">持卡类型：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="持卡类型" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    <td width="90" align=center>业务员：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="业务员" class="xlandinput" style="width:100%;" type="text" size="11"  /><input title="要选择吗，点我一下..." class="txtbtn" type=button value="..."  style="margin-left:-24px;margin-top:2px;width:22px;height:16; position:absolute" onclick="Xcbo(字典_客户资料Tab)"/></td>'
        +'    </tr><tr><td width="90">公司简介：</td>'
        +'    <td colspan="3"><textarea style="WIDTH: 100%;height:100px" datasrc="#字典_客户资料Tab" datafld="简介" class="xlandinput">dsadasdas</textarea></td>'
        +'    </tr><tr><td width="90">备　　注：</td>'
        +'    <td colspan="3"><textarea style="WIDTH: 100%;height:60px" datasrc="#字典_客户资料Tab" datafld="备注" class="xlandinput">dsadasdas</textarea></td>'
        +'    </tr></table></fieldset>';
    }
    function s02()
    {
        return '<fieldset style="padding: 5px;;width:98%"><legend>联系方式：</legend>'
        +'<table border="0" width="90%" cellpadding="1" style="border-collapse: collapse" align=center >'
        +'<tr><td width="90">国家或地区：</td>'
        +'    <td>'+area()+'</td>'
        +'    <td width="90"  align=center>联&nbsp;系&nbsp;人：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="联系人" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr><tr><td width="90">省 / 市：</td>'
        +'    <td>'+c_state()+'<input datasrc="#字典_客户资料Tab" datafld="市" class="xlandinput" style="width:49%;" type="text" size="11"  /></td>'
        +'    <td width="90" align=center>电　　话：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="电话" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr><tr><td width="90">法人代表：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="法人代表" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    <td width="90" align=center>传　　真：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="传真" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr><tr><td width="90">电子邮箱：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="email" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    <td width="90" align=center>网　　址：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="网址" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr><tr><td width="90">送货地址：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="送货地址" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    <td width="90" align=center>运输方式：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="运输方式" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr><tr><td width="90">地　　址：</td>'
        +'    <td colspan="3"><input datasrc="#字典_客户资料Tab" datafld="地址" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    </tr></table></fieldset>';
    }       
             
    function s03()
    {
        return '<br /><br /><fieldset style="padding: 5px;;width:98%"><legend>帐户一：</legend>'
        +'<table border="0" width="90%" cellpadding="0" style="border-collapse: collapse" align=center >'
        +'<tr><td width="90">开户银行：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="开户行" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    <td width="90"  align=center>开户名称：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="开户名称" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr><tr><td width="90">银行账号：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="账号" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    <td width="90" align=center>地　　址：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="银行地址" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr><tr><td width="90">税　　号</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="税号" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    <td width="90" align=center>税　　率：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="税率" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr></table></fieldset>'
        +'<fieldset style="padding: 5px;;width:98%"><legend>帐户二：</legend>'
        +'<table border="0" width="90%" cellpadding="0" style="border-collapse: collapse" align=center ><tr><td width="90">开户银行：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="开户行1" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    <td width="90"  align=center>开户名称：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="开户名称1" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr><tr><td width="90">银行账号：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="账号1" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    <td width="90" align=center>地　　址：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="银行地址1" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr><tr><td width="90">税　　号</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="税号1" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'    <td width="90" align=center>税　　率：</td>'
        +'    <td><input datasrc="#字典_客户资料Tab" datafld="税率1" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'</tr></table></fieldset>';
    }                
    function s04()
    {
        return '<table border="0" width="90%" cellpadding="0" style="border-collapse: collapse" align=center >'
        +'<tr><td width="90">客户简介：</td>'
        +'    <td colspan="3"><textarea style="WIDTH: 100%;height:70px" datasrc="#字典_客户资料Tab" datafld="简介" class="xlandinput">dsadasdas</textarea></td>'
        +'</tr>'
        +'<tr><td width="90">合作现状：</td>'
        +'    <td colspan="3"><textarea style="WIDTH: 100%;height:70px" datasrc="#字典_客户资料Tab" datafld="合作现状" class="xlandinput">dsadasdas</textarea></td>'
        +'</tr>'
        +'<tr><td width="90">合作前景：</td>'
        +'    <td colspan="3"><textarea style="WIDTH: 100%;height:70px" datasrc="#字典_客户资料Tab" datafld="合作前景" class="xlandinput">dsadasdas</textarea></td>'
        +'</tr>'
        +'<tr><td width="90">跟进策略：</td>'
        +'    <td colspan="3"><textarea style="WIDTH: 100%;height:70px" datasrc="#字典_客户资料Tab" datafld="跟进策略" class="xlandinput">dsadasdas</textarea></td>'
        +'</tr>'
        +'<tr><td width="90">备　　注：</td>'
        +'    <td colspan="3"><textarea style="WIDTH: 100%;height:35px" datasrc="#字典_客户资料Tab" datafld="备注" class="xlandinput">dsadasdas</textarea></td>'
        +'    </tr></table>';
    };
    function strcontact()
    {
        var s= '<fieldset style="padding: 5px;;width:98%;"><legend>'
        +'主要信息：【联系人姓名：<span id="联系人_keytable" band="联系人" name="联系人_keytable">无</span>】'
        +'</legend>'
        +'<table border="0" width="99%" cellpadding="0" style="border-collapse: collapse" align=center ><tr>'
        +'        <td width="50" align="right"><font face="Wingdings" color="#ff0000">v</font>姓名：</td><td width="80">'
        +'        <input type="text" datasrc="#客户联系人Tab" datafld="姓名" class=\"xlandinput\" style=\"WIDTH: 100;\" /></td>'
        +'        <td width="40" align="right">职务：</td><td width="80">'
        +'        <input type="text" datasrc="#客户联系人Tab" datafld="职务" class="xlandinput" style="width:100%;" size="11"  /></td>'
        +'        <td width="40" align="right">性别：</td><td width="40"><input datasrc="#客户联系人Tab" datafld="性别" title="双击更改" class="xlandinput"  ondblclick="changesex(this)" style="width:100%;" type="text" size="11"  /></td>'
        +'        <td width="40" align="right">民族：</td><td width="40"><input datasrc="#客户联系人Tab" datafld="民族" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'        <td width="70" align="right">主联系人：</td>'
        +'        <td width="40" ><input datasrc="#客户联系人Tab" datafld="主" class="xlandradio" type="checkbox" /></td>'
        +'        <td width="40" align="right">无效：</td><td width="40"><input datasrc="#客户联系人Tab" datafld="失效" class="xlandradio" type="checkbox" /></td>'
        +'    </tr></table></fieldset>'+strcontact1()+strcontact3()+'';
        return s;
    }
    function strcontact1()
    {
        return '<fieldset style="padding: 5px;width:98%"><legend>基本资料：</legend>'
        +'<table border="0" width="100%" cellpadding="0" style="border-collapse: collapse" align=center >'
        +'<tr><td width="70" align="right">所在部门：</td><td  width="150"><input datasrc="#客户联系人Tab" datafld="部门" class="xlandinput" style="width:100%;" type="text" size="11"  /></td><td width="70" align="right">出生日期：</td><td width="150"><INPUT datasrc="#客户联系人Tab" datafld="生日" class="xlanddate" style="width:100%; " type="text" size="11" name="姓名2" /></td>'
        +'<td rowspan="8" align="center" valign=middle>'
        +'<div style="width:80%;height:160;border:3px double #C0C0C0;">1</div></td></tr>'
        +'<tr><td width="70" align="right">分　　类：</td>'
        +'<td  width="150"><select style="WIDTH: 100%;" size="1" datasrc="#客户联系人Tab" datafld="分类" class="xlandinput" >'
		+'<option></option><option value="特别重要">特别重要</option><option value="重要">重要</option><option value="普通">普通</option><option value="不重要">不重要</option></select></td>'
        +'<td width="70" align="right">负责业务：</td><td width="150">'
        +'<INPUT datasrc="#客户联系人Tab" datafld="业务" class="xlandinput" style="width:100%; " type="text" size="11"/></td>'
        +'</tr>'
        +'<tr><td width="70" align="right">籍　　贯：</td>'
        +'<td  width="150"><input datasrc="#客户联系人Tab" datafld="籍贯" class="xlandinput"style="width:100%;" type="text" size="11"  /></td>'
        +'<td width="70" align="right">身份证号：</td><td width="150">'
        +'<INPUT datasrc="#客户联系人Tab" datafld="身份证" class="xlandinput" style="width:100%; " type="text" size="11"/></td>'
        +'</tr>'
        +'<tr><td align="right">个人爱好：</td><td colspan=3><input datasrc="#客户联系人Tab" datafld="爱好" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'<tr><td width="70" align="right">工作电话：</td>'
        +'<td  width="150"><input datasrc="#客户联系人Tab" datafld="工作电话" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'<td width="70" align="right">传　　真：</td><td width="150">'
        +'<INPUT datasrc="#客户联系人Tab" datafld="传真" class="xlandinput" style="width:100%; " type="text" size="11" /></td>'
        +'</tr>'
        +'<tr><td width="70" align="right">移动电话：</td>'
        +'<td  width="150"><input datasrc="#客户联系人Tab" datafld="手机1" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'<td width="70" align="right">邮　　编：</td><td width="150">'
        +'<INPUT datasrc="#客户联系人Tab" datafld="邮编" class="xlandinput" style="width:100%; " type="text" size="11" /></td>'
        +'</tr>'
        +'<tr><td width="70" align="right">移动电话：</td>'
        +'<td  width="150"><input datasrc="#客户联系人Tab" datafld="手机2" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'<td width="70" align="right">ＭＳＮ：</td><td width="150">'
        +'<INPUT datasrc="#客户联系人Tab" datafld="MSN" class="xlandinput" style="width:100%; " type="text" size="11" /></td>'
        +'</tr>'
        +'<tr><td width="70" align="right">家庭电话：</td>'
        +'<td  width="150"><input datasrc="#客户联系人Tab" datafld="家庭电话" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'<td width="70" align="right">SKYPE：</td><td width="150">'
        +'<INPUT datasrc="#客户联系人Tab" datafld="SKYPE" class="xlandinput" style="width:100%; " type="text" size="11"  /></td>'
        +'</tr>'
        +'<tr><td width="70" align="right">家庭地址：</td>'
        +'<td  width="150"><input datasrc="#客户联系人Tab" datafld="住址" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'<td width="70" align="right">ＱＱ：</td><td width="150">'
        +'<INPUT datasrc="#客户联系人Tab" datafld="QQ" class="xlandinput" style="width:100%; " type="text" size="11" /></td>'
        +'<td align="center"><INPUT id="Button1" title="上传照片" style="WIDTH: 100px;" onclick="upload()" type="button" value="上传" name="btnOK1"></td></tr>'
        +'</table></fieldset>';
    }
    
    function strcontact3()
    {
        //ID,客户,姓名,职务,主,失效,性别,生日,分类,业务,部门,身份证,工作电话,家庭电话,手机1,手机2,传真,邮编,
        //住址,MSN,QQ,SKYPE,pic,学历,学位,专业,毕业院校,籍贯,民族,身高,体重,爱好,备注
        var s= '<fieldset style="padding: 5px;;width:98%"><legend>其它信息：</legend>'
        +'<table border="0" width="98%" cellpadding="0" style="border-collapse: collapse" align=center >'
        +'<tr><td width="60" align="right">学历:</td><td width="100">'
        +'        <select datasrc="#客户联系人Tab" datafld="学历" class="xlandinput" style="width:100%;" type="text" size="1"  />'
        +'        <option value=""></option><option value="中专">中专</option><option value="大专">大专</option><option value="本科">本科</option>'
        +'        <option value="硕士">硕士</option><option value="博士">博士</option><option value="小学">小学</option><option value="中学">中学</option></select></td>'
        +'        <td width="60" align="right">学位:</td><td width="100"><select datasrc="#客户联系人Tab" datafld="学位" class="xlandinput" style="width:100%;" type="text" size="1"  /><option value=""></option><option value="学士">学士</option><option value="硕士">硕士</option><option value="博士">博士</option></select></td>'
        +'        <td width="60" align="right">专业:</td><td width="100"><input datasrc="#客户联系人Tab" datafld="专业" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'        <td width="60" align="right">毕业院校:</td><td width="100"><input datasrc="#客户联系人Tab" datafld="毕业院校" class="xlandinput" style="width:100%;" type="text" size="11"  /></td></tr>'
        +'<tr><td width="60" align="right">驾照:</td><td width="100"><input class="xlandradio" type="checkbox" datasrc="#客户联系人Tab" datafld="驾照"/></td>'
        +'        <td width="60" align="right">车牌:</td><td width="100">'
        +'        <input datasrc="#客户联系人Tab" datafld="车牌" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'        <td width="60" align="right">身高:</td><td width="100"><input datasrc="#客户联系人Tab" datafld="身高" class="xlandinput" style="width:100%;" type="text" size="11"  /></td>'
        +'        <td width="60" align="right">体重:</td><td width="100"><input datasrc="#客户联系人Tab" datafld="体重" class="xlandinput" style="width:100%;" type="text" size="11"  /></td></tr>'
        +'<tr><td width="60" align="right">备注:</td>'
        +'    <td colspan="7"><textarea style="WIDTH: 100%;height:50px" datasrc="#客户联系人Tab" datafld="备注" class="xlandinput"></textarea></td>'
        +'    </tr>'
        +'</table></fieldset>';
        return s;
    }
    

    function _btnOK()
    {
        ShowHide("1","none");
    }
    
    function xnav(itemname,flag,isExchange)
    {
        var oband=document.UnitItem.getBandByItemName(itemname);
        switch(flag)
        {
            case "save":
                ue_save();
                break;
            case "new":
                ue_bandadd(oband.ID);
                break;
            case "del":
                ue_banddelete(oband.ID)
                break;
            case 1:
                ue_nnext(itemname);
                break;
            case -1:
                ue_nprev(itemname);
                break;
            case "first":
                ue_nstart(itemname);
                break;
            case "last":
                ue_nlast(itemname);
                break;
        }
	    var bar = new BarObj(itemname,isExchange);
	    bar.onum.value = oband.XmlLandData.recordset.AbsolutePosition+"/"+oband.RecordCount();            
	    SynBandTitle(oband);
    }
	function ue_nstart(itemname)
	{
	    var oband=document.UnitItem.getBandByItemName(itemname);
		if(!oband)   return;
		if(1==oband.RecordCount())
			strMsg="";
		else
			strMsg=oband.CalXmlLand.ValidateRow((oband.RecordCount()<1)?-1:(oband.XmlLandData.recordset.AbsolutePosition-1));
		ue_navctrl(oband,strMsg,0);
		return;		
	}

	function ue_nnext(itemname)
	{
	    var oband=document.UnitItem.getBandByItemName(itemname);
		if(!oband)   return;
		if(oband.RecordCount()<1)
			return;
		var index=oband.XmlLandData.recordset.AbsolutePosition-1;	//记录行以1为基点,需要换成以0为基点
		var curindex=(index+1<oband.XmlLandData.recordset.recordCount)?(index+1):index;
		if(curindex!=index)
			var strMsg=oband.CalXmlLand.ValidateRow(oband.XmlLandData.recordset.AbsolutePosition-1);
		else
			var strMsg="";
        ue_navctrl(oband,strMsg,curindex)
        return;
	}
	

	function ue_nlast(itemname)
	{
	    var oband=document.UnitItem.getBandByItemName(itemname);
		if(!oband)   return;
		if(oband.RecordCount()<1)
			return;
		var curindex=oband.XmlLandData.recordset.recordCount-1;
		if(curindex!=oband.XmlLandData.recordset.AbsolutePosition-1)
			var strMsg=oband.CalXmlLand.ValidateRow(oband.XmlLandData.recordset.AbsolutePosition-1);
		else
			var strMsg="";
        ue_navctrl(oband,strMsg,curindex)
		return;
	}
	
	function ue_nprev(itemname)
	{
	    var oband=document.UnitItem.getBandByItemName(itemname);
		if(!oband)   return;
		if(oband.RecordCount()<1)
			return;
		var index=oband.XmlLandData.recordset.AbsolutePosition-1;
		var curindex=(index<1)?0:(index-1);
		if(curindex!=index)
			var strMsg=oband.CalXmlLand.ValidateRow(oband.XmlLandData.recordset.AbsolutePosition-1);
		else
			var strMsg="";
		ue_navctrl(oband,strMsg,curindex);
		return;
	}

    function ue_navctrl(oband,strMsg,curindex)
    {
	    if(strMsg && ""!=strMsg)
	    {
		    alert(strMsg);return;
	    }
	    oband.setCurrentRow(curindex);
	    if(oband.Grid && oband.Grid.curTd)
	    {
		    var ctrl=ToolUtil.getCtrlByNameD(false,oband.Grid.curTd,"colname");
		    if(ctrl) ctrl.fireEvent("onfocus");
		    
	    }	
    }        
    function te_save()
    {
        var ctrl = event.srcElement;
        var oband=document.UnitItem.getBandByItemName(ctrl.name.replace("_btn",""));
        var linkval = mband.getFldStrValue("名称");
        var newId = ToolUtil.NewGUID();
        if(oband.status=="new") oband.id = newId;
        var flag = (oband.status=="new")?"1":"0";
        switch(oband.ItemName)
        {
            case "dt_contact":
                var strsql = "EXECUTE dbo.ContactUpdate "+ flag;
                break
            case "dt_opport":
                var strsql = "EXECUTE dbo.OpportUpdate "+ flag;
                break
            case "dt_care":
                var strsql = "EXECUTE dbo.CareUpdate "+ flag;
                break
        }
        strsql = ue_sqlUpdate(oband,strsql,linkval);
        if(ue_ajaxdom(strsql,"1")=="ok"){
            ue_SynAband(oband,linkval);
            oband.modify = false;
            oband.status="";
            us_readband(oband);
            initCEditStatus(event.srcElement);
	    }
    }
    //同步到oband.data
    function ue_SynAband(oband,linkval)
    {
        var keyId = oband.id;
        var linkCol = oband.linkCol;
        var IsNew = (oband.status=="new")?true:false;
        if(IsNew) var xmlNodeRow = oband.root.createElement("table");
        else var xmlNodeRow = oband.data.selectSingleNode("//table[ID='"+ keyId +"']");
        for(var i=0;i<oband.ColNames.length;i++)
        {
	        if(IsNew) var xmlNode = xmlNodeRow.appendChild(xmlNodeRow.ownerDocument.createElement(oband.ColNames[i]));
	        else{
	         var xmlNode = xmlNodeRow.selectSingleNode(oband.ColNames[i]);
	         if(!xmlNode) xmlNode = xmlNodeRow.appendChild(xmlNodeRow.ownerDocument.createElement(oband.ColNames[i]));
	        }
            switch(oband.DataTypes[i])
            {
                case "Boolean":
                    xmlNode.text = (document.getElementById(oband.ItemName + "_" + oband.ColNames[i]).checked)?"true":"false";
                    break;
                default:
                    if(oband.ColNames[i]==linkCol) xmlNode.text=linkval;
                    else 
                    {
                        if(oband.ColNames[i]=="ID") xmlNode.text = keyId;
                        else
                        {
                            var colctrl = document.getElementById(oband.ItemName + "_" + oband.ColNames[i]);
                            if(!colctrl) {xmlNode.text = "";break;};
		                    if(colctrl.tagName.toLowerCase()=="div" || colctrl.tagName.toLowerCase()=="span")
		                    {
		                        xmlNode.text = colctrl.innerHTML;
		                        break;
		                    }
                            if(colctrl.type=="radio")
                            {
                                var colctrls = document.getElementsByName(oband.ItemName + "_" + oband.ColNames[i]);
                                if(!colctrls) xmlNode.text = "";
                                else
                                {
                                    for (var m=0;m<colctrls.length;m++)
                                    {
                                        if(colctrls[m].checked) {xmlNode.text = colctrls[m].value;break;}
                                    }
                                }
                            }
                            else
                                xmlNode.text = colctrl.value;
                        }
                    }
                    break
            }
        }
        if(IsNew){
             oband.data.appendChild(xmlNodeRow);
         }
         ue_ResetABand(oband);
    }
    //初始化编辑按钮状态    
    function initCEditStatus(obj)
    {
        document.getElementById(obj.name+"_edit").innerHTML = '<font face="Webdings" color="#ffff00"></font>编辑';
        document.getElementById(obj.name+"_new").innerHTML = '<font face="Webdings" color="#ffff00">+</font>新建';
        document.getElementById(obj.name+"_edit").style.display="inline";
        document.getElementById(obj.name+"_new").style.display="inline";
        document.getElementById(obj.name+"_save").style.display="none";
        document.getElementById(obj.name+"_edit").tag="编辑";
        document.getElementById(obj.name+"_new").tag="新建";
    }
    //根据表格ID-参数名,控件值-参数值
    function ue_sqlUpdate(oband,strsql,linkval)
    {
        var s = "";
        var EditId = oband.id;
        for (var i=0;i<oband.ColNames.length;i++)
        {
            switch(oband.DataTypes[i])
            {
                case "Guid":
                    s = s + ",'" + EditId+"'";
                    break;
                case "Boolean":
                    var colctrl = document.getElementById(oband.ItemName + "_" + oband.ColNames[i]);
                    if(!colctrl) 
                        s = s + "," + "null";
                    else
                        if(colctrl.checked) s = s + "," + "1";
                        else s = s + "," + "0";
                    break;
                case "Int32":
                case "Decimal":
                    var colctrl = document.getElementById(oband.ItemName + "_" + oband.ColNames[i]);                
                    if(!colctrl) s = s + "," + "null";
                    else 
                        if(colctrl.value=="") s = s + "," + "null";
                        else s = s + "," + colctrl.value;
                    break;
                default:
                    if(oband.ColNames[i]==oband.linkCol) {s = s + ",'" + linkval + "'";break;}
                    var colctrl = document.getElementById(oband.ItemName + "_" + oband.ColNames[i]);
                    if(!colctrl || colctrl.value=="") {s = s + "," + "null";break;}
                    
                    var colctrls = document.getElementsByName(oband.ItemName + "_" + oband.ColNames[i]);
                    if(colctrl.type=="radio") 
                    {
                        if(!colctrls) s = s + "," + "null";
                        else
                        {
                            for (var m=0;m<colctrls.length;m++)
                            {
                                if(colctrls[m].checked) {s = s + "," + colctrls[m].value;break;}
                            }
                        }
                    }
                    else 
                        s = s + ",'" + colctrl.value + "'";
                    break
            }
        }
        return strsql + s;
    }

    function SynBandTitle(oband)
    {
	    var s="",simg="";
	    var imode = 2;
	    oband.rows = oband.XmlLandData.XMLDocument.selectNodes("//"+oband.DataItem);
	    for(var i=0;i<oband.rows.length;i++)
	    {
	        var Idrow = oband.rows[i].selectSingleNode("ID");
	        var en = "";
	        if((i+1) % imode==0) en="<br />";
	        switch(oband.ItemName)
	        {
	            case "联系人":
	                var row = oband.rows[i].selectSingleNode("姓名");
                    if(row.text!=""){
                        s = s + " <img border='0' src='../html/Images/messenger.gif'><a href='#' class='linkbtn_0' band='联系人' onclick='us_checkin()' id='"+Idrow.text+"' name='联系人_btn'>"+row.text+"</a>";
                        simg = simg + " <img border='0' src='../html/Images/messenger.gif'><a href='#'  band='联系人' title='管理联系人' class='linkbtn_0' id='"
                        +Idrow.text+"'onclick='openPro();us_checkin()' name='联系人_btn'>"+row.text+"</a>";
                    }
                break;
	            case "销售机会":
	                var row = oband.rows[i].selectSingleNode("主题");
                    if(!row || row.text=="") break;
                    if(oband.rows[i].selectSingleNode("发现时间"))
                        var skey = oband.rows[i].selectSingleNode("发现时间").text + " ";
                    else skey="";
                    
                    if(oband.rows[i].selectSingleNode("状态"))
                        var status = oband.rows[i].selectSingleNode("状态").text + " ";
                    else status = "跟踪";
                    
                    if(oband.rows[i].selectSingleNode("阶段"))
                        var stage = oband.rows[i].selectSingleNode("阶段").text + " ";
                    else stage = "";

                    s = s + " <span style='width:330px;'><img border='0' src='../html/Images/feed.gif' /><a href='#' width=200px class='linkbtn_0' band='销售机会' onclick='us_checkin()' id='"
                    +Idrow.text+"' name='销售机会_btn' >" 
                    + skey +status+stage+row.text + "</a></span>" + en;
                    break;
	            case "客户关怀":
	                var row = oband.rows[i].selectSingleNode("主题");
                    if(!row || row.text=="") break;
                    if(oband.rows[i].selectSingleNode("日期"))
                        var skey = oband.rows[i].selectSingleNode("日期").text + " ";
                    else skey="";
                    
                    if(oband.rows[i].selectSingleNode("联系人"))
                        var status = oband.rows[i].selectSingleNode("联系人").text + " ";
                    else status = " ";
                    s = s + " <span style='width:300px;'><img border='0' src='../html/Images/feed.gif' /><a href='#' width=200px class='linkbtn_0' band='客户关怀' onclick='us_checkin()' id='"
                    +Idrow.text+"' name='客户关怀_btn' >" 
                    + skey +status+row.text + "</a></span>" + en;
                break;
             }
	    }
	    var keytable = document.getElementsByName(oband.ItemName+"_keytable");
	    if(!keytable) return;
	    for(var i=0;i<keytable.length;i++)
	    {
	        if(s=="") s="无";
	        keytable[i].innerHTML = s
	    }
    }
    
    /*初始化控件数据：
        1 当非按钮操作时(初始化)，读出band.data标签数据生成查询标签，给band.id赋初始值，
          读取band.id对应行数据到编辑表格
          如果band.count=0,则将编辑表格置空
        2 当点击标签时，根据标签id取出对应行数据
    */
	function us_readband(oband)
	{   
	    //如果oband为空，根据点击的按钮上的band名称获取当前band
	    if(!oband)
	        oband=document.UnitItem.getBandByItemName(event.srcElement.band);
	    //if(oband.modify){alert("正在编辑中...，请确认！");return;}
	    //更新关键字显示内容
	    SynBandTitle(oband);
	    //根据点击的标签提出对应的oband行内容
	    if(oband.NoAuto)
	    {
	        if(oband.status=="new") oband.id = "";
	        else
	        {
                var rowNode = oband.data.selectSingleNode("//table[ID='"+event.srcElement.id+"']");
                if(rowNode) oband.id = event.srcElement.id;
                else
                {
                    if(oband.id=="")
                        oband.id = (oband.count!=0)?oband.rows[0].selectSingleNode("ID").text:"";
                }
	        }
	    }
	    ue_BandToInput(oband);
    }    

    
    function ue_BandToInput(oband)
    {
        if(!oband) return;
        var IsRead = (oband.status=="")?true:false;
        var rowNode = oband.data.selectSingleNode("//table[ID='"+oband.id+"']");
		for(var i=0;i<oband.ColNames.length;i++)
		{
		    var oinput = document.getElementById(oband.ItemName + "_" + oband.ColNames[i]);
		    var val = "";
	        if(oband.count>0 && rowNode) 
	        {
	            val = (rowNode.selectSingleNode(oband.ColNames[i]))?rowNode.selectSingleNode(oband.ColNames[i]).text:"";
	            if(oband.ColNames[i]=="ID") oband.id = val;
	        }
		    if(!oinput) continue;
		    var row;
		    if(rowNode) row = rowNode.selectSingleNode(oband.ColNames[i]);
		    if(row) val = row.text;
		    var otype= oinput.type;
		    switch(otype)
		    {
		        case "checkbox":
		            oinput.disabled = IsRead;
		            if(val.toLowerCase()=="true" || val.toLowerCase()=="1" || val.toLowerCase()=="-1")
		                oinput.checked=true;
		            else
		                oinput.checked=false;
				    break;
		        case "radio":	            
		            oinput.disabled = IsRead;
			        var names= msgetElementsByName(oinput,oinput.name);
			        for(var m=0;m<names.length;m++)
			        {
			            names[m].disabled = IsRead;
			            if(names[m].value==val) names[m].checked = true;
			            else names[m].checked = false;
			        }
				    break;
				default:
		            if(oinput.tagName.toLowerCase()=="div" || oinput.tagName.toLowerCase()=="span")
		            {
		                oinput.innerHTML = val;
		                break;
		            }
		            oinput.disabled = IsRead;		            
			        if(oinput.tagName.toLowerCase()=="select")
			        {
				        //ms_ajaxoptions(oinput);
				        oinput.value=val;
				    }
				    else
		    		    if(oinput.className.toLowerCase()=="xlandimg" && oinput.tagName.toLowerCase()=="img")
		    		    {
		    		        var sysurl="";
	    		            if(band.XmlSchema.document.referrer)
	    		                sysurl = band.XmlSchema.document.referrer.replace("contents.htm","").replace("listbar.htm","");//"http://localhost:8096/hmapp/contents.htm
		    		        if(val!="") 
                                oinput.src=sysurl+"wfimg.aspx?img="+val;
	                        else
	                            oinput.src=sysurl+"wfimg.aspx?img=Floppy.JPG";
	                    }
					    else 		
			                oinput.value=val;
		    }
		}     
    }
    
    function   msgetElementsByName(obj,name)
    {   
        var   all   =  obj.parentElement.all;   
        var   result   =   [];
        for   (var   i=0;i<all.length;i++)   
        if   (all[i]["name"]==name)   
        result   [result.length]   =   all[i];   
        return   result;   
    }   

		var sSearchKey = "客户查询...";
		/**
		 * 检查关键字
		 * @param {object}o form表单
		 * @return {bool}返回是否通过验证
		 */
		function fSearchCheck(o){
			var s = o["keyword"].value.trim();
			if(!s || s == sSearchKey){
				try{
					fShowError("请输入搜索关键字");
					o["keyword"].focus();
				}catch(e){}
				return false;
			}
			return true;
		}
		/**
		 * 输入框聚焦
		 * @param {object}o 输入框对象
		 * @return {void}
		 */
		function fSearchFocus(o){
			o.className='IptOnF fRi'
			if(o.value.trim() == sSearchKey){
				o.value = "";
			}
		}
		/**
		 * 输入框失去聚焦
		 * @param {object}o 输入框对象
		 * @return {void}
		 */
		function fSearchBlur(o){
			o.className='Ipt fRi'
			if(o.value.trim() == ""){
				o.value = sSearchKey;
			}
		}

	function us_checkin(oband)
	{   
	    //如果oband为空，根据点击的按钮上的band名称获取当前band
	    if(!oband)
	        oband=document.UnitItem.getBandByItemName(event.srcElement.band);
	    if(oband.modify){alert("正在编辑中...，请确认！");return;}
	    //更新关键字显示内容
	    SynBandTitle(oband);
	    oband.setCurrentRow(oband.getRowIndex("ID",event.srcElement.id));
    }    
    //客户关怀
    function tb_care(winid)
    {
        return '<div id='+winid+'dvbar style="text-align:right"></div><table cellSpacing="0" cellPadding="0" id="table8" style="border-collapse: collapse;BORDER: #f2f2f2 1px dotted;width:99%;height:100%" bordercolorlight="#E8E8E8" bordercolordark="#E8E8E8">\
		<tr><td align="right" style="BORDER-BOTTOM: #f2f2f2 1px dotted;height:30px"><font face="Wingdings" color="#ff0000">v</font>关怀主题：</td>\
		<td width="22%" style="BORDER-BOTTOM: #f2f2f2 1px dotted"><input datasrc="#dt_care" datafld="主题" class="xlandinput" style="WIDTH: 100%" name="T2" size="20"></td>\
		<td  align=right width="9%">联系人：</td><td  align=right width="14%"><select datasrc="#dt_care" datafld="联系人" class="xlandinput" style="WIDTH: 100%; HEIGHT: 20px" size="1" name="D1">\
		<option></option><option value="boss" >boss</option></select></td><td  align=right><font face="Wingdings" color="#ff0000">v</font>日期：</td>\
		<td  width="27%"><input datasrc="#dt_care" datafld="日期" class="xlanddate"  style="WIDTH: 100%"  value="" name="T6" size="20"></td></tr>\
		<tr><td align="right" style="BORDER-BOTTOM: #f2f2f2 1px dotted">关怀内容：</td>\
		<td width="86%" height=100px colSpan="5" style="BORDER-BOTTOM: #f2f2f2 1px dotted"><textarea style="WIDTH: 100%;height:95%" class="xlandinput"  datasrc="#dt_care" datafld="内容" ></textarea></td></tr>\
		<tr><td align="right" style="BORDER-BOTTOM: #f2f2f2 1px dotted;height:30px">负责人：</td>\
		<td width="22%" style="BORDER-BOTTOM: #f2f2f2 1px dotted"><select datasrc="#dt_care" datafld="负责人" class="xlandinput"  style="WIDTH: 100%;" size="1">\
		<option></option><option value="B1" selected>boss</option></select></td>\
		<td align="right" width="9%" style="BORDER-BOTTOM: #f2f2f2 1px dotted">类型：</td>\
		<td align="right" width="14%" style="BORDER-BOTTOM: #f2f2f2 1px dotted">\
		<select style="WIDTH: 100%; HEIGHT: 20px" size="1" datasrc="#dt_care" datafld="类型" class="xlandinput" name="D3" ><option></option><option value="普通">普通</option></select></td>\
		<td align="right" style="BORDER-BOTTOM: #f2f2f2 1px dotted">　</td><td width="27%" style="BORDER-BOTTOM: #f2f2f2 1px dotted"></td></tr><tr>\
		<td align="right"style="BORDER-BOTTOM: #f2f2f2 1px dotted" >反馈情况：</td>\
		<td width="86%" height=100px colSpan="5" style="BORDER-BOTTOM: #f2f2f2 1px dotted"><textarea style="WIDTH: 100%;height:100%" class="xlandinput"  datasrc="#dt_care" datafld="反馈情况" ></textarea></td>\
		</tr><tr><td align="right" height="50" style="BORDER-BOTTOM: #f2f2f2 1px dotted">备注：</td>\
		<td width="86%" colSpan="5" style="BORDER-BOTTOM: #f2f2f2 1px dotted"><textarea style="WIDTH: 100%;height:99%" class="xlandinput"  datasrc="#dt_care" datafld="备注" ></textarea></td>\
		</tr></table></td></tr></table>';
    }
    //日程
    function tb_action(winid)
    {
        return '<div id='+winid+'dvbar style="text-align:right"></div>\
        <table cellSpacing="0" cellPadding="2" width="100%" border="0" id="table6">\
			<tr>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >\
				<font face="Wingdings" color="#ff0000">v</font>主　　题:</td>\
				<td vAlign="top" width="30%" bgColor="#f8f8f8" colSpan="3">\
				<input class="xlandinput"  datasrc="#dt_action" datafld="主题" style="width: 99%" name="dt_action_title"></td>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >联系人:</td>\
				<td vAlign="top" width="30%" bgColor="#f8f8f8" colSpan="3">\
				<input class="xlandinput"  datasrc="#dt_action" datafld="联系人" style="width: 99%" name="dt_action_title"></td>\
			</tr>\
			<tr>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >开始日期:</td>\
				<td vAlign="top" width="30%" colSpan="3" bgColor="#f8f8f8">\
				<input class="xlanddate"  datasrc="#dt_action" datafld="开始日期_格式" style="width: 99%" name="dt_action_title"></td>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >开始时间:</td>\
				<td vAlign="top" width="30%" bgColor="#f8f8f8" colSpan="3">\
				<input class="xlandinput"  datasrc="#dt_action" datafld="开始时间" style="width: 99%" name="dt_action_title"></td>\
			</tr>\
			<tr>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >结束日期:</td>\
				<td vAlign="top" width="30%" colSpan="3" bgColor="#f8f8f8">\
				<input class="xlanddate"  datasrc="#dt_action" datafld="结束日期_格式" style="width: 99%" name="dt_action_title"></td>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >结束时间:</td>\
				<td vAlign="top" width="30%" colSpan="3" bgColor="#f8f8f8">\
				<input class="xlandinput"  datasrc="#dt_action" datafld="结束时间" style="width: 99%" name="dt_action_title"></td>\
			</tr>\
			<tr>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >类　　型:</td>\
				<td vAlign="top" width="30%" colSpan="3" bgColor="#f8f8f8">\
				<input class="xlandinput"  datasrc="#dt_action" datafld="类型" style="width: 99%" name="dt_action_title"></td>\
			</tr>\
            <tr>\
                <td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%">描　　述:</td>\
                <td vAlign="top" width="90%" colSpan="7" bgColor="#f8f8f8">\
                <textarea style="width: 100%;height:300" name="dt_action_content" ></textarea></td>\
            </tr>\
		</table>';
}
    //任务
    function tb_task(winid)
    {
        return '<div id='+winid+'dvbar style="text-align:right"></div>\
        <table cellSpacing="0" cellPadding="2" width="100%" border="0" id="table6">\
			<tr>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >\
				<font face="Wingdings" color="#ff0000">v</font>主　　题:</td>\
				<td vAlign="top" width="30%" bgColor="#f8f8f8" colSpan="3">\
				<input class="xlandinput"  datasrc="#dt_action" datafld="主题" style="width: 99%" name="dt_action_title"></td>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >联系人:</td>\
				<td vAlign="top" width="30%" bgColor="#f8f8f8" colSpan="3">\
				<input class="xlandinput"  datasrc="#dt_action" datafld="联系人" style="width: 99%" name="dt_action_title"></td>\
			</tr>\
			<tr>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >类　　型:</td>\
				<td vAlign="top" width="30%" colSpan="3" bgColor="#f8f8f8">\
				<input class="xlanddate"  datasrc="#dt_action" datafld="类型" style="width: 99%" name="dt_action_title"></td>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >优先级:</td>\
				<td vAlign="top" width="30%" bgColor="#f8f8f8" colSpan="3">\
				<input id="valuing0" type="radio" value="高" name="价值评估" onclick="ue_radiowrite(mband)"><label for="valuing0">高</label><input id="valuing1" type="radio" value="中" name="价值评估" onclick="ue_radiowrite(mband)"><label for="valuing1">中</label><input id="valuing2" type="radio" onclick="ue_radiowrite(mband)" value="低" name="价值评估" checked><label for="valuing2">低</label></td>\
			</tr>\
			<tr>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >完成期限:</td>\
				<td vAlign="top" width="30%" colSpan="3" bgColor="#f8f8f8">\
				<input class="xlanddate"  datasrc="#dt_action" datafld="完成期限_格式" style="width: 99%" name="dt_action_title"></td>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >时　间:</td>\
				<td vAlign="top" width="30%" colSpan="3" bgColor="#f8f8f8">\
				<input class="xlandinput"  datasrc="#dt_action" datafld="时间" style="width: 99%" name="dt_action_title"></td>\
			</tr>\
			<tr>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >状　　态:</td>\
				<td vAlign="top" width="30%" colSpan="3" bgColor="#f8f8f8">\
				<input id="valuing0" type="radio" value="已结束" name="价值评估" onclick="ue_radiowrite(mband)"><label for="valuing0">已结束</label><input id="valuing1" type="radio" value="中" name="价值评估" onclick="ue_radiowrite(mband)"><label for="valuing1">未结束</label><input id="valuing2" type="radio" onclick="ue_radiowrite(mband)" value="低" name="价值评估" checked><label for="valuing2">取消</label></td>\
				<td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%" >执行人:</td>\
				<td vAlign="top" width="30%" colSpan="3" bgColor="#f8f8f8">\
				<input class="xlandinput"  datasrc="#dt_action" datafld="执行人" style="width: 99%" name="dt_action_title"></td>\
			</tr>\
            <tr>\
                <td style="border-bottom: 1px solid #ffffff" vAlign="top" noWrap align="right" width="10%">描　　述:</td>\
                <td vAlign="top" width="90%" colSpan="7" bgColor="#f8f8f8">\
                <textarea style="width: 100%;height:300" name="dt_action_content" ></textarea></td>\
            </tr>\
		</table>';
}
    //销售机会
    function tb_opport(winid)
    {
        return '<div id='+winid+'dvbar style="text-align:right"></div>\
        <table cellSpacing="0" cellPadding="2" width="100%" border="0" id="table6">\
			<tr>\
				<td style="height:25px"   colSpan="6" background="images/cubac.gif"><font face="Wingdings" color="#ff0000">v</font>基本情况：</td>\
			</tr>\
			<tr>\
				<td align="right" ><font face="Wingdings" color="#ff0000">v</font>机会主题：</td>\
				<td width="22%">\
				<input datasrc="#dt_opport" datafld="主题" class="xlandinput" style="WIDTH: 100%" name="T2" size="20"></td>\
				<td  align=right width="11%">类　　型：</td>\
				<td  align=right width="14%">\
				<select datasrc="#dt_opport" datafld="类型" class="xlandinput" style="WIDTH: 100%; HEIGHT: 20px" size="1" name="D1">\
				<option selected></option><option value="1">分类一</option><option value="2">分类二</option>\
				<option value="3">分类三</option></select></td>\
				<td  align=right>来　源：</td>\
				<td  vAlign="top" width="30%"><select datasrc="#dt_opport" datafld="来源" class="xlandinput"  style="WIDTH: 100%;" size="1">\
				<option selected></option><option value="1">电话来访</option><option value="2">客户介绍</option>\
				<option value="3">独立开发</option><option value="4">媒体宣传</option><option value="5">促销活动</option>\
				<option value="6">老客户</option><option value="7">代理商</option><option value="8">合作伙伴</option>\
				<option value="9">公开招标</option><option value="10">其他</option><option value="11">互联网</option>\
				</select></td>\
			</tr>\
			<tr>\
				<td align="right" >负责人：</td>\
				<td width="22%"><select datasrc="#dt_opport" datafld="负责人" class="xlandinput"  style="WIDTH: 100%;" size="1">\
				<option></option><option value="B1" selected>boss</option></select></td>\
				<td align="right" width="9%" >发现时间：</td>\
				<td align="right" width="14%" >\
				<input  datasrc="#dt_opport" datafld="发现时间" class="xlanddate"  style="WIDTH: 100%"  value="" name="T1" size="20"></td>\
				<td align="right" >提供人：</td>\
				<td width="27%"><input style="WIDTH: 100%"  datasrc="#dt_opport" datafld="提供人" class="xlandinput" ></td>\
			</tr>\
			<tr>\
				<td align="right" >客户需求：</td>\
				<td width="86%" height=70px colSpan="5"><textarea style="WIDTH: 100%;height:100%" class="xlandinput" datasrc="#dt_opport" datafld="需求" ></textarea></td>\
			</tr>\
			<tr>\
				<td style="height:25px"   colSpan="6" background="images/cubac.gif"><font face="Wingdings" color="#ff0000">v</font>预期</td>\
			</tr>\
			<tr>\
				<td align="right" width="14%" bgColor=#FFFFCC width="120px">预计签单日期：</td>\
				<td width="22%"><input style="WIDTH: 100%" datasrc="#dt_opport" datafld="预期日期" class="xlanddate" ></td>\
				<td width="9%" align="right">预期金额：</td>\
				<td width="14%">\
				<input style="WIDTH: 100%" datasrc="#dt_opport" datafld="预期金额" class="xlandinput" name="T3" size="20" ></td>\
				<td width="20%" align="right">预期金额(外币)：</td>\
				<td width="27%">\
				<input style="WIDTH: 100%" datasrc="#dt_opport" datafld="外币" class="xlandinput" name="T4" size="20" ></td>\
			</tr>\
			<tr>\
				<td style="height:25px"   colSpan="3" background="images/cubac.gif"><font face="Wingdings" color="#ff0000">v</font>当前状态</td>\
				<td style="height:25px"   colSpan="3" background="images/cubac.gif" align="right">\
				<input id="销售机会_状态_0" band="销售机会" type="radio" CHECKED value="跟踪" name="销售机会_状态" onclick="ue_radiowrite()"><label for="销售机会_状态_0">跟踪</label>\
				<input id="销售机会_状态_1" band="销售机会" type="radio" value="成功" name="销售机会_状态" onclick="ue_radiowrite()"><label for="销售机会_状态_1">成功</label>\
				<input id="销售机会_状态_2" band="销售机会" type="radio" value="失败" name="销售机会_状态" onclick="ue_radiowrite()"><label for="销售机会_状态_2">失败</label>\
				<input id="销售机会_状态_3" band="销售机会" type="radio" value="搁置" name="销售机会_状态" onclick="ue_radiowrite()"><label for="销售机会_状态_3">搁置</label>\
				<input id="销售机会_状态_4" band="销售机会" type="radio" value="失效" name="销售机会_状态" onclick="ue_radiowrite()"><label for="销售机会_状态_4">失效</label></td>\
			</tr>\
			<tr>\
				<td align="right" bgColor="#FFFFCC">阶　　段：</td>\
				<td width="22%"><select style="WIDTH: 100%; " size="1" datasrc="#dt_opport" datafld="阶段" class="xlandinput" >\
				<option selected></option>\
				<option value="初期沟通">初期沟通</option>\
				<option value="立项评估">立项评估</option>\
				<option value="需求分析">需求分析</option>\
				<option value="方案制定">方案制定</option>\
				<option value="招投标/竞争">招投标/竞争</option>\
				<option value="商务谈判">商务谈判</option>\
				<option value="合同签约">合同签约</option>\
				</select></td>\
				<td align="right" bgColor="#FFFFCC">可能性：</td>\
				<td align="right" bgColor="#FFFFCC">\
				<select style="WIDTH: 100%; HEIGHT: 20px" size="1" datasrc="#dt_opport" datafld="可行性" class="xlandinput" name="D2" >\
				<option selected></option>\
				<option value="00">00%</option>\
				<option value="10">10%</option>\
				<option value="20">20%</option>\
				<option value="30">30%</option>\
				<option value="40">40%</option>\
				<option value="50">50%</option>\
				<option value="60">60%</option>\
				<option value="70">70%</option>\
				<option value="80">80%</option>\
				<option value="90">90%</option>\
				<option value="100">100%</option>\
				</select></td>\
				<td align="right" bgColor="#FFFFCC">阶段停留：</td>\
				<td width="27%">\
				<input style="WIDTH: 40px;text-align:center"  datasrc="#dt_opport" datafld="阶段停留" readonly class="xlandinput" name="T5" size="20" /> 天</td>\
			</tr>\
			<tr>\
				<td align="right" bgColor="#FFFFCC">阶段备注：</td>\
				<td width="86%" colSpan="5"><input style="WIDTH: 100%" type="text" datasrc="#dt_opport" datafld="阶段备注" class="xlandinput" /></td>\
			</tr>\
			<tr>\
				<td style="height:25px"   colSpan="6" background="images/cubac.gif" colSpan="4"><font face="Wingdings" color="#ff0000">v</font>机会阶段推进历史：<font color="#808000">(自动)</font></td>\
			</tr>\
			<tr>\
				<td width="100%" colSpan="6">\
				<textarea style="WIDTH: 100%;height:80px" datasrc="#dt_opport" datafld="历史" class="gridbrowse" onkeydown="GridUtil.usOnCellEnterTab();"  readonly="true" onfocus="GridUtil.usOnCellRFocusHandle();"></textarea>\
				</td>\
			</tr>\
			<tr>\
				<td width="100%" colSpan="6"><p><font color="#ff3399">注意： <b>橙色区域的数据应及时更新</b>；这将有利于您的销售漏斗和销售预测的准确性</font>\
				</td>\
			</tr>\
    </table>';
}
