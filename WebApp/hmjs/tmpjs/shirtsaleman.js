    var mband;
    var sSearchKey = "客户查询...";
    function initWin()
    {
        InitView();
        mband=$band("字典信息");
        mband.minwidth = "80px";
        mband.freecols = "机构名称";
        mband.gridtype = 8;
        mband.readonly = true;
        var Grid = new XGrid("dvMasterTab",mband,"in",null,1);
        if($U().Rights!="全部"){
            $("supplier").value=$SP("DWName");
            $("supplier").tag="@主代码="+$SP("UnitCode");
            $("supplier").disabled=true; $("supplier").nextSibling.disabled=true;
        }
        $("btnfSearch").fireEvent("onclick");        
        $loading("none");
    }
    function ts_beforeadd()
    {
        if(!$("supplier").tag) {alert("请指定单位!");return;}
        return true;
    }
    function ts_Afteradd(ob)
    {
        ob.setFldStrValue(null,"主名称",$("supplier").value);
        ob.setFldStrValue(null,"主代码", ToolUtil.valueTag($("supplier").tag,"主代码"));
        return true;
    }
    function usBeforeFsearch()
    {
        var mu = ToolUtil.valueTag($("supplier").tag,"主代码");
        ToolUtil.setParamValue($XD(), "supplier", mu,"string", "B", "字典信息","C","D");
        ToolUtil.setParamValue($XD(), "suppliername", $("supplier").value,"string", "B", "字典信息","C","D");
    }
    function cboAfterUpdate(o)
    {
        if(o.nodeName=="A"){
            fSearch("字典信息",o.innerHTML);
            return}
        if(!o || o.id!="supplier") return;
        var mu = ToolUtil.valueTag(o.tag,"主代码");
        ToolUtil.setParamValue($XD(), "supplier", mu,"string", "B", "字典信息","C","D");    
        ToolUtil.setParamValue($XD(), "suppliername", o.value,"string", "B", "字典信息","C","D");
        $('btnfSearch').fireEvent('onclick');
    }
    function InitView()
    {
        ueToolbar("tbdiv",elems1,elemsevent1);
        ueLabel("lbldiv1",elems2,elemsevent2,null,1);
        ueLabel("lbldiv2",elems3,elemsevent3,1);   
        ueLabel("Div3",elems4,elemsevent4);
        ueLabel("Div4",elems5,elemsevent5,1);   
        
        $("fSearchText").name = SearchFields;
    }
    function openPro(){
        if($band("字典信息").Val("主名称")=="") {alert("请先指定所属单位！");return}
        var title  = DlgTitle+"－【创建日期："+"<span datasrc='#"+mband.ID+"' datafld='创建日期_格式'></span>" +"/ 更新日期：<span datasrc='#"+mband.ID+"' datafld='更新日期_格式'></span>】";
        var str=strfind("winview",null,$band("字典信息"));
        DlgWin("winview","gridview",title,"字典信息",str,700,480);
        YPanel("字典信息","dvCustTab",null,1,"@地址=1,@税率=1,@税率1=1,@QQ号=1","220");
    }

    function strfind(winid,gridname,bandname)
    {
        if(!bandname) bandname="";
        var trText = "<span class='span60'>省份：</span><input datasrc='#"+ mband.ID +"' datafld=\"省\" class=\"xlandinput\" style=\"WIDTH: 150;\" /><input title=\"要选择吗，点我一下...\" class=\"txtbtn\" type=button value=\"...\"  style=\"margin-left:-24px;margin-top:2px;width:22px;height:16; position:absolute\" onclick=\"Xcbo();\"/>\
        <span style=\"width:70px;text-align:right\">市：</span><input datasrc='#"+ mband.ID +"' datafld=\"市\" class=\"xlandinput\" style=\"WIDTH: 100;\" /><input title=\"要选择吗，点我一下...\" class=\"txtbtn\" type=button value=\"...\"  style=\"margin-left:-24px;margin-top:2px;width:22px;height:16; position:absolute\" onclick=\"Xcbo();\"/>";
        var s= '<fieldset style="padding: 5px;;width:98%;text-align:left"><legend>主要信息：</legend>\
        <span class="span60">名称：</span><input datasrc="#'+ mband.ID +'" datafld="机构名称" class=\"xlandinput\" style=\"WIDTH: 150;\" /><input title=\"要选择吗，点我一下...\" class=\"txtbtn\" type=button value=\"...\"  style=\"margin-left:-24px;margin-top:2px;width:22px;height:16; position:absolute\" onclick=\"Xcbo();\"/><font face="Wingdings" color="#ff0000">v</font>\
        <span class="span60">代码：</span><input datasrc="#'+ mband.ID +'" datafld="机构代码" class=\"xlandinput\" style=\"WIDTH: 100;\" /><font face="Wingdings" color="#ff0000">v</font>\
        <span class="span80">热点客户：</span><input datasrc="#'+ mband.ID +'" datafld="热点" class="xlandradio" type="checkbox" />\
        　　　【<a href="#" class="linkbtn_0" onclick="ue_save()">保存</a>】&nbsp;&nbsp;【<a href="#" class="linkbtn_0" onclick="ShowHide(\''+winid+'\',\'none\')">关闭</a>】<p style="margin:2"></p>'
        +trText+'&nbsp;<span style="width:110px;text-align:right">停用标志：</span><input datasrc="'+ mband.ID +'" datafld="停用标志" class="xlandradio" type="checkbox" />\
        </fieldset><fieldset style="padding: 5px;height:86%;width:98%"><legend>详细资料：</legend><div id="dvCustTab" style="text-align:left; height:350;width:100%;OVERFLOW-y:auto;"></div></fieldset>'
        return s;
    }
    function secBoard(n) 
    {
        if(n>=mainTable.tBodies.length) return;
        ueToolCurrent(n,"tbdiv");
        for(i=0;i<mainTable.tBodies.length;i++)
          mainTable.tBodies[i].style.display="none";
        mainTable.tBodies[n].style.display="block";
        TabChange(n);
    }
    
    function showchart()
    {
        var title="客户类型分布统计";
        var vname="数量";
        var ItemName = "统计";
        if(!$band(ItemName)) return;
        var chartType="bar";
        var str = strchart("winchart","grdchart",ItemName,title);
        DlgWin("winchart","grdchart",title,ItemName,str,770,480);
        $band("统计").XQuery();
        uc_DisplayChartByBand(true,false,ItemName,"grdchart",title,chartType,null,"数量(个)");
    }    
    
    function strchart(winid,gridname,bandname,title)
    {
        var s= '<fieldset style="padding: 5px;;width:100%;text-align:left"><legend>摘要信息：</legend>\
        <label for="chkcol">按列数据显示：</label><input id="chkcol" type="radio" value="column" \
        onclick="uc_drawchart()" checked name="RdataType" class="xlandradio" />\
        <label  for="chkrow">按行数据显示：</label><input id="chkrow" type="radio" value="row" onclick="uc_drawchart()"  name="RdataType" class="xlandradio" />\
        <label style="width:200px">　</label><label  for="chkbar">直方图：</label><input id="chkbar" type="radio" value="bar" \
        onclick="uc_drawchart()" checked name="RChartType" class="xlandradio" />　\
        <label  for="chkpie">饼图：</label><input id="chkpie" type="radio" value="pie" onclick="uc_drawchart()"  name="RChartType" class="xlandradio" />　\
        <label  for="chkline">折线图：</label><input id="chkline" type="radio" value="line" onclick="uc_drawchart()"  name="RChartType" class="xlandradio" />　\
        <label  for="chkcomb">综合图：</label><input id="chkcomb" type="radio" value="comb" onclick="uc_drawchart()"  name="RChartType" class="xlandradio" />\
        </fieldset><fieldset style="text-align:left;padding: 5px;height:380px;width:100%"><legend>统计数据：</legend>\
        <div class="tablescroll" style="height:380;width:750px;OVERFLOW:auto;">\
        <div id="'+gridname+'" class="tablescroll" style="text-align:left;width:100%; height:100%;margin: 0 auto"></div></div></fieldset>';
        return s;
    }