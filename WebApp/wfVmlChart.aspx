<%@ Page Language="C#" AutoEventWireup="true" CodeFile="wfVmlChart.aspx.cs" Inherits="Estar.WebApp.wfVmlChart" ValidateRequest="false" %>

<%@ Register Src="GridLand.ascx" TagName="GridLand" TagPrefix="uc3" %>
<%@ Register Src="TreeLand.ascx" TagName="TreeLand" TagPrefix="uc4" %>
<%@ Register Assembly="Estar.Common.WebControls" Namespace="Estar.Common.WebControls" TagPrefix="wc" %>
<%@ Register Src="XmlConfLand.ascx" TagName="XmlConfLand" TagPrefix="uc1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head >
    <title>正在打开页面...</title>
    <meta content="Microsoft Visual Studio .NET 7.1" name="GENERATOR" />
    <meta content="C#" name="CODE_LANGUAGE" />
    <meta content="JavaScript" name="vs_defaultClientScript" />
    <meta content="http://schemas.microsoft.com/intellisense/ie5" name="vs_targetSchema" />
    <LINK href="mstoolbar_files/css.css" type="text/css" rel="stylesheet" />
    <style type="text/css">
		BODY { FONT-SIZE: 9pt; COLOR: #333333; FONT-FAMILY: "宋体", "Arial" }
		TD { FONT-SIZE: 9pt; COLOR: #333333; FONT-FAMILY: "宋体", "Arial" }
		</style>
    <STYLE>
v\:*         { behavior: url(#default#VML) }
o\:*         { behavior: url(#default#VML) }
.shape       { behavior: url(#default#VML) }
</STYLE>
</head>

<body style="background-color: white; overflow: auto; margin: 0px; position: relative;top: 0px;">
    <script src="../hmjs/sysjs/GridUtilXSLT.js" type="text/javascript" charset="gb2312"></script>
    <iframe id="iframeWeb" width="0" height="0"></iframe>
    <form id="form1" runat="server" style="left: 0px; position: relative;top: 0px">
        <asp:Xml ID="xmlParam" runat="server" TransformSource="TrvIsland.xslt"></asp:Xml>
        <uc1:XmlConfLand ID="xmlConf" runat="server" />
    <div style="display:none;">
            <input id="hlb_cmd" style="width: 155px; height: 1px" type="hidden" name="hlb_cmd" runat="server" />
            <asp:ListBox ID="lstb" runat="server" AutoPostBack="True" EnableViewState="False" Rows="1"></asp:ListBox>
            <asp:Button ID="bt_PostBack" runat="server" Height="1px" Text="PostBack" OnClick="bt_PostBack_Click"></asp:Button>
            <input id="hlbRequestParams" type="hidden" name="hlbRequestParams" runat="server" />
    </div>
        <table style="width: 100%; height: 98%" cellspacing="0" cellpadding="0" border="0">
            <tr>
                <td style="height: 440px;" valign="top" align="left">
            <wc:edittemplate id="etpTemplate" runat="server" BorderStyle="Solid" BackColor="White" 
                Height="100%" BorderColor="Gray" BorderWidth="0px" Width="100%"></wc:edittemplate>
                    </td>
            </tr>
        </table>
    </form>
</body>
</html>
