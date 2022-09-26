!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'list',
        theme: '#2A5290',
        preload: 'auto',
        audio: [
          {
            name: 'closer',
            artist: 'The Chainsmokers / Halsey',
            url: 'https://link.hhtjim.com/163/423228325.mp3',
            cover: 'http://p2.music.126.net/NAT_u_xqHJDeZeiyDls1lQ==/109951167389372164.jpg?param=130y130'
          },
          {
            name: 'mom',
            artist: '蜡笔小心',
            url: 'https://link.hhtjim.com/163/1387581250.mp3',
            cover: 'http://p1.music.126.net/ZOkr1NI-WGGRuc5-G_7-CA==/109951164332837488.jpg?param=130y130'
          },
          {
            name: 'Demons',
            artist: 'Imagine Dragons',
            url: 'https://link.hhtjim.com/163/19945735.mp3',
            cover: 'http://p2.music.126.net/sgE7dVh0LeqkhCnSTrOFbQ==/109951166086048104.jpg?param=130y130'
          },
          {
            name: 'Not Angry',
            artist: 'Chris James',
            url: 'https://link.hhtjim.com/163/1478568147.mp3',
            cover: 'http://p1.music.126.net/8u9G6-hnZZV3HFZxU7RqHw==/109951165528742706.jpg?param=130y130'
          },
          {
            name: '万有引力',
            artist: '汪苏泷',
            url: 'https://www.joy127.com/url/9282.mp3',
            cover: 'http://p2.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg?param=130y130'
          },
          {
            name: 'You blong with me',
            artist: '实况足球',
            url: 'https://www.joy127.com/url/91685.mp3',
            cover: 'http://p1.music.126.net/KurKrZ-dMmviArT5lM2RCQ==/18517974836953202.jpg?param=130y130'
          },
          {
            name: '晴天',
            artist: '周杰伦',
            url: 'https://www.joy127.com/url/88791.mp3',
            cover: 'http://p2.music.126.net/ZGffiDQZrGj5s_hnR1CNbg==/109951165566379710.jpg?param=130y130'
          },
          {
            name: '夏天的风',
            artist: '温岚',
            url: 'https://www.joy127.com/url/77057.mp3',
            cover: 'http://p2.music.126.net/Ng3ogO2Yhn8KBXodOEsLLA==/109951163238900706.jpg?param=130y130'
          },
          {
            name: '倔强',
            artist: '五月天',
            url: 'https://www.joy127.com/url/20311.mp3',
            cover: 'http://p1.music.126.net/ovsWnGqQYBy0XC8WD1lULw==/109951163188724796.jpg?param=130y130'
          },
          {
            name: '七里香',
            artist: '周杰伦',
            url: 'https://www.joy127.com/url/91626.mp3',
            cover: 'http://p1.music.126.net/P1goeQ7SoxEkFsb4ZDijMw==/7746059418324672.jpg?param=130y130'
          },
          {
            name: 'Stay Alive',
            artist: 'José González',
            url: 'https://link.hhtjim.com/163/28143753.mp3',
            cover: 'http://p1.music.126.net/yU_pXqN1KAjjNdKa_fXveQ==/2534374302309080.jpg?param=130y130'
          },
          {
            name: '烟火里的尘埃',
            artist: '华晨宇',
            url: 'https://link.hhtjim.com/163/29004400.mp3',
            cover: 'http://p1.music.126.net/_49Xz_x9kTTdEgmYYk6w2w==/6672936069046297.jpg?param=130y130'
          },
          {
            name: 'Traveling Light',
            artist: 'Joel Hanson / Sara Groves',
            url: 'https://link.hhtjim.com/163/1491585.mp3',
            cover: 'http://p2.music.126.net/zYqptzyHld2ylpb5FOoqDA==/1785606883508227.jpg?param=130y130'
          },
          {
            name: '霜雪千年',
            artist: '双笙',
            url: 'https://link.hhtjim.com/163/34612379.mp3',
            cover: 'http://p1.music.126.net/MlJ3IKOYOGJyrHtCTuLrqg==/18198016951567518.jpg?param=177y177'
          },
          {
            name: '孤岛',
            artist: '赵二',
            url: 'https://link.hhtjim.com/163/1928737018.mp3',
            cover: 'http://p1.music.126.net/blOmXxRCcPEwYhiKeOjccA==/109951167156839103.jpg?param=130y130'
          },
          {
            name: '晚风',
            artist: '7copy',
            url: 'https://link.hhtjim.com/163/1441758494.mp3',
            cover: 'http://p2.music.126.net/lCblKUB1hLND5FxiVI1_Lw==/109951164919449758.jpg?param=130y130'
          },
          {
            name: '在你的身边',
            artist: '盛哲',
            url: 'https://link.hhtjim.com/163/475479888.mp3',
            cover: 'http://p1.music.126.net/AYNBdRxJ8EdZo4xFjp7b4Q==/109951163191178425.jpg?param=130y130'
          },
          {
            name: '唯一',
            artist: '告五人',
            url: 'https://music.163.com/#/song?id=1807799505',
            cover: 'http://p1.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg?param=130y130'
          },
          {
            name: '把回忆拼好给你',
            artist: '王贰浪',
            url: 'https://link.hhtjim.com/163/1403318151.mp3',
            cover: 'http://p1.music.126.net/CBx2K_jEN3SNWwYztagPPw==/109951164485969446.jpg?param=130y130'
          }
        ]
      });
    }
  })();