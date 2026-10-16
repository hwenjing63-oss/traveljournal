/* Public static edition: visitor data stays in that visitor's browser. */
const publicHelp='这是公开体验版，札记保存在你自己的浏览器中，不会与其他访客共享。';
const publicFootnote=document.querySelector('.footnote');if(publicFootnote)publicFootnote.textContent=publicHelp+' 请定期导出 JSON 备份。';
checkAI=async function(){$('aiStatus').textContent='公开版暂未配置 AI 服务。编辑、地图、天气和导出仍可使用。';$('sendChat').disabled=true;$('webEnabled').disabled=true;$('aiSetup').hidden=true;$('checkAI').hidden=true;};
$('chatForm').onsubmit=e=>{e.preventDefault();toast('此公开版尚未配置 AI 服务。')};
$('aiSetup').onclick=()=>toast('AI 服务需由网站所有者配置。');
$('setupDialog').innerHTML='<h2>公开版说明</h2><p>'+publicHelp+'</p><p>当前尚未配置公用 AI 服务。</p><button id="closePublicHelp">关闭</button>';
$('closePublicHelp').onclick=()=>$('setupDialog').close();
