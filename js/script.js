document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("videoPlayerContainer"),n=document.getElementById("loadingBar"),r=document.getElementById("loadingBarContainer"),s=document.getElementById("loadingText");let a=0;let d=!1,i=0,l;const c=[];let w=!1;const m=["wwwroot/assets/CowboyHead.gif","wwwroot/assets/TranVid.mov","wwwroot/videos/SW1.mp4","wwwroot/videos/SW2.mp4","wwwroot/videos/SW3.mp4","wwwroot/videos/SW4.mp4","wwwroot/videos/SW5.mp4","wwwroot/videos/SW6.mp4","wwwroot/videos/SW7.mp4","wwwroot/videos/SW8.mp4","wwwroot/videos/SW9.mp4","wwwroot/videos/SW10.mp4","wwwroot/videos/SW11.mp4","wwwroot/videos/SW12.mp4","wwwroot/videos/SW13.mp4","wwwroot/videos/SW14.mp4"];var e=new createjs.LoadQueue;function p(e){if(!w){const t=c[e];o.innerHTML="",o.appendChild(t),t.setAttribute("playsinline",""),t.currentTime=i,console.log("Before play: audioStartTime =",i),t.addEventListener("ended",function(){t.currentTime=0,t.play().catch(e=>{console.error("Video playback error:",e.message)})}),t.play().catch(e=>{console.error("Video playback error:",e.message)}),u(),console.log("After play")}}function u(){var e=(a+1)%c.length,t=c[e];t.hasAttribute("src")||(t.src=c[e].src)}e.setMaxConnections(5),e.loadManifest(m),e.on("fileload",function(e){var t,e=e.item.src;e.endsWith(".mp4")&&((t=document.createElement("video")).src=e,t.preload="auto",t.setAttribute("playsinline",""),c.push(t)),c.length===m.length-1&&(n.style.display="none",p(0),s.textContent="Click")}),document.addEventListener("click",function(){var e;i=c[a].currentTime,u(),p(a=(a+1)%c.length),d||(createjs.Sound.registerSound({src:"wwwroot/assets/tranAudio.m4a",id:"tranAudio"}),e=createjs.Sound.play("tranAudio"),d=!0,r.style.display="none",e.addEventListener("complete",function(){console.log("game over!"),w=!0;var e=document.createElement("div");e.textContent="thanks for watching...",e.style.fontSize="75px",e.style.fontFamily="Futura, sans-serif",e.style.fontWeight="bold",e.style.color="#eab5ac",e.style.textAlign="center",e.style.textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)",e.style.position="absolute",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",e.style.zIndex="1000",document.body.appendChild(e)}));const t=document.getElementById("tranVideo");t.muted=!0,l&&"running"===l.state?t.play().catch(e=>console.error("tranVideo playback error:",e.message)):(l=new(window.AudioContext||window.webkitAudioContext)).resume().then(()=>{t.play().catch(e=>console.error("tranVideo playback error:",e.message))}),t.addEventListener("ended",function(){t.style.display="none"})})});